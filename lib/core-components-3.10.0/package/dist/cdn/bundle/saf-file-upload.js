"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),t=require("./define-CgQAavGn.js"),a=require("./saf-progress.js"),r=require("./saf-status.js"),s=require("tslib"),i=require("./fast-element-DOTfrYFb.js"),l=require("./instructional-text.template-B5ljXGFW.js"),o=require("./when-0aDJpnLk.js");require("./apply-mixins-CewQe2EQ.js"),require("./start-end-template-D7dQJgd3.js"),require("./ref-BeTe_0iT.js"),require("./aria-global-CYzDgx1a.js"),require("./form-associated-DSP-KUNe.js"),require("@microsoft/fast-web-utilities"),require("./global-enums-58U8enSy.js"),require("./slotted-cZBT0SIc.js"),require("./progress-CWabmdLV.js"),require("./a11y-DvNZtvTj.js"),require("./saf-icon.js"),require("./logger-vjs750p7.js");class n extends i.FASTElement{}s.__decorate([i.attr,i.observable],n.prototype,"status",void 0),s.__decorate([i.attr({attribute:"file-name"})],n.prototype,"fileName",void 0),s.__decorate([i.attr({attribute:"progress-value"})],n.prototype,"progressValue",void 0),s.__decorate([i.attr({attribute:"validation-message"})],n.prototype,"validationMessage",void 0),s.__decorate([i.attr({attribute:"file-types-text"})],n.prototype,"fileTypesText",void 0),s.__decorate([i.attr({attribute:"instructional-text"})],n.prototype,"instructionalText",void 0);exports.default=()=>(t.SafButton(),a.default(),r.default(),n.define({name:e.getComponentName("saf-file-upload"),template:i.html`
	<template
		id="${e=>e.id}"
		instructional-text="${e=>e.instructionalText}"
		file-types-text="${e=>e.fileTypesText}"
		file-name="${e=>e.fileName}"
		status="${e=>e.status}"
	>
		<p class="title" part="title"><slot name="title"></slot></p>

		${o.when(e=>e.fileTypesText,i.html`<p class="title-label-copy" part="title-label-copy">${e=>e.fileTypesText}</p>`)}

		<div class="upload-space" part="upload-space">
			${o.when(e=>e.instructionalText,i.html`${l.instructionalTextTemplate}`)}

			<input class="" type="file" id="file" hidden />
			<saf-button id="upload-file-btn" variant="primary"
				><slot name="add-file-btn-label"></slot
			></saf-button>
		</div>

		<p class="document-name" part="document-name">${e=>e.fileName}</p>

		<saf-progress
			id="progress-bar"
			min="0"
			max="100"
			value="${e=>e.progressValue}"
			aria-valuenow="${e=>e.progressValue}"
			aria-valuemin="0"
			aria-valuemax="100"
			aria-label="progress"
			indeterminate="false"
			role="progressbar"
			aria-labelledby="label-progress-bar"
		>
		</saf-progress>

		${o.when(e=>e.status&&e.validationMessage,i.html`<saf-status
				id="status-${e=>e.id}"
				message="${e=>e.validationMessage}"
				status="${e=>e.status}"
			></saf-status>`)}
	</template>
`,styles:i.css`
	${e.replaceComponentNamesWithSafAttribute(":host{color:var(--saf-color-text-heavy);display:block}.control{width:100%}.title,.title-label-copy{margin:0}.title{font:var(--saf-type-heading-default-lg-strong-standard)}.title-label-copy{font:var(--saf-type-body-default-sm-regular-standard);margin-bottom:var(--saf-spacing-4)}input{overflow:hidden}.upload-space{background:var(--saf-color-interactive-secondary-default);border:var(--saf-line-width-thin) dashed var(--saf-color-interactive-on-tertiary-default);border-radius:var(--saf-border-radius-sm);padding:var(--saf-spacing-8)}.instructional-text{display:block;font:var(--saf-type-body-default-md-strong-standard);margin-bottom:var(--saf-spacing-4)}saf-status{margin-top:calc(var(--saf-spacing-5)*-1)}.document-name{display:inline;font:var(--saf-type-body-default-md-regular-standard);position:relative;top:21px}")}
`,registry:e.getRegistry()}));
