import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { AvatarAppearance, AvatarSize } from './avatar.options.js';
/**
 * An Avatar Custom HTML Element
 *
 * @slot media - Used for media such as an image
 * @slot - The default slot for avatar text, commonly a name or initials
 * @slot badge - Used to provide a badge, such as a status badge
 * @csspart backplate - The wrapping container for the avatar
 * @csspart content - The default slot
 *
 * @public
 */
export declare class Avatar extends FASTElement {
    /**
     * Determines avatar size.
     *
     * @public
     */
    size: AvatarSize;
    /**
     * Determines the appearance of the avatar.
     *
     * @public
     */
    appearance: AvatarAppearance;
    /**
     * Determines the source of the image if appearance is set to image.
     *
     * @public
     */
    imgSrc: string;
    /**
     * Determines the accessible label for the avatar. When used with initials or an image its used to provide the full name to screen readers.
     *
     * @a11y
     * @public
     */
    label: string;
    /**
     * The option to enable or disable presentation
     *
     * @a11y
     * @public
     */
    presentation: boolean;
}
