interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  const { text } = props;
  return (
    <div className="rounded border-2 border-red-900 bg-red-100 p-0.5 px-2 text-xs font-semibold whitespace-nowrap text-red-900">
      {text}
    </div>
  );
}
