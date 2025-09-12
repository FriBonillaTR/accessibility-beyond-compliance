import { getRegistry, getComponentName } from '@saffron/config';
import { Stepper } from './stepper.js';
import { styles } from './stepper.styles.js';
import { stepperTemplate } from './stepper.template.js';

const safStepperConfig = {
    events: {
        updateStepper: 'update-stepper',
        onStepChange: 'step-change',
    },
};
const SafStepper = () => {
    return Stepper.define({
        name: getComponentName('saf-stepper'),
        template: stepperTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafStepper as default, safStepperConfig };
