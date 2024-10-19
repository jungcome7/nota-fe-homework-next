import { inputValueAtom, selectedChatIdAtom } from '@/app/atoms/chat';
import { css } from '@/styled-system/css';
import { Button } from '@radix-ui/themes';
import { useSetAtom } from 'jotai';

function CreateChatButton() {
  const setSelectedChatId = useSetAtom(selectedChatIdAtom);
  const setInputValue = useSetAtom(inputValueAtom);

  const handleClick = () => {
    setSelectedChatId(null);
    setInputValue('');
  };

  return (
    <Button
      variant="outline"
      className={css({ alignSelf: 'end', cursor: 'pointer' })}
      onClick={handleClick}
    >
      New
    </Button>
  );
}

export default CreateChatButton;
