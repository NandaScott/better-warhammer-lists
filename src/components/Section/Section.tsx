import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  title: string;
  color:
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone';
}

export default function Section(props: SectionProps) {
  const { title, color, children } = props;
  return (
    <div
      className={clsx('border rounded', {
        'border-red-200': color === 'red',
        'border-orange-200': color === 'orange',
        'border-amber-200': color === 'amber',
        'border-yellow-200': color === 'yellow',
        'border-lime-200': color === 'lime',
        'border-green-200': color === 'green',
        'border-emerald-200': color === 'emerald',
        'border-teal-200': color === 'teal',
        'border-cyan-200': color === 'cyan',
        'border-sky-200': color === 'sky',
        'border-blue-200': color === 'blue',
        'border-indigo-200': color === 'indigo',
        'border-violet-200': color === 'violet',
        'border-purple-200': color === 'purple',
        'border-fuchsia-200': color === 'fuchsia',
        'border-pink-200': color === 'pink',
        'border-rose-200': color === 'rose',
        'border-slate-200': color === 'slate',
        'border-gray-200': color === 'gray',
        'border-zinc-200': color === 'zinc',
        'border-neutral-200': color === 'neutral',
        'border-stone-200': color === 'stone',
      })}
    >
      <h2
        className={clsx('font-bold text-2xl p-6 rounded-t border-b', {
          'bg-red-800 border-red-200': color === 'red',
          'bg-orange-800 border-orange-200': color === 'orange',
          'bg-amber-800 border-amber-200': color === 'amber',
          'bg-yellow-800 border-yellow-200': color === 'yellow',
          'bg-lime-800 border-lime-200': color === 'lime',
          'bg-green-800 border-green-200': color === 'green',
          'bg-emerald-800 border-emerald-200': color === 'emerald',
          'bg-teal-800 border-teal-200': color === 'teal',
          'bg-cyan-800 border-cyan-200': color === 'cyan',
          'bg-sky-800 border-sky-200': color === 'sky',
          'bg-blue-800 border-blue-200': color === 'blue',
          'bg-indigo-800 border-indigo-200': color === 'indigo',
          'bg-violet-800 border-violet-200': color === 'violet',
          'bg-purple-800 border-purple-200': color === 'purple',
          'bg-fuchsia-800 border-fuchsia-200': color === 'fuchsia',
          'bg-pink-800 border-pink-200': color === 'pink',
          'bg-rose-800 border-rose-200': color === 'rose',
          'bg-slate-800 border-slate-200': color === 'slate',
          'bg-gray-800 border-gray-200': color === 'gray',
          'bg-zinc-800 border-zinc-200': color === 'zinc',
          'bg-neutral-800 border-neutral-200': color === 'neutral',
          'bg-stone-800 border-stone-200': color === 'stone',
        })}
      >
        {title}
      </h2>
      <div className='m-4'>{children}</div>
    </div>
  );
}
