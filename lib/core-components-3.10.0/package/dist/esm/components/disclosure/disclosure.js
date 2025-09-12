import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { StartEnd } from '../../utils/start-end-template.js';

/**
 * A Disclosure Custom HTML Element.
 * Based largely on the {@link https://w3c.github.io/aria-practices/#disclosure | disclosure element }.
 *
 * @slot start - Content which can be provided before the summary content
 * @slot end - Content which can be provided after the summary content
 * @slot title - The summary content
 * @slot - The default slot for the disclosure content
 * @fires toggle - fires a toggle event when the summary is toggled
 *
 * @public
 */
class Disclosure extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Whether the disclosure is expanded or not.
         *
         * @public
         */
        this.expanded = false;
        /**
         * Used to had content show and hide the caret.
         *
         * @public
         */
        this.hideCaret = false;
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.setup();
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.details.removeEventListener('toggle', this.onToggle);
    }
    /**
     * Show extra content.
     */
    show() {
        this.details.open = true;
    }
    /**
     * Hide extra content.
     */
    hide() {
        this.details.open = false;
    }
    /**
     * Toggle the current(expanded/collapsed) state.
     */
    toggle() {
        this.details.open = !this.details.open;
    }
    /**
     * Register listener and set default disclosure mode
     */
    setup() {
        this.onToggle = this.onToggle.bind(this);
        this.details.addEventListener('toggle', this.onToggle);
        if (this.expanded) {
            this.show();
        }
    }
    /**
     * Update the aria attr and fire `toggle` event
     */
    onToggle() {
        this.expanded = this.details.open;
        this.$emit('toggle', null, { bubbles: false });
    }
}
__decorate([
    attr({ mode: 'boolean' })
], Disclosure.prototype, "expanded", void 0);
__decorate([
    attr
], Disclosure.prototype, "summary", void 0);
__decorate([
    attr({ attribute: 'hide-caret', mode: 'boolean' })
], Disclosure.prototype, "hideCaret", void 0);
applyMixins(Disclosure, StartEnd);

export { Disclosure };
