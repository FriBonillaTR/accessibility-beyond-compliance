import { FASTElement } from '../../@microsoft/fast-element/index.js';
import { SafSkipLinkInstance } from '../skip-link/define.js';
/**
 * A class for SkipLinkGroup
 */
export declare class SkipLinkGroup extends FASTElement {
    /**
     * The aria label for the skip link group.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    slottedSkipLinks: SafSkipLinkInstance[];
    slottedSkipLinksChanged(): void;
}
