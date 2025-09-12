import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { BadgeAppearance } from './badge.options.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * A Badge Custom HTML Element.
 * @slot start - Content which can be provided before the default slot
 * @slot end - Content which can be provided after the default slot
 * @slot - The default slot for the badge
 * @csspart control - The element wrapping the default slot
 *
 * @public
 */
export declare class Badge extends FASTElement {
    /**
     * Determines if the badge is attached to its parent.
     *
     * @public
     */
    attached: boolean;
    /**
     * If true, the badge will render a smaller variant meant to be used as a counter.
     *
     * @public
     */
    counter: boolean;
    /**
     * Determines the appearance of the badge.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: BadgeAppearance;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}
export interface Badge extends StartEnd {
}
