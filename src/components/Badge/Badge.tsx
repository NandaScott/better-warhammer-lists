interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  const { text } = props;
  return (
    <div className='bg-red-100 rounded-full text-[0.6rem] font-semibold border-2 border-red-900 p-0.5 px-2 text-red-900'>
      {text}
    </div>
  );
}
