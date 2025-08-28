"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.05), 0 20px 60px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.15)"
      }}
      className="relative max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-2 md:p-6 rounded-[30px] shadow-2xl overflow-hidden"
    >
      {/* Liquid highlight effect */}
      <span 
        className="absolute inset-0 rounded-[30px] opacity-40"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)"
        }}
      />
      
      {/* Subtle noise for glass texture */}
      <span 
        className="absolute inset-0 rounded-[30px] opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "4px 4px"
        }}
      />

      {/* Enhanced glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/15 dark:bg-cyan-400/25 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-purple-500/12 dark:bg-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl md:rounded-2xl md:p-4"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(15px) saturate(140%)",
          WebkitBackdropFilter: "blur(15px) saturate(140%)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)"
        }}
      >
        {/* Inner card liquid effects */}
        <span 
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)"
          }}
        />
        
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
