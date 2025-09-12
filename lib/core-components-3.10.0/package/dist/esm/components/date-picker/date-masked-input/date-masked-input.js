import { __decorate } from 'tslib';
import { observable, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { parse, getYear, getDaysInMonth } from '@saffron/date-fns';
import '../../../utils/index.js';
import { TextField } from '../../text-field/text-field.js';
import { DatePicker } from '../date-picker.js';
import { clamp } from '../../../utils/math-helpers.js';

/**
 * A class for DateMaskedInput
 */
class DateMaskedInput extends TextField {
    constructor() {
        super(...arguments);
        /**
         * Represents the current text value of the input field.
         * @public
         */
        this.value = '';
        this.minimumDate = new Date();
        /**
         * Minimum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
         * @public
         */
        this.minDate = '1900-01-01';
        /**
         * Determines whether the component automatically corrects invalid dates
         * @public
         */
        this.autocorrect = true;
        this.maximumDate = new Date();
        /**
         * Maximum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
         * @public
         */
        this.maxDate = '2099-12-31';
        /**
         * Delimiter for date format.
         * @internal
         */
        this.dateDelimiter = '/';
        /**
         * sections of the date input
         * contains info about each section value, state, and start and end indices
         * @public
         */
        this.sections = {
            day: { startIndex: 0, endIndex: 2, isFilled: false, value: 'DD', defaultValue: 'DD' },
            month: { startIndex: 3, endIndex: 5, isFilled: false, value: 'MM', defaultValue: 'MM' },
            year: {
                startIndex: 6,
                endIndex: 10,
                isFilled: false,
                value: 'YYYY',
                defaultValue: 'YYYY',
            },
        };
        /**
         * represents the currently selected section in the input field
         * @internal
         */
        this.selectedSection = null;
        /**
         * This flag counts how many keys were pressed in a row while the input was focused
         * To handle inputs like '01' in the days section, where the 0 does nothing on its own,
         * but we need to move to the next section when the user presses two keys
         *
         * This flag is incremented on keydown if the key is a number
         * Once this flag is equal to or greater than the section max length (2 for day/month, 4 for year), and the input is valid, we move to the next section
         * This flag is reset to 0 when the user navigates to a section either by mouse or keyboard and on focusin
         *
         * This flag is also used to determine if the user has just navigated to the current section and hasn't entered any value yet (when it's 0)
         * In which case, the whole section is overwritten by the key pressed, as opposed to appending to the current value
         * For example, if the current value of the day section is '01' and the user presses '2'
         * We have to make the distinction between
         * 1. if the user pressed 1 then 2 while in the day section. in which case the expected value should be '12'
         * 2. if the user pressed 1, then navigated to another section and back to the day section, then pressed 2. in which case the expected value should be '02'
         *
         * @private
         * @internal
         */
        this.keyPressCount = 0;
        /**
         * represents the order of sections according to the format
         * @internal
         */
        this.sectionOrder = ['day', 'month', 'year'];
        /**
         * Default date format. If value is not provided or is invalid, the format will be based on the locale.
         * @public
         */
        this.format = '';
        /**
         * Regular expression for the accepted date format.
         * @internal
         */
        this.acceptedRegex = null;
        /**
         * autocomplete html attribute.
         * It's set to off for the masked input
         * and marked as internal to prevent it from being documented in Storybook
         * @public
         * @internal
         */
        this.autocomplete = 'off';
    }
    valueChanged(_oldValue, newValue) {
        if (!(this.$fastController.isConnected && this.textField && this.textField.control))
            return;
        if (this.value &&
            this.acceptedRegex &&
            newValue.match(this.acceptedRegex) &&
            newValue.length === this.format.length) {
            this.$emit('input', this.value);
            this.textField.control.value = newValue;
        }
    }
    minDateChanged() {
        if (DatePicker.isValidDate(this.minDate, this.resolvedFormat)) {
            this.minimumDate = parse(this.minDate, this.resolvedFormat, new Date());
        }
        else {
            this.minimumDate = parse('1900-01-01', DatePicker.dbFormat, new Date());
        }
    }
    maxDateChanged() {
        if (DatePicker.isValidDate(this.maxDate, this.resolvedFormat)) {
            this.maximumDate = parse(this.maxDate, this.resolvedFormat, new Date());
        }
        else {
            this.maximumDate = parse('2099-12-31', DatePicker.dbFormat, new Date());
        }
    }
    /**
     * Retrieves the effective date format.
     * Returns the consumer-provided format if available; otherwise, falls back to dbFormat.
     * @private
     */
    get resolvedFormat() {
        return this.format || DatePicker.dbFormat;
    }
    getDateFormatDelimiter(format) {
        let delimiter = '/';
        const match = format.match(/[^a-zA-Z0-9]/);
        if (match) {
            delimiter = match[0];
        }
        return delimiter;
    }
    selectedSectionChanged() {
        this.keyPressCount = 0;
    }
    formatChanged(_oldValue, _newValue) {
        if (this.sections) {
            this.sections.day.startIndex = this.format.indexOf('d');
            this.sections.day.endIndex = this.sections.day.startIndex + 2;
            this.sections.month.startIndex = this.format.indexOf('M');
            this.sections.month.endIndex = this.sections.month.startIndex + 2;
            this.sections.year.startIndex = this.format.indexOf('y');
            this.sections.year.endIndex = this.sections.year.startIndex + 4;
            this.sections.day.value = 'dd';
            this.sections.day.defaultValue = 'dd';
            this.sections.month.value = 'mm';
            this.sections.month.defaultValue = 'mm';
            this.sections.year.value = 'yyyy';
            this.sections.year.defaultValue = 'yyyy';
            this.$emit('sections-changed', this.sections);
            this.sectionOrder = ['day', 'month', 'year'].sort((a, b) => this.sections[a].startIndex - this.sections[b].startIndex);
            this.selectedSection = this.sectionOrder[0];
        }
        this.setInputValueFromSections();
        this.dateDelimiter = this.getDateFormatDelimiter(this.format);
        // convert `dd/MM/yyyy` to `(dd|\d{2})\/(MM|\d{2})\/(yyyy|\d{4})`
        this.acceptedRegex = new RegExp(`^${this.format
            .replace(/dd/g, '(dd|\\d{2})')
            .replace(/MM/g, '(mm|\\d{2})')
            .replace(/yyyy/g, '(yyyy|\\d{4})')}$`);
        this.minDateChanged();
        this.maxDateChanged();
    }
    connectedCallback() {
        super.connectedCallback();
        // initialize the sections with the format
        this.setInputValueFromSections();
        // RTL support
        this.checkAndSetRTL();
    }
    /**
     * Check for RTL context and set data attribute on text-field
     * @private
     */
    checkAndSetRTL() {
        var _a;
        const computedDirection = getComputedStyle(this).direction;
        if (computedDirection === 'rtl') {
            (_a = this.textField) === null || _a === void 0 ? void 0 : _a.setAttribute('date-rtl', '');
        }
    }
    /**
     * public function to set the value of the input field
     * and also update the sections accordingly
     * value MUST be a valid date, and must be in the format specified in the format property
     * @public
     */
    setValue(value) {
        if (!this.acceptedRegex || !value.match(this.acceptedRegex))
            return;
        this.value = value;
        this.sections.day.value = value.slice(this.sections.day.startIndex, this.sections.day.endIndex);
        this.sections.month.value = value.slice(this.sections.month.startIndex, this.sections.month.endIndex);
        this.sections.year.value = value.slice(this.sections.year.startIndex, this.sections.year.endIndex);
        this.sections.day.isFilled = this.sections.day.value !== this.sections.day.defaultValue;
        this.sections.month.isFilled = this.sections.day.value !== this.sections.day.defaultValue;
        this.sections.year.isFilled = this.sections.day.value !== this.sections.day.defaultValue;
        this.$emit('sections-changed', this.sections);
    }
    /**
     * sections is the source of truth for the value of this masked input field
     * this function updates the value of the input field based on the sections
     * this function should be called whenever the sections are updated
     * to synchronize the input field value
     * @internal
     * @private
     */
    setInputValueFromSections() {
        const arr = [];
        this.sectionOrder.forEach((section, index) => {
            arr.push(this.sections[section].value);
            if (index < this.sectionOrder.length - 1) {
                arr.push(this.dateDelimiter);
            }
        });
        this.value = arr.join('');
    }
    /**
     * highlights the section where the cursor is currently placed in the input field
     * @internal
     * @private
     */
    highlightCurrentInputSection() {
        const getSectionFromIndex = (index) => {
            const char = this.format[index];
            switch (char) {
                case 'd':
                    return 'day';
                case 'M':
                    return 'month';
                case 'y':
                    return 'year';
                case '-':
                case '/':
                case '.':
                case undefined:
                    // if the character is a delimiter, return the section before the delimiter
                    // or if the index is out of bounds (at the end), return the last section
                    return getSectionFromIndex(index - 1);
                default:
                    throw new Error('Invalid format section mask handling');
            }
        };
        const index = this.textField.control.selectionStart;
        if (index !== null) {
            const section = getSectionFromIndex(index);
            this.textField.control.setSelectionRange(this.sections[section].startIndex, this.sections[section].endIndex);
            this.selectedSection = section;
        }
    }
    /**
     * This function is called when typing a number or when pressing backspace/delete only
     * It checks if the input field is fully selected (highlighted), and resets the field if it is
     * then highlights the first section
     * It doesn't need to emit the sections-changed event since it's called from the other functions that already emit it
     * @private
     * @internal
     */
    resetFieldIfFullySelected() {
        const isInputFullySelected = this.textField.control.selectionStart === 0 &&
            this.textField.control.selectionEnd === this.value.length;
        if (isInputFullySelected) {
            this.sections.day.value = this.sections.day.defaultValue;
            this.sections.month.value = this.sections.month.defaultValue;
            this.sections.year.value = this.sections.year.defaultValue;
            this.sections.day.isFilled = false;
            this.sections.month.isFilled = false;
            this.sections.year.isFilled = false;
            // highlights the first section
            this.selectedSection = this.sectionOrder[0];
            this.highlightInputSection(0);
        }
    }
    /**
     * Handler for input change
     * Since SafDatePicker emits an event with the same name "change" as the native input element,
     * this function is used to prevent the event from being propagated to the parent component (SafDatePicker)
     * @public
     * @internal
     */
    onInputChange(e) {
        e.stopPropagation();
    }
    /**
     * Handler for input focus in
     * @public
     * @internal
     */
    onInputFocusIn(_e) {
        this.keyPressCount = 0;
    }
    /**
     * Handler for click in input
     * @public
     * @internal
     */
    onInputClick(event) {
        if (this.readOnly)
            this.textField.select();
        else {
            // This checks if the click event is initiated from within the input field
            // if it is, we should highlight the clicked section (where the cursor is currently placed)
            // if it's not, that means the user clicked outside the input, so we should highlight the entire input
            // This behavior is the default on Chrome with this check, but not on Firefox
            //
            // SafDateMaskedInput uses SafTextField in its template, which has delegatesFocus set to true
            // So on clicking on the label (or outside the input),
            // the browser tries to focus on the first focusable element inside the shadow DOM (the input)
            //
            // In Chromium, input.focus() selects the field value
            // In Firefox, input.focus() moves the cursor to the end
            //
            // To mitigate this behavior on Firefox, we added a distinction between clicking on the field and anywhere else
            if (event.composedPath().includes(this.textField.control)) {
                this.highlightCurrentInputSection();
            }
            else {
                this.textField.select();
            }
        }
    }
    /**
     * highlights an input section based on an offset (1 for next, -1 for previous, 0 for same section)
     * @private
     * @internal
     */
    highlightInputSection(offset = 0) {
        // if offset is zero, it highlights the same section
        // this is to mitigate the native html behavior of the input field
        // where it jumps to the end after the value is changed programmatically
        // Refer to this link for more info
        // https://discourse.elm-lang.org/t/possible-fix-of-cursor-jumping-at-the-end-of-the-input-field/8377
        if (!this.selectedSection)
            return;
        const sectionIndex = this.sectionOrder.indexOf(this.selectedSection);
        let nextSection = this.sectionOrder[sectionIndex + offset];
        // in case the last section is selected, and this function is called with offset 1
        // the next section will be undefined, so we get the last (current) section instead
        if (!nextSection)
            nextSection = this.sectionOrder[sectionIndex];
        if (nextSection) {
            this.textField.control.setSelectionRange(this.sections[nextSection].startIndex, this.sections[nextSection].endIndex);
            this.selectedSection = nextSection;
        }
    }
    /**
     * computes the minimum and maximum valid values for the current selected section
     * @private
     * @internal
     */
    getMinMaxValuesForCurrentSection() {
        let min, max;
        if (!this.selectedSection)
            throw new Error('No section selected. This function must be called when the input has a selected section.');
        switch (this.selectedSection) {
            case 'day':
                max = 31;
                if (this.sections.month.isFilled && this.sections.year.isFilled) {
                    max = getDaysInMonth(new Date(Number(this.sections.year.value), Number(this.sections.month.value) - 1));
                }
                min = 1;
                break;
            case 'month':
                min = 1;
                max = 12;
                break;
            case 'year':
                min = getYear(this.minimumDate);
                max = getYear(this.maximumDate);
                break;
        }
        return [min, max];
    }
    /**
     * handler for up/down arrows and page up/down keys
     * @private
     * @internal
     */
    handleMaskedInputArrow(direction, offset) {
        if (!this.selectedSection)
            return;
        const section = this.sections[this.selectedSection];
        const value = section.value;
        let numberValue = Number(value);
        const [min, max] = this.getMinMaxValuesForCurrentSection();
        switch (this.selectedSection) {
            case 'day':
                if (isNaN(numberValue))
                    numberValue = direction === 'up' ? min : max;
                else
                    numberValue += offset;
                if (numberValue < min)
                    numberValue = max;
                if (numberValue > max)
                    numberValue = min;
                break;
            case 'month':
                if (isNaN(numberValue))
                    numberValue = direction === 'up' ? min : max;
                else
                    numberValue += offset;
                if (numberValue < min)
                    numberValue = max;
                if (numberValue > max)
                    numberValue = min;
                break;
            case 'year':
                if (isNaN(numberValue))
                    numberValue = getYear(new Date());
                else
                    numberValue += offset;
                numberValue = clamp(min, numberValue, max);
                break;
        }
        section.value = numberValue.toString().padStart(2, '0');
        section.isFilled = true;
        this.$emit('sections-changed', this.sections);
        this.setInputValueFromSections();
        this.highlightInputSection(0);
    }
    /**
     * handler for delete and backspace keys
     * @private
     * @internal
     */
    handleMaskedInputDelete(key) {
        this.resetFieldIfFullySelected();
        if (!this.selectedSection)
            return;
        const section = this.sections[this.selectedSection];
        const isSectionEmpty = section.value === section.defaultValue;
        section.value = section.defaultValue;
        section.isFilled = false;
        this.$emit('sections-changed', this.sections);
        this.setInputValueFromSections();
        const highlightPreviousSection = isSectionEmpty && key === 'Backspace';
        this.highlightInputSection(highlightPreviousSection ? -1 : 0);
    }
    /**
     * handler for home/end key
     * @private
     * @internal
     */
    handleMaskedInputMinMax(type) {
        if (!this.selectedSection)
            return;
        const section = this.sections[this.selectedSection];
        const [min, max] = this.getMinMaxValuesForCurrentSection();
        const numberValue = type === 'min' ? min : max;
        section.value = numberValue.toString().padStart(2, '0');
        section.isFilled = true;
        this.$emit('sections-changed', this.sections);
        this.setInputValueFromSections();
        this.highlightInputSection(0);
    }
    /**
     * handler for number keys
     * @private
     * @internal
     */
    handleMaskedInputNumberInput(key) {
        this.resetFieldIfFullySelected();
        if (!this.selectedSection)
            return;
        const section = this.sections[this.selectedSection];
        const value = section.value;
        const [min, max] = this.getMinMaxValuesForCurrentSection();
        let numberValue = Number(value);
        if (isNaN(numberValue))
            numberValue = 0;
        let stringValue = numberValue.toString();
        const justNavigatedToSection = this.keyPressCount === 0;
        let newStringValue = justNavigatedToSection ? key : `${stringValue}${key}`;
        let newNumberValue = Number(newStringValue);
        this.keyPressCount++;
        const maxStringLength = this.selectedSection === 'year' ? 4 : 2;
        // if true, means the user has pressed enough keys to fill the section
        let isNewEntryShouldBeCompleted = this.keyPressCount >= maxStringLength;
        const isNewEntryValid = newNumberValue >= min && newNumberValue <= max;
        if (this.autocorrect && !isNewEntryValid && isNewEntryShouldBeCompleted) {
            newStringValue = clamp(min, newNumberValue, max).toString();
        }
        newNumberValue = Number(newStringValue);
        if (!isNewEntryShouldBeCompleted && this.autocorrect) {
            switch (this.selectedSection) {
                case 'day':
                    isNewEntryShouldBeCompleted = newNumberValue > 3;
                    break;
                case 'month':
                    isNewEntryShouldBeCompleted = newNumberValue > 1;
                    break;
                case 'year':
                    isNewEntryShouldBeCompleted = newNumberValue >= 1000;
                    break;
            }
        }
        newStringValue = newNumberValue.toString().padStart(maxStringLength, '0');
        section.value = newStringValue;
        section.isFilled = true;
        this.$emit('sections-changed', this.sections);
        this.setInputValueFromSections();
        if (isNewEntryShouldBeCompleted) {
            // highlight the next section
            this.highlightInputSection(1);
            this.keyPressCount = 0; // Reset for next section
        }
        else {
            // highlight the same (current) section
            this.highlightInputSection(0);
        }
    }
    /**
     * @public
     * @internal
     * Handler for input on text-field.
     * only called to handle paste events.
     */
    onInputInput(e) {
        e.stopPropagation();
        if (e.inputType === 'insertFromPaste') {
            const oldValue = this.value;
            const newValue = e.target.value;
            if (this.acceptedRegex && newValue.match(this.acceptedRegex)) {
                this.setValue(newValue);
            }
            else {
                this.textField.value = oldValue;
                setTimeout(() => this.highlightInputSection(0));
            }
        }
    }
    /**
     * @public
     * @internal
     * Handler for keydown on text-field.
     */
    onInputKeyDown(e) {
        const { key } = e;
        const isFKey = key.match(/^F\d{1,2}$/);
        const isSpecialKey = key === 'Tab' || key === 'Enter' || key === 'Escape' || isFKey;
        const isModifierKey = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey;
        // Allow Shift+Tab for backward keyboard navigation
        if (key === 'Tab' && e.shiftKey) {
            return true;
        }
        switch (key) {
            case 'ArrowLeft':
                this.highlightInputSection(-1);
                return false;
            case 'ArrowRight':
                this.highlightInputSection(1);
                return false;
            case 'ArrowUp':
                this.handleMaskedInputArrow('up', 1);
                return false;
            case 'ArrowDown':
                this.handleMaskedInputArrow('down', -1);
                return false;
            case 'PageUp':
                this.handleMaskedInputArrow('up', 5);
                return false;
            case 'PageDown':
                this.handleMaskedInputArrow('down', -5);
                return false;
            case 'Backspace':
            case 'Delete':
                this.handleMaskedInputDelete(key);
                return false;
            case 'Home':
                this.handleMaskedInputMinMax('min');
                return false;
            case 'End':
                this.handleMaskedInputMinMax('max');
                return false;
            default:
                break;
        }
        if (key.length === 1 && key.match(/^\d$/)) {
            this.handleMaskedInputNumberInput(key);
            return false;
        }
        // e.shiftKey will allow for capital letters and symbols to be entered, so it should be blocked
        if (e.shiftKey)
            return false;
        // allow other modifiers and special keys to be entered
        if (isModifierKey || isSpecialKey)
            return true;
        // block all other keys including letters and symbols
        return false;
    }
}
__decorate([
    observable
], DateMaskedInput.prototype, "value", void 0);
__decorate([
    attr({ attribute: 'min-date' })
], DateMaskedInput.prototype, "minDate", void 0);
__decorate([
    attr({ attribute: 'autocorrect', mode: 'boolean' })
], DateMaskedInput.prototype, "autocorrect", void 0);
__decorate([
    attr({ attribute: 'max-date' })
], DateMaskedInput.prototype, "maxDate", void 0);
__decorate([
    observable
], DateMaskedInput.prototype, "dateDelimiter", void 0);
__decorate([
    observable
], DateMaskedInput.prototype, "selectedSection", void 0);
__decorate([
    attr({ attribute: 'format' })
], DateMaskedInput.prototype, "format", void 0);

export { DateMaskedInput };
