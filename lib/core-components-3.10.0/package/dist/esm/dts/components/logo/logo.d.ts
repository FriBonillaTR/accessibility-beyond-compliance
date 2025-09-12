import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { LogoAppearance } from './logo.options.js';
/**
 * A class for Logo
 */
export declare class Logo extends FASTElement {
    /**
     * Determines the visual appearance of the logo.
     *
     * @public
     */
    appearance: LogoAppearance;
    /**
     * Text for the product name.
     *
     * @public
     */
    productName: string;
}
