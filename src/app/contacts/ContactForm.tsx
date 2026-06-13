"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const newErrors: Record<string, string> = {};

    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    if (!data.email) newErrors.email = "Please enter your email address.";
    if (!data.subject) newErrors.subject = "Please enter a subject.";
    if (!data.message) newErrors.message = "Please enter a message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      form.reset();
      alert("Message sent");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="ml-4 space-y-2" onSubmit={handleSubmit}>
      <div>
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="border p-1"
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
      </div>
      <div>
        <input
          name="subject"
          placeholder="Subject"
          required
          minLength={3}
          className="border p-1"
        />
        {errors.subject && (
          <p className="text-red-400 text-sm">{errors.subject}</p>
        )}
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          required
          minLength={10}
          className="border p-1"
        />
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message}</p>
        )}
      </div>

      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
      />
      <div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
