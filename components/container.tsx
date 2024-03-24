import React, { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn('container max-w-7xl', className)}>
      {children}
    </div>
  );
};

export default Container;