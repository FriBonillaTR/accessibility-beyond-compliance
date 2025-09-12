import { __decorate } from 'tslib';
import { FASTElement, attr, observable, volatile } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { SafA11y } from '../../../services/a11y.js';

class FacetCategory extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         *
         * Whether the disclosure is expanded or not.
         *
         * @public
         *
         */
        this.expanded = true;
        /**
         * Option to hide caret if is not required.
         *
         * @public
         */
        this.hideCaret = false;
        /**
         * Determines whether or not the selected items counter badges should be displayed
         *
         * @internal
         */
        this.showCounterBadges = false;
        this._currentChildrenSelected = 0;
    }
    get childrenSelected() {
        var _a;
        const selected = (_a = this.slottedFacets) === null || _a === void 0 ? void 0 : _a.reduce((acc, item) => {
            var _a;
            if ((_a = item.childItems) === null || _a === void 0 ? void 0 : _a.length)
                return acc + item.childrenSelected;
            if (item.checked)
                return acc + 1;
            return acc;
        }, 0);
        if (this._currentChildrenSelected !== selected && this.showCounterBadges) {
            SafA11y.announce(`${this.summary} ${selected} ${selected === 1 ? 'filter' : 'filters'} selected`, 'polite');
        }
        this._currentChildrenSelected = selected;
        return selected;
    }
}
__decorate([
    attr({ attribute: 'summary' })
], FacetCategory.prototype, "summary", void 0);
__decorate([
    attr({ attribute: 'expanded' }),
    observable
], FacetCategory.prototype, "expanded", void 0);
__decorate([
    observable
], FacetCategory.prototype, "slottedFacets", void 0);
__decorate([
    attr({ attribute: 'hide-caret', mode: 'boolean' })
], FacetCategory.prototype, "hideCaret", void 0);
__decorate([
    observable
], FacetCategory.prototype, "showCounterBadges", void 0);
__decorate([
    volatile
], FacetCategory.prototype, "childrenSelected", null);

export { FacetCategory };
