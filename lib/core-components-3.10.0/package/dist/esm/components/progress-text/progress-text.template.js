import { html } from '../../@microsoft/fast-element/dist/esm/index.js';

const progressTextTemplate = () => html ` <template>
	<div class="control" part="control">
		<slot name="start"></slot>
		<div class="content" part="content">
			<slot>${(x) => x.processingContent}</slot>
		</div>
		<slot name="end">
			<div class="dots" part="dots"></div>
		</slot>
	</div>
</template>`;

export { progressTextTemplate };
