import { html, when } from '../../@microsoft/fast-element/dist/esm/index.js';
import { instructionalTextTemplate } from '../label/instructional-text.template.js';

const fileUploadTemplate = () => html `
	<template
		id="${(x) => x.id}"
		instructional-text="${(x) => x.instructionalText}"
		file-types-text="${(x) => x.fileTypesText}"
		file-name="${(x) => x.fileName}"
		status="${(x) => x.status}"
	>
		<p class="title" part="title"><slot name="title"></slot></p>

		${when((x) => x.fileTypesText, html `<p class="title-label-copy" part="title-label-copy">${(x) => x.fileTypesText}</p>`)}

		<div class="upload-space" part="upload-space">
			${when((x) => x.instructionalText, html `${instructionalTextTemplate}`)}

			<input class="" type="file" id="file" hidden />
			<saf-button id="upload-file-btn" variant="primary"
				><slot name="add-file-btn-label"></slot
			></saf-button>
		</div>

		<p class="document-name" part="document-name">${(x) => x.fileName}</p>

		<saf-progress
			id="progress-bar"
			min="0"
			max="100"
			value="${(x) => x.progressValue}"
			aria-valuenow="${(x) => x.progressValue}"
			aria-valuemin="0"
			aria-valuemax="100"
			aria-label="progress"
			indeterminate="false"
			role="progressbar"
			aria-labelledby="label-progress-bar"
		>
		</saf-progress>

		${when((x) => x.status && x.validationMessage, html `<saf-status
				id="status-${(x) => x.id}"
				message="${(x) => x.validationMessage}"
				status="${(x) => x.status}"
			></saf-status>`)}
	</template>
`;

export { fileUploadTemplate };
