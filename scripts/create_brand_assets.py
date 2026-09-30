from pathlib import Path

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "public" / "brand"
MASTER = BRAND / "logo-eea-master.png"


def contain(image: Image.Image, size: int, padding: int = 0) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    usable = size - (padding * 2)
    copy = image.copy()
    copy.thumbnail((usable, usable), Image.Resampling.LANCZOS)
    x = (size - copy.width) // 2
    y = (size - copy.height) // 2
    canvas.alpha_composite(copy, (x, y))
    return canvas


def main() -> None:
    logo = Image.open(MASTER).convert("RGBA")
    logo = logo.filter(ImageFilter.UnsharpMask(radius=0.7, percent=115, threshold=2))

    contain(logo, 768, 24).save(BRAND / "logo-eea.png", optimize=True)
    contain(logo, 128, 4).save(BRAND / "logo-eea-small.png", optimize=True)

    # The favicon keeps the complete mark on its brand-yellow field.
    favicon = Image.new("RGBA", (512, 512), (255, 218, 0, 255))
    favicon.alpha_composite(contain(logo, 512, 24))
    favicon.save(BRAND / "favicon.png", optimize=True)
    favicon.resize((180, 180), Image.Resampling.LANCZOS).save(
        BRAND / "apple-touch-icon.png", optimize=True
    )
    favicon.resize((32, 32), Image.Resampling.LANCZOS).save(
        BRAND / "favicon-32.png", optimize=True
    )


if __name__ == "__main__":
    main()
