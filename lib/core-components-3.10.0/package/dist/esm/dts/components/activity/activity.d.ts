import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { StartEnd } from '../../utils/start-end-template.js';
/**
 * A class for Activity
 */
export declare class Activity extends FASTElement {
    /**
     * Describes the amount of time that has passed since the activity was completed. We recommend following the format described in <a href="/?path=/docs/design-foundations-content-conventions-date-and-time-formats--docs">our content conventions</a>.
     *
     * @public
     */
    time: string;
    /**
     * The unique ID for the activity header. This is used for accessibility. If there are multiple `saf-activity` components on your page or SPA, make sure to create a unique ID for each activity header
     *
     * @a11y
     * @public
     */
    headerId: string;
    /**
     * The unique ID for the time element of the activity list. This is used for accessibility. If there are multiple `saf-activity` components on your page or SPA, make sure to create a unique ID for each time element
     *
     * @a11y
     * @public
     */
    timeId: string;
}
export interface Activity extends StartEnd {
}
