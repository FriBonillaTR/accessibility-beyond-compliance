import { TextField } from '../../text-field/text-field.js';
type Section = 'day' | 'month' | 'year';
type SectionInfo = {
    startIndex: number;
    endIndex: number;
    isFilled: boolean;
    value: string;
    defaultValue: string;
};
export type Sections = Record<Section, SectionInfo>;
export type DateMaskedInputDateSection = Section;
export type DateMaskedInputDateSectionInfo = SectionInfo;
/**
 * A class for DateMaskedInput
 */
export declare class DateMaskedInput extends TextField {
    /**
     * Represents the current text value of the input field.
     * @public
     */
    value: string;
    valueChanged(_oldValue: any, newValue: any): void;
    minimumDate: Date;
    /**
     * Minimum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    minDate: string;
    minDateChanged(): void;
    /**
     * Determines whether the component automatically corrects invalid dates
     * @public
     */
    autocorrect: boolean;
    maximumDate: Date;
    /**
     * Maximum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    maxDate: string;
    maxDateChanged(): void;
    /**
     * Retrieves the effective date format.
     * Returns the consumer-provided format if available; otherwise, falls back to dbFormat.
     * @private
     */
    private get resolvedFormat();
    private getDateFormatDelimiter;
    /**
     * sections of the date input
     * contains info about each section value, state, and start and end indices
     * @public
     */
    sections: Record<Section, SectionInfo>;
    selectedSectionChanged(): void;
    /**
     * Default date format. If value is not provided or is invalid, the format will be based on the locale.
     * @public
     */
    format: string;
    formatChanged(_oldValue: string, _newValue: string): void;
    connectedCallback(): void;
    /**
     * Check for RTL context and set data attribute on text-field
     * @private
     */
    private checkAndSetRTL;
    /**
     * public function to set the value of the input field
     * and also update the sections accordingly
     * value MUST be a valid date, and must be in the format specified in the format property
     * @public
     */
    setValue(value: string): void;
}
export {};
