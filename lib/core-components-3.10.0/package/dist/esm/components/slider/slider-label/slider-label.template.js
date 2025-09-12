import { html, ref, when } from '../../../@microsoft/fast-element/dist/esm/index.js';

/**
 * The template for the {@link @saffron/core-components#(SliderLabel:class)} component.
 * @public
 */
function sliderLabelTemplate() {
    return html `
		<template aria-disabled="${(x) => x.disabled}" orientation="${(x) => x.orientation}">
			<div ${ref('root')} part="root" class="root" style="${(x) => x.positionStyle}">
				<div class="container">
					${when((x) => !x.hideMark, html ` <div class="mark"></div> `)}
					<div class="label">
						<slot></slot>
					</div>
				</div>
			</div>
		</template>
	`;
}

export { sliderLabelTemplate };
