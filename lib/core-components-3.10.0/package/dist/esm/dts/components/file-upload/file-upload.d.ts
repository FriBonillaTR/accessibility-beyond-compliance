import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { FileUploadStatus } from './file-upload.options.js';
/**
 * A class for FileUpload
 */
export declare class FileUpload extends FASTElement {
    /**
     * The status of the file upload
     * @public
     */
    status: FileUploadStatus;
    /**
     * Name of the file(s) being uploaded
     * @public
     */
    fileName: string;
    /**
     * The progress value of the file upload.
     * @public
     */
    progressValue: number;
    /**
     * The message displayed when the file is uploaded or not.
     * @public
     */
    validationMessage: string;
    /**
     * The text describing the allowed file types.
     * @public
     */
    fileTypesText: string;
    /**
     * Provides additional instructional text that provides extra guidance for the `file upload`
     * @public
     */
    instructionalText: string;
}
