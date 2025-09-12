import { html, slotted, when } from '../../@microsoft/fast-element/dist/esm/index.js';

function carouselTemplate() {
    return html `
		<template class="saf-horizontal-scroll">
			<div class="scroll-area" part="scroll-area">
				<div class="scroll-view" part="scroll-view" id="scrollContainer">
					<div class="content-container" part="content-container" id="content">
						<slot
							${slotted({
        property: 'slottedNodes',
    })}
						>
							<slot name="slide-header"></slot>
							<slot name="slide-body"></slot>
						</slot>
					</div>
				</div>
				${when((x) => x.totalSlides > 1, html `
						<span class="controls" part="controls">
							<div
								class="scroll previous scroll-prev"
								part="scroll-prev"
								id="previousFlipperContainer"
							>
								<div
									class="scroll-action scroll-action-previous"
									part="scroll-action-previous"
								>
									<saf-flipper
										id="previous-slide"
										aria-hidden="${(x) => x.flippersHiddenFromAT}"
										direction="previous"
										disabled="${(x) => x.currentSlide === 1}"
										@click="${(x) => x.previousSlide()}"
									>
										${when((x) => x.currentSlide > 1, html `<saf-tooltip
												anchor="previous-slide"
												placement="bottom"
												>Previous item</saf-tooltip
											>`)}
									</saf-flipper>
								</div>
							</div>
							<span class="slides-info-container">
								${(x) => x.slideLabel} ${(x) => x.currentSlide} of
								${(x) => x.totalSlides}
							</span>
							<div
								class="scroll next scroll-next"
								part="scroll-next"
								id="nextFlipperContainer"
							>
								<div
									class="scroll-action scroll-action-next"
									part="scroll-action-next"
								>
									<saf-flipper
										id="next-slide"
										class="flipper-next"
										aria-hidden="${(x) => x.flippersHiddenFromAT}"
										direction="next"
										disabled="${(x) => x.currentSlide === x.totalSlides}"
										@click="${(x) => x.nextSlide()}"
									>
										${when((x) => x.currentSlide < x.totalSlides, html `<saf-tooltip anchor="next-slide" placement="bottom"
												>Next item</saf-tooltip
											>`)}
									</saf-flipper>
								</div>
							</div>
						</span>
					`)}
			</div>
		</template>
	`;
}

export { carouselTemplate };
