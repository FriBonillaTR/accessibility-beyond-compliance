import { html, slotted, elements } from '../../@microsoft/fast-element/dist/esm/index.js';
import { SideNavStateEnum } from './side-nav.options.js';

const sideNavTemplate = () => html `
	<template
		class="${(x) => (x.fullscreen ? 'fullscreen' : void 0)}"
		tabindex="${(x) => (x.fullscreen && x.state === SideNavStateEnum.open ? '0' : void 0)}"
		?aria-hidden="${(x) => x.fullscreen && x.state === SideNavStateEnum.closed}"
		open-icon-name="${(x) => x.openIconName}"
		close-icon-name="${(x) => x.closeIconName}"
		state="${(x) => x.state}"
		role="${(x) => (x.fullscreen ? 'dialog' : 'navigation')}"
		aria-modal="${(x) => (x.fullscreen ? x.fullscreen : void 0)}"
		?no-focus-trap="${(x) => (x.noFocusTrap ? x.noFocusTrap : false)}"
		?fullscreen="${(x) => (x.fullscreen ? x.fullscreen : void 0)}"
		aria-describedby="${(x) => x.ariaDescribedby}"
		aria-labelledby="${(x) => { var _a; return x.ariaLabel ? null : ((_a = x.titleNodes) === null || _a === void 0 ? void 0 : _a.length) > 0 ? `header-title-${x.id}` : null; }}"
	>
		<header class="header" tabindex="-1" part="header" role="none">
			<div
				class="header-title"
				part="header-title"
				tabindex="-1"
				id="header-title-${(x) => x.id}"
			>
				<slot name="title" ${slotted({ property: 'titleNodes' })}></slot>
			</div>
			<saf-button
				nested-item
				class="header-action"
				part="header-action"
				id="${(x) => x.id}"
				a11y-aria-label="${(x) => x.fullscreen
    ? 'Close'
    : x.state === SideNavStateEnum.closed
        ? 'Expand Menu Links'
        : 'Collapse Menu Links'}"
				icon-only=""
				appearance="tertiary"
				@click="${(x) => (x.state === SideNavStateEnum.closed ? x.open() : x.close())}"
				><saf-icon
					size="16"
					icon-name=${(x) => x.fullscreen
    ? 'xmark-large'
    : x.state === SideNavStateEnum.closed
        ? x.openIconName
        : x.closeIconName}
				></saf-icon>
			</saf-button>
		</header>
		<menu
			class="body"
			part="body"
			role="menubar"
			aria-label="${(x) => (x.ariaLabel ? x.ariaLabel : void 0)}"
			aria-orientation="vertical"
		>
			<slot
				${slotted({ property: 'items', filter: elements('saf-menu-item') })}
				@change="${(x) => x.handleChange(x.items, 'items')}"
				@click="${(x, c) => x.handleClick(c.event)}"
				@keydown="${(x, c) => x.handleMenuKeyDown(c.event)}"
			>
			</slot>
		</menu>
	</template>
`;

export { sideNavTemplate };
