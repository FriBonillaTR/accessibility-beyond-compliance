import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { LogoAppearanceEnum } from './logo.options.js';

/**
 * A class for Logo
 */
class Logo extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines the visual appearance of the logo.
         *
         * @public
         */
        this.appearance = LogoAppearanceEnum.FULL_COLOR;
    }
}
__decorate([
    attr
], Logo.prototype, "appearance", void 0);
__decorate([
    attr({ attribute: 'product-name' })
], Logo.prototype, "productName", void 0);

export { Logo };
