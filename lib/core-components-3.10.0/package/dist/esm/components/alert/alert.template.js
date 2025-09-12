import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

const alertTemplate = () => html `
	${(x) => (x.duration > 0 ? x.close(x.duration) : '')}
	<div
		density="${(x) => x.density}"
		class="control ${(x) => (x.alertType === 'toast' ? 'toast' : 'inline')}"
		part="control"
		aria-hidden="${(x) => x.isHidden}"
	>
		<saf-icon
			class="alert-icon"
			id="alert-icon"
			part="alert-icon"
			color=${(x) => x.icon.color}
			icon-name=${(x) => x.icon.iconName}
			appearance="solid"
			aria-label="${(x) => x.iconAriaLabelComputed}"
			presentation="${(x) => x.iconPresentation}"
			size="16"
		></saf-icon>
		<div class="content" part="content">
			<slot></slot>
			<slot name="link" aria-live="off"></slot>
		</div>

		${when((x) => !x.hideCloseButton, html `<saf-button
				nested-item
				id="closes"
				a11y-aria-label="${(x) => { var _a; return (_a = x.closeAriaLabel) !== null && _a !== void 0 ? _a : 'Close alert'; }}"
				class="alert-btn"
				part="alert-btn"
				icon-only=""
				appearance="tertiary"
				@click="${(x) => x.close(-1)}"
			>
				<saf-icon icon-name="xmark-large"></saf-icon>
			</saf-button>`)}
	</div>
`;

export { alertTemplate };
