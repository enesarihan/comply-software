"use client";

import AboutSection from "@/components/screens/About";
import ContactSection from "@/components/screens/Contact";
import Footer from "@/components/screens/Footer";
import HeroSection from "@/components/screens/Hero";
import Navbar from "@/components/screens/Navbar";
import PricingSection from "@/components/screens/Pricing-Section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
