import { ViewTemplate } from '../../@microsoft/fast-element/index.js';
import type { FormButton } from './button.js';
/**
 * The template for Button component.
 * @public
 */
export declare function buttonTemplate<T extends FormButton>({ children, }?: {
    children?: ViewTemplate;
}): ViewTemplate<T, any>;
