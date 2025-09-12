import type { AugmentClassEvents } from '../../utils/types.js';
import { Avatar } from './avatar.js';
declare const SafAvatar: () => typeof Avatar;
export default SafAvatar;
export type SafAvatarInstance = AugmentClassEvents<Avatar>;
