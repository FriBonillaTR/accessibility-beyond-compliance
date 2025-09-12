import type { AugmentClassEvents } from '../../utils/types.js';
import { EmptyState } from './empty-state.js';
declare const SafEmptyState: () => typeof EmptyState;
export default SafEmptyState;
export type SafEmptyStateInstance = AugmentClassEvents<EmptyState>;
