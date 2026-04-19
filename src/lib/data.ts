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
  {
    id: "webTime",
    name: "Webtime",
    description: "Web de audiolibros enfocada a personas que buscan material sobre Programación Web.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Supabase"],
    github: "https://github.com/ivancidev/webTime",
    url: "https://web-time-seven.vercel.app/app",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750028403/Captura_de_pantalla_2025-06-15_185752_blgbdf.png",
  },
  {
    id: "shopping-cart-app",
    name: "Shopping Cart App",
    description: "Aplicación de compras online con carrito, productos y gestión de cantidades usando la Fake Store API.",
    tags: ["React", "Vite", "Material UI"],
    github: "https://github.com/ivancidev/shopping-cart-app",
    url: "https://shopping-cart-app-gilt.vercel.app/",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750030569/Captura_de_pantalla_2025-06-15_193440_f6vv7q.png",
  },
  {
    id: "proyectoASO",
    name: "Proyecto ASO",
    description: "Interfaz web para administrar y mostrar recursos compartidos de Samba en OpenSUSE.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Python", "Flask"],
    github: "https://github.com/ivancidev/ProyectoASO",
    url: "https://proyecto-aso.vercel.app/",
    status: "live",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750031295/Captura_de_pantalla_2025-06-15_194531_e7xrc6.png",
  },
  {
    id: "el-bocado-perfecto",
    name: "El Bocado Perfecto",
    description: "Página web para un restaurante con carta de platos, jugos y desayunos con pedidos por delivery.",
    tags: ["React", "JavaScript", "Node.js", "Express", "Redis"],
    github: "https://github.com/ivancidev/Proyecto_scesi_Pagina_Restaurante",
    status: "wip",
    image: "https://res.cloudinary.com/dvzddtmwg/image/upload/v1750082753/Captura_de_pantalla_2025-06-16_100417_tjmroi.png",
  },
];

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
