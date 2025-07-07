import clsx from 'clsx';
import LabelledBox from './LabelledBox';
import ChevronDown from '../../assets/chevron-down.svg?react';

type Stat = {
  name: string;
  movement: number;
  toughness: number;
  save: number;
  invuln: number;
  wounds: number;
  leadership: number;
  objective: number;
};

export interface HeaderButtonProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  stats: Stat[];
  contentHeight: number;
}

export default function HeaderButton(props: HeaderButtonProps) {
  const { handleClick, stats, contentHeight } = props;
  return (
    <button
      onClick={handleClick}
      className='cursor-pointer border-2 border-red-900 flex items-center justify-between w-full font-bold text-center align-middle bg-red-950'
    >
      <div className='flex flex-col lg:min-w-3xl'>
        {stats.map(
          ({
            name,
            movement,
            toughness,
            save,
            invuln,
            wounds,
            leadership,
            objective,
          }) => (
            <div
              key={name}
              className='px-2 p-2 lg:px-4 text-sm uppercase flex flex-col md:flex-row gap-2 items-start md:items-center justify-between'
            >
              {name}

              <div className='flex text-center align-middle gap-2'>
                <LabelledBox label='M'>{movement}"</LabelledBox>
                <LabelledBox label='T'>{toughness}</LabelledBox>
                <LabelledBox label='SV'>{save}+</LabelledBox>
                <LabelledBox label='INV'>{invuln}+</LabelledBox>
                <LabelledBox label='W'>{wounds}</LabelledBox>
                <LabelledBox label='LD'>{leadership}+</LabelledBox>
                <LabelledBox label='OC'>{objective}</LabelledBox>
              </div>
            </div>
          )
        )}
      </div>
      <div
        className={clsx('transition-transform duration-150', {
          'mr-4 lg:p-2 lg:px-8': stats.length === 1,
          'mr-4 lg:p-8': stats.length > 1,
          'rotate-180': contentHeight > 0,
        })}
      >
        <ChevronDown />
      </div>
    </button>
  );
}
