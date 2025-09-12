import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { TextAppearanceEnum } from './text.options.js';
import '../../utils/index.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for Text
 */
class Text extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Applies the visual style of the text.
         *
         * @public
         */
        this.appearance = TextAppearanceEnum.bodyDefaultMd;
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
    }
}
__decorate([
    attr
], Text.prototype, "appearance", void 0);
__decorate([
    attr
], Text.prototype, "density", void 0);

export { Text };
