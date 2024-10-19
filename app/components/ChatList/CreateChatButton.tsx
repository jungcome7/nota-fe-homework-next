import { css } from '@/styled-system/css';
import { Button } from '@radix-ui/themes';

function CreateChatButton() {
  return <Button className={css({ alignSelf: 'end', cursor: 'pointer' })}>New</Button>;
}

export default CreateChatButton;
