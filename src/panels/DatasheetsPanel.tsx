import { TabPanel } from '@headlessui/react';
import { Datasheet } from '../components/Datasheet';
import { DominionSquad } from '../content/Sororitas/datasheets/dominion-squad';
import { AestredThurgaAndAgathaeDolan } from '../content/Sororitas/datasheets/aestred-thurga-and-agathae-dolan';
import datasheetCombiner from '../components/Datasheet/datasheet-combiner';

interface DatasheetsPanelProps {}

export default function DatasheetsPanel(props: DatasheetsPanelProps) {
  const {} = props;
  const combined = datasheetCombiner(
    DominionSquad,
    AestredThurgaAndAgathaeDolan
  );
  return (
    <TabPanel>
      <div className='flex flex-col gap-4'>
        <Datasheet {...DominionSquad} />
        <Datasheet {...AestredThurgaAndAgathaeDolan} />
        <Datasheet {...combined} />
      </div>
    </TabPanel>
  );
}
