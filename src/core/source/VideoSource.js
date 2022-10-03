import { BaseSource } from './BaseSource';
export class VideoSource extends BaseSource {
    video;
    width;
    height;
    constructor(option) {
        super();
        this.video = option.video;
        this.width = option.width;
        this.height = option.height;
        this.video.muted = this.video.loop = true;
        this.video.play();
    }
    initCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    draw() {
        this.ctx.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight, 0, 0, this.width, this.height);
    }
}
