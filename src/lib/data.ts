// ─── Developer Toolkit ────────────────────────────────────────────────────────

export type DevTool = {
  name: string;
  description: string;
  category: "Editor" | "Extensions" | "CLI" | "Browser" | "Design" | "Productivity" | "AI";
  url?: string;
  color: string;
  initials: string;
  favorite?: boolean;
};

export const devTools: DevTool[] = [
  // Editor
  {
    name: "Cursor",
    description: "Mi editor principal hoy. IDE con IA profundamente integrada: chat contextual del proyecto, edición multi-archivo, autocompletado avanzado y agente de código autónomo. Reemplazó a VS Code en mi flujo diario.",
    category: "Editor",
    url: "https://cursor.sh",
    color: "#646cff",
    initials: "Cu",
    favorite: true,
  },
  {
    name: "VS Code",
    description: "Editor ligero y extensible con el mejor ecosistema de extensiones para web dev. Lo uso para proyectos específicos y como respaldo.",
    category: "Editor",
    url: "https://code.visualstudio.com",
    color: "#007ACC",
    initials: "VS",
  },
  {
    name: "GitHub Copilot",
    description: "Autocompletado de código con IA en el editor. Acelera el boilerplate y sugiere soluciones en contexto. Útil dentro de VS Code cuando no uso Cursor.",
    category: "Editor",
    url: "https://github.com/features/copilot",
    color: "#6e40c9",
    initials: "Co",
  },

  // Extensions
  {
    name: "Prettier",
    description: "Formateador de código automático. Olvídate de debatir estilos — Prettier decide por ti y mantiene consistencia en todo el proyecto.",
    category: "Extensions",
    url: "https://prettier.io",
    color: "#F7B93E",
    initials: "Pr",
  },
  {
    name: "ESLint",
    description: "Análisis estático de JavaScript y TypeScript. Catch errores antes de que lleguen a producción y mantiene el código limpio.",
    category: "Extensions",
    url: "https://eslint.org",
    color: "#4B32C3",
    initials: "ES",
  },
  {
    name: "GitLens",
    description: "Git supercharged en VS Code. Ver historial de líneas, blame, comparar branches y explorar commits sin salir del editor.",
    category: "Extensions",
    url: "https://gitlens.amod.io",
    color: "#E05D44",
    initials: "GL",
    favorite: true,
  },
  {
    name: "Error Lens",
    description: "Muestra errores y warnings directamente en la línea donde ocurren, inline. Debugging mucho más rápido que revisar el panel de problemas.",
    category: "Extensions",
    color: "#FF6B6B",
    initials: "EL",
  },
  {
    name: "Tailwind IntelliSense",
    description: "Autocompletado, hover previews y linting para clases de Tailwind CSS. Esencial para trabajar con Tailwind en cualquier proyecto.",
    category: "Extensions",
    url: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    color: "#38BDF8",
    initials: "TW",
    favorite: true,
  },
  {
    name: "Astro Extension",
    description: "Extensión oficial de Astro para VS Code y Cursor: syntax highlighting para archivos .astro, IntelliSense, autocompletado de componentes y detección de errores en tiempo real.",
    category: "Extensions",
    url: "https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode",
    color: "#FF5D01",
    initials: "As",
  },
  {
    name: "Shadcn/ui",
    description: "Librería de componentes accesibles y personalizables para Next.js + Tailwind. No es un paquete npm — copias los componentes directamente y los adaptás a tu diseño.",
    category: "Extensions",
    url: "https://ui.shadcn.com",
    color: "#18181B",
    initials: "Sh",
    favorite: true,
  },

  // CLI
  {
    name: "pnpm",
    description: "Gestor de paquetes rápido y eficiente en disco. Hasta 3× más rápido que npm en installs. Mi default para todos los proyectos JavaScript.",
    category: "CLI",
    url: "https://pnpm.io",
    color: "#F69220",
    initials: "pm",
    favorite: true,
  },
  {
    name: "Bun",
    description: "Runtime JavaScript ultra rápido todo-en-uno: ejecuta, bundlea, testea y gestiona paquetes. Alternativa moderna a Node + npm que uso para scripts y proyectos nuevos.",
    category: "CLI",
    url: "https://bun.sh",
    color: "#FBF0DF",
    initials: "Bn",
  },
  {
    name: "Git",
    description: "Control de versiones distribuido. El workflow de ramas, commits y merges es esencial en todo proyecto profesional.",
    category: "CLI",
    url: "https://git-scm.com",
    color: "#F05032",
    initials: "Gt",
  },
  {
    name: "GitHub CLI",
    description: "Manejar PRs, issues y repos de GitHub directamente desde la terminal sin romper el flujo de trabajo.",
    category: "CLI",
    url: "https://cli.github.com",
    color: "#6e7681",
    initials: "gh",
  },
  {
    name: "Node.js",
    description: "Runtime de JavaScript del lado del servidor. Base del tooling moderno: bundlers, linters, servidores Express y NestJS.",
    category: "CLI",
    url: "https://nodejs.org",
    color: "#339933",
    initials: "No",
  },
  {
    name: "Vercel CLI",
    description: "Deploy de proyectos Next.js y Astro directo desde la terminal. Preview URLs automáticas en cada push y configuración de env vars sin tocar la UI.",
    category: "CLI",
    url: "https://vercel.com/docs/cli",
    color: "#000000",
    initials: "VC",
  },
  {
    name: "Docker",
    description: "Containerización de aplicaciones para entornos reproducibles. Uso Docker Compose para levantar PostgreSQL, Redis y servicios locales en segundos.",
    category: "CLI",
    url: "https://docker.com",
    color: "#2496ED",
    initials: "Dk",
    favorite: true,
  },

  // Browser
  {
    name: "React DevTools",
    description: "Inspeccionar el árbol de componentes, estado y props de aplicaciones React directamente en el navegador.",
    category: "Browser",
    url: "https://react.dev/learn/react-developer-tools",
    color: "#61DAFB",
    initials: "Rx",
  },
  {
    name: "Wappalyzer",
    description: "Detecta el stack tecnológico de cualquier web al instante: frameworks, CMS, analytics, CDN. Útil para analizar la competencia o aprender de otros proyectos.",
    category: "Browser",
    url: "https://www.wappalyzer.com",
    color: "#9B59B6",
    initials: "Wp",
  },

  // Design
  {
    name: "Figma",
    description: "Diseño de UI/UX colaborativo en la web. Para wireframes, mockups, sistemas de diseño y handoff con el equipo.",
    category: "Design",
    url: "https://figma.com",
    color: "#F24E1E",
    initials: "Fi",
    favorite: true,
  },
  {
    name: "Excalidraw",
    description: "Diagramas y esquemas rápidos con estilo hand-drawn. Ideal para arquitecturas de sistemas, flows de datos y planificación visual rápida.",
    category: "Design",
    url: "https://excalidraw.com",
    color: "#6965DB",
    initials: "Ex",
  },

  // Productivity
  {
    name: "Notion",
    description: "Notas, documentación técnica, planning de proyectos y knowledge base personal todo en uno. Mi segundo cerebro.",
    category: "Productivity",
    url: "https://notion.so",
    color: "#888",
    initials: "No",
  },
  {
    name: "Postman",
    description: "Testing y exploración de APIs REST. Colecciones compartidas con el equipo para documentar y probar endpoints antes de integrarlos.",
    category: "Productivity",
    url: "https://postman.com",
    color: "#FF6C37",
    initials: "Po",
  },
  {
    name: "TablePlus",
    description: "GUI para gestionar bases de datos PostgreSQL, MySQL y MongoDB. Visualizar tablas, editar datos y ejecutar queries sin escribir SQL a mano.",
    category: "Productivity",
    url: "https://tableplus.com",
    color: "#F5A623",
    initials: "TP",
    favorite: true,
  },

  // AI & Automation
  {
    name: "Claude AI",
    description: "Asistente de IA de Anthropic. Lo uso para debugging, revisión de código, generación de contenido y diseño de arquitecturas complejas. Más preciso y contextual que otras IAs para tareas técnicas.",
    category: "AI",
    url: "https://claude.ai",
    color: "#D97706",
    initials: "Cl",
    favorite: true,
  },
  {
    name: "n8n",
    description: "Plataforma de automatización open-source. Conecto APIs, webhooks y servicios para crear workflows que eliminan horas de trabajo manual: Google Drive, Gmail, Sheets, OCR y más.",
    category: "AI",
    url: "https://n8n.io",
    color: "#EA4B71",
    initials: "n8",
    favorite: true,
  },
  {
    name: "OpenAI API",
    description: "API de GPT-4o para integrar inteligencia artificial en aplicaciones. Uso embeddings, completions y function calling para añadir features inteligentes a productos reales.",
    category: "AI",
    url: "https://platform.openai.com",
    color: "#10A37F",
    initials: "OA",
  },
  {
    name: "ElevenLabs",
    description: "Síntesis de voz con IA ultra realista. Lo uso en proyectos que necesitan narración, voice-overs o interfaces conversacionales con audio generado.",
    category: "AI",
    url: "https://elevenlabs.io",
    color: "#5B45FF",
    initials: "EL",
  },
  {
    name: "Google Vision OCR",
    description: "API de Google Cloud para extraer texto de imágenes y documentos escaneados. Clave en los workflows de automatización documental que construí con n8n en CodeScript.",
    category: "AI",
    url: "https://cloud.google.com/vision",
    color: "#4285F4",
    initials: "GV",
  },
];

