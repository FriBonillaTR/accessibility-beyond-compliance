import { __decorate } from 'tslib';
import { FASTElement, Observable, observable, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { ArrowKeys, Direction, limit, keySpace, keyEnter, keyEnd, keyHome, keyArrowLeft, keyArrowRight } from '@microsoft/fast-web-utilities';
import { isFocusable } from 'tabbable';
import '../../utils/index.js';
import { isSaffronComponent } from '../../utils/dom-helpers.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { getDirection } from '../../utils/direction.js';

const ToolbarArrowKeyMap = Object.freeze({
    [ArrowKeys.ArrowUp]: -1,
    [ArrowKeys.ArrowDown]: 1,
    [ArrowKeys.ArrowLeft]: {
        [Direction.ltr]: -1,
        [Direction.rtl]: 1,
    },
    [ArrowKeys.ArrowRight]: {
        [Direction.ltr]: 1,
        [Direction.rtl]: -1,
    },
});
/**
 * Retrieves all focusable elements within a given HTML element.
 * This function recursively searches for focusable elements within saffron components as well.
 *
 * @param element - The HTML element to search within.
 * @returns An array of focusable HTML elements.
 * @public
 * @internal
 */
const getFocusableElements = (element) => {
    const getFocusableElementsRecursively = (parentElement) => Array.from(parentElement.querySelectorAll('*'))
        .map((element) => {
        const elementIsFocusable = isFocusable(element);
        const elementIsSaffronComponent = isSaffronComponent(element);
        if (elementIsFocusable) {
            return element;
        }
        else if (elementIsSaffronComponent) {
            const childFocusableElements = getFocusableElementsRecursively(element.shadowRoot).flat();
            // if the saffron component has no focusable elements inside it,
            // but it itself is focusable, return the component
            if (childFocusableElements.length === 0 && elementIsFocusable)
                return element;
            else
                return childFocusableElements;
        }
    })
        .filter(Boolean);
    return getFocusableElementsRecursively(element).flat();
};
/**
 * A class for Toolbar
 */
class Toolbar extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Returns an array of elements within the bottom-row-start slot
         * @public
         * @internal
         * @remarks Marked internal as it is used in the template but not needed for public use
         */
        this.bottomStartNodes = [];
        /**
         * Returns an array of elements within the bottom-row-end slot
         * @public
         * @internal
         * @remarks Marked internal as it is used in the template but not needed for public use
         */
        this.bottomEndNodes = [];
        /**
         * Specifies the text direction of the component's content
         * @public
         * @internal
         * @remarks applies 'dir' attribute on template to control specific direction styling
         * Marking as internal as consumers shouldn't be setting this directly, should be based on document direction/language
         */
        this.direction = Direction.ltr;
        /**
         * Tracks the leaf focusable elements in the toolbar
         * @private
         * @internal
         */
        this.focusableElements = [];
        /**
         * The aria-label, the unique accessible name for the toolbar
         * @public
         * @a11y
         * @remarks Give the toolbar a descriptive, unique accessible name using the aria-label attribute
         */
        this.ariaLabel = 'Toolbar';
        /**
         * Used to change the spacing in and around the component.
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Make the toolbar function as a single interactive UI control with
         * arrow key navigation
         *
         * @public
         */
        this.arrowNav = false;
        /**
         * The index of the currently focused element, clamped between 0 and the last element.
         * @private
         * @internal
         */
        this._activeIndex = 0;
    }
    /**
     * Function to initialize the toolbar when childItems changed
     * @protected
     * @internal
     */
    childItemsChanged() {
        if (this.$fastController.isConnected) {
            this.setFocusableElements();
        }
    }
    /**
     * Gets the active index of the toolbar.
     * @returns The active index.
     * @private
     * @internal
     */
    get activeIndex() {
        Observable.track(this, 'activeIndex');
        return this._activeIndex;
    }
    /**
     * Sets the active index of the toolbar.
     * @param value - The new active index value.
     * @private
     * @internal
     */
    set activeIndex(value) {
        if (this.$fastController.isConnected) {
            this._activeIndex = limit(0, this.focusableElements.length - 1, value);
            Observable.notify(this, 'activeIndex');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.arrowNav) {
            // setTimeout is needed to wait for the shadow dom to be rendered
            setTimeout(() => {
                this.setFocusableElements();
                this.setInitialTabIndexes();
            });
        }
        this.direction = getDirection(this);
    }
    /**
     * Sets the initial tab indexes for the focusable elements in the toolbar.
     * The active element will have a tabindex of 0, while the rest will have a tabindex of -1.
     * @private
     * @internal
     */
    setInitialTabIndexes() {
        this.focusableElements.forEach((el, index) => {
            if (index === this.activeIndex) {
                el.setAttribute('tabindex', '0');
            }
            else {
                el.setAttribute('tabindex', '-1');
            }
        });
    }
    focus() {
        if (this.arrowNav) {
            this.setFocusedElement();
        }
        else {
            super.focus();
        }
    }
    /**
     * Function to initialize the toolbar when the bottomStartNodes changed
     * @public
     * @internal
     * @remarks Used internally to set classes based on the presence of elements in the bottom-start slot
     */
    bottomStartNodesChanged() {
        setTimeout(() => this.ifbottomSlots());
    }
    /**
     * Function to initialize the toolbar when the bottomEndNodes changed
     * @public
     * @internal
     * @remarks Used internally to set classes based on the presence of elements in the bottom-end slot
     */
    bottomEndNodesChanged() {
        setTimeout(() => this.ifbottomSlots());
    }
    /**
     * Adds a class to the toolbar if there are elements in the bottom-start or bottom-end slots
     * @public
     * @internal
     * @remarks Used internally to set classes based on the presence of elements in the bottom-start or bottom-end slots
     */
    ifbottomSlots() {
        if (this.bottomStartNodes.length > 0 || this.bottomEndNodes.length > 0) {
            this.classList.add('twoRows');
            return true;
        }
        return false;
    }
    /**
     * Ensures that only one element within the toolbar is focusable at at time and programmatically sets the focus to the specified element
     * @param activeIndex - the index of the element to focus
     * @returns {void}
     * @private
     * @internal
     */
    setFocusedElement(activeIndex = this.activeIndex) {
        var _a;
        this.activeIndex = activeIndex;
        this.setFocusableElements();
        this.focusableElements.forEach((el, index) => {
            if (index === activeIndex) {
                el.setAttribute('tabindex', '0');
            }
            else {
                el.setAttribute('tabindex', '-1');
            }
        });
        (_a = this.focusableElements[this.activeIndex]) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Retrieves the focusable elements within the toolbar and assigns them to the focusableElements array
     * @returns {void}
     * @private
     * @internal
     * @remarks this is called on keyboard navigation and when childItemsChanged consumers shouldn't need access to this method
     */
    setFocusableElements() {
        this.focusableElements = getFocusableElements(this);
    }
    /**
     * Handles the click event for the toolbar.
     * @param event - The MouseEvent object representing the click event.
     * @returns Returns `true` if the click event should be allowed to propagate, or `void` if it should be prevented.
     * @public
     * @internal
     * @remarks ensures that when a click event occurs within the toolbar, the appropriate element is focused
     */
    clickHandler(event) {
        if (!this.arrowNav) {
            return true;
        }
        // find the root element that triggered the click event
        // if a button is clicked inside a saffron component, composedPath()[0] will be the button
        let activeIndex = this.focusableElements.indexOf(event.composedPath()[0]);
        // if it's not in the toolbar focusable elements, find the element that triggered the click event
        // if a non-focusable element is clicked inside a focusable saffron component, event.target will be the saffron component
        if (activeIndex === -1) {
            activeIndex = this.focusableElements.indexOf(event.target);
        }
        if (activeIndex > -1 && this.activeIndex !== activeIndex) {
            this.setFocusedElement(activeIndex);
        }
        return true;
    }
    /**
     * Returns the increment value based on the provided keyboard event.
     * @param e The keyboard event.
     * @returns The increment value.
     * @private
     * @internal
     */
    getIncrementer(e) {
        var _a, _b, _c;
        const { key } = e;
        if (key in ArrowKeys) {
            return (_c = (_b = (_a = ToolbarArrowKeyMap[key]) === null || _a === void 0 ? void 0 : _a[this.direction]) !== null && _b !== void 0 ? _b : ToolbarArrowKeyMap[key]) !== null && _c !== void 0 ? _c : 0;
        }
        return 0;
    }
    /**
     * Handles the keydown event for keyboard navigation within the toolbar.
     * @param e - The keyboard event.
     * @returns A boolean indicating whether the event should be propagated or not.
     * @public
     * @internal
     */
    handleKeyDown(e) {
        if (!this.arrowNav) {
            return true;
        }
        this.setFocusableElements();
        if (this.focusableElements.length === 0) {
            return true;
        }
        const incrementer = this.getIncrementer(e);
        const index = this.activeIndex + incrementer;
        switch (e.key) {
            case keyArrowRight:
                if (index >= this.focusableElements.length) {
                    return false;
                }
                this.setFocusedElement(index);
                return false;
            case keyArrowLeft:
                if (index === -1) {
                    return false;
                }
                this.setFocusedElement(index);
                return false;
            case keyHome:
                this.setFocusedElement(0);
                return false;
            case keyEnd:
                this.setFocusedElement(this.focusableElements.length - 1);
                return false;
            case keyEnter:
            case keySpace:
                // when pressing either space or enter on a button, refresh focus to current active element
                // addresses elements going out of sync with activeIndex, when elements are hidden on interaction inside shadow dom
                // i.e. clear search button inside search-field
                setTimeout(() => {
                    this.setFocusedElement();
                });
                return true;
            default:
                return true;
        }
    }
}
__decorate([
    observable
], Toolbar.prototype, "bottomStartNodes", void 0);
__decorate([
    observable
], Toolbar.prototype, "bottomEndNodes", void 0);
__decorate([
    observable
], Toolbar.prototype, "childItems", void 0);
__decorate([
    observable
], Toolbar.prototype, "direction", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], Toolbar.prototype, "ariaLabel", void 0);
__decorate([
    attr
], Toolbar.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'arrow-nav', mode: 'boolean' })
], Toolbar.prototype, "arrowNav", void 0);

export { Toolbar };
