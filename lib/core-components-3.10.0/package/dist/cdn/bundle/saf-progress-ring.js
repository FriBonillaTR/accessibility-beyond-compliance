"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),r=require("tslib"),t=require("./a11y-DvNZtvTj.js"),s=require("./progress-CWabmdLV.js"),a=require("./fast-element-DOTfrYFb.js"),o=require("./when-0aDJpnLk.js");const i="small";class n extends s.Progress{constructor(){super(...arguments),this.progressSize=i,this.completeLabel="complete"}announceValue(){if(!this.valueAnnounced){this.valueAnnounced=!0;const e=`${Math.round(this.percentComplete)}% complete`;t.SafA11y.announce(e),setTimeout(()=>{this.valueAnnounced=!1},s.Progress.ANNOUNCEMENT_DEBOUNCE)}}}r.__decorate([a.attr({attribute:"progress-size"})],n.prototype,"progressSize",void 0),r.__decorate([a.attr({attribute:"complete-label"})],n.prototype,"completeLabel",void 0);exports.default=()=>n.define({name:e.getComponentName("saf-progress-ring"),template:a.html`
		<template
			id="${e=>e.id}"
			role="progressbar"
			aria-valuenow="${e=>"number"==typeof e.value?e.value:null}"
			aria-valuemin="${e=>{var r;return null!==(r=e.min)&&void 0!==r?r:0}}"
			aria-valuemax="${e=>{var r;return null!==(r=e.max)&&void 0!==r?r:100}}"
			aria-valuetext="${e=>"number"==typeof e.value?`${Math.round(e.percentComplete)}% complete`:null}"
			aria-label="${e=>e.ariaLabel?e.ariaLabel:e.label}"
		>
			${o.when(e=>"number"==typeof e.value,a.html`
					<svg
						class="progress ${e=>e.label?"":"no-label"}"
						part="progress"
						viewBox="0 0 16 16"
						slot="determinate"
						role="presentation"
					>
						<circle
							class="determinate"
							part="determinate"
							style="stroke-dasharray: ${e=>44*e.percentComplete/100} ${44}"
							cx="8px"
							cy="8px"
							r="7px"
						></circle>
					</svg>
				`)}
			${o.when(e=>"number"!=typeof e.value,a.html`
					<slot name="indeterminate">
						<svg
							class="progress indeterminate ${e=>e.label?"":"no-label"}"
							part="progress"
							viewBox="0 0 16 16"
						>
							<circle
								class="indeterminate-indicator-1"
								part="indeterminate-indicator-1"
								cx="8px"
								cy="8px"
								r="7px"
							></circle>
						</svg>
					</slot>
				`)}
			<div id="label-${e=>e.id}" class="label" part="label">${e=>e.label}</div>
		</template>
	`,styles:a.css`
	${e.replaceComponentNamesWithSafAttribute(":host{--saf-progress-size: 2rem;--saf-progress-ring-stroke: var(--saf-color-status-information-strong);align-items:center;display:flex;flex-direction:column;outline:none}:host([progress-size=small]){--saf-progress-size: 1rem}:host([progress-size=small]) .determinate,:host([progress-size=small]) .indeterminate-indicator-1{stroke-width:2px}:host([progress-size=medium]){--saf-progress-size: 2rem}:host([progress-size=medium]) .determinate,:host([progress-size=medium]) .indeterminate-indicator-1{stroke-width:1.5px}:host([progress-size=large]){--saf-progress-size: 4rem}.progress{height:var(--saf-progress-size);margin-block-end:var(--saf-spacing-1);width:var(--saf-progress-size)}.progress.no-label{margin-block-end:0}.progress.indeterminate{animation:spin-infinite 2s linear infinite;transform:rotate(-90deg);transform-origin:50% 50%}:host([paused]) .progress.indeterminate{animation:none}.determinate,.indeterminate-indicator-1{fill:none;stroke:var(--saf-progress-ring-stroke);stroke-linecap:round;transition:all .2s ease-in-out}.label{color:var(--saf-color-text-heavy);font:var(--saf-type-body-default-sm-regular-standard);text-align:center}:host([paused]) .indeterminate-indicator-1{stroke:var(--saf-color-status-neutral-strong)}:host([paused]) .determinate{stroke:var(--saf-color-status-neutral-strong)}@keyframes spin-infinite{0%{stroke-dasharray:.01 43.97;transform:rotate(0deg)}50%{stroke-dasharray:21.9 21.99;transform:rotate(450deg)}100%{stroke-dasharray:.01 43.97;transform:rotate(1080deg)}}")}
`,registry:e.getRegistry()});
