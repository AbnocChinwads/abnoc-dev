
export const projects = [
  {
    title: "abnoc.dev Portfolio",
    description:
      "My portfolio uses Next.js, React and TypeScript, with a contact form handled by a server-side API route. I use it to gain experience with these tools and deploy it in Docker on my Ubuntu server.",
    stack: ["Next.js", "React", "TypeScript", "Docker"],
    context:
      "Learning React components, Next.js routing and TypeScript while maintaining a site for my projects and CV.",
    github: "https://github.com/AbnocChinwads/abnoc-dev",
    live: "https://abnoc.dev",
    featured: false,
  },
  {
    title: "PoE2 Build Randomiser",
    description:
      "A Path of Exile 2 randomiser I built independently with Node.js, Express, EJS and PostgreSQL. It chooses a random class or a skill gem for the selected tier.",
    stack: ["Node.js", "Express", "EJS", "PostgreSQL"],
    context:
      "Built through experimentation, connecting Express routes and form submissions to PostgreSQL data and server-rendered results.",
    github: "https://github.com/AbnocChinwads/poe-2-randomiser",
    live: "https://buildroll.abnoc.dev",
    featured: true,
  },
  {
    title: "Resource Management Simulation Game",
    description:
      "An ongoing browser-based resource management game featuring persistent player settlements, worker management, production chains and a timed server-side simulation that handles resource production, consumption and building maintenance.",
    stack: ["Node.js", "Express", "EJS", "PostgreSQL"],
    context:
      "I've worked through the design and implementation of interconnected gameplay systems, investigated problems and refined functionality as the project has grown. This has involved database migrations, persistent player data, authentication and improving the performance of simulation processes.",
    github: "https://github.com/AbnocChinwads/resource-management-game",
    live: "https://icecream.abnoc.dev",
    featured: true,
  },
  {
    title: "Self-Hosted Infrastructure",
    description:
      "I maintain an Ubuntu server and Docker containers for my personal applications, with GitHub Actions workflows to build images and trigger deployments.",
    stack: ["Ubuntu", "Docker", "GitHub Actions"],
    context:
      "Keeping my projects running gives me regular practice with deployment and troubleshooting.",
    github: "",
    live: "",
    featured: true,
  },
];
