"use strict";var e=require("./fast-element-DOTfrYFb.js");class t extends e.FASTElement{connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0")}}exports.TabPanel=t,exports.tabPanelTemplate=function(){return e.html`
		<template slot="tabpanel" role="tabpanel">
			<slot></slot>
		</template>
	`};
