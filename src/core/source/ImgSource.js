import { BaseSource } from './BaseSource';
export class ImgSource extends BaseSource {
    img;
    width;
    height;
    constructor(option) {
        super();
        this.img = option.img;
        this.width = option.width;
        this.height = option.height;
    }
    initCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }
    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.width, this.height);
    }
}
