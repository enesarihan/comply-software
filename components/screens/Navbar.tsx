"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { LanguageToggle } from "./Language-toggle";
import { useLanguage } from "@/contexts/language-context";
import { ThemeToggle } from "./Theme-toggle";
import Logo from "../Logo";
import PromotionalBanner from "../blocks/banner";
import { GetStartedButton } from "../ui/get-started-button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t.nav.home, href: "/#" },
    { name: t.nav.about, href: "/#about" },
    { name: t.services.title, href: "/#services" },
    { name: t.nav.pricing, href: "/#pricing" },
    { name: "Comply AI Editor", href: "/image-editor" },
    { name: t.nav.contact, href: "/#contact" },
    { name: t.nav.faq, href: "/#faq" },
    { name: "Blog", href: "/blog" },
    // { name: "💳 Ödeme", href: "/payment" }, // API key olmadığı için gizlendi
  ];

  const router = useRouter();

  const handleMobileClick = () => {
    setIsOpen(!isOpen);
    router.push("#contact");
  };

  return (
    <>
      <PromotionalBanner />
      
      <div className="sticky top-0 left-0 right-0 z-50">
        {/* Enhanced Mesh Gradient Background - matching Hero */}
        <div className="absolute inset-0 z-0">
          {/* Light mode gradient - enhanced to match hero */}
          <div 
            className="absolute inset-0 block dark:hidden"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.35) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.25) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 10% 90%, rgba(251, 191, 36, 0.25) 0%, transparent 50%),
                linear-gradient(135deg, 
                  rgba(59, 130, 246, 0.15) 0%,
                  rgba(139, 92, 246, 0.15) 25%,
                  rgba(34, 197, 94, 0.12) 50%,
                  rgba(236, 72, 153, 0.15) 75%,
                  rgba(251, 191, 36, 0.12) 100%)
              `,
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)"
            }}
          />
          
          {/* Dark mode gradient - enhanced to match hero */}
          <div 
            className="absolute inset-0 hidden dark:block"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.45) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, rgba(34, 197, 94, 0.35) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 10% 90%, rgba(251, 191, 36, 0.35) 0%, transparent 50%),
                linear-gradient(135deg, 
                  rgba(6, 182, 212, 0.2) 0%,
                  rgba(139, 92, 246, 0.2) 25%,
                  rgba(34, 197, 94, 0.15) 50%,
                  rgba(236, 72, 153, 0.2) 75%,
                  rgba(251, 191, 36, 0.15) 100%)
              `,
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)"
            }}
          />
          
          {/* Animated gradient overlay - enhanced to match hero */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                linear-gradient(-45deg, 
                  rgba(59, 130, 246, 0.12),
                  rgba(139, 92, 246, 0.12),
                  rgba(34, 197, 94, 0.1),
                  rgba(236, 72, 153, 0.12))
              `,
              backgroundSize: "400% 400%",
              animation: "gradientShift 15s ease infinite"
            }}
          />
          
          {/* Enhanced overlay to match hero theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/8 to-transparent" />
        </div>
        
        <style jsx>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* Enhanced Glow Effects for better visibility */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {/* Primary glow */}
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-cyan-400/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '4s' }}
          />
          {/* Secondary glow */}
          <div 
            className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/12 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '5s' }}
          />
          {/* Moving glow */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-2 left-1/2 w-32 h-32 bg-cyan-500/8 dark:bg-cyan-400/15 rounded-full blur-2xl animate-pulse" 
                 style={{ animationDelay: '1s', animationDuration: '3s' }} />
          </div>
        </div>

        <div className="flex justify-center pt-4 pb-2 px-4 relative z-20">

        <motion.nav
          className="rounded-full px-6 py-3 mx-auto max-w-fit relative z-10 overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px) saturate(150%)",
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05)"
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Liquid highlight effect */}
          <span 
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)"
            }}
          />
          
          {/* Subtle noise for glass texture */}
          <span 
            className="absolute inset-0 rounded-full opacity-10"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "3px 3px"
            }}
          />
          <div className="flex items-center gap-3 md:gap-6 relative z-10">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo className="text-lg font-bold" type="full" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navItems.slice(0, 8).map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors font-medium px-3 py-1.5 rounded-full text-sm ${
                    item.href === "/image-editor" 
                      ? "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-700 font-semibold" 
                      : "text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <GetStartedButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
                className="relative rounded-full min-h-[48px] min-w-[48px] overflow-hidden group flex items-center justify-center"
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
              >
                {/* Liquid highlight effect */}
                <span 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)"
                  }}
                />
                
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative z-10"
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.nav>
        </div>
      </div>
        
      {/* Mobile Navigation Dropdown - Outside sticky container */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Content */}
            <motion.div 
              className="fixed top-20 left-4 right-4 z-[100] lg:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Dropdown Glow Effects */}
              <div className="absolute inset-0 z-0">
                <div className="absolute -top-4 left-1/3 w-40 h-40 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 right-1/3 w-32 h-32 bg-blue-500/15 dark:bg-cyan-400/25 rounded-full blur-2xl animate-pulse" />
              </div>
              
              <div
                className="rounded-2xl p-4 relative z-10 overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  WebkitBackdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.05)"
                }}
              >
              {/* Mobile Dropdown Liquid Effects */}
              <span 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.06) 100%)"
                }}
              />
              
              <span 
                className="absolute inset-0 rounded-2xl opacity-15"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "4px 4px"
                }}
              />
              <div className="flex flex-col space-y-2 relative z-10">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors font-medium py-3 px-4 rounded-xl ${
                      item.href === "/image-editor"
                        ? "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-200 dark:border-blue-700 font-semibold"
                        : "text-foreground hover:text-blue-600 dark:hover:text-lime-400 hover:bg-foreground/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Theme & Language Controls */}
                <div className="pt-3 mt-3">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground/70 font-medium">Theme:</span>
                      <ThemeToggle />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground/70 font-medium">Language:</span>
                      <LanguageToggle />
                    </div>
                  </div>
                  
                  <LiquidButton
                    className="w-full text-blue-600 dark:text-lime-600 font-semibold"
                    size="lg"
                    onClick={handleMobileClick}
                  >
                    {t.nav.getStarted}
                  </LiquidButton>
                </div>
              </div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}