import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { safAccordionConfig, type SafAccordionItemInstance } from './define.js';
export type SafAccordionItemProps = SafReactComponentProps<SafAccordionItemInstance, typeof safAccordionConfig>;
declare const SafReactAccordionItem: ComponentType<SafAccordionItemProps>;
export default SafReactAccordionItem;
