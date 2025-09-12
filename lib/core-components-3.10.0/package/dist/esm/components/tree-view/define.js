import { getRegistry, getComponentName } from '@saffron/config';
import { TreeView } from './tree-view.js';
import { styles } from './tree-view.styles.js';
import { treeViewTemplate } from './tree-view.template.js';

const SafTreeView = () => {
    return TreeView.define({
        name: getComponentName('saf-tree-view'),
        template: treeViewTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafTreeView as default };
