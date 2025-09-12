import { DrawerPlacement } from './drawer.options.js';
import { DialogBase } from '../dialog/dialogBase.js';
export declare class Drawer extends DialogBase {
    /**
     * The aria label for screen reader saf-sr-only element in the close icon button.
     *
     * @a11y
     * @public
     */
    closeAriaLabel: string;
    /**
     * Determines whether header appears in the drawer.
     *
     * @public
     */
    isHeader: boolean;
    /**
     * Determines whether footer appears in the drawer.
     *
     * @public
     */
    isFooter: boolean;
    /**
     * Drawer title heading
     *
     * @public
     */
    drawerTitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
     *
     * @public
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Drawer subtitle heading
     *
     * @public
     */
    drawerSubtitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
     *
     * @public
     */
    ariaSubtitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal overlay.  Clicks on the overlay will cause the drawer to emit a "dismiss" event.
     *
     * @public
     */
    modal: boolean;
    /**
     * The hidden state of the element.
     *
     * @public
     */
    hidden: boolean;
    /**
     * Determines the drawer placement.
     *
     * @public
     */
    placement: DrawerPlacement;
    /**
     * Attribute used to pass aria label to drawer when a drawer-title is not present.
     *
     * @public
     */
    a11yAriaLabel: string;
    ariaLabelledbyIds(): string | undefined;
    protected get closeButtonElement(): Element | null | undefined;
    protected get titleElement(): Element | null | undefined;
    protected get isHidden(): boolean;
    protected set isHidden(value: boolean);
    protected get hideStateAttribute(): string;
    protected get isModal(): boolean;
    protected get hasCancelEvent(): boolean;
    protected get openEventName(): string;
    protected get hideEventName(): string;
    protected get preventTriggerFocus(): boolean;
    show(): void;
    hide(): void;
    dismiss(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleKeyDown;
    /**
     * Indicates whether or not the drawer should trap focus.
     */
    noFocusTrap: boolean;
    protected noFocusTrapChanged: () => void;
}
