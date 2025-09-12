import { html, children, slotted, when, elements } from '../../@microsoft/fast-element/dist/esm/index.js';

const wizardTemplate = () => html `
	<template
		mode=${(x) => x.mode}
		${children({
    property: 'steps',
    filter: elements('saf-wizard-step-content'),
})}
	>
		<section
			class="wizard-container ${(x) => { var _a; return x.mode !== 'mobile' ? (_a = x.stepper) === null || _a === void 0 ? void 0 : _a.orientation : 'horizontal'; }} ${(x) => x.mode}"
			part="wizard-container"
			role="complementary"
			aria-label="${(x) => x.a11yAriaLabel}"
		>
			<slot
				?hidden=${(x) => x.mode === 'mobile'}
				name="stepper"
				${slotted({ property: 'slottedStepperElements' })}
			></slot>

			${when((x) => x.mode === 'mobile', html `
					<slot name="step-header-mobile">
						<div class="step-header-mobile" part="step-header-mobile">
							${(x) => getHeadingTemplate(x.headingLevel, x.currentActiveStepText)}
							<span class="step-description-mobile"
								>${(x) => x.currentActiveStepDescription}</span
							>
						</div>
					</slot>
				`)}

			<div class="wizard-content-container" part="wizard-content-container">
				<div class="wizard-content" part="wizard-content">
					${when((x) => x.mode === 'desktop', html `<div class="step-header" part="step-header">
							${(x) => getHeadingTemplate(x.headingLevel, x.currentActiveStepText)}
						</div>`)}
					<div class="step-content" part="step-content">
						<slot></slot>
					</div>
				</div>
				${when((x) => x.mode === 'mobile', html ` <saf-divider class="wizard-mobile-divider"></saf-divider> `)}
				<div class="wizard-footer" part="wizard-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</section>
	</template>
`;
const getHeadingTemplate = (level, content) => {
    const tagName = `h${level}`;
    let appearance = '';
    switch (level) {
        case 1:
            appearance = 'heading-4xl';
            break;
        case 2:
            appearance = 'heading-3xl';
            break;
        case 3:
            appearance = 'heading-2xl';
            break;
        case 4:
            appearance = 'heading-xl';
            break;
        case 5:
            appearance = 'heading-lg';
            break;
        case 6:
            appearance = 'heading-md';
            break;
        default:
            appearance = 'heading-4xl';
    }
    return html `
    <${html.partial(tagName)} tabindex="-1" part="step-title" class="step-title ${(x) => x.mode === 'mobile' ? 'step-title-mobile' : ''}">
			<saf-text appearance="${() => appearance}">
      	${content}
			</saf-text>
    </${html.partial(tagName)}>
  `;
};

export { wizardTemplate };
