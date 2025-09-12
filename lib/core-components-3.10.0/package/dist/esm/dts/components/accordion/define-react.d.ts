import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { SafAccordionEventDetails } from './define.js';
import { safAccordionConfig, type SafAccordionInstance } from './define.js';
export type SafAccordionProps = SafReactComponentProps<SafAccordionInstance, typeof safAccordionConfig, SafAccordionEventDetails>;
declare const SafReactAccordion: ComponentType<SafAccordionProps>;
export default SafReactAccordion;
