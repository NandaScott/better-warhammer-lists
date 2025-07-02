import { TabPanel } from '@headlessui/react';
import { Datasheet } from '../components/Datasheet';
import { DominionSquad } from '../content/Sororitas/datasheets/dominion-squad';

interface DatasheetsPanelProps {}

export default function DatasheetsPanel(props: DatasheetsPanelProps) {
  const {} = props;
  return (
    <TabPanel>
      <Datasheet {...DominionSquad} />
    </TabPanel>
  );
}
