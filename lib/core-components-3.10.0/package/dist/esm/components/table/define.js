import { getRegistry, getComponentName } from '@saffron/config';
import { Table } from './table.js';
import { styles } from './table.styles.js';
import { tableTemplate } from './table.template.js';

const SafTable = () => {
    return Table.define({
        name: getComponentName('saf-table'),
        template: tableTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafTable as default };
