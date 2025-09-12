import { __decorate } from 'tslib';
import { attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { ButtonBase } from '../button/button.js';

/**
 * A class for Chip
 */
class Chip extends ButtonBase {
    constructor() {
        super(...arguments);
        /**
         * Toggles the close icon and the ability to close the chip by clicking the component.
         *
         * @public
         */
        this.closeable = false;
        /**
         * Toggles the chip clickable functionality. True will act as button, false will act as a div.
         *
         * @public
         */
        this.clickable = false;
        /**
         * The close button label and its tooltip text.
         *
         * @public
         */
        this.closeButtonLabel = 'Remove';
        /**
         * Toggles the close icon tooltip.
         *
         * @public
         */
        this.closeableTooltip = true;
        /**
         * Causes tooltip contents to be announced by assistive technologies.
         *
         * @public
         */
        this.announceTooltip = false;
    }
    close(event) {
        if (!this.closeable)
            return;
        event.stopPropagation();
        event.preventDefault();
        this.$emit('remove');
    }
    focus() {
        var _a, _b;
        if (!this.clickable && !this.closeable) {
            return;
        }
        if (this.clickable) {
            // For clickable chips, focus the main button element
            const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
            btn === null || btn === void 0 ? void 0 : btn.focus();
        }
        else if (this.closeable) {
            // For closeable but non-clickable chips, focus the close button
            const closeBtn = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.close-button');
            closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.focus();
        }
    }
}
__decorate([
    attr({ mode: 'boolean' })
], Chip.prototype, "closeable", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Chip.prototype, "clickable", void 0);
__decorate([
    attr({ attribute: 'close-button-label' })
], Chip.prototype, "closeButtonLabel", void 0);
__decorate([
    attr({ attribute: 'closeable-tooltip', mode: 'boolean' })
], Chip.prototype, "closeableTooltip", void 0);
__decorate([
    attr({ attribute: 'tooltip-text' })
], Chip.prototype, "tooltipText", void 0);
__decorate([
    attr({ attribute: 'announce-tooltip', mode: 'boolean' })
], Chip.prototype, "announceTooltip", void 0);

export { Chip };
