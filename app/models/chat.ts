export interface Dialogue {
  dialogue_id: string;
  prompt: string;
  completion: string | undefined;
}

export interface Chat {
  chat_model_id: string;
  chat_model_name: string;
  chat_id: string;
  dialogues: Dialogue[];
}

export interface ChatModel {
  chat_model_id: string;
  chat_model_name: string;
}
