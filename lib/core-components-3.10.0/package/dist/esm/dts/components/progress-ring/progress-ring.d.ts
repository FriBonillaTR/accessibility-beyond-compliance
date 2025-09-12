import { Progress } from '../progress/progress.js';
import { ProgressRingSize } from './progress-ring.options.js';
/**
 * An circular Progress HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#progressbar | ARIA progressbar }.
 *
 * @slot indeterminate - The slot for a custom indeterminate indicator
 * @slot determinate - The slot for a custom determinate indicator
 * @csspart progress - Represents the progress element
 * @csspart determinate - The determinate indicator
 * @csspart background - The background
 *
 * @public
 */
export declare class ProgressRing extends Progress {
    /**
     * Determines progress ring size.
     * @public
     */
    progressSize: ProgressRingSize;
    /**
     * The text that follows the loading complete number % in message announcements - Useful for translations
     * @public
     * @a11y
     * @remarks This attr is duplicated here just to change the description and category
     */
    completeLabel: string;
    protected announceValue(): void;
}
