"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "tr" : "en";

  const flag = language === "en" ? "🇬🇧" : "🇹🇷";
  const label = language === "en" ? "English" : "Türkçe";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(nextLanguage)}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors hover:bg-muted"
      title={label}
    >
      <span className="text-xl">{flag}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium"
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
