import { DataMap, FlexGrid as FlexGridInstance, GridPanel } from '@grapecity/wijmo.grid';
import { CellTemplateRender } from '@grapecity/wijmo.react.grid';
import { ComponentDensity } from '../../../utils/index.js';
export type ManageColumnsStoryArgs = {
    alternatingRows: boolean;
    density: ComponentDensity;
    spreadsheet: boolean;
};
export declare const dataArrayString: string;
export interface Model {
    id: number;
    country: string;
    select: 'Yes' | 'No' | 'Maybe';
    status: 'Active' | 'Inactive';
}
export declare function getData(): Model[];
export declare const selectDataMap: DataMap<number, "Yes" | "No" | "Maybe", any>;
export declare enum SELECT_ALL {
    ALL_SELECTED = "ALL_SELECTED",
    NONE_SELECTED = "NONE_SELECTED",
    SOME_SELECTED = "SOME_SELECTED"
}
export declare const ColumnHeader: CellTemplateRender;
export declare const saffronizeFilterIcon: (grid: FlexGridInstance) => void;
export declare const itemFormatter: (panel: GridPanel, rowIdx: number, colIdx: number, cell: HTMLElement) => void;
export declare const linkCellTemplate: import("@grapecity/wijmo.grid").ICellTemplateFunction;
export declare const areNewColumnsValuesOk: (newValues: string[], availableValues: string[]) => boolean;
