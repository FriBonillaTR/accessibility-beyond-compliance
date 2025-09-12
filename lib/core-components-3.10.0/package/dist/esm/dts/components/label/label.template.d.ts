import type { NumberField } from '../number-field/number-field.js';
import type { TextArea } from '../text-area/text-area.js';
import type { TextField } from '../text-field/text-field.js';
import type { Select } from '../select/select.js';
export type FormField = NumberField | Select | TextArea | TextField;
/**
 * @public
 * @remarks
 * ViewTemplate that returns a label element
 * that contains a unique ID and a `for` attribute
 * that references a form field's input ID
 */
export declare const labelTemplate: import("@microsoft/fast-element").ViewTemplate<FormField, any>;
