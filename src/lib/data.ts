export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
};

export type Tool = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  status: "live" | "wip" | "archived";
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "primeros-pasos-con-nextjs-14",
    title: "Primeros pasos con Next.js 14 y el App Router",
    excerpt:
      "Una guía práctica para entender el nuevo paradigma del App Router, Server Components y cómo estructurar proyectos modernos con Next.js 14.",
    date: "2025-03-15",
    readTime: "8 min",
    tags: ["Next.js", "React", "TypeScript"],
    featured: true,
  },
  {
    slug: "typescript-tipos-avanzados",
    title: "TypeScript: Tipos avanzados que debes conocer",
    excerpt:
      "Explorando utility types, mapped types, conditional types y template literal types para escribir código más seguro y expresivo.",
    date: "2025-02-28",
    readTime: "12 min",
    tags: ["TypeScript", "JavaScript"],
    featured: true,
  },
  {
    slug: "tailwind-css-arquitectura",
    title: "Arquitectura de diseño con Tailwind CSS",
    excerpt:
      "Cómo organizar tus estilos con Tailwind sin volverte loco: design tokens, componentes reutilizables y patrones escalables.",
    date: "2025-02-10",
    readTime: "6 min",
    tags: ["Tailwind CSS", "CSS", "Design"],
  },
  {
    slug: "api-rest-nodejs-express",
    title: "Construyendo una API REST robusta con Node.js y Express",
    excerpt:
      "Desde cero hasta producción: autenticación, validación, manejo de errores y buenas prácticas para APIs modernas.",
    date: "2025-01-20",
    readTime: "15 min",
    tags: ["Node.js", "Express", "API"],
  },
  {
    slug: "git-flujo-de-trabajo",
    title: "Git: Flujo de trabajo profesional para equipos",
    excerpt:
      "Gitflow, trunk-based development, conventional commits y todo lo que necesitas para colaborar de forma efectiva.",
    date: "2025-01-05",
    readTime: "10 min",
    tags: ["Git", "DevOps", "Workflow"],
  },
  {
    slug: "react-hooks-patrones",
    title: "Patrones avanzados con React Hooks",
    excerpt:
      "Custom hooks, composición de hooks, y patrones como useReducer con Context para manejar estado complejo sin Redux.",
    date: "2024-12-18",
    readTime: "11 min",
    tags: ["React", "Hooks", "JavaScript"],
  },
];

export const tools: Tool[] = [
  {
    id: "portfolio-blog",
    name: "ivancidev.blog",
    description:
      "Este mismo blog — construido con Next.js 14, Tailwind CSS y MDX. Código abierto para que lo uses como base.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/ivancidev/ivancidev-blog",
    url: "#",
    status: "live",
    featured: true,
  },
  {
    id: "dev-snippets",
    name: "Dev Snippets",
    description:
      "Colección personal de snippets y utilidades para acelerar el desarrollo diario. Organizado por lenguaje y caso de uso.",
    tags: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/ivancidev",
    status: "wip",
    featured: true,
  },
  {
    id: "cli-generator",
    name: "Component CLI",
    description:
      "CLI para generar componentes React con TypeScript, tests y stories listos para usar. Configurable con templates.",
    tags: ["Node.js", "CLI", "Tooling"],
    github: "https://github.com/ivancidev",
    status: "wip",
  },
  {
    id: "api-boilerplate",
    name: "API Boilerplate",
    description:
      "Template de Express + TypeScript con JWT, validación con Zod, Prisma y Docker. Listo para producción.",
    tags: ["Node.js", "Express", "Prisma"],
    github: "https://github.com/ivancidev",
    status: "live",
  },
  {
    id: "react-hooks-lib",
    name: "useHooks Collection",
    description:
      "Librería de custom hooks para React: useLocalStorage, useDebounce, useFetch, useMediaQuery y más.",
    tags: ["React", "Hooks", "NPM"],
    github: "https://github.com/ivancidev",
    status: "wip",
  },
  {
    id: "design-system",
    name: "DS Starter",
    description:
      "Design system minimalista con Tailwind y Radix UI. Tokens de diseño, componentes accesibles y Storybook incluido.",
    tags: ["Design System", "Tailwind", "Radix"],
    github: "https://github.com/ivancidev",
    status: "wip",
  },
];

export const stack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "Vercel", "GitHub Actions", "Linux"] },
  { category: "Tools", items: ["VS Code", "Figma", "Postman", "Git", "Warp"] },
];

export const socialLinks = {
  github: "https://github.com/ivancidev",
  linkedin: "https://linkedin.com/in/ivancidev",
  twitter: "https://twitter.com/ivancidev",
  email: "mailto:herlanherbas@gmail.com",
};
