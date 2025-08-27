"use client";

import { useLanguage } from "@/contexts/language-context";
import { AnimatePresence, motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "tr" : "en";

  const flag = language === "en" ? "🇬🇧" : "🇹🇷";
  const label = language === "en" ? "English" : "Türkçe";

  return (
    <motion.button
      onClick={() => setLanguage(nextLanguage)}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full min-h-[44px] overflow-hidden group"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px) saturate(150%)",
        WebkitBackdropFilter: "blur(12px) saturate(150%)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 8px rgba(0,0,0,0.1)"
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 16px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      title={label}
    >
      {/* Liquid highlight effect */}
      <span 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)"
        }}
      />
      
      {/* Gloss sweep on hover */}
      <span 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
          transform: "translateX(-100%)",
          animation: "glossSweep 1.5s ease-in-out"
        }}
      />
      
      <style jsx>{`
        @keyframes glossSweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      
      <motion.span 
        className="text-xl relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {flag}
      </motion.span>
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium relative z-10"
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
