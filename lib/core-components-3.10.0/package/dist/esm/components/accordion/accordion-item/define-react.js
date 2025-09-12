import wrap from '../../../react-components/wrap.js';
import SafAccordionItem, { safAccordionConfig } from './define.js';

const SafReactAccordionItem = wrap(SafAccordionItem(), safAccordionConfig);

export { SafReactAccordionItem as default };
