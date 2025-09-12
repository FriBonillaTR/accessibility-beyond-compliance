import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A Dialog Custom HTML Element, based on FASTDialog class.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#dialog | ARIA dialog }.
 *
 * @slot - The default slot for the dialog content
 * @csspart positioning-region - A wrapping element used to center the dialog and position the modal overlay
 * @csspart overlay - The modal dialog overlay
 * @csspart control - The dialog element
 * @fires cancel - Fires a custom 'cancel' event when the modal overlay is clicked
 * @fires close - Fires a custom 'close' event when the dialog is hidden
 *
 * @public
 */
export declare abstract class DialogBase extends FASTElement {
    /**
     * The id of the trigger element, so the focus can return to this element when the dialog is closed.
     *
     * @public
     */
    triggerId: string;
    /**
     * Indicates whether or not the component should trap focus.
     * @remarks
     * Dialog and drawer trap focus by default, but have attribute to disable it.
     * Side-nav traps focus only when in fullscreen mode.
     * @public
     */
    abstract get noFocusTrap(): boolean;
    /**
     * The method to show the dialog.
     * Basic functionality for showing the dialog.
     * Inheriting classes are expected to implement the show() function
     * either by using this logic (Dialog/Drawer), or overriding it (SideNav)
     *
     * @public
     * @protected
     */
    protected _show(): void;
    /**
     * The method to hide the dialog.
     * Basic functionality for hiding the dialog.
     * Inheriting classes are expected to implement the hide() function
     * either by using this logic (Dialog/Drawer), or overriding it (SideNav)
     *
     * @public
     * @protected
     */
    protected _hide(): void;
    protected handleDocumentKeydown: (e: KeyboardEvent) => void;
    protected handleDocumentFocus(e: Event): void;
    protected handleTabKeyDown(e: KeyboardEvent): void;
    protected getTabQueueBounds(): (HTMLElement | SVGElement)[];
    /**
     * Should be active trapping focus
     */
    protected shouldTrapFocus(): boolean;
}
