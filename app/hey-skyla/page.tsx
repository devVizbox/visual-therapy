import type { Metadata } from "next";
import { cookies } from "next/headers";
import HeySkylaLogin from "@/components/HeySkylaLogin";
import HeySkylaUnlocked from "@/components/HeySkylaUnlocked";
import { isSkylaAccessCookie, SKYLA_ACCESS_COOKIE } from "@/lib/skyla-auth";

export const metadata: Metadata = {
  title: "Hey Skyla — Visual Therapies CIC",
  description: "Password-protected preview of the Hey Skyla learning AI assistant.",
  robots: { index: false, follow: false },
};

export default async function HeySkylaPage() {
  const cookieStore = await cookies();
  const unlocked = isSkylaAccessCookie(cookieStore.get(SKYLA_ACCESS_COOKIE)?.value);

  return (
    <section className="min-h-[calc(100vh-12rem)] bg-slate-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {unlocked ? <HeySkylaUnlocked /> : <HeySkylaLogin />}
      </div>
    </section>
  );
}
