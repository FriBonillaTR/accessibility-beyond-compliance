import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { AlertAppearance, AlertType } from './alert.options.js';
import { ComponentDensity } from '../../utils/index.js';
export declare class Alert extends FASTElement {
    /**
     * The appearance type of the alert.
     *
     * @defaultValue informational
     * @public
     */
    appearance: AlertAppearance;
    /**
     * The type of alert. If the type is `inline`, or default, the alert will appear next to the element that triggered it. If `toast`, it will appear at the top of the web page.
     *
     * @public
     */
    alertType: AlertType;
    /**
     * The text of `aria-label` inside of the icon used in the alert.
     *
     * @a11y
     * @public
     */
    iconAriaLabel: string;
    /**
     * Set the type of role that the saf icon will have in the saf alert. If this setting is used to hide the status icon from screen reader users its meaning must be reflected in the text of the alert message
     *
     * @public
     */
    iconPresentation: boolean;
    /**
     * The text of the screen-reader only text that notifies screen-reader users of the value of the close button.
     *
     * @a11y
     * @public
     */
    closeAriaLabel: string;
    /**
     * The amount of time in seconds that the alert remains visible. The minimum duration for an alert is 10 seconds. To prevent the alert from disappearing, do not add this attribute or give it a value of 0.
     *
     * @public
     */
    duration: number;
    afterDelay: boolean;
    /**
     * The hidden state of the alert.
     *
     * @public
     */
    isHidden: boolean;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Cause alert to be announced immediately by assistive technologies.
     *
     * @a11y
     * @public
     */
    announce: boolean;
    /**
     * Hide the close button to prevent the alert from being dismissed.
     *
     * @public
     */
    hideCloseButton: boolean;
    /**
     * Function to hide the alert using CSS. Emits the `close` event after the alert is hidden.
     *
     * @public
     */
    close(timer: number): void;
    addClosingClass(): void;
    connectedCallback(): void;
    protected announceContent(): void;
}
