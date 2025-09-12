import {
  getRegistry,
  getComponentName,
} from "../../../../../../config-1.1.11/package/dist/index";
import { SrOnly } from "./sr-only.js";
import { styles } from "./sr-only.styles.js";
import { srOnlyTemplate } from "./sr-only.template.js";

const SafSrOnly = () =>
  SrOnly.define({
    name: getComponentName("saf-sr-only"),
    template: srOnlyTemplate(),
    styles: styles(),
    registry: getRegistry(),
  });

export { SafSrOnly as default };
