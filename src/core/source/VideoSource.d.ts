import { BaseSource } from './BaseSource';
export declare class VideoSource extends BaseSource {
    video: HTMLVideoElement;
    width: number;
    height: number;
    constructor(option: VideoSourceOption);
    protected initCanvas(): void;
    protected draw(): void;
}
export declare type VideoSourceOption = {
    video: HTMLVideoElement;
    width: number;
    height: number;
};
