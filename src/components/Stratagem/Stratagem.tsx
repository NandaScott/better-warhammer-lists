import clsx from 'clsx';
import { Accordion } from '../Accordion';

interface StratagemProps {
  name: string;
  cost: number;
  detatchment: 'Core' | 'Army of Faith';
  type: 'Battle Tactic';
  timing: 'any' | 'you' | 'enemy';
  when: string;
  target: string;
  effect: string;
}

export default function Stratagem(props: StratagemProps) {
  const { name, cost, detatchment, type, timing, when, target, effect } = props;
  return (
    <Accordion
      rootClasses={clsx({
        'border-emerald-900 bg-emerald-800': timing === 'any',
        'border-blue-700 bg-blue-600': timing === 'you',
        'border-red-700 bg-red-600': timing === 'enemy',
      })}
      titleClasses='text-2xl font-bold'
      title={`${cost} CP - ${name}`}
    >
      <div className='font-medium flex flex-col gap-4'>
        <p className='text-xl font-semibold'>
          {detatchment} - {type}
        </p>
        <p className='flex gap-2'>
          <span
            className={clsx({
              'text-emerald-200': timing === 'any',
              'text-blue-200': timing === 'you',
              'text-red-200': timing === 'enemy',
            })}
          >
            When:
          </span>
          {when}
        </p>
        <p className='flex gap-2'>
          <span
            className={clsx({
              'text-emerald-200': timing === 'any',
              'text-blue-200': timing === 'you',
              'text-red-200': timing === 'enemy',
            })}
          >
            Target:
          </span>
          {target}
        </p>
        <p className='flex gap-2'>
          <span
            className={clsx({
              'text-emerald-200': timing === 'any',
              'text-blue-200': timing === 'you',
              'text-red-200': timing === 'enemy',
            })}
          >
            Effect:
          </span>
          {effect}
        </p>
      </div>
    </Accordion>
  );
}
