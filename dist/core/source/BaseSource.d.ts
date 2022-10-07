import { Bitmap } from '../Bitmap';
export declare abstract class BaseSource {
    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    private isInit;
    protected abstract initCanvas(): void;
    protected abstract draw(): void;
    constructor();
    private init;
    getBitmap(): Bitmap;
}
