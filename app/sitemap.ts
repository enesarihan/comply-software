// app/sitemap.ts
import { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const baseUrl =
  process.env.NEXT_PUBLIC_DEFAULT_URL || "https://www.complysoftware.net";

export default function sitemap(): MetadataRoute.Sitemap {
  // ...existing code...
  // Add main blog page
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily", // Günlük olarak değişir
      priority: 1, // En yüksek öncelik
    },
    {
      url: `${baseUrl}/blog`, // Blog ana sayfası
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#about`, // Hakkımızda bölümü
      lastModified: new Date(),
      changeFrequency: "weekly", // Haftalık değişir
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#technologies`, // Teknolojiler bölümü
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#pricing`, // Fiyatlandırma bölümü
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`, // İletişim bölümü
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#faq`, // SSS bölümü
      lastModified: new Date(),
      changeFrequency: "monthly", // Aylık değişir
      priority: 0.5,
    },
  ];

  // Blog posts
  for (const post of posts) {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Deduplicate just in case
  const seen = new Set<string>();
  const deduped = entries.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });

  return deduped;
}
