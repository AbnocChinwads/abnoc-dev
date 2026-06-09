import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-12">
      <div>
        <span className="text-green-200">{">"}</span>{" "}
        <span className="font-bold">Projects</span>
      </div>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            learning={project.learning}
            github={project.github}
            live={project.live}
            variant="full"
          />
        ))}
      </div>
    </main>
  );
}
