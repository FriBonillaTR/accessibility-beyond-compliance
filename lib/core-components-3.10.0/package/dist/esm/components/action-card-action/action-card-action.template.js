import { html, slotted, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { anchorTemplate } from '../anchor/anchor.template.js';
import { buttonTemplate } from '../button/button.template.js';

const childrenTemplate = html `
	<div class="card-content" part="card-content">
		<div class="card-title" part="card-title">
			<slot ${slotted('slottedCardTitleElements')} name="card-title"></slot>
			<slot name="badge"></slot>
		</div>
		<div
			class="description ${(x) => { var _a; return (((_a = x.slottedDescriptionElements) === null || _a === void 0 ? void 0 : _a.length) ? '' : 'empty'); }}"
			part="description"
			aria-hidden="true"
		>
			<slot ${slotted('slottedDescriptionElements')} name="description"></slot>
		</div>
	</div>
`;
const actionCardActionTemplate = () => html `
		<template>
			<div class="root" part="root">
				<!-- Switch mode, render button or anchor -->
				${when((x) => x.mode === 'button', html `${buttonTemplate({ children: childrenTemplate })}`)}
				${when((x) => x.mode === 'a', html `${anchorTemplate({ tag: 'a', children: childrenTemplate })}`)}
				<saf-sr-only id="control-description"> ${(x) => x.description} </saf-sr-only>
			</div>
		</template>
	`;

export { actionCardActionTemplate };
