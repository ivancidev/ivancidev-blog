export type Tool = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  status: "live" | "wip" | "archived";
  featured?: boolean;
  image?: string;
};

export const tools: Tool[] = [
  {
    id: "gta6-landing-clone",
    name: "GTA VI Landing Page",
    description: "Landing page para el juego GTA VI con animaciones, efectos de desplazamiento y diseño responsivo.",
    tags: ["Astro", "React", "GSAP", "Lenis"],
    github: "https://github.com/ivancidev/gta6-landing-clone",
    url: "https://gta6-landing-clone.vercel.app/",
    status: "live",
    featured: true,
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750027628/Captura_de_pantalla_2025-06-15_184546_y03fka.png",
  },
  {
    id: "x-clone-twitter",
    name: "X-Twitter Clone",
    description: "Clon de Twitter con funcionalidades de publicación, comentarios y notificaciones en tiempo real.",
    tags: ["React", "TypeScript", "Express", "MongoDB"],
    github: "https://github.com/ivancidev/x-clone-twitter",
    url: "https://x-clone-twitter-murex.vercel.app/",
    status: "live",
    featured: true,
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750027998/Captura_de_pantalla_2025-06-15_185152_nuk7bb.png",
  },
  {
    id: "useTeam-kanban",
    name: "Kanban App",
    description: "Aplicación Kanban con Next.js y NestJS, conectados a MongoDB Atlas. Comunicación vía HTTP/WebSocket y despliegue con Docker Compose.",
    tags: ["Next.js", "NestJS", "MongoDB", "WebSocket", "Docker"],
    github: "https://github.com/ivancidev/useTeam-kanban-challenge",
    url: "https://use-team-kanban-challenge.vercel.app/",
    status: "live",
    featured: true,
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1764647198/Screenshot_2025-12-01_234311_mbd82h.png",
  },
  {
    id: "workBoardAgile",
    name: "workBoardAgile",
    description: "Plataforma colaborativa de gestión de proyectos para equipos ágiles con drag-and-drop entre columnas.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
    github: "https://github.com/ivancidev/workBoardAgile",
    url: "https://work-board-agile.vercel.app/",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750030065/Captura_de_pantalla_2025-06-15_192656_wiohg0.png",
  },
];

// ─── Developer Toolkit ────────────────────────────────────────────────────────

export type DevTool = {
  name: string;
  description: string;
  category: "Editor" | "Extensions" | "CLI" | "Browser" | "Design" | "Productivity";
  url?: string;
  color: string;
  initials: string;
  favorite?: boolean;
};

