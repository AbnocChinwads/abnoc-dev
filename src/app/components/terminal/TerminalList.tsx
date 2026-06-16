export function TerminalList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className="ml-4 sm:ml-8 space-y-1 sm:space-y-2 font-mono">{children}</ul>;
}
