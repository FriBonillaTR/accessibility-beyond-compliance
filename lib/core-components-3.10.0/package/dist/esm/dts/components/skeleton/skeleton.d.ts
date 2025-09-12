import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { SkeletonAppearance, SkeletonBackground, SkeletonShape } from './skeleton.options.js';
/**
 * A Skeleton Custom HTML Element.
 *
 * @slot - The default slot
 *
 * @public
 */
export declare class Skeleton extends FASTElement {
    /**
     * Indicates the Skeleton should have a filled style.
     *
     * @public
     * @remarks
     * HTML Attribute: fill
     */
    fill: string;
    /**
     * Indicates what the shape of the Skeleton should be.
     *
     * @public
     * @remarks
     * HTML Attribute: shape
     */
    shape: SkeletonShape;
    /**
     * Defines the pattern URL for the skeleton.
     *
     * @public
     * @remarks
     * HTML Attribute: pattern
     */
    pattern: string;
    /**
     * Toggles the loading effect in skeleton elements.
     *
     * @public
     * @remarks
     * HTML Attribute: shimmer
     */
    shimmer: boolean;
    /**
     * Select skeleton type (eg. small, large, table)
     * @public
     */
    appearance: SkeletonAppearance;
    /**
     * Select the background type (eg. transparent or card)
     * @public
     */
    background: SkeletonBackground;
}
