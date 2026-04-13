import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post no encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Sample content map for demo purposes
const sampleContent: Record<string, string> = {
  "primeros-pasos-con-nextjs-14": `
## ¿Qué es el App Router?

Next.js 14 introdujo el **App Router** como el nuevo estándar para estructurar aplicaciones. A diferencia del Pages Router, el App Router usa el directorio \`/app\` y trae consigo Server Components por defecto.

### Server Components vs Client Components

Por defecto, todos los componentes en el App Router son **Server Components**. Esto significa que se renderizan en el servidor y no incluyen JavaScript en el cliente.

\`\`\`tsx
// Server Component (por defecto)
async function PostList() {
  const posts = await db.posts.findAll(); // Se ejecuta en servidor
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
\`\`\`

Para usar hooks o interactividad, necesitas añadir \`"use client"\`:

\`\`\`tsx
"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

### Layouts anidados

Una de las mejores características del App Router son los **layouts anidados**. Puedes tener un layout para toda la app y layouts específicos para cada sección:

\`\`\`
app/
  layout.tsx      → Layout raíz (navbar, footer)
  page.tsx        → Página home
  blog/
    layout.tsx    → Layout específico del blog
    page.tsx      → Lista de posts
    [slug]/
      page.tsx    → Post individual
\`\`\`

## Conclusión

El App Router representa un cambio paradigmático en cómo construimos aplicaciones React. Vale la pena aprender el nuevo modelo mental de Server vs Client Components para aprovechar todo su potencial.
  `,
};

export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = sampleContent[post.slug] || post.excerpt;
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#555] mb-8">
        <Link href="/" className="hover:text-[#888] transition-colors">home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#888] transition-colors">blog</Link>
        <span>/</span>
        <span className="text-[#888] truncate max-w-[200px]">{post.slug}</span>
      </div>
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md font-mono bg-[#111] text-[#555] border border-[#1f1f1f]"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] leading-tight mb-4">
        {post.title}
      </h1>
      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-[#555] font-mono mb-10 pb-10 border-b border-[#1f1f1f]">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime} de lectura</span>
      </div>
      {/* Content */}
      <div className="prose-dark space-y-6 text-[#888] leading-relaxed">
        {/* Excerpt */}
        <p className="text-lg text-[#aaa] leading-relaxed border-l-2 border-[#00ff88] pl-4">
          {post.excerpt}
        </p>

        {/* Render basic markdown-like content */}
        <div className="space-y-4">
          {content.split("\n\n").filter(Boolean).map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-[#f0f0f0] mt-10 mb-4">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-semibold text-[#f0f0f0] mt-8 mb-3">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.includes("```")) {
              const code = block.replace(/```\w*\n?/, "").replace(/```/, "").trim();
              return (
                <pre key={i} className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg p-4 overflow-x-auto">
                  <code className="text-[#e6edf3] text-sm font-mono leading-relaxed">{code}</code>
                </pre>
              );
            }
            return (
              <p key={i} className="text-[#888] leading-relaxed">
                {block.replace(/\*\*(.*?)\*\*/g, "$1")}
              </p>
            );
          })}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 p-4 rounded-xl border border-[#1f1f1f] bg-[#111]">
          <p className="text-sm text-[#555] font-mono">
            {"// TODO: Conectar con MDX para posts completos desde archivos .mdx"}
          </p>
        </div>
      </div>
      {/* Related posts */}
      <div className="mt-16 pt-10 border-t border-[#1f1f1f]">
        <h3 className="text-sm font-mono text-[#555] mb-6">TAMBIÉN TE PUEDE INTERESAR</h3>
        <div className="space-y-3">
          {relatedPosts.map((related) => (
            <Link
              key={related.slug}
              href={`/blog/${related.slug}`}
              className="group flex items-center justify-between p-3 rounded-lg border border-[#1f1f1f] hover:border-[#00ff88]/30 transition-all"
            >
              <div>
                <p className="text-sm font-medium text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors">
                  {related.title}
                </p>
                <p className="text-xs text-[#444] font-mono mt-0.5">{related.readTime} lectura</p>
              </div>
              <svg
                className="w-4 h-4 text-[#333] group-hover:text-[#00ff88] transition-all shrink-0 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
