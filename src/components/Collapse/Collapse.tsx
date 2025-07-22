import React, { useEffect, useRef } from 'react';
import './Collapse.css';

interface CollapseProps {
  open: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const defaultTimerDuration = 300;

export default function Collapse(props: CollapseProps) {
  const { open, children, style = undefined, className = undefined } = props;
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

  return (
    <div
      ref={parentRef}
      style={{
        height: '0px',
        transitionDuration: `${defaultTimerDuration}ms`,
        ...style,
      }}
      className="collapse-container collapse-hidden"
    >
      <div ref={wrappingRef} className={className}>
        {children}
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  style: undefined,
  className: undefined,
};
