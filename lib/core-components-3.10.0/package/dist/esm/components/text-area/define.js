import { getRegistry, getComponentName } from '@saffron/config';
import { TextArea } from './text-area.js';
import { styles } from './text-area.styles.js';
import { textAreaTemplate } from './text-area.template.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';

const safTextAreaConfig = {
    events: {
        onChange: 'change',
        onInput: 'input',
    },
};
const SafTextArea = () => {
    SafIcon();
    SafSrOnly();
    return TextArea.define({
        name: getComponentName('saf-text-area'),
        template: textAreaTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafTextArea as default, safTextAreaConfig };
