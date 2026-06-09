type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string[];
  learning?: string;
  github?: string;
  live?: string;
  variant?: "full" | "compact";
};

export default function ProjectCard({
  title,
  description,
  tech,
  learning,
  github,
  live,
  variant = "full",
}: ProjectCardProps) {
  return (
    <article className="mb-10 space-y-2">
      {/* Title line (like terminal header output) */}
      <div>
        <span className="text-green-200">{">"}</span>{" "}
        <span className="font-bold">{title}</span>
      </div>

      {/* Description */}
      <p className="ml-4">{description}</p>

      {/* Learning / reflection */}
      {learning && (
        <p className="ml-4 text-green-300">
          <span className="text-green-200">learning:</span> {learning}
        </p>
      )}

      {/* Tech tags */}
      {tech && tech.length > 0 && (
        <div className="ml-8 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="text-xs text-green-300">
              [{item}]
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      {variant === "full" && (github || live) && (
        <div className="ml-8 text-sm">
          {github && (
            <a className="mr-4 underline" href={github}>
              GitHub
            </a>
          )}
          {live && (
            <a className="underline" href={live}>
              Live
            </a>
          )}
        </div>
      )}
    </article>
  );
}
