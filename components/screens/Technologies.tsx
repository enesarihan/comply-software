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
import { BsStripe } from "react-icons/bs";

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
      name: "Stripe",
      description: t.technologies.stripe,
      icon: BsStripe,
      gradient: "from-purple-500 to-indigo-600",
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
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
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
                <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all duration-300 bg-card text-card-foreground group">
                  <motion.div variants={cardHoverVariants}>
                    <CardContent className="p-8">
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
    </section>
  );
};

export default TechnologiesSection;
