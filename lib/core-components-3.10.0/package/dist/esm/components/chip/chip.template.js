import { html, ref, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate } from '../../utils/start-end-template.js';

const chipTemplate = () => html `${(x) => html `
	<${html.partial(x.clickable ? 'button' : 'div')}
		class="${(x) => `control${x.clickable ? ' clickable' : ''}${x.closeable ? ' closeable' : ''}`}"
		part="control"
		?autofocus="${(x) => x.autofocus}"
		?disabled="${(x) => x.disabled}"
		aria-atomic="${(x) => x.ariaAtomic}"
		aria-busy="${(x) => x.ariaBusy}"
		aria-controls="${(x) => x.ariaControls}"
		aria-current="${(x) => x.ariaCurrent}"
		aria-describedby="${(x) => x.ariaDescribedby}"
		aria-details="${(x) => x.ariaDetails}"
		aria-disabled="${(x) => x.ariaDisabled}"
		aria-errormessage="${(x) => x.ariaErrormessage}"
		aria-expanded="${(x) => x.ariaExpanded}"
		aria-flowto="${(x) => x.ariaFlowto}"
		aria-haspopup="${(x) => x.ariaHaspopup}"
		aria-hidden="${(x) => x.ariaHidden}"
		aria-invalid="${(x) => x.ariaInvalid}"
		aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
		aria-label="${(x) => x.ariaLabel}"
		aria-labelledby="${(x) => x.ariaLabelledby}"
		aria-live="${(x) => x.ariaLive}"
		aria-owns="${(x) => x.ariaOwns}"
		aria-pressed="${(x) => x.ariaPressed}"
		aria-relevant="${(x) => x.ariaRelevant}"
		aria-roledescription="${(x) => x.ariaRoledescription}"
		tabindex="${(x) => (x.clickable ? undefined : '-1')}"
		${ref('control')}
	>
		${startSlotTemplate()}
		<div class="chip-label" part="chip-label">
			<slot></slot>
		</div>
		${when((x) => x.closeable, html `
				<saf-button
					nested-item
					@click="${(x, c) => x.close(c.event)}"
					a11y-aria-label="${(x) => (x.closeButtonLabel ? x.closeButtonLabel : null)}"
					a11y-aria-description="${(x) => {
    var _a;
    return x.closeableTooltip && x.announceTooltip
        ? (_a = x.tooltipText) !== null && _a !== void 0 ? _a : x.closeButtonLabel
        : null;
}}"
					appearance="tertiary"
					icon-only
					density="compact"
					class="close-button"
					id="close-button"
					?disabled="${(x) => x.disabled}"
				>
					<saf-icon part="fa-icon" size="12" icon-name="xmark-large" appearance="solid" />
					<saf-sr-only>${(x) => x.closeButtonLabel}</saf-sr-only>
				</saf-button>
				${when((x) => x.closeableTooltip, html `
						<saf-tooltip
							class="close-button-tooltip"
							placement="bottom"
							anchor="close-button"
							aria-hidden="${(x) => !x.announceTooltip}"
						>
							${(x) => { var _a; return (_a = x.tooltipText) !== null && _a !== void 0 ? _a : x.closeButtonLabel; }}
						</saf-tooltip>
					`)}
			`)}
	</${html.partial(x.clickable ? 'button' : 'div')}>`} `;

export { chipTemplate };
