import { Fragment } from 'react';
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import RulesPanel from './panels/RulesPanel';
import StratagemsPanel from './panels/StratagemsPanel';
import DatasheetsPanel from './panels/DatasheetsPanel';
import { list } from './content/lists/miracle-dice';

function App() {
  const { name, faction, detatchment, description, points } = list;
  return (
    <div className='p-8 flex flex-col gap-6'>
      <h1 className='text-6xl font-bold'>{name}</h1>
      <h2 className='flex gap-4 items-baseline text-lg font-semibold'>
        <div className='p-2 px-4 bg-green-700 rounded'>{faction.name}</div>
        <div className='p-2 px-4 bg-blue-700 rounded'>{detatchment.name}</div>
        <span className='text-lg'>
          {points.used} / {points.total}
        </span>
      </h2>
      <div className='text-sm max-w-2xl'>{description}</div>
      <TabGroup className='w-full'>
        <TabList className='flex mb-4'>
          {['Rules', 'Stratagems', 'Datasheets'].map((tab) => (
            <Tab key={tab} as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    'grow p-4 font-semibold text-xl focus-within:outline-0',
                    {
                      'border-t-2 border-l-2 border-r-2': selected,
                      'border-b-2': !selected,
                    }
                  )}
                >
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <RulesPanel
            armyRules={faction.armyRules}
            detatchmentRules={detatchment.rules}
          />
          <StratagemsPanel detatchmentStratagems={detatchment.stratagems} />
          <DatasheetsPanel />
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default App;
