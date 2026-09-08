from pathlib import Path
from zipfile import ZipFile
from io import BytesIO

from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "images" / "source"
OUTPUT.mkdir(parents=True, exist_ok=True)
PROJECT_OUTPUT = ROOT / "public" / "images" / "projects"
PROJECT_OUTPUT.mkdir(parents=True, exist_ok=True)


def save_image(data: bytes, stem: str) -> None:
    try:
        image = Image.open(BytesIO(data))
        image.load()
        if image.width < 120 or image.height < 80:
            return
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        suffix = ".png" if image.mode == "RGBA" else ".jpg"
        output = OUTPUT / f"{stem}{suffix}"
        if suffix == ".jpg":
            image.save(output, quality=88, optimize=True)
        else:
            image.save(output, optimize=True)
        print(f"{output.relative_to(ROOT)} {image.width}x{image.height}")
    except Exception as exc:
        print(f"Skipped {stem}: {exc}")


def extract_pdf() -> None:
    reader = PdfReader(ROOT / "Brochure eea.pdf")
    seen = set()
    for page_number, page in enumerate(reader.pages, start=1):
        for image_number, image_file in enumerate(page.images, start=1):
            digest = hash(image_file.data)
            if digest in seen:
                continue
            seen.add(digest)
            save_image(image_file.data, f"brochure-p{page_number:02d}-{image_number:02d}")


def extract_docx() -> None:
    docx_files = list(Path("/private/tmp/eea-source/doc").glob("*.docx"))
    if not docx_files:
        raise FileNotFoundError("Converted DOCX not found")
    with ZipFile(docx_files[0]) as archive:
        media = sorted(name for name in archive.namelist() if name.startswith("word/media/"))
        for index, name in enumerate(media, start=1):
            save_image(archive.read(name), f"document-{index:02d}")


def crop_projects() -> None:
    crops = {
        "hotel-dann-carlton-medellin": (2, 184, 212, 590, 484),
        "hospital-san-vicente-rionegro": (2, 628, 212, 1038, 484),
        "hotel-dann-carlton-barranquilla": (2, 184, 540, 590, 808),
        "hospital-general-medellin": (2, 628, 540, 1038, 808),
        "hotel-pavillon-bogota": (2, 184, 862, 590, 1167),
        "hospital-pablo-tobon-uribe": (2, 628, 862, 1038, 1167),
        "hotel-estelar-milla-de-oro": (2, 184, 1222, 590, 1528),
        "clinica-policia-envigado": (2, 628, 1222, 1038, 1528),
        "edificio-ankara-bogota": (3, 184, 214, 590, 483),
        "hermanas-capuchinas-medellin": (3, 628, 214, 1038, 483),
        "parque-musica-barquisimeto": (3, 184, 538, 590, 808),
        "colegio-anunciacion-medellin": (3, 628, 538, 1038, 808),
        "sierras-del-este-bogota": (3, 184, 860, 590, 1168),
        "instituto-sagrado-corazon-manizales": (3, 628, 860, 1038, 1168),
        "casa-santo-domingo-baru": (3, 184, 1220, 590, 1528),
        "colegio-san-ignacio-medellin": (3, 628, 1220, 1038, 1528),
        "polideportivo-universidad-andes": (4, 184, 212, 590, 485),
        "polideportivo-sur-envigado": (4, 184, 556, 590, 826),
        "piso-radiante": (4, 628, 862, 1038, 1168),
        "sistema-climatizacion": (4, 628, 1214, 1038, 1508),
    }
    for slug, (page, left, top, right, bottom) in crops.items():
        source = OUTPUT / f"brochure-p{page:02d}-01.jpg"
        image = Image.open(source).convert("RGB")
        crop = image.crop((left, top, right, bottom))
        crop.save(PROJECT_OUTPUT / f"{slug}.jpg", quality=90, optimize=True)
        print(f"public/images/projects/{slug}.jpg {crop.width}x{crop.height}")


if __name__ == "__main__":
    extract_pdf()
    extract_docx()
    crop_projects()
