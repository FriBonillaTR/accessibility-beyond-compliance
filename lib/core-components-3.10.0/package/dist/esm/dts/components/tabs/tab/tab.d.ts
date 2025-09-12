import { FASTElement } from '../../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../../utils/start-end-template.js';
/**
 * A Tab Component to be used with {@link @saffron/core-components#(FASTTabs:class)}
 *
 * @slot start - Content which can be provided before the tab content
 * @slot end - Content which can be provided after the tab content
 * @slot - The default slot for the tab content
 *
 * @public
 */
export declare class Tab extends FASTElement {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
}
export interface Tab extends StartEnd {
}
