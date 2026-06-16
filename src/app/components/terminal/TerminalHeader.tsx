export function TerminalHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-mono">
      <span className="text-green-200">{">"}</span>{" "}
      <span className="font-bold">{children}</span>
    </div>
  );
}
