"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  variant?: "default" | "intense" | "subtle" | "editor";
  children: React.ReactNode;
  glowColor?: string;
  animated?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, glowColor, animated = true, onClick }, ref) => {
    const variants = {
      default: {
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px) saturate(150%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.1)"
      },
      intense: {
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(25px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.1), 0 12px 40px rgba(0, 0, 0, 0.15)"
      },
      subtle: {
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(15px) saturate(120%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 4px 16px rgba(0, 0, 0, 0.08)"
      },
      editor: {
        background: "rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(30px) saturate(200%)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(0, 0, 0, 0.08), 0 16px 48px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.05)"
      }
    };

    const CardComponent = animated ? motion.div : "div";

    const animationProps = animated ? {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
      whileHover: { scale: 1.02, transition: { duration: 0.2 } }
    } : {};

    return (
      <div className="relative">
        {/* Glow Effect */}
        {glowColor && (
          <div 
            className="absolute -inset-4 rounded-2xl blur-xl opacity-20 animate-pulse"
            style={{ background: glowColor }}
          />
        )}
        
        <CardComponent
          ref={ref}
          className={cn(
            "relative rounded-2xl overflow-hidden",
            className
          )}
          style={variants[variant]}
          {...animationProps}
          onClick={onClick}
        >
          {/* Glass texture overlay */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)"
            }}
          />
          
          {/* Noise texture for realistic glass effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
              backgroundSize: "3px 3px"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </CardComponent>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
