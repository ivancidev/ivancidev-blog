import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo web: React, Next.js, TypeScript, Node.js y más.",
};

const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#555] mb-4">
          <Link href="/" className="hover:text-[#888] transition-colors">home</Link>
          <span>/</span>
          <span className="text-[#888]">blog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] mb-3">Blog</h1>
        <p className="text-[#555] max-w-lg">
          Artículos sobre React, Next.js, TypeScript, Node.js y todo lo que aprendo
          construyendo software. {posts.length} artículos publicados.
        </p>
      </div>

      {/* Tags filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button className="px-3 py-1 rounded-md text-xs font-mono bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 transition-all">
          Todos
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 rounded-md text-xs font-mono text-[#555] border border-[#1f1f1f] hover:text-[#888] hover:border-[#333] transition-all"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts list */}
      <div className="space-y-px">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-start gap-6 py-5 border-b border-[#1f1f1f] hover:border-[#00ff88]/20 transition-all duration-200"
          >
            {/* Number */}
            <span className="text-[#333] font-mono text-xs mt-1 shrink-0 w-6 text-right">
              {String(posts.length - i).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors mb-1">
                    {post.title}
                    {post.featured && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded font-mono bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20 align-middle">
                        featured
                      </span>
                    )}
                  </h2>
                  <p className="text-sm text-[#555] line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-xs font-mono text-[#444]">{post.date}</span>
                    <span className="text-xs font-mono text-[#444]">{post.readTime} lectura</span>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-[#444] hover:text-[#00ff88] transition-colors"
                        >
                          #{tag.toLowerCase().replace(/\s/g, "-")}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#333] group-hover:text-[#00ff88] transition-all shrink-0 mt-1 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
