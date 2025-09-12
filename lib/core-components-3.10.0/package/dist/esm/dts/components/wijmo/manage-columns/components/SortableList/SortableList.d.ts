import React from 'react';
import type { ReactNode } from 'react';
import type { UniqueIdentifier } from '@dnd-kit/core';
import './SortableList.css';
import { SortableItem } from './components/index.js';
interface BaseItem {
    id: UniqueIdentifier;
}
interface Props<T extends BaseItem> {
    items: T[];
    onChange(items: T[]): void;
    renderItem(item: T, isOverlay: boolean): ReactNode;
}
export declare function SortableList<T extends BaseItem>({ items, onChange, renderItem }: Props<T>): React.JSX.Element;
export declare namespace SortableList {
    var Item: typeof SortableItem;
    var DragHandle: ({ id, columnName, isOverlay, }: {
        id: number;
        columnName: string;
        isOverlay: boolean;
    }) => React.JSX.Element;
}
export {};
