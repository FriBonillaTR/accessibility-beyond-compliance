import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const productHeaderStyles = ":host{background-color:var(--saf-product-header-color-background-default);border-bottom:var(--saf-line-width-thin) solid var(--saf-product-header-color-border-default);box-sizing:border-box;contain:layout;container-type:inline-size;display:block;line-height:1;position:relative;z-index:var(--saf-z-index-fixed)}:host(:focus-within){z-index:var(--saf-z-index-default)}:host header,:host .navigation,:host [role=list],::slotted([slot=tasks]),::slotted([slot=global]){align-items:center;display:flex}:host .navigation{flex-grow:1;justify-content:flex-end}:host header{flex-direction:row;gap:var(--saf-spacing-2);justify-content:space-between;padding:var(--saf-spacing-2) var(--saf-spacing-8)}:host([is-menu-open=true]) .adaptive-menu-region{display:block}:host([is-menu-open=false]) .adaptive-menu-region{display:none}:host .mobile-menu,.side-nav-trigger{display:none}::slotted([slot=tasks]),::slotted([slot=global]){gap:var(--saf-spacing-1)}saf-divider{border-color:var(--saf-product-header-color-border-stronger);margin:0 var(--saf-spacing-4);min-height:40px}@container (min-width: 47.9375em){:host .header{gap:var(--saf-spacing-4)}}@container (max-width: 47.9375em){:host([has-menu-items=true]) header{padding:var(--saf-spacing-2) var(--saf-spacing-4)}:host([has-menu-items=true]) header .navigation>span,:host([has-menu-items=true]) header .navigation>saf-divider{display:none}:host([has-menu-items=true]) saf-menu saf-divider{margin:0;min-height:initial}:host([has-menu-items=true]) .mobile-menu{display:block}:host([has-menu-items=true]) ::slotted([slot=menu]){min-width:160px}:host([has-menu-items=true]) saf-anchored-region{margin-top:var(--saf-spacing-3);right:var(--saf-spacing-4);width:max-content}.side-nav-trigger{display:inline-block}}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(productHeaderStyles)}
`;

export { styles };
