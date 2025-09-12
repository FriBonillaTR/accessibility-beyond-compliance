import React from 'react';
import type { PropsWithChildren } from 'react';
import type { DraggableSyntheticListeners, UniqueIdentifier } from '@dnd-kit/core';
import './SortableItem.css';
interface Props {
    id: UniqueIdentifier;
}
interface Context {
    attributes: Record<string, any>;
    listeners: DraggableSyntheticListeners;
    ref(node: HTMLElement | null): void;
}
export declare const SortableItemContext: React.Context<Context>;
export declare function SortableItem({ children, id }: PropsWithChildren<Props>): React.JSX.Element;
export declare const DragHandle: ({ id, columnName, isOverlay, }: {
    id: number;
    columnName: string;
    isOverlay: boolean;
}) => React.JSX.Element;
export {};
