import { html, slotted, when } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { whitespaceFilter } from '../../../utils/whitespace-filter.js';

function radioTemplate() {
    return html `
		<template
			current-checked="${(x) => x.currentChecked}"
			@click="${(x, c) => x.clickHandler(c.event)}"
		>
			<div class="root" part="root">
				<input
					id="${(x) => x.internalId}"
					part="control"
					class="control ${(x) => [x.checked && 'checked', x.readOnly && 'readonly']
        .filter(Boolean)
        .join(' ')}"
					:checked="${(x) => x.checked}"
					type="radio"
					aria-label="${(x) => x.a11yAriaLabel ? x.a11yAriaLabel : x.ariaLabel ? x.ariaLabel : undefined}"
					aria-labelledby="${(x) => (!x.a11yAriaLabel ? x.ariaLabelledbyIds : undefined)}"
					aria-disabled="${(x) => x.disabled}"
					aria-describedby="${(x) => x.a11yAriaDescription ? 'a11y-aria-description' : undefined}"
					tabindex="${(x) => x.tabIndexAttr}"
					?disabled="${(x) => x.disabled}"
				/>
				<slot name="checked-indicator">
					<div part="checked-indicator" class="checked-indicator"></div>
				</slot>
				<label
					for="${(x) => x.internalId}"
					id="label-${(x) => x.internalId}"
					part="label"
					class="${(x) => {
        var _a;
        return ['label', !((_a = x.defaultSlottedNodes) === null || _a === void 0 ? void 0 : _a.length) && 'label__hidden']
            .filter(Boolean)
            .join(' ');
    }}"
				>
					<slot
						${slotted({
        property: 'defaultSlottedNodes',
        filter: whitespaceFilter,
    })}
					></slot>
				</label>
				${when((x) => x.a11yAriaDescription, html `<span
						id="a11y-aria-description"
						class="a11y-aria-description"
						part="a11y-aria-description"
					>
						${(x) => x.a11yAriaDescription}
					</span>`)}
			</div>
		</template>
	`;
}

export { radioTemplate };
