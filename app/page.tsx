// app/page.tsx
// Bu dosya bir Sunucu Bileşeni olduğu için "use client" direktifi OLMAMALIDIR.

// translations objesini sunucu tarafında güvenli bir şekilde import ediyoruz
import { translations } from "@/contexts/translations"; // translations.ts dosyasının doğru yolu

// Ana sayfa içeriğini barındıran istemci bileşenini import ediyoruz
import HomePageClient from "@/components/screens/HomePageClient";

// Bu fonksiyon sunucu tarafında çalışır ve bu sayfaya özel meta verileri üretir.
// @ts-expect-error Next.js provides params dynamically
export async function generateMetadata({ params }) {
  const currentLang = params?.lang || "tr";
  const t = translations[currentLang as "en" | "tr"];

  const baseUrl =
    process.env.NEXT_PUBLIC_DEFAULT_URL || "https://www.complysoftware.net";
  const ogImageUrl =
    process.env.NEXT_PUBLIC_OG_IMAGE_URL || `${baseUrl}/og-image.jpg`;

  return {
    title: `${t.hero.mainTitle} ${t.hero.title[0]} | Comply Software`,
    description: t.hero.subtitle,
    keywords: `uyumluluk yazılımı, yazılım çözümleri, kurumsal yazılım, ${t.technologies.react}, ${t.technologies.next}, SEO optimizasyonu, ${t.pricing.plans.professional.name}, ${t.pricing.plans.elite.name}, ${t.nav.home}, ${t.about.title}, ${t.pricing.title}, ${t.contact.title}, ${t.hero.mainTitle}, ${t.hero.subtitle},Enes SARIHAN,Aypars Çelik`,
    openGraph: {
      title: `${t.hero.mainTitle} ${t.hero.title[0]} | Comply Software`,
      description: t.hero.subtitle,
      url: baseUrl,
      siteName: "Comply Software",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${t.hero.mainTitle} ${t.hero.title[0]}`,
        },
      ],
      locale: currentLang === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        "en-US": `${baseUrl}/en`,
        "tr-TR": `${baseUrl}/tr`,
        "x-default": `${baseUrl}/tr`,
      },
    },
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
