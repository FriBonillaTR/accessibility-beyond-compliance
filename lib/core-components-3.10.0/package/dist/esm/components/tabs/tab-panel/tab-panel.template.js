import { html } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the {@link @saffron/core-components#TabPanel} component.
 * @public
 */
function tabPanelTemplate() {
    return html `
		<template slot="tabpanel" role="tabpanel">
			<slot></slot>
		</template>
	`;
}

export { tabPanelTemplate };
