export declare const StatusTypeEnum: {
    readonly PAUSED: "paused";
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly WARNING: "warning";
};
export type StatusType = (typeof StatusTypeEnum)[keyof typeof StatusTypeEnum];
