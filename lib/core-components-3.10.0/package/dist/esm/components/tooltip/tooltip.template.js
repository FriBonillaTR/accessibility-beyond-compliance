import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

function tooltipTemplate() {
    return html ` <template role="tooltip" ?visible="${(x) => x.visible}">
		<saf-click-away-listener
			@click-away="${(x, c) => x.handleOutsideClick(c.event)}"
		>
			<slot></slot>
		</saf-click-away-listener>
	</template>`;
}

export { tooltipTemplate };
