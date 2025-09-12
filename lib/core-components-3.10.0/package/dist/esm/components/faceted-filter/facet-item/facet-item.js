import { __decorate } from 'tslib';
import { FASTElement, attr, observable, nullableNumberConverter, volatile } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { isHTMLElement } from '@microsoft/fast-web-utilities';
import { getComponentName } from '@saffron/config';

/**
 * Determines if element is an HTMLElement and if it has the role treeitem.
 *
 * @public
 * @internal
 */
function isFacetItemElement(el) {
    return (isHTMLElement(el) && (el.isFacetItem || el.localName === getComponentName('saf-facet-item')));
}
class FacetItem extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Readonly property identifying the element as a facet item.
         *
         * @public
         * @internal
         */
        this.isFacetItem = true;
        /**
         * The indeterminate state of the facet item
         *
         * @public
         */
        this.indeterminate = false;
        /**
         * Whether the facet item is checked.
         *
         * @public
         */
        this.checked = false;
        /**
         * Whether the facet item is disabled.
         *
         * @public
         */
        this.disabled = false;
        /**
         * Whether the item is focusable
         *
         * @internal
         * @public
         */
        this.focusable = false;
        /**
         * Whether the facet item is expanded.
         *
         * @public
         */
        this.expanded = false;
        /**
         * The aria-label for the expand button.
         *
         * @a11y
         * @public
         */
        this.expandAriaLabel = 'Expand';
        /**
         * The aria-label for the collapse button.
         *
         * @a11y
         * @public
         */
        this.collapseAriaLabel = 'Collapse';
        /**
         * Determines whether or not the selected items counter badges should be displayed
         *
         * @internal
         */
        this.showCounterBadges = false;
        this.deselectAllChildren = () => {
            var _a;
            (_a = this.childItems) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
                var _a;
                if ((_a = child.$fastController) === null || _a === void 0 ? void 0 : _a.isConnected) {
                    child.uncheck();
                }
            });
        };
        /**
         * Whether the tree is nested
         *
         * @public
         * @internal
         */
        this.isNestedItem = () => {
            return isFacetItemElement(this.parentElement);
        };
    }
    indeterminateChanged() {
        const parent = this.parentElement;
        if (parent instanceof FacetItem && this.$fastController.isConnected) {
            parent.updateCheckedState();
        }
    }
    checkedChanged() {
        const parent = this.parentElement;
        if (parent instanceof FacetItem && this.$fastController.isConnected) {
            parent.updateCheckedState();
        }
    }
    childItemsChanged() {
        if (this.childItems.length && !this.indeterminate) {
            if (this.checked) {
                this.selectAllChildren();
            }
            else if (!this.checked) {
                this.deselectAllChildren();
            }
        }
    }
    get treeWhollySelected() {
        var _a;
        return ((_a = this.childItems) === null || _a === void 0 ? void 0 : _a.length)
            ? this.childItems.every((child) => child.treeWhollySelected)
            : this.checked;
    }
    get treeWhollyUnselected() {
        var _a;
        return ((_a = this.childItems) === null || _a === void 0 ? void 0 : _a.length)
            ? this.childItems.every((child) => child.treeWhollyUnselected)
            : !this.checked;
    }
    updateCheckedState() {
        var _a;
        if ((_a = this.childItems) === null || _a === void 0 ? void 0 : _a.length) {
            const treeWhollySelected = this.treeWhollySelected;
            const treeWhollyUnselected = this.treeWhollyUnselected;
            const indeterminate = !treeWhollySelected && !treeWhollyUnselected;
            if (this.indeterminate !== indeterminate)
                this.indeterminate = indeterminate;
            if (this.checked !== treeWhollySelected) {
                this.checked = treeWhollySelected;
                this.emitToggle();
            }
        }
    }
    emitToggle() {
        this.$emit('toggle', this, { bubbles: false, composed: true });
    }
    check() {
        this.selectAllChildren();
        this.checked = true;
        this.indeterminate = false;
        this.emitToggle();
    }
    uncheck() {
        this.deselectAllChildren();
        this.checked = false;
        this.indeterminate = false;
        this.emitToggle();
    }
    /**
     * Handler bound to changes on facet item check state that's triggered on interaction
     *
     * @public
     * @internal
     */
    handleCheckChange(event) {
        const target = event.target;
        if (target.checked) {
            this.check();
        }
        else {
            this.uncheck();
        }
    }
    selectAllChildren() {
        var _a;
        (_a = this.childItems) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
            var _a;
            if ((_a = child.$fastController) === null || _a === void 0 ? void 0 : _a.isConnected) {
                child.check();
            }
        });
    }
    get itemTotal() {
        var _a;
        return (_a = this.childItems) === null || _a === void 0 ? void 0 : _a.reduce((acc, item) => acc + item.itemCount, 0);
    }
    get childrenSelected() {
        var _a;
        return (_a = this.childItems) === null || _a === void 0 ? void 0 : _a.reduce((acc, item) => {
            var _a;
            if ((_a = item.childItems) === null || _a === void 0 ? void 0 : _a.length)
                return acc + item.childrenSelected;
            if (item.checked)
                return acc + 1;
            return acc;
        }, 0);
    }
    /**
     * Toggles expand and collapsing on a parent facet with children facets
     */
    toggleExpand(e) {
        if (!this.disabled && !e.defaultPrevented) {
            this.expanded = !this.expanded;
        }
    }
    get hasChildItems() {
        var _a;
        return (this.childElementCount &&
            ((_a = Array.from(this.children)) === null || _a === void 0 ? void 0 : _a.some((element) => isFacetItemElement(element))));
    }
}
__decorate([
    attr({ attribute: 'facet-name' })
], FacetItem.prototype, "facetName", void 0);
__decorate([
    attr({ attribute: 'indeterminate', mode: 'boolean' }),
    observable
], FacetItem.prototype, "indeterminate", void 0);
__decorate([
    attr({
        attribute: 'item-count',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], FacetItem.prototype, "itemCount", void 0);
__decorate([
    attr({ attribute: 'checked', mode: 'boolean' })
], FacetItem.prototype, "checked", void 0);
__decorate([
    attr({ attribute: 'disabled', mode: 'boolean' })
], FacetItem.prototype, "disabled", void 0);
__decorate([
    observable
], FacetItem.prototype, "focusable", void 0);
__decorate([
    observable
], FacetItem.prototype, "items", void 0);
__decorate([
    observable
], FacetItem.prototype, "childItems", void 0);
__decorate([
    attr({ attribute: 'expanded', mode: 'boolean' }),
    observable
], FacetItem.prototype, "expanded", void 0);
__decorate([
    attr({ attribute: 'expand-aria-label' })
], FacetItem.prototype, "expandAriaLabel", void 0);
__decorate([
    attr({ attribute: 'collapse-aria-label' })
], FacetItem.prototype, "collapseAriaLabel", void 0);
__decorate([
    observable
], FacetItem.prototype, "showCounterBadges", void 0);
__decorate([
    volatile
], FacetItem.prototype, "itemTotal", null);
__decorate([
    volatile
], FacetItem.prototype, "childrenSelected", null);

export { FacetItem, isFacetItemElement };
