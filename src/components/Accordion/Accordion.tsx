import { useState, type PropsWithChildren } from 'react';
import ChevronDown from '../../assets/chevron-down.svg?react';
import clsx from 'clsx';

interface AccordionProps extends PropsWithChildren {
  title: string;
}

export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState(false);
  const { title, children } = props;

  const handleClick = () => {
    setOpen((open) => !open);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'text-white p-4 flex flex-col cursor-pointer rounded border border-blue-300 items-start text-start'
      )}
    >
      <div className='flex justify-between w-full items-center'>
        <div className='text-xl'>{title}</div>
        <div
          className={clsx('transition-transform duration-150', {
            'rotate-180': open,
          })}
        >
          <ChevronDown />
        </div>
      </div>
      <div
        className={clsx(
          'transition-all ease-in-out overflow-hidden',
          open ? 'max-h-96 duration-300' : 'max-h-0 duration-150'
        )}
      >
        <div className='pt-4'>{children}</div>
      </div>
    </button>
  );
}
