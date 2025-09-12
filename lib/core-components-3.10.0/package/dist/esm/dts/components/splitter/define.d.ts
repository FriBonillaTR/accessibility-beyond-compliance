import type { AugmentClassEvents } from '../../utils/types.js';
import { Splitter } from './splitter.js';
export declare const safSplitterConfig: {
    readonly events: {
        readonly onSizeChange: "size-change";
    };
};
declare const SafSplitter: () => typeof Splitter;
export default SafSplitter;
export type SafSplitterInstance = AugmentClassEvents<Splitter, typeof safSplitterConfig>;
