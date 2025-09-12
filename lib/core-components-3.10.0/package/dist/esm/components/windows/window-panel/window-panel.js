import { __decorate } from 'tslib';
import { attr } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { TabPanel } from '../../tabs/tab-panel/tab-panel.js';

/**
 * A class derived from the Tab Panel foundation component
 */
class WindowPanel extends TabPanel {
    constructor() {
        super(...arguments);
        /**
         * Determines whether panel is full-width without padding.
         * @public
         */
        this.isFullWidth = false;
    }
}
__decorate([
    attr({ attribute: 'is-full-width', mode: 'boolean' })
], WindowPanel.prototype, "isFullWidth", void 0);

export { WindowPanel };
