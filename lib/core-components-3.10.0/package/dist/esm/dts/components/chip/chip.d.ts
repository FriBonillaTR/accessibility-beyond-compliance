import { ButtonBase } from '../button/button.js';
/**
 * A class for Chip
 */
export declare class Chip extends ButtonBase {
    /**
     * Toggles the close icon and the ability to close the chip by clicking the component.
     *
     * @public
     */
    closeable: boolean;
    /**
     * Toggles the chip clickable functionality. True will act as button, false will act as a div.
     *
     * @public
     */
    clickable: boolean;
    /**
     * The close button label and its tooltip text.
     *
     * @public
     */
    closeButtonLabel: string | undefined;
    /**
     * Toggles the close icon tooltip.
     *
     * @public
     */
    closeableTooltip: boolean;
    /**
     * Text of the close icon.
     *
     * @public
     */
    tooltipText: string | undefined;
    /**
     * Causes tooltip contents to be announced by assistive technologies.
     *
     * @public
     */
    announceTooltip: boolean;
    close(event: Event): void;
    focus(): void;
}
