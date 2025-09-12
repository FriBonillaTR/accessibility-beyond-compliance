import { html } from '../../@microsoft/fast-element/dist/esm/index.js';
import { anchorTemplate } from '../anchor/anchor.template.js';

const skipLinkTemplate = () => {
    return html ` <template> ${anchorTemplate().inline()} </template> `;
};

export { skipLinkTemplate };
