/**
 * An object representing the available sizes for the Metadata component.
 *
 * @remarks
 * This object is a constant that contains the available size options for the Metadata component.
 *
 * @public
 */
export declare const MetadataSizeEnum: {
    readonly small: "sm";
    readonly xSmall: "xs";
};
/**
 * A union type representing the available size values for the Metadata component.
 *
 * @public
 */
export type MetadataSize = (typeof MetadataSizeEnum)[keyof typeof MetadataSizeEnum];
