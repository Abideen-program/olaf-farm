"use server";

import { createClient } from "@supabase/supabase-js";
import { waitlistSchema } from "@/lib/validators";

export type WaitlistState = { ok: boolean; message: string };

export async function joinWaitlist(_prev: WaitlistState, formData: FormData): Promise<WaitlistState> {
  // Honeypot: real visitors never fill this hidden field.
  if (String(formData.get("website") ?? "").length > 0) {
    return { ok: true, message: "You are on the list." };
  }

  const parsed = waitlistSchema.safeParse({
    name: String(formData.get("name") ?? "") || undefined,
    contact: String(formData.get("contact") ?? ""),
    interest: String(formData.get("interest") ?? ""),
  });
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Check your details and try again." };
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[waitlist] Supabase not configured. Sign-up:", parsed.data);
      return { ok: true, message: "You are on the list. We will message you when the first batch is ready." };
    }
    return { ok: false, message: "Sign-ups are not available right now. Please try again later." };
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from("waitlist").insert({
    name: parsed.data.name ?? null,
    contact: parsed.data.contact,
    interest: parsed.data.interest,
  });
  if (error) {
    console.error("[waitlist] insert failed:", error.message);
    return { ok: false, message: "We could not save your details. Please try again in a moment." };
  }
  return { ok: true, message: "You are on the list. We will message you when the first batch is ready." };
}
