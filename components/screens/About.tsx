"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Lightbulb,
  Search,
  Gauge,
  Headset,
  Settings,
  Smartphone,
  BarChart2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }, // daha yumuşak animasyon
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.18, // biraz daha aralıklı
    },
  },
};

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Arka plan gradient efekti */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lime-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 opacity-90" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Secure Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-blue-500 to-lime-400 (next: from-lime-400) */}
                  <div className="rounded-full bg-gradient-to-br from-blue-500 to-lime-400 p-3 shadow-md animate-pulse">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.secure.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.secure.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expert Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-lime-400 to-emerald-400 (next: from-emerald-400) */}
                  <div className="rounded-full bg-gradient-to-br from-lime-400 to-emerald-400 p-3 shadow-md animate-pulse">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.expert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.expert.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Innovation Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-emerald-400 to-yellow-400 (next: from-yellow-400) */}
                  <div className="rounded-full bg-gradient-to-br from-emerald-400 to-yellow-400 p-3 shadow-md animate-pulse">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.innovation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.innovation.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-yellow-400 to-pink-500 (next: from-pink-500) */}
                  <div className="rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 p-3 shadow-md animate-pulse">
                    <Search className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.seo.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.seo.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-pink-500 to-blue-400 (next: from-blue-400) */}
                  <div className="rounded-full bg-gradient-to-br from-pink-500 to-blue-400 p-3 shadow-md animate-pulse">
                    <Gauge className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.performance.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.performance.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-blue-400 to-lime-500 (next: from-lime-500) */}
                  <div className="rounded-full bg-gradient-to-br from-blue-400 to-lime-500 p-3 shadow-md animate-pulse">
                    <Headset className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.support.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.support.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Customization Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-lime-500 to-blue-500 (ilk kartın from rengine döngü) */}
                  <div className="rounded-full bg-gradient-to-br from-lime-500 to-blue-500 p-3 shadow-md animate-pulse">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.customization.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.customization.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobile Friendly Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-blue-500 to-pink-500 (devam eden akış) */}
                  <div className="rounded-full bg-gradient-to-br from-blue-500 to-pink-500 p-3 shadow-md animate-pulse">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.mobile.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.mobile.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Analytics & Insights Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card className="h-full text-center p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  {/* from-pink-500 to-emerald-400 (döngüsel akış) */}
                  <div className="rounded-full bg-gradient-to-br from-pink-500 to-emerald-400 p-3 shadow-md animate-pulse">
                    <BarChart2 className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {t.about.features.analytics.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.analytics.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
