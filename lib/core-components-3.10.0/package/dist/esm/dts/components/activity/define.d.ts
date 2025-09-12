import type { AugmentClassEvents } from '../../utils/types.js';
import { Activity } from './activity.js';
declare const SafActivity: () => typeof Activity;
export default SafActivity;
export type SafActivityInstance = AugmentClassEvents<Activity>;
