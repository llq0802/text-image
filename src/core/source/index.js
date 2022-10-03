import { BaseSource } from './BaseSource';
import { ImgSource } from './ImgSource';
import { TextSource } from './TextSource';
import { VideoSource } from './VideoSource';
export { BaseSource };
export function createSource(sourceOption) {
    if (sourceOption.text) {
        return new TextSource(sourceOption);
    }
    else if (sourceOption.img) {
        return new ImgSource(sourceOption);
    }
    else if (sourceOption.video) {
        return new VideoSource(sourceOption);
    }
    throw new TypeError('invalid source options');
}
