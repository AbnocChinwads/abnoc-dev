import ContactForm from "./ContactForm";
import {
  TerminalHeader,
  TerminalList,
  TerminalListItem,
} from "../components/terminal";

export default function Contacts() {
  return (
    <main className="max-w-3xl mx-auto w-full px-3 sm:px-4 py-8 sm:py-10 space-y-12">
      <section className="space-y-2">
        <TerminalHeader>Contact</TerminalHeader>

        <TerminalList>
          <TerminalListItem>
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AbnocChinwads"
            >
              GitHub
            </a>
          </TerminalListItem>
          <TerminalListItem>
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/daniel-mctighe-a63952195/"
            >
              LinkedIn
            </a>
          </TerminalListItem>
        </TerminalList>
      </section>
      <section className="space-y-2">
        <TerminalHeader>Get in touch</TerminalHeader>

        <ContactForm />
      </section>
    </main>
  );
}
