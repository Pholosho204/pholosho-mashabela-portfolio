"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/data";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setStatus("loading");

  const form = e.currentTarget;

  const formData = new FormData(form);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send message");
    }

    setStatus("success");

    form.reset();

    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus("error");

    setTimeout(() => {
      setStatus("idle");
    }, 4000);
  }
}

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect"
          description="Open to graduate software development roles, internships, and junior developer opportunities. Feel free to reach out."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
                Details
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    {personalInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {personalInfo.location}
                </li>
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Github className="h-4 w-4" />
                    </span>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Opportunity or message topic"
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell me a bit about the role or how I can help…"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try email instead.
                </p>
              )}
              {status === "success" && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Thanks — I&apos;ll get back to you soon.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
