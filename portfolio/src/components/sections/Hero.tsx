"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import Image from "next/image";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="orb -left-32 top-1/4 h-72 w-72 bg-primary/40 animate-float" />
      <div className="orb -right-24 bottom-1/4 h-64 w-64 bg-primary/25 animate-float-delayed" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            {personalInfo.fullName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {personalInfo.tagline} Currently completing Work-Integrated Learning
            and preparing to graduate in October 2026.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-[0.98]"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-sm justify-center lg:max-w-none"
        >
          <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-muted to-card shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center p-6">
  <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-primary shadow-2xl">
    <Image
      src="/images/profile.jpeg"
      alt="Pholosho Bethuel Mashabela"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>
            {/* Decorative corner accent */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/15 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>

    </section>
  );
}
