import { Chat, ChatModel } from '../models/chat';
import api from './config';

export type GetChatsResponse = {
  data: Chat[];
};

export function getChats() {
  return api.get<GetChatsResponse>('/chats');
}

export type GetChatResponse = {
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

type AddChatRequest = {
  chatId: string;
  prompt: string;
};

type AddChatResponse = {
  data: Chat;
};

export function addChat({ chatId, prompt }: AddChatRequest) {
  return api.post<AddChatResponse>(`/chats/${chatId}/dialogues`, { prompt });
}

type CreateChatRequest = {
  chatModelId: string;
};

type CreateChatResponse = {
  data: Chat[];
};

export function createChat({ chatModelId }: CreateChatRequest) {
  return api.post<CreateChatResponse>('/chats', { chat_model_id: chatModelId });
}
