/**
 * Appearance Values
 *
 * @public
 */
export declare const TextAppearanceEnum: {
    readonly displayLg: "display-lg";
    readonly displaySm: "display-sm";
    readonly heading4xl: "heading-4xl";
    readonly heading3xl: "heading-3xl";
    readonly heading2xl: "heading-2xl";
    readonly headingXl: "heading-xl";
    readonly headingLg: "heading-lg";
    readonly headingMd: "heading-md";
    readonly bodyDefaultLg: "body-default-lg";
    readonly bodyStrongLg: "body-strong-lg";
    readonly bodyDefaultMd: "body-default-md";
    readonly bodyStrongMd: "body-strong-md";
    readonly bodyDefaultSm: "body-default-sm";
    readonly bodyStrongSm: "body-strong-sm";
    readonly bodyDefaultXs: "body-default-xs";
    readonly bodyStrongXs: "body-strong-xs";
    readonly eyebrowHeavyMd: "eyebrow-heavy-md";
    readonly eyebrowHeavySm: "eyebrow-heavy-sm";
};
/**
 * Text for Appearance Values
 *
 * @public
 */
export type TextAppearance = (typeof TextAppearanceEnum)[keyof typeof TextAppearanceEnum];
