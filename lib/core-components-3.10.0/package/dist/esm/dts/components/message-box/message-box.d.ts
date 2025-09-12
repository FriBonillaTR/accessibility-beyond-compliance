import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { MessageBoxAppearance } from './message-box.options.js';
/**
 * A class for MessageBox
 */
export declare class MessageBox extends FASTElement {
    /**
     * Determines the appearance of the message box user.
     *
     * @public
     */
    appearance: MessageBoxAppearance;
    /**
     * Hides default `agent` and `user` avatar components in message. It doesn't affect any slotted custom avatar.
     *
     * @public
     */
    hideAvatar: boolean;
    /**
     * Sets the label for the avatar or user image. If appearance is agent then, the default value Thomson Reuters.
     *
     * @public
     */
    userLabel: string;
    /**
     * The option to enable or disable presentation in the contained Avatar component.
     *
     * @a11y
     * @public
     */
    avatarPresentation: boolean;
    slottedNodes: Node[];
    private hideProcessingAvatar;
    private handleProgressTextPresence;
    slottedNodesChanged(): void;
}
