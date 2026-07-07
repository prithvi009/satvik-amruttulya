import { NextRequest, NextResponse } from "next/server";
import { SITE } from "@/lib/config";

export const runtime = "nodejs";

/** Turn the lead payload into a readable Telegram message for the team. */
function formatMessage(p: Record<string, unknown>): string {
  const utm = (p.utm && typeof p.utm === "object" ? (p.utm as Record<string, unknown>) : {}) ?? {};
  const utmLine = Object.entries(utm)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");

  return [
    `🫖 *New franchise lead — ${SITE.name}*`,
    ``,
    `*Name:* ${p.name ?? "—"}`,
    `*Mobile:* ${p.mobile ?? "—"}`,
    `*City:* ${p.city ?? "—"}`,
    `*Budget:* ${p.budget ?? "—"}`,
    `*Shop:* ${p.shop ?? "—"}`,
    `*Timeline:* ${p.timeline ?? "—"}`,
    ``,
    `_Page:_ ${p.page ?? "—"}`,
    `_Source:_ ${utmLine || "direct"}`,
  ].join("\n");
}

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

  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChatId = process.env.TELEGRAM_CHAT_ID;
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  // Preferred (free, no-limit, mobile) path: push each lead to the team's
  // phones via a Telegram bot. Needs TELEGRAM_BOT_TOKEN (from @BotFather) and
  // TELEGRAM_CHAT_ID (the group/DM to notify). No account fees, no caps.
  if (tgToken && tgChatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: tgChatId,
          text: formatMessage(payload),
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      });
      if (!res.ok) {
        console.error("[lead] telegram responded", res.status, "— payload:", payload);
        return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
      }
      return NextResponse.json({ ok: true, delivered: true });
    } catch (err) {
      console.error("[lead] telegram fetch failed", err, "— payload:", payload);
      return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
    }
  }

  // Optional advanced path: forward raw JSON to an n8n/GHL/etc. webhook.
  if (webhookUrl) {
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

  // Nothing configured yet (e.g. local dev). Log so the lead isn't silently
  // lost, and still return success so the UI shows the thank-you state.
  console.log("[lead] no delivery configured (set TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID) — payload:", payload);
  return NextResponse.json({ ok: true, delivered: false });
}
