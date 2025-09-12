import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../../utils/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
import { AccordionItemHeadingSize } from './accordion-item.options.js';
/**
 * A class derived from the Accordion foundation component
 */
export declare class AccordionItem extends FASTElement {
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | level} of the
     * heading element.
     *
     * @defaultValue 2
     * @public
     * @remarks
     * HTML attribute: heading-level
     */
    headinglevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Expands or collapses the item.
     *
     * @public
     * @remarks
     * HTML attribute: expanded
     */
    expanded: boolean;
    /**
     * Disables an accordion item
     *
     * @public
     * @remarks
     * HTML attribute: disabled
     */
    disabled: boolean;
    /**
     * The item ID
     *
     * @public
     * @remarks
     * HTML Attribute: id
     */
    id: string;
    /**
     * Used to change the spacing in and around the component.
     * @public
     */
    density: ComponentDensity;
    /**
     * Determines whether the heading element should fill the available width or hug its content.
     * @public
     */
    headingSize: AccordionItemHeadingSize;
    /**
     * `Deprecated`. Propagation is allowed by default.
     * @TODO: Delete attribute in v4
     * @public
     * @deprecated
     */
    allowContentPropagation: boolean;
}
export interface AccordionItem extends StartEnd {
}
