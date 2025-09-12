import type { AugmentClassEvents } from '../../../utils/types.js';
import { CommentField } from './comment-field.js';
declare const SafCommentField: () => typeof CommentField;
export default SafCommentField;
export type SafCommentFieldInstance = AugmentClassEvents<CommentField>;
