import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { newsletterSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  // Initialize Resend only at runtime
  const resend = new Resend(process.env.RESEND_API_KEY || "");
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = newsletterSchema.parse(body);

    // Add to Resend Audience (you'll need to create an audience in Resend dashboard)
    // For now, we'll send a notification email

    await resend.emails.send({
      from: "Welisse Newsletter <noreply@welisse.hu>",
      to: ["info@welisse.hu"],
      subject: "Új newsletter feliratkozás",
      html: `
        <h2>Új feliratkozó!</h2>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Dátum:</strong> ${new Date().toLocaleString("hu-HU")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Feliratkozás sikeres!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Ez az email már fel van iratkozva" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Ismeretlen hiba történt" },
      { status: 500 }
    );
  }
}
