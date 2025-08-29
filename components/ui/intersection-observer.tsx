"use client";

import { useEffect, useRef, useState, memo } from "react";

interface IntersectionObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const IntersectionObserverComponent = memo(function IntersectionObserverComponent({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : null}
    </div>
  );
});

export default IntersectionObserverComponent;
