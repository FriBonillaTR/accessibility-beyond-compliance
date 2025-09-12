import { html } from '../../@microsoft/fast-element/dist/esm/index.js';
import { startSlotTemplate } from '../../utils/start-end-template.js';

function activityTemplate() {
    return html `
		<div class="root" part="root">
			<div class="header" part="header">
				<div class="header-icon" part="header-icon">${startSlotTemplate()}</div>
				<div class="header-text" part="header-text" id=${(x) => x.headerId}>
					<slot name="title"></slot>
				</div>
			</div>
			<div class="content" part="content">
				<div class="vertical-line" part="vertical-line"></div>
				<div class="notes" part="notes">
					<div
						class="notes-list"
						part="notes-list"
						role="list"
						aria-labelledby=${(x) => `${x.headerId} ${x.timeId}`}
					>
						<slot></slot>
					</div>
					<span class="time" part="time" id=${(x) => x.timeId}> ${(x) => x.time} </span>
				</div>
			</div>
		</div>
	`;
}

export { activityTemplate };
