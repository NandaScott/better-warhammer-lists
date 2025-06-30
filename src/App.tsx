import { useState } from 'react';
import { Accordion } from './components/Accordion';
import SororitasArmyRule from './content/Sororitas/SororitasArmyRule';
import DetatchmentRules from './content/Sororitas/detatchments/army-of-faith/DetatchmentRules';
import EnhancementBladeofSaintEllynor from './content/Sororitas/detatchments/army-of-faith/enhancments/EnhancementBladeofSaintEllynor';
import EnhancementDivineAspect from './content/Sororitas/detatchments/army-of-faith/enhancments/EnhancementDivineAspect';
import EnhancementLitaniesOfFaith from './content/Sororitas/detatchments/army-of-faith/enhancments/EnhancementLitaniesOfFaith';
import { Description } from './components/Description';
import CommandReRoll from './content/core/stratagems/CommandReRoll';

function App() {
  const [points, setPoints] = useState(2000);

  return (
    <div className='p-8 flex flex-col gap-6'>
      <h2 className='text-5xl font-bold'>Miracle Points</h2>
      <div className='flex gap-4 items-baseline'>
        <div className='text-3xl font-semibold'>Army of Faith</div>
        <span className='text-xl italic font-semibold'>{points} / 2000</span>
      </div>
      <Description />
      <Accordion rootClasses='border-blue-400' title='Army Rule'>
        <SororitasArmyRule />
      </Accordion>
      <Accordion rootClasses='border-blue-400' title='Detachment Rules'>
        <DetatchmentRules />
      </Accordion>
      <Accordion rootClasses='border-blue-400' title='Enhancements'>
        <EnhancementBladeofSaintEllynor />
        <EnhancementDivineAspect />
        <EnhancementLitaniesOfFaith />
      </Accordion>
      <Accordion rootClasses='border-blue-400' title='Datasheets'></Accordion>
      <Accordion rootClasses='border-blue-400' title='Stratagems'>
        <CommandReRoll />
      </Accordion>
    </div>
  );
}

export default App;
