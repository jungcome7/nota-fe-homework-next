'use client';

import { getChat, getChatModels } from '@/app/apis/chat';
import { selectedChatIdAtom } from '@/app/atoms/chat';
import { css } from '@/styled-system/css';
import { Button, ChevronDownIcon, DropdownMenu } from '@radix-ui/themes';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useState } from 'react';

function ModelSelectDropdown() {
  const { data: chatModels } = useSuspenseQuery({
    queryKey: ['chat_models'],
    queryFn: getChatModels,
    select: (response) => response.data.data,
  });

  const [selectedChatId, setSelectedChatId] = useAtom(selectedChatIdAtom);

  const { data: chat } = useQuery({
    queryKey: ['chat', selectedChatId],
    queryFn: async () => {
      if (selectedChatId === null) {
        throw new Error('No chat selected');
      }

      return await getChat(selectedChatId);
    },
    enabled: selectedChatId !== null,
    select: (response) => response.data.data,
  });

  const [selectedChatModelName, setSelectedChatModelName] = useState(
    chat?.chat_model_name ?? chatModels[0].chat_model_name,
  );

  const handleSelect = (chatModelName: string) => {
    setSelectedChatModelName(chatModelName);

    setSelectedChatId(null);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline" className={css({ cursor: 'pointer', margin: '20px' })}>
          {selectedChatModelName}
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          {chatModels.map((chatModel) => (
            <DropdownMenu.Item
              key={chatModel.chat_model_id}
              className={css({ cursor: 'pointer' })}
              onSelect={() => handleSelect(chatModel.chat_model_name)}
            >
              {chatModel.chat_model_name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default ModelSelectDropdown;
