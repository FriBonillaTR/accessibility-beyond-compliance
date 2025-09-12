import type { AugmentClassEvents } from '../../../utils/types.js';
import { Window } from './window.js';
export declare const safWindowConfig: {
    readonly events: {
        readonly onClose: "close";
    };
};
declare const SafWindow: () => typeof Window;
export default SafWindow;
export type SafWindowInstance = AugmentClassEvents<Window, typeof safWindowConfig>;
