import { html } from '../../@microsoft/fast-element/dist/esm/index.js';
import { FlipperDirectionEnum } from './flipper.options.js';

const flipperTemplate = () => html `
	<template>
		<saf-button
			appearance="tertiary"
			icon-only
			slot="${(x) => x.direction}"
			?disabled="${(x) => x.disabled}"
		>
			<saf-icon
				icon-name="${(x) => x.direction === FlipperDirectionEnum.next ? 'chevron-right' : 'chevron-left'}"
				appearance="solid"
			></saf-icon>
			<saf-sr-only>${(x) => FlipperDirectionEnum[x.direction]}</saf-sr-only>
			<slot></slot>
		</saf-button>
	</template>
`;

export { flipperTemplate };
