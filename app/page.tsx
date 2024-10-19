import { css } from '@/styled-system/css';
import { Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
      <div className={css({ color: 'red' })}>Hello world</div>
      <Button>Click me</Button>
    </>
  );
}
