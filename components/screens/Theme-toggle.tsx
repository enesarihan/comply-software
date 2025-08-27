"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-full min-h-[44px] min-w-[44px] overflow-hidden group flex items-center justify-center"
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
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
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
      
      {/* Icon container with relative z-index */}
      <div className="relative z-10">
        <motion.div
          animate={{ 
            rotate: theme === "light" ? 0 : -90,
            scale: theme === "light" ? 1 : 0 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: theme === "light" ? 90 : 0,
            scale: theme === "light" ? 0 : 1 
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center justify-center"
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>
      </div>
      
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
}
