import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import '../../utils/index.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for ClickAwayListener
 */
class ClickAwayListener extends FASTElement {
    constructor() {
        super(...arguments);
        this.handleClick = (event) => {
            const path = event.composedPath();
            if (!path.includes(this)) {
                this.$emit('click-away', path);
            }
        };
        /**
         * The density of the alert.
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', this.handleClick);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', this.handleClick);
    }
}
__decorate([
    attr
], ClickAwayListener.prototype, "density", void 0);

export { ClickAwayListener };
