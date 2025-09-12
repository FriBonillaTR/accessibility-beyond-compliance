import { __decorate } from 'tslib';
import { FASTElement, Updates, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { applyMixins } from '../../utils/apply-mixins.js';
import { ComponentDensityEnum } from '../../utils/global-enums.js';
import { AnchorBase } from '../anchor/anchor.js';
import { ButtonBase } from '../button/button.js';
import { ActionCardActionModeEnum } from './action-card-action.options.js';

/**
 * A class for ActionCardAction
 */
class ActionCardAction extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The density of the action card action
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Mode of the action, can be 'a' or 'button'.
         * @public
         * @defaultValue button
         */
        this.mode = ActionCardActionModeEnum.button;
        this.cardTitle = '';
        /**
         * The text of the screen-reader only text that notifies screen-reader users of the value of the close button.
         *
         * @a11y
         * @public
         * @internal
         */
        this.description = '';
    }
    modeChanged() {
        Updates.enqueue(() => {
            var _a, _b;
            (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.control')) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-describedby', 'control-description');
        });
    }
    slottedCardTitleElementsChanged() {
        var _a;
        this.cardTitle = ((_a = this.slottedCardTitleElements[0]) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    }
    slottedDescriptionElementsChanged() {
        var _a;
        this.description = ((_a = this.slottedDescriptionElements[0]) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    }
}
__decorate([
    attr
], ActionCardAction.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'mode' })
], ActionCardAction.prototype, "mode", void 0);
__decorate([
    observable
], ActionCardAction.prototype, "slottedCardTitleElements", void 0);
__decorate([
    observable
], ActionCardAction.prototype, "slottedDescriptionElements", void 0);
__decorate([
    observable
], ActionCardAction.prototype, "description", void 0);
applyMixins(ActionCardAction, { ctor: AnchorBase, exclude: ['ariaDisabled'] }, { ctor: ButtonBase, exclude: ['disabled', 'ariaDisabled'] });

export { ActionCardAction };
