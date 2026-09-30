"""Create lightweight browser assets while retaining the original source images."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]


def make_webp(source: Path, quality: int = 82, max_width: int | None = None) -> None:
    with Image.open(source) as image:
        output = image.convert("RGB")
        if max_width and output.width > max_width:
            output.thumbnail((max_width, output.height), Image.Resampling.LANCZOS)
        output.save(source.with_suffix(".webp"), "WEBP", quality=quality, method=6)


def main() -> None:
    brand = ROOT / "public/brand"
    with Image.open(brand / "logo-eea.png") as image:
        small = image.convert("RGBA")
        small.thumbnail((128, 128), Image.Resampling.LANCZOS)
        small.save(brand / "logo-eea-small.webp", "WEBP", lossless=True, method=6)

    for name in (
        "brochure-p01-01.jpg",
        "brochure-p05-01.jpg",
        "document-01.png",
        "document-02.png",
    ):
        make_webp(ROOT / "public/images/source" / name, quality=78, max_width=800 if name == "brochure-p05-01.jpg" else None)
    for source in (ROOT / "public/images/projects").glob("*.jpg"):
        make_webp(source)


if __name__ == "__main__":
    main()
