"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "editor";
  label?: string;
  error?: string;
}

const GlassInput = React.forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, variant = "default", label, error, ...props }, ref) => {
    const variants = {
      default: {
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        focusBorder: "1px solid rgba(59, 130, 246, 0.4)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)"
      },
      editor: {
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        focusBorder: "1px solid rgba(168, 85, 247, 0.4)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 6px 20px rgba(0, 0, 0, 0.08)"
      }
    };

    return (
      <div className="relative">
        {label && (
          <label className="block text-sm font-medium text-white/80 mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            className={cn(
              "w-full px-4 py-3 rounded-xl transition-all duration-300",
              "text-white placeholder-white/50",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            style={{
              background: variants[variant].background,
              border: variants[variant].border,
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              boxShadow: variants[variant].boxShadow
            }}
            {...props}
          />
          
          {/* Glass texture overlay */}
          <div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(255, 255, 255, 0.04) 100%)"
            }}
          />
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";

interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "editor";
  label?: string;
  error?: string;
}

const GlassTextarea = React.forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ className, variant = "default", label, error, ...props }, ref) => {
    const variants = {
      default: {
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1)"
      },
      editor: {
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 6px 20px rgba(0, 0, 0, 0.08)"
      }
    };

    return (
      <div className="relative">
        {label && (
          <label className="block text-sm font-medium text-white/80 mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          <textarea
            ref={ref}
            className={cn(
              "w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none",
              "text-white placeholder-white/50",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            style={{
              background: variants[variant].background,
              border: variants[variant].border,
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              boxShadow: variants[variant].boxShadow
            }}
            {...props}
          />
          
          {/* Glass texture overlay */}
          <div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%, rgba(255, 255, 255, 0.04) 100%)"
            }}
          />
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    );
  }
);

GlassTextarea.displayName = "GlassTextarea";

export { GlassInput, GlassTextarea };
