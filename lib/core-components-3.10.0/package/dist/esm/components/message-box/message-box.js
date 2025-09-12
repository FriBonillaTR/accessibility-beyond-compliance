import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { MessageBoxAppearanceEnum } from './message-box.options.js';

/**
 * A class for MessageBox
 */
class MessageBox extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines the appearance of the message box user.
         *
         * @public
         */
        this.appearance = MessageBoxAppearanceEnum.AGENT;
        /**
         * Hides default `agent` and `user` avatar components in message. It doesn't affect any slotted custom avatar.
         *
         * @public
         */
        this.hideAvatar = false;
        /**
         * The option to enable or disable presentation in the contained Avatar component.
         *
         * @a11y
         * @public
         */
        this.avatarPresentation = true;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    hideProcessingAvatar() {
        if (this.slottedNodes[0]) {
            this.hideAvatar = true;
        }
    }
    handleProgressTextPresence() {
        this.toggleAttribute('has-progress-text', !!this.slottedNodes[0]);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    slottedNodesChanged() {
        this.hideProcessingAvatar();
        this.handleProgressTextPresence();
    }
}
__decorate([
    attr
], MessageBox.prototype, "appearance", void 0);
__decorate([
    attr({ attribute: 'hide-avatar', mode: 'boolean' }),
    observable
], MessageBox.prototype, "hideAvatar", void 0);
__decorate([
    attr({ attribute: 'user-label' })
], MessageBox.prototype, "userLabel", void 0);
__decorate([
    attr({ attribute: 'avatar-presentation', mode: 'boolean' })
], MessageBox.prototype, "avatarPresentation", void 0);
__decorate([
    observable
], MessageBox.prototype, "slottedNodes", void 0);

export { MessageBox };
