import type { AugmentClassEvents } from '../../utils/types.js';
import { FileUpload } from './file-upload.js';
declare const SafFileUpload: () => typeof FileUpload;
export default SafFileUpload;
export type SafFileUploadInstance = AugmentClassEvents<FileUpload>;
