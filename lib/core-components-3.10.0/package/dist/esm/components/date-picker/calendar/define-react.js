import wrap from '../../../react-components/wrap.js';
import CalendarDefine, { safCalendarConfig } from './define.js';

const SafReactCalendar = wrap(CalendarDefine(), safCalendarConfig);

export { SafReactCalendar as default };
