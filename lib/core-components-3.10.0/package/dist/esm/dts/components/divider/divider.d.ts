import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Orientation } from '@microsoft/fast-web-utilities';
import { DividerRole } from './divider.options.js';
/**
 * A Divider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#separator | ARIA separator }
 * or {@link https://www.w3.org/TR/wai-aria-1.1/#presentation | ARIA presentation}.
 *
 * @public
 */
export declare class Divider extends FASTElement {
    /**
     * The permitted roles of the divider.
     *
     * @public
     * @remarks
     * HTML Attribute: role
     */
    role: DividerRole;
    /**
     * The orientation of the divider.
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
}
