import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "sonner";
import { translations } from "@/contexts/translations";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const defaultLang = "tr";
  const t = translations[defaultLang];

  const baseUrl =
    process.env.NEXT_PUBLIC_DEFAULT_URL || "https://www.complysoftware.com";
  const ogImageUrl =
    process.env.NEXT_PUBLIC_OG_IMAGE_URL || `${baseUrl}/og-image.jpg`;
  const twitterImageUrl =
    process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || `${baseUrl}/twitter-image.jpg`;

  return {
    title: t.hero.mainTitle + t.hero.title[0],

    description: t.hero.subtitle,

    keywords: `uyumluluk yazılımı, yazılım çözümleri, kurumsal yazılım, ${t.technologies.react}, ${t.technologies.next}, SEO optimizasyonu, ${t.pricing.plans.professional.name}, ${t.pricing.plans.elite.name}`,

    authors: [{ name: "Comply Software Team" }],

    creator: "Comply Software",
    publisher: "Comply Software",
    openGraph: {
      title: t.hero.mainTitle + t.hero.title[0],
      description: t.hero.subtitle,
      url: baseUrl,
      siteName: "Comply Software",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t.hero.mainTitle + t.hero.title[0],
        },
      ],
      locale: defaultLang === "tr" ? "tr_TR" : "en_US",
      type: "website", // İçerik türü
    },

    twitter: {
      card: "summary_large_image",
      title: t.hero.mainTitle + t.hero.title[0],
      description: t.hero.subtitle,
      creator: "@ComplySoftware",
      images: [twitterImageUrl],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
