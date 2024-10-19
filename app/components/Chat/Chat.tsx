import { VStack } from '@/styled-system/jsx';
import { ChatItemList } from './ChatItemList';
import { ChatInputArea } from './ChatInputArea';
import { Suspense } from 'react';
import { ButtonSkeleton, ModelSelectDropdown } from './ModelSelectDropdown';

function Chat() {
  return (
    <VStack height="100vh" alignItems="start" flex={1}>
      <Suspense fallback={<ButtonSkeleton />}>
        <ModelSelectDropdown />
      </Suspense>
      <ChatItemList />
      <ChatInputArea />
    </VStack>
  );
}

export default Chat;
