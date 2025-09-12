import type { AugmentClassEvents } from '../../utils/types.js';
import { Dialog } from './dialog.js';
export declare const safDialogConfig: {
    readonly events: {
        readonly onCancel: "cancel";
        readonly onClose: "close";
        readonly onHide: "hide";
        readonly onShow: "show";
    };
};
declare const SafDialog: () => typeof Dialog;
export default SafDialog;
export type SafDialogInstance = AugmentClassEvents<Dialog, typeof safDialogConfig>;
