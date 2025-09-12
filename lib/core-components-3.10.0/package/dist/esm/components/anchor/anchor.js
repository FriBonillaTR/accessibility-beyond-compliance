import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { AnchorAppearanceEnum } from './anchor.options.js';
import '../../utils/index.js';
import { ComponentDensityWithExtraCompactEnum } from '../../utils/global-enums.js';

/**
 * An Anchor Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element }.
 *
 * @slot start - Content which can be provided before the anchor content
 * @slot end - Content which can be provided after the anchor content
 * @slot - The default slot for anchor content
 * @csspart control - The anchor element
 * @csspart content - The element wrapping anchor content
 *
 * @public
 */
class AnchorBase extends FASTElement {
}
__decorate([
    attr
], AnchorBase.prototype, "download", void 0);
__decorate([
    attr
], AnchorBase.prototype, "href", void 0);
__decorate([
    attr
], AnchorBase.prototype, "hreflang", void 0);
__decorate([
    attr
], AnchorBase.prototype, "ping", void 0);
__decorate([
    attr
], AnchorBase.prototype, "referrerpolicy", void 0);
__decorate([
    attr
], AnchorBase.prototype, "rel", void 0);
__decorate([
    attr
], AnchorBase.prototype, "target", void 0);
__decorate([
    attr
], AnchorBase.prototype, "type", void 0);
__decorate([
    observable
], AnchorBase.prototype, "defaultSlottedContent", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], AnchorBase.prototype, "a11yAriaDescription", void 0);
__decorate([
    attr({ attribute: 'a11y-aria-current' })
], AnchorBase.prototype, "a11yAriaCurrent", void 0);
class Anchor extends AnchorBase {
    constructor() {
        super(...arguments);
        /**
         * `deprecated`. Handle click events instead.
         * TODO: Remove in v4
         * @public
         * @deprecated
         */
        this.transferFocus = false;
        /**
         * If true, the anchor will be rendered as a span element instead of an anchor element. Useful for integrating with SPA links like `react-router-dom`.
         *
         * @public
         */
        this.span = false;
        /**
         * The appearance style variant of the anchor.
         * @public
         * @remarks
         * HTML Attribute: appearance
         */
        this.appearance = AnchorAppearanceEnum.anchor;
        /**
         * The density of the anchor when using a CTA appearance.
         * Only applies when appearance is set to a CTA variant.
         * @public
         * @remarks
         * HTML Attribute: density
         */
        this.density = ComponentDensityWithExtraCompactEnum.standard;
        this.transferFocusHandler = (e) => {
            var _a;
            if (this.isKeyboardEvent(e) && e.key !== 'Enter' && e.key !== ' ') {
                return;
            }
            // TODO: Deprecated event. Remove this in v4
            this.$emit('transfer-focus', {
                targetId: (_a = this.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.slice(1),
            });
        };
    }
    transferFocusChanged(prev, next) {
        prev && this.removeEventListener('click', this.transferFocusHandler);
        next && this.addEventListener('click', this.transferFocusHandler);
    }
    isKeyboardEvent(e) {
        return e.type === 'keydown';
    }
}
__decorate([
    attr({ attribute: 'transfer-focus', mode: 'boolean' })
], Anchor.prototype, "transferFocus", void 0);
__decorate([
    attr({ attribute: 'span', mode: 'boolean' })
], Anchor.prototype, "span", void 0);
__decorate([
    attr
], Anchor.prototype, "appearance", void 0);
__decorate([
    attr
], Anchor.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'icon-only', mode: 'boolean' })
], Anchor.prototype, "iconOnly", void 0);
/**
 * Includes ARIA states and properties relating to the ARIA link role
 *
 * @public
 */
class DelegatesARIALink {
}
__decorate([
    attr({ attribute: 'aria-expanded' })
], DelegatesARIALink.prototype, "ariaExpanded", void 0);
applyMixins(DelegatesARIALink, ARIAGlobalStatesAndProperties);
applyMixins(AnchorBase, DelegatesARIALink);
applyMixins(Anchor, StartEnd, DelegatesARIALink);

export { Anchor, AnchorBase, DelegatesARIALink };
