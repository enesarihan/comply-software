"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Get Started",
      banner: "Huge discounts for a limited time! 🔥🔥",
    },
    hero: {
      title: [
        "Responsive",
        "Best Price",
        "SEO Optimization",
        "Vision",
        "Cutting-edge technologhy",
        "Modern Design",
      ],
      mainTitle: `We're building with ❤️ `,
      subtitle:
        "Streamline your compliance processes with cutting-edge software solutions designed for modern businesses",
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
    about: {
      title: "About Comply Software",
      subtitle:
        "We're dedicated to revolutionizing compliance management through innovative technology and user-centric design",
      features: {
        secure: {
          title: "Secure & Reliable",
          description:
            "Enterprise-grade security with 99.9% uptime guarantee to keep your compliance data safe and accessible",
        },
        expert: {
          title: "Expert Team",
          description:
            "Our team of compliance experts and software engineers work together to deliver exceptional solutions",
        },
        innovation: {
          title: "Innovation First",
          description:
            "Cutting-edge technology and continuous innovation to stay ahead of compliance requirements",
        },
      },
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle:
        "Select the perfect compliance solution for your business needs",
      mostPopular: "🔥 Sale",
      getStarted: "Get Started",
      contactSales: "Contact Sales",
      plans: {
        basic: {
          name: "Basic",
          description: "Perfect for small businesses",
          features: [
            "Up to 5 users",
            "Basic compliance templates",
            "Email support",
            "Monthly reports",
          ],
        },
        professional: {
          name: "Professional",
          description: "Ideal for growing companies",
          features: [
            "Up to 50 users",
            "Advanced compliance suite",
            "Priority support",
            "Real-time analytics",
            "API access",
          ],
        },
        elite: {
          name: "Elite",
          description: "For enterprise organizations",
          features: [
            "Unlimited users",
            "Custom compliance workflows",
            "24/7 dedicated support",
            "Advanced integrations",
            "White-label options",
          ],
        },
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to transform your compliance processes? Let's discuss how we can help your business",
      info: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "complysoftware@gmail.com",
        },
        phone: {
          label: "Phone",
          value: "+90 (537) 728-5464",
        },
        address: {
          label: "Address",
          value: "Izmir/Turkey",
        },
      },
      form: {
        title: "Send us a message",
        subtitle: "We'll get back to you within 24 hours",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        company: "Company",
        companyPlaceholder: "Your Company",
        message: "Message",
        messagePlaceholder: "Tell us about your compliance needs...",
        send: "Send Message",
      },
    },
    footer: {
      copyright: "© 2024 Comply Software. All rights reserved.",
    },
  },
  tr: {
    nav: {
      home: "Ana sayfa",
      about: "Hakkında",
      pricing: "Ücretler",
      contact: "İletişim",
      getStarted: "Başlayın",
      banner: "Kısa süreliğine dev indirimler! 🔥🔥",
    },
    hero: {
      title: [
        "Responsive",
        "Ücret",
        "SEO Optimazsyonu",
        "Vizyon",
        "Son Teknolojiler",
        "Modern Tasarım",
      ],
      mainTitle: "Sizin için ❤️ en iyi ",
      subtitle:
        "Modern işletmeler için tasarlanmış son teknoloji yazılım çözümleriyle uyumluluk süreçlerinizi kolaylaştırın",
      getStarted: "Başlayın",
      learnMore: "Daha Fazla Bilgi",
    },
    about: {
      title: "Comply Software Hakkında",
      subtitle:
        "Yenilikçi teknoloji ve kullanıcı odaklı tasarım ile uyumluluk yönetiminde devrim yaratmaya kendimizi adadık",
      features: {
        secure: {
          title: "Güvenli ve Güvenilir",
          description:
            "Uyumluluk verilerinizi güvenli ve erişilebilir tutmak için %99.9 çalışma süresi garantisi ile kurumsal düzeyde güvenlik",
        },
        expert: {
          title: "Uzman Ekip",
          description:
            "Uyumluluk uzmanları ve yazılım mühendislerinden oluşan ekibimiz olağanüstü çözümler sunmak için birlikte çalışır",
        },
        innovation: {
          title: "Önce İnovasyon",
          description:
            "Uyumluluk gereksinimlerinin önünde kalmak için son teknoloji ve sürekli inovasyon",
        },
      },
    },
    pricing: {
      title: "Planınızı Seçin",
      subtitle: "İş ihtiyaçlarınız için mükemmel uyumluluk çözümünü seçin",
      mostPopular: "🔥 Fırsat",
      getStarted: "Başlayın",
      contactSales: "Satış İletişim",
      plans: {
        basic: {
          name: "Temel",
          description: "Küçük işletmeler için mükemmel",
          features: [
            "5 kullanıcıya kadar",
            "Temel uyumluluk şablonları",
            "E-posta desteği",
            "Aylık raporlar",
          ],
        },
        professional: {
          name: "Profesyonel",
          description: "Büyüyen şirketler için ideal",
          features: [
            "50 kullanıcıya kadar",
            "Gelişmiş uyumluluk paketi",
            "Öncelikli destek",
            "Gerçek zamanlı analitik",
            "API erişimi",
          ],
        },
        elite: {
          name: "Elite",
          description: "Kurumsal organizasyonlar için",
          features: [
            "Sınırsız kullanıcı",
            "Özel uyumluluk iş akışları",
            "7/24 özel destek",
            "Gelişmiş entegrasyonlar",
            "Beyaz etiket seçenekleri",
          ],
        },
      },
    },
    contact: {
      title: "İletişime Geçin",
      subtitle:
        "Uyumluluk süreçlerinizi dönüştürmeye hazır mısınız? İşinize nasıl yardımcı olabileceğimizi konuşalım",
      info: {
        title: "İletişim Bilgileri",
        email: {
          label: "E-posta",
          value: "complysoftware@gmail.com",
        },
        phone: {
          label: "Telefon",
          value: "+90 (537) 728-5464",
        },
        address: {
          label: "Adres",
          value: "İzmir,Türkiye",
        },
      },
      form: {
        title: "Bize mesaj gönderin",
        subtitle: "24 saat içinde size geri döneceğiz",
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        company: "Şirket",
        companyPlaceholder: "Şirketiniz",
        message: "Mesaj",
        messagePlaceholder: "Uyumluluk ihtiyaçlarınız hakkında bize anlatın...",
        send: "Mesaj Gönder",
      },
    },
    footer: {
      copyright: "© 2024 Comply Software. Tüm hakları saklıdır.",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
