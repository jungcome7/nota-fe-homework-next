import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Avatar, Text } from '@radix-ui/themes';

interface Props {
  message: string;
}

function PromptChatItem({ message }: Props) {
  return (
    <HStack alignSelf="end">
      <Text
        className={css({
          bgColor: 'gray.100',
          py: '8px',
          px: '12px',
          borderRadius: '8px',
          whiteSpace: 'pre-wrap',
        })}
      >
        {message}
      </Text>
      <Avatar size="2" fallback="D" radius="full" />
    </HStack>
  );
}

export default PromptChatItem;
