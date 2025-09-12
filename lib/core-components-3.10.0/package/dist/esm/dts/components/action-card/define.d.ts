import { ActionCard } from './action-card.js';
import type { AugmentClassEvents } from '../../utils/types.js';
declare const ActionCardDefine: () => typeof ActionCard;
export default ActionCardDefine;
export type SafActionCardInstance = AugmentClassEvents<ActionCard>;
