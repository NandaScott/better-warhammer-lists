import clsx from 'clsx';

interface BadgeProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Badge(props: BadgeProps) {
  const { text, size = 'small' } = props;

  return (
    <div
      className={clsx(
        'rounded border-2 border-red-900 bg-red-100 font-semibold whitespace-nowrap text-red-900',
        {
          'p-0.5 px-2 text-xs': size === 'small',
          'p-1 px-2 text-sm': size === 'medium',
          'p-2 px-4 text-base': size === 'large',
        }
      )}
    >
      {text}
    </div>
  );
}
