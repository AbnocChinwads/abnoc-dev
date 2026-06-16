export function TerminalListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li className="before:content-['-'] before:text-green-200 before:mr-2">
      {children}
    </li>
  );
}
