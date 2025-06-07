import { translations } from "@/contexts/translations";

import HomePageClient from "@/components/screens/HomePageClient";

// @ts-expect-error Next.js provides params dynamically
export async function generateMetadata({ params }) {
  const currentLang = params?.lang || "tr";
  const t = translations[currentLang as "en" | "tr"];

  const baseUrl =
    process.env.NEXT_PUBLIC_DEFAULT_URL || "https://www.complysoftware.net";
  const ogImageUrl =
    process.env.NEXT_PUBLIC_OG_IMAGE_URL || `${baseUrl}/og-image.jpg`;

  const twitterImageUrl =
    process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || `${baseUrl}/twitter-image.jpg`;

  return {
    title: `Comply Software | ${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Sitesi Çözümleri`,

    description: `${t.hero.subtitle} Modern, responsive ve SEO dostu web siteleri tasarlıyor, işletmelerin dijital varlığını güçlendiriyoruz. Kurumsal kimliğinize özel çözümlerimizle hemen tanışın!`,

    keywords: `
      modern web sitesi, kurumsal web tasarım, responsive web sitesi, SEO uyumlu site,
      web geliştirme, dijital çözüm, özel yazılım, e-ticaret sitesi,
      admin panelli web sitesi, kullanıcı dostu arayüz, profesyonel web tasarım,
      ${t.technologies.react}, ${t.technologies.next}, ${t.technologies.tailwind},
      ${t.pricing.plans.professional.name}, ${t.pricing.plans.elite.name},
      uyumluluk yazılımı, yazılım çözümleri, kurumsal yazılım,
      ${t.nav.home}, ${t.about.title}, ${t.pricing.title}, ${t.contact.title},
      ${t.hero.mainTitle}, ${t.hero.subtitle},
      web sitesi yapımı, uygun fiyatlı web sitesi, güvenli ödeme sistemleri,
      yaratıcı web tasarım, kullanıcı deneyimi, UX/UI, hızlı web sitesi,izmir,Izmir Yazılım,
      Comply,izmir yazılım şirketleri,web sitesi satın al,
    `,

    authors: [{ name: "Comply Software Team" }],
    creator: "Comply Software",
    publisher: "Comply Software",

    openGraph: {
      title: `Comply Software | ${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Sitesi Çözümleri`,
      description: `${t.hero.subtitle} Modern, responsive ve SEO dostu web siteleri tasarlıyor, işletmelerin dijital varlığını güçlendiriyoruz. Kurumsal kimliğinize özel çözümlerimizle hemen tanışın!`,
      url: baseUrl,
      siteName: "Comply Software",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Comply Software | ${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Siteleri`,
        },
      ],
      locale: currentLang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `Comply Software | ${t.hero.mainTitle} ${t.hero.title[0]} | Modern Web Sitesi Çözümleri`,
      description: `${t.hero.subtitle} Modern, responsive ve SEO dostu web siteleri tasarlıyor, işletmelerin dijital varlığını güçlendiriyoruz. Kurumsal kimliğinize özel çözümlerimizle hemen tanışın!`,
      creator: "@ComplySoftware",
      images: [twitterImageUrl],
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
