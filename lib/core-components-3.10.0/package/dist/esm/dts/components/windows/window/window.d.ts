import { Tab } from '../../tabs/tab/tab.js';
/**
 * A class derived from the Tab foundation component
 */
export declare class Window extends Tab {
    /**
     * The accessible label for the close button.
     * @public
     * @a11y
     * @remarks The label for the close button
     */
    closeAriaLabel: string;
    /**
     * Indicates whether the window has close button.
     * @public
     * @remarks Indicates whether the window is closeable
     */
    closeable: boolean;
    /**
     * The value of the `aria-selected` attribute for the window.
     * @public
     * @remarks This attribute indicates whether the window is selected or not.
     */
    ariaSelectedAttr: string | null;
    /**
     * The tab index prop for the window.
     * @public
     * @remarks
     * A negative value (typically -1) removes the element from the tab order, making it focusable only programmatically.
     */
    tabIndexProp: number;
    /**
     * The tab index property for the window.
     * @public
     * @remarks This property indicates the tab index of the window element.
     */
    tabIndexAttr: string | null;
    /**
     * Emits a custom 'close' event when the window close button is clicked
     * @public
     * @remarks Fired when the window closed
     */
    close(): void;
    setAttribute(qualifiedName: string, value: string): void;
    getAttribute(qualifiedName: string): string | null;
    hasAttribute(qualifiedName: string): boolean;
    removeAttribute(qualifiedName: string): void;
}
