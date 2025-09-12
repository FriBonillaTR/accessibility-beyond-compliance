import { __decorate } from 'tslib';
import { attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Tabs } from '../tabs/tabs.js';

/**
 * A class derived from the FASTTab foundation component
 */
class Windows extends Tabs {
    constructor() {
        super(...arguments);
        /**
         * Indicates whether the windows are addable.
         * @public
         */
        this.addable = true;
        /**
         * The accessible label for the add button.
         * @public
         * @remarks The label for the add button
         */
        this.addAriaLabel = 'Add new window';
    }
    /**
     * Emits a custom 'add' event when the window add button is clicked
     * @public
     * @remarks Fired when the window added
     */
    add() {
        this.$emit('add');
    }
}
__decorate([
    attr({ attribute: 'addable', mode: 'boolean' })
], Windows.prototype, "addable", void 0);
__decorate([
    attr({ attribute: 'add-aria-label' })
], Windows.prototype, "addAriaLabel", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-label' })
], Windows.prototype, "a11yAriaLabel", void 0);

export { Windows };
