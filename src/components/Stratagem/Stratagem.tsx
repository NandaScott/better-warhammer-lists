import clsx from 'clsx';
import { Accordion } from '../Accordion';

export interface StratagemProps {
  name: string;
  subtitle?: string;
  cost: number;
  detatchment: 'Core' | 'Army of Faith';
  type: 'Battle Tactic' | 'Strategic Ploy' | 'Epic Deed' | 'Wargear';
  timing: 'any' | 'you' | 'enemy';
  when: string;
  target: string;
  effect: string;
  restrictions?: string;
}

export default function Stratagem(props: StratagemProps) {
  const {
    name,
    subtitle,
    cost,
    detatchment,
    type,
    timing,
    when,
    target,
    effect,
    restrictions,
  } = props;
  return (
    <Accordion
      rootClasses={clsx({
        'border-emerald-900 bg-emerald-800': timing === 'any',
        'border-blue-900 bg-blue-800': timing === 'you',
        'border-red-900 bg-red-800': timing === 'enemy',
      })}
      titleClasses='text-2xl font-bold'
      title={`${cost} CP - ${name}`}
      subtitle={subtitle}
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
        {!!restrictions && (
          <p className='flex gap-2'>
            <span
              className={clsx({
                'text-emerald-200': timing === 'any',
                'text-blue-200': timing === 'you',
                'text-red-200': timing === 'enemy',
              })}
            >
              Restrictions:
            </span>
            {restrictions}
          </p>
        )}
      </div>
    </Accordion>
  );
}
