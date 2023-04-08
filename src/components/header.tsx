interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex w-full h-14 items-center">
      <h2 className="text-xl text-slate-800 capitalize">{title}</h2>
    </header>
  );
}
