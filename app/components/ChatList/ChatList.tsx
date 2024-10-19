import { HStack, VStack } from '@/styled-system/jsx';
import ChatListItem from './ChatListItem';
import { ScrollArea } from '@radix-ui/themes';
import { css } from '@/styled-system/css';
import CreateChatButton from './CreateChatButton';

function ChatList() {
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
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <ChatListItem key={i} isSelected={i === 2} />
          ))}
      </VStack>
    </ScrollArea>
  );
}

export default ChatList;
