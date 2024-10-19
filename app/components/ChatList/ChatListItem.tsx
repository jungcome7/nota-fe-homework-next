import { css } from '@/styled-system/css';
import { VStack } from '@/styled-system/jsx';
import { Text } from '@radix-ui/themes';

interface Props {
  isSelected?: boolean;
}

function ChatListItem({ isSelected = false }: Props) {
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
        질문이 길 땐 어떻게 나와야 할까요? 말줄임 표시가 되면 좋겠어요.
      </Text>
      <Text size="1" className={css({ alignSelf: 'end', color: 'gray.500' })}>
        모델명
      </Text>
    </VStack>
  );
}

export default ChatListItem;
