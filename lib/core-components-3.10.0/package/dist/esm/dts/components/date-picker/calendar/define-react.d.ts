import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import type { SafCalendarEventDetails, SafCalendarInstance } from './define.js';
import { safCalendarConfig } from './define.js';
export type SafCalendarProps = SafReactComponentProps<SafCalendarInstance, typeof safCalendarConfig, SafCalendarEventDetails>;
declare const SafReactCalendar: ComponentType<SafCalendarProps>;
export default SafReactCalendar;
