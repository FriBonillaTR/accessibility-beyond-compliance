import type { AugmentClassEvents } from '../../utils/types.js';
import { Container } from './container.js';
declare const SafContainer: () => typeof Container;
export default SafContainer;
export type SafContainerInstance = AugmentClassEvents<Container>;
