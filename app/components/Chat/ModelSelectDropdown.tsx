import { css } from '@/styled-system/css';
import { Button, ChevronDownIcon, DropdownMenu } from '@radix-ui/themes';

function ModelSelectDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline" className={css({ cursor: 'pointer', margin: '20px' })}>
          Model
          <ChevronDownIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Item className={css({ cursor: 'pointer' })}>Model 1</DropdownMenu.Item>
          <DropdownMenu.Item className={css({ cursor: 'pointer' })}>Model 2</DropdownMenu.Item>
          <DropdownMenu.Item className={css({ cursor: 'pointer' })}>Model 3</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default ModelSelectDropdown;
