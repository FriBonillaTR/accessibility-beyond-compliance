import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { IconAppearance, IconColor } from './icon.options.js';
/**
 * A class for Icon
 */
export declare class Icon extends FASTElement {
    /**
     * The appearance of the icon. This will be applied to the `fa-` class. `light`, `solid`, `brands`. When `light` or `solid` is selected, `fa-` and `fa-sharp` classes will be added.
     *
     * @public
     */
    appearance: IconAppearance;
    /**
     * The font awesome icon name value indicated by the `icon-name` attribute. This will be applied to the `fa-` class.
     * @public
     */
    iconName: string;
    /**
     * The size in pixels of the icon. This only applies to SVG icons.
     * @defaultValue 16
     * @public
     */
    size: number;
    sizeChanged(): void;
    /**
     * Determines the unit of the size attribute.
     *
     * @public
     */
    sizeUnit: 'em' | 'px' | 'rem';
    /**
     * Color of the icon. Uses `currentColor` to inherit the parent value by default. Override with a CSS value like keyword, HEX, RGB, RGBA, HSL, HSLA.
     * @public
     */
    color: string;
    colorChanged(): void;
    private iconSizeStyles;
    private iconColorStyles;
    /**
     *
     * @public
     * HTML Attribute: color
     */
    colorType: IconColor;
    /**
     * Identifies the element (or elements) that labels the current element.
     *
     * @public
     */
    ariaLabelledBy: string;
    /**
     * Defines a string value that labels the current element.
     * @public
     */
    ariaLabel: string;
    /**
     * Controls the `role` and `aria-hidden` attributes
     * If set to `true`, `role` will be set to `presentation`, and `aria-hidden` will be set to `true`
     * If set to `false`, `role` will be set to `img`, and `aria-hidden` will be set to `false`
     *
     * @a11y
     * @public
     */
    presentation: boolean;
}
