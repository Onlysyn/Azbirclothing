"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-sm border border-dark/15 bg-white px-4 py-3 text-sm text-dark placeholder:text-dark/40 transition-colors focus:border-green focus:outline-none focus:ring-2 focus:ring-green/20";

const labelClass = "mb-1.5 block text-sm font-medium text-dark";

const CONTACT_METHODS = ["WhatsApp", "Call", "Email"] as const;
type ContactMethod = (typeof CONTACT_METHODS)[number];

export default function InquiryForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod | "">("");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (!formspreeId) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Please add NEXT_PUBLIC_FORMSPREE_ID to your environment.",
      );
      return;
    }

    if (!contactMethod) {
      setStatus("error");
      setErrorMessage("Please select a preferred contact method.");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.contactMethod = contactMethod;

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(
          body?.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      form.reset();
      setContactMethod("");
    } catch (err) {
      setStatus("error");
      if (err instanceof TypeError) {
        setErrorMessage(
          "Unable to reach the server. Please check your connection and try again.",
        );
      } else {
        setErrorMessage(
          err instanceof Error ? err.message : "Something went wrong.",
        );
      }
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-sm border-2 border-gold/40 bg-cream px-6 py-10 text-center"
        role="status"
      >
        <p className="font-display text-2xl font-semibold text-green">
          Thank you for your inquiry
        </p>
        <p className="mt-3 text-dark/75">
          We have received your request and will contact you shortly via your
          preferred method.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-green underline-offset-4 hover:text-gold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="+234 800 000 0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="branch" className={labelClass}>
            Select Branch <span className="text-gold">*</span>
          </label>
          <select id="branch" name="branch" required className={inputClass}>
            <option value="">Choose a branch</option>
            <option value="Kano">Kano</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Abuja">Abuja</option>
          </select>
        </div>
        <div>
          <label htmlFor="garmentType" className={labelClass}>
            Garment Type <span className="text-gold">*</span>
          </label>
          <select
            id="garmentType"
            name="garmentType"
            required
            className={inputClass}
          >
            <option value="">Choose a garment</option>
            <option value="Kaftan">Kaftan</option>
            <option value="Agbada">Agbada</option>
            <option value="Emirati Jallabiya">Emirati Jallabiya</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="occasion" className={labelClass}>
          Occasion <span className="font-normal text-dark/50">(optional)</span>
        </label>
        <input
          id="occasion"
          name="occasion"
          type="text"
          className={inputClass}
          placeholder="Wedding, Eid, corporate event…"
        />
      </div>

      <div>
        <label htmlFor="specialRequests" className={labelClass}>
          Special Requests
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Fabric preferences, sizing notes, timeline, or any other details…"
        />
      </div>

      <fieldset>
        <legend className={labelClass}>
          Preferred Contact Method <span className="text-gold">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-4">
          {CONTACT_METHODS.map((method) => (
            <label
              key={method}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-sm border bg-white px-4 py-2.5 text-sm text-dark transition-colors ${
                contactMethod === method
                  ? "border-green bg-green/5"
                  : "border-dark/15"
              }`}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={contactMethod === method}
                onChange={() => setContactMethod(method)}
                className="accent-green"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p className="rounded-sm bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}
