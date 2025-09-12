import {
  getRegistry,
  getComponentName,
} from "../../../../../../config-1.1.11/package/dist/index";
import { Icon } from "./icon.js";
import { styles } from "./icon.styles.js";
import { iconTemplate } from "./icon.template.js";

const SafIcon = () =>
  Icon.define({
    name: getComponentName("saf-icon"),
    template: iconTemplate(),
    styles: styles(),
    // eslint-disable-next-line no-warning-comments
    // TODO: UXE to disable Shadow DOM when updating all components that use icons and their styles
    // shadowOptions: null
    registry: getRegistry(),
  });

export { SafIcon as default };
