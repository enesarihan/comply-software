"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface GlassButtonProps {
  variant?: "default" | "primary" | "success" | "danger" | "comply";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
  glow?: boolean;
  animated?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "md", 
    asChild = false, 
    glow = true,
    animated = true,
    children,
    onClick,
    disabled,
    type = "button"
  }, ref) => {
    
    const variants = {
      default: {
        background: "rgba(255, 255, 255, 0.1)",
        color: "rgb(255, 255, 255, 0.9)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        glowColor: "rgba(59, 130, 246, 0.4)"
      },
      primary: {
        background: "rgba(59, 130, 246, 0.15)",
        color: "rgb(255, 255, 255)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        glowColor: "rgba(59, 130, 246, 0.6)"
      },
      success: {
        background: "rgba(34, 197, 94, 0.15)",
        color: "rgb(255, 255, 255)",
        border: "1px solid rgba(34, 197, 94, 0.3)",
        glowColor: "rgba(34, 197, 94, 0.6)"
      },
      danger: {
        background: "rgba(239, 68, 68, 0.15)",
        color: "rgb(255, 255, 255)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        glowColor: "rgba(239, 68, 68, 0.6)"
      },
      comply: {
        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.15) 50%, rgba(34, 197, 94, 0.15) 100%)",
        color: "rgb(255, 255, 255)",
        border: "1px solid rgba(168, 85, 247, 0.3)",
        glowColor: "rgba(168, 85, 247, 0.6)"
      }
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-lg",
      md: "h-10 px-4 text-sm rounded-xl",
      lg: "h-12 px-6 text-base rounded-xl",
      xl: "h-14 px-8 text-lg rounded-2xl"
    };

    const ButtonComponent = animated ? motion.button : "button";
    const Comp = asChild ? Slot : ButtonComponent;

    const animationProps = animated ? {
      whileHover: { 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      },
      whileTap: { 
        scale: 0.95,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }
    } : {};

    return (
      <div className="relative inline-block">
        {/* Glow Effect */}
        {glow && (
          <div 
            className="absolute -inset-2 rounded-2xl blur-lg opacity-50 animate-pulse"
            style={{ background: variants[variant].glowColor }}
          />
        )}
        
        <Comp
          ref={ref}
          className={cn(
            "relative font-medium transition-all duration-300 ease-out",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "overflow-hidden group",
            sizes[size],
            className
          )}
          style={{
            background: variants[variant].background,
            color: variants[variant].color,
            border: variants[variant].border,
            backdropFilter: "blur(20px) saturate(150%)",
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.05), 0 8px 32px rgba(0, 0, 0, 0.12)"
          }}
          {...animationProps}
          onClick={onClick}
          disabled={disabled}
          type={type}
        >
          {/* Glass texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
          
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </div>
          
          {/* Content */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {children}
          </span>
        </Comp>
      </div>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };
