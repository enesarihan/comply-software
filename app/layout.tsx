// app/layout.tsx
import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "sonner";
import Script from "next/script";
// import PerformanceMonitor from "@/components/utils/performance-monitor"; // Kaldırıldı

const inter = Inter({ subsets: ["latin"] });

// generateMetadata fonksiyonu burada kalır ve meta etiketlerini oluşturur.
// JSON-LD şemaları doğrudan HTML'e ekleneceği için bu kısımda değişiklik yapmıyoruz.
export async function generateMetadata(): Promise<Metadata> {
  const defaultLang = "tr"; // Varsayılan dil
  const { translations } = await import("@/contexts/translations");
  const t = translations[defaultLang];

  const baseUrl =
    process.env.NEXT_PUBLIC_DEFAULT_URL || "https://www.complysoftware.net";
  const ogImageUrl =
    process.env.NEXT_PUBLIC_OG_IMAGE_URL || `${baseUrl}/og-image.png`;
  const twitterImageUrl =
    process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || `${baseUrl}/twitter-image.jpg`;

  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo.png",
    },
    title: `Comply Software | ${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Sitesi Çözümleri `,

    description: `${t.hero.subtitle} Modern, responsive ve SEO dostu web siteleri tasarlıyor, işletmelerin dijital varlığını güçlendiriyoruz. Kurumsal kimliğinize özel çözümlerimizle hemen tanışın!`,

    keywords: [
      "modern web sitesi",
      "kurumsal web tasarım",
      "responsive web sitesi",
      "SEO",
      "web geliştirme",
      "özel yazılım",
      "e-ticaret",
      "admin panel",
      "profesyonel web tasarım",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Comply Software",
      "İzmir yazılım",
    ],

    authors: [{ name: "Comply Software Team" }],
    creator: "Comply Software",
    publisher: "Comply Software",

    openGraph: {
      title: `${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Sitesi Çözümleri | Comply Software`,
      description: `${t.hero.subtitle} Modern, responsive ve SEO dostu web siteleri tasarlıyor, işletmelerin dijital varlığını güçlendiriyoruz. Kurumsal kimliğinize özel çözümlerimizle hemen tanışın!`,
      url: baseUrl,
      siteName: "Comply Software",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Siteleri`,
        },
      ],
      locale: defaultLang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Sitesi Çözümleri | Comply Software`,
      description: `${t.hero.subtitle} Modern, responsive ve SEO dostu web siteleri tasarlıyor, işletmelerin dijital varlığını güçlendiriyoruz. Kurumsal kimliğinize özel çözümlerimizle hemen tanışın!`,
      creator: "@ComplySoftware",
      images: [twitterImageUrl],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // baseUrl'i burada da tanımlıyoruz.
  const currentBaseUrl =
    process.env.NEXT_PUBLIC_DEFAULT_URL || "https://www.complysoftware.net";

  // Schema markup için varsayılan dil ve çeviri objesi - static import kullanıyoruz
  const defaultLangForSchema = "tr";
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { translations } = require("@/contexts/translations");
  const tForSchema = translations[defaultLangForSchema];

  // FAQ sorularını çeviri dosyanızdan alarak JSON-LD formatında hazırla
  // `tForSchema.faq.questions` artık uygun bir dizi yapısına sahip.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // `mainEntity` alanına `tForSchema.faq.questions` dizisindeki her bir soruyu ve cevabı map'leyerek ekliyoruz.
    mainEntity: tForSchema.faq.questions.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comply Software",
    url: currentBaseUrl,
    logo: `${currentBaseUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: tForSchema.contact.info.phone.value,
      contactType: "customer service",
      email: tForSchema.contact.info.email.value,
    },
    sameAs: [
      // Sosyal medya linkleriniz varsa buraya ekleyin.
      "https://twitter.com/ComplySoftware", // Örnek Twitter linki
      "https://www.linkedin.com/company/comply-software", // Örnek LinkedIn linki
      // "https://facebook.com/ComplySoftware",
      // "https://instagram.com/ComplySoftware",
    ],
  };

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Google Analytics Global Site Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5BBPYV6MRZ"
          strategy="afterInteractive" // Sayfa etkileşimli hale geldikten sonra yüklenmesini sağlar
        />
        <Script
          id="google-analytics-config" // Benzersiz bir ID veriyoruz
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5BBPYV6MRZ');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {tForSchema.faq &&
          tForSchema.faq.questions &&
          tForSchema.faq.questions.length > 0 && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          )}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            {/* <PerformanceMonitor enabled={process.env.NODE_ENV === 'development'} /> */}
          </LanguageProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
