import React, { Dispatch, SetStateAction } from 'react';
interface ListItemCardProps {
    id: number;
    currentText: string;
    inactiveColumns: string[];
    overlayOpen?: number;
    dragHandle: React.ReactNode;
    items: {
        id: number;
        text: string;
        alreadyInitialized: boolean;
    }[];
    isColumnValid: boolean;
    setItems: Dispatch<SetStateAction<{
        id: number;
        text: string;
        alreadyInitialized: boolean;
    }[]>>;
    setOverlayOpen: Dispatch<SetStateAction<number>>;
    setColumnAdded: Dispatch<SetStateAction<{
        newColumn: boolean;
        index: number;
    }>>;
    setColumnCounter: Dispatch<SetStateAction<number>>;
    setRemovedColumnIdx: Dispatch<SetStateAction<number>>;
    setIndexToFocus: (index: number) => void;
    canAddColumns: boolean;
    columnCounter: number;
}
export declare const ListItemCard: ({ id, currentText, inactiveColumns, overlayOpen, dragHandle, items, isColumnValid, setColumnCounter, setItems, setOverlayOpen, setColumnAdded, setRemovedColumnIdx, setIndexToFocus, canAddColumns, columnCounter, }: ListItemCardProps) => React.JSX.Element;
export {};
