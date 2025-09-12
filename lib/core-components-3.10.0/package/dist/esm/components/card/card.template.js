import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const cardHeaderTemplate = () => html `
	<div class="badge" part="badge">
		<slot name="badge"></slot>
	</div>
	<slot name="icon"></slot>
	<div class="eyebrow" part="eyebrow">
		<slot name="eyebrow"></slot>
	</div>
	<div class="heading" part="heading" role="heading" aria-level="${(x) => x.headingLevel}">
		<slot name="heading"></slot>
	</div>
`;
function cardTemplate() {
    return html `
		<template
			:appearance="${(x) => x.appearance}"
			role="article"
			:heading-level="${(x) => x.headingLevel}"
			?image-bleed="${(x) => x.imageBleed}"
			density="${(x) => x.density}"
		>
			<div class="wrapper" part="wrapper">
				<div class="media" part="media">
					<slot name="media"></slot>
				</div>
				<div class="card-container" part="card-container">
					<div class="card-content" part="card-content">
						<div class="card-header" part="card-header">${cardHeaderTemplate}</div>
						<div class="content" part="content">
							<slot></slot>
						</div>
						<div class="controls" part="controls">
							<slot name="controls"></slot>
						</div>
					</div>
				</div>
			</div>
		</template>
	`;
}

export { cardHeaderTemplate, cardTemplate };
