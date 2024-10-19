import { css } from '@/styled-system/css';
import { Skeleton } from '@radix-ui/themes';

function ButtonSkeleton() {
  return <Skeleton width="80px" height="40px" className={css({ margin: '20px' })} />;
}

export default ButtonSkeleton;
