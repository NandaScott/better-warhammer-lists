import { Switch } from '@headlessui/react';

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toggle(props: ToggleProps) {
  const { label, checked, onChange } = props;
  return (
    <div className='flex gap-2 p-4'>
      {label}
      <Switch
        checked={checked}
        onChange={onChange}
        className='group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-blue-600'
      >
        <span className='size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6' />
      </Switch>
    </div>
  );
}
