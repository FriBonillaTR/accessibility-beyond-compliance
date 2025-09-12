import { getRegistry, getComponentName } from '@saffron/config';
import SafIcon from '../../icon/define.js';
import { TreeItem } from './tree-item.js';
import { styles } from './tree-item.styles.js';
import { treeItemTemplate } from './tree-item.template.js';

const safTreeItemConfig = {
    events: {
        expandedChange: 'expanded-change',
        selectedChange: 'selected-change',
    },
};
const SafTreeItem = () => {
    SafIcon();
    return TreeItem.define({
        name: getComponentName('saf-tree-item'),
        template: treeItemTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafTreeItem as default, safTreeItemConfig };
