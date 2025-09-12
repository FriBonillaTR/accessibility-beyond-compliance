import { html, ref } from '../../@microsoft/fast-element/dist/esm/index.js';
import { instructionalTextTemplate } from '../label/instructional-text.template.js';
import { labelTemplate } from '../label/label.template.js';

/**
 * The template for the {@link @saffron/core-components#(Slider:class)} component.
 * @public
 */
function sliderTemplate() {
    return html `
		<div
			class="control"
			part="control"
			role="slider"
			id="${(x) => x.id}"
			:label="${(x) => x.label}"
			tabindex="${(x) => (x.disabled ? null : 0)}"
			autocomplete="${(x) => x.autocomplete}"
			aria-labelledby="${(x) => (x.label ? `label-${x.id}` : '')}"
			aria-describedby="${(x) => (x.instructionalText ? `instructional-${x.id}` : '')}"
			aria-valuetext="${(x) => x.valueTextFormatter(x.value)}"
			aria-valuenow="${(x) => x.value}"
			aria-valuemin="${(x) => x.min}"
			aria-valuemax="${(x) => x.max}"
			aria-disabled="${(x) => (x.disabled ? true : void 0)}"
			aria-readonly="${(x) => (x.readOnly ? true : void 0)}"
			aria-orientation="${(x) => x.orientation}"
			class="${(x) => x.orientation}"
			required="${(x) => x.required}"
			required-text="${(x) => x.requiredText}"
		>
			${labelTemplate} ${instructionalTextTemplate}

			<div part="positioning-region" class="positioning-region">
				<div ${ref('track')} part="track" class="track">
					<slot name="track"></slot>
					<div part="track-start" class="track-start" style="${(x) => x.position}">
						<slot name="track-start"></slot>
					</div>
				</div>
				<slot></slot>
				<div
					${ref('thumb')}
					part="thumb-container"
					class="thumb-container"
					style="${(x) => x.position}"
				>
					<slot name="thumb">
						<div class="thumb-cursor" part="thumb-cursor">
							<span class="value">${(x) => x.value}</span>
						</div>
					</slot>
				</div>
			</div>
		</template>
	`;
}

export { sliderTemplate };
