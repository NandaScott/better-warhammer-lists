import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import ChevronDown from '../../assets/chevron-down.svg?react';
import clsx from 'clsx';

const defaultTimerDuration = 300;

interface AccordionProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  rootClasses?: string;
  titleClasses?: string;
}

export default function Accordion(props: AccordionProps) {
  const { title, subtitle, children, rootClasses, titleClasses } = props;
  const [open, setOpen] = useState(false);
  const wrappingRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef<boolean>(true);

  useEffect(() => {
    const parent = parentRef.current;
    const childHeight = wrappingRef.current?.getBoundingClientRect().height;
    if (!parent || !childHeight) return () => null;

    // handle closed to open
    if (open) {
      firstRender.current = false;
      parent.classList.remove('collapse-hidden');
      parent.style.height = `${childHeight.toString()}px`;
      const timer = setTimeout(() => {
        parent.classList.add('collapse-entered');
      }, defaultTimerDuration);

      const timer2 = setTimeout(() => {
        parent.style.height = 'auto';
      }, defaultTimerDuration + 100);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }

    if (!open) {
      // Prevents the collapse from opening early
      if (firstRender.current) {
        firstRender.current = false;
        return () => null;
      }

      parent.style.height = `${childHeight.toString()}px`; // switching from 'auto' to height size
      parent.classList.remove('collapse-entered');

      const timer = setTimeout(() => {
        parent.style.height = '0px';
      }, 1);

      const timer2 = setTimeout(() => {
        parent.classList.add('collapse-hidden');
      }, defaultTimerDuration + 100);
      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }

    return () => null;
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
          {subtitle && <div className='text-base'>{subtitle}</div>}
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
        ref={parentRef}
        style={{
          height: '0px',
          transitionDuration: `${defaultTimerDuration}ms`,
        }}
        className='collapse-container collapse-hidden'
      >
        <div className='pt-4 flex flex-col gap-4' ref={wrappingRef}>
          {children}
        </div>
      </div>
    </button>
  );
}
