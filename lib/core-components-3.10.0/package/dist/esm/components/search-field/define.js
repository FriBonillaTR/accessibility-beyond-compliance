import { getRegistry, getComponentName } from '@saffron/config';
import SafButtonEmbedded from '../button-embedded/define.js';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafTooltip from '../tooltip/define.js';
import { SearchField } from './search-field.js';
import { styles } from './search-field.styles.js';
import { searchTemplate } from './search-field.template.js';

const safSearchFieldConfig = {
    events: {
        onSearch: 'search',
        onClear: 'clear',
        onInput: 'input',
        onChange: 'change',
    },
};
const SafSearchField = () => {
    SafButtonEmbedded();
    SafButton();
    SafIcon();
    SafTooltip();
    return SearchField.define({
        name: getComponentName('saf-search-field'),
        template: searchTemplate(),
        styles: styles(),
        shadowOptions: {
            delegatesFocus: true,
        },
        registry: getRegistry(),
    });
};

export { SafSearchField as default, safSearchFieldConfig };
