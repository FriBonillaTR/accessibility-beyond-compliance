import { __decorate } from 'tslib';
import { FASTElement, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { BreadcrumbItem } from './breadcrumb-item/breadcrumb-item.js';

/**
 * A Breadcrumb Custom HTML Element.
 * @slot - The default slot for the breadcrumb items
 * @csspart list - The element wrapping the slotted items
 *
 * @public
 */
class Breadcrumb extends FASTElement {
    slottedBreadcrumbItemsChanged() {
        var _a;
        if (!this.$fastController.isConnected || !((_a = this.slottedBreadcrumbItems) === null || _a === void 0 ? void 0 : _a.length))
            return;
        const lastNode = this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length - 1];
        this.slottedBreadcrumbItems.forEach((item) => {
            if (item instanceof BreadcrumbItem) {
                const isLastNode = item === lastNode;
                item.separator = !isLastNode;
                if (isLastNode)
                    item.setAttribute('data-aria-current', 'page');
                else
                    item.removeAttribute('data-aria-current');
            }
        });
    }
}
__decorate([
    observable
], Breadcrumb.prototype, "slottedBreadcrumbItems", void 0);

export { Breadcrumb };
