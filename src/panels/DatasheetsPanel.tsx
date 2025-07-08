import { TabPanel } from '@headlessui/react';
import { Datasheet } from '../components/Datasheet';
import datasheetCombiner from '../components/Datasheet/datasheet-combiner';
import type { Unit } from '../content/lists/miracle-dice';

interface DatasheetsPanelProps {
  units: Unit[];
}

export default function DatasheetsPanel(props: DatasheetsPanelProps) {
  const { units } = props;

  return (
    <TabPanel>
      <div className='flex flex-col gap-4'>
        {units.map(({ id, datasheets }) => {
          const combined = datasheets.reduce((prev, curr) =>
            datasheetCombiner(prev, curr)
          );
          return <Datasheet key={id} {...combined} />;
        })}
      </div>
    </TabPanel>
  );
}
