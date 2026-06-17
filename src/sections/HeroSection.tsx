import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../components/layout/Section";
import { Button } from "../components/ui/Button";
import { profile } from "../data/profile";
import { socialLinks } from "../data/social-links";

const GRADIENT_STATIC =
  "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(0,240,255,0.12) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(168,85,247,0.12) 0%, transparent 50%)";

const GRADIENT_KEYFRAMES = [
  GRADIENT_STATIC,
  "radial-gradient(ellipse 80% 50% at 25% 25%, rgba(0,240,255,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 75% 75%, rgba(168,85,247,0.15) 0%, transparent 50%)",
  GRADIENT_STATIC,
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-background"
        aria-hidden="true"
      >
        {prefersReducedMotion ? (
          <div className="absolute inset-0" style={{ background: GRADIENT_STATIC }} />
        ) : (
          <motion.div
            className="absolute inset-0"
            animate={{ background: GRADIENT_KEYFRAMES }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] opacity-5" />
      </div>

      <motion.div
        className="flex w-full flex-col gap-6 md:gap-8"
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold tracking-tight md:text-6xl"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base leading-relaxed text-text-muted md:text-lg"
          variants={itemVariants}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          variants={itemVariants}
        >
          <Button href="#projects" className="w-full sm:w-auto">
            View Projects
          </Button>
          <Button
            href={socialLinks.github}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            GitHub
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
