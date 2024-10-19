'use client';

import { addChat, createChat, GetChatResponse } from '@/app/apis/chat';
import { inputValueAtom, selectedChatIdAtom, selectedChatModelIdAtom } from '@/app/atoms/chat';
import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Button, TextArea } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useAtom, useAtomValue } from 'jotai';
import { useRef } from 'react';

interface Props {
  onSubmit: () => void;
}

function ChatInputArea({ onSubmit }: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const queryClient = useQueryClient();

  const [selectedChatId, setSelectedChatId] = useAtom(selectedChatIdAtom);
  const selectedChatModelId = useAtomValue(selectedChatModelIdAtom);
  const [inputValue, setInputValue] = useAtom(inputValueAtom);

  const isDisabled = selectedChatModelId === null;

  const { mutate: mutateAddChat } = useMutation({
    mutationKey: ['add_chat'],
    mutationFn: addChat,
    onSuccess: (response) => {
      queryClient.setQueryData<AxiosResponse<GetChatResponse, unknown>>(
        ['chat', selectedChatId],
        () => response,
      );
    },
  });

  const { mutate: mutateCreateChat } = useMutation({
    mutationKey: ['create_chat'],
    mutationFn: createChat,
    onSuccess: (response) => {
      const responseData = response.data.data;

      const newChatId = responseData[responseData.length - 1].chat_id;

      setSelectedChatId(newChatId);

      queryClient.setQueryData(['chat', newChatId], () => {
        return {
          data: {
            data: {
              dialogues: [
                {
                  dialogue_id: 'temporary_id',
                  prompt: inputValue,
                  completion: undefined,
                },
              ],
            },
          },
        };
      });

      mutateAddChat(
        {
          chatId: responseData[responseData.length - 1].chat_id,
          prompt: inputValue,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: ['chats'],
            });
          },
        },
      );

      setInputValue('');
    },
  });

  const handleSubmit = () => {
    if (selectedChatId === null) {
      if (selectedChatModelId === null) {
        throw new Error('No chat model selected');
      }

      mutateCreateChat({ chatModelId: selectedChatModelId });
    } else {
      mutateAddChat({
        chatId: selectedChatId,
        prompt: inputValue,
      });

      queryClient.setQueryData<AxiosResponse<GetChatResponse, unknown>>(
        ['chat', selectedChatId],
        (prevData) => {
          if (prevData === undefined) {
            return prevData;
          }

          return {
            ...prevData,
            data: {
              ...prevData.data,
              data: {
                ...prevData.data.data,
                dialogues: [
                  ...prevData.data.data.dialogues,
                  {
                    dialogue_id: 'temporary_id',
                    prompt: inputValue,
                    completion: undefined,
                  },
                ],
              },
            },
          };
        },
      );

      setInputValue('');
    }

    onSubmit();
    textAreaRef.current?.focus();
  };

  return (
    <HStack width="800px" position="relative" mb="20px" alignSelf="center">
      <TextArea
        ref={textAreaRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.metaKey && e.key === 'Enter') {
            handleSubmit();
          }
        }}
        className={css({ width: '100%', position: 'relative', pr: '60px', py: '6px' })}
        disabled={isDisabled}
      />
      <Button
        size="2"
        variant="outline"
        className={css({
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        })}
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        제출
      </Button>
    </HStack>
  );
}

export default ChatInputArea;
