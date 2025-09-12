import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

/* eslint-disable prettier/prettier */
const footerTemplate = () => html `
	<template product-name=${(x) => x.productName}>
		<footer class="control" part="control">
			<div class="footer-logo" part="footer-logo">
				<saf-logo appearance="full-color"></saf-logo>
			</div>
			<nav
				class="footer-links"
				part="footer-links"
				aria-label=${(x) => x.a11yAriaLabelAnchorGroup ? x.a11yAriaLabelAnchorGroup : null}
			>
				<slot name="footer-links"></slot>
			</nav>
			<div class="footer-copyright-info" part="footer-copyright-info">
				&copy; ${(x) => x.currentYear} Thomson Reuters. ${(x) => x.productName}
			</div>
			<nav
				class="footer-social-links"
				part="footer-social-links"
				aria-label=${(x) => x.a11yAriaLabelSocialIcons ? x.a11yAriaLabelSocialIcons : null}
			>
				<slot name="footer-social"></slot>
			</nav>
		</footer>
	</template>
`;

export { footerTemplate };
