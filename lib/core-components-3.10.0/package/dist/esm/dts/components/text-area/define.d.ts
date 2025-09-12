import type { AugmentClassEvents } from '../../utils/types.js';
import { TextArea } from './text-area.js';
export declare const safTextAreaConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
    };
};
declare const SafTextArea: () => typeof TextArea;
export default SafTextArea;
export type SafTextAreaInstance = AugmentClassEvents<TextArea, typeof safTextAreaConfig>;
