import type { AugmentClassEvents } from '../../utils/types.js';
import { Badge } from './badge.js';
declare const SafBadge: () => typeof Badge;
export default SafBadge;
export type SafBadgeInstance = AugmentClassEvents<Badge>;
