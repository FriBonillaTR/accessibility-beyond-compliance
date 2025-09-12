"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@saffron/config"),e=require("tslib"),a=require("./fast-element-DOTfrYFb.js");class o extends a.FASTElement{constructor(){super(...arguments),this.processingContent="Processing"}}e.__decorate([a.observable],o.prototype,"processingContent",void 0);exports.default=()=>o.define({name:t.getComponentName("saf-progress-text"),template:a.html` <template>
	<div class="control" part="control">
		<slot name="start"></slot>
		<div class="content" part="content">
			<slot>${t=>t.processingContent}</slot>
		</div>
		<slot name="end">
			<div class="dots" part="dots"></div>
		</slot>
	</div>
</template>`,styles:a.css`
	${t.replaceComponentNamesWithSafAttribute(':host{display:block}.control{align-items:center;color:var(--saf-color-text-heavy);display:flex;font:var(--saf-type-body-default-md-regular-standard)}.dots{animation:dot-flashing 1s infinite linear alternate;animation-delay:.5s;background-color:var(--saf-color-text-heavy);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);height:8px;position:relative;transform:translate(240%, 2px);width:8px}.dots::before,.dots::after{content:"";display:inline-block;position:absolute;top:0}.dots::before{animation:dot-flashing 1s infinite alternate;animation-delay:0s;background-color:var(--saf-color-text-heavy);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);height:8px;left:-100%;transform:translate(-50%);width:8px}.dots::after{animation:dot-flashing 1s infinite alternate;animation-delay:1s;background-color:var(--saf-color-text-heavy);border-radius:var(--saf-border-radius-xs);color:var(--saf-color-text-heavy);height:8px;left:100%;transform:translate(50%);width:8px}@keyframes dot-flashing{0%{background-color:var(--saf-color-text-heavy)}50%,100%{background-color:rgba(31,31,31,.2)}}')}
`,registry:t.getRegistry()});
