import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Orientation } from '@microsoft/fast-web-utilities';
import { DividerRoleEnum } from './divider.options.js';

/**
 * A Divider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#separator | ARIA separator }
 * or {@link https://www.w3.org/TR/wai-aria-1.1/#presentation | ARIA presentation}.
 *
 * @public
 */
class Divider extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The permitted roles of the divider.
         *
         * @public
         * @remarks
         * HTML Attribute: role
         */
        this.role = DividerRoleEnum.separator;
        /**
         * The orientation of the divider.
         *
         * @public
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = Orientation.horizontal;
    }
}
__decorate([
    attr
], Divider.prototype, "role", void 0);
__decorate([
    attr
], Divider.prototype, "orientation", void 0);

export { Divider };
