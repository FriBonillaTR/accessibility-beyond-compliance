import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { Orientation } from '@microsoft/fast-web-utilities';
import { StartEnd } from '../../utils/start-end-template.js';
/**
 * A Tabs Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#tablist | ARIA tablist }.
 *
 * @slot start - Content which can be provided before the tablist element
 * @slot end - Content which can be provided after the tablist element
 * @slot tab - The slot for tabs
 * @slot tabpanel - The slot for tabpanels
 * @csspart tablist - The element wrapping for the tabs
 * @fires change - Fires a custom 'change' event when a tab is clicked or during keyboard navigation
 *
 * @public
 */
export declare class Tabs extends FASTElement {
    /**
     * Controls the visual orientation of the Tabs list.
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
    /**
     * The id of the active tab
     *
     * @public
     * @remarks
     * HTML Attribute: activeid
     */
    activeid: string;
    /**
     * A reference to the active tab
     * @public
     */
    activetab: HTMLElement;
    private prevActiveTabIndex;
    private activeTabIndex;
    private tabIds;
    private tabpanelIds;
    private change;
    private isDisabledElement;
    private isHiddenElement;
    private isFocusableElement;
    private getActiveIndex;
    /**
     * Function that is invoked whenever the selected tab or the tab collection changes.
     *
     * @public
     */
    protected setTabs(): void;
    private setTabPanels;
    private getTabIds;
    private getTabPanelIds;
    private setComponent;
    private handleTabClick;
    private isHorizontal;
    private handleTabKeyDown;
    /**
     * This method allows the active index to be adjusted programmatically by numerical increments.
     * @public
     */
    adjust(adjustment: number): void;
    private adjustForward;
    private adjustBackward;
    private moveToTabByIndex;
    private focusTab;
    /**
     * A description for the tablist
     *
     * @public
     */
    a11yAriaLabel: string | undefined;
}
export interface Tabs extends StartEnd {
}
