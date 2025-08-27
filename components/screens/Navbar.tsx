"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    { name: t.nav.contact, href: "/#contact" },
    { name: t.nav.faq, href: "/#faq" },
    { name: "Blog", href: "/blog" },
    { name: "💳 Ödeme", href: "/payment" },
  ];

  const router = useRouter();

  const handleMobileClick = () => {
    setIsOpen(!isOpen);
    router.push("#contact");
  };

  return (
    <>
      <PromotionalBanner />

      <motion.nav
        className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm transition-shadow duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-2">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 min-w-[120px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo className="text-xl font-bold " type="full" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground hover:text-blue-600 dark:hover:text-lime-400 transition-colors font-medium px-2 py-1 group"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span>{item.name}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3 min-w-[180px] justify-end">
              <LanguageToggle />
              <ThemeToggle />
              <GetStartedButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="focus:ring-2 focus:ring-blue-500 dark:focus:ring-lime-500"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              className="md:hidden py-4 border-t bg-background/80 backdrop-blur-lg shadow-xl rounded-b-xl mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-blue-600 dark:hover:text-lime-400 transition-colors font-medium py-2 px-2 rounded-lg focus:bg-blue-50 dark:focus:bg-lime-100 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <Button
                    className="w-full bg-blue-600 dark:bg-lime-500 hover:bg-blue-700 dark:hover:bg-lime-600 text-white font-semibold shadow-md px-4 py-2 rounded-lg transition-all"
                    onClick={handleMobileClick}
                  >
                    {t.nav.getStarted}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
