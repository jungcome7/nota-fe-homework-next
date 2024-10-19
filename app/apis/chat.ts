import { Chat } from '../models/chat';
import api from './config';

type GetChatsResponse = {
  data: Chat[];
};

export function getChats() {
  return api.get<GetChatsResponse>('/chats');
}
