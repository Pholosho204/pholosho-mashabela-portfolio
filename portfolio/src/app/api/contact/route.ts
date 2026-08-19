import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Please fill in all fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: [process.env.CONTACT_EMAIL!],

      replyTo: email,

      subject: `[Portfolio] ${subject}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 30px;">
            <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 12px;">
              
              <h2 style="margin-bottom: 20px;">
                New Portfolio Contact Message
              </h2>

              <p>
                <strong>Name:</strong><br />
                ${name}
              </p>

              <p>
                <strong>Email:</strong><br />
                <a href="mailto:${email}">
                  ${email}
                </a>
              </p>

              <p>
                <strong>Subject:</strong><br />
                ${subject}
              </p>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

              <p>
                <strong>Message:</strong>
              </p>

              <p style="white-space: pre-line;">
                ${message}
              </p>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}