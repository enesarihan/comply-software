"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  url: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  // Memoized random rotation - reduces re-calculations
  const randomRotateY = React.useMemo(() => {
    return () => Math.floor(Math.random() * 21) - 10;
  }, []);

  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20",
        className
      )}
    >
      <div className="flex flex-col -mt-12 mb-12 text-center">
        <h1 className="font-bold text-4xl mb-2">{t.hero.screenTitle}</h1>
        <h2 className="text-md font-bold text-neutral-500 dark:text-neutral-700">
          {t.hero.screenSubTitle}
        </h2>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  suppressHydrationWarning
                  key={testimonial.url}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0, // Reduced animation intensity
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.3, // Faster animation for better performance
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Link 
                    href={testimonial.url} 
                    target="_blank"
                    aria-label={`${testimonial.name} profil sayfasını görüntüle`}
                    className="block relative overflow-hidden rounded-3xl group/card"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px) saturate(120%)",
                      WebkitBackdropFilter: "blur(10px) saturate(120%)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1)"
                    }}
                  >
                    {/* Liquid highlight effect */}
                    <span 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)"
                      }}
                    />
                    
                    {/* Subtle noise for glass texture */}
                    <span 
                      className="absolute inset-0 rounded-3xl opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "4px 4px"
                      }}
                    />
                    
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-contain object-center transition-all duration-500 group-hover/card:scale-105"
                    />
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0 mt-2">
            <button
              onClick={handlePrev}
              className="relative h-10 w-10 rounded-full overflow-hidden group/button"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.1)"
              }}
            >
              {/* Liquid highlight effect */}
              <span 
                className="absolute inset-0 rounded-full opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)"
                }}
              />
              
              {/* Subtle noise for glass texture */}
              <span 
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              
              <IconArrowLeft className="relative z-10 h-5 w-5 text-foreground group-hover/button:rotate-12 group-hover/button:text-blue-600 dark:group-hover/button:text-cyan-400 transition-all duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="relative h-10 w-10 rounded-full overflow-hidden group/button"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.1)"
              }}
            >
              {/* Liquid highlight effect */}
              <span 
                className="absolute inset-0 rounded-full opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)"
                }}
              />
              
              {/* Subtle noise for glass texture */}
              <span 
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "3px 3px"
                }}
              />
              
              <IconArrowRight className="relative z-10 h-5 w-5 text-foreground group-hover/button:-rotate-12 group-hover/button:text-blue-600 dark:group-hover/button:text-cyan-400 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
