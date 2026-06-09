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
    <section>
      <h4>{title}</h4>

      <p>{description}</p>

      {variant === "full" && (
        <>
          {tech && (
            <p>
              <strong>Tech:</strong>
              {tech && tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs border rounded-md bg-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </p>
          )}
          {learning && (
            <p>
              <strong>Learning:</strong> {learning}
            </p>
          )}

          {(github || live) && (
            <section>
              <h5>Links</h5>

              <ul>
                {github && (
                  <li>
                    <a href={github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </li>
                )}

                {live && (
                  <li>
                    <a href={live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </li>
                )}
              </ul>
            </section>
          )}
        </>
      )}
    </section>
  );
}
