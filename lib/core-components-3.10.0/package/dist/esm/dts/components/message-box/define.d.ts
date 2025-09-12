import type { AugmentClassEvents } from '../../utils/types.js';
import { MessageBox } from './message-box.js';
export declare const safMessageBoxConfig: {
    readonly events: {
        readonly onClick: "click";
    };
};
declare const SafMessageBox: () => typeof MessageBox;
export default SafMessageBox;
export type SafMessageBoxInstance = AugmentClassEvents<MessageBox, typeof safMessageBoxConfig>;
