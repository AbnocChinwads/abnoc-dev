import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main>
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            description={project.description}
            tech={project.tech}
            learning={project.learning}
            github={project.github}
            live={project.live}
            variant="full"
        />
      ))}
    </main>
  );
}
