import { BaseSource } from './BaseSource';
import { ImgSourceOption } from './ImgSource';
import { TextSourceOption } from './TextSource';
import { VideoSourceOption } from './VideoSource';
export { BaseSource };
export type { TextSourceOption };
export type { ImgSourceOption };
export type { VideoSourceOption };
export declare function createSource(sourceOption: TextSourceOption | ImgSourceOption | VideoSourceOption): BaseSource;
