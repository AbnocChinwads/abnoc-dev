
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
        <TerminalHeader>
          Who Am I?
        </TerminalHeader>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I'm a self-taught developer looking to
          move from retail into my first professional
          software development role. I've studied
          web development through online courses
          and continue developing my knowledge
          through personal projects.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          My main interests are backend development
          and databases, particularly using
          JavaScript, Node.js, Express and
          PostgreSQL.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I learn primarily through practical
          development, experimenting with different
          approaches, investigating problems and
          improving functionality as my projects
          develop.
        </p>
      </section>

      <section className="space-y-2">
        <TerminalHeader>
          Current Focus
        </TerminalHeader>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I'm continuing to develop a browser-based
          resource management game involving
          automated simulation, resource production,
          building management and persistent player
          data.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          This project has given me experience
          working through increasingly complex
          technical problems, understanding how
          different systems interact and refining
          implementations as requirements change.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I'm also developing my knowledge of React,
          Next.js and TypeScript through this
          portfolio, alongside learning HTML5 Canvas
          for browser-based game development.
        </p>
      </section>

      <section className="space-y-2">
        <TerminalHeader>
          Skills/Stack
        </TerminalHeader>

        <TerminalList>
          <TerminalListItem>
            Frontend: HTML, CSS, JavaScript,
            Bootstrap, EJS
          </TerminalListItem>

          <TerminalListItem>
            Backend: Node.js, Express
          </TerminalListItem>

          <TerminalListItem>
            Databases: PostgreSQL, SQL
          </TerminalListItem>

          <TerminalListItem>
            Infrastructure: Ubuntu/Linux,
            Docker, reverse proxies
          </TerminalListItem>

          <TerminalListItem>
            Tools and deployment: Git,
            GitHub Actions, self-hosting
          </TerminalListItem>

          <TerminalListItem>
            Currently learning: React,
            Next.js, TypeScript, HTML5 Canvas
          </TerminalListItem>
        </TerminalList>
      </section>

      <section className="space-y-2">
        <TerminalHeader>
          What Do I Enjoy Building?
        </TerminalHeader>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I particularly enjoy applications where
          the logic behind the interface matters,
          including database interactions, resource
          calculations and systems that depend
          on one another.
        </p>

        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">
          I also enjoy the practical side of
          running applications, from deploying
          projects onto my own server to
          troubleshooting problems and maintaining
          the services they rely on.
        </p>
      </section>
    </main>
  );
}
