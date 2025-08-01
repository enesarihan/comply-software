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
import { Button } from "@/components/ui/button";
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
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-lime-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 opacity-90" />

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

                <Card className="relative h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md overflow-hidden rounded-2xl group-hover:shadow-blue-500/25 dark:group-hover:shadow-lime-500/25">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

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
                          .map((feature, featureIndex) => (
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
                Projenizi Hayata Geçirmeye Hazır mısınız?
              </h3>
              <p className="text-blue-100 dark:text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
                Uzman ekibimizle birlikte dijital başarı hikayenizi yazalım.
                Ücretsiz danışmanlık için hemen iletişime geçin.
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-600 dark:hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl"
                >
                  Ücretsiz Danışmanlık
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
