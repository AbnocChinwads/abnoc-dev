import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();

    const { email, subject, message, website } = body;

    if (website) {
      return Response.json({ success: true });
    }

    if (!email || !subject || !message) {
      return Response.json(
        { error: "Missing requried fields" },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
        return Response.json({ error: "Message too long" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Abnoc Portfolio <hello@abnoc.dev>",
      to: "hello@abnoc.dev",
      replyTo: email,
      subject: subject,
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
