import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Direction } from '@microsoft/fast-web-utilities';

const backToTopTemplate = () => html `
	<template class=${(x) => (x.direction === Direction.rtl ? 'rtl' : '')}>
		<a
			class="control"
			part="control"
			href=${(x) => `#${x.scrollToId}`}
			id=${(x) => x.id}
			aria-describedby=${(x) => (x.a11yAriaDescription ? 'a11y-aria-description' : undefined)}
		>
			<saf-icon icon-name="chevron-up" appearance="solid"></saf-icon>
			<saf-tooltip
				placement=${(x) => (x.direction === Direction.rtl ? 'right' : 'left')}
				anchor=${(x) => x.id}
			>
				${(x) => x.tooltipText}
			</saf-tooltip>
			<saf-sr-only>${(x) => x.tooltipText}</saf-sr-only>
		</a>
		${when((x) => x.a11yAriaDescription, html `<span
				id="a11y-aria-description"
				class="a11y-aria-description"
				part="a11y-aria-description"
			>
				${(x) => x.a11yAriaDescription}
			</span>`)}
	</template>
`;

export { backToTopTemplate };
