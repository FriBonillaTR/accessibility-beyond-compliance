/**
 * Appearance Values
 *
 * @public
 */
export declare const FileUploadStatusEnum: {
    readonly paused: "paused";
    readonly info: "info";
    readonly error: "error";
    readonly success: "success";
    readonly warning: "warning";
};
/**
 * Text for Appearance Values
 *
 * @public
 */
export type FileUploadStatus = (typeof FileUploadStatusEnum)[keyof typeof FileUploadStatusEnum];