export const devToolCategories = [
  { id: "Editor", label: "Editor", icon: "code" },
  { id: "Extensions", label: "Extensiones", icon: "puzzle" },
  { id: "CLI", label: "CLI & Runtime", icon: "terminal" },
  { id: "Browser", label: "Navegador", icon: "browser" },
  { id: "Design", label: "Diseño", icon: "design" },
  { id: "Productivity", label: "Productividad", icon: "productivity" },
  { id: "AI", label: "IA & Automatización", icon: "ai" },
] as const;

// ─── Stack & Social ───────────────────────────────────────────────────────────

export const stack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Astro", "Angular", "React Native"] },
  { category: "Backend", items: ["NestJS", "Node.js", "Express.js", "Python", "WebSockets", "JWT"] },
  { category: "AI & Automatización", items: ["n8n", "OpenAI API", "Claude AI", "ElevenLabs", "Cursor AI"] },
  { category: "Bases de datos", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Redis", "MySQL"] },
  { category: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "Vercel", "Azure", "Netlify", "Render"] },
  { category: "Tools", items: ["Figma", "Postman", "Swagger", "Git", "Scrum"] },
];

export const socialLinks = {
  github: "https://github.com/ivancidev",
  linkedin: "https://www.linkedin.com/in/herlan-herbas-zubieta/",
  twitter: "https://twitter.com/ivancidev",
  email: "mailto:herlanherbas@gmail.com",
};
