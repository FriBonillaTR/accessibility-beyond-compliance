import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafDivider from '../divider/define.js';
import SafIcon from '../icon/define.js';
import SafNumberField from '../number-field/define.js';
import SafOption from '../option/define.js';
import SafSelect from '../select/define.js';
import { Pagination } from './pagination.js';
import { styles } from './pagination.styles.js';
import { paginationTemplate } from './pagination.template.js';

const safPaginationConfig = {
    events: {
        onChange: 'change',
        onItemsPerPageChange: 'items-per-page-change',
        onPrevious: 'previous',
        onNext: 'next',
    },
};
const SafPagination = () => {
    SafButton();
    SafIcon();
    SafDivider();
    SafNumberField();
    SafSelect();
    SafOption();
    return Pagination.define({
        name: getComponentName('saf-pagination'),
        template: paginationTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafPagination as default, safPaginationConfig };
