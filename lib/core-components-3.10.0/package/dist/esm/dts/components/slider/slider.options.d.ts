/**
 * The selection modes of a {@link @saffron/core-components#(Slider:class)}.
 * @public
 */
export declare const SliderModeEnum: {
    readonly singleValue: "single-value";
};
/**
 * The types for the selection mode of the slider
 * @public
 */
export type SliderMode = (typeof SliderModeEnum)[keyof typeof SliderModeEnum];
