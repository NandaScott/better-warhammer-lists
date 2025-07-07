import { useState } from 'react';
import { TabPanel, Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { Toggle } from '../components/Toggle';
import type { Phases, Turn } from '../interfaces/game-concepts';
import type { DetatchmentData } from '../content/core/types';
import { Stratagem } from '../components/Stratagem';
import CoreStratagems from '../content/core/stratagems';

const phases: Phases[] = ['Command', 'Movement', 'Shooting', 'Charge', 'Fight'];

interface StratagemsPanelProps {
  detatchmentStratagems: DetatchmentData['stratagems'];
}

export default function StratagemsPanel(props: StratagemsPanelProps) {
  const { detatchmentStratagems } = props;
  const [simplified, setSimplified] = useState(true);
  const [currentPhase, setCurrentPhase] = useState<Phases>(phases[0]);
  const [currentPlayer, setCurrentPlayer] = useState<Turn>('Your Turn');

  return (
    <TabPanel className='flex flex-col gap-8'>
      <Toggle
        label='Simplified'
        checked={simplified}
        onChange={setSimplified}
      />
      <RadioGroup
        value={currentPlayer}
        onChange={setCurrentPlayer}
        aria-label='Current Phase'
        className='flex flex-col md:flex-row gap-4'
      >
        <Field className='flex justify-between items-center gap-2 grow p-4 rounded bg-green-700'>
          <Label className='font-semibold grow text-2xl'>Your Turn</Label>
          <Radio
            value='Your Turn'
            className='group flex size-5 items-center justify-center rounded-full border-4 bg-white data-checked:bg-green-400'
          />
        </Field>
        <Field className='flex justify-between items-center gap-2 grow p-4 rounded bg-red-700'>
          <Label className='font-semibold grow text-2xl'>Opponent's Turn</Label>
          <Radio
            value="Opponent's Turn"
            className='group flex size-5 items-center justify-center rounded-full border-4 bg-white data-checked:bg-red-400'
          />
        </Field>
      </RadioGroup>
      <RadioGroup
        value={currentPhase}
        onChange={setCurrentPhase}
        aria-label='Current Phase'
        className='flex flex-col md:flex-row gap-4'
      >
        {phases.map((phase) => (
          <Field
            key={phase}
            className='flex justify-between items-center gap-2 grow p-2 px-4 rounded bg-amber-700'
          >
            <Label className='font-semibold grow'>{phase}</Label>
            <Radio
              value={phase}
              className='group flex size-5 items-center justify-center rounded-full border-4 bg-white data-checked:bg-amber-400'
            />
          </Field>
        ))}
      </RadioGroup>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-8'>
          {CoreStratagems.map(({ name, ...rest }) => (
            <Stratagem
              key={name}
              name={name}
              currentPhase={currentPhase}
              currentTurn={currentPlayer}
              simple={simplified}
              {...rest}
            />
          ))}
        </div>
        <div className='block h-1 w-full bg-blue-950' />
        <div className='flex flex-col gap-8'>
          {detatchmentStratagems.map(({ name, ...rest }) => (
            <Stratagem
              key={name}
              name={name}
              currentPhase={currentPhase}
              currentTurn={currentPlayer}
              simple={simplified}
              {...rest}
            />
          ))}
        </div>
      </div>
    </TabPanel>
  );
}
