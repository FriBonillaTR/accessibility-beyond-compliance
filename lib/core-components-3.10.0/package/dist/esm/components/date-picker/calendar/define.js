import { getRegistry, getComponentName } from '@saffron/config';
import { Calendar } from './calendar.js';
import { styles } from './calendar.styles.js';
import { calendarTemplate } from './calendar.template.js';
import SafButton from '../../button/define.js';
import ClickAwayListenerDefine from '../../click-away-listener/define.js';
import SafIcon from '../../icon/define.js';
import SafOption from '../../option/define.js';
import SafSelect from '../../select/define.js';
import SafSrOnly from '../../sr-only/define.js';

const CalendarDefine = () => {
    ClickAwayListenerDefine();
    SafSrOnly();
    SafSelect();
    SafOption();
    SafIcon();
    SafButton();
    return Calendar.define({
        name: getComponentName('saf-calendar'),
        template: calendarTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};
const safCalendarConfig = {
    events: {
        onClose: 'close',
        onDateSelected: 'date-selected',
    },
};

export { CalendarDefine as default, safCalendarConfig };
