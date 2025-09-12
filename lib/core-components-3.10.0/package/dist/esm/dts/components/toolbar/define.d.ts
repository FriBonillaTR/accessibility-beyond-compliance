import type { AugmentClassEvents } from '../../utils/types.js';
import { Toolbar } from './toolbar.js';
declare const SafToolbar: () => typeof Toolbar;
export default SafToolbar;
export type SafToolbarInstance = AugmentClassEvents<Toolbar>;
