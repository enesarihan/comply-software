"use client";

import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/contexts/language-context";
import { Typewriter } from "../ui/typewriter";
import { AnimatedTestimonialsDemo } from "../blocks/hero-reviews";
import { GetStartedButton } from "../ui/get-started-button";
import { LiquidButton } from "../ui/liquid-glass-button";



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
      className="relative pt-32 pb-0 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background image with bottom mask blend */}
      {/* Custom CSS Mesh Gradient Background - matching Navbar */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-56 md:h-72 z-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
        }}
      >
        {/* Light mode gradient */}
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
            `
          }}
        />
        
        {/* Dark mode gradient */}
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
            `
          }}
        />
        
        {/* Animated gradient overlay */}
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
        
        {/* Soft overlay to match theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

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
                <LiquidButton
                  className="group relative overflow-hidden text-blue-600 dark:text-blue-400 font-semibold"
                  size="lg"
                  onClick={() => window.open('/projects', '_self')}
                >
                  <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
                    {t.hero.viewAllProjects}
                  </span>
                  <i className="absolute right-1 top-1 bottom-1 rounded-full z-10 grid w-1/4 place-items-center transition-all duration-500 bg-blue-600/15 dark:bg-blue-400/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-blue-600 dark:text-blue-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </i>
                </LiquidButton>
              </motion.div>
            </motion.div>
          }
        >
          <AnimatedTestimonialsDemo />
        </ContainerScroll>
      </div>
      
      {/* Seamless transition to About section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-teal-50/50 to-emerald-50 dark:via-gray-950/50 dark:to-gray-900"></div>
    </section>
  );
}
