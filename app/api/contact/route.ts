import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  message?: string;
  website?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (data.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const firstName = data.firstName?.trim() ?? "";
  const lastName = data.lastName?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const role = data.role?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (firstName.length < 2) {
    return NextResponse.json({ error: "Please enter your first name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
  }

  const apiKey = process.env.MAILJET_API_KEY?.trim();
  const secret = process.env.MAILJET_SECRET_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || "carl@visualtherapies.co.uk";
  const from = process.env.MAILJET_FROM_EMAIL?.trim() || "info@vizboxltd.co.uk";

  if (!apiKey || !secret) {
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email carl@visualtherapies.co.uk." },
      { status: 503 },
    );
  }

  const name = [firstName, lastName].filter(Boolean).join(" ");
  const subject = `Visual Therapies enquiry — ${name}`;
  const text = [
    `From: ${name} <${email}>`,
    role ? `I am a: ${role}` : "",
    "",
    message,
  ]
    .filter((line) => line !== "")
    .join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.5">
      <p style="margin:0 0 12px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#1d4ed8">Visual Therapies CIC</p>
      <h1 style="margin:0 0 16px;font-size:22px">New message from ${escapeHtml(name)}</h1>
      <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${role ? `<p style="margin:0 0 8px"><strong>I am a:</strong> ${escapeHtml(role)}</p>` : ""}
      <p style="margin:16px 0 0;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  const auth = Buffer.from(`${apiKey}:${secret}`).toString("base64");
  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: from, Name: "Visual Therapies CIC" },
          To: [{ Email: to }],
          ReplyTo: { Email: email, Name: name },
          Subject: subject,
          TextPart: text,
          HTMLPart: html,
        },
      ],
    }),
  });

  const body = (await res.json().catch(() => null)) as { Messages?: Array<{ Status?: string }> } | null;
  if (!res.ok || body?.Messages?.[0]?.Status === "error") {
    return NextResponse.json(
      { error: "Could not send your message. Please email carl@visualtherapies.co.uk." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
