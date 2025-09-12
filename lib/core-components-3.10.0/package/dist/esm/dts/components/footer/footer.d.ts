import { FASTElement } from '../../@microsoft/fast-element/index.js';
export declare class Footer extends FASTElement {
    /**
     * The name of the product.
     * @public
     */
    productName: string;
    /**
     * The aria label for the anchor group section. This appears on the `nav` element for anchor group links.
     * @public
     */
    a11yAriaLabelAnchorGroup: string;
    /**
     * The aria label for the social icons section. This appears on the `nav` element for social icons.
     * @public
     */
    a11yAriaLabelSocialIcons: string;
    /**
     * Gets the current year as a string.
     * This property is marked as volatile, meaning it may change frequently.
     * @public
     * @returns {string} The current year.
     */
    get currentYear(): string;
}
