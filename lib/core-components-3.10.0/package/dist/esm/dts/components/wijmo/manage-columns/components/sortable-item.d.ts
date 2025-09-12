import React from 'react';
interface SortableItemProps {
    id: number;
    children: React.ReactNode;
    canDrag?: boolean;
}
export default function SortableItem({ id, children, canDrag }: SortableItemProps): string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
export {};
