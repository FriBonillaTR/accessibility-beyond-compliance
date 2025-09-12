import { WorkspacePattern } from './workspace-pattern.js';
import type { AugmentClassEvents } from '../../utils/types.js';
declare const SafWorkspacePattern: () => typeof WorkspacePattern;
export default SafWorkspacePattern;
export type SafWorkspacePatternInstance = AugmentClassEvents<WorkspacePattern>;
