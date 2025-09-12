import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';

const avatarTemplate = () => html `
	${when((x) => (x.appearance === 'image' && x.imgSrc) || (x.appearance === 'image-light' && x.imgSrc), html `<img
			class="image"
			part="image"
			aria-hidden="${(x) => x.presentation}"
			src="${(x) => x.imgSrc}"
			alt="${(x) => x.label}"
		/>`)}
	${when((x) => x.appearance === 'icon', html `<saf-icon
			class="icon"
			part="icon"
			icon-name="user"
			appearance="solid"
			presentation="${(x) => x.presentation}"
			aria-label="${(x) => x.label}"
		></saf-icon>`)}
	${when((x) => x.appearance === 'icon-light', html `<saf-icon
			class="icon"
			part="icon"
			icon-name="user"
			presentation="${(x) => x.presentation}"
			aria-label="${(x) => x.label}"
		></saf-icon>`)}
	${when((x) => x.appearance !== 'image' &&
    x.appearance !== 'image-light' &&
    x.appearance !== 'icon-light' &&
    x.appearance !== 'icon', html `<span class="content" part="content">
			<saf-sr-only>${(x) => x.label}</saf-sr-only>
			<span aria-hidden="true"><slot></slot></span>
		</span>`)}
`;

export { avatarTemplate };
