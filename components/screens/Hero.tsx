"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/contexts/language-context";

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
              className="text-center space-y-8"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                {t.hero.title}
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
                  {t.hero.getStarted} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6"
                >
                  {t.hero.learnMore}
                </Button>
              </motion.div>
            </motion.div>
          }
        >
          <div className="mx-auto rounded-2xl object-cover h-full object-left-top bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-2/3"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-3/4"></div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
