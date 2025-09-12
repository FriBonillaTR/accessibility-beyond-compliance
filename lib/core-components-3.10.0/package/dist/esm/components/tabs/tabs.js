import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Orientation, keyArrowRight, keyArrowLeft, keyArrowDown, keyArrowUp, keyEnd, keyHome, uniqueId, limit } from '@microsoft/fast-web-utilities';
import { applyMixins } from '../../utils/apply-mixins.js';
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
class Tabs extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Controls the visual orientation of the Tabs list.
         * @public
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = Orientation.horizontal;
        this.prevActiveTabIndex = 0;
        this.activeTabIndex = 0;
        this.change = () => {
            this.$emit('change', this.activetab);
        };
        this.isDisabledElement = (el) => {
            return el.getAttribute('aria-disabled') === 'true';
        };
        this.isHiddenElement = (el) => {
            return el.hasAttribute('hidden');
        };
        this.isFocusableElement = (el) => {
            return !this.isDisabledElement(el) && !this.isHiddenElement(el);
        };
        this.handleTabClick = (event) => {
            const selectedTab = event.currentTarget;
            if (selectedTab.nodeType === 1 && this.isFocusableElement(selectedTab)) {
                this.prevActiveTabIndex = this.activeTabIndex;
                this.activeTabIndex = this.tabs.indexOf(selectedTab);
                this.setComponent();
            }
        };
        this.handleTabKeyDown = (event) => {
            if (this.isHorizontal()) {
                switch (event.key) {
                    case keyArrowLeft:
                        event.preventDefault();
                        this.adjustBackward(event);
                        break;
                    case keyArrowRight:
                        event.preventDefault();
                        this.adjustForward(event);
                        break;
                }
            }
            else {
                switch (event.key) {
                    case keyArrowUp:
                        event.preventDefault();
                        this.adjustBackward(event);
                        break;
                    case keyArrowDown:
                        event.preventDefault();
                        this.adjustForward(event);
                        break;
                }
            }
            switch (event.key) {
                case keyHome:
                    event.preventDefault();
                    this.adjust(-this.activeTabIndex);
                    break;
                case keyEnd:
                    event.preventDefault();
                    this.adjust(this.tabs.length - this.activeTabIndex - 1);
                    break;
            }
        };
    }
    /**
     * @internal
     */
    orientationChanged() {
        if (this.$fastController.isConnected) {
            this.setTabs();
        }
    }
    /**
     * @internal
     */
    activeidChanged(oldValue, _newValue) {
        if (this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length) {
            this.prevActiveTabIndex = this.tabs.findIndex((item) => item.id === oldValue);
            this.setTabs();
        }
    }
    /**
     * @internal
     */
    tabsChanged() {
        if (this.$fastController.isConnected && this.tabs.length <= this.tabpanels.length) {
            this.tabIds = this.getTabIds();
            this.tabpanelIds = this.getTabPanelIds();
            this.setTabs();
        }
    }
    /**
     * @internal
     */
    tabpanelsChanged() {
        if (this.$fastController.isConnected && this.tabpanels.length <= this.tabs.length) {
            this.tabIds = this.getTabIds();
            this.tabpanelIds = this.getTabPanelIds();
            this.setTabs();
        }
    }
    getActiveIndex() {
        const id = this.activeid;
        if (id !== undefined) {
            return this.tabIds.indexOf(this.activeid) === -1
                ? 0
                : this.tabIds.indexOf(this.activeid);
        }
        else {
            return 0;
        }
    }
    /**
     * Function that is invoked whenever the selected tab or the tab collection changes.
     *
     * @public
     */
    setTabs() {
        const gridHorizontalProperty = 'gridColumn';
        const gridVerticalProperty = 'gridRow';
        const gridProperty = this.isHorizontal()
            ? gridHorizontalProperty
            : gridVerticalProperty;
        this.activeTabIndex = this.getActiveIndex();
        this.tabs.forEach((tab, index) => {
            if (tab.slot === 'tab') {
                const isActiveTab = this.activeTabIndex === index && this.isFocusableElement(tab);
                const tabId = this.tabIds[index];
                const tabpanelId = this.tabpanelIds[index];
                tab.setAttribute('id', tabId);
                tab.setAttribute('aria-selected', isActiveTab ? 'true' : 'false');
                tab.setAttribute('aria-controls', tabpanelId);
                tab.addEventListener('click', this.handleTabClick);
                tab.addEventListener('keydown', this.handleTabKeyDown);
                tab.setAttribute('tabindex', isActiveTab ? '0' : '-1');
                if (isActiveTab) {
                    this.activetab = tab;
                    this.activeid = tabId;
                }
            }
            // If the original property isn't emptied out,
            // the next set will morph into a grid-area style setting that is not what we want
            tab.style[gridHorizontalProperty] = '';
            tab.style[gridVerticalProperty] = '';
            tab.style[gridProperty] = `${index + 1}`;
            !this.isHorizontal() ? tab.classList.add('vertical') : tab.classList.remove('vertical');
        });
        this.setTabPanels();
    }
    setTabPanels() {
        this.tabpanels.forEach((tabpanel, index) => {
            const tabId = this.tabIds[index];
            const tabpanelId = this.tabpanelIds[index];
            tabpanel.setAttribute('id', tabpanelId);
            tabpanel.setAttribute('aria-labelledby', tabId);
            this.activeTabIndex !== index
                ? tabpanel.setAttribute('hidden', '')
                : tabpanel.removeAttribute('hidden');
        });
    }
    getTabIds() {
        return this.tabs.map((tab) => {
            var _a;
            return (_a = tab.getAttribute('id')) !== null && _a !== void 0 ? _a : `tab-${uniqueId()}`;
        });
    }
    getTabPanelIds() {
        return this.tabpanels.map((tabPanel) => {
            var _a;
            return (_a = tabPanel.getAttribute('id')) !== null && _a !== void 0 ? _a : `panel-${uniqueId()}`;
        });
    }
    setComponent() {
        if (this.activeTabIndex !== this.prevActiveTabIndex) {
            this.activeid = this.tabIds[this.activeTabIndex];
            this.focusTab();
            this.change();
        }
    }
    isHorizontal() {
        return this.orientation === Orientation.horizontal;
    }
    /**
     * This method allows the active index to be adjusted programmatically by numerical increments.
     * @public
     */
    adjust(adjustment) {
        const focusableTabs = this.tabs.filter((t) => this.isFocusableElement(t));
        const currentActiveTabIndex = focusableTabs.indexOf(this.activetab);
        const nextTabIndex = limit(0, focusableTabs.length - 1, currentActiveTabIndex + adjustment);
        // the index of the next focusable tab within the context of all available tabs
        const nextIndex = this.tabs.indexOf(focusableTabs[nextTabIndex]);
        if (nextIndex > -1) {
            this.moveToTabByIndex(this.tabs, nextIndex);
        }
    }
    adjustForward(_e) {
        const group = this.tabs;
        let index = 0;
        index = this.activetab ? group.indexOf(this.activetab) + 1 : 1;
        if (index === group.length) {
            index = 0;
        }
        while (index < group.length && group.length > 1) {
            if (this.isFocusableElement(group[index])) {
                this.moveToTabByIndex(group, index);
                break;
            }
            else if (this.activetab && index === group.indexOf(this.activetab)) {
                break;
            }
            else if (index + 1 >= group.length) {
                index = 0;
            }
            else {
                index += 1;
            }
        }
    }
    adjustBackward(_e) {
        const group = this.tabs;
        let index = 0;
        index = this.activetab ? group.indexOf(this.activetab) - 1 : 0;
        index = index < 0 ? group.length - 1 : index;
        while (index >= 0 && group.length > 1) {
            if (this.isFocusableElement(group[index])) {
                this.moveToTabByIndex(group, index);
                break;
            }
            else if (index - 1 < 0) {
                index = group.length - 1;
            }
            else {
                index -= 1;
            }
        }
    }
    moveToTabByIndex(group, index) {
        const tab = group[index];
        this.activetab = tab;
        this.prevActiveTabIndex = this.activeTabIndex;
        this.activeTabIndex = index;
        tab.focus();
        this.setComponent();
    }
    focusTab() {
        this.tabs[this.activeTabIndex].focus();
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.tabIds = this.getTabIds();
        this.tabpanelIds = this.getTabPanelIds();
        this.activeTabIndex = this.getActiveIndex();
    }
}
__decorate([
    attr
], Tabs.prototype, "orientation", void 0);
__decorate([
    attr
], Tabs.prototype, "activeid", void 0);
__decorate([
    observable
], Tabs.prototype, "tabs", void 0);
__decorate([
    observable
], Tabs.prototype, "tabpanels", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Tabs.prototype, "a11yAriaLabel", void 0);
applyMixins(Tabs, StartEnd);

export { Tabs };
