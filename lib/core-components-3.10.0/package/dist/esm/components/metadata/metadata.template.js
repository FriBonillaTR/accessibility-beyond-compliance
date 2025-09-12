import { html, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

function metadataTemplate() {
    return html `
		<template>
			<div class="content" part="content">
				<slot ${slotted({ property: 'slottedMetadataItems', filter: elements() })}></slot>
			</div>
		</template>
	`;
}

export { metadataTemplate };
