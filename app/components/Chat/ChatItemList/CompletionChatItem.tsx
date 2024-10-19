import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Avatar, Text } from '@radix-ui/themes';
import LoadingDots from './LoadingDots';

interface Props {
  message?: string;
}

function CompletionChatItem({ message }: Props) {
  return (
    <HStack alignSelf="start">
      <Avatar size="2" fallback="N" radius="full" />
      {message === undefined ? (
        <LoadingDots />
      ) : (
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
      )}
    </HStack>
  );
}

export default CompletionChatItem;
