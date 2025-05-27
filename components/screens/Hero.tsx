"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/contexts/language-context";
import { Typewriter } from "../ui/typewriter";
import { AnimatedTestimonialsDemo } from "../blocks/hero-reviews";

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
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <ContainerScroll
          titleComponent={
            <motion.div
              className="text-center space-y-12"
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
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={fadeInUp}
              >
                <Button size="lg" className="text-lg px-8 py-6">
                  {t.hero.learnMore} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
