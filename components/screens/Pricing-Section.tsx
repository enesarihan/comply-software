"use client";

import { motion } from "framer-motion";
import { DotIcon, Star, Zap, Crown } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Assuming useLanguage and t are correctly defined and imported for localization
import { useLanguage } from "@/contexts/language-context"; // Uncomment if needed
import { Badge } from "../ui/badge";
// import { useRouter } from "next/navigation"; // Ödeme gizlendiği için gerek yok

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2 }, // Animasyon süresi 0.6 saniyeden 1.2 saniyeye çıkarıldı
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PricingSection() {
  const { t } = useLanguage();
  // const router = useRouter(); // Ödeme gizlendiği için gerek yok

  const onClickRedirect = () => {
    // router.push("#contact"); // Ödeme gizlendiği için gerek yok
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section 
      id="pricing" 
      className="relative pt-8 pb-16 px-4 font-sans overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        {/* Primary glow - top right purple */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-purple-500/25 dark:bg-purple-400/35 rounded-full blur-3xl"></div>
        
        {/* Secondary glow - bottom left pink */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-pink-500/20 dark:bg-pink-400/30 rounded-full blur-3xl"></div>
        
        {/* Tertiary glow - center right rose */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-10 w-[400px] h-[400px] bg-rose-500/18 dark:bg-rose-400/28 rounded-full blur-3xl"></div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/6 dark:via-black/16 to-transparent"></div>
      </div>


      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Basic Plan */}
          <motion.div variants={fadeInUp} className="h-full">
            <Card 
              className="relative h-full w-full overflow-hidden rounded-xl group transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(34,211,238,0.12) 55%, rgba(16,185,129,0.08) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(59,130,246,0.3)",
                boxShadow: "inset 0 1px 0 rgba(59,130,246,0.4), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(59,130,246,0.2)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl"
                style={{
                  background: "linear-gradient(180deg, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.05) 100%)",
                  mask: "radial-gradient(120px 50px at 15% 10%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 15% 10%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-blue-400/30 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
                <CardHeader className="text-center pb-6 md:pb-8 relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-3 md:mb-4 mx-auto shadow-lg">
                    <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {t.pricing.plans.basic.name}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    {t.pricing.plans.basic.description}
                  </CardDescription>
                  <div className="mt-4 md:mt-6">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {t.pricing.plans.basic.price}
                    </div>
                    <p className="text-neutral-700 text-sm md:text-base">
                      + Domain and Host
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 flex flex-col h-full relative z-10">
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {t.pricing.plans.basic.features.map((feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <DotIcon className="min-h-5 min-w-5 md:min-h-7 md:min-w-7 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <LiquidButton
                    className="w-full text-blue-600 font-semibold"
                    size="lg"
                    onClick={onClickRedirect}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t.pricing.contactSales}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </LiquidButton>
                </CardContent>
            </Card>
          </motion.div>

          {/* Professional Plan - Featured */}
          <motion.div
            variants={fadeInUp}
            className="h-full md:scale-105 lg:scale-105"
          >
            <Card 
              className="relative h-full w-full overflow-hidden rounded-xl group transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(147,51,234,0.18) 0%, rgba(236,72,153,0.15) 55%, rgba(239,68,68,0.12) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(147,51,234,0.35)",
                boxShadow: "inset 0 1px 0 rgba(147,51,234,0.45), inset 0 -1px 0 rgba(0,0,0,0.05), 0 10px 30px rgba(147,51,234,0.25)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl"
                style={{
                  background: "linear-gradient(180deg, rgba(147,51,234,0.35) 0%, rgba(147,51,234,0.08) 100%)",
                  mask: "radial-gradient(150px 60px at 20% 15%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(150px 60px at 20% 15%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-purple-400/40 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Animated rainbow border for featured */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-20 animate-pulse"
                style={{
                  background: "conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #84cc16, #22c55e, #10b981, #06b6d4, #3b82f6, #6366f1, #8b5cf6, #a855f7, #d946ef, #ec4899, #f43f5e, #ef4444)",
                  mask: "radial-gradient(circle at center, transparent 98%, black 100%)",
                  WebkitMask: "radial-gradient(circle at center, transparent 98%, black 100%)"
                }}
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-12"
                style={{
                  backgroundImage: "radial-gradient(rgba(147,51,234,0.4) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
                <div className="absolute top-2 md:top-3 left-1/2 transform -translate-x-1/2 md:left-12 md:transform-none z-20">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-semibold shadow-lg">
                    {t.pricing.mostPopular}
                  </Badge>
                </div>
                <CardHeader className="text-center pb-6 md:pb-8 pt-6 md:pt-8 relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-3 md:mb-4 mx-auto shadow-lg">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {t.pricing.plans.professional.name}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    {t.pricing.plans.professional.description}
                  </CardDescription>
                  <div className="mt-4 md:mt-6">
                    <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
                      <div className="text-lg md:text-2xl font-semibold text-muted-foreground line-through">
                        43.899 TL
                      </div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                        {t.pricing.plans.professional.price}
                      </div>
                    </div>
                    <div className="inline-block mt-2 px-2 md:px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                      37% OFF
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 flex flex-col h-full relative z-10">
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {t.pricing.plans.professional.features.map(
                      (feature: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 md:gap-3"
                        >
                          <DotIcon className="min-h-5 min-w-5 md:min-h-7 md:min-w-7 text-green-500 flex-shrink-0" />
                          <span className="text-sm md:text-base">
                            {feature}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                  <LiquidButton
                    className="w-full text-purple-600 dark:text-purple-400 font-semibold"
                    size="lg"
                    onClick={onClickRedirect}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t.pricing.contactSales}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </LiquidButton>
                </CardContent>
            </Card>
          </motion.div>

          {/* Elite Plan */}
          <motion.div
            variants={fadeInUp}
            className="h-full md:col-span-2 lg:col-span-1"
          >
            <Card 
              className="relative h-full w-full overflow-hidden rounded-xl group transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(251,146,60,0.18) 0%, rgba(239,68,68,0.15) 55%, rgba(249,115,22,0.12) 100%)",
                backdropFilter: "blur(16px) saturate(160%)",
                WebkitBackdropFilter: "blur(16px) saturate(160%)",
                border: "1px solid rgba(251,146,60,0.35)",
                boxShadow: "inset 0 1px 0 rgba(251,146,60,0.45), inset 0 -1px 0 rgba(0,0,0,0.05), 0 10px 30px rgba(251,146,60,0.25)"
              }}
            >
              {/* Liquid highlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-xl"
                style={{
                  background: "linear-gradient(180deg, rgba(251,146,60,0.35) 0%, rgba(251,146,60,0.08) 100%)",
                  mask: "radial-gradient(120px 50px at 15% 10%, black 30%, transparent 60%)",
                  WebkitMask: "radial-gradient(120px 50px at 15% 10%, black 30%, transparent 60%)"
                }}
              />
              {/* Gloss sweep on hover */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-orange-400/40 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
              />
              {/* Elite glow effect */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-15 animate-pulse"
                style={{
                  background: "conic-gradient(from 0deg, #f59e0b, #f97316, #ef4444, #dc2626, #b91c1c, #991b1b, #f59e0b)",
                  mask: "radial-gradient(circle at center, transparent 97%, black 100%)",
                  WebkitMask: "radial-gradient(circle at center, transparent 97%, black 100%)",
                  animationDelay: "1s"
                }}
              />
              {/* Subtle noise for better glass texture */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-xl opacity-12"
                style={{
                  backgroundImage: "radial-gradient(rgba(251,146,60,0.4) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
                <CardHeader className="text-center pb-6 md:pb-8 relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mb-3 md:mb-4 mx-auto shadow-lg">
                    <Crown className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {t.pricing.plans.elite.name}
                  </CardTitle>
                  <CardDescription className="text-base md:text-lg">
                    {t.pricing.plans.elite.description}
                  </CardDescription>
                  <div className="mt-4 md:mt-6">
                    <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
                      <div className="text-lg md:text-2xl font-semibold text-muted-foreground line-through">
                        218.500 TL
                      </div>
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                        {t.pricing.plans.elite.price}
                      </div>
                    </div>
                    <div className="inline-block mt-2 px-2 md:px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full">
                      15% OFF
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 flex flex-col h-full relative z-10">
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {t.pricing.plans.elite.features.map((feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <DotIcon className="min-h-5 min-w-5 md:min-h-7 md:min-w-7 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <LiquidButton
                    className="w-full text-orange-600 dark:text-orange-400 font-semibold"
                    size="lg"
                    onClick={onClickRedirect}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t.pricing.contactSales}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </LiquidButton>
                </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Ödeme Butonu - API key olmadığı için gizlendi */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Hemen Ödeme Yapın
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Yazılım hizmetlerimiz için güvenli ödeme yapın. 3-6 ay arası esnek taksit seçenekleri.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LiquidButton
                onClick={() => router.push('/payment')}
                className="text-purple-600 font-bold text-xl"
                size="xxl"
              >
                💳 Güvenli Ödeme Yap
              </LiquidButton>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
      
      {/* Seamless transition to Contact section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-rose-50/50 to-blue-50 dark:via-gray-950/50 dark:to-gray-900"></div>
    </section>
  );
}
