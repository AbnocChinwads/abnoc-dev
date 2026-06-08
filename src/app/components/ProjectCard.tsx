type ProjectCardProps = {
  title: string;
  description: string;
  tech?: string;
  learning?: string;
  github?: string;
  live?: string;
  tags?: string[];
  variant?: "full" | "compact";
};

export default function ProjectCard({
  title,
  description,
  tech,
  learning,
  github,
  live,
  tags,
  variant = "full",
}: ProjectCardProps) {
  return (
    <section>
      <h4>{title}</h4>

      {tags && tags.length > 0 && (
        <div>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}

      <p>{description}</p>

      {variant === "full" && (
        <>
          {tech && (
            <p>
              <strong>Tech:</strong> {tech}
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
