import { html, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the {@link @saffron/core-components#(Switch:class)} component.
 * @public
 */
function switchTemplate() {
    return html `
		<template
			role="switch"
			aria-checked="${(x) => x.checked}"
			aria-disabled="${(x) => x.disabled || x.readOnly}"
			tabindex="${(x) => (x.disabled ? null : 0)}"
			@keypress="${(x, c) => x.keypressHandler(c.event)}"
			@click="${(x, c) => x.clickHandler(c.event)}"
		>
			<label
				part="label"
				class="${(x) => x.defaultSlottedNodes && x.defaultSlottedNodes.length
        ? 'label'
        : 'label label__hidden'}"
			>
				<slot ${slotted('defaultSlottedNodes')}></slot>
			</label>
			<div part="switch" class="switch">
				<slot name="switch">
					<span class="checked-indicator" part="checked-indicator">
						<saf-icon
							class="checked"
							part="checked"
							aria-hidden="true"
							focusable="false"
							presentation="true"
							icon-name="circle-check"
							appearance="solid"
						></saf-icon>
						<saf-icon
							class="unchecked"
							part="unchecked"
							aria-hidden="true"
							focusable="false"
							presentation="true"
							icon-name="circle-xmark"
							appearance="solid"
						></saf-icon>
					</span>
				</slot>
			</div>
		</template>
	`;
}

export { switchTemplate };
