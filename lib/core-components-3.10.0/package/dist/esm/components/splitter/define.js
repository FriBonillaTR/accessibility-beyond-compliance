import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafIcon from '../icon/define.js';
import SafSrOnly from '../sr-only/define.js';
import SafTooltip from '../tooltip/define.js';
import { Splitter } from './splitter.js';
import { styles } from './splitter.styles.js';
import { splitterTemplate } from './splitter.template.js';

const safSplitterConfig = {
    events: {
        onSizeChange: 'size-change',
    },
};
const SafSplitter = () => {
    SafButton();
    SafIcon();
    SafSrOnly();
    SafTooltip();
    return Splitter.define({
        name: getComponentName('saf-splitter'),
        template: splitterTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafSplitter as default, safSplitterConfig };
