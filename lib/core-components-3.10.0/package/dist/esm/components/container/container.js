import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';

class Container extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Controls the maximum width of the container based on CSS container queries.
         *
         * @public
         */
        this.maxWidth = undefined;
        /**
         * Determines if the content should be centered.
         *
         * @defaultValue false
         * @public
         */
        this.centered = false;
        /**
         * Used to disable the padding on the container. Typically used for components that have padding like tabs and navigation.
         *
         * @defaultValue false
         * @public
         */
        this.disablePadding = false;
    }
}
__decorate([
    attr({ attribute: 'max-width' })
], Container.prototype, "maxWidth", void 0);
__decorate([
    attr({ attribute: 'centered' })
], Container.prototype, "centered", void 0);
__decorate([
    attr({ attribute: 'disable-padding' })
], Container.prototype, "disablePadding", void 0);

export { Container };
