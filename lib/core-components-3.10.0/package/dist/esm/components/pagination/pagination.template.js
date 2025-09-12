import { html, when, repeat } from '../../@microsoft/fast-element/dist/esm/index.js';

const paginationTemplate = () => html `
	<template role="navigation" aria-label="${(x) => x.ariaLabel}">
		<div class="control" part="control">
			<div class="content" part="content">
				<div
					role="group"
					class="all-page-controls"
					part="all-page-controls"
					aria-labelledBy="flipper-label"
				>
					<div class="flipper-content" part="flipper-content">
						<div id="flipper-label" class="flipper-label" part="flipper-label">
							${(x) => x.pageResultsLabel}
							<span class="u-emphasis" part="u-emphasis"
								>${(x) => x.currentPageIndex}</span
							>
							${(x) => x.pageOfLabel}
							<span class="u-emphasis" part="u-emphasis">${(x) => x.totalPages}</span>
						</div>
						<div class="flipper-controls" part="flipper-controls">
							<saf-button
								part="flipper-control-previous"
								class="flipper-control-previous"
								appearance="secondary"
								@click="${(x) => x._previous(x.currentPageIndex)}"
								?disabled="${(x) => Boolean(x.currentPageIndex === 1 || x.totalPages === 1)}"
							>
								<saf-icon
									slot="start"
									icon-name="chevron-left"
									appearance="solid"
									size="12"
								></saf-icon>
								${(x) => x.previousButton}
							</saf-button>
							<saf-button
								part="flipper-control-next"
								class="flipper-control-next"
								appearance="secondary"
								@click="${(x) => x._next(x.currentPageIndex)}"
								?disabled="${(x) => Boolean(x.currentPageIndex === x.totalPages || x.totalPages <= 1)}"
							>
								${(x) => x.nextButton}
								<saf-icon
									slot="end"
									icon-name="chevron-right"
									appearance="solid"
									size="12"
								></saf-icon>
							</saf-button>
							<saf-divider
								part="flipper-divider"
								class="flipper-divider"
								orientation="${(x) => x.dividerOrientation ? 'vertical' : 'horizontal'}"
								role="presentation"
							></saf-divider>
						</div>
					</div>
					<div class="page-controls" part="page-controls">
						<saf-number-field
							part="page-control"
							class="page-control"
							label="${(x) => x.pageInputLabel}"
							min="1"
							max="${(x) => x.totalPages}"
							@change="${(_, c) => {
    c.event.stopPropagation();
}}"
						>
						</saf-number-field>
						<saf-button
							part="page-control-button"
							class="page-control-button"
							appearance="secondary"
							@click="${(x) => {
    x.buttonPageValue();
}}"
						>
							${(x) => x.pageButton}
						</saf-button>
					</div>
				</div>
				<div class="items-content-container" part="items-content-container">
					<p id="items-content-${(x) => x.id}" class="items-content" part="items-content">
						${when((x) => x.totalItemCount, html `
								(${(x) => x.resultsLabel}
								<span class="u-emphasis" part="u-emphasis"
									>${(x) => x.startIndex}</span
								>
								${(x) => x.toLabel}
								<span class="u-emphasis" part="u-emphasis"
									>${(x) => x.endIndex}</span
								>
								${(x) => x.pageOfLabel}
								<span class="u-emphasis" part="u-emphasis"
									>${(x) => x.totalItemCount}</span
								>
								${(x) => x.itemsLabel})
							`)}
						${when((x) => !x.totalItemCount, html `
								(${(x) => x.resultsLabel}
								<span class="u-emphasis" part="u-emphasis">0</span> ${(x) => x.itemsLabel})
							`)}
					</p>
					<div class="items-controls" part="items-controls">
						<saf-select
							part="item-control"
							class="item-control"
							aria-describedby="items-content-${(x) => x.id}"
							label="${(x) => x.itemsInputLabel}"
							:value="${(x) => String(x.itemsPerPage)}"
							@change="${(x, c) => {
    const target = c.event.target;
    const value = target.value;
    target.value = String(x.itemsPerPage);
    x.updateFormValue(value);
}}"
						>
							${repeat((x) => x.itemsArray, html `<saf-option value=${(x) => x}>
									${(x) => x}
								</saf-option>`)}
						</saf-select>
					</div>
				</div>
			</div>
		</div>
	</template>
`;

export { paginationTemplate };
