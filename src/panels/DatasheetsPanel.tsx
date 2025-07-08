import { TabPanel } from '@headlessui/react';
import { Datasheet } from '../components/Datasheet';
import datasheetCombiner from '../components/Datasheet/datasheet-combiner';
import type { Unit } from '../content/lists/miracle-dice';
import { useState } from 'react';
import { Toggle } from '../components/Toggle';

interface DatasheetsPanelProps {
  units: Unit[];
}

export default function DatasheetsPanel(props: DatasheetsPanelProps) {
  const { units } = props;
  const [simplified, setSimplified] = useState(true);
  const [datasheetOpen, setDatasheetOpen] = useState(
    units
      .map((val) => ({ [val.id]: true }))
      .reduce((p, c) => ({ ...p, ...c }), {})
  );

  const onClick = (id: string) => () => {
    setDatasheetOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TabPanel>
      <Toggle
        label='Simplified'
        checked={simplified}
        onChange={setSimplified}
      />
      <div className='flex flex-col gap-4'>
        {units.map(({ id, datasheets }) => {
          const combined = datasheets.reduce((prev, curr) =>
            datasheetCombiner(prev, curr)
          );
          return (
            <Datasheet
              {...combined}
              key={id}
              open={datasheetOpen[id]}
              simplify={simplified}
              onClick={onClick(id)}
            />
          );
        })}
      </div>
    </TabPanel>
  );
}
