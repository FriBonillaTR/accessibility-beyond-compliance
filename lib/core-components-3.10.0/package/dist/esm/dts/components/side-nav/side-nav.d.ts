import { DialogBase } from '../dialog/dialogBase.js';
import { SideNavState } from './side-nav.options.js';
/**
 * A class for Sidebar navigation
 */
export declare class SideNav extends DialogBase {
    /**
     * Tracks most recently active index;
     * initializes to 0 and changes on click
     */
    activeIndex: number;
    protected itemsChanged(_oldValue: HTMLElement[], _newValue: HTMLElement[]): void;
    /**
     * @public
     * @remarks - Title in the header of side-nav, used to set aria-labelledBy if no aria-label is set
     */
    titleNodes: HTMLElement[];
    /**
     * Whether the side nav is expanded or collapsed.
     *
     * @public
     */
    state: SideNavState;
    /**
     * The `icon-name` for the expand button when side nav is open.
     * @public
     */
    openIconName: string;
    /**
     * The `icon-name` for the expand button when side nav is closed.
     * @public
     */
    closeIconName: string;
    /**
     * Defines a string value that labels the current element.
     * @public
     */
    ariaLabel: string;
    /**
     * The label for the expand button when side nav is open.
     * @public
     */
    closeAriaLabel: string;
    /**
     * The label for the expand button when side nav is closed.
     * @public
     */
    openAriaLabel: string;
    /**
     * Reflects the value of aria-expanded
     * @public
     */
    ariaExpanded: 'false' | 'true';
    protected menuItems: Element[] | undefined;
    private menuFocusIndex;
    private static readonly menuFocusableElementRoles;
    private resizeObserver;
    private adaptiveBreakpoint;
    constructor();
    private _resizeTimeout;
    private handleResize;
    /**
     * Determines if the sidenav is adaptive
     * @public
     */
    fullscreen: boolean;
    /**
     * The method to open/expand the side-nav
     * @public
     */
    open(): void;
    /**
     * The method to close/collapse the side-nav
     * @public
     */
    close(): void;
    showHideTooltip(): void;
    showHideIcon(): void;
    private getAnimationDurationMs;
    /**
     * @public
     * @remarks Identifies which menu item was clicked,
     */
    handleClick(e: MouseEvent): boolean;
    /**
     * @public
     * @param element - event.target of keydown or click event
     * Updates the selected item index and toggles selected icon styles
     */
    updateSelectedItem(element: HTMLElement): void;
    protected setItems(): void;
    /**
     * Check if the item is a menu item
     */
    protected isMenuItemElement: (el: Element) => el is HTMLElement;
    /**
     * Check if the item is focusable
     */
    private readonly focusableElement;
    private setMenuFocus;
    protected get closeButtonElement(): Element | null | undefined;
    protected get titleElement(): Element | null | undefined;
    protected get isHidden(): boolean;
    protected set isHidden(value: boolean);
    protected get hideStateAttribute(): string;
    protected get isModal(): boolean;
    protected get hasCancelEvent(): boolean;
    protected get openEventName(): string;
    protected get hideEventName(): string;
    get noFocusTrap(): boolean;
    get preventTriggerFocus(): boolean;
    protected initialize(): void;
    protected destroy(): void;
    show(): void;
    hide(): void;
}
