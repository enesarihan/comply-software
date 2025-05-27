"use client";

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();
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
        className={`relative py-1 px-3 ${
          theme === "dark"
            ? "bg-gradient-to-r from-green-800 via-green-600 to-lime-500"
            : "bg-gradient-to-r from-cyan-200 via-blue-500 to-blue-700"
        }`}
      >
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={shimmer}
          style={{ width: "30%" }}
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
