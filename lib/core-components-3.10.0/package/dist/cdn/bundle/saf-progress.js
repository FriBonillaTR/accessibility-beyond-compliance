"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@saffron/config"),a=require("./progress-CWabmdLV.js"),t=require("./fast-element-DOTfrYFb.js"),r=require("./when-0aDJpnLk.js");require("tslib"),require("./a11y-DvNZtvTj.js");exports.default=()=>a.Progress.define({name:e.getComponentName("saf-progress"),template:t.html`
		<template
			id="${e=>e.id}"
			role="progressbar"
			aria-valuenow="${e=>"number"==typeof e.value?e.value:null}"
			aria-valuemin="${e=>{var a;return null!==(a=e.min)&&void 0!==a?a:0}}"
			aria-valuemax="${e=>{var a;return null!==(a=e.max)&&void 0!==a?a:100}}"
			aria-valuetext="${e=>"number"==typeof e.value?`${Math.round(e.percentComplete)}% ${e.completeLabel}`:null}"
			aria-label="${e=>e.ariaLabel?e.ariaLabel:e.label}"
			status-color="${e=>e.statusColor}"
			complete-label="${e=>e.completeLabel}"
		>
			${r.when(e=>"number"==typeof e.value,t.html`
					<div id="label-${e=>e.id}" class="progress-value" part="progress-value">
						${r.when(e=>e.label,t.html`<span class="label" part="label">${e=>e.label}</span>`)}
						<span class="value" part="value">
							${e=>Math.round(e.percentComplete)}% ${e=>e.completeLabel}
						</span>
					</div>
					<div class="progress" part="progress" slot="determinate">
						<div
							class="determinate"
							part="determinate"
							style="width: ${e=>e.percentComplete}%"
						></div>
					</div>
				`)}
			${r.when(e=>"number"!=typeof e.value,t.html`
					<div id="label-${e=>e.id}" class="progress-value" part="progress-value">
						${r.when(e=>e.label,t.html`<span class="label" part="label">${e=>e.label}</span>`)}
					</div>
					<div class="progress" part="progress" slot="indeterminate">
						<slot class="indeterminate" name="indeterminate">
							<span
								class="indeterminate-indicator-1"
								part="indeterminate-indicator-1"
							></span>
							<span
								class="indeterminate-indicator-2"
								part="indeterminate-indicator-2"
							></span>
						</slot>
					</div>
				`)}
		</template>
	`,styles:t.css`
	${e.replaceComponentNamesWithSafAttribute(':host{display:block;--saf-progressBar-height: 4px}.progress{align-items:center;background-color:var(--saf-color-status-neutral-subtle);border-radius:var(--saf-border-radius-xs);display:flex;height:var(--saf-progressBar-height);position:relative;width:100%}@media print{.progress{background-color:var(--saf-color-interactive-background-stronger);-webkit-print-color-adjust:exact;print-color-adjust:"exact"}}.determinate,.indeterminate{border-radius:var(--saf-border-radius-xs);display:flex;height:var(--saf-progressBar-height)}.determinate{transition:all .2s ease-in-out}:host([status-color=error]) .determinate,:host([status-color=error]) .indeterminate-indicator-1,:host([status-color=error]) .indeterminate-indicator-2{background-color:var(--saf-color-status-error-strong)}:host([status-color=loading]) .determinate,:host([status-color=loading]) .indeterminate-indicator-1,:host([status-color=loading]) .indeterminate-indicator-2{background-color:var(--saf-color-status-information-strong)}:host([status-color=paused]) .determinate,:host([status-color=paused]) .indeterminate-indicator-1,:host([status-color=paused]) .indeterminate-indicator-2{background-color:var(--saf-color-status-neutral-strong)}:host([status-color=success]) .determinate,:host([status-color=success]) .indeterminate-indicator-1,:host([status-color=success]) .indeterminate-indicator-2{background-color:var(--saf-color-status-success-strong)}.indeterminate{overflow:hidden;position:relative;width:100%}.indeterminate-indicator-1,.indetermiante-indicator-2{animation-timing-function:cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--saf-color-status-information-strong);border-radius:var(--saf-border-radius-xs);height:100%;opacity:0;position:absolute}.indeterminate-indicator-1{animation:indeterminate-1 2s infinite;width:40%}.indeterminate-indicator-2{animation:indeterminate-2 2s infinite;width:60%}.progress-value{display:flex;flex-wrap:wrap;gap:var(--saf-spacing-0) var(--saf-spacing-6);justify-content:flex-end;margin-bottom:var(--saf-spacing-1)}.label{color:var(--saf-color-text-heavy);flex:1 1 auto;font:var(--saf-type-body-default-md-regular-standard);word-break:break-word}.value{align-self:flex-end;color:var(--saf-color-text-strong);flex:0 0 auto;font:var(--saf-type-body-default-sm-regular-standard)}:host([label]) .progress-value{justify-content:space-between}:host([paused]) .indeterminate-indicator-1,:host([paused]) .indeterminate-indicator-2{animation-play-state:paused;background-color:var(--saf-color-interactive-on-disabled-subtle);opacity:1;width:100%}:host([paused]) .determinate{animation-play-state:paused}@keyframes indeterminate-1{0%{opacity:1;transform:translateX(-100%)}70%{opacity:1;transform:translateX(300%)}70.01%{opacity:0}100%{opacity:0;transform:translateX(300%)}}@keyframes indeterminate-2{0%{opacity:0;transform:translateX(-150%)}29.99%{opacity:0}30%{opacity:1;transform:translateX(-150%)}100%{opacity:1;transform:translateX(166.66%)}}')}
`,registry:e.getRegistry()});
