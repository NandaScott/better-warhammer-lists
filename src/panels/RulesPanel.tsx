import { useState } from 'react';
import { TabPanel } from '@headlessui/react';
import SororitasArmyRule from '../content/Sororitas/SororitasArmyRule';
import DetatchmentRules from '../content/Sororitas/detatchments/army-of-faith/DetatchmentRules';
import { Section } from '../components/Section';
import { Toggle } from '../components/Toggle';

export default function RulesPanel() {
  const [simplified, setSimplified] = useState(true);

  return (
    <TabPanel className='flex flex-col gap-8'>
      <Toggle
        label='Simplified'
        checked={simplified}
        onChange={setSimplified}
      />
      <Section title='Army Rule' color='blue'>
        <SororitasArmyRule simplified={simplified} />
      </Section>
      <Section title='Detatchment Rule' color='teal'>
        <DetatchmentRules />
      </Section>
    </TabPanel>
  );
}
