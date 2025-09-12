import { html, when, ref } from '../../@microsoft/fast-element/dist/esm/index.js';

const dialogTemplate = () => html `
	<template
		id="${(x) => x.id}"
		is-footer="${(x) => x.isFooter}"
		is-header="${(x) => x.isHeader}"
		?modal="${(x) => (x.modal ? x.modal : void 0)}"
		?hidden="${(x) => x.hidden}"
		?aria-hidden="${(x) => x.hidden}"
		?no-focus-trap="${(x) => (x.noFocusTrap ? x.noFocusTrap : false)}"
	>
		${when((x) => x.modal, html `
				<div
					class="overlay"
					part="overlay"
					role="presentation"
					@click="${(x) => {
    x.dismiss();
}}"
				></div>
			`)}
		<div
			role="${(x) => (x.isAlert ? 'alertdialog' : 'dialog')}"
			tabindex="-1"
			class="control"
			part="control"
			aria-modal="${(x) => (x.modal ? x.modal : void 0)}"
			aria-describedby="${(x) => x.ariaDescribedby}"
			aria-labelledby="${(x) => x.ariaLabel || x.a11yAriaLabel ? null : x.isHeader ? `dialog-title-${x.id}` : null}"
			aria-label="${(x) => x.ariaLabel || x.a11yAriaLabel
    ? x.a11yAriaLabel
        ? x.a11yAriaLabel
        : x.ariaLabel
    : void 0}"
			${ref('dialog')}
		>
			<!-- start dialog header wrapper -->
			<div class="dialog-header-wrapper" part="dialog-header-wrapper">
				${when((x) => x.isHeader, html `
						<div class="dialog-headings" part="dialog-headings">
							<div
								id="dialog-title-${(x) => x.id}"
								class="dialog-title"
								part="dialog-title"
								role="heading"
								aria-level="${(x) => x.ariaTitleLevel}"
								tabindex="-1"
							>
								${(x) => x.dialogTitle}
							</div>
							${when((x) => !!x.dialogSubtitle, html `
									<div
										id="dialog-subtitle-${(x) => x.id}"
										class="dialog-subtitle"
										part="dialog-subtitle"
										role="${(x) => (x.ariaSubtitleLevel ? 'heading' : null)}"
										aria-level="${(x) => x.ariaSubtitleLevel ? x.ariaSubtitleLevel : null}"
									>
										${(x) => x.dialogSubtitle}
									</div>
								`)}
						</div>
					`)}

				<saf-button
					nested-item
					class="close"
					part="close"
					icon-only=""
					appearance="tertiary"
					a11y-aria-label="${(x) => { var _a; return (_a = x.closeAriaLabel) !== null && _a !== void 0 ? _a : 'Close'; }}"
					@click="${(x) => x.hide()}"
				>
					<saf-icon icon-name="xmark-large"></saf-icon>
				</saf-button>
				<slot name="subheader" part="subheader" class="subheader"></slot>
			</div>
			<!-- closes dialog header wrapper -->

			<div class="content" part="content" @scroll="${(x) => x.scrollHandler()}">
				<slot></slot>
			</div>

			${when((x) => x.isFooter, html `
					<slot
						id="footer-${(x) => x.id}"
						name="footer"
						class="footer"
						part="footer"
					></slot>
				`)}
		</div>
	</template>
`;

export { dialogTemplate };
