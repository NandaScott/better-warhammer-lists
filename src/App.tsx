import { useState } from 'react';
import { Accordion } from './components/Accordion';

function App() {
  const [points, setPoints] = useState(2000);

  return (
    <div className='p-8 flex flex-col gap-6'>
      <div className='flex gap-4 items-baseline'>
        <h2 className='text-5xl text-white font-bold'>Miracle Points</h2>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas
          quod officia debitis soluta aliquid impedit ratione rem laudantium aut
          accusamus nihil nulla esse consequuntur quia, corporis assumenda in
          magnam! Libero voluptate et optio dolorum vitae illum aut quasi! Natus
          obcaecati dolores et eius non culpa eveniet nihil eaque iure quia.
          Sequi distinctio minus suscipit labore sit dolorem repellat? Nobis.
          Fugiat, quibusdam quod laboriosam maxime impedit unde dolor, quis
          pariatur obcaecati aperiam voluptates? Culpa esse ipsum autem
          consectetur, voluptatibus dolore ex eius, numquam praesentium magnam
          molestiae. Aliquid accusamus id molestiae! Deleniti fugiat,
          consequatur quidem quibusdam quod neque animi. Voluptate nam dolor
          quae vitae excepturi est voluptates repellendus at, impedit quisquam
          inventore non facere. Deleniti repellat sunt est atque provident
          autem. Voluptatem, expedita saepe repudiandae odit provident eum
          assumenda culpa necessitatibus ullam dolor, tempore magnam quidem
          harum deleniti delectus impedit iste quisquam perspiciatis. Nam
          accusantium eius minima enim numquam expedita eaque?
        </p>
      </Accordion>
      <Accordion title='Detachment Rules'></Accordion>
      <Accordion title='Enhancements'></Accordion>
      <Accordion title='Datasheets'></Accordion>
      <Accordion title='Stratagems'></Accordion>
    </div>
  );
}

export default App;
