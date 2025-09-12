import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import { AvatarSizeEnum, AvatarAppearanceEnum } from './avatar.options.js';

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
class Avatar extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determines avatar size.
         *
         * @public
         */
        this.size = AvatarSizeEnum.large;
        /**
         * Determines the appearance of the avatar.
         *
         * @public
         */
        this.appearance = AvatarAppearanceEnum.neutral;
        /**
         * The option to enable or disable presentation
         *
         * @a11y
         * @public
         */
        this.presentation = false;
    }
}
__decorate([
    attr
], Avatar.prototype, "size", void 0);
__decorate([
    attr
], Avatar.prototype, "appearance", void 0);
__decorate([
    attr({ attribute: 'img-src' })
], Avatar.prototype, "imgSrc", void 0);
__decorate([
    attr({ attribute: 'label' })
], Avatar.prototype, "label", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Avatar.prototype, "presentation", void 0);

export { Avatar };
