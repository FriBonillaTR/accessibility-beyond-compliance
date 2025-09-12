import { SafComboboxProps } from '../../../combobox/define-react.js';
import React from 'react';
interface ComboboxWrapperProps extends Omit<SafComboboxProps, 'value' | 'onChange'> {
    children: React.ReactNode;
    stateValue: string;
    editCurrentName: (newValue: string) => void;
}
export declare const ComboboxWrapper: ({ children, stateValue, editCurrentName, ...props }: ComboboxWrapperProps) => React.JSX.Element;
export {};
