import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const splitterTemplate = () => html `
	<template orientation="${(x) => x.orientation}">
		<div
			id="${(x) => x.id}"
			class="splitter-wrapper ${(x) => x.orientation}"
			part="splitter-wrapper"
			width="${(x) => x.width}"
		>
			<div
				part="primary"
				class="primary"
				id="primaryContent-${(x) => x.id}"
				?scrollable="${(x) => x.scrollablePrimary}"
			>
				<slot name="primary"></slot>
			</div>
			<div part="splitter" class="splitter">
				<saf-button
					a11y-role="slider"
					a11y-aria-roledescription="separator"
					a11y-aria-label="${(x) => x.srOnlyTitle}"
					a11y-aria-valuenow="${(x) => x.valuenow}"
					a11y-aria-valuemin="0"
					a11y-aria-valuemax="100"
					a11y-aria-orientation="${(x) => x.orientation}"
					aria-controls="primaryContent-${(x) => x.id}"
					appearance="secondary"
					id="splitterSeparator-${(x) => x.id}"
					icon-only=""
					part="handle"
					class="handle"
					shape="circle"
				>
					<saf-icon
						icon-name="${(x) => x.orientation === 'horizontal'
    ? 'arrows-up-down'
    : 'arrows-left-right'}"
					></saf-icon>
					<saf-sr-only>${(x) => x.srOnlyTitle}</saf-sr-only>
				</saf-button>
				<saf-tooltip anchor="splitterSeparator-${(x) => x.id}">
					${(x) => x.tooltipText}
				</saf-tooltip>
			</div>
			<div
				part="secondary"
				class="secondary"
				id="secondaryContent-${(x) => x.id}"
				?scrollable="${(x) => x.scrollableSecondary}"
			>
				<slot name="secondary"></slot>
			</div>
		</div>
	</template>
`;

export { splitterTemplate };
