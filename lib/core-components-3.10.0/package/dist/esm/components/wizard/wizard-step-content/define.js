import { getRegistry, getComponentName } from '@saffron/config';
import { WizardStepContent } from './wizard-step-content.js';
import { styles } from './wizard-step-content.styles.js';
import { wizardStepContentTemplate } from './wizard-step-content.template.js';

const WizardStepContentDefine = () => {
    /*
     * If on your template's code you use other Saffron components you will need
     * to import their definitions here so your component works properly.
     * Ex.
     *
     * ButtonDefine();
     * IconDefine();
     *
     */
    return WizardStepContent.define({
        name: getComponentName('saf-wizard-step-content'),
        template: wizardStepContentTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { WizardStepContentDefine as default };
