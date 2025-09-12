import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import type { LayoutGridItemSize } from './layout-grid-item.options.js';
export declare class LayoutGridItem extends FASTElement {
    /**
     * Auto height for the grid-item to allow it to grow to the tallest grid-item in the row.
     * @public
     */
    autoHeight: boolean;
    /**
     * Justify the grid-item horizontally. Styling default is `start`.
     * @public
     */
    justifyContent: 'start' | 'center' | 'end';
    /**
     * The number of columns the grid column should span at the `xs` breakpoint
     * @public
     */
    xs: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `sm` breakpoint
     * @public
     */
    sm: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `md` breakpoint
     * @public
     */
    md: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `lg` breakpoint
     * @public
     */
    lg: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xl` breakpoint
     * @public
     */
    xl: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xxl` breakpoint
     * @public
     */
    xxl: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xxxl` breakpoint
     * @public
     */
    xxxl: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xxxxl` breakpoint
     * @public
     */
    xxxxl: LayoutGridItemSize;
}
