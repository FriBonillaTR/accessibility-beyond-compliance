import { html, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Listbox } from './listbox.js';

/* eslint-disable no-negated-condition */
function listboxTemplate() {
    return html `
		<template
			density="${(x) => x.density}"
			aria-labelledby="${(x) => x.ariaLabelledBy}"
			aria-label="${(x) => x.ariaLabel}"
			aria-activedescendant="${(x) => x.ariaActiveDescendant}"
			aria-multiselectable="${(x) => x.ariaMultiSelectable}"
			role="listbox"
			tabindex="${(x) => (!x.disabled ? '0' : null)}"
			@click="${(x, c) => x.clickHandler(c.event)}"
			@focusin="${(x, c) => x.focusinHandler(c.event)}"
			@keydown="${(x, c) => x.keydownHandler(c.event)}"
			@mousedown="${(x, c) => x.mousedownHandler(c.event)}"
		>
			<slot
				${slotted({
        filter: Listbox.slottedOptionFilter,
        flatten: true,
        property: 'slottedOptions',
    })}
			></slot>
		</template>
	`;
}

export { listboxTemplate };