export const devTools: DevTool[] = [
  // Editor
  {
    name: "VS Code",
    description: "Mi editor principal. Ligero, extensible y con el mejor ecosistema de extensiones para web dev.",
    category: "Editor",
    url: "https://code.visualstudio.com",
    color: "#007ACC",
    initials: "VS",
    favorite: true,
  },
  {
    name: "GitHub Copilot",
    description: "IA para autocompletado de código en el editor. Acelera el boilerplate y sugiere soluciones.",
    category: "Editor",
    url: "https://github.com/features/copilot",
    color: "#6e40c9",
    initials: "Co",
    favorite: true,
  },

  // Extensions
  {
    name: "Prettier",
    description: "Formateador de código automático. Olvídate de debatir estilos — Prettier decide por ti.",
    category: "Extensions",
    url: "https://prettier.io",
    color: "#F7B93E",
    initials: "Pr",
  },
  {
    name: "ESLint",
    description: "Análisis estático de JavaScript y TypeScript. Catch errores antes de que lleguen a producción.",
    category: "Extensions",
    url: "https://eslint.org",
    color: "#4B32C3",
    initials: "ES",
  },
  {
    name: "GitLens",
    description: "Git supercharged en VS Code. Ver historial de líneas, blame, comparar branches, todo inline.",
    category: "Extensions",
    url: "https://gitlens.amod.io",
    color: "#E05D44",
    initials: "GL",
    favorite: true,
  },
  {
    name: "Error Lens",
    description: "Muestra errores y warnings directamente en la línea donde ocurren. Debugging mucho más rápido.",
    category: "Extensions",
    color: "#FF6B6B",
    initials: "EL",
  },
  {
    name: "Tailwind IntelliSense",
    description: "Autocompletado, hover previews y linting para clases de Tailwind CSS en VS Code.",
    category: "Extensions",
    url: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    color: "#38BDF8",
    initials: "TW",
  },
  {
    name: "Astro",
    description: "Soporte oficial de Astro para VS Code: syntax highlighting, IntelliSense y autocompletado.",
    category: "Extensions",
    url: "https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode",
    color: "#FF5D01",
    initials: "As",
  },

  // CLI
  {
    name: "pnpm",
    description: "Gestor de paquetes rápido y eficiente en disco. Hasta 3× más rápido que npm en installs.",
    category: "CLI",
    url: "https://pnpm.io",
    color: "#F69220",
    initials: "pm",
    favorite: true,
  },
  {
    name: "Git",
    description: "Control de versiones distribuido. El workflow de ramas y commits es esencial en todo proyecto.",
    category: "CLI",
    url: "https://git-scm.com",
    color: "#F05032",
    initials: "Gt",
  },
  {
    name: "GitHub CLI",
    description: "Manejar PRs, issues y repos de GitHub directamente desde la terminal sin salir del flujo.",
    category: "CLI",
    url: "https://cli.github.com",
    color: "#333",
    initials: "gh",
  },
  {
    name: "Node.js",
    description: "Runtime de JavaScript. Base del tooling moderno: bundlers, linters y servidores.",
    category: "CLI",
    url: "https://nodejs.org",
    color: "#339933",
    initials: "No",
  },

  // Browser
  {
    name: "React DevTools",
    description: "Inspeccionar el árbol de componentes, estado y props de aplicaciones React en el navegador.",
    category: "Browser",
    url: "https://react.dev/learn/react-developer-tools",
    color: "#61DAFB",
    initials: "Rx",
  },
  {
    name: "Wappalyzer",
    description: "Detecta el stack tecnológico de cualquier web al instante. Útil para estudiar la competencia.",
    category: "Browser",
    url: "https://www.wappalyzer.com",
    color: "#9B59B6",
    initials: "Wp",
  },

  // Design
  {
    name: "Figma",
    description: "Diseño de UI/UX colaborativo en la web. Para wireframes, mockups y sistemas de diseño.",
    category: "Design",
    url: "https://figma.com",
    color: "#F24E1E",
    initials: "Fi",
    favorite: true,
  },
  {
    name: "Excalidraw",
    description: "Diagramas y esquemas rápidos con estilo hand-drawn. Ideal para arquitecturas y flows.",
    category: "Design",
    url: "https://excalidraw.com",
    color: "#6965DB",
    initials: "Ex",
  },

  // Productivity
  {
    name: "Notion",
    description: "Notas, documentación, planning de proyectos y knowledge base personal todo en uno.",
    category: "Productivity",
    url: "https://notion.so",
    color: "#888",
    initials: "No",
  },
  {
    name: "Postman",
    description: "Testing, documentación y exploración de APIs REST. Colecciones compartidas con el equipo.",
    category: "Productivity",
    url: "https://postman.com",
    color: "#FF6C37",
    initials: "Po",
  },
];

export const devToolCategories = [
  { id: "Editor", label: "Editor", icon: "code" },
  { id: "Extensions", label: "Extensiones", icon: "puzzle" },
  { id: "CLI", label: "CLI & Runtime", icon: "terminal" },
  { id: "Browser", label: "Navegador", icon: "browser" },
  { id: "Design", label: "Diseño", icon: "design" },
  { id: "Productivity", label: "Productividad", icon: "productivity" },
] as const;

// ─── Stack & Social ───────────────────────────────────────────────────────────

export const stack = [
  { category: "Frontend", items: ["React", "Astro", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "Vercel", "GitHub Actions", "Linux"] },
  { category: "Tools", items: ["VS Code", "Figma", "Postman", "Git"] },
];

export const socialLinks = {
  github: "https://github.com/ivancidev",
  linkedin: "https://linkedin.com/in/ivancidev",
  twitter: "https://twitter.com/ivancidev",
  email: "mailto:herlanherbas@gmail.com",
};
