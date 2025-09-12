import React from 'react';
interface SortableContainerProps {
    id: string;
    children: React.ReactNode;
    items: any[];
}
export declare const SortableContainer: ({ children, id, items }: SortableContainerProps) => React.JSX.Element;
export {};
