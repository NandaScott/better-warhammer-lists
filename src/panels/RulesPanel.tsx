import { useState, type JSX } from 'react';
import { TabPanel } from '@headlessui/react';
import SororitasArmyRule, {
  type SororitasArmyRuleProps,
} from '../content/Sororitas/SororitasArmyRule';
import { Section } from '../components/Section';
import { Toggle } from '../components/Toggle';
import type { DetatchmentData } from '../content/core/types';

export type SororitasArmyRuleKeys = 'Miracle Dice';

const armyRulesDatabase: Record<
  SororitasArmyRuleKeys,
  (props: SororitasArmyRuleProps) => JSX.Element
> = {
  'Miracle Dice': SororitasArmyRule,
};

interface RulesPanelProps {
  simple?: boolean;
  armyRules: SororitasArmyRuleKeys[];
  detatchmentRules: DetatchmentData['rules'];
}

export default function RulesPanel(props: RulesPanelProps) {
  const { simple, armyRules, detatchmentRules } = props;
  const [simplified, setSimplified] = useState(true);

  return (
    <TabPanel className='flex flex-col gap-8'>
      <Toggle
        label='Simplified'
        checked={simplified}
        onChange={setSimplified}
      />
      <Section title='Army Rule' color='blue'>
        {armyRules.map((data) => {
          const Comp = armyRulesDatabase[data];
          return <Comp key={data} simplified={simplified} />;
        })}
      </Section>
      <Section title='Detatchment Rule' color='teal'>
        {detatchmentRules.map(({ name, effect }) => (
          <div key={name} className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>{name}</p>
            <p>{simple ? effect.simple : effect.oracle}</p>
          </div>
        ))}
      </Section>
    </TabPanel>
  );
}
