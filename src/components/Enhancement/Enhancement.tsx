import type { PropsWithChildren } from 'react';

interface EnhancementProps extends PropsWithChildren {
  title: string;
}

export default function Enhancement(props: EnhancementProps) {
  const { title, children } = props;
  return (
    <div className='flex flex-col gap-2 py-4'>
      <p className='font-bold text-xl underline'>{title}</p>
      <p>{children}</p>
    </div>
  );
}
