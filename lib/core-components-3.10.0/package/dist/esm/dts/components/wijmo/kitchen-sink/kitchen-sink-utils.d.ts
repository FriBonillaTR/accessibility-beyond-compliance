import { DataMap, FlexGrid as FlexGridInstance, GridPanel } from '@grapecity/wijmo.grid';
import { CellTemplateRender, ICellTemplateContext } from '@grapecity/wijmo.react.grid';
import React from 'react';
import { ComponentDensity } from '../../../utils/index.js';
export interface Model {
    id: number;
    country: string;
    select: 'Yes' | 'No' | 'Maybe';
    status: 'Active' | 'Inactive';
}
export declare const selectDataMap: DataMap<number, "Yes" | "No" | "Maybe", any>;
export declare function getData(): Model[];
export declare const linkCellTemplate: import("@grapecity/wijmo.grid").ICellTemplateFunction;
export declare const formatStatusCell: (grid: FlexGridInstance, rowIdx: number, cell: HTMLElement) => void;
export declare const formatLinkCell: (cell: HTMLElement) => void;
export declare const formatCheckboxCell: (cell: HTMLElement) => void;
export declare const itemFormatter: (panel: GridPanel, rowIdx: number, colIdx: number, cell: HTMLElement) => void;
export declare const ColumnHeader: CellTemplateRender;
export type KitchenSinkStoryArgs = {
    alternatingRows: boolean;
    density: ComponentDensity;
    spreadsheet: boolean;
};
export declare function saffronizeFilterIcon(grid: FlexGridInstance): void;
export declare const IdCellTitle: ({ ctx }: {
    ctx: ICellTemplateContext;
}) => React.JSX.Element;
export declare const IdCell: ({ values }: {
    values: any;
}) => React.JSX.Element;
export declare const dataArrayString: string;
export declare const modelString = "export interface Model {\n\tid: number;\n\tcountry: string;\n\tselect: 'Yes' | 'No' | 'Maybe';\n\tstatus: 'Active' | 'Inactive';\n}";
export declare const selectAllEnumString = "\nenum SELECT_ALL {\n  ALL_SELECTED = \"ALL_SELECTED\",\n  NONE_SELECTED = \"NONE_SELECTED\",\n  SOME_SELECTED = \"SOME_SELECTED\",\n}\n";
export declare const selectDataMapString = "selectDataMap = new DataMap<number, Model['select']>(\n\t[\n\t\t{ id: 0, name: 'Yes' },\n\t\t{ id: 1, name: 'No' },\n\t\t{ id: 2, name: 'Maybe' },\n\t],\n\t'id',\n\t'name'\n);";
export declare const getDataFunctionString = "function getData(): Model[] {\n  return data.map((country, i) => ({\n    id: i + 1,\n    country,\n    select: Math.random() > 0.33 ? \"Yes\" : Math.random() > 0.66 ? \"No\" : \"Maybe\",\n    checkbox: Math.random() > 0.5,\n    status: Math.random() > 0.5 ? \"Active\" : \"Inactive\",\n\tlinkText: `Visit ${country}`,\n  }));\n}";
export declare const linkCellTemplateString = "CellMaker.makeLink({\n\ttext: '${item.linkText}',\n\thref: 'https://www.google.com/search?q=${item.country}',\n\tlabel: 'Link: visit ${item.country}',\n\tattributes: {\n\t\trel: 'noopener noreferrer',\n\t\ttabIndex: -1,\n\t},\n\t// no need for click handler, the link navigates automatically\n});";
export declare const formatStatusCellFunctionString = "(grid: FlexGridInstance, rowIdx: number, cell: HTMLElement) => {\n  const status = grid.rows[rowIdx].dataItem.status;\n  const active = status === \"Active\";\n  cell.innerHTML = \"\";\n  const statusDot = document.createElement(\"div\");\n  statusDot.style.alignItems = \"center\";\n  statusDot.style.display = \"flex\";\n  statusDot.style.gap = \"8px\";\n  cell.appendChild(statusDot);\n  const dot = document.createElement(\"div\");\n  dot.style.backgroundColor = active ? \"#eaffe5\" : \"#ffeded\";\n  dot.style.borderColor = active ? \"#387c2b\" : \"#dc0a0a\";\n  dot.style.borderRadius = \"50%\";\n  dot.style.borderStyle = \"solid\";\n  dot.style.borderWidth = \"1px\";\n  dot.style.height = \"12px\";\n  dot.style.width = \"12px\";\n  statusDot.appendChild(dot);\n  const text = document.createElement(\"span\");\n  text.textContent = status;\n  statusDot.appendChild(text);\n}";
export declare const formatLinkCellFunctionString = "(cell: HTMLElement) => {\n\t// activate link on enter\n  cell.addEventListener(\"keydown\", (event) => {\n    if (event.key === \"Enter\") {\n      const link = cell.querySelector(\"a\");\n      link?.click();\n      event.stopImmediatePropagation();\n    }\n  });\n}";
export declare const formatCheckboxCellFunctionString = "(cell: HTMLElement) => {\n\t// add SR only to communicate the role and state of the checkbox\n  const checkbox = cell.querySelector(\"input\");\n  if (!checkbox)\n    return;\n  const srOnly = document.createElement(\"saf-sr-only\");\n  srOnly.textContent = \"Checkbox, \";\n  srOnly.textContent += checkbox.checked ? \"Checked\" : \"Unchecked\";\n  checkbox.parentElement?.appendChild(srOnly);\n}";
export declare const ColumnHeaderString = "export const ColumnHeader: CellTemplateRender = (ctx) => {\n\tconst isCompact = document.querySelector('.saf-flexgrid--compact') !== null;\n\n\treturn (\n\t\t<>\n\t\t\t<span>{ctx.col.header}</span>\n\t\t\t<span\n\t\t\t\tstyle={{\n\t\t\t\t\talignContent: 'center',\n\t\t\t\t\tdisplay: 'inline-grid',\n\t\t\t\t\theight: isCompact ? '24px' : '32px',\n\t\t\t\t\tmarginLeft: '16px',\n\t\t\t\t\tmarginRight: '4px',\n\t\t\t\t\ttextAlign: 'center',\n\t\t\t\t\twidth: isCompact ? '24px' : '32px',\n\t\t\t\t}}\n\t\t\t>\n\t\t\t\t<SafIcon\n\t\t\t\t\ticonName={\n\t\t\t\t\t\tctx.col.currentSort === '+'\n\t\t\t\t\t\t\t? 'arrow-up'\n\t\t\t\t\t\t\t: ctx.col.currentSort === '-'\n\t\t\t\t\t\t\t? 'arrow-down'\n\t\t\t\t\t\t\t: 'arrow-up-arrow-down'\n\t\t\t\t\t}\n\t\t\t\t\tappearance=\"light\"\n\t\t\t\t/>\n\t\t\t</span>\n\t\t</>\n\t);\n};";
export declare const saffronizeFilterIconFunctionString = "function saffronizeFilterIcon(grid: FlexGridInstance) {\n  const panel = grid.columnHeaders;\n\tconst columns = panel.columns;\n\n\tcolumns.forEach((column) => {\n\t\tconst cell = panel.getCellElement(0, column.index);\n\t\tif (!cell) return;\n\t\tconst filterButton = cell.querySelector<HTMLButtonElement>(\n\t\t\t'.wj-btn.wj-btn-glyph.wj-elem-filter',\n\t\t);\n\t\tcell.addEventListener('keydown', (e) => {\n\t\t\tif (e.key === 'Tab') {\n\t\t\t\te.stopImmediatePropagation();\n\t\t\t} else if (e.key === 'Enter' && e.altKey && filterButton) {\n\t\t\t\te.preventDefault();\n\t\t\t\tfilterButton.click();\n\t\t\t\tsetTimeout(() => {\n\t\t\t\t\tconst filterDialog = document.querySelector('.wj-form-control');\n\t\t\t\t\tconst firstFocusableElement = filterDialog?.querySelector(\n\t\t\t\t\t\t'input, button, select, textarea',\n\t\t\t\t\t);\n\t\t\t\t\tif (firstFocusableElement) {\n\t\t\t\t\t\t(firstFocusableElement as HTMLElement).focus();\n\t\t\t\t\t}\n\t\t\t\t}, 100);\n\t\t\t} else if (e.key === 'Enter' && filterButton) {\n\t\t\t\tcell.click();\n\t\t\t\te.stopImmediatePropagation();\n\t\t\t}\n\t\t});\n\n\t\tif (filterButton) {\n\t\t\tcell.addEventListener('focusin', () => {\n\t\t\t\tfilterButton.tabIndex = 0;\n\t\t\t});\n\t\t\tcell.addEventListener('focusout', () => {\n\t\t\t\tfilterButton.tabIndex = -1;\n\t\t\t});\n\t\t\tfilterButton.addEventListener('keydown', (e) => {\n\t\t\t\tif (e.key === 'Enter') {\n\t\t\t\t\tfilterButton.click();\n\t\t\t\t\te.stopImmediatePropagation();\n\t\t\t\t}\n\t\t\t});\n\t\t\t// by appending the button to its parent, it's moved in the dom order to be the last child\n\t\t\tfilterButton.parentElement!.appendChild(filterButton);\n\t\t}\n\t});\n\n\tconst dataPanel = grid.cells;\n\tconst dataColumns = dataPanel.columns;\n\n\tdataColumns.forEach((column) => {\n\t\tconst cell = dataPanel.getCellElement(0, column.index);\n\t\tif (!cell) return;\n\n\t\tif (cell) {\n\t\t\tcell.addEventListener('focusout', () => {\n\t\t\t\tcell.tabIndex = -1;\n\t\t\t});\n\t\t\tcell.addEventListener('keydown', (e) => {\n\t\t\t\tif (e.key === 'Tab') {\n\t\t\t\t\tsetTimeout(() => {\n\t\t\t\t\t\tcell.tabIndex = 0;\n\t\t\t\t\t}, 0);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t});\n}";
