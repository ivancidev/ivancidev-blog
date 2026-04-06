import type { Metadata } from "next";
import Link from "next/link";
import { stack, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Sobre mí: desarrollador Full Stack especializado en React, Next.js y Node.js.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#555] mb-12">
        <Link href="/" className="hover:text-[#888] transition-colors">home</Link>
        <span>/</span>
        <span className="text-[#888]">about</span>
      </div>

      {/* Profile header */}
      <div className="flex items-start gap-6 mb-12 pb-12 border-b border-[#1f1f1f]">
        {/* Avatar placeholder */}
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-[#00ccff]/10 border border-[#00ff88]/20 flex items-center justify-center shrink-0">
          <span className="text-2xl font-bold font-mono text-[#00ff88]">iv</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#f0f0f0] mb-1">
            [Tu nombre aquí]
          </h1>
          <p className="text-[#00ff88] font-mono text-sm mb-3">Full Stack Developer</p>
          <div className="flex items-center gap-2 text-xs text-[#555] font-mono">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Colombia · Remote
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-[#888] leading-relaxed mb-14">
        <h2 className="text-lg font-semibold text-[#f0f0f0]">Hola, soy [tu nombre] 👋</h2>
        <p>
          Soy un desarrollador Full Stack con más de 2 años de experiencia construyendo
          productos web modernos. Me especializo en el ecosistema{" "}
          <span className="text-[#f0f0f0]">JavaScript/TypeScript</span>, principalmente con
          React, Next.js en el frontend y Node.js en el backend.
        </p>
        <p>
          Me apasiona escribir código limpio, crear interfaces de usuario que se sientan
          rápidas y naturales, y compartir lo que aprendo con la comunidad dev.
          Este blog es mi espacio para documentar ese proceso.
        </p>
        <p>
          Actualmente estoy disponible para proyectos freelance y estoy abierto a
          oportunidades de trabajo remoto.
        </p>
      </div>

      {/* Tech stack */}
      <div className="mb-14">
        <h2 className="text-xs font-mono text-[#555] mb-6">TECH STACK</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {stack.map((group) => (
            <div
              key={group.category}
              className="p-4 rounded-xl border border-[#1f1f1f] bg-[#111]/50"
            >
              <h3 className="text-xs font-mono text-[#555] mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md font-mono text-[#888] bg-[#161616] border border-[#1f1f1f] hover:border-[#333] hover:text-[#f0f0f0] transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-14">
        <h2 className="text-xs font-mono text-[#555] mb-6">EXPERIENCIA</h2>
        <div className="space-y-4">
          {[
            {
              role: "Full Stack Developer",
              company: "[Tu empresa actual]",
              period: "2024 — Presente",
              description:
                "Desarrollo de aplicaciones web con React, Next.js y Node.js. Implementación de arquitecturas escalables y APIs RESTful.",
            },
            {
              role: "Frontend Developer",
              company: "[Empresa anterior]",
              period: "2023 — 2024",
              description:
                "Construcción de interfaces de usuario con React y TypeScript. Integración con APIs y optimización de performance.",
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl border border-[#1f1f1f] bg-[#111]/30"
            >
              <div className="w-px bg-[#1f1f1f] shrink-0 ml-2 my-1" />
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-medium text-[#f0f0f0]">{exp.role}</h3>
                  <span className="text-xs text-[#555]">@</span>
                  <span className="text-sm text-[#00ff88] font-mono">{exp.company}</span>
                </div>
                <p className="text-xs font-mono text-[#444] mb-2">{exp.period}</p>
                <p className="text-sm text-[#666]">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="mb-14">
        <h2 className="text-xs font-mono text-[#555] mb-6">ENCUÉNTRAME EN</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: "GitHub",
              href: socialLinks.github,
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              ),
              username: "@ivancidev",
            },
            {
              label: "LinkedIn",
              href: socialLinks.linkedin,
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
              username: "ivancidev",
            },
            {
              label: "Twitter/X",
              href: socialLinks.twitter,
              icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              ),
              username: "@ivancidev",
            },
            {
              label: "Email",
              href: socialLinks.email,
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              username: "Escríbeme",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-[#1f1f1f] hover:border-[#00ff88]/30 bg-[#111]/50 hover:bg-[#111] transition-all"
            >
              <span className="text-[#555] group-hover:text-[#00ff88] transition-colors">
                {social.icon}
              </span>
              <div className="text-center">
                <p className="text-xs font-semibold text-[#888] group-hover:text-[#f0f0f0] transition-colors">
                  {social.label}
                </p>
                <p className="text-[11px] text-[#444] font-mono">{social.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CV download CTA */}
      <div className="p-6 rounded-xl border border-[#1f1f1f] bg-[#111]/50 flex items-center justify-between gap-4">
        <div>
          <p className="font-medium text-[#f0f0f0] mb-1">¿Quieres saber más?</p>
          <p className="text-sm text-[#555]">Descarga mi CV o contáctame directamente.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={socialLinks.email}
            className="px-4 py-2 text-sm font-medium text-[#888] border border-[#1f1f1f] hover:border-[#333] hover:text-[#f0f0f0] rounded-lg transition-all"
          >
            Email
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-semibold bg-[#00ff88] text-black rounded-lg hover:bg-[#00cc6e] transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  );
}
