import type { AugmentClassEvents } from '../../utils/types.js';
import { Alert } from './alert.js';
export declare const safAlertConfig: {
    readonly events: {
        readonly onClose: "close";
    };
};
declare const SafAlert: () => typeof Alert;
export default SafAlert;
export type SafAlertInstance = AugmentClassEvents<Alert, typeof safAlertConfig>;
