import { ComponentType } from 'react';
import { SafReactComponentProps } from '../../../react-components/types.js';
import { SafFacetItemEventDetails } from './define.js';
import { safFacetItemConfig, type SafFacetItemInstance } from './define.js';
export type SafFacetItemProps = SafReactComponentProps<SafFacetItemInstance, typeof safFacetItemConfig, SafFacetItemEventDetails>;
declare const SafReactFacetItem: ComponentType<SafFacetItemProps>;
export default SafReactFacetItem;
