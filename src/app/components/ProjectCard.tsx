import {
  TerminalHeader,
  TerminalList,
  TerminalListItem,
} from "../components/terminal";

type ProjectCardProps = {
  title: string;
  description: string;
  stack?: string[];
  context?: string;
  github?: string;
  live?: string;
  variant?: "full" | "compact";
};

export default function ProjectCard({
  title,
  description,
  stack,
  context,
  github,
  live,
  variant = "full",
}: ProjectCardProps) {
  return (
    <article className="space-y-2">
      {/* Title */}
      <TerminalHeader>{title}</TerminalHeader>

      {/* Description */}
      <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">{description}</p>

      {/* Context */}
      {context && (
        <p className="ml-2 sm:ml-4 text-green-300 text-sm sm:text-base leading-relaxed">
          <span className="text-green-200">context:</span> {context}
        </p>
      )}

      {/* Tech stack */}
      {stack && stack.length > 0 && (
        <TerminalList>
          {stack.map((item) => (
            <TerminalListItem key={item}>{item}</TerminalListItem>
          ))}
        </TerminalList>
      )}

      {/* Links */}
      {variant === "full" && (github || live) && (
        <div className="ml-2 sm:ml-4 font-mono text-sm space-x-4">
          {github && (
            <a
              className="text-green-200 hover:underline"
              target="_blank"
              rel="noreferrer"
              href={github}
            >
              github
            </a>
          )}

          {live && (
            <a
              className="text-green-200 hover:underline"
              target="_blank"
              rel="noreferrer"
              href={live}
            >
              live
            </a>
          )}
        </div>
      )}
    </article>
  );
}
