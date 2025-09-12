import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import '../../utils/index.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { setAttributeOnChild } from '../../utils/dom-helpers.js';

/**
 * ButtonEmbedded
 */
class ButtonEmbedded extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
    }
    // eslint-disable-next-line lines-between-class-members, @typescript-eslint/lines-between-class-members
    slottedNodesChanged() {
        var _a;
        if ((_a = this.slottedNodes) === null || _a === void 0 ? void 0 : _a.length) {
            /* Sets `embedded-item` attribute on child `saf-button` components to enable ButtonEmbedded specific styles */
            setAttributeOnChild(this, getComponentName('saf-button'), 'embedded-item');
            setAttributeOnChild(this, getComponentName('saf-text-field'), 'embedded-item');
            setAttributeOnChild(this, getComponentName('saf-number-field'), 'embedded-item');
            setAttributeOnChild(this, getComponentName('saf-search-field'), 'embedded-item');
            setAttributeOnChild(this, getComponentName('saf-date-masked-input'), 'embedded-item');
            this.observeSlottedElements();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateButtonClasses();
    }
    disconnectedCallback() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
        super.disconnectedCallback();
    }
    // Updates the button classes based on the attributes of slotted fields
    updateButtonClasses() {
        const textField = this.querySelector(getComponentName('saf-text-field'));
        const numberField = this.querySelector(getComponentName('saf-number-field'));
        const dateMaskedInput = this.querySelector(getComponentName('saf-date-masked-input'));
        const button = this.querySelector(getComponentName('saf-button'));
        const elements = [textField, numberField, dateMaskedInput];
        const hasLabel = elements.some((field) => (field === null || field === void 0 ? void 0 : field.hasAttribute('label')) ||
            (field === null || field === void 0 ? void 0 : field.hasAttribute('optional-text')) ||
            (field === null || field === void 0 ? void 0 : field.hasAttribute('instructional-text')));
        // Toggle 'first-row' class if no label is present
        if (button instanceof HTMLElement) {
            button.classList.toggle('first-row', !hasLabel);
        }
        // Toggle 'hidden' class if any field is readonly
        const hasReadOnly = elements.some((field) => field === null || field === void 0 ? void 0 : field.hasAttribute('readonly'));
        if (button instanceof HTMLElement) {
            button.classList.toggle('hidden', hasReadOnly);
        }
    }
    // Sets up the MutationObserver to watch for attribute changes
    observeSlottedElements() {
        const config = { attributes: true, childList: false, subtree: false };
        this.mutationObserver = new MutationObserver(() => {
            this.updateButtonClasses();
        });
        this.slottedNodes.forEach((node) => {
            this.mutationObserver.observe(node, config);
        });
    }
}
__decorate([
    attr
], ButtonEmbedded.prototype, "density", void 0);
__decorate([
    observable
], ButtonEmbedded.prototype, "slottedNodes", void 0);

export { ButtonEmbedded };
