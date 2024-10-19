'use client';

import { css } from '@/styled-system/css';
import { HStack } from '@/styled-system/jsx';
import { Button, TextArea } from '@radix-ui/themes';
import { useState } from 'react';

function ChatInputArea() {
  const [value, setValue] = useState('');

  return (
    <HStack width="800px" position="relative" mb="20px" alignSelf="center">
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={css({ width: '100%', position: 'relative', pr: '60px', py: '6px' })}
      />
      <Button
        size="2"
        variant="outline"
        className={css({
          cursor: 'pointer',
          position: 'absolute',
          right: '10px',
          bottom: '10px',
        })}
      >
        제출
      </Button>
    </HStack>
  );
}

export default ChatInputArea;
