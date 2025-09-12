import type { AugmentClassEvents } from '../../utils/types.js';
import { Windows } from './windows.js';
export declare const safWindowsConfig: {
    readonly events: {
        readonly onAdd: "add";
    };
};
declare const SafWindows: () => typeof Windows;
export default SafWindows;
export type SafWindowsInstance = AugmentClassEvents<Windows, typeof safWindowsConfig>;
