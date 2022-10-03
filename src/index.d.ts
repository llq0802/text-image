export declare function createTextImage(options: TextImageOption): Promise<{
    start(): void;
    stop(): void;
}>;
export interface TextImageOption {
    canvas: HTMLCanvasElement;
    replaceText?: string;
    raduis?: number;
    source: any;
    isDynamic?: boolean;
    isGray?: boolean;
}
