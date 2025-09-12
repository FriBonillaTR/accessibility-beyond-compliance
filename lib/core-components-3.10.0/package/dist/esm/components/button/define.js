import {
  getRegistry,
  getComponentName,
} from "../../../../../../config-1.1.11/package/dist/index";
import { FormButton } from "./button.js";
import { styles } from "./button.styles.js";
import { buttonTemplate } from "./button.template.js";

const SafButton = () =>
  // TODO: in v4, export two separate components: Button and FormButton
  FormButton.define({
    name: getComponentName("saf-button"),
    template: buttonTemplate(),
    styles: styles(),
    shadowOptions: {
      delegatesFocus: true,
    },
    registry: getRegistry(),
  });

export { SafButton as default };
