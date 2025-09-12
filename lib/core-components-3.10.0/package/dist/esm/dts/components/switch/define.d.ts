import type { AugmentClassEvents } from '../../utils/types.js';
import { Switch } from './switch.js';
export declare const safSwitchConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
declare const SafSwitch: () => typeof Switch;
export default SafSwitch;
export type SafSwitchInstance = AugmentClassEvents<Switch, typeof safSwitchConfig>;
