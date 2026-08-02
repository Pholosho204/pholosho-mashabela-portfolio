"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Internships and Work-Integrated Learning that turned academic skills into practical delivery."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-px" />

          <ul className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-card shadow-sm sm:left-1/2 sm:-translate-x-1/2">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>

                <div
                  className={`ml-14 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {exp.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {exp.company}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                  <ul
                    className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${
                      i % 2 === 0 ? "sm:text-right" : ""
                    }`}
                  >
                    {exp.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div
                      className={`mt-3 flex flex-wrap gap-1.5 ${
                        i % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
