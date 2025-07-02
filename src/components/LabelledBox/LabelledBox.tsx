import type { PropsWithChildren } from 'react';

interface LabelledBoxProps extends PropsWithChildren {
  label: string;
}

export default function LabelledBox(props: LabelledBoxProps) {
  const { label, children } = props;
  return (
    <div className='w-14 h-14 text-sm p-4 border-2 border-red-900 relative'>
      <div className='absolute top-0 left-0 -mt-[0.45rem] ml-1.5 px-1 text-[0.5rem] bg-red-950'>
        {label}
      </div>
      {children}
    </div>
  );
}
