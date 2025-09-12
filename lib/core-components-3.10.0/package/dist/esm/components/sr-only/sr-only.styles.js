import { css } from "../../@microsoft/fast-element/dist/esm/index.js";
import { replaceComponentNamesWithSafAttribute } from "../../../../../../config-1.1.11/package/dist/index.js";

const srOnlyStyles =
  ":host{border:0;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;left:-100vw;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host:dir(rtl){right:-100vw}";
/**
 * Styles for Template
 * @public
 */
const styles = () => css`
  ${replaceComponentNamesWithSafAttribute(srOnlyStyles)}
`;

export { styles };
