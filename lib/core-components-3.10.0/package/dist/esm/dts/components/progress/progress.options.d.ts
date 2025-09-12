export declare const ProgressStatusEnum: {
    readonly ERROR: "error";
    readonly LOADING: "loading";
    readonly PAUSED: "paused";
    readonly SUCCESS: "success";
};
export type ProgressStatus = (typeof ProgressStatusEnum)[keyof typeof ProgressStatusEnum];
