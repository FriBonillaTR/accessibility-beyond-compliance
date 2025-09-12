/**
 * Step status
 *
 * @public
 */
export declare const StepStatusEnum: {
    readonly active: "active";
    readonly completed: "completed";
    readonly inactive: "inactive";
};
/**
 * Type for step status type values.
 *
 * @public
 */
export type StepStatus = (typeof StepStatusEnum)[keyof typeof StepStatusEnum];
