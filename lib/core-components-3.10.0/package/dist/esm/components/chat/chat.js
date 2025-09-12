import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for Chat
 */
class Chat extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The aria label for the region called chat.
         *
         * @a11y
         * @public
         */
        this.ariaLabel = 'Chat window';
        /**
         * Whether or not the content is being loaded.
         *
         * @public
         */
        this.loading = false;
        /**
         * Text on loading ring.
         *
         * @public
         */
        this.loadingText = 'Processing';
        /**
         * The aria label for the list of chat messages.
         *
         * @a11y
         * @public
         */
        this.messageAriaLabel = 'Chat messages';
    }
    // eslint-disable-next-line lines-between-class-members, @typescript-eslint/lines-between-class-members
    footerNodesChanged() {
        var _a;
        if ((_a = this.footerNodes) === null || _a === void 0 ? void 0 : _a.length) {
            this.footerItemsExist();
        }
    }
    footerItemsExist() {
        var _a;
        const footerItems = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.control');
        footerItems === null || footerItems === void 0 ? void 0 : footerItems.classList.add('has-footer');
    }
}
__decorate([
    attr({ attribute: 'aria-label' })
], Chat.prototype, "ariaLabel", void 0);
__decorate([
    observable,
    attr({ attribute: 'loading', mode: 'boolean' })
], Chat.prototype, "loading", void 0);
__decorate([
    attr({ attribute: 'loading-text' })
], Chat.prototype, "loadingText", void 0);
__decorate([
    attr({ attribute: 'message-aria-label' })
], Chat.prototype, "messageAriaLabel", void 0);
__decorate([
    observable
], Chat.prototype, "footerNodes", void 0);

export { Chat };
