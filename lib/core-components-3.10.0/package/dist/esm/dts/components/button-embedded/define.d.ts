import type { AugmentClassEvents } from '../../utils/types.js';
import { ButtonEmbedded } from './button-embedded.js';
declare const SafButtonEmbedded: () => typeof ButtonEmbedded;
export default SafButtonEmbedded;
export type SafButtonEmbeddedInstance = AugmentClassEvents<ButtonEmbedded>;
