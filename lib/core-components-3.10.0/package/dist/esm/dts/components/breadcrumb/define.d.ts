import type { AugmentClassEvents } from '../../utils/types.js';
import { Breadcrumb } from './breadcrumb.js';
declare const SafBreadcrumb: () => typeof Breadcrumb;
export default SafBreadcrumb;
export type SafBreadcrumbInstance = AugmentClassEvents<Breadcrumb>;
