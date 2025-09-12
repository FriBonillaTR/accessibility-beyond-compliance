import { __decorate } from 'tslib';
import { FASTElement, attr, nullableNumberConverter } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for Workspace Pattern
 */
class WorkspacePattern extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Screen reader title for splitter indicator.
         *
         * @public
         *
         * @remarks
         * Re-exposed from saf-splitter
         */
        this.srOnlyTitle = 'Window splitter';
        /**
         * Tooltip text for splitter.
         *
         * @public
         */
        this.tooltipText = 'Drag window';
        /**
         * Whether or not primary panel should be scrollable.
         *
         * @public
         */
        this.scrollablePrimary = false;
        /**
         * Whether or not secondary panel should be scrollable.
         *
         * @public
         */
        this.scrollableSecondary = false;
        /**
         * Initial size for splitter in percentage.
         *
         * @public
         */
        this.initialSize = 50;
    }
}
__decorate([
    attr({ attribute: 'sr-only-title' })
], WorkspacePattern.prototype, "srOnlyTitle", void 0);
__decorate([
    attr({ attribute: 'tooltip-text' })
], WorkspacePattern.prototype, "tooltipText", void 0);
__decorate([
    attr({ attribute: 'scrollable-primary', mode: 'boolean' })
], WorkspacePattern.prototype, "scrollablePrimary", void 0);
__decorate([
    attr({ attribute: 'scrollable-secondary', mode: 'boolean' })
], WorkspacePattern.prototype, "scrollableSecondary", void 0);
__decorate([
    attr({ attribute: 'initial-size', converter: nullableNumberConverter })
], WorkspacePattern.prototype, "initialSize", void 0);

export { WorkspacePattern };
