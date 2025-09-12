"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./tab-panel.template-slHl3MnZ.js"),a=require("./fast-element-DOTfrYFb.js");exports.default=()=>t.TabPanel.define({name:e.getComponentName("saf-tab-panel"),template:t.tabPanelTemplate(),styles:a.css`
	${e.replaceComponentNamesWithSafAttribute(":host{display:block}")}
`,registry:e.getRegistry()}),exports.safTabPanelConfig={events:{onChange:"change"}};
