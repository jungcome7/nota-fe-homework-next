'use client';
import { VStack } from '@/styled-system/jsx';
import PromptChatItem from './PromptChatItem';
import CompletionChatItem from './CompletionChatItem';
import { IconButton, ScrollArea } from '@radix-ui/themes';
import { Fragment, UIEventHandler, useRef, useState } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';
import { css } from '@/styled-system/css';
import { useAtomValue } from 'jotai';
import { selectedChatIdAtom } from '@/app/atoms/chat';
import { useQuery } from '@tanstack/react-query';
import { getChat } from '@/app/apis/chat';

function ChatItemList() {
  const selectedChatId = useAtomValue(selectedChatIdAtom);

  const { data: chat } = useQuery({
    queryKey: ['chat', selectedChatId],
    queryFn: async () => {
      if (selectedChatId === null) {
        throw new Error('No chat selected');
      }

      return await getChat(selectedChatId);
    },
    enabled: selectedChatId !== null,
    select: (response) => response.data.data,
  });

  const dialogues = chat?.dialogues ?? [];

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
      {selectedChatId === null ? (
        <VStack />
      ) : (
        <VStack width="100%">
          <VStack width="800px" height="100%" gap="30px" alignSelf="center">
            {dialogues.map((dialogue) => (
              <Fragment key={dialogue.dialogue_id}>
                <PromptChatItem message={dialogue.prompt} />
                <CompletionChatItem message={dialogue.completion} />
              </Fragment>
            ))}
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
      )}
    </ScrollArea>
  );
}

export default ChatItemList;
