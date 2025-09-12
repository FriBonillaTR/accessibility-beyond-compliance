import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const footerStyles = ":host{--saf-anchor-icon-margin: 0;contain:layout;container-name:footer;container-type:inline-size;display:block;font-size:var(--saf-font-size-md, 16px);position:relative;z-index:var(--saf-z-index-footer)}:host footer{align-items:center;background:var(--saf-color-background-strong);border-top:1px solid var(--saf-color-border-strong);display:flex;flex-wrap:wrap;padding:var(--saf-spacing-5) var(--saf-spacing-8)}.footer-logo,.footer-copyright-info{flex-basis:30%}.footer-logo,.footer-copyright-info,.footer-links,.footer-social-links{margin-bottom:var(--saf-spacing-4)}.footer-links,.footer-social-links{display:flex;flex:1 50%;flex-wrap:wrap;justify-content:flex-end}.footer-social-links{--saf-icon-padding: 0 var(--saf-spacing-2)}::slotted([slot=footer-links]),.footer-copyright-info{font:var(--saf-type-body-default-sm-regular-standard)}.footer-copyright-info{color:var(--saf-color-text-subtle);flex-grow:1}.footer-logo{line-height:1}@container footer (max-width: 56.25em){.footer-links{flex:1 100%;justify-content:initial}}@container footer (max-width: 41.25em){:host footer{padding:var(--saf-spacing-5)}.footer-social-links,.footer-links{flex:1 100%;justify-content:center}.footer-logo,.footer-copyright-info{margin:0 auto var(--saf-spacing-4) auto;text-align:center}.footer-social-links{margin-bottom:0}}@container footer (max-width: 31.25em){.footer-logo saf-logo{width:initial}.footer-links{--saf-list-inline-flex-dir: column;--saf-list-inline-item-margin: 0 0 var(--saf-spacing-4) 0;text-align:center}.footer-links,.footer-social-links{justify-content:center}}";
/**
 * Styles for Flipper
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(footerStyles)}
`;

export { styles };
