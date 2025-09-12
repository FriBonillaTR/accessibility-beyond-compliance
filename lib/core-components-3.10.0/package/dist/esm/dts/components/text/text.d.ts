import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { TextAppearance } from './text.options.js';
import { ComponentDensity } from '../../utils/index.js';
/**
 * A class for Text
 */
export declare class Text extends FASTElement {
    /**
     * Applies the visual style of the text.
     *
     * @public
     */
    appearance: TextAppearance;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}
