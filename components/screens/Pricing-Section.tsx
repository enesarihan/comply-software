"use client";

import { motion } from "framer-motion";
import { DotIcon, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const onClickRedirect = () => {
    router.push("#contact");
  };
  return (
    <section id="pricing" className="py-16 md:py-20 px-4 font-sans">
      {/* Custom CSS for the animated border */}
      <style jsx>{`
        .animated-border-wrapper {
          position: relative;
          border-radius: 0.75rem; /* Matches Tailwind's rounded-xl */
          padding: 2px; /* This creates the border thickness */
          overflow: hidden;
          height: 100%; /* Ensure wrapper takes full height */
          display: flex; /* Use flex to center the inner card if needed */
          justify-content: center;
          align-items: center;
          background: transparent; /* Ensure background is transparent */
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1); /* Subtle shadow for depth */
        }

        .animated-border-wrapper::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          /* Default conic gradient for rainbow effect (Professional plan) */
          background: conic-gradient(
            from 0deg at 50% 50%,
            #ef4444,
            /* red-500 */ #f97316,
            /* orange-500 */ #f59e0b,
            /* amber-500 */ #eab308,
            /* yellow-500 */ #84cc16,
            /* lime-500 */ #22c55e,
            /* green-500 */ #10b981,
            /* emerald-500 */ #06b6d4,
            /* cyan-500 */ #0ea5e9,
            /* sky-500 */ #3b82f6,
            /* blue-500 */ #6366f1,
            /* indigo-500 */ #8b5cf6,
            /* violet-500 */ #a855f7,
            /* purple-500 */ #d946ef,
            /* fuchsia-500 */ #ec4899,
            /* pink-500 */ #f43f5e,
            /* rose-500 */ #ef4444 /* red-500 to complete the loop */
          );
          animation: rotateBorder 4s linear infinite; /* Animation duration and type */
          z-index: -1; /* Place behind the actual card content */
        }

        /* Specific gradient for Basic Plan */
        .animated-border-wrapper-basic::before {
          background: conic-gradient(
            from 0deg at 50% 50%,
            #3b82f6,
            /* blue-500 */ #22d3ee,
            /* cyan-400 */ #10b981,
            /* emerald-500 */ #84cc16,
            /* lime-500 */ #3b82f6 /* blue-500 to complete the loop */
          );
        }

        /* Specific gradient for Elite Plan */
        .animated-border-wrapper-elite::before {
          background: conic-gradient(
            from 0deg at 50% 50%,
            #ef4444,
            /* red-500 */ #f97316,
            /* orange-500 */ #eab308,
            /* yellow-500 */ #f43f5e,
            /* rose-500 */ #ef4444 /* red-500 to complete the loop */
          );
        }

        .animated-border-wrapper-featured {
          /* Adjustments for the featured card's scale */
          transform: scale(
            1
          ); /* Reset scale here, it's applied to the parent motion.div */
        }

        /* Keyframe animation for rotating the border */
        @keyframes rotateBorder {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
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
            <div className="animated-border-wrapper animated-border-wrapper-featured animated-border-wrapper-basic">
              <Card className="relative h-full w-full bg-card border-none rounded-xl shadow-none">
                <CardHeader className="text-center pb-6 md:pb-8">
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
                      18.999 TL
                    </div>
                    <p className="text-neutral-700 text-sm md:text-base">
                      + Domain and Host
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 flex flex-col h-full">
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {t.pricing.plans.basic.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <DotIcon className="min-h-5 min-w-5 md:min-h-7 md:min-w-7 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full h-12 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 border-0 rounded-xl relative overflow-hidden group"
                    onClick={onClickRedirect}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
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
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Professional Plan - Featured */}
          <motion.div
            variants={fadeInUp}
            className="h-full md:scale-105 lg:scale-105"
          >
            <div className="animated-border-wrapper animated-border-wrapper-featured">
              <Card className="relative h-full w-full bg-card border-none rounded-xl shadow-none">
                <div className="absolute top-2 md:top-3 left-1/2 transform -translate-x-1/2 md:left-12 md:transform-none">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm font-semibold shadow-lg">
                    {t.pricing.mostPopular}
                  </Badge>
                </div>
                <CardHeader className="text-center pb-6 md:pb-8 pt-6 md:pt-8">
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
                        31.999 TL
                      </div>
                    </div>
                    <div className="inline-block mt-2 px-2 md:px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                      37% OFF
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 flex flex-col h-full">
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {t.pricing.plans.professional.features.map(
                      (feature, index) => (
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
                  <Button
                    className="w-full h-12 text-base md:text-lg font-semibold bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 border-0 rounded-xl relative overflow-hidden group"
                    onClick={onClickRedirect}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
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
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Elite Plan */}
          <motion.div
            variants={fadeInUp}
            className="h-full md:col-span-2 lg:col-span-1"
          >
            <div className="animated-border-wrapper animated-border-wrapper-featured animated-border-wrapper-elite">
              <Card className="relative h-full w-full bg-card border-none rounded-xl shadow-none">
                <CardHeader className="text-center pb-6 md:pb-8">
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
                        190.000 TL
                      </div>
                    </div>
                    <div className="inline-block mt-2 px-2 md:px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full">
                      15% OFF
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 flex flex-col h-full">
                  <div className="space-y-2 md:space-y-3 flex-grow">
                    {t.pricing.plans.elite.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <DotIcon className="min-h-5 min-w-5 md:min-h-7 md:min-w-7 text-green-500 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full h-12 text-base md:text-lg font-semibold bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 border-0 rounded-xl relative overflow-hidden group"
                    onClick={onClickRedirect}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
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
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
