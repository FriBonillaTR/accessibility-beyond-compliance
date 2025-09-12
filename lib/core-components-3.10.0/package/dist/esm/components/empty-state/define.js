import { getRegistry, getComponentName } from '@saffron/config';
import { EmptyState } from './empty-state.js';
import { styles } from './empty-state.styles.js';
import { emptyStateTemplate } from './empty-state.template.js';

const SafEmptyState = () => EmptyState.define({
    name: getComponentName('saf-empty-state'),
    template: emptyStateTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafEmptyState as default };
