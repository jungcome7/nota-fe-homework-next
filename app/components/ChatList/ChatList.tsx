'use client';

import { VStack } from '@/styled-system/jsx';
import ChatListItem from './ChatListItem';
import { ScrollArea } from '@radix-ui/themes';
import { css } from '@/styled-system/css';
import CreateChatButton from './CreateChatButton';
import { useQuery } from '@tanstack/react-query';
import { getChats } from '@/app/apis/chat';

function ChatList() {
  const { data: chats = [] } = useQuery({
    queryKey: ['chats'],
    queryFn: getChats,
    select: (response) => response.data.data,
  });

  console.log({ chats });

  return (
    <ScrollArea
      scrollbars="vertical"
      type="scroll"
      className={css({
        width: '300px',
        height: '100vh',
      })}
    >
      <VStack width="300px" height="100%" padding="20px" bgColor="gray.50">
        <CreateChatButton />
        {chats.map((chat) => (
          <ChatListItem key={chat.chat_id} isSelected={false} chat={chat} />
        ))}
      </VStack>
    </ScrollArea>
  );
}

export default ChatList;
