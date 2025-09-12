import { AugmentClassEvents } from '../../utils/types.js';
import { ClickAwayListener } from './click-away-listener.js';
declare const ClickAwayListenerDefine: () => typeof ClickAwayListener;
export declare const safClickAwayListenerConfig: {
    readonly events: {
        readonly onClickAway: "click-away";
    };
};
export type SafClickAwayListenerEventDetails = {
    'click-away': {
        detail: EventTarget[];
    };
};
export default ClickAwayListenerDefine;
export type SafClickAwayListenerInstance = AugmentClassEvents<ClickAwayListener, typeof safClickAwayListenerConfig, SafClickAwayListenerEventDetails>;
