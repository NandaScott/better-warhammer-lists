import { Fragment, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import RulesPanel from './panels/RulesPanel';
import StratagemsPanel from './panels/StratagemsPanel';
import DatasheetsPanel from './panels/DatasheetsPanel';

function App() {
  const [points, setPoints] = useState(2000);
  console.log(setPoints);

  return (
    <div className='p-8 flex flex-col gap-6'>
      <h2 className='text-5xl font-bold'>Miracle Points</h2>
      <div className='flex gap-4 items-baseline'>
        <div className='text-3xl font-semibold'>Army of Faith</div>
        <span className='text-xl italic font-semibold'>{points} / 2000</span>
      </div>
      <TabGroup className='w-full'>
        <TabList className='flex mb-4'>
          {['Rules', 'Stratagems', 'Datasheets'].map((tab) => (
            <Tab as={Fragment}>
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
          <RulesPanel />
          <StratagemsPanel />
          <DatasheetsPanel />
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default App;
