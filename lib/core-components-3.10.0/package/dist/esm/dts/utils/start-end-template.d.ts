import type { CaptureType } from '../@microsoft/fast-element/index.js';
/**
 * A mixin class implementing start and end slots.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
export declare class StartEnd {
}
/**
 * The template for the end slot.
 * For use with {@link StartEnd}
 *
 * @public
 */
export declare function endSlotTemplate<TSource = any, TParent = any>(): CaptureType<TSource, TParent>;
/**
 * The template for the start slots.
 * For use with {@link StartEnd}
 *
 * @public
 */
export declare function startSlotTemplate<TSource = any, TParent = any>(): CaptureType<TSource, TParent>;
