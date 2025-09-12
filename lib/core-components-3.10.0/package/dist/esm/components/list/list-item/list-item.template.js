import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

function listItemTemplate() {
    return html `<template role="listitem" part="list-item">
		<slot></slot>
	</template> `;
}

export { listItemTemplate };
