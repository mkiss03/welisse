import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  // Initialize Resend only at runtime
  const resend = new Resend(process.env.RESEND_API_KEY || "");
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Inter, sans-serif; line-height: 1.6; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; }
          .header { background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: #fff; padding: 24px; text-align: center; }
          .content { padding: 32px; }
          .field { margin-bottom: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; }
          .label { font-weight: 600; color: #4F46E5; margin-bottom: 4px; }
          .value { color: #374151; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Új projektigény - Welisse.hu</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Név:</div>
              <div class="value">${validatedData.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${validatedData.email}</div>
            </div>
            ${
              validatedData.phone
                ? `
            <div class="field">
              <div class="label">Telefon:</div>
              <div class="value">${validatedData.phone}</div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">Projekt típus:</div>
              <div class="value">${validatedData.projectType}</div>
            </div>
            <div class="field">
              <div class="label">Költségkeret:</div>
              <div class="value">${validatedData.budget}</div>
            </div>
            <div class="field">
              <div class="label">Üzenet:</div>
              <div class="value" style="white-space: pre-wrap;">${validatedData.message}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email using Resend
    await resend.emails.send({
      from: "Welisse Website <noreply@welisse.hu>",
      to: ["info@welisse.hu"],
      replyTo: validatedData.email,
      subject: `Új projektigény: ${validatedData.name} - ${validatedData.projectType}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: "Email elküldve!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Hiba történt az email küldése közben", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Ismeretlen hiba történt" },
      { status: 500 }
    );
  }
}
