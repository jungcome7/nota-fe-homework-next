import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Avatar, Text } from '@radix-ui/themes';

function CompletionChatItem() {
  return (
    <HStack alignSelf="start">
      <Avatar size="2" fallback="N" radius="full" />
      <Text className={css({ bgColor: 'gray.100', py: '8px', px: '12px', borderRadius: '8px' })}>
        Completion chat item 입니다
      </Text>
    </HStack>
  );
}

export default CompletionChatItem;
