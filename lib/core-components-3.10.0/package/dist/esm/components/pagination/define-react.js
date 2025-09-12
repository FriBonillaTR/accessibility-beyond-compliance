import wrap from '../../react-components/wrap.js';
import SafPagination, { safPaginationConfig } from './define.js';

const SafReactPagination = wrap(SafPagination(), safPaginationConfig);

export { SafReactPagination as default };
