import { BaseSource } from './BaseSource';
export declare class TextSource extends BaseSource {
    option: TextSourceOption;
    constructor(option: TextSourceOption);
    protected initCanvas(): void;
    protected draw(): void;
}
export declare type TextSourceOption = {
    text: string;
    fontSize: number;
    fontFamily: string;
};
