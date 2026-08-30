"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import SkylaWidget from "@/components/SkylaWidget";
import { lockHeySkyla } from "@/app/hey-skyla/actions";

function SkylaWidgetHint({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="hey-skyla-hint fixed bottom-28 right-6 z-[9998] max-w-[240px] animate-[heySkylaHintIn_0.5s_ease-out]"
      role="status"
      aria-live="polite"
    >
      <div className="relative rounded-2xl border-2 border-blue-600 bg-white px-4 py-3 shadow-xl shadow-blue-900/15">
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Start here</p>
        <p className="mt-1 text-sm font-semibold text-slate-900">Open Hey Skyla</p>
        <p className="mt-1 text-xs leading-5 text-slate-600">
          Tap the glowing button below. You can drag it anywhere.
        </p>
        <button
          type="button"
          onClick={onDismiss}
          className="mt-2 text-xs font-medium text-blue-700 hover:text-blue-900"
        >
          Got it
        </button>
        <span
          className="hey-skyla-hint-arrow absolute -bottom-3 right-8 h-4 w-4 rotate-45 border-b-2 border-r-2 border-blue-600 bg-white"
          aria-hidden
        />
      </div>

      <div className="hey-skyla-hint-beacon pointer-events-none absolute -bottom-16 right-3 flex h-16 w-16 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-blue-500/25 animate-ping" />
        <span className="absolute inset-2 rounded-full bg-blue-500/20 animate-pulse" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl text-white shadow-lg ring-4 ring-blue-300/60">
          💬
        </span>
      </div>
    </div>
  );
}

export default function HeySkylaUnlocked() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    document.body.classList.add("hey-skyla-active");
    return () => document.body.classList.remove("hey-skyla-active");
  }, []);

  const handleLock = () => {
    startTransition(async () => {
      await lockHeySkyla();
      router.refresh();
    });
  };

  return (
    <>
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
          AI assistant preview
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Hey Skyla</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Skyla Knows Your Learning Assistant. Use the floating icon to open the assistant. You can
          drag it anywhere on the page.
        </p>

        <div className="mt-6 flex items-start gap-4 rounded-xl border border-blue-200 bg-blue-50 px-4 py-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl text-white shadow-md ring-4 ring-blue-200 animate-pulse">
            💬
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-950">Look bottom-right</p>
            <p className="mt-1 text-sm text-blue-900">
              The glowing <strong>Hey Skyla</strong> button sits in the corner of your screen. Tap it
              to open your learning assistant.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLock}
          disabled={pending}
          className="mt-6 text-sm font-medium text-slate-500 underline-offset-2 hover:text-slate-700 hover:underline disabled:opacity-60"
        >
          {pending ? "Locking…" : "Lock this page"}
        </button>
      </div>

      {showHint ? <SkylaWidgetHint onDismiss={() => setShowHint(false)} /> : null}
      <SkylaWidget />
    </>
  );
}
