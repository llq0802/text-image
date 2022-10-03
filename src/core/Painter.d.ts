import { BaseSource } from './source';
export declare type PainterOptions = {
    canvas: HTMLCanvasElement;
    replaceText: string;
    raduis: number;
    source: BaseSource;
    isDynamic: boolean;
    isGray: boolean;
};
export declare class Painter {
    private replaceText;
    private raduis;
    private source;
    private isDynamic;
    private canvas;
    private ctx;
    private textIndex;
    private isGray;
    private raqId;
    constructor(options: PainterOptions);
    fps(): void;
    stop(): void;
    private initContext;
    private drawText;
    private draw;
}
