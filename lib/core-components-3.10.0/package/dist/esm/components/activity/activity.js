import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { StartEnd } from '../../utils/start-end-template.js';

/**
 * A class for Activity
 */
class Activity extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The unique ID for the activity header. This is used for accessibility. If there are multiple `saf-activity` components on your page or SPA, make sure to create a unique ID for each activity header
         *
         * @a11y
         * @public
         */
        this.headerId = 'headerId';
        /**
         * The unique ID for the time element of the activity list. This is used for accessibility. If there are multiple `saf-activity` components on your page or SPA, make sure to create a unique ID for each time element
         *
         * @a11y
         * @public
         */
        this.timeId = 'timeId';
    }
}
__decorate([
    attr
], Activity.prototype, "time", void 0);
__decorate([
    attr({ attribute: 'header-id' })
], Activity.prototype, "headerId", void 0);
__decorate([
    attr({ attribute: 'time-id' })
], Activity.prototype, "timeId", void 0);
applyMixins(Activity, StartEnd);

export { Activity };
