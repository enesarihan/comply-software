"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiSupabaseFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

const N8nIcon = ({ className }: { className?: string }) => (
  <Image
    src="/n8n.svg"
    alt="n8n"
    width={32}
    height={32}
    className={className}
    priority={false}
  />
);

const TechnologiesSection = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const technologies = [
    {
      name: "Next",
      description: t.technologies.next,
      icon: RiNextjsFill,
      gradient: "from-black to-gray-800",
    },
    {
      name: "React",
      description: t.technologies.react,
      icon: RiReactjsFill,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Tailwind",
      description: t.technologies.tailwind,
      icon: RiTailwindCssFill,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "n8n",
      description: t.technologies.n8n, // Will add this translation
      icon: N8nIcon,
      gradient: "from-white to-pink-500", // Changed from orange-pink to blue for better contrast
    },
    {
      name: "Supabase",
      description: t.technologies.supabase,
      icon: RiSupabaseFill,
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      name: "Firebase",
      description: t.technologies.firebase,
      icon: RiFirebaseFill,
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section 
      className="relative pt-8 pb-16 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        {/* Primary glow - top left rose (Pricing'ten devam) */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-rose-500/22 dark:bg-rose-400/32 rounded-full blur-3xl"></div>
        
        {/* Secondary glow - bottom right orange */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-orange-500/20 dark:bg-orange-400/30 rounded-full blur-3xl"></div>
        
        {/* Tertiary glow - center red */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-red-500/18 dark:bg-red-400/28 rounded-full blur-3xl"></div>
        
        {/* Moving glow - top right */}
        <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-amber-500/15 dark:bg-amber-400/25 rounded-full blur-3xl animate-bounce opacity-60"></div>
        
        {/* Center overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/6 dark:via-black/16 to-transparent"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t.technologies.title}
            <span className="block mt-2">{t.technologies.subtitle}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.technologies.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            const isExpanded = expandedCard === tech.name;

            const details: Record<string, string> =
              t.technologies.details ?? {};
            const detailText =
              details[tech.name.toLowerCase()] ?? "More details coming soon...";
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover="hover"
                onClick={() =>
                  setExpandedCard((prev) =>
                    prev === tech.name ? null : tech.name
                  )
                }
                className="cursor-pointer"
              >
                <Card 
                  className="h-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
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
                  <motion.div variants={cardHoverVariants}>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-foreground">
                            {tech.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {tech.description}
                          </p>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isExpanded ? "auto" : 0,
                              opacity: isExpanded ? 1 : 0,
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden text-muted-foreground text-sm mt-2"
                          >
                            <p>{detailText}</p>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Seamless transition to Pricing section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-pink-50/50 to-purple-50 dark:via-gray-950/50 dark:to-gray-900"></div>
    </section>
  );
};

export default TechnologiesSection;
