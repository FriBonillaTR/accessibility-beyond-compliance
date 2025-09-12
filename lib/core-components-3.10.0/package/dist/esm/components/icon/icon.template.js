import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { IconRoleEnum, appearanceClassMap } from './icon.options.js';

const iconTemplate = () => html `
	<template
		aria-labelledby=${(x) => x.ariaLabelledBy}
		aria-label=${(x) => x.ariaLabel}
		aria-hidden=${(x) => x.presentation}
		appearance=${(x) => x.appearance}
		icon-name=${(x) => x.iconName}
		id=${(x) => x.id}
		role=${(x) => (x.presentation ? IconRoleEnum.presentation : IconRoleEnum.img)}
	>
		${when((x) => x.iconName && x.appearance, html `<i
				part="fa-icon"
				class="${(x) => `${appearanceClassMap[x.appearance]} fa-${x.iconName}`}"
			></i>`)}
	</template>
`;

export { iconTemplate };
