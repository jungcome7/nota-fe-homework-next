import { VStack } from '@/styled-system/jsx';
import ModelSelectDropdown from './ModelSelectDropdown';
import { ChatItemList } from './ChatItemList';
import { ChatInputArea } from './ChatInputArea';
import { ScrollArea } from '@radix-ui/themes';
import { css } from '@/styled-system/css';

function Chat() {
  return (
    <VStack height="100vh" alignItems="start" flex={1}>
      <ModelSelectDropdown />
      <ChatItemList />
      <ChatInputArea />
    </VStack>
  );
}

export default Chat;
