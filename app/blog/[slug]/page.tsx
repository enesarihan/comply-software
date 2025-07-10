import { notFound } from "next/navigation";
import Navbar from "@/components/screens/Navbar";
import Image from "next/image";
import { posts } from "../posts";

// @ts-expect-error Next.js dynamic route param type conflict, safe to ignore
export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug);
  const shuffled = [...otherPosts].sort(() => Math.random() - 0.5);
  const randomPosts = shuffled.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col md:flex-row py-20 px-4 max-w-5xl mx-auto gap-8">
        <article className="flex-1 max-w-2xl">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src={post.image}
              alt={post.title}
              width={1000}
              height={1000}
              className="rounded-xl shadow-lg w-full max-h-64 object-cover mb-6 border border-border"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
              {post.title}
            </h1>
          </div>
          <div className="prose prose-lg text-muted-foreground whitespace-pre-line bg-card rounded-xl p-6 shadow">
            {post.content}
          </div>
        </article>
        <aside className="w-full md:w-80 md:sticky md:top-24 h-fit">
          <div className="bg-card rounded-xl shadow p-4 border border-border">
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              İlgili Bloglar
            </h2>
            <div className="flex flex-col gap-4">
              {randomPosts.map((rp) => (
                <a
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="flex gap-3 items-center hover:bg-muted rounded-lg p-2 transition"
                >
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    width={1000}
                    height={1000}
                    className="rounded-lg object-cover border border-border w-16 h-16"
                  />
                  <div>
                    <div className="font-medium text-foreground text-base">
                      {rp.title}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-2">
                      {rp.summary}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
