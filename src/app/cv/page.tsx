"use client";

import { cv } from "../data/cv";
import { projects } from "../data/projects";
import {
  TerminalHeader,
  TerminalList,
  TerminalListItem,
} from "../components/terminal";

export default function CV() {
  const orderedProjects = [
    ...projects.filter((p) => p.title.includes("Infrastructure")),
    ...projects.filter((p) => p.title.includes("PoE2")),
    ...projects.filter((p) => p.title.includes("Resource")),
    ...projects.filter((p) => p.title.includes("Portfolio")),
  ];

  function handleDownloadPDF() {
    window.print();
  }

  return (
    <main className="max-w-3xl mx-auto w-full px-3 sm:px-6 py-8 sm:py-10 space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="hidden print:block mb-3 sm:mb-6">
        <h1 className="text-2xl font-bold">Daniel McTighe</h1>
        <p className="text-sm">Junior Full-Stack / Backend Developer</p>
        <p className="text-xs">
          abnoc.dev · github.com/AbnocChinwads · LinkedIn
        </p>
      </div>

      <div className="space-y-2 print:hidden">
        <TerminalHeader>Curriculum Vitae</TerminalHeader>

        <div className="ml-2 sm:ml-4 flex gap-4 text-sm sm:text-base leading-relaxed">
          <button onClick={handleDownloadPDF} className="hover:underline">
            [Download PDF]
          </button>
        </div>
      </div>

      {/* Profile */}
      <section className="space-y-2">
        <TerminalHeader>Profile</TerminalHeader>
        <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">{cv.profile}</p>
      </section>

      {/* Projects */}
      <section className="space-y-2">
        <TerminalHeader>Projects</TerminalHeader>

        {orderedProjects.map((project) => (
          <div className="mb-6 ml-2 sm:ml-4" key={project.title}>
            <p className="font-bold text-sm sm:text-base leading-relaxed">{project.title}</p>

            <p className="text-sm sm:text-base leading-relaxed">{project.description}</p>

            <p className="text-sm sm:text-base leading-relaxed">[{project.stack.join(" · ")}]</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="space-y-2">
        <TerminalHeader>Technical Skills</TerminalHeader>

        <TerminalList>
          <TerminalListItem>Frontend: {cv.skills.frontend}</TerminalListItem>
          <TerminalListItem>Backend: {cv.skills.backend}</TerminalListItem>
          <TerminalListItem>Databases: {cv.skills.databases}</TerminalListItem>
          <TerminalListItem>
            DevOps: {cv.skills.infrastructure}
          </TerminalListItem>
          <TerminalListItem>Other: {cv.skills.other}</TerminalListItem>
        </TerminalList>
      </section>

      {/* Experience */}
      <section className="space-y-2">
        <TerminalHeader>Experience</TerminalHeader>

        {cv.experience.map((job) => (
          <div key={job.title} className="mb-6 ml-2 sm:ml-4">
            <p className="ml-2 sm:ml-4 font-bold text-sm sm:text-base leading-relaxed">{job.title}</p>

            <p className="ml-2 sm:ml-4 text-sm sm:text-base leading-relaxed">{job.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="space-y-2">
        <TerminalHeader>Education</TerminalHeader>

        <TerminalList>
          {cv.education.map((item) => (
            <TerminalListItem key={item.title}>
              {item.title} — {item.description}
            </TerminalListItem>
          ))}
        </TerminalList>
      </section>

      {/* Interests */}
      <section className="space-y-2">
        <TerminalHeader>Interests</TerminalHeader>
        <TerminalList>
          {cv.interests.map((interest, index) => (
            <TerminalListItem key={index}>{interest}</TerminalListItem>
          ))}
        </TerminalList>
      </section>
    </main>
  );
}
