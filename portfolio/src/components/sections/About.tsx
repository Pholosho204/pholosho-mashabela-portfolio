"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Code2, Lightbulb, Target, Users } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Technical foundation",
    text: "Strong grounding in full-stack development across Java, PHP, Python, JavaScript, and React Native, with hands-on experience building practical software solutions.",
  },
  {
    icon: Users,
    title: "Collaborative mindset",
    text: "Experienced in contributing to team projects and internships, writing clean, reusable code, communicating clearly, and delivering work within deadlines.",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving focus",
    text: "I enjoy turning real-world challenges into practical software, from tender management systems to platforms that support businesses and communities.",
  },
  {
    icon: Target,
    title: "Growth-oriented",
    text: "As a Computer Science graduate, I am eager to apply my skills in a professional environment while continuing to learn, grow, and contribute to meaningful projects.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Building software that solves real problems"
          description="A Computer Science graduate with practical software development experience and a strong interest in full-stack, backend, and mobile development."
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
              , a Computer Science graduate from Tshwane University of
              Technology with a strong passion for software development and
              problem-solving.
            </p>

            <p>
              I enjoy taking real-world problems — whether managing tenders,
              supporting business operations, or building platforms that make
              everyday processes easier — and turning them into practical,
              reliable software. I work comfortably across the stack, including
              backend services, databases, responsive web applications, and
              mobile apps with React Native.
            </p>

            <p>
              I am currently seeking graduate and junior software development
              opportunities where I can contribute my existing skills, learn
              from experienced engineers, and continue growing as a software
              developer. I value clean code, clear communication, teamwork, and
              building software that people can genuinely rely on.
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