import type { AugmentClassEvents } from '../../utils/types.js';
import { Disclosure } from './disclosure.js';
declare const SafDisclosure: () => typeof Disclosure;
export default SafDisclosure;
export type SafDisclosureInstance = AugmentClassEvents<Disclosure>;
