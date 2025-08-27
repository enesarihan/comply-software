"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/contexts/language-context";
import { Typewriter } from "../ui/typewriter";
import { AnimatedTestimonialsDemo } from "../blocks/hero-reviews";
import Image from "next/image";
import { GetStartedButton } from "../ui/get-started-button";



const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section 
      className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background image with bottom mask blend */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-56 md:h-72 z-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="relative w-full h-full">
          {/* Light mode background */}
          <Image
            src="/meshgradient.jpg"
            alt="Decorative gradient background"
            fill
            priority
            className="object-cover object-top block dark:hidden"
          />
          {/* Dark mode background */}
          <Image
            src="/meshgradientdark.jpg"
            alt="Decorative gradient background (dark)"
            fill
            priority
            className="object-cover object-top hidden dark:block"
          />
        </div>
        {/* Soft overlay to match theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        {/* Primary glow - top center emerald */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/20 dark:bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary glow - bottom left blue */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-500/25 dark:bg-blue-400/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Tertiary glow - right indigo */}
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-indigo-500/18 dark:bg-indigo-400/28 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional moving glow */}
        <div className="absolute top-2/3 left-1/3 w-[350px] h-[350px] bg-teal-500/15 dark:bg-teal-400/25 rounded-full blur-3xl animate-bounce opacity-60"></div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 dark:via-black/18 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <ContainerScroll
          titleComponent={
            <motion.div
              className="relative z-10 text-center space-y-12"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text"
                variants={fadeInUp}
              >
                <span>{t.hero.mainTitle}</span>
                <Typewriter
                  text={t.hero.title}
                  speed={70}
                  className="text-blue-700 dark:text-lime-500"
                  waitTime={1500}
                  deleteSpeed={50}
                  cursorChar={"_"}
                />
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20"
                variants={fadeInUp}
              >
                <GetStartedButton />
              </motion.div>
            </motion.div>
          }
        >
          <AnimatedTestimonialsDemo />
        </ContainerScroll>
      </div>
    </section>
  );
}
