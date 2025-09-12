import {
  getRegistry,
  getComponentName,
} from "../../../../../../config-1.1.11/package/dist/index";
import SafButton from "../button/define.js";
import SafIcon from "../icon/define.js";
import SafSrOnly from "../sr-only/define.js";
import { Dialog } from "./dialog.js";
import { styles } from "./dialog.styles.js";
import { dialogTemplate } from "./dialog.template.js";

const safDialogConfig = {
  events: {
    onCancel: "cancel",
    onClose: "close",
    onHide: "hide",
    onShow: "show",
  },
};
const SafDialog = () => {
  SafButton();
  SafIcon();
  SafSrOnly();
  return Dialog.define({
    name: getComponentName("saf-dialog"),
    template: dialogTemplate(),
    styles: styles(),
    registry: getRegistry(),
  });
};

export { SafDialog as default, safDialogConfig };
