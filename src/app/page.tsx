
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import {
  TerminalHeader,
  TerminalList,
} from "./components/terminal";

export default function Home() {
  const featuredProjects = projects.filter(
    (p) => p.featured
  );

  return (
    <main className="max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 space-y-12">
      {/* HERO */}
      <section className="space-y-2">
        <TerminalHeader>
          Abnoc Chinwads
        </TerminalHeader>

        <p className="ml-2 sm:ml-4">
          I'm a self-taught developer with a
          particular interest in backend development
          using JavaScript, Node.js, Express and
          PostgreSQL. I'm currently working towards
          my first professional software development
          role.
        </p>
      </section>

      {/* POSITIONING */}
      <section className="space-y-2">
        <TerminalHeader>
          What I Build
        </TerminalHeader>

        <p className="ml-2 sm:ml-4">
          I enjoy building applications involving
          server-side logic, database interaction
          and interconnected systems.
        </p>

        <p className="ml-2 sm:ml-4">
          My projects include a Path of Exile 2
          randomiser I developed independently and
          an ongoing resource management game with
          persistent data and automated simulation.
        </p>

        <p className="ml-2 sm:ml-4">
          I also maintain my own Linux server,
          where I deploy and run my applications
          using Docker and automated deployment
          workflows.
        </p>
      </section>

      {/* FEATURED WORK */}
      <section className="space-y-4">
        <TerminalHeader>
          Featured Projects
        </TerminalHeader>

        <TerminalList>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              variant="compact"
            />
          ))}
        </TerminalList>

        <Link
          href="/projects"
          className="ml-4 sm:ml-8"
        >
          [View all projects]
        </Link>
      </section>
    </main>
  );
}
