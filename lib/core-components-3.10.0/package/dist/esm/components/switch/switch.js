import { __decorate } from 'tslib';
import { attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { keySpace, keyEnter } from '@microsoft/fast-web-utilities';
import { FormAssociatedSwitch } from './switch.form-associated.js';

/**
 * A Switch Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#switch | ARIA switch }.
 *
 * @slot - The default slot for the label
 * @slot switch - For content inside of the thumb
 * @csspart label - The label element
 * @csspart switch - The container for the switch
 * @csspart checked-indicator - The checked indicator element
 * @csspart checked - The checked icon
 * @csspart unchecked - The unchecked icon
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
class Switch extends FormAssociatedSwitch {
    readOnlyChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.readOnly = this.readOnly;
        }
    }
    constructor() {
        super();
        /**
         * The element's value to be included in form submission when checked.
         * Default to "on" to reach parity with input[type="checkbox"]
         *
         * @internal
         */
        this.initialValue = 'on';
        /**
         * @internal
         */
        this.keypressHandler = (e) => {
            if (this.readOnly) {
                return;
            }
            switch (e.key) {
                case keyEnter:
                case keySpace:
                    this.checked = !this.checked;
                    break;
            }
        };
        /**
         * @internal
         */
        this.clickHandler = (_e) => {
            if (!this.disabled && !this.readOnly) {
                this.checked = !this.checked;
            }
        };
        this.proxy.setAttribute('type', 'checkbox');
    }
}
__decorate([
    attr({ attribute: 'readonly', mode: 'boolean' })
], Switch.prototype, "readOnly", void 0);
__decorate([
    observable
], Switch.prototype, "defaultSlottedNodes", void 0);

export { Switch };
