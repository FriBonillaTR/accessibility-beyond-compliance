import { html, ref, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the {@link @saffron/core-components#TreeView} component.
 * @public
 */
function treeViewTemplate() {
    return html `
		<template
			role="tree"
			${ref('treeView')}
			@keydown="${(x, c) => x.handleKeyDown(c.event)}"
			@focusin="${(x, c) => x.handleFocus(c.event)}"
			@focusout="${(x, c) => x.handleBlur(c.event)}"
			@click="${(x, c) => x.handleClick(c.event)}"
			@selected-change="${(x, c) => x.handleSelectedChange(c.event)}"
		>
			<slot ${slotted('slottedTreeItems')}></slot>
		</template>
	`;
}

export { treeViewTemplate };
