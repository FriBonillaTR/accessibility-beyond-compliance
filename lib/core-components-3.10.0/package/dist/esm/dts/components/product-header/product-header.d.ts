import { FASTElement } from '../../@microsoft/fast-element/index.js';
/**
 * A class for ProductHeader
 */
export declare class ProductHeader extends FASTElement {
    /**
     * The text of `aria-label` for the global navigation (right).
     *
     * @public
     * @a11y
     */
    globalAriaLabel: string;
    /**
     * The text of `aria-label` for the product navigation (left).
     *
     * @public
     * @a11y
     */
    tasksAriaLabel: string;
    isMenuOpen: boolean;
    _showDivider: boolean;
    _hasMenuItems: boolean;
    prodHeaderMenuItems: HTMLElement[];
    menuButton: HTMLElement;
    anchoredRegion: HTMLElement;
    /**
     * Define the components that should receive the header-item attribute
     */
    private readonly productHeaderItems;
    private addProductHeaderItemAttribute;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private checkMenuItems;
    private checkDivider;
    private checkLogo;
    handleClickOutside(event: any): void;
    handleButtonKeyDown(event: any): true | undefined;
    removeSelectedClass(): void;
    handleBackgroundKeyDown(event: any): true | undefined;
    handleMenuButtonClick(): void;
    private closeMenu;
}
