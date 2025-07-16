import { Fragment } from 'react';
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import RulesPanel from './panels/RulesPanel';
import StratagemsPanel from './panels/StratagemsPanel';
import DatasheetsPanel from './panels/DatasheetsPanel';
import { list } from './content/lists/miracle-dice';

function App() {
  const { name, faction, detatchment, description, points, units } = list;
  return (
    <div className="flex flex-col gap-6 p-8 px-4 xl:px-8">
      <h1 className="text-6xl font-bold">{name}</h1>
      <h2 className="flex items-baseline gap-4 text-lg font-semibold">
        <div className="rounded bg-green-700 p-2 px-4">{faction.name}</div>
        <div className="rounded bg-blue-700 p-2 px-4">{detatchment.name}</div>
        <span className="text-lg">
          {points.used} / {points.total}
        </span>
      </h2>
      <div className="max-w-2xl text-sm">{description}</div>
      <TabGroup className="w-full">
        <TabList className="mb-4 flex">
          {['Rules', 'Stratagems', 'Datasheets'].map((tab) => (
            <Tab key={tab} as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    'grow p-4 text-xl font-semibold focus-within:outline-0',
                    {
                      'border-t-2 border-r-2 border-l-2': selected,
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
          <DatasheetsPanel units={units} />
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default App;
