"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 hover:border-slate-300";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("submitting");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      email: String(form.get("email") ?? ""),
      role: String(form.get("role") ?? ""),
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => null)) as { error?: string } | null;
      if (!res.ok) {
        setStatus("error");
        setError(body?.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      formElement.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Message sent</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Thank you. We&apos;ll reply to the email address you gave us.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Send a Message</h2>
      <p className="text-slate-500 text-sm mb-8">We&apos;ll get back to you as soon as possible.</p>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1.5">
              First name
            </label>
            <input id="first-name" name="firstName" type="text" required minLength={2} placeholder="Jane" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Last name
            </label>
            <input id="last-name" name="lastName" type="text" placeholder="Smith" className={fieldClass} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email address
          </label>
          <input id="email" name="email" type="email" required placeholder="jane@example.com" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1.5">
            I am a...
          </label>
          <select id="role" name="role" className={fieldClass} defaultValue="">
            <option value="">Please select</option>
            <option>Stroke survivor</option>
            <option>Caregiver</option>
            <option>Volunteer</option>
            <option>Potential partner / sponsor</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            placeholder="How can we help you?"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full bg-blue-700 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-800 shadow-md disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
