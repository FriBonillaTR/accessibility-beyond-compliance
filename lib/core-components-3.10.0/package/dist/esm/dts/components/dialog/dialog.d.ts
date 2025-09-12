import { DialogBase } from './dialogBase.js';
/**
 * A class derived from the Dialog foundation component
 */
export declare class Dialog extends DialogBase {
    /**
     * Use to label the dialog if it does not have a title.
     *
     * @a11y
     * @public
     */
    a11yAriaLabel: string;
    /**
     * The aria-label for the close button.
     *
     * @a11y
     * @public
     */
    closeAriaLabel: string;
    /**
     * Determines whether dialog is an alert with `role="alertdialog"`.
     *
     * @public
     */
    isAlert: boolean;
    /**
     * Determines whether header appears in dialog.
     *
     * @public
     */
    isHeader: boolean;
    /**
     * Determines whether footer appears in dialog.
     *
     * @public
     */
    isFooter: boolean;
    /**
     * The title of the dialog.
     *
     * @public
     */
    dialogTitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
     *
     * @public
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Dialog subtitle heading
     *
     * @public
     */
    dialogSubtitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the subtitle element.
     *
     * @public
     */
    ariaSubtitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal overlay. Clicks on the overlay will cause the dialog to emit a "dismiss" event.
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
    hide(): void;
    show(): void;
    /**
     * Indicates whether or not the dialog should trap focus.
     */
    noFocusTrap: boolean;
    protected noFocusTrapChanged: () => void;
}
