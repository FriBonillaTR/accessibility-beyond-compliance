import { getRegistry, getComponentName } from '@saffron/config';
import { DatePicker } from './date-picker.js';
import { styles } from './date-picker.styles.js';
import { datePickerTemplate } from './date-picker.template.js';
import SafAnchoredRegion from '../anchored-region/define.js';
import SafButtonEmbedded from '../button-embedded/define.js';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import CalendarDefine from './calendar/define.js';
import DateMaskedInputDefine from './date-masked-input/define.js';

const safDatePickerConfig = {
    events: {
        onInput: 'input',
        onChange: 'change',
        onOpen: 'open',
        onClose: 'close',
    },
};
const SafDatePicker = () => {
    SafAnchoredRegion();
    SafButtonEmbedded();
    SafButton();
    DateMaskedInputDefine();
    CalendarDefine();
    SafIcon();
    SafSrOnly();
    return DatePicker.define({
        name: getComponentName('saf-date-picker'),
        template: datePickerTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafDatePicker as default, safDatePickerConfig };
