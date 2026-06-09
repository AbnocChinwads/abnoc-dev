export default function About() {
  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-12">
      <div>
        <span className="text-green-200">{">"}</span>{" "}
        <span className="font-bold">About</span>
      </div>

      <section className="space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">Who am I?</span>
        </div>

        <p className="ml-4">
          Hi, I go by AbnocChinwads on GitHub. I am a junior full-stack
          developer looking to break into the developer space, I enjoy learning
          new tooling systems by building a project or two with them.
        </p>

        <p className="ml-4">
          Recently I wanted to learn how to self-host my own web apps as live
          services, so I built my own home server PC and learnt Docker. Then I
          learned a little more Linux to connect to it securely via SSH and to
          ensure the server itself maintained a robust and safe environment for
          my projects.
        </p>
      </section>

      <section className="space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">Current Focus</span>
        </div>

        <p className="ml-4">
          I'm currently building this portfolio site using Next.js. I'm also
          deploying updates to a live server using Git and GitHub workflows,
          which my other self-hosted projects currently utilise.
        </p>

        <p className="ml-4">
          My current development work is split between improving this portfolio,
          maintaining existing projects, and expanding my self-hosted
          infrastructure.
        </p>
      </section>

      <section className="space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">Skills/Stacks</span>
        </div>

        <p className="ml-4">
          Primarily I have worked with base HTML, CSS, and JS. Recently I built
          a project using Node.js and Express.Js, with a PostgreSQL database,
          which I maintain myself through the use of PGAdmin4.
        </p>

        <p className="ml-4">
          I have worked with Docker for containerisation and deployment of
          applications, along with Linux server management for maintaining and
          securing my home server environment.
        </p>
      </section>

      <section className="space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">What do I enjoy building?</span>
        </div>

        <p className="ml-4">
          Anything that challenges me to learn new structures or tools, projects
          that relate to my interests
        </p>
      </section>
    </main>
  );
}
