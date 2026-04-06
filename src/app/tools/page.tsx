import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tools & Proyectos",
  description: "Proyectos, herramientas y boilerplates que he construido.",
};

export default function ToolsPage() {
  const live = tools.filter((t) => t.status === "live");
  const wip = tools.filter((t) => t.status === "wip");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#555] mb-4">
          <Link href="/" className="hover:text-[#888] transition-colors">home</Link>
          <span>/</span>
          <span className="text-[#888]">tools</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#f0f0f0] mb-3">Tools & Proyectos</h1>
        <p className="text-[#555] max-w-lg">
          Lo que construyo en mi tiempo libre. Proyectos personales, templates y herramientas
          para mejorar el flujo de desarrollo.
        </p>
      </div>

      {/* Live projects */}
      {live.length > 0 && (
        <div className="mb-14">
          <h2 className="text-xs font-mono text-[#555] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
            LIVE — {live.length} proyecto{live.length !== 1 ? "s" : ""}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {live.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      )}

      {/* WIP projects */}
      {wip.length > 0 && (
        <div>
          <h2 className="text-xs font-mono text-[#555] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#444]" />
            EN PROGRESO — {wip.length} proyecto{wip.length !== 1 ? "s" : ""}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {wip.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ToolCard({ tool }: { tool: (typeof tools)[0] }) {
  return (
    <div className="group p-5 rounded-xl border border-[#1f1f1f] hover:border-[#00ff88]/30 bg-[#111]/50 hover:bg-[#111] transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#1f1f1f] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-mono ${
            tool.status === "live"
              ? "bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20"
              : tool.status === "wip"
              ? "bg-[#ffa500]/10 text-[#ffa500] border border-[#ffa500]/20"
              : "bg-[#1f1f1f] text-[#555] border border-[#2a2a2a]"
          }`}
        >
          {tool.status === "wip" ? "en progreso" : tool.status}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-[#f0f0f0] mb-2 group-hover:text-[#00ff88] transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-[#555] leading-relaxed mb-4">{tool.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded font-mono text-[#444] bg-[#161616] border border-[#1f1f1f]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-3 border-t border-[#1f1f1f]">
        {tool.github && (
          <a
            href={tool.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#f0f0f0] transition-colors font-mono"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Source
          </a>
        )}
        {tool.url && tool.url !== "#" && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#555] hover:text-[#00ff88] transition-colors font-mono"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
