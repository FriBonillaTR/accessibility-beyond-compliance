import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, nullableNumberConverter, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { getComponentName } from '@saffron/config';

class FacetedFilter extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Heading for filtering.
         *
         * @public
         */
        this.filterTitle = 'Filters';
        /**
         * Label for the reset button.
         *
         * @public
         */
        this.resetButtonLabel = 'Clear filters';
        /**
         * Hierarchical level of the Title element.
         *
         * @a11y
         * @public
         * @defaultValue 2
         */
        this.ariaTitleLevel = 2;
        /**
         * Secondary heading for filtering.
         *
         * @public
         */
        this.filterSubtitle = 'Filter by:';
        /**
         * Hierarchical level of the Subtitle element.
         *
         * @a11y
         * @public
         * @defaultValue 3
         */
        this.ariaSubtitleLevel = 3;
        /**
         * Determines whether or not the selected items counter badges should be displayed.
         *
         * @public
         */
        this.showCounterBadges = false;
    }
    showCounterBadgesChanged(prev, next) {
        if (prev && !next) {
            Updates.enqueue(() => {
                this.updateChildItemsCounter(false);
            });
        }
    }
    slottedFacetsChanged(_prev, next) {
        if (this.showCounterBadges && next.length) {
            Updates.enqueue(() => {
                this.updateChildItemsCounter();
            });
        }
    }
    // utility function for changing showCounterBadges prop for all the child facets
    updateChildItemsCounter(isShown = true) {
        var _a;
        const updateItem = (item) => {
            var _a;
            if ((_a = item.childItems) === null || _a === void 0 ? void 0 : _a.length) {
                item.showCounterBadges = isShown;
                item.childItems.forEach((child) => {
                    updateItem(child);
                });
            }
        };
        (_a = this.slottedFacets) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
            var _a;
            child.showCounterBadges = isShown;
            if ((_a = child.slottedFacets) === null || _a === void 0 ? void 0 : _a.length) {
                child.slottedFacets.forEach((item) => {
                    updateItem(item);
                });
            }
        });
    }
    /**
     * Clears all facet items that are checked
     *
     * @public
     * @internal
     */
    handleReset() {
        this.querySelectorAll(getComponentName('saf-facet-item')).forEach((el) => (el.checked = false));
        this.$emit('clear');
    }
}
__decorate([
    attr({ attribute: 'filter-title' })
], FacetedFilter.prototype, "filterTitle", void 0);
__decorate([
    attr({ attribute: 'reset-button-label' })
], FacetedFilter.prototype, "resetButtonLabel", void 0);
__decorate([
    attr({
        attribute: 'aria-title-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], FacetedFilter.prototype, "ariaTitleLevel", void 0);
__decorate([
    attr({ attribute: 'filter-subtitle' })
], FacetedFilter.prototype, "filterSubtitle", void 0);
__decorate([
    attr({
        attribute: 'aria-subtitle-level',
        mode: 'fromView',
        converter: nullableNumberConverter,
    })
], FacetedFilter.prototype, "ariaSubtitleLevel", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], FacetedFilter.prototype, "instructionalText", void 0);
__decorate([
    attr({ attribute: 'show-counter-badges', mode: 'boolean' })
], FacetedFilter.prototype, "showCounterBadges", void 0);
__decorate([
    observable
], FacetedFilter.prototype, "slottedFacets", void 0);

export { FacetedFilter };
