import { getRegistry, getComponentName } from '@saffron/config';
import { RadioGroup } from './radio-group.js';
import { styles } from './radio-group.styles.js';
import { radioGroupTemplate } from './radio-group.template.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';

const safRadioGroupConfig = {
    events: {
        onChange: 'change',
        onClick: 'click',
        onKeyDown: 'keydown',
        onFocusOut: 'focusout',
        onReset: 'reset',
    },
};
const SafRadioGroup = () => {
    SafIcon();
    SafSrOnly();
    return RadioGroup.define({
        name: getComponentName('saf-radio-group'),
        template: radioGroupTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafRadioGroup as default, safRadioGroupConfig };
