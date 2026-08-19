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
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Portfolio Contact</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 30px;
              background-color: #f4f4f5;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 12px;
              "
            >
              <h2 style="margin-bottom: 25px; color: #111827;">
                New Portfolio Contact Message
              </h2>

              <p style="color: #374151; line-height: 1.6;">
                <strong>Name:</strong><br />
                ${name}
              </p>

              <p style="color: #374151; line-height: 1.6;">
                <strong>Email:</strong><br />
                <a
                  href="mailto:${email}"
                  style="color: #2563eb; text-decoration: none;"
                >
                  ${email}
                </a>
              </p>

              <p style="color: #374151; line-height: 1.6;">
                <strong>Subject:</strong><br />
                ${subject}
              </p>

              <hr
                style="
                  border: none;
                  border-top: 1px solid #e5e7eb;
                  margin: 25px 0;
                "
              />

              <p style="color: #374151; line-height: 1.6;">
                <strong>Message:</strong>
              </p>

              <p
                style="
                  color: #374151;
                  line-height: 1.7;
                  white-space: pre-line;
                "
              >
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