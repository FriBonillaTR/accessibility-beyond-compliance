import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ComponentDensity } from '../../utils/index.js';
import { HeaderBackground } from './table.options.js';
/**
 * A class for Table
 */
export declare class Table extends FASTElement {
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls zebra striping, which alternates background colors in every other row.
     *
     * @public
     */
    alternatingRows: boolean;
    /**
     * Determines if vertical column borders will be visible.
     *
     * @public
     */
    inlineBorders: boolean;
    /**
     * Used to change the background of the table header.
     *
     * @public
     */
    headerBackground: HeaderBackground;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
