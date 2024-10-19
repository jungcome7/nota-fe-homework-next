import { randomUUID } from 'crypto';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CHATS: Record<string, any>[] = [
  {
    chat_model_id: 'test-model-002',
    chat_model_name: 'Nota_Model_02',
    chat_id: randomUUID(),
    dialogues: [
      {
        dialogue_id: randomUUID(),
        prompt: 'Hello world!',
        completion: 'Hello!',
      },
      {
        dialogue_id: randomUUID(),
        prompt: 'Nota Frontend Homework Test',
        completion: 'Nota Frontend Homework',
      },
    ],
  },
  {
    chat_model_id: 'test-model-001',
    chat_model_name: 'Nota_Model_01',
    chat_id: randomUUID(),
    dialogues: [
      {
        dialogue_id: randomUUID(),
        prompt: '초기 데이터 입니다.',
        completion: '초기 데이터 입니다.',
      },
    ],
  },
  {
    chat_model_id: 'test-model-003',
    chat_model_name: 'Nota_Model_03',
    chat_id: randomUUID(),
    dialogues: [
      {
        dialogue_id: randomUUID(),
        prompt: '초기 데이터 입니다.',
        completion: '초기 데이터 입니다.',
      },
    ],
  },
];

export const CHAT_MODELS = [
  {
    chat_model_id: 'test-model-001',
    chat_model_name: 'Nota_Model_01',
  },
  {
    chat_model_id: 'test-model-002',
    chat_model_name: 'Nota_Model_02',
  },
  {
    chat_model_id: 'test-model-003',
    chat_model_name: 'Nota_Model_03',
  },
];
