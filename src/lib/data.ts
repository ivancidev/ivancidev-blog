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
  image?: string;
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
    id: "gta6-landing-clone",
    name: "GTA VI Landing Page",
    description:
      "Landing page para el juego GTA VI con animaciones, efectos de desplazamiento y diseño responsivo.",
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
    description:
      "Clon de Twitter con funcionalidades de publicación, comentarios y notificaciones en tiempo real.",
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
    description:
      "Aplicación Kanban con Next.js y NestJS, conectados a MongoDB Atlas. Comunicación vía HTTP/WebSocket y despliegue con Docker Compose.",
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
    description:
      "Plataforma colaborativa de gestión de proyectos para equipos ágiles. Organiza tareas en tableros visuales con drag-and-drop entre columnas.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
    github: "https://github.com/ivancidev/workBoardAgile",
    url: "https://work-board-agile.vercel.app/",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750030065/Captura_de_pantalla_2025-06-15_192656_wiohg0.png",
  },
  {
    id: "webTime",
    name: "Webtime",
    description:
      "Web de audiolibros enfocada a personas que buscan material sobre Programación Web. Proyecto de Ingeniería de Software.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/ivancidev/webTime",
    url: "https://web-time-seven.vercel.app/app",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750028403/Captura_de_pantalla_2025-06-15_185752_blgbdf.png",
  },
  {
    id: "shopping-cart-app",
    name: "Shopping Cart App",
    description:
      "Aplicación de compras online donde los usuarios pueden ver productos, agregarlos al carrito y gestionar cantidades. Usa la Fake Store API.",
    tags: ["React", "Vite", "Material UI"],
    github: "https://github.com/ivancidev/shopping-cart-app",
    url: "https://shopping-cart-app-gilt.vercel.app/",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750030569/Captura_de_pantalla_2025-06-15_193440_f6vv7q.png",
  },
  {
    id: "proyectoASO",
    name: "Proyecto ASO",
    description:
      "Interfaz web para administrar y mostrar recursos compartidos de Samba en OpenSUSE.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Python", "Flask"],
    github: "https://github.com/ivancidev/ProyectoASO",
    url: "https://proyecto-aso.vercel.app/",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750031295/Captura_de_pantalla_2025-06-15_194531_e7xrc6.png",
  },
  {
    id: "el-bocado-perfecto",
    name: "El Bocado Perfecto",
    description:
      "Página web para un restaurante con carta de platos, jugos y desayunos. Los clientes pueden realizar pedidos por delivery o en el local.",
    tags: ["React", "JavaScript", "Node.js", "Express", "Redis"],
    github: "https://github.com/ivancidev/Proyecto_scesi_Pagina_Restaurante",
    status: "wip",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750082753/Captura_de_pantalla_2025-06-16_100417_tjmroi.png",
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
