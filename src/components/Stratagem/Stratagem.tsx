import clsx from 'clsx';
import { Accordion } from '../Accordion';
import type { Phases, Turn } from '../../interfaces/game-concepts';

export interface StratagemProps {
  name: string;
  subtitle?: string;
  cost: number;
  detatchment: 'Core' | 'Army of Faith';
  type: 'Battle Tactic' | 'Strategic Ploy' | 'Epic Deed' | 'Wargear';
  timing: Turn[];
  simple: boolean;
  when: {
    oracle: string;
    simple?: string;
  };
  target: {
    oracle: string;
    simple?: string;
  };
  effect: {
    oracle: string;
    simple?: string;
  };
  restrictions?: {
    oracle: string;
    simple?: string;
  };
  currentTurn: Turn;
  currentPhase: Phases;
  phases: Phases[];
}

export default function Stratagem(props: StratagemProps) {
  const {
    name,
    subtitle,
    cost,
    detatchment,
    type,
    timing,
    simple,
    when,
    target,
    effect,
    restrictions,
    currentTurn,
    currentPhase,
    phases,
  } = props;
  const AnyTurn = timing.length > 1;
  const YourTurn = timing[0] === 'Your Turn';
  const OpponentsTurn = timing[0] === "Opponent's Turn";

  if (!timing.includes(currentTurn)) return null;

  if (!phases.includes(currentPhase)) return null;

  return (
    <Accordion
      rootClasses={clsx({
        'border-emerald-900 bg-emerald-800': AnyTurn,
        'border-blue-900 bg-blue-800': YourTurn,
        'border-red-900 bg-red-800': OpponentsTurn,
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
              'text-emerald-200': AnyTurn,
              'text-blue-200': YourTurn,
              'text-red-200': OpponentsTurn,
            })}
          >
            When:
          </span>
          {simple ? when.simple ?? when.oracle : when.oracle}
        </p>
        <p className='flex gap-2'>
          <span
            className={clsx({
              'text-emerald-200': AnyTurn,
              'text-blue-200': YourTurn,
              'text-red-200': OpponentsTurn,
            })}
          >
            Target:
          </span>
          {simple ? target.simple ?? target.oracle : target.oracle}
        </p>
        <p className='flex gap-2'>
          <span
            className={clsx({
              'text-emerald-200': AnyTurn,
              'text-blue-200': YourTurn,
              'text-red-200': OpponentsTurn,
            })}
          >
            Effect:
          </span>
          {simple ? effect.simple ?? effect.oracle : effect.oracle}
        </p>
        {!!restrictions && (
          <p className='flex gap-2'>
            <span
              className={clsx({
                'text-emerald-200': AnyTurn,
                'text-blue-200': YourTurn,
                'text-red-200': OpponentsTurn,
              })}
            >
              Restrictions:
            </span>
            {simple
              ? restrictions.simple ?? restrictions.oracle
              : restrictions.oracle}
          </p>
        )}
      </div>
    </Accordion>
  );
}
