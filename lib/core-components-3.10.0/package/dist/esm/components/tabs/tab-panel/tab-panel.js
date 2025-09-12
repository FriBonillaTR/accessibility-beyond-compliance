import { FASTElement } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A TabPanel Component to be used with {@link @saffron/core-components#(Tabs:class)}
 *
 * @slot - The default slot for the tabpanel content
 *
 * @public
 */
class TabPanel extends FASTElement {
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('tabindex', '0');
    }
}

export { TabPanel };
