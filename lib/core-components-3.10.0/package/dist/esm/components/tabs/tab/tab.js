import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../../utils/apply-mixins.js';
import { StartEnd } from '../../../utils/start-end-template.js';

/**
 * A Tab Component to be used with {@link @saffron/core-components#(FASTTabs:class)}
 *
 * @slot start - Content which can be provided before the tab content
 * @slot end - Content which can be provided after the tab content
 * @slot - The default slot for the tab content
 *
 * @public
 */
class Tab extends FASTElement {
}
__decorate([
    attr({ mode: 'boolean' })
], Tab.prototype, "disabled", void 0);
applyMixins(Tab, StartEnd);

export { Tab };
