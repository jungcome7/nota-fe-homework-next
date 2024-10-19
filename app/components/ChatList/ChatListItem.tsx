import { Chat } from '@/app/models/chat';
import { css } from '@/styled-system/css';
import { VStack } from '@/styled-system/jsx';
import { Text } from '@radix-ui/themes';

interface Props {
  chat: Chat;
  isSelected?: boolean;
}

function ChatListItem({ chat, isSelected = false }: Props) {
  const firstPrompt = chat.dialogues[0].prompt;

  return (
    <VStack
      width="100%"
      alignItems="start"
      bgColor={isSelected ? 'gray.200' : undefined}
      _hover={{ bgColor: 'gray.200' }}
      borderRadius="6px"
      py="6px"
      px="10px"
      cursor="pointer"
      gap="2px"
    >
      <Text
        size="2"
        className={css({
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '240px',
        })}
      >
        {firstPrompt}
      </Text>
      <Text size="1" className={css({ alignSelf: 'end', color: 'gray.500' })}>
        {chat.chat_model_name}
      </Text>
    </VStack>
  );
}

export default ChatListItem;
