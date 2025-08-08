"use client";

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const shimmer = {
  initial: { x: "-100%" },
  animate: { x: "100%" },
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "loop" as const,
    ease: "linear",
  },
};

export default function PromotionalBanner() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark =
    theme === "dark" || (theme === "system" && resolvedTheme === "dark");
  const { t } = useLanguage();
  return (
    <motion.div
      className="relative overflow-hidden"
      initial="initial"
      animate="animate"
      variants={fadeInDown}
    >
      {/* Main gradient banner */}
      <div
        suppressHydrationWarning
        className={`relative py-1.5 px-4 backdrop-blur-md ring-1 ring-white/15 dark:ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-gradient-to-r from-cyan-200 via-blue-500 to-blue-700 dark:from-green-800 dark:via-green-600 dark:to-lime-500`}
      >
        {/* Background image with bottom mask (light/dark) */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
          }}
        >
          <div className="relative w-full h-full">
            {mounted && (
              <Image
                src={isDark ? "/meshgradientdark.jpg" : "/meshgradient.jpg"}
                alt="Decorative gradient"
                fill
                priority={false}
                className={`object-cover object-top ${
                  isDark ? "opacity-60" : "opacity-70"
                }`}
              />
            )}
          </div>
          {/* Soft overlay to match theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          {/* Radial highlight for depth */}
          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
        </div>

        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
          variants={shimmer}
          style={{ width: "22%" }}
        />

        {/* Banner content */}
        <div className="relative z-10 text-center">
          <motion.h2
            className="text-sm md:text-base lg:text-lg font-bold text-white drop-shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.nav.banner}
          </motion.h2>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
      </div>
    </motion.div>
  );
}
