import type { AugmentClassEvents } from '../../utils/types.js';
import { Card } from './card.js';
declare const SafCard: () => typeof Card;
export default SafCard;
export type SafCardInstance = AugmentClassEvents<Card>;
