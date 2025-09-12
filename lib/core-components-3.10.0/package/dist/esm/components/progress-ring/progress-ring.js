import { __decorate } from 'tslib';
import { attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { SafA11y } from '../../services/a11y.js';
import { Progress } from '../progress/progress.js';
import { ProgressRingSizeEnum } from './progress-ring.options.js';

/**
 * An circular Progress HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#progressbar | ARIA progressbar }.
 *
 * @slot indeterminate - The slot for a custom indeterminate indicator
 * @slot determinate - The slot for a custom determinate indicator
 * @csspart progress - Represents the progress element
 * @csspart determinate - The determinate indicator
 * @csspart background - The background
 *
 * @public
 */
class ProgressRing extends Progress {
    constructor() {
        super(...arguments);
        /**
         * Determines progress ring size.
         * @public
         */
        this.progressSize = ProgressRingSizeEnum.small;
        /**
         * The text that follows the loading complete number % in message announcements - Useful for translations
         * @public
         * @a11y
         * @remarks This attr is duplicated here just to change the description and category
         */
        this.completeLabel = 'complete';
    }
    announceValue() {
        if (!this.valueAnnounced) {
            this.valueAnnounced = true;
            const message = `${Math.round(this.percentComplete)}% complete`;
            SafA11y.announce(message);
            setTimeout(() => {
                this.valueAnnounced = false;
            }, Progress.ANNOUNCEMENT_DEBOUNCE);
        }
    }
}
__decorate([
    attr({ attribute: 'progress-size' })
], ProgressRing.prototype, "progressSize", void 0);
__decorate([
    attr({ attribute: 'complete-label' })
], ProgressRing.prototype, "completeLabel", void 0);

export { ProgressRing };
