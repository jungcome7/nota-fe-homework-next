import { Chat, ChatModel } from '../models/chat';
import api from './config';

type GetChatsResponse = {
  data: Chat[];
};

export function getChats() {
  return api.get<GetChatsResponse>('/chats');
}

type GetChatResponse = {
  data: Chat;
};

export function getChat(chatId: string) {
  return api.get<GetChatResponse>(`/chats/${chatId}`);
}

type GetChatModelsResponse = {
  data: ChatModel[];
};

export function getChatModels() {
  return api.get<GetChatModelsResponse>('/chat_model');
}
