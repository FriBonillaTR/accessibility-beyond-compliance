import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafDivider from '../divider/define.js';
import SafIcon from '../icon/define.js';
import SafStepper from '../stepper/define.js';
import SafStep from '../stepper/step/define.js';
import SafText from '../text/define.js';
import { Wizard } from './wizard.js';
import { styles } from './wizard.styles.js';
import { wizardTemplate } from './wizard.template.js';

const SafWizard = () => {
    SafStepper();
    SafStep();
    SafButton();
    SafIcon();
    SafText();
    SafDivider();
    return Wizard.define({
        name: getComponentName('saf-wizard'),
        template: wizardTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafWizard as default };
