import {
  TerminalHeader,
  TerminalList,
  TerminalListItem,
} from "../components/terminal";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 space-y-12">
      <TerminalHeader>About</TerminalHeader>

      <section className="space-y-2">
        <TerminalHeader>Who Am I?</TerminalHeader>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I am a self-taught developer transitioning from retail into software
          engineering. I have previously studied full-stack development through
          structured online courses and an online degree program, and I am
          currently developing my skills through building and deploying personal
          projects.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          My focus is learning by doing — building full-stack applications,
          backend systems, and self-hosted infrastructure that I can run and
          maintain myself.
        </p>
      </section>

      <section className="space-y-2">
        <TerminalHeader>Current Focus</TerminalHeader>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I am currently building and improving this portfolio while expanding
          my self-hosted infrastructure. I am also strengthening my full-stack
          skills through projects using Next.js, Node.js, and PostgreSQL.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          A key focus right now is improving how I structure, deploy, and
          maintain production-like applications.
        </p>
      </section>

      <section className="space-y-2">
        <TerminalHeader>Skills/Stack</TerminalHeader>

        <TerminalList>
          <TerminalListItem>
            Frontend: HTML, CSS, JavaScript, Next.js
          </TerminalListItem>
          <TerminalListItem>
            Backend: Node.js, Express
          </TerminalListItem>
          <TerminalListItem>
            Databases: PostgreSQL
          </TerminalListItem>
          <TerminalListItem>
            Infrastructure: Docker, Linux, self-hosting
          </TerminalListItem>
          <TerminalListItem>
            Deployment: GitHub Actions, CI/CD, reverse proxies
          </TerminalListItem>
        </TerminalList>
      </section>

      <section className="space-y-2">
        <TerminalHeader>What Do I Enjoy Building?</TerminalHeader>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I enjoy building systems that go beyond the frontend — especially
          backend logic, data-driven applications, and deployment
          infrastructure.
        </p>
        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I am particularly interested in projects I can run and maintain
          myself, where I can see the full lifecycle from development to
          production.
        </p>
      </section>
    </main>
  );
}
