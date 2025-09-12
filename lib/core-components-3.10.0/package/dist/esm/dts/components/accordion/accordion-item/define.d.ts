import type { AugmentClassEvents } from '../../../utils/types.js';
import { AccordionItem } from './accordion-item.js';
export declare const safAccordionConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
declare const SafAccordionItem: () => typeof AccordionItem;
export default SafAccordionItem;
export type SafAccordionItemInstance = AugmentClassEvents<AccordionItem, typeof safAccordionConfig>;
