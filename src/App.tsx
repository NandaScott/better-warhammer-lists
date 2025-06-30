import { useState } from 'react';
import { Accordion } from './components/Accordion';
import SororitasArmyRule from './content/Sororitas/SororitasArmyRule';
import DetatchmentRules from './content/Sororitas/detatchments/army-of-faith/DetatchmentRules';
import EnhancementBladeofSaintEllynor from './content/Sororitas/detatchments/army-of-faith/enhancments/EnhancementBladeofSaintEllynor';
import EnhancementDivineAspect from './content/Sororitas/detatchments/army-of-faith/enhancments/EnhancementDivineAspect';
import EnhancementLitaniesOfFaith from './content/Sororitas/detatchments/army-of-faith/enhancments/EnhancementLitaniesOfFaith';

function App() {
  const [points, setPoints] = useState(2000);

  return (
    <div className='p-8 flex flex-col gap-6'>
      <h2 className='text-5xl font-bold'>Miracle Points</h2>
      <div className='flex gap-4 items-baseline'>
        <div className='text-3xl font-semibold'>Army of Faith</div>
        <span className='text-xl italic font-semibold'>{points} / 2000</span>
      </div>
      <div className='flex flex-col gap-4 max-w-2xl'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          reprehenderit placeat quasi blanditiis facilis vitae veniam aperiam
          dolorum tempore id? Nulla tenetur dolorum delectus, id cum fuga quidem
          corrupti dolor. Praesentium itaque placeat cum reiciendis sit iusto
          delectus voluptate minus, nobis officiis obcaecati. Nesciunt non
          distinctio possimus veritatis, neque magni tempore temporibus illo
          placeat consectetur perferendis facilis laudantium reiciendis laborum.
          Tempora, at consectetur? Cumque, modi magni illum laudantium neque
          ullam deserunt facere ad esse, dolores est aliquam fugit enim quas
          obcaecati iure velit eaque necessitatibus quae ut. Quae, blanditiis
          temporibus. Distinctio eius praesentium voluptates tempora neque
          numquam quas aspernatur dolorem, nisi vero quaerat nulla cupiditate
          cumque iste impedit aut voluptas voluptate aliquid. Distinctio sequi
          earum sed ipsum porro adipisci quaerat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          reprehenderit placeat quasi blanditiis facilis vitae veniam aperiam
          dolorum tempore id? Nulla tenetur dolorum delectus, id cum fuga quidem
          corrupti dolor. Praesentium itaque placeat cum reiciendis sit iusto
          delectus voluptate minus, nobis officiis obcaecati. Nesciunt non
          distinctio possimus veritatis, neque magni tempore temporibus illo
          placeat consectetur perferendis facilis laudantium reiciendis laborum.
          Tempora, at consectetur? Cumque, modi magni illum laudantium neque
          ullam deserunt facere ad esse, dolores est aliquam fugit enim quas
          obcaecati iure velit eaque necessitatibus quae ut. Quae, blanditiis
          temporibus. Distinctio eius praesentium voluptates tempora neque
          numquam quas aspernatur dolorem, nisi vero quaerat nulla cupiditate
          cumque iste impedit aut voluptas voluptate aliquid. Distinctio sequi
          earum sed ipsum porro adipisci quaerat!
        </p>
      </div>
      <Accordion title='Army Rule'>
        <SororitasArmyRule />
      </Accordion>
      <Accordion title='Detachment Rules'>
        <DetatchmentRules />
      </Accordion>
      <Accordion title='Enhancements'>
        <EnhancementBladeofSaintEllynor />
        <EnhancementDivineAspect />
        <EnhancementLitaniesOfFaith />
      </Accordion>
      <Accordion title='Datasheets'></Accordion>
      <Accordion title='Stratagems'></Accordion>
    </div>
  );
}

export default App;
