"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education } from "@/lib/data";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export function Education() {
  const edu = education[0];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="A complete Computer Science diploma focused on software development, with all coursework finished."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          <div className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {edu.qualification}
                  </h3>
                  {edu.focus && (
                    <p className="text-sm text-primary">Focus: {edu.focus}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground sm:text-right">
                {edu.period}
              </p>
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Award className="h-4 w-4 text-primary" />
                Key details
              </div>
              <ul className="space-y-2">
                {edu.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                Relevant coursework
              </div>
              <ul className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
