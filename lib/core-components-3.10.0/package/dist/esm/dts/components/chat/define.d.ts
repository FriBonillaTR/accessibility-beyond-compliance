import type { AugmentClassEvents } from '../../utils/types.js';
import { Chat } from './chat.js';
declare const SafChat: () => typeof Chat;
export default SafChat;
export type SafChatInstance = AugmentClassEvents<Chat>;
