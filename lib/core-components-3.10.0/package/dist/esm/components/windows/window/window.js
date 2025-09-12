import { __decorate } from 'tslib';
import { attr, observable } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { Tab } from '../../tabs/tab/tab.js';

/**
 * A class derived from the Tab foundation component
 */
class Window extends Tab {
    constructor() {
        super(...arguments);
        /**
         * The accessible label for the close button.
         * @public
         * @a11y
         * @remarks The label for the close button
         */
        this.closeAriaLabel = 'Close';
        /**
         * Indicates whether the window has close button.
         * @public
         * @remarks Indicates whether the window is closeable
         */
        this.closeable = true;
        /**
         * The value of the `aria-selected` attribute for the window.
         * @public
         * @remarks This attribute indicates whether the window is selected or not.
         */
        this.ariaSelectedAttr = null;
        /**
         * The tab index prop for the window.
         * @public
         * @remarks
         * A negative value (typically -1) removes the element from the tab order, making it focusable only programmatically.
         */
        this.tabIndexProp = -1;
        /**
         * The tab index property for the window.
         * @public
         * @remarks This property indicates the tab index of the window element.
         */
        this.tabIndexAttr = null;
    }
    /**
     * @internal
     * @remarks Indicates aria-selected attribute.
     */
    get ariaSelected() {
        var _a;
        return (_a = this.ariaSelectedAttr) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * @internal
     * @remarks Sets aria-selected attribute.
     */
    set ariaSelected(value) {
        this.ariaSelectedAttr = value;
    }
    /**
     * @internal
     * @remarks Indicates whether the window is closeable
     */
    get tabIndex() {
        return this.tabIndexProp;
    }
    /**
     * @internal
     * @remarks Indicates whether the window is closeable
     */
    set tabIndex(value) {
        const n = typeof value === 'number' ? value : parseInt(value !== null && value !== void 0 ? value : '', 10);
        this.tabIndexProp = !isNaN(n) ? n : -1;
        this.tabIndexAttr = !isNaN(n) ? String(value) : null;
    }
    /**
     * Emits a custom 'close' event when the window close button is clicked
     * @public
     * @remarks Fired when the window closed
     */
    close() {
        this.$emit('close', null, { bubbles: false });
    }
    setAttribute(qualifiedName, value) {
        if (qualifiedName === 'tabindex') {
            const n = parseInt(value !== null && value !== void 0 ? value : '', 10);
            this.tabIndexProp = !isNaN(n) ? n : -1;
            this.tabIndexAttr = value;
            return;
        }
        if (qualifiedName === 'aria-selected') {
            this.ariaSelectedAttr = value;
            return;
        }
        super.setAttribute(qualifiedName, value);
    }
    getAttribute(qualifiedName) {
        if (qualifiedName === 'tabindex')
            return this.tabIndexAttr;
        if (qualifiedName === 'aria-selected')
            return this.ariaSelectedAttr;
        return super.getAttribute(qualifiedName);
    }
    hasAttribute(qualifiedName) {
        if (qualifiedName === 'tabindex')
            return this.tabIndexAttr !== null;
        if (qualifiedName === 'aria-selected')
            return this.ariaSelectedAttr != null;
        return super.hasAttribute(qualifiedName);
    }
    removeAttribute(qualifiedName) {
        if (qualifiedName === 'tabindex') {
            this.tabIndexProp = -1;
            this.tabIndexAttr = null;
            return;
        }
        if (qualifiedName === 'aria-selected') {
            this.ariaSelectedAttr = null;
            return;
        }
        super.removeAttribute(qualifiedName);
    }
    /**
     * @internal
     * @remarks Proxyfying focus
     */
    focus() {
        var _a;
        ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.window-label')).focus();
    }
}
__decorate([
    attr({ attribute: 'close-aria-label' })
], Window.prototype, "closeAriaLabel", void 0);
__decorate([
    attr({ attribute: 'closeable', mode: 'boolean' })
], Window.prototype, "closeable", void 0);
__decorate([
    observable
], Window.prototype, "ariaSelectedAttr", void 0);
__decorate([
    observable
], Window.prototype, "tabIndexProp", void 0);
__decorate([
    observable
], Window.prototype, "tabIndexAttr", void 0);

export { Window };
