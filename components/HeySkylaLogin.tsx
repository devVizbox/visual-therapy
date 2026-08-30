"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { unlockHeySkyla } from "@/app/hey-skyla/actions";

export default function HeySkylaLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await unlockHeySkyla(password);
      if (result.ok) {
        router.refresh();
        return;
      }
      setError(result.error);
    });
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
        Testing access
      </p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">Hey Skyla</h1>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Skyla Knows Your Learning Assistant. Enter the password to open the AI assistant on this
        page.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="skyla-password" className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="skyla-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none ring-blue-700/20 focus:border-blue-700 focus:ring-2"
            placeholder="Enter test password"
            required
          />
        </div>

        {error ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending || password.length === 0}
          className="w-full rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Checking…" : "Unlock Hey Skyla"}
        </button>
      </form>
    </div>
  );
}
