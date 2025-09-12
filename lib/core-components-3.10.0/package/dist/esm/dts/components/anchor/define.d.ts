import type { AugmentClassEvents } from '../../utils/types.js';
import { Anchor } from './anchor.js';
export declare const safAnchorConfig: {
    readonly events: {
        readonly onTransferFocus: "transfer-focus";
    };
};
declare const SafAnchor: () => typeof Anchor;
export default SafAnchor;
export type SafAnchorInstance = AugmentClassEvents<Anchor, typeof safAnchorConfig>;
