// Blog main page

import Navbar from "@/components/screens/Navbar";
import Image from "next/image";
import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Comply Blog | Web Sitesi, Yazılım ve Dijital Dönüşüm Bilgi Merkezi",
  description:
    "İşletmeniz için modern web sitesi, yazılım ve dijital dönüşüm stratejileri hakkında SEO uyumlu, güncel ve bilgilendirici blog içerikleri. İzmir yazılım, web tasarım, SEO ve dijital pazarlama konularında rehberlik.",
  keywords:
    "web sitesi, yazılım, dijital dönüşüm, SEO, izmir yazılım, web tasarım, kurumsal web sitesi, e-ticaret, kullanıcı deneyimi, UX/UI, mobil uygulama, dijital pazarlama, modern web sitesi, comply blog",
  authors: [{ name: "Comply Software Team" }],
  creator: "Comply Software",
  publisher: "Comply Software",
  openGraph: {
    title: "Comply Blog | Web Sitesi, Yazılım ve Dijital Dönüşüm Bilgi Merkezi",
    description:
      "İşletmeniz için modern web sitesi, yazılım ve dijital dönüşüm stratejileri hakkında SEO uyumlu, güncel ve bilgilendirici blog içerikleri.",
    url: process.env.NEXT_PUBLIC_DEFAULT_URL
      ? `${process.env.NEXT_PUBLIC_DEFAULT_URL}/blog`
      : "https://www.complysoftware.net/blog",
    siteName: "Comply Software",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_OG_IMAGE_URL ||
          "https://www.complysoftware.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Comply Blog | Web Sitesi, Yazılım ve Dijital Dönüşüm Bilgi Merkezi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comply Blog | Web Sitesi, Yazılım ve Dijital Dönüşüm Bilgi Merkezi",
    description:
      "İşletmeniz için modern web sitesi, yazılım ve dijital dönüşüm stratejileri hakkında SEO uyumlu, güncel ve bilgilendirici blog içerikleri.",
    creator: "@ComplySoftware",
    images: [
      process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL ||
        "https://www.complysoftware.net/twitter-image.jpg",
    ],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-left text-foreground">
          Comply Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-left font-medium">
          İşletmenizi modern, güvenli ve yüksek performanslı bir web sitesiyle
          büyütün. Dijital dünyada sizi öne çıkaran avantajları ve stratejileri
          keşfedin!
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="bg-card rounded-xl shadow-lg border border-border p-8 flex flex-col transition-transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={1000}
                height={600}
                className="rounded-lg mb-6 w-full max-h-56 object-cover border border-border shadow"
              />
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-700 dark:hover:text-lime-500 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-base text-muted-foreground mb-4">
                {post.summary}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block px-5 py-2 rounded-md bg-blue-500 dark:bg-lime-600 dark:hover:bg-lime-700 text-white font-semibold shadow hover:bg-blue-600 transition-all mt-auto"
              >
                Devamını Oku
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
