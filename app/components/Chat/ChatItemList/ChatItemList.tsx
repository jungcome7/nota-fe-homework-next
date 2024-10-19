'use client';
import { VStack } from '@/styled-system/jsx';
import PromptChatItem from './PromptChatItem';
import CompletionChatItem from './CompletionChatItem';
import { ChevronDownIcon, IconButton, ScrollArea } from '@radix-ui/themes';
import { UIEventHandler, useRef, useState } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { css } from '@/styled-system/css';

function ChatItemList() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const [showScrollToBottomButton, setShowScrollToBottomButton] = useState(false);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const scrollBottom = scrollHeight - scrollTop - clientHeight;

    if (showScrollToBottomButton && scrollBottom === 0) {
      setShowScrollToBottomButton(false);

      return;
    }

    if (!showScrollToBottomButton && scrollBottom > 0) {
      setShowScrollToBottomButton(true);
    }
  };

  const handleScrollToBottom = () => {
    scrollAreaRef.current?.scrollTo({
      top: scrollAreaRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollArea ref={scrollAreaRef} scrollbars="vertical" type="scroll" onScroll={handleScroll}>
      <VStack width="100%">
        <VStack width="800px" height="100%" gap="30px" alignSelf="center">
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
          <CompletionChatItem />
          <PromptChatItem />
        </VStack>
        {showScrollToBottomButton && (
          <IconButton
            onClick={handleScrollToBottom}
            className={css({
              position: 'absolute',
              bottom: '0',
              borderRadius: '50%',
              cursor: 'pointer',
            })}
          >
            <ArrowDownIcon />
          </IconButton>
        )}
      </VStack>
    </ScrollArea>
  );
}

export default ChatItemList;
