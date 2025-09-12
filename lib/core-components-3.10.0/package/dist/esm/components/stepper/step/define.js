import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../../icon/define.js';
import SafSrOnly from '../../sr-only/define.js';
import { Step } from './step.js';
import { styles } from './step.styles.js';
import { stepTemplate } from './step.template.js';

const SafStep = () => {
    SafIcon();
    SafSrOnly();
    return Step.define({
        name: getComponentName('saf-step'),
        template: stepTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafStep as default };
