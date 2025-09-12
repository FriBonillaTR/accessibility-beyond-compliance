import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import '../../utils/index.js';
import { ButtonGroupOrientationEnum } from './button-group.options.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { setAttributeOnChild } from '../../utils/dom-helpers.js';

/**
 * ButtonGroup
 * aria-label: string (required) - To identify the group of buttons
 * role: string (optional) - The role of the button group
 */
class ButtonGroup extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        this.role = 'group';
        /**
         * Determines the orientation of the button group.
         *
         * @public
         */
        this.orientation = ButtonGroupOrientationEnum.horizontal;
    }
    // eslint-disable-next-line lines-between-class-members, @typescript-eslint/lines-between-class-members
    slottedNodesChanged() {
        var _a;
        if ((_a = this.slottedNodes) === null || _a === void 0 ? void 0 : _a.length) {
            /* Sets `group-item` attribute on child `saf-button` components to enable ButtonGroup specific styles */
            if (this.orientation === ButtonGroupOrientationEnum.vertical) {
                // Add vertical modifier for vertical orientation
                setAttributeOnChild(this, getComponentName('saf-button'), 'group-item-vertical');
            }
            else {
                setAttributeOnChild(this, getComponentName('saf-button'), 'group-item');
            }
        }
    }
}
__decorate([
    attr({ attribute: 'aria-label' })
], ButtonGroup.prototype, "ariaLabel", void 0);
__decorate([
    attr
], ButtonGroup.prototype, "density", void 0);
__decorate([
    attr
], ButtonGroup.prototype, "role", void 0);
__decorate([
    attr
], ButtonGroup.prototype, "orientation", void 0);
__decorate([
    observable
], ButtonGroup.prototype, "slottedNodes", void 0);

export { ButtonGroup };
