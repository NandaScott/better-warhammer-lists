import { TabPanel } from '@headlessui/react';
import { Datasheet } from '../components/Datasheet';
import { useState } from 'react';
import { Toggle } from '../components/Toggle';

import { list } from '../content/lists/miracle-dice';

const { units } = list;

export default function DatasheetsPanel() {
  const [simplified, setSimplified] = useState(true);
  const [datasheetOpen, setDatasheetOpen] = useState(
    units
      .map((val) => ({ [val.id]: false }))
      .reduce((p, c) => ({ ...p, ...c }), {})
  );

  const onClick = (id: string) => () => {
    setDatasheetOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TabPanel>
      <Toggle
        label="Simplified"
        checked={simplified}
        onChange={setSimplified}
      />
      <div className="flex flex-col gap-4">
        {units.map(({ datasheets, id }) => (
          <Datasheet
            {...datasheets}
            key={id}
            open={datasheetOpen[id]}
            simplify={simplified}
            onClick={onClick(id)}
          />
        ))}
      </div>
    </TabPanel>
  );
}
