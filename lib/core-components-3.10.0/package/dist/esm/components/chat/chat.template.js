import { html, when, slotted } from '../../@microsoft/fast-element/dist/esm/index.js';

const chatTemplate = () => html `
	<template
		role="region"
		aria-label="${(x) => x.ariaLabel}"
		message-aria-label="${(x) => (x.messageAriaLabel !== '' ? x.messageAriaLabel : undefined)}"
	>
		<div class="control" part="control">
			<div class="content-container" part="content-container">
				<div
					class="content"
					part="content"
					role="list"
					aria-label="${(x) => x.messageAriaLabel}"
					aria-live="polite"
					aria-atomic="false"
				>
					<slot></slot>
					${when((x) => x.loading, html `
							<saf-message-box part="loading-message-box" class="loading-message-box">
								<saf-progress-text>${(x) => x.loadingText}</saf-progress-text>
							</saf-message-box>
						`)}
				</div>
			</div>
			<slot
				name="footer"
				class="footer"
				part="footer"
				${slotted({ property: 'footerNodes' })}
			></slot>
		</div>
	</template>
`;

export { chatTemplate };
