import ContactForm from "./ContactForm";

export default function Contacts() {
  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-12">
      <section className="ml-4 space-y-2">
        <div>
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">Contact</span>
        </div>

        <div>
          <a
            className="ml-4 underline"
            target="_blank"
            href="https://github.com/AbnocChinwads"
          >
            GitHub
          </a>
        </div>
        <div>
          <a
            className="ml-4 underline"
            target="_blank"
            href="https://www.linkedin.com/in/daniel-mctighe-a63952195/"
          >
            LinkedIn
          </a>
        </div>
        <div className="ml-4">
          <span className="text-green-200">{">"}</span>{" "}
          <span className="font-bold">Email</span>
        </div>
        <div className="ml-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
