"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;

    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    form.reset();
    setLoading(false);
    alert("Message sent");
  }

  return (
    <form className="ml-4 space-y-2" onSubmit={handleSubmit}>
      <input name="email" placeholder="Your email" className="border p-1" />
      <input name="subject" placeholder="Subject" className="border p-1" />
      <textarea name="message" placeholder="Message" className="border p-1" />

      <button type="submit">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}