import { Anchor } from '../../anchor/anchor.js';
/**
 * A Breadcrumb Item Custom HTML Element.
 *
 * @slot start - Content which can be provided before the breadcrumb content
 * @slot end - Content which can be provided after the breadcrumb content
 * @slot - The default slot for when no href is provided or for providing your own custom elements
 * @slot separator - The slot for providing a custom separator
 * @csspart listitem - The wrapping container for the item, represents a semantic listitem
 * @csspart separator - The wrapping element for the separator
 *
 * @public
 */
export declare class BreadcrumbItem extends Anchor {
    /**
     * A description for the anchor that is only visible to screen readers, passed to a hidden span element, connected to the anchor via aria-describedby
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
}
