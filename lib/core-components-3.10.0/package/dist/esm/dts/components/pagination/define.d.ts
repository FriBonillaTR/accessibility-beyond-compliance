import type { AugmentClassEvents } from '../../utils/types.js';
import { Pagination } from './pagination.js';
export declare const safPaginationConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onItemsPerPageChange: "items-per-page-change";
        readonly onPrevious: "previous";
        readonly onNext: "next";
    };
};
type SafPaginationEventDetailAugment = {
    detail: number;
};
export type SafPaginationEventDetails = {
    change: SafPaginationEventDetailAugment;
    'items-per-page-change': SafPaginationEventDetailAugment;
    previous: SafPaginationEventDetailAugment;
    next: SafPaginationEventDetailAugment;
};
declare const SafPagination: () => typeof Pagination;
export default SafPagination;
export type SafPaginationInstance = AugmentClassEvents<Pagination, typeof safPaginationConfig, SafPaginationEventDetails>;
