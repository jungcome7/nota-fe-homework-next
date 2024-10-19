import { HStack, styled } from '@/styled-system/jsx';

function LoadingDots() {
  return (
    <HStack height="40px" bgColor="gray.100" py="8px" px="20px" borderRadius="8px">
      <Dot />
      <Dot />
      <Dot />
    </HStack>
  );
}

const Dot = styled('span', {
  base: {
    width: '3px',
    height: '3px',
    margin: '0 1px',
    backgroundColor: 'gray.500',
    borderRadius: '50%',
    animation: 'dot-blink 1.2s infinite ease-in-out both',

    '&:nth-child(2)': {
      animationDelay: '.2s',
    },

    '&:nth-child(3)': {
      animationDelay: '.4s',
    },
  },
});

export default LoadingDots;
