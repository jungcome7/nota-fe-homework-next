'use client';

import { inputValueAtom, selectedChatModelNameAtom } from '@/app/atoms/chat';
import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Button, TextArea } from '@radix-ui/themes';
import { useAtom, useAtomValue } from 'jotai';

function ChatInputArea() {
  const selectedChatModelName = useAtomValue(selectedChatModelNameAtom);
  const [inputValue, setInputValue] = useAtom(inputValueAtom);

  const isDisabled = selectedChatModelName === null;

  return (
    <HStack width="800px" position="relative" mb="20px" alignSelf="center">
      <TextArea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={css({ width: '100%', position: 'relative', pr: '60px', py: '6px' })}
        disabled={isDisabled}
      />
      <Button
        size="2"
        variant="outline"
        className={css({
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        })}
        disabled={isDisabled}
      >
        제출
      </Button>
    </HStack>
  );
}

export default ChatInputArea;
