import wrap from '../../../react-components/wrap.js';
import SafTreeItem, { safTreeItemConfig } from './define.js';

const SafReactTreeItem = wrap(SafTreeItem(), safTreeItemConfig);

export { SafReactTreeItem as default };
