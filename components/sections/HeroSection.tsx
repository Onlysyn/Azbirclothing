"use client";

import { HERO_IMAGE } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const headlineWords = [
  "Dressed",
  "in",
  "Tradition.",
  "Tailored",
  "to",
  "Perfection.",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const word = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.85 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end">
      <Image
        src={HERO_IMAGE}
        alt="Azbir Clothing boutique — bespoke traditional menswear"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-green via-green/70 to-green/20"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <motion.h1
          className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              variants={word}
              className="mr-[0.25em] inline-block last:mr-0"
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base text-white/85 sm:text-lg md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Bespoke Kaftans, Agbadas, and the first authentic Emirati Jallabiya in
          Northern Nigeria — crafted to measure since 2016.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/collections"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold/90"
          >
            Explore Collection
          </Link>
          <Link
            href="/custom-order"
            className="inline-flex items-center justify-center rounded-sm border-2 border-white/90 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:bg-white/10 hover:text-gold"
          >
            Order Custom
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.div
            className="h-1.5 w-1 rounded-full bg-gold"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
