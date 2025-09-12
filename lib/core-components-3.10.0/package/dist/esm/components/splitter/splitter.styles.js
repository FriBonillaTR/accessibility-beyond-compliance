import { css } from '../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const splitterStyles = ":host{display:block;height:100%}:host ::slotted(*){box-sizing:border-box;height:100%;width:100%}:host ::slotted([slot=primary]),:host ::slotted([slot=secondary]){position:relative}.primary{z-index:var(--saf-z-index-default)}.primary,.secondary{display:flex;flex:1 1 50%;min-width:0}.primary[scrollable],.secondary[scrollable]{overflow-y:auto}.splitter{background:var(--saf-color-border-stronger);cursor:ew-resize;flex:none;overflow:visible;position:relative;width:1px;z-index:var(--saf-z-index-default)}.handle{left:50%;position:absolute;top:50%;translate:-50% -50% 0}.handle::part(control){box-shadow:var(--saf-drop-shadow-level-1);margin:0}.handle::part(control):focus{box-shadow:var(--saf-drop-shadow-focus)}.handle::part(control):hover{cursor:ew-resize}.horizontal .splitter,.horizontal .handle::part(control):hover{cursor:ns-resize}.horizontal .splitter{width:unset}.splitter-wrapper{display:flex}[hidden]{display:none !important}.splitter-wrapper.horizontal{flex-direction:column;height:100%}.splitter-wrapper.vertical{height:100%}:host([scrollable-primary]) .splitter-wrapper.vertical,:host([scrollable-secondary]) .splitter-wrapper.vertical,:host([scrollable-primary]) .splitter-wrapper.horizontal,:host([scrollable-secondary]) .splitter-wrapper.horizontal{max-height:100vh;overflow:hidden}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(splitterStyles)}
`;

export { styles };
