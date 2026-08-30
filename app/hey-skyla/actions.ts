"use server";

import { cookies } from "next/headers";
import { SKYLA_ACCESS_COOKIE } from "@/lib/skyla-auth";

export type UnlockResult = { ok: true } | { ok: false; error: string };

export async function unlockHeySkyla(password: string): Promise<UnlockResult> {
  const expected = process.env.SKYLA_TEST_PASSWORD?.trim();
  if (!expected) {
    return { ok: false, error: "Access is not configured. Set SKYLA_TEST_PASSWORD on the server." };
  }

  if (password.trim() !== expected) {
    return { ok: false, error: "Incorrect password. Please try again." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SKYLA_ACCESS_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/hey-skyla",
  });

  return { ok: true };
}

export async function lockHeySkyla(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SKYLA_ACCESS_COOKIE);
}
