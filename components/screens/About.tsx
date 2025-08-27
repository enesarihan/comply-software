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
    <section 
      id="about" 
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-teal-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        {/* Primary glow - top left teal (Hero'dan devam) */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-teal-500/25 dark:bg-teal-400/35 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary glow - bottom right blue (Services'a geçiş) */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-blue-500/22 dark:bg-blue-400/32 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Tertiary glow - center emerald */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/20 dark:bg-emerald-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving glow - top right cyan */}
        <div className="absolute -top-10 -right-10 w-[250px] h-[250px] bg-cyan-500/15 dark:bg-cyan-400/25 rounded-full blur-3xl animate-bounce opacity-60"></div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 dark:via-black/18 to-transparent"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
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
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.secure.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Expert Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.expert.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Innovation Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.innovation.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* SEO Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.seo.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.performance.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.support.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Customization Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.customization.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobile Friendly Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.features.mobile.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Analytics & Insights Card */}
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.04, y: -6 }}>
            <Card 
              className="h-full text-center p-8 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              <CardHeader className="relative z-10">
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
              <CardContent className="relative z-10">
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
