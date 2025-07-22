import clsx from 'clsx';
import LabelledBox from './LabelledBox';
import ChevronDown from '../../assets/icons/chevron-down.svg?react';

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
  open: boolean;
}

export default function HeaderButton(props: HeaderButtonProps) {
  const { handleClick, stats, open } = props;
  return (
    <button
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center justify-between border-2 border-red-900 bg-red-950 text-center align-middle text-white"
    >
      <div className="flex flex-col lg:min-w-3xl">
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
              className="flex flex-col items-start justify-between gap-2 p-2 px-2 text-xl font-bold uppercase md:flex-row md:items-center md:gap-8 md:text-lg lg:px-4"
            >
              {name}

              <div className="flex gap-2 text-center align-middle">
                <LabelledBox label="M">{movement}"</LabelledBox>
                <LabelledBox label="T">{toughness}</LabelledBox>
                <LabelledBox label="SV">{save}+</LabelledBox>
                <LabelledBox label="INV">{invuln}+</LabelledBox>
                <LabelledBox label="W">{wounds}</LabelledBox>
                <LabelledBox label="LD">{leadership}+</LabelledBox>
                <LabelledBox label="OC">{objective}</LabelledBox>
              </div>
            </div>
          )
        )}
      </div>
      <div
        className={clsx('transition-transform duration-150', {
          'mr-4 lg:p-2 lg:px-8': stats.length === 1,
          'mr-4 lg:p-8': stats.length > 1,
          'rotate-180': open,
        })}
      >
        <ChevronDown />
      </div>
    </button>
  );
}
