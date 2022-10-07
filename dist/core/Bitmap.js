export class Bitmap {
    width;
    height;
    pixels;
    constructor(width, height, pixels) {
        this.width = width;
        this.height = height;
        this.pixels = pixels;
    }
    getPixelAt(x, y) {
        const i = y * this.width * 4 + x * 4;
        return [
            this.pixels[i],
            this.pixels[i + 1],
            this.pixels[i + 2],
            +(this.pixels[i + 3] / 255).toFixed(2),
        ];
    }
}
