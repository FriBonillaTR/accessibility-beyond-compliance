import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { SplitterOrientation } from './splitter.options.js';
/**
 * A class for Splitter
 */
export declare class Splitter extends FASTElement {
    /**
     * 'Screen reader title for splitter indicator.
     * @public
     */
    srOnlyTitle: string;
    /**
     * Initial Size for splitter in percentage.
     * @public
     */
    initialSize?: number;
    /**
     * Whether or not primary panel should be scrollable.
     * @public
     */
    scrollablePrimary: boolean;
    /**
     * Whether or not secondary panel should be scrollable.
     * @public
     */
    scrollableSecondary: boolean;
    /**
     * Tracking the changes from the initialSize
     *
     */
    initialSizeChanged(prev?: number, next?: number): void;
    /**
     * Controls the visual orientation of the splitter.
     * @public
     */
    orientation: SplitterOrientation;
    /**
     * Tooltip text for splitter.
     * @public
     */
    tooltipText: string;
    valuenow: string;
    /**
     * Current value of the width in percentage 0 - 100
     * @public
     */
    width: string;
    widthChanged(): void;
    isHorizontal: () => boolean;
    private sizeChanged;
    private primaryChild;
    private secondaryChild;
    private handle;
    private isDragging;
    private startSize;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Change splitter width
     * @public
     * @param {number} percentageSize - percentage number between 0 and 100%
     */
    changeSplitterSize(percentageSize: number, emitEvent?: boolean): void;
    /**
     * Set primary and secondary slots
     */
    private processChildren;
    /**
     * Sets size of primary section of splitter with given percentage
     */
    private setSplitterSize;
    /**
     * Increase or decrease the primary panel size
     */
    private keyDownHandler;
    private setValueNow;
    private getNextValue;
    private getNextEvent;
    /**
     * Handle arrow key events
     */
    private isValidEl;
    protected onKeyDown: (e: KeyboardEvent) => void;
    /**
     * Set flex basis
     */
    private setFlexBasis;
    private setStartSize;
}
