import Link from "next/link";
import Image from "next/image";
import { posts, tools } from "@/lib/data";

export default function HomePage() {
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  const featuredTools = tools.filter((t) => t.featured).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1f1f1f] bg-[#111] text-xs font-mono text-[#888] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            Disponible para proyectos freelance
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Hola, soy{" "}
            <span className="text-[#00ff88]">
              [tu nombre]
            </span>
            <br />
            <span className="text-[#888]">Full Stack Developer</span>
          </h1>

          {/* Description */}
          <p className="text-[#888] text-lg max-w-xl leading-relaxed mb-10">
            Construyo productos web modernos con{" "}
            <span className="text-[#f0f0f0]">React</span>,{" "}
            <span className="text-[#f0f0f0]">Next.js</span> y{" "}
            <span className="text-[#f0f0f0]">Node.js</span>. Escribo sobre
            lo que aprendo para ayudar a otros devs a crecer más rápido.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff88] text-black font-semibold text-sm rounded-lg hover:bg-[#00cc6e] transition-colors"
            >
              Leer el Blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[#888] border border-[#1f1f1f] hover:border-[#333] hover:text-[#f0f0f0] text-sm rounded-lg transition-all"
            >
              Sobre mí
            </Link>
            <a
              href="https://github.com/ivancidev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#00ff88] transition-colors font-mono"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              @ivancidev
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] py-10 grid grid-cols-3 gap-6">
        {[
          { value: posts.length + "+", label: "Artículos publicados" },
          { value: tools.length + "+", label: "Proyectos & tools" },
          { value: "2+", label: "Años de experiencia" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-[#00ff88] mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-[#555]">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* ── FEATURED POSTS ───────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-[#f0f0f0]">Últimos artículos</h2>
            <p className="text-sm text-[#555] mt-1">Lo que he estado aprendiendo</p>
          </div>
          <Link
            href="/blog"
            className="text-sm text-[#555] hover:text-[#00ff88] transition-colors font-mono flex items-center gap-1"
          >
            Ver todos
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="space-y-3">
          {featuredPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start justify-between p-4 rounded-xl border border-[#1f1f1f] hover:border-[#00ff88]/30 bg-[#111]/50 hover:bg-[#111] transition-all duration-200"
            >
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <span className="text-[#333] font-mono text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-[#f0f0f0] group-hover:text-[#00ff88] transition-colors truncate">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#555] mt-0.5 line-clamp-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-[#444] font-mono">{post.date}</span>
                    <span className="text-[#333]">·</span>
                    <span className="text-xs text-[#444] font-mono">{post.readTime}</span>
                  </div>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-[#333] group-hover:text-[#00ff88] transition-all shrink-0 mt-1 ml-4 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED TOOLS ───────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-[#f0f0f0]">Tools & Proyectos</h2>
            <p className="text-sm text-[#555] mt-1">Lo que he construido</p>
          </div>
          <Link
            href="/tools"
            className="text-sm text-[#555] hover:text-[#00ff88] transition-colors font-mono flex items-center gap-1"
          >
            Ver todos
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map((tool) => (
            <div
              key={tool.id}
              className="group rounded-xl border border-[#1f1f1f] hover:border-[#00ff88]/30 bg-[#111]/50 hover:bg-[#111] transition-all duration-200 overflow-hidden"
            >
              {tool.image && (
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  {!tool.image && (
                    <div className="w-8 h-8 rounded-md bg-[#161616] border border-[#1f1f1f] flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  )}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-mono ml-auto ${
                      tool.status === "live"
                        ? "bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20"
                        : "bg-[#1f1f1f] text-[#555] border border-[#2a2a2a]"
                    }`}
                  >
                    {tool.status}
                  </span>
                </div>
                <h3 className="font-semibold text-[#f0f0f0] mb-1 group-hover:text-[#00ff88] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed line-clamp-2">{tool.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {tool.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] text-[#444] font-mono">
                      #{tag.toLowerCase().replace(/\s/g, "-")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────── */}
      <section className="border-t border-[#1f1f1f] py-16 pb-24">
        <div className="relative p-8 rounded-2xl border border-[#00ff88]/20 bg-gradient-to-br from-[#111] to-[#0d0d0d] overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0] mb-3">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-[#888] mb-6 max-w-md">
              Estoy disponible para colaboraciones, freelance o simplemente para charlar sobre tech.
            </p>
            <a
              href="mailto:herlanherbas@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00ff88] text-black font-semibold text-sm rounded-lg hover:bg-[#00cc6e] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contáctame
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
