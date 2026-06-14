import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-12">
      {/* HERO */}
      <section className="space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">AbnocChinwads</span>
        </div>

        <p className="ml-4">
          Developer focused on web applications, self-hosted infrastructure, and
          currently learning full-stack systems with Next.js and Node.js.
        </p>
      </section>

      {/* POSITIONING */}
      <section className="space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">What I build</span>
        </div>

        <p className="ml-4">
          I build and self-host web applications while learning modern
          full-stack development through practical projects and infrastructure
          work.
        </p>
      </section>

      {/* FEATURED WORK */}
      <section className="space-y-4">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">Featured Projects</span>
        </div>
        <div className="ml-4">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            variant="compact"
          />
        ))}
        </div>

        <Link href="/projects" className="ml-4">[View all projects]</Link>
      </section>
    </main>
  );
}
