import type { AugmentClassEvents } from '../../utils/types.js';
import { Status } from './status.js';
declare const SafStatus: () => typeof Status;
export default SafStatus;
export type SafStatusInstance = AugmentClassEvents<Status>;
