export function TerminalList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className="ml-8 space-y-1 font-mono">{children}</ul>;
}
