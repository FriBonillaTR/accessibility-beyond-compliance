import { html } from '../../@microsoft/fast-element/dist/esm/index.js';
import { DividerRoleEnum } from './divider.options.js';

/**
 * The template for the {@link @saffron/core-components#Divider} component.
 * @public
 */
function dividerTemplate() {
    return html `
		<template
			role="${(x) => x.role}"
			aria-orientation="${(x) => x.role !== DividerRoleEnum.presentation ? x.orientation : void 0}"
		>
			<slot></slot>
		</template>
	`;
}

export { dividerTemplate };
