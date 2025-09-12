import type { AugmentClassEvents } from '../../utils/types.js';
import { Accordion } from './accordion.js';
export declare const safAccordionConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
export type SafAccordionEventDetails = {
    change: {
        detail: string;
    };
};
declare const SafAccordion: () => typeof Accordion;
export default SafAccordion;
export type SafAccordionInstance = AugmentClassEvents<Accordion, typeof safAccordionConfig, SafAccordionEventDetails>;
