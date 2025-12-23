import clsx from 'clsx';

interface BadgeProps {
  text: string;
  size?: 'small' | 'medium' | 'large';
  modified?: boolean;
  source?: string;
}

export default function Badge(props: BadgeProps) {
  const { text, size = 'small', modified = false, source } = props;

  return (
    <div
      className={clsx(
        'rounded border-2 font-semibold whitespace-nowrap',
        modified
          ? 'border-red-800 bg-red-200 text-red-800'
          : 'border-red-900 bg-red-100 text-red-900',
        {
          'p-0.5 px-2 text-xs': size === 'small',
          'p-1 px-2 text-sm': size === 'medium',
          'p-2 px-4 text-base': size === 'large',
        }
      )}
      title={modified && source ? `Added by: ${source}` : undefined}
    >
      {text}
      {modified && '*'}
    </div>
  );
}
