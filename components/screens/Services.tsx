"use client";

import { motion } from "framer-motion";
import {
  Palette,
  ShoppingCart,
  TrendingUp,
  Search,
  Wrench,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/language-context";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const serviceIcons = {
  webDesign: Palette,
  ecommerce: ShoppingCart,
  googleAds: TrendingUp,
  seo: Search,
  maintenance: Wrench,
  renewal: RefreshCw,
};

export default function ServicesSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "webDesign",
    "ecommerce",
    "googleAds",
    "seo",
    "maintenance",
    "renewal",
  ];

  return (
    <section 
      id="services" 
      className="relative pt-8 pb-16 px-4 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        {/* Primary glow - top left blue (About'tan devam) */}
        <div className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-blue-500/25 dark:bg-blue-400/35 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary glow - bottom right indigo */}
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-indigo-500/22 dark:bg-indigo-400/32 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Tertiary glow - center purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Moving glow - bottom left cyan */}
        <div className="absolute -bottom-10 -left-10 w-[280px] h-[280px] bg-cyan-500/15 dark:bg-cyan-400/25 rounded-full blur-3xl animate-bounce opacity-60"></div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/8 dark:via-black/18 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-lime-100 text-blue-800 dark:from-blue-900 dark:to-lime-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
          >
            {t.services.subtitle}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 ">
            {t.services.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((serviceKey, index) => {
            const service =
              t.services.items[serviceKey as keyof typeof t.services.items];
            const IconComponent =
              serviceIcons[serviceKey as keyof typeof serviceIcons];

            return (
              <motion.div
                key={serviceKey}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  y: -12,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-lime-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <Card 
                  className="relative h-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl group-hover:shadow-blue-500/25 dark:group-hover:shadow-lime-500/25"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.05) 100%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 25px rgba(0,0,0,0.15)"
                  }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Liquid highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-2xl"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
                      mask: "radial-gradient(120px 50px at 15% 10%, black 30%, transparent 60%)",
                      WebkitMask: "radial-gradient(120px 50px at 15% 10%, black 30%, transparent 60%)"
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

                  <CardHeader className="relative z-10 pb-6 pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-lime-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant="outline"
                          className="text-xs font-bold border-blue-300 text-blue-700 dark:border-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30"
                        >
                          {index + 1}
                        </Badge>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < 5
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-lime-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0 pb-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Özellikler:
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features
                          .slice(0, 4)
                          .map((feature: string, featureIndex: number) => (
                            <div
                              key={featureIndex}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-lime-500 mt-2 flex-shrink-0" />
                              <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-2 rounded-lg border border-blue-200 dark:border-blue-700">
                            +{service.features.length - 4} daha fazla özellik
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-lime-500 dark:from-blue-600 dark:via-purple-600 dark:to-lime-600 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-blue-500/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-black/10 dark:bg-white/5" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t.services.cta.title}
              </h3>
              <p className="text-blue-100 dark:text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
                {t.services.cta.description}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={scrollToContact}
                  className="relative px-10 py-3 text-lg font-semibold rounded-2xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.14) 55%, rgba(255,255,255,0.08) 100%)",
                    WebkitBackdropFilter: "blur(16px) saturate(160%)",
                    backdropFilter: "blur(16px) saturate(160%)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.08), 0 10px 30px rgba(0,0,0,0.25)",
                    color: "#ffffff",
                    textShadow: "0 1px 1px rgba(0,0,0,0.25)",
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    {t.services.cta.button}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  {/* Liquid highlight */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 100%)",
                      mask: "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                      WebkitMask:
                        "radial-gradient(120px 50px at 10% 0%, black 30%, transparent 60%)",
                    }}
                  />
                  {/* Gloss sweep on hover */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-full w-1/3 translate-x-[-150%] rotate-12 bg-white/40 blur-md transition-transform duration-700 group-hover:translate-x-[350%]"
                  />
                  {/* Subtle noise for better glass texture */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
                      backgroundSize: "3px 3px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Seamless transition to Technologies section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-purple-50/50 to-orange-50 dark:via-gray-950/50 dark:to-gray-900"></div>
    </section>
  );
}
