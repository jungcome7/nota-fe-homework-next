import { selectedChatIdAtom } from '@/app/atoms/chat';
import { Chat } from '@/app/models/chat';
import { css } from '@/styled-system/css';
import { VStack } from '@/styled-system/jsx';
import { Text } from '@radix-ui/themes';
import { useAtom } from 'jotai';

interface Props {
  chat: Chat;
}

function ChatListItem({ chat }: Props) {
  const firstPrompt = chat.dialogues[0].prompt;

  const [selectedChatId, setSelectedChatId] = useAtom(selectedChatIdAtom);

  const isSelected = selectedChatId === chat.chat_id;

  const handleClick = () => {
    setSelectedChatId(chat.chat_id);
  };

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
      onClick={handleClick}
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
