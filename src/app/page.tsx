import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import {
  TerminalHeader,
  TerminalList,
  TerminalListItem,
} from "./components/terminal";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-12">
      {/* HERO */}
      <section className="space-y-2">
        <TerminalHeader>Abnoc Chinwads</TerminalHeader>

        <p className="ml-4">
          Self-taught developer building and deploying real-world projects to
          grow from retail into software engineering.
        </p>
      </section>

      {/* POSITIONING */}
      <section className="space-y-2">
        <TerminalHeader>What I build</TerminalHeader>
        
        <p className="ml-4">
          I build web applications and backend systems, then deploy and maintain
          them on my own infrastructure. Each project is an opportunity to learn
          new technologies while gaining experience across the full development
          lifecycle.
        </p>
      </section>

      {/* FEATURED WORK */}
      <section className="space-y-4">
        <TerminalHeader>Featured Projects</TerminalHeader>
        
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

        <Link href="/projects" className="ml-8">
          [View all projects]
        </Link>
      </section>
    </main>
  );
}
