import type { Metadata } from "next";
import Image from "next/image";
import SkylaWidget from "@/components/SkylaWidget";

export const metadata: Metadata = {
  title: "Hey Skyla | Visual Therapies CIC",
  description:
    "Hey Skyla provides general information and non-medical support. It does not diagnose, treat, or replace advice from a health professional.",
  appleWebApp: {
    capable: true,
    title: "Hey Skyla",
  },
};

export default function HeySkylaPage() {
  return (
    <section className="min-h-[calc(100vh-12rem)] bg-slate-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Image
          src="/images/visual-therapies-logo.png"
          alt="Visual Therapies CIC"
          width={120}
          height={120}
          className="h-28 w-28"
        />
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-blue-700">Hey Skyla</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          General information and non-medical support
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Open Hey Skyla from the button at the bottom right of this page. You can drag it anywhere
          on the screen.
        </p>

        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <Image
            src="/hey-skyla/icon.png"
            alt="Hey Skyla"
            width={72}
            height={72}
            className="h-[72px] w-[72px] rounded-2xl"
          />
          <p className="text-sm leading-6 text-slate-600">
            Save this page to your home screen and it will use the Hey Skyla icon.
          </p>
        </div>

        <div className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm md:p-8">
          <h2 className="text-base font-bold text-slate-900">Hey Skyla disclaimer</h2>
          <p>
            Hey Skyla provides general information and non-medical support only. It does not
            diagnose, treat or provide individual medical advice, and it is not a substitute for
            advice or care from a qualified health professional. If you have concerns about your
            health, symptoms or treatment, please speak to your GP or another appropriate healthcare
            professional.
          </p>
          <p className="font-semibold text-slate-900">
            If you suspect a stroke, call 999 immediately. Learn the signs and act FAST.
          </p>
          <p>
            Hey Skyla’s multilingual content uses Google Translate. Translations may contain errors
            or inaccuracies and are not guaranteed to be completely correct. If anything is unclear,
            please check with a qualified interpreter or healthcare professional.
          </p>
        </div>
      </div>
      <SkylaWidget />
    </section>
  );
}
