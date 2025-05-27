"use client";

import AboutSection from "@/components/screens/About";
import ContactSection from "@/components/screens/Contact";
import HeroSection from "@/components/screens/Hero";
import Navbar from "@/components/screens/Navbar";
import PricingSection from "@/components/screens/Pricing-Section";
import { useLanguage } from "@/contexts/language-context";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
