import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { ProgressStatus } from './progress.options.js';
/**
 * An Progress HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#progressbar | ARIA progressbar }.
 *
 * @slot indeterminate - The slot for a custom indeterminate indicator
 * @csspart progress - Represents the progress element
 * @csspart determinate - The determinate indicator
 * @csspart indeterminate - The indeterminate indicator
 *
 * @public
 */
export declare class Progress extends FASTElement {
    static INDETERMINATE_INTERVAL: number;
    static INDETERMINATE_DELAY: number;
    static ANNOUNCEMENT_DEBOUNCE: number;
    /**
     * The value of the progress
     * @public
     * @remarks
     * HTML Attribute: value
     */
    value: number | null;
    protected valueChanged(): void;
    /**
     * The minimum value
     * @public
     * @remarks
     * HTML Attribute: min
     */
    min: number;
    protected minChanged(): void;
    /**
     * The maximum value
     * @public
     * @remarks
     * HTML Attribute: max
     */
    max: number;
    protected maxChanged(): void;
    private updatePercentComplete;
    /**
     * Applies status appearance colors matching status component
     * @public
     */
    statusColor: ProgressStatus;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     * @public
     *
     */
    message: string;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     * @public
     */
    color: string;
    /**
     * Determines if the progress bar is indeterminate.
     * @public
     */
    indeterminate: boolean;
    /**
     * The text that appears beside the % loading complete number - Useful for translations.
     * @public
     */
    completeLabel: string;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     * @public
     */
    headinglabel: string;
    /**
     * Defines a string value that labels the current element.
     * @public
     * @a11y
     */
    ariaLabel: string;
    /**
     * Optional text to show kind of request being processed, should reflect the state of the progress.
     * @public
     */
    label: string;
    /**
     * Represents the current value of the progress indicator for accessibility purposes.
     * @public
     * @a11y
     */
    ariaValueNow: string;
    /**
     * Represents the minimum value of the progress indicator for accessibility purposes.
     * @public
     * @a11y
     */
    ariaValueMin: string;
    /**
     * Represents the maximum value of the progress indicator for accessibility purposes.
     * @public
     * @a11y
     */
    ariaValueMax: string;
    /**
     * The ID of the element that labels the progress component.
     * This is used to set the `aria-labelledby` attribute for accessibility purposes.
     * @public
     * @a11y
     */
    ariaLabelledBy?: string;
    /**
     * Indicates whether the progress component is paused.
     * When set to true, the progress animation will be paused.
     * @public
     * @type {boolean}
     */
    paused: boolean;
    /**
     * Cause progress to be announced dynamically by assistive technologies.
     * @public
     * @a11y
     */
    announce: boolean;
    /**
     * Message to be announced by assistive technology when the progress is complete. This will be announced when the `complete` property is set to true or when the progress value reaches the max value.
     * @public
     * @a11y
     */
    completionMessage: string;
    /**
     * Indicates that the progress is complete. Setting this to true manually triggers completion announcement for assistive technologies. (user must also set `completion-message` attribute).
     * @public
     * @a11y
     */
    complete: boolean;
    protected completeChanged(oldValue: boolean, newValue: boolean): void;
    protected previousValue: number | null;
    protected announcementTimeout: ReturnType<typeof setTimeout> | null;
    protected announcementInterval: ReturnType<typeof setInterval> | null;
    protected valueAnnounced: boolean;
    protected setupIndeterminateAnnouncements(): void;
    protected clearIndeterminateAnnouncements(): void;
    protected announceValue(): void;
    disconnectedCallback(): void;
    isIndeterminate(): boolean;
}
