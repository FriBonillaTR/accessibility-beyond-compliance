import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { AlertTypeEnum } from './alert.options.js';
import { SafA11y } from '../../services/a11y.js';
import '../../utils/index.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

class Alert extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The type of alert. If the type is `inline`, or default, the alert will appear next to the element that triggered it. If `toast`, it will appear at the top of the web page.
         *
         * @public
         */
        this.alertType = AlertTypeEnum.inline;
        /**
         * Set the type of role that the saf icon will have in the saf alert. If this setting is used to hide the status icon from screen reader users its meaning must be reflected in the text of the alert message
         *
         * @public
         */
        this.iconPresentation = false;
        this.afterDelay = false;
        /**
         * The hidden state of the alert.
         *
         * @public
         */
        this.isHidden = false;
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Cause alert to be announced immediately by assistive technologies.
         *
         * @a11y
         * @public
         */
        this.announce = true;
        /**
         * Hide the close button to prevent the alert from being dismissed.
         *
         * @public
         */
        this.hideCloseButton = false;
    }
    /**
     * Function to hide the alert using CSS. Emits the `close` event after the alert is hidden.
     *
     * @public
     */
    close(timer) {
        if (timer > 0) {
            setTimeout(() => this.addClosingClass(), timer * 1000 - 250);
            setTimeout(() => {
                this.$emit('close', null, { bubbles: false });
            }, timer * 1000);
        }
        else {
            this.addClosingClass();
            setTimeout(() => {
                this.$emit('close', null, { bubbles: false });
            }, 250);
        }
    }
    /**
     * Gets the icon info for the given appearance type
     * @internal
     */
    get icon() {
        switch (this.appearance) {
            case 'informational':
                return {
                    color: 'var(--saf-color-status-information-strong)',
                    iconName: 'circle-info',
                    iconLabel: 'Information',
                };
            case 'success':
                return {
                    color: 'var(--saf-color-status-success-strong)',
                    iconName: 'circle-check',
                    iconLabel: 'Success',
                };
            case 'warning':
                return {
                    color: 'var(--saf-color-status-warning-strong)',
                    iconName: 'triangle-exclamation',
                    iconLabel: 'Warning',
                };
            case 'error':
                return {
                    color: 'var(--saf-color-status-error-strong)',
                    iconName: 'hexagon-exclamation',
                    iconLabel: 'Error',
                };
            case 'neutral':
                return {
                    color: 'var(--saf-color-status-neutral-strong)',
                    iconName: 'circle-info',
                    iconLabel: 'Neutral',
                };
            default:
                return {
                    color: 'var(--saf-color-status-information-strong)',
                    iconName: 'circle-info',
                    iconLabel: 'Information',
                };
        }
    }
    /**
     * Gets the icon aria label based on the icon presentation and the appearance type
     * @returns icon aria label if the icon presentation is false, otherwise null
     * @internal
     */
    get iconAriaLabelComputed() {
        var _a;
        if (!this.iconPresentation) {
            return (_a = this.iconAriaLabel) !== null && _a !== void 0 ? _a : this.icon.iconLabel;
        }
        return null;
    }
    addClosingClass() {
        this.classList.add('closing');
        setTimeout(() => (this.isHidden = true), 250);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.announce) {
            this.announceContent();
        }
    }
    announceContent() {
        var _a, _b;
        const type = this.appearance === 'error' || this.appearance === 'warning' ? 'alert' : 'status';
        const iconLabel = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.alert-icon')) === null || _b === void 0 ? void 0 : _b.getAttribute('aria-label');
        const message = `${iconLabel} ${this.innerText}`;
        SafA11y.announce(message.trim(), type);
    }
}
__decorate([
    attr
], Alert.prototype, "appearance", void 0);
__decorate([
    attr({ attribute: 'alert-type' })
], Alert.prototype, "alertType", void 0);
__decorate([
    attr({ attribute: 'icon-aria-label' }),
    observable
], Alert.prototype, "iconAriaLabel", void 0);
__decorate([
    attr({ attribute: 'icon-presentation', mode: 'boolean' })
], Alert.prototype, "iconPresentation", void 0);
__decorate([
    attr({ attribute: 'close-aria-label' }),
    observable
], Alert.prototype, "closeAriaLabel", void 0);
__decorate([
    attr
], Alert.prototype, "duration", void 0);
__decorate([
    observable
], Alert.prototype, "afterDelay", void 0);
__decorate([
    attr({ attribute: 'is-hidden' })
], Alert.prototype, "isHidden", void 0);
__decorate([
    attr
], Alert.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'announce', mode: 'boolean' })
], Alert.prototype, "announce", void 0);
__decorate([
    attr({ attribute: 'hide-close-button', mode: 'boolean' })
], Alert.prototype, "hideCloseButton", void 0);

export { Alert };
