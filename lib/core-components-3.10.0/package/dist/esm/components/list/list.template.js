import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

function listTemplate() {
    return html `<template
		size="${(x) => x.size}"
		list-style="${(x) => x.listStyle}"
		order="${(x) => x.order || 'unordered'}"
		inline="${(x) => x.inline}"
	>
		${when((x) => x.order === 'unordered', html `<ul class="list" part="list">
				<slot></slot>
			</ul>`)}
		${when((x) => x.order === 'ordered', html `<ol class="list" part="list">
				<slot></slot>
			</ol>`)}
	</template> `;
}

export { listTemplate };
