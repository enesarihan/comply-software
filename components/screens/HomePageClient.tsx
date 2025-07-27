"use client";

import AboutSection from "@/components/screens/About";
import ContactSection from "@/components/screens/Contact";
import Faq from "@/components/screens/Faq";
import Footer from "@/components/screens/Footer";
import HeroSection from "@/components/screens/Hero";
import Navbar from "@/components/screens/Navbar";
import PricingSection from "@/components/screens/Pricing-Section";
import TechnologiesSection from "@/components/screens/Technologies";
import WhatsAppLink from "../blocks/whatsapp";
import ChatGemini from "../blocks/ChatGemini";

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <PricingSection />
      <ContactSection />
      <Faq />
      <Footer />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 items-end">
        <ChatGemini />
        <WhatsAppLink phoneNumber="905525845941" />
      </div>
    </div>
  );
}
