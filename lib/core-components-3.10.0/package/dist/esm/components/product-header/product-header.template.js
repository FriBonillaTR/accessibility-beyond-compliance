import { html, when, ref } from '../../@microsoft/fast-element/dist/esm/index.js';

const productHeaderTemplate = () => html `
	<header>
		<div class="side-nav-trigger" part="side-nav-trigger">
			<slot name="side-nav-trigger"></slot>
		</div>
		<slot name="logo"></slot>
		<div class="navigation" part="navigation">
			<span
				class="tasks-navigation"
				part="tasks-navigation"
				role="navigation"
				aria-label="${(x) => x.tasksAriaLabel}"
			>
				<span class="tasks-list" part="tasks-list" role="list">
					<slot name="tasks"></slot>
				</span>
			</span>
			${when((x) => x._showDivider, html `<saf-divider orientation="vertical" role="separator"></saf-divider>`)}
			<span
				class="global-navigation"
				part="global-navigation"
				role="navigation"
				aria-label="${(x) => x.globalAriaLabel}"
			>
				<span class="global-list" part="global-list" role="list">
					<slot name="global"></slot>
				</span>
			</span>
			<div class="mobile-menu" part="mobile-menu">
				<saf-button
					appearance="secondary"
					product-header-item
					icon-only
					a11y-aria-label="Product header menu"
					id="button-menu-trigger"
					@click="${(x) => x.handleMenuButtonClick()}"
					@keydown="${(x, c) => x.handleButtonKeyDown(c.event)}"
					aria-expanded=${(x) => x.isMenuOpen}
					aria-haspopup="menu"
					aria-controls="mobile-dropdown"
					${ref('menuButton')}
				>
					<saf-icon
						color="#000000"
						icon-name="ellipsis-stroke"
						appearance="light"
					></saf-icon>
				</saf-button>
				<saf-anchored-region
					class="adaptive-menu-region"
					part="adaptive-menu-region"
					anchor="button-menu-trigger"
					id="button-menu-region"
					horizontal-scaling="fill"
					vertical-scaling="content"
					@keydown="${(x, c) => x.handleBackgroundKeyDown(c.event)}"
					${ref('anchoredRegion')}
				>
					<slot name="menu"></slot>
				</saf-anchored-region>
			</div>
		</div>
	</header>
`;

export { productHeaderTemplate };
