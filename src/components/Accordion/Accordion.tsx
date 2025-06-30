import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import ChevronDown from '../../assets/chevron-down.svg?react';
import clsx from 'clsx';

interface AccordionProps extends PropsWithChildren {
  title: string;
  rootClasses?: string;
  titleClasses?: string;
}

export default function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = useRef<number>(0);
  const { title, children, rootClasses, titleClasses } = props;

  useEffect(() => {
    if (contentRef.current) {
      contentHeight.current = open ? contentRef.current.scrollHeight : 0;
    }
  }, [open]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setOpen((open) => !open);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'text-white p-4 w-full flex flex-col cursor-pointer rounded border items-start text-start',
        rootClasses
      )}
    >
      <div className='flex justify-between w-full items-center'>
        <div className={clsx(!!titleClasses ? titleClasses : 'text-xl')}>
          {title}
        </div>
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
          'transition-all ease-in-out overflow-hidden w-full',
          open ? 'duration-300' : 'duration-150'
        )}
      >
        <div className='pt-4 flex flex-col gap-4' ref={contentRef}>
          {children}
        </div>
      </div>
    </button>
  );
}
