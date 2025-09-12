import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
import { ARIAGlobalStatesAndProperties } from '../aria-global/aria-global.js';
import { FormAssociatedButton } from './button.form-associated.js';
import { ButtonAppearance, ButtonShape, ButtonType } from './button.options.js';
import { ComponentDensityWithExtraCompact } from '../../utils/index.js';
/**
 * contains attributes and logic related to buttons in general (i.e. disabled, autofocus, aria attributes)
 */
declare class ButtonBase extends FASTElement {
    /**
     * Prevents the user from interacting with the component.
     */
    disabled: boolean;
    /**
     * Determines if the element should receive document focus on page load.
     *
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    control: HTMLButtonElement;
    /**
     * Pass through for a div that adds additional information for the button, which uses aria-describedby to associate the two
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     *
     * @public
     */
    ariaControls: string | null;
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
     *
     * @public
     */
    ariaHaspopup: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | string | null;
    /**
     * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
     *
     * @public
     */
    ariaExpanded: 'true' | 'false' | string | null;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see {@link https://www.w3.org/WAI/PF/aria/roles#button} for more information
     * @public
     * @remarks
     * HTML Attribute: aria-pressed
     */
    ariaPressed: 'true' | 'false' | 'mixed' | string | null;
    /**
     * attr for passing aria-label to the button without also being applied to the component element
     *
     * @public
     */
    a11yAriaLabel: string;
    /**
     * attr for passing role to the button without also being applied to the component element
     *
     * @public
     */
    a11yRole: string;
    /**
     * attr for passing aria-valuenow to the button
     *
     * @public
     */
    a11yAriaValueNow: string;
    /**
     * attr for passing aria-valuemin to the button
     *
     * @public
     */
    a11yAriaValueMin: string;
    /**
     * attr for passing aria-valuemax to the button
     *
     * @public
     */
    a11yAriaValueMax: string;
    /**
     * attr for passing aria-orientation to the button
     *
     * @public
     */
    a11yAriaOrientation: string;
    /**
     * attr for passing aria-roledescription to the button
     *
     * @public
     */
    a11yAriaRoleDescription: string;
    /**
     * Indicates the current "selected" state.
     *
     * @public
     */
    ariaSelected: 'true' | 'false' | string | null;
}
/**
 * contains attributes and logic related to Saffron button (i.e. density, layout, shape)
 */
declare class Button extends ButtonBase {
    /**
     * Determines the visual appearance of the button.
     *
     * @public
     */
    appearance: ButtonAppearance;
    /**
     * Determines if the icon buttons are rectangle (default) or circular shape. Shape circle only affects icon buttons.
     *
     * @public
     */
    shape: ButtonShape;
    /**
     * Adds styles to render an icon only button
     *
     * @public
     */
    iconOnly: boolean;
    /**
     * Adds styles to nested buttons used within other components
     *
     * @public
     */
    nestedItem: boolean;
    /**
     * If set to `block`, will have the button expand to the full width of its container
     *
     * @public
     */
    layout: 'block' | undefined;
    /**
     * Used to change the spacing in and around the component
     *
     * @public
     */
    density: ComponentDensityWithExtraCompact;
}
/**
 * contains attributes and logic related to form associated buttons (i.e. name, value, form submission logic)
 */
declare class FormButton extends FormAssociatedButton {
    protected autofocusChanged(): void;
    /**
     * The `id` of a form to associate the element to.
     *
     * @public
     * @remarks
     * HTML Attribute: form
     */
    formId: string;
    /**
     * The URL that processes the information submitted by the button.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formaction
     */
    formaction: string;
    protected formactionChanged(): void;
    /**
     * Specifies how to encode the form data that is submitted.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formenctype
     */
    formenctype: string;
    protected formenctypeChanged(): void;
    /**
     * Specifies the HTTP method used to submit the form.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formmethod
     */
    formmethod: string;
    protected formmethodChanged(): void;
    /**
     * Specifies that the form is not to be validated when it is submitted.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formnovalidate
     */
    formnovalidate: boolean;
    protected formnovalidateChanged(): void;
    /**
     * Indicates where to display the response from submitting the form.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formtarget
     */
    formtarget: '_self' | '_blank' | '_parent' | '_top';
    protected formtargetChanged(): void;
    /**
     * The default behavior of the button.
     *
     * @public
     * @remarks
     * HTML Attribute: type
     */
    type: ButtonType;
    protected typeChanged(previous: ButtonType | undefined, next: ButtonType): void;
    validate(): void;
    /**
     * Submits the parent form
     */
    private handleSubmission;
    /**
     * Resets the parent form
     */
    private handleFormReset;
    focus(options?: FocusOptions): void;
    private _keypressHandler;
}
interface ButtonBase extends ARIAGlobalStatesAndProperties {
}
interface FormButton extends StartEnd, Button {
}
export { ButtonBase, Button, FormButton };
