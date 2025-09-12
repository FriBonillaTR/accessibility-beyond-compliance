import { FASTElement, ViewTemplate } from '../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import type { AnchorTarget } from './anchor.options.js';
import { AnchorAppearance } from './anchor.options.js';
import { ComponentDensityWithExtraCompact } from '../../utils/index.js';
export declare type AnchorOptions = {
    tag?: 'a' | 'span';
    children?: ViewTemplate;
};
/**
 * An Anchor Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element }.
 *
 * @slot start - Content which can be provided before the anchor content
 * @slot end - Content which can be provided after the anchor content
 * @slot - The default slot for anchor content
 * @csspart control - The anchor element
 * @csspart content - The element wrapping anchor content
 *
 * @public
 */
export declare class AnchorBase extends FASTElement {
    /**
     * Prompts the user to save the linked URL.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: download
     */
    download: string;
    /**
     * The URL the hyperlink references.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @public
     * @remarks
     * HTML Attribute: href
     */
    href: string;
    /**
     * Hints at the language of the referenced resource.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @public
     * @remarks
     * HTML Attribute: hreflang
     */
    hreflang: string;
    /**
     * A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: ping
     */
    ping: string;
    /**
     * Determines how much of the referrer to send when following the link.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: referrerpolicy
     */
    referrerpolicy: string;
    /**
     * The relationship of the linked URL as space-separated link types.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: rel
     */
    rel: string;
    /**
     * Determines where a link will open in browsing context.
     * @public
     * @defaultValue _blank
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: target
     */
    target: AnchorTarget;
    /**
     * Hints at the linked URL's format with a MIME type. No built-in functionality.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: type
     */
    type: string;
    /**
     * A description for the anchor that is only visible to screen readers.
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Indicates the element that represents the current item within a container or set of related elements.
     *
     * @public
     */
    a11yAriaCurrent: 'page' | 'step' | 'location' | 'date' | 'time' | true | false | string | undefined;
}
export declare class Anchor extends AnchorBase {
    /**
     * `deprecated`. Handle click events instead.
     * TODO: Remove in v4
     * @public
     * @deprecated
     */
    transferFocus: boolean;
    /**
     * If true, the anchor will be rendered as a span element instead of an anchor element. Useful for integrating with SPA links like `react-router-dom`.
     *
     * @public
     */
    span: boolean;
    /**
     * The appearance style variant of the anchor.
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance?: AnchorAppearance;
    /**
     * The density of the anchor when using a CTA appearance.
     * Only applies when appearance is set to a CTA variant.
     * @public
     * @remarks
     * HTML Attribute: density
     */
    density?: ComponentDensityWithExtraCompact;
    /**
     * Indicates the anchor should be rendered as icon-only
     *
     * @public
     * @remarks
     * HTML Attribute: icon-only
     */
    iconOnly: boolean;
    transferFocusChanged(prev: boolean | undefined, next: boolean): void;
    protected transferFocusHandler: (e: MouseEvent | KeyboardEvent) => void;
    isKeyboardEvent(e: Event): e is KeyboardEvent;
}
/**
 * Includes ARIA states and properties relating to the ARIA link role
 *
 * @public
 */
export declare class DelegatesARIALink {
    /**
     * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
     * @public
     * @remarks
     * @see {@link https://www.w3.org/WAI/PF/aria/roles#link} for more information
     * HTML Attribute: aria-expanded
     */
    ariaExpanded: 'true' | 'false' | string | null;
}
export interface DelegatesARIALink extends ARIAGlobalStatesAndProperties {
}
export interface AnchorBase extends DelegatesARIALink {
}
export interface Anchor extends StartEnd, DelegatesARIALink {
}
