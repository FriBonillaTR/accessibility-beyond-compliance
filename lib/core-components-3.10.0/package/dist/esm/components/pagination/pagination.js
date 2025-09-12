import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, nullableNumberConverter, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import '../../utils/index.js';
import { PaginationAriaLiveEnum } from './pagination.options.js';
import { SafA11y } from '../../services/a11y.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for Pagination
 */
class Pagination extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Observer for divider orientation. CSS should stay in sync with this number
         *
         * @internal
         */
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        this.observer = new ResizeObserver((entries) => {
            return (this.dividerOrientation = entries[0].contentRect.width > 594);
        });
        /**
         * The aria label for the region called pagination.
         *
         * @public
         * @a11y
         */
        this.ariaLabel = 'Pagination';
        /**
         * Text for the results label.
         *
         * @public
         */
        this.pageResultsLabel = 'Page';
        /**
         * Text for the page **of** label.
         *
         * @public
         */
        this.pageOfLabel = 'of';
        /**
         * Text for the previous button.
         *
         * @public
         */
        this.previousButton = 'Previous';
        /**
         * Text for the next button.
         *
         * @public
         */
        this.nextButton = 'Next';
        /**
         * Text for the **results** label.
         *
         * @public
         */
        this.resultsLabel = 'Showing';
        /**
         * Text for the **to** label.
         *
         * @public
         */
        this.toLabel = 'to';
        /**
         * Text for select items field.
         *
         * @public
         * @remarks Text for select items field
         */
        this.itemsInputLabel = 'Items per page';
        /**
         * Text for the page input label.
         *
         * @public
         */
        this.pageInputLabel = 'Go to page:';
        /**
         * Text for the page button.
         *
         * @public
         */
        this.pageButton = 'Go';
        /**
         * Whether or not the component has a border, showing by default.
         *
         * @public
         */
        this.hasBorder = false;
        /**
         * The current page index.
         *
         * @public
         */
        this.currentPageIndex = 1;
        /**
         * Option for the items per page number selection.
         *
         * @public
         */
        this.itemsArray = [10, 25, 50, 100];
        /**
         * Number of items per page.
         *
         * @public
         */
        this.itemsPerPage = 25;
        /**
         * Indicates that an element will be updated, and describes the types of updates the user agents, assisitve technologies, and user can expect from the live region.
         *
         * @public
         * @a11y
         */
        this.dataAriaLive = PaginationAriaLiveEnum.off;
        /**
         * Text to describe the results.
         *
         * @public
         */
        this.itemsLabel = '';
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * The `controlled` mode will make the component to just read attributes and emit events. The state
         * should be handled by the end user. This is also known as `stateless` components in React
         * or `Props down, Events up` in Vue.
         *
         * @public
         *
         */
        this.controlled = false;
    }
    /**
     * @internal
     */
    connectedCallback() {
        // We need to defer the creation of the template into the macrotask queue
        // so all computations happen before the template is connected, and this is
        // because: `itemsPerPage` doesn't match in the `saf-select` options.
        Updates.enqueue(() => super.connectedCallback());
        this.getStartIndex();
        this.getEndIndex();
        this.getTotalPages();
        this.observer.observe(this);
    }
    disconnectedCallBack() {
        super.disconnectedCallback();
        this.observer.disconnect();
    }
    /**
     * @internal
     * @remarks Gets the start value of the number of items showing per page.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getStartIndex() {
        return (this.startIndex = (this.currentPageIndex - 1) * this.itemsPerPage + 1);
    }
    /**
     * @internal
     * @remarks Gets the end value of the number of items showing per page.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getEndIndex() {
        return (this.endIndex =
            this.totalItemCount < this.itemsPerPage * this.currentPageIndex
                ? this.totalItemCount
                : this.itemsPerPage * this.currentPageIndex);
    }
    /**
     * @internal
     * @remarks Gets the number of total pages, value provided by user.
     */
    getTotalPages() {
        return (this.totalPages = Math.ceil(this.totalItemCount / this.itemsPerPage) || 1);
    }
    /**
     * @internal
     * @remarks Updates when items per page updates, resets page number to 1 and starting index to 1
     */
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    updateFormValue(value) {
        if (!this.controlled) {
            this.itemsPerPage = Number(value);
            this.startIndex = 1;
            this.currentPageIndex = 1;
        }
        this.$emit('items-per-page-change', Number(value));
        if (!this.controlled)
            this.$emit('change', this.currentPageIndex);
    }
    /**
     * @internal
     * @remarks Updates when user goes to a specific page number
     */
    updatePageValue(value) {
        if (!this.controlled) {
            this.currentPageIndex = Number(value);
            if (Number(value) > this.totalPages) {
                this.startIndex = this.totalPages;
            }
            else {
                this.getStartIndex();
            }
        }
        this.$emit('change', Number(value));
    }
    buttonPageValue() {
        var _a;
        const _numberField = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(getComponentName('saf-number-field'));
        if (_numberField.value) {
            this.updatePageValue(_numberField.value);
            _numberField.value = ''; // Reset the go to page input
        }
    }
    /**
     * @internal
     */
    _previous(currentPageIndex) {
        this.$emit('previous', currentPageIndex);
        if (!this.controlled)
            this.previous();
    }
    /**
     * Go to previous page
     *
     * @public
     */
    previous() {
        this.updatePageValue(this.currentPageIndex - 1);
    }
    /**
     * @internal
     */
    _next(currentPageIndex) {
        this.$emit('next', currentPageIndex);
        if (!this.controlled)
            this.next();
    }
    /**
     * Go to next page
     *
     * @public
     */
    next() {
        this.updatePageValue(this.currentPageIndex + 1);
    }
    /**
     * @internal
     */
    currentPageIndexChanged() {
        this.getStartIndex();
        this.getEndIndex();
        this.announceResults();
    }
    /**
     * @internal
     */
    totalItemCountChanged() {
        this.getTotalPages();
        this.getEndIndex();
        this.announceResults();
    }
    /**
     * @internal
     */
    itemsPerPageChanged() {
        this.getTotalPages();
        this.getEndIndex();
        this.announceResults();
    }
    /**
     * @internal
     */
    announceResults() {
        if (this.dataAriaLive && this.dataAriaLive !== 'off') {
            const message = this.totalItemCount
                ? `${this.resultsLabel} ${this.startIndex} ${this.toLabel} ${this.endIndex} ${this.pageOfLabel} ${this.totalItemCount} ${this.itemsLabel}`
                : `${this.resultsLabel} 0 ${this.itemsLabel}`;
            SafA11y.announce(message.trim(), this.dataAriaLive);
        }
    }
}
__decorate([
    attr({ attribute: 'aria-label' })
], Pagination.prototype, "ariaLabel", void 0);
__decorate([
    attr({ attribute: 'page-results-label' })
], Pagination.prototype, "pageResultsLabel", void 0);
__decorate([
    attr({ attribute: 'page-of-label' })
], Pagination.prototype, "pageOfLabel", void 0);
__decorate([
    attr({ attribute: 'previous-button' })
], Pagination.prototype, "previousButton", void 0);
__decorate([
    attr({ attribute: 'next-button' })
], Pagination.prototype, "nextButton", void 0);
__decorate([
    attr({ attribute: 'results-label' })
], Pagination.prototype, "resultsLabel", void 0);
__decorate([
    attr({ attribute: 'to-label' })
], Pagination.prototype, "toLabel", void 0);
__decorate([
    attr({ attribute: 'items-input-label' })
], Pagination.prototype, "itemsInputLabel", void 0);
__decorate([
    attr({ attribute: 'page-input-label' })
], Pagination.prototype, "pageInputLabel", void 0);
__decorate([
    attr({ attribute: 'page-button' })
], Pagination.prototype, "pageButton", void 0);
__decorate([
    attr({ attribute: 'has-border' })
], Pagination.prototype, "hasBorder", void 0);
__decorate([
    attr({ attribute: 'total-item-count', converter: nullableNumberConverter })
], Pagination.prototype, "totalItemCount", void 0);
__decorate([
    attr({ attribute: 'current-page-index' })
], Pagination.prototype, "currentPageIndex", void 0);
__decorate([
    observable
], Pagination.prototype, "itemsArray", void 0);
__decorate([
    attr({ attribute: 'items-per-page' })
], Pagination.prototype, "itemsPerPage", void 0);
__decorate([
    attr({ attribute: 'data-aria-live' })
], Pagination.prototype, "dataAriaLive", void 0);
__decorate([
    attr({ attribute: 'items-label' })
], Pagination.prototype, "itemsLabel", void 0);
__decorate([
    observable
], Pagination.prototype, "dividerOrientation", void 0);
__decorate([
    observable
], Pagination.prototype, "startIndex", void 0);
__decorate([
    observable
], Pagination.prototype, "endIndex", void 0);
__decorate([
    observable
], Pagination.prototype, "totalPages", void 0);
__decorate([
    attr
], Pagination.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'controlled', mode: 'boolean' })
], Pagination.prototype, "controlled", void 0);

export { Pagination };
