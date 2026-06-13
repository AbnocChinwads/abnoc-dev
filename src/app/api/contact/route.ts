import { Resend } from "resend";

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
        const body = await req.json();

        const { email, subject, message } = body;

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
