export declare class Bitmap {
    width: number;
    height: number;
    pixels: Uint8ClampedArray;
    constructor(width: number, height: number, pixels: Uint8ClampedArray);
    getPixelAt(x: number, y: number): [number, number, number, number];
}
