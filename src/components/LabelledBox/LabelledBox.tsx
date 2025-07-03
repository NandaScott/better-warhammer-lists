import type { PropsWithChildren } from 'react';

interface LabelledBoxProps extends PropsWithChildren {
  label: string;
}

export default function LabelledBox(props: LabelledBoxProps) {
  const { label, children } = props;
  return (
    <div className='w-8 h-8 lg:w-14 lg:h-14 text-xs lg:text-sm pt-1.5 px-1 pb-1 lg:p-4 border-2 border-red-900 relative'>
      <div className='absolute top-0 left-0 right-0 w-5 mx-auto -mt-2 lg:-mt-[0.45rem] lg:ml-1.5 lg:px-1 text-[0.5rem] bg-red-950'>
        {label}
      </div>
      {children}
    </div>
  );
}
