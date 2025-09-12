import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';

class LayoutGridItem extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Auto height for the grid-item to allow it to grow to the tallest grid-item in the row.
         * @public
         */
        this.autoHeight = false;
    }
}
__decorate([
    attr({ attribute: 'auto-height', mode: 'boolean' })
], LayoutGridItem.prototype, "autoHeight", void 0);
__decorate([
    attr({ attribute: 'justify-content' })
], LayoutGridItem.prototype, "justifyContent", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "xs", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "sm", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "md", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "lg", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "xl", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "xxl", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "xxxl", void 0);
__decorate([
    attr
], LayoutGridItem.prototype, "xxxxl", void 0);

export { LayoutGridItem };
