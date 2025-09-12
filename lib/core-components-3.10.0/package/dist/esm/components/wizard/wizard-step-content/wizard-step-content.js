import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for WizardStepContent
 */
class WizardStepContent extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Denotes the hidden state of the wizard step
         */
        this.hidden = true;
    }
}
__decorate([
    attr({ attribute: 'step' })
], WizardStepContent.prototype, "step", void 0);
__decorate([
    attr({ attribute: 'hidden', mode: 'boolean' })
], WizardStepContent.prototype, "hidden", void 0);

export { WizardStepContent };
