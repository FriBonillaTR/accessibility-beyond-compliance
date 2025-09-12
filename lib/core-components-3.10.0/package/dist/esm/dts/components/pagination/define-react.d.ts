import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safPaginationConfig, SafPaginationEventDetails, type SafPaginationInstance } from './define.js';
export type SafPaginationProps = SafReactComponentProps<SafPaginationInstance, typeof safPaginationConfig, SafPaginationEventDetails>;
declare const SafReactPagination: ComponentType<SafPaginationProps>;
export default SafReactPagination;
