"use client";

import { memo, lazy, Suspense } from "react";
import Navbar from "@/components/screens/Navbar";
import HeroSection from "@/components/screens/Hero";
import WhatsAppLink from "../blocks/whatsapp";
import ChatGemini from "../blocks/ChatGemini";

// Lazy load components for better performance
const AboutSection = lazy(() => import("@/components/screens/About"));
const ContactSection = lazy(() => import("@/components/screens/Contact"));
const Faq = lazy(() => import("@/components/screens/Faq"));
const Footer = lazy(() => import("@/components/screens/Footer"));
const PricingSection = lazy(() => import("@/components/screens/Pricing-Section"));
const ServicesSection = lazy(() => import("@/components/screens/Services"));
const TechnologiesSection = lazy(() => import("@/components/screens/Technologies"));

// Loading fallback component
const SectionLoader = memo(() => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-16"></div>
  </div>
));
SectionLoader.displayName = 'SectionLoader';

function HomePageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <TechnologiesSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PricingSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Faq />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
      
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 items-end">
        <ChatGemini />
        <WhatsAppLink phoneNumber="905525845941" />
      </div>
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(HomePageClient);
