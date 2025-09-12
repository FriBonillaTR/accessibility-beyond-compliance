import type { AugmentClassEvents } from '../../../utils/types.js';
import { ActivityNote } from './activity-note.js';
declare const SafActivityNote: () => typeof ActivityNote;
export default SafActivityNote;
export type SafActivityNoteInstance = AugmentClassEvents<ActivityNote>;
