import type { AugmentClassEvents } from '../../../utils/types.js';
import { BreadcrumbItem } from './breadcrumb-item.js';
declare const SafBreadcrumbItem: () => typeof BreadcrumbItem;
export default SafBreadcrumbItem;
export type SafBreadcrumbItemInstance = AugmentClassEvents<BreadcrumbItem>;
