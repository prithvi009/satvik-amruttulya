import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const payload = {
    ...body,
    receivedAt: new Date().toISOString(),
    ip: req.headers.get("x-forwarded-for") ?? undefined,
    userAgent: req.headers.get("user-agent") ?? undefined,
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    // No webhook configured yet (e.g. local dev before n8n/GHL is wired up).
    // Log so the lead isn't silently lost, and still return success so the
    // UI shows the thank-you state.
    console.log("[lead] LEAD_WEBHOOK_URL not set — payload:", payload);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[lead] webhook responded", res.status);
      return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] webhook fetch failed", err);
    return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
  }
}
