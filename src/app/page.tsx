import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main>
      {/* HERO */}
      <section>
        <h1>AbnocChinwads</h1>

        <p>
          Developer focused on web applications, self-hosted infrastructure, and
          currently learning full-stack systems with Next.js and Node.js.
        </p>
      </section>

      {/* POSITIONING */}
      <section>
        <h3>What I build</h3>
        <p>
          I build and self-host web applications while learning modern
          full-stack development through practical projects and infrastructure
          work.
        </p>
      </section>

      {/* FEATURED WORK */}
      <section>
        <h3>Featured Projects</h3>

        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            variant="compact"
          />
        ))}

        <Link href="/projects">View all projects</Link>
      </section>
    </main>
  );
}
