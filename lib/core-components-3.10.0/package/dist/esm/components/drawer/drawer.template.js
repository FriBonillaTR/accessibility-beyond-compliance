import { html, when, ref } from '../../@microsoft/fast-element/dist/esm/index.js';

const drawerTemplate = () => html `
	<template
		id="${(x) => x.id}"
		is-footer="${(x) => x.isFooter}"
		is-header="${(x) => x.isHeader}"
		?modal="${(x) => (x.modal ? x.modal : void 0)}"
		?hidden="${(x) => x.hidden}"
		?aria-hidden="${(x) => x.hidden}"
		?no-focus-trap="${(x) => (x.noFocusTrap ? x.noFocusTrap : false)}"
		a11y-aria-label="${(x) => x.a11yAriaLabel}"
		drawer-title="${(x) => x.drawerTitle}"
		drawer-subtitle="${(x) => x.drawerSubtitle}"
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
			role="dialog"
			tabindex="-1"
			class="control"
			part="control"
			aria-modal="${(x) => (x.modal ? x.modal : void 0)}"
			aria-describedby="${(x) => x.ariaDescribedby}"
			aria-labelledby="${(x) => !x.ariaLabel && !x.a11yAriaLabel ? x.ariaLabelledbyIds() : void 0}"
			aria-label="${(x) => x.ariaLabel || x.a11yAriaLabel
    ? x.a11yAriaLabel
        ? x.a11yAriaLabel
        : x.ariaLabel
    : void 0}"
			${ref('dialog')}
		>
			<!-- start drawer header wrapper -->
			<div class="drawer-header-wrapper" part="drawer-header-wrapper">
				${when((x) => x.isHeader, html `
						<div class="drawer-headings" part="drawer-headings">
							${when((x) => { var _a; return (_a = x.drawerTitle) === null || _a === void 0 ? void 0 : _a.trim(); }, html `<div
									id="drawer-title-${(x) => x.id}"
									class="drawer-title"
									part="drawer-title"
									role="heading"
									aria-level="${(x) => x.ariaTitleLevel}"
									tabindex="-1"
								>
									${(x) => x.drawerTitle}
								</div>`)}
							${when((x) => { var _a; return (_a = x.drawerSubtitle) === null || _a === void 0 ? void 0 : _a.trim(); }, html `<div
									id="drawer-subtitle-${(x) => x.id}"
									class="drawer-subtitle"
									part="drawer-subtitle"
									role="heading"
									aria-level="${(x) => x.ariaSubtitleLevel}"
								>
									${(x) => x.drawerSubtitle}
								</div>`)}
						</div>
					`)}

				<saf-button
					nested-item
					a11y-aria-label="${(x) => { var _a; return (_a = x.closeAriaLabel) !== null && _a !== void 0 ? _a : 'Close'; }}"
					class="close"
					part="close"
					icon-only=""
					appearance="tertiary"
					@click="${(x) => x.hide()}"
				>
					<saf-icon icon-name="xmark-large"></saf-icon>
				</saf-button>
				<slot name="subheader" part="subheader" class="subheader"></slot>
			</div>
			<!-- closes drawer header wrapper -->

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

export { drawerTemplate };
