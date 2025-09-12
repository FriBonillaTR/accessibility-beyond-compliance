import { __decorate } from 'tslib';
import { FASTElement, Observable, Updates, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { keyTab, keyEscape } from '@microsoft/fast-web-utilities';
import { isTabbable } from 'tabbable';
import { Logger } from '../../services/logger.js';

/**
 * A Dialog Custom HTML Element, based on FASTDialog class.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#dialog | ARIA dialog }.
 *
 * @slot - The default slot for the dialog content
 * @csspart positioning-region - A wrapping element used to center the dialog and position the modal overlay
 * @csspart overlay - The modal dialog overlay
 * @csspart control - The dialog element
 * @fires cancel - Fires a custom 'cancel' event when the modal overlay is clicked
 * @fires close - Fires a custom 'close' event when the dialog is hidden
 *
 * @public
 */
class DialogBase extends FASTElement {
    constructor() {
        // **************
        // Common dialog attributes
        // **************
        super(...arguments);
        /**
         * Attribute that allows the modal to be hidden under the overlay of other dialog based component.
         * Depends on 'depth' field.
         *
         * @internal
         */
        this.inactive = false;
        // **************
        // Implementation
        // **************
        /**
         * @internal
         */
        this.isTrappingFocus = false;
        /**
         * Component's depth among other dialog based components. If 0 - component is active (on top), otherwise component is in background.
         *
         * @internal
         */
        this.depth = 0;
        this.handleDocumentKeydown = (e) => {
            if (!e.defaultPrevented && !this.isHidden && this.depth === 0) {
                switch (e.key) {
                    case keyEscape:
                        this.dismiss();
                        e.preventDefault();
                        break;
                    case keyTab:
                        this.handleTabKeyDown(e);
                        break;
                }
            }
        };
    }
    /**
     * @internal
     */
    dismiss() {
        this.$emit('dismiss', null, { bubbles: false });
        if (this.hasCancelEvent) {
            this.$emit('cancel', null, { bubbles: false });
        }
        this.hide();
    }
    /**
     * The method to show the dialog.
     * Basic functionality for showing the dialog.
     * Inheriting classes are expected to implement the show() function
     * either by using this logic (Dialog/Drawer), or overriding it (SideNav)
     *
     * @public
     * @protected
     */
    _show() {
        this.style.setProperty('z-index', 'var(--saf-z-index-dialog)');
        this.isHidden = false;
    }
    /**
     * The method to hide the dialog.
     * Basic functionality for hiding the dialog.
     * Inheriting classes are expected to implement the hide() function
     * either by using this logic (Dialog/Drawer), or overriding it (SideNav)
     *
     * @public
     * @protected
     */
    _hide() {
        this.isHidden = true;
        this.depth = 0;
        this.inactive = false;
        if (this.hasCancelEvent) {
            this.$emit('close', null, { bubbles: false });
        }
        setTimeout(() => {
            this.style.removeProperty('z-index');
        }, 200);
    }
    /**
     * The handler for the scroll event of content element.
     *
     * @internal
     */
    scrollHandler() {
        // this fixes the anchored-region component, since the scroll event can't be captured for the elements inside the shadow DOM
        this.$emit('scroll');
    }
    /**
     * The method to focus anchor element.
     *
     * @internal
     */
    focusTriggerId() {
        const trigger = document.getElementById(this.triggerId);
        if (!trigger) {
            const tag = this.localName;
            Logger.error(`${tag}: Failed to focus the trigger element. The triggerId '${this.triggerId}' does not match any element on the page. Please ensure that the triggerId is correct.`);
            return;
        }
        trigger.focus();
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        // Run any component functions that need to be called on connectedCallback
        if (this.initialize) {
            setTimeout(() => {
                this.initialize();
            });
        }
        document.addEventListener(this.openEventName, (e) => {
            this.handleShow(e);
        });
        document.addEventListener(this.hideEventName, (e) => {
            this.handleHide(e);
        });
        document.addEventListener('keydown', (e) => {
            this.handleDocumentKeydown(e);
        });
        this.notifier = Observable.getNotifier(this);
        // `hidden` in dialog/drawer, `state` in side-nav
        this.notifier.subscribe(this, this.hideStateAttribute);
        this.updateTrapFocus();
        // this covers the case when nested dialog renders dynamically
        if (!this.isHidden && this.isModal) {
            this.$emit(this.openEventName, null);
        }
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        // Run any component functions that need to be called on connectedCallback
        if (this.destroy) {
            setTimeout(() => {
                this.destroy();
            });
        }
        document.removeEventListener(this.openEventName, (e) => {
            this.handleShow(e);
        });
        document.removeEventListener(this.hideEventName, (e) => {
            this.handleHide(e);
        });
        // remove keydown event listener
        document.removeEventListener('keydown', (e) => {
            this.handleDocumentKeydown(e);
        });
        // if we are trapping focus remove the focusin listener
        this.updateTrapFocus(false);
        this.notifier.unsubscribe(this, this.hideStateAttribute);
        if (!this.isHidden && this.isModal) {
            this.$emit(this.hideEventName, null);
        }
    }
    /**
     * @internal
     */
    handleChange(source, propertyName) {
        switch (propertyName) {
            case this.hideStateAttribute:
                this.updateTrapFocus();
                if (this.isHidden)
                    this.$emit(this.hideEventName, null);
                else
                    this.$emit(this.openEventName, null);
                if (this.isHidden && this.triggerId && this.isModal && !this.preventTriggerFocus) {
                    this.focusTriggerId();
                }
                break;
        }
    }
    /**
     * @internal
     */
    handleShow(e) {
        // @todo - consider adding abstract for open/close to make this easier between components
        if (!this.isHidden && e.target !== this) {
            if (this.isModal && !this.contains(e.target)) {
                this.inactive = true;
            }
            this.depth++;
        }
    }
    /**
     * @internal
     */
    handleHide(e) {
        // @todo - consider adding abstract for open/close to make this easier between components
        if (e.target !== this && this.depth) {
            this.depth--;
            if (this.depth === 0) {
                this.inactive = false;
                if (this.isTrappingFocus && !this.isHidden && !e.target.triggerId) {
                    this.focusFirstElement();
                }
            }
        }
    }
    handleDocumentFocus(e) {
        if (!e.defaultPrevented && this.shouldForceFocus(e.target)) {
            this.focusFirstElement();
            e.preventDefault();
        }
    }
    handleTabKeyDown(e) {
        var _a, _b;
        if (this.noFocusTrap || this.isHidden) {
            return;
        }
        const bounds = this.getTabQueueBounds();
        if (bounds.length === 0) {
            return;
        }
        if (bounds.length === 1) {
            // keep focus on single element
            bounds[0].focus();
            e.preventDefault();
            return;
        }
        const shadowTarget = (_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement;
        if (e.shiftKey && (e.target === bounds[0] || shadowTarget === bounds[0])) {
            bounds[bounds.length - 1].focus();
            e.preventDefault();
        }
        else if (!e.shiftKey &&
            (e.target === bounds[bounds.length - 1] || shadowTarget === bounds[bounds.length - 1])) {
            bounds[0].focus();
            e.preventDefault();
        }
        return;
    }
    getTabQueueBounds() {
        const bounds = DialogBase.reduceTabbableItems([], this);
        if (this.closeButtonElement instanceof HTMLElement) {
            bounds.unshift(this.closeButtonElement);
        }
        return bounds;
    }
    /**
     * focus on first element of tab queue
     *
     * @internal
     */
    focusFirstElement() {
        const bounds = this.getTabQueueBounds();
        if (this.titleElement instanceof HTMLElement) {
            this.titleElement.focus();
        }
        else if (bounds.length > 0) {
            bounds[0].focus();
        }
        else {
            if (this.dialog instanceof HTMLElement) {
                this.dialog.focus();
            }
        }
    }
    /**
     * we should only focus if focus has not already been brought to the dialog
     *
     * @internal
     */
    shouldForceFocus(currentFocusElement) {
        return this.isTrappingFocus && !this.contains(currentFocusElement) && this.depth === 0;
    }
    /**
     * Should be active trapping focus
     */
    shouldTrapFocus() {
        return !this.noFocusTrap && !this.isHidden;
    }
    /**
     *
     *
     * @internal
     */
    updateTrapFocus(shouldTrapFocusOverride) {
        const shouldTrapFocus = shouldTrapFocusOverride === undefined
            ? this.shouldTrapFocus()
            : shouldTrapFocusOverride;
        if (shouldTrapFocus && !this.isTrappingFocus) {
            this.isTrappingFocus = true;
            // Add an event listener for focusin events if we are trapping focus
            document.addEventListener('focusin', (e) => {
                this.handleDocumentFocus(e);
            });
            Updates.enqueue(() => {
                if (this.shouldForceFocus(document.activeElement)) {
                    this.focusFirstElement();
                }
            });
        }
        else if (!shouldTrapFocus && this.isTrappingFocus) {
            this.isTrappingFocus = false;
            // remove event listener if we are not trapping focus
            document.removeEventListener('focusin', (e) => {
                this.handleDocumentFocus(e);
            });
        }
    }
    /**
     * Reduce a collection to only its focusable elements.
     *
     * @param elements - Collection of elements to reduce
     * @param element - The current element
     *
     * @internal
     */
    static reduceTabbableItems(elements, element) {
        var _a;
        if (element.getAttribute('tabindex') === '-1' || element.hidden) {
            return elements;
        }
        if (isTabbable(element) || DialogBase.isFocusableFastElement(element)) {
            elements.push(element);
        }
        if (element.childElementCount) {
            Array.from(element.children).forEach((child) => {
                elements = DialogBase.reduceTabbableItems(elements, child);
            });
        }
        if ((_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.childElementCount) {
            Array.from(element.shadowRoot.children).forEach((child) => {
                elements = DialogBase.reduceTabbableItems(elements, child);
            });
        }
        return elements;
    }
    /**
     * Test if element is focusable fast element
     *
     * @param element - The element to check
     *
     * @internal
     */
    static isFocusableFastElement(element) {
        var _a, _b;
        return (!!((_b = (_a = element.$fastController) === null || _a === void 0 ? void 0 : _a.definition.shadowOptions) === null || _b === void 0 ? void 0 : _b.delegatesFocus) &&
            !element.hasAttribute('disabled'));
    }
}
__decorate([
    attr({ attribute: 'aria-describedby' })
], DialogBase.prototype, "ariaDescribedby", void 0);
__decorate([
    attr({ attribute: 'aria-labelledby' })
], DialogBase.prototype, "ariaLabelledby", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], DialogBase.prototype, "ariaLabel", void 0);
__decorate([
    attr({ attribute: 'trigger-id' })
], DialogBase.prototype, "triggerId", void 0);
__decorate([
    attr({ mode: 'boolean' })
], DialogBase.prototype, "inactive", void 0);

export { DialogBase };
