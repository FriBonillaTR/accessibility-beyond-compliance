import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const descriptionListTemplate = () => html `
	<dl role="descriptionlist" ?id="${(x) => x.id}" class="${(x) => x.orientation}">
		<slot></slot>
	</dl>
`;

export { descriptionListTemplate };
