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
        "Responsive Design",
        "Best Price",
        "SEO Optimization",
        "Vision",
        "Cutting-edge technologhy",
        "Modern Design",
      ],
      mainTitle: `We're building 🎯  `,
      subtitle:
        "Streamline your compliance processes with cutting-edge software solutions designed for modern businesses",
      getStarted: "Get Started",
      learnMore: "Let Us Call You",
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
        "Select the most suitable software solution for your business needs",
      mostPopular: "🔥 Best Seller",
      getStarted: "Get Started",
      contactSales: "Contact Sales",
      plans: {
        basic: {
          name: "Basic",
          description:
            "A perfect starting point for individual users and simple projects.",
          features: [
            "Single-page modern website",
            "Fully responsive design for all devices",
            "Detailed contact form",
            "Fast delivery time",
          ],
        },
        professional: {
          name: "Professional",
          description:
            "A powerful and comprehensive solution for small and medium-sized businesses.",
          features: [
            "Multi-page dynamic website structure",
            "Advanced SEO optimization",
            "Modern responsive design",
            "Priority technical support",
            "1 year of free hosting and domain",
            "1 year of technical support service",
            "Strategic structure to increase customer potential",
            "Form and data collection infrastructure",
          ],
        },
        elite: {
          name: "Elite",
          description:
            "A complete package tailored for corporate companies and large-scale projects.",
          features: [
            "All features from the Professional plan",
            "Advanced Admin Panel (content management)",
            "Payment integration with Stripe",
            "Fully-featured e-commerce infrastructure",
            "2 years of free hosting and domain",
            "2 years of priority technical support",
            "Scalable architecture and integrations",
            "Customizable user interface",
            "Advanced security features",
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
    technologies: {
      title: "Technologies We Use",
      subtitle: "Modern and reliable solutions",
      description:
        "We utilize the following powerful technologies in our projects.",
      more: "More coming soon...",
      next: "A full-featured framework built on React",
      react: "A powerful library for building user interfaces",
      tailwind: "Utility-first CSS framework for fast UI development",
      stripe: "Secure and flexible payment infrastructure",
      supabase: "Open source Firebase alternative",
      firebase: "Realtime backend and hosting platform",
      details: {
        next: "Next.js offers excellent SEO and performance with SSR and static site generation.",
        react:
          "React’s component architecture enables scalable and maintainable apps.",
        tailwind:
          "Tailwind CSS is perfect for building responsive and customizable UIs.",
        stripe:
          "Stripe simplifies global payments with robust and secure APIs.",
        supabase: "Supabase handles database, auth, and storage effortlessly.",
        firebase:
          "Firebase delivers a full backend suite from hosting to push notifications.",
      },
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
        "Responsive Tasarım",
        "Ücret Fırsatları",
        "SEO Optimizasyonu",
        "Vizyon",
        "Son Teknolojiler",
        "Modern Tasarım",
      ],
      mainTitle: "Sizin için en iyi 🎯 ",
      subtitle:
        "Modern işletmeler için tasarlanmış son teknoloji yazılım çözümleriyle uyumluluk süreçlerinizi kolaylaştırın",
      getStarted: "Başlayın",
      learnMore: "Sizi Arayılım",
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
      subtitle: "İş ihtiyaçlarınıza en uygun yazılım çözümünü seçin",
      mostPopular: "🔥 Çok Satan",
      getStarted: "Başlayın",
      contactSales: "Satış ile İletişime Geçin",
      plans: {
        basic: {
          name: "Temel",
          description:
            "Bireysel kullanıcılar ve basit projeler için mükemmel başlangıç noktası.",
          features: [
            "Tek sayfalık modern web sitesi",
            "Mobil ve tüm cihazlarla uyumlu tasarım (Full Responsive)",
            "Detaylı iletişim formu",
            "Hızlı teslim süresi",
          ],
        },
        professional: {
          name: "Profesyonel",
          description:
            "Küçük ve orta ölçekli işletmeler için güçlü ve kapsamlı bir çözüm.",
          features: [
            "Çok sayfalı dinamik site yapısı",
            "Gelişmiş SEO optimizasyonu",
            "Mobil uyumlu (responsive) modern tasarım",
            "Öncelikli teknik destek",
            "1 Yıl ücretsiz hosting ve alan adı (domain)",
            "1 Yıl teknik destek hizmeti",
            "Müşteri potansiyeli artırmaya yönelik stratejik yapı",
            "Form ve veri toplama altyapısı",
          ],
        },
        elite: {
          name: "Elite",
          description:
            "Kurumsal firmalar ve büyük ölçekli projeler için eksiksiz çözüm paketi.",
          features: [
            "Profesyonel plandaki tüm özellikler",
            "Güçlü Admin Paneli (İçerik yönetimi)",
            "Stripe entegrasyonu ile ödeme altyapısı",
            "Tam özellikli e-ticaret altyapısı",
            "2 Yıl ücretsiz hosting + alan adı",
            "2 Yıl öncelikli teknik destek",
            "Ölçeklenebilir yapı ve entegrasyonlar",
            "Özelleştirilebilir kullanıcı arayüzü",
            "Gelişmiş güvenlik önlemleri",
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
    technologies: {
      title: "Kullandığımız Teknolojiler",
      subtitle: "Modern ve güvenilir çözümler",
      description: "Projelerimizde aşağıdaki güçlü teknolojileri kullanıyoruz.",
      more: "Daha fazlası yakında...",
      next: "React tabanlı tam özellikli framework",
      react: "Kullanıcı arayüzleri için güçlü bir kütüphane",
      tailwind: "Hızlı UI geliştirme için utility-first CSS",
      stripe: "Güvenli ve esnek ödeme altyapısı",
      supabase: "Açık kaynaklı Firebase alternatifi",
      firebase: "Gerçek zamanlı backend ve barındırma",
      details: {
        next: "Next.js, SSR ve statik site üretimi ile mükemmel SEO ve performans sunar.",
        react:
          "React bileşen yapısı ile sürdürülebilir ve ölçeklenebilir projeler oluşturur.",
        tailwind:
          "Tailwind CSS, esnek ve özelleştirilebilir UI'lar inşa etmek için idealdir.",
        stripe:
          "Stripe, dünya genelinde ödeme almanızı kolaylaştırır ve güvenli hale getirir.",
        supabase:
          "Supabase ile veritabanı, auth ve storage işlemleri zahmetsizce halledilir.",
        firebase:
          "Firebase, push bildirimden hosting’e kadar eksiksiz bir çözüm sunar.",
      },
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

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
