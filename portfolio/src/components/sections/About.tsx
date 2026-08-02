"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Technical foundation",
    text: "Solid grounding in full-stack development across Java, PHP, Python, JavaScript, and React Native, with hands-on AWS experience.",
  },
  {
    icon: Users,
    title: "Collaborative mindset",
    text: "Proven ability to contribute in team projects — from hackathons to internships — delivering clean, reusable code and meeting deadlines.",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving focus",
    text: "I enjoy turning real operational needs into practical software, whether tracking tenders or supporting sustainable behaviour with AI features.",
  },
  {
    icon: Target,
    title: "Growth-oriented",
    text: "Actively completing Work-Integrated Learning and seeking graduate and junior roles where I can keep learning while contributing from day one.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Building software that solves real problems"
          description="A motivated Computer Science graduate with completed coursework, practical internship experience, and a genuine interest in full-stack and mobile development."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              I am{" "}
              <span className="font-medium text-foreground">
                Pholosho Bethuel Mashabela
              </span>
              , a final-year Computer Science diploma student at Tshwane
              University of Technology. All academic coursework is complete, and
              I am currently finishing Work-Integrated Learning at Ground Up
              Grinders with graduation expected in October 2026.
            </p>
            <p>
              What I enjoy most is taking a concrete problem — managing tenders,
              supporting gym operations, or helping communities track emissions —
              and turning it into usable software. I work comfortably across the
              stack: backend services, databases, responsive frontends, and
              mobile apps with React Native.
            </p>
            <p>
              My goal is to join a team as a graduate or junior software
              developer where I can contribute immediately, learn from
              experienced engineers, and grow into a well-rounded professional. I
              value clean code, clear communication, and delivering work that
              others can rely on.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
