import React from 'react';
interface ManageColumnsProps {
    allColumns: any[];
    onMangeDrawerClose: () => void;
    applyManagerChanges: any;
    activeColumnHeaders: string[];
}
export declare const WijmoManageColumns: ({ allColumns, onMangeDrawerClose, applyManagerChanges, activeColumnHeaders, }: ManageColumnsProps) => React.JSX.Element;
export default WijmoManageColumns;
