import { __decorate } from 'tslib';
import { attr, observable } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { Anchor } from '../../anchor/anchor.js';

/**
 * A Breadcrumb Item Custom HTML Element.
 *
 * @slot start - Content which can be provided before the breadcrumb content
 * @slot end - Content which can be provided after the breadcrumb content
 * @slot - The default slot for when no href is provided or for providing your own custom elements
 * @slot separator - The slot for providing a custom separator
 * @csspart listitem - The wrapping container for the item, represents a semantic listitem
 * @csspart separator - The wrapping element for the separator
 *
 * @public
 */
class BreadcrumbItem extends Anchor {
    constructor() {
        super(...arguments);
        /**
         * @internal
         */
        this.separator = true;
    }
}
__decorate([
    attr({ attribute: 'a11y-aria-description' })
], BreadcrumbItem.prototype, "a11yAriaDescription", void 0);
__decorate([
    observable
], BreadcrumbItem.prototype, "separator", void 0);

export { BreadcrumbItem };
