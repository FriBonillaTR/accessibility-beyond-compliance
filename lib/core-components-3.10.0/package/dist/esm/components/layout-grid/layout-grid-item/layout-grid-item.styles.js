import { css } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { replaceComponentNamesWithSafAttribute } from '@saffron/config';

const layoutGridItemStyles = ":host{box-sizing:border-box;contain:layout;container-type:normal;display:flex;flex-basis:auto;flex-direction:column;height:auto;max-width:100%;min-width:0;position:relative}:host(:focus-within){z-index:var(--saf-z-index-active)}:host([justify-content=center]),:host([justify-content=end]){flex-direction:row}:host([justify-content=end]){justify-content:flex-end}:host([justify-content=center]){justify-content:center}:host([auto-height]){height:fit-content}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css `
	${replaceComponentNamesWithSafAttribute(layoutGridItemStyles)}
`;

export { styles };
