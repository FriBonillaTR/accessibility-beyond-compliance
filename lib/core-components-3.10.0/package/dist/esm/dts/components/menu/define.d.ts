import type { AugmentClassEvents } from '../../utils/types.js';
import { Menu } from './menu.js';
declare const SafMenu: () => typeof Menu;
export default SafMenu;
export type SafMenuInstance = AugmentClassEvents<Menu>;
