"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real applications built through internships, team collaboration, and hackathons — focused on solving practical problems."
        />

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/25 hover:shadow-lg"
            >
              <div className="grid lg:grid-cols-[1fr_1.1fr]">
                {/* Visual / number side */}
                <div className="relative flex min-h-[200px] flex-col justify-between bg-gradient-to-br from-muted to-card p-6 sm:p-8 lg:min-h-full">
                  <div>
                    <span className="text-5xl font-bold tracking-tighter text-primary/20 sm:text-6xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          project.status === "in-progress"
                            ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                            : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        }`}
                      >
                        {project.status === "in-progress"
                          ? "In development"
                          : "Completed"}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="rounded-md border border-border bg-background/80 px-2 py-1 text-xs text-muted-foreground">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content side */}
                <div className="flex flex-col p-6 sm:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.overview}
                  </p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Problem
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Key features
                      </h4>
                      <ul className="mt-1.5 space-y-1">
                        {project.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {(project.lessons || project.challenges) && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.lessons && (
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                              Lessons
                            </h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {project.lessons}
                            </p>
                          </div>
                        )}
                        {project.challenges && (
                          <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                              Challenges
                            </h4>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {project.challenges}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
