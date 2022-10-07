import { BaseSource } from './BaseSource';
export declare class ImgSource extends BaseSource {
    img: HTMLImageElement;
    width: number;
    height: number;
    constructor(option: ImgSourceOption);
    protected initCanvas(): void;
    protected draw(): void;
}
export declare type ImgSourceOption = {
    img: HTMLImageElement;
    width: number;
    height: number;
};
