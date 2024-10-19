'use client';

import { VStack } from '@/styled-system/jsx';
import { ChatItemList } from './ChatItemList';
import { ChatInputArea } from './ChatInputArea';
import { Suspense, useRef } from 'react';
import { ButtonSkeleton, ModelSelectDropdown } from './ModelSelectDropdown';

function Chat() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleScrollToBottom = () => {
    setTimeout(() => {
      scrollAreaRef.current?.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 0);
  };

  return (
    <VStack height="100vh" alignItems="start" flex={1}>
      <Suspense fallback={<ButtonSkeleton />}>
        <ModelSelectDropdown />
      </Suspense>
      <ChatItemList ref={scrollAreaRef} onScrollToBottom={handleScrollToBottom} />
      <ChatInputArea onSubmit={handleScrollToBottom} />
    </VStack>
  );
}

export default Chat;
