import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Avatar, Text } from '@radix-ui/themes';

function PromptChatItem() {
  return (
    <HStack alignSelf="end">
      <Text className={css({ bgColor: 'gray.100', py: '8px', px: '12px', borderRadius: '8px' })}>
        Prompt chat item 입니다
      </Text>
      <Avatar size="2" fallback="D" radius="full" />
    </HStack>
  );
}

export default PromptChatItem;
