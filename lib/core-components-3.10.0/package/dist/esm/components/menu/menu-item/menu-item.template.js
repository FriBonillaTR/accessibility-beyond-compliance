import { html, when, ref, slotted, elements } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate, endSlotTemplate } from '../../../utils/start-end-template.js';
import { MenuItemRoleEnum } from './menu-item.options.js';

function menuItemTemplate() {
    return html `
		<template
			aria-haspopup="${(x) => (x.hasSubmenu ? 'menu' : void 0)}"
			aria-checked="${(x) => (x.role !== MenuItemRoleEnum.menuitem ? x.checked : void 0)}"
			aria-disabled="${(x) => x.disabled}"
			aria-expanded="${(x) => x.expanded}"
			tabindex="0"
			@keydown="${(x, c) => x.handleMenuItemKeyDown(c.event)}"
			@click="${(x, c) => x.handleMenuItemClick(c.event)}"
			@mouseover="${(x, c) => x.handleMouseOver(c.event)}"
			@mouseout="${(x, c) => x.handleMouseOut(c.event)}"
			@mousedown="${(x, c) => x.handleMenuItemMouseDown(c.event)}"
			@mouseup="${(x, c) => x.handleMenuItemMouseup(c.event)}"
			@change="${(x, c) => x.handleMenuItemChange(c.event)}"
		>
			<div class="root" part="root">
				${when((x) => x.role === MenuItemRoleEnum.menuitemcheckbox, html `
						<div part="input-container" class="input-container">
							<span part="checkbox" class="checkbox">
								<slot name="checkbox-indicator">
									<saf-icon
										color="var(--saf-color-interactive-on-secondary-active)"
										class="checkbox-indicator"
										part="checkbox-indicator"
										icon-name="check"
										appearance="solid"
									></saf-icon>
								</slot>
							</span>
						</div>
					`)}
				${when((x) => x.role === MenuItemRoleEnum.menuitemradio, html `
						<div part="input-container" class="input-container">
							<span part="radio" class="radio">
								<slot name="radio-indicator">
									<span part="radio-indicator" class="radio-indicator"></span>
								</slot>
							</span>
						</div>
					`)}
				${startSlotTemplate()}

				<span class="content" part="content">
					${when((x) => x.hasLinkOrRouterLink && x.url, html `<a
							href="${(x) => x.url}"
							tabindex="-1"
							target="${(x) => { var _a; return (_a = x.target) !== null && _a !== void 0 ? _a : '_self'; }}"
							@click="${(x, c) => x.handleAnchorClick(c.event)}"
							${ref('anchorElement')}
						>
							<slot></slot>
						</a>`, html `<slot></slot>`)}
				</span>

				${endSlotTemplate()}
				${when((x) => x.hasSubmenu, html `
						<div
							part="expand-collapse-glyph-container"
							class="expand-collapse-glyph-container"
						>
							<span part="expand-collapse" class="expand-collapse">
								<slot name="expand-collapse-indicator">
									<saf-icon
										class="nested-indicator"
										part="nested-indicator"
										icon-name="chevron-right"
										appearance="solid"
									></saf-icon>
								</slot>
							</span>
						</div>
					`)}
				<span
					?hidden="${(x) => !x.expanded}"
					class="submenu-container"
					part="submenu-container"
					${ref('submenuContainer')}
				>
					<slot
						name="submenu"
						${slotted({
        property: 'slottedSubmenu',
        filter: elements("[role='menu']"),
    })}
					></slot>
				</span>
			</div>
		</template>
	`;
}

export { menuItemTemplate };
