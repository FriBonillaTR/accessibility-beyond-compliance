import { Direction, Orientation } from '@microsoft/fast-web-utilities';
import { FormAssociatedSlider } from './slider.form-associated.js';
import { SliderMode } from './slider.options.js';
/**
 * The configuration structure of {@link @saffron/core-components#(Slider:class)}.
 * @public
 */
export interface SliderConfiguration {
    max: number;
    min: number;
    orientation?: Orientation;
    direction?: Direction;
    disabled?: boolean;
}
/**
 * A Slider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#slider | ARIA slider }.
 *
 * @slot track - The track of the slider
 * @slot track-start - The track-start visual indicator
 * @slot thumb - The slider thumb
 * @slot - The default slot for labels
 * @csspart positioning-region - The region used to position the elements of the slider
 * @csspart track-container - The region containing the track elements
 * @csspart track-start - The element wrapping the track start slot
 * @csspart thumb-container - The thumb container element which is programmatically positioned
 * @fires change - Fires a custom 'change' event when the slider value changes
 *
 * @public
 */
export declare class Slider extends FormAssociatedSlider implements SliderConfiguration {
    /**
     * The value property, typed as a number.
     *
     * @public
     */
    get valueAsNumber(): number;
    set valueAsNumber(next: number);
    /**
     * Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value.
     *
     * @public
     */
    valueTextFormatter: (value: string) => string | null;
    /**
     * When set to `true`, the user cannot interact with the slider.
     * @public
     */
    readOnly: boolean;
    readOnlyChanged(): void;
    /**
     * The minimum allowed value.
     *
     * @defaultValue - 0
     * @public
     * @remarks
     * HTML Attribute: min
     */
    min: number;
    protected minChanged(): void;
    /**
     * The maximum allowed value.
     *
     * @defaultValue - 10
     * @public
     * @remarks
     * HTML Attribute: max
     */
    max: number;
    protected maxChanged(): void;
    /**
     * Value to increment or decrement via arrow keys, mouse click or drag.
     *
     * @public
     * @remarks
     * HTML Attribute: step
     */
    step: number | undefined;
    protected stepChanged(): void;
    /**
     * The orientation of the slider.
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
    protected orientationChanged(): void;
    /**
     * The selection mode.
     *
     * @public
     * @remarks
     * HTML Attribute: mode
     */
    mode: SliderMode;
    /**
     * Increment the value by the step
     *
     * @public
     */
    increment(): void;
    /**
     * Decrement the value by the step
     *
     * @public
     */
    decrement(): void;
    protected keypressHandler: (e: KeyboardEvent) => void;
    /**
     * Gets the actual step value for the slider
     *
     */
    private get stepValue();
    /**
     * Places the thumb based on the current value
     *
     * @public
     * @param direction - writing mode
     */
    private setThumbPositionForOrientation;
    /**
     * Update the step multiplier used to ensure rounding errors from steps that
     * are not whole numbers
     */
    private updateStepMultiplier;
    private setupTrackConstraints;
    private setupListeners;
    private get midpoint();
    private setupDefaultValue;
    /**
     *  Handle mouse moves during a thumb drag operation
     *  If the event handler is null it removes the events
     */
    private handleThumbMouseDown;
    /**
     *  Handle mouse moves during a thumb drag operation
     */
    private handleMouseMove;
    /**
     * Handle a window mouse up during a drag operation
     */
    private handleWindowMouseUp;
    private stopDragging;
    /**
     *
     * @param e - MouseEvent or null. If there is no event handler it will remove the events
     */
    private handleMouseDown;
    private convertToConstrainedValue;
    /**
     * Text that describes the slider.
     * @public
     */
    label?: string;
    /**
     * 'Provides additional instructional text that provides extra guidance for the input.
     * @public
     */
    instructionalText?: string;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior. (Ex: `off`, `on`, `name`, `email`)
     * @public
     */
    autocomplete?: string;
    /**
     * Indicates the slider must have a value before the form will submit.
     * @public
     */
    required: boolean;
    /**
     * Adds additional character to the label when slider is required.
     * @public
     */
    requiredText?: string;
}
