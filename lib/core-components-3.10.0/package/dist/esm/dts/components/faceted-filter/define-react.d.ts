import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../react-components/types.js';
import { safFacetedFilterConfig, type SafFacetedFilterInstance } from './define.js';
export type SafFacetedFilterProps = SafReactComponentProps<SafFacetedFilterInstance, typeof safFacetedFilterConfig>;
declare const SafReactFacetedFilter: ComponentType<SafFacetedFilterProps>;
export default SafReactFacetedFilter;
