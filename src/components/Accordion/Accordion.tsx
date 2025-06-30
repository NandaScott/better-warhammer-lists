import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import ChevronDown from '../../assets/chevron-down.svg?react';
import clsx from 'clsx';

interface AccordionProps extends PropsWithChildren {
  title: string;
}

export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = useRef<number>(0);
  const { title, children } = props;

  useEffect(() => {
    if (contentRef.current) {
      contentHeight.current = open ? contentRef.current.scrollHeight : 0;
    }
  }, [open]);

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
        style={{ maxHeight: `${contentHeight.current}px` }}
        className={clsx(
          'transition-all ease-in-out overflow-hidden',
          open ? 'duration-300' : 'duration-150'
        )}
      >
        <div className='pt-4' ref={contentRef}>
          {children}
        </div>
      </div>
    </button>
  );
}
