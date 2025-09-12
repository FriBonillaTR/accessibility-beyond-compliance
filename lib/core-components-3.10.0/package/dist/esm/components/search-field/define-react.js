import wrap from '../../react-components/wrap.js';
import SafSearchField, { safSearchFieldConfig } from './define.js';

const SafReactSearchField = wrap(SafSearchField(), safSearchFieldConfig);

export { SafReactSearchField as default };
