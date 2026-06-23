export interface Project {
  name: string;
  desc: string;
  longDesc?: string;
  features?: { title: string; desc: string; emoji?: string }[];
  stack?: string[];
  tags: string[];
  color: string;
  emoji: string;
  link: string;
  demoUrl?: string | null;
  category?: string;
}


export const PROJECTS: Project[] = [
  {
    name: "core-framework",
    desc: "Python-based forensic engine. Modules for parsing email headers (Received/Message-ID), generating Regex infrastructure patterns, and calculating the Email Trust Index (ETI).",
    tags: ["General"],
    color: "#EF4444",
    emoji: "🔒",
    link: "https://github.com/Email-Infra-Forensics/core-framework",
    demoUrl: null,
    category: "cybersec"
  },
  {
    name: "data-curator",
    desc: "ETL tools for historical email datasets. Handles ingestion (Mbox/EML), rigorous anonymization (PII hashing), and dataset normalization before analysis.",
    tags: ["General"],
    color: "#F59E0B",
    emoji: "🛠️",
    link: "https://github.com/Email-Infra-Forensics/data-curator",
    demoUrl: null,
    category: "tools"
  },
  {
    name: "thunderbird-validator",
    desc: "Thunderbird extension for real-time infrastructure verification. Visualizes the sender's trust score based on the ETI model.",
    tags: ["General"],
    color: "#EF4444",
    emoji: "🔒",
    link: "https://github.com/Email-Infra-Forensics/thunderbird-validator",
    demoUrl: null,
    category: "cybersec"
  },
  {
    name: "web-portal",
    desc: "Official project website. Showcases critical email vulnerabilities, explains the forensic solution visually, and serves as the installation hub for the browser plugin.",
    tags: ["General"],
    color: "#EF4444",
    emoji: "🔒",
    link: "https://github.com/Email-Infra-Forensics/web-portal",
    demoUrl: null,
    category: "cybersec"
  },
  {
    name: "Bots",
    desc: "",
    tags: ["JavaScript"],
    color: "#F59E0B",
    emoji: "🛠️",
    link: "https://github.com/luvaldev/Bots",
    demoUrl: null,
    category: "tools"
  },
  {
    name: "CampusSwap",
    desc: "Plataforma SaaS de colaboración académica para estudiantes universitarios, centralizando apuntes y material de estudio de forma segura.",
    longDesc: "CampusSwap es una plataforma SaaS de colaboración académica diseñada exclusivamente para estudiantes universitarios. Nace como solución al caos y la fragmentación de la información académica (grupos de WhatsApp saturados, links de Drive rotos o sin acceso) centralizando apuntes y material de estudio en un entorno seguro.\n\nEste proyecto es desarrollado como parte de la asignatura Ingeniería de Software (2026) en la Universidad Diego Portales.",
    features: [
      {
        title: "Acceso Exclusivo",
        desc: "Autenticación estricta mediante Google OAuth2. Solo se permite el ingreso a correos institucionales válidos (@udp.cl y @mail.udp.cl).",
        emoji: "🔐"
      },
      {
        title: "Dashboard Personalizado",
        desc: "Organización jerárquica del material por Facultad, Carrera y Ramo.",
        emoji: "📚"
      },
      {
        title: "Estado de Cuarentena (Próximamente)",
        desc: "Los archivos subidos pasan por un proceso de moderación por pares antes de ser públicos.",
        emoji: "🛡️"
      },
      {
        title: "Economía de Karma Points",
        desc: "Sistema de reputación donde los estudiantes ganan puntos por aportar material válido y moderar, fomentando un ecosistema de alta calidad.",
        emoji: "⭐"
      }
    ],
    stack: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "NextAuth.js",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Lucide React",
      "Shadcn/UI"
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "Tailwind"],
    color: "#3B82F6",
    emoji: "🌐",
    link: "https://github.com/luvaldev/CampusSwap",
    demoUrl: "https://campusswap-eight.vercel.app",
    category: "webapps"
  },
  {
    name: "casino-management-platform",
    desc: "Plataforma de casino desarrollada progresivamente en tres fases: desde vistas Handlebars hasta una API RESTful con JWT y SQLite3.",
    longDesc: "casino-management-platform es un proyecto de desarrollo web dividido en tres fases de evolución arquitectónica, que simula una plataforma integral de casino con control y gestión de usuarios. La aplicación evoluciona progresivamente desde una interfaz estática con plantillas Handlebars, pasando por un diseño modular en cliente (HTML/JS puro) consumiendo APIs externas, hasta una arquitectura backend desacoplada full-stack basada en Node.js, Express, SQLite3 y APIs RESTful seguras.",
    features: [
      {
        title: "Fase I: Arquitectura Monolítica",
        desc: "Estructura inicial basada en plantillas Handlebars, Express y base de datos local SQLite3 con vistas para login, registro y CRUD básico de productos.",
        emoji: "📁"
      },
      {
        title: "Fase II: Cliente Desacoplado & Dinámico",
        desc: "Reescritura de la interfaz usando HTML5 y JavaScript modular puro (ES6), separando la lógica del cliente y consumiendo endpoints con Fetch API.",
        emoji: "🧩"
      },
      {
        title: "Fase III: API RESTful & Seguridad",
        desc: "Backend de producción robusto con autenticación basada en JWT, control de roles de usuario, Swagger y base de datos con SQLite3.",
        emoji: "🛡️"
      },
      {
        title: "Panel Administrativo & Transacciones",
        desc: "Control administrativo para creación/edición de productos, simulación de carrito de compras y visualización de métricas de ingresos.",
        emoji: "🛒"
      }
    ],
    stack: [
      "Node.js",
      "Express",
      "Handlebars",
      "SQLite3",
      "JSON Web Tokens (JWT)",
      "bcrypt",
      "Swagger",
      "Fetch API",
      "LocalStorage"
    ],
    tags: ["Node.js", "Express", "SQLite", "API REST"],
    color: "#8B5CF6",
    emoji: "🎰",
    link: "https://github.com/luvaldev/casino-management-platform",
    demoUrl: null,
    category: "webapps"
  },
  {
    name: "cercasco",
    desc: "Sistema inteligente de detección de vehículos traseros para ciclistas, que emite alertas visuales y hápticas en tiempo real.",
    longDesc: "Cercasco es un sistema inteligente de alerta diseñado para mejorar la seguridad de los ciclistas en entornos urbanos. Detecta vehículos que se aproximan por detrás y emite alertas hápticas y visuales en tiempo real, sin distraer al usuario.\n\nDesarrollado como proyecto académico en la Universidad Diego Portales (Chile) por estudiantes de Ingeniería en Informática.",
    features: [
      {
        title: "Detección de Proximidad",
        desc: "Módulo trasero con ESP32-CAM y sensores de distancia (ToF/ultrasonido) para captar vehículos a distancias críticas.",
        emoji: "📷"
      },
      {
        title: "Alertas Hápticas Graduales",
        desc: "Un motor vibrador coin se activa en el manubrio de forma leve a menos de 2 metros y de manera intensa a menos de 1.5 metros.",
        emoji: "📳"
      },
      {
        title: "Señalización de Alta Visibilidad",
        desc: "LEDs de alta intensidad (500 lm) parpadean para llamar la atención del conductor del vehículo que se aproxima.",
        emoji: "💡"
      },
      {
        title: "Aplicación de Monitoreo",
        desc: "App móvil para visualizar alertas en tiempo real y realizar la configuración del sistema vía Bluetooth/Wi-Fi.",
        emoji: "📱"
      }
    ],
    stack: [
      "Flutter (Dart)",
      "C / C++ (Arduino Framework)",
      "ESP32 & ESP32-CAM",
      "Java (Android)",
      "Fusion 360 / Blender (3D Design)"
    ],
    tags: ["Flutter", "C++", "IoT", "Arduino"],
    color: "#10B981",
    emoji: "🚴",
    link: "https://github.com/luvaldev/cercasco",
    demoUrl: "https://cercasco.vercel.app/",
    category: "webapps"
  },
  {
    name: "Forensic-Email-Marketing-Analyzer",
    desc: "Análisis forense y caracterización de infraestructura de email marketing en el retail chileno para combatir phishing y spoofing.",
    longDesc: "Este proyecto se centra en la ciberseguridad defensiva y el análisis forense de correos electrónicos de marketing masivo en el sector Retail Chileno. El objetivo principal es modelar el comportamiento 'legítimo' de los envíos para combatir la suplantación de identidad (spoofing) y el phishing dirigido.\n\nSe desarrolla un sistema automatizado en Python para establecer una 'línea base' técnica de autenticidad, identificando patrones de infraestructura que son difíciles de replicar por atacantes.",
    features: [
      {
        title: "Caracterización de Infraestructura",
        desc: "Identificación de Proveedores de Servicios de Correo (ESPs) mediante análisis de encabezados Received (traceroute de mensajes).",
        emoji: "🔬"
      },
      {
        title: "Ingeniería Inversa de Message-ID",
        desc: "Generación automática de Expresiones Regulares (Regex) para validar la consistencia sintáctica del software emisor.",
        emoji: "⚙️"
      },
      {
        title: "Mitigación de Spoofing",
        desc: "Correlación de firmas criptográficas (SPF/DKIM/DMARC) con cambios de servidores para detectar suplantaciones.",
        emoji: "🛡️"
      },
      {
        title: "Email Trust Index (ETI)",
        desc: "Algoritmo dinámico de puntuación de sospecha (suspicious score) para clasificar la autenticidad del mensaje.",
        emoji: "📈"
      }
    ],
    stack: [
      "Python",
      "Regex Engine",
      "WHOIS & DNS lookup",
      "EML Header Parser",
      "React",
      "Tailwind CSS (Web UI)"
    ],
    tags: ["Python", "Security", "Forensics", "Regex"],
    color: "#EF4444",
    emoji: "🔒",
    link: "https://github.com/luvaldev/Forensic-Email-Marketing-Analyzer",
    demoUrl: "https://web-email-validator-priv.vercel.app/",
    category: "cybersec"
  },
  {
    name: "http-scapy-traffic-analysis",
    desc: "Manipulación HTTP con Scapy Proyecto que simula y analiza tráfico de red, implementando contenedores Docker (cliente, servidor Nginx) para inyección, sniffing y modificación de paquetes HTTP utilizando la librería Python Scapy.",
    tags: ["Python"],
    color: "#EF4444",
    emoji: "🔒",
    link: "https://github.com/luvaldev/http-scapy-traffic-analysis",
    demoUrl: null,
    category: "cybersec"
  },
  {
    name: "luval-theme",
    desc: "Tema para Discord",
    tags: ["CSS"],
    color: "#F59E0B",
    emoji: "🛠️",
    link: "https://github.com/luvaldev/luval-theme",
    demoUrl: null,
    category: "tools"
  },
  {
    name: "OS-Internals-Practice",
    desc: "Repositorio de las actividades y proyectos desarrollados para el curso de Sistemas Operativos, con foco en C++ y la implementación de concurrencia y sincronización a nivel de procesos e hilos.",
    tags: ["C++"],
    color: "#8B5CF6",
    emoji: "🎓",
    link: "https://github.com/luvaldev/OS-Internals-Practice",
    demoUrl: null,
    category: "academic"
  },
  {
    name: "portfolio-luvaldev",
    desc: "Sitio web de portafolio personal clásico, construido en Astro y Tailwind CSS para mostrar proyectos, experiencia e intereses.",
    longDesc: "¡Bienvenido al repositorio de mi portafolio personal clásico! Este sitio web está diseñado para mostrar mis proyectos, mi experiencia profesional y mi pasión por la programación, la resolución de problemas y la innovación tecnológica, con un especial interés en redes y desarrollo de software.",
    features: [
      {
        title: "Inicio (Hero Section)",
        desc: "Presentación e introducción concisa sobre mi perfil, rol actual y enlaces directos.",
        emoji: "🏠"
      },
      {
        title: "Sobre Mí & Experiencia",
        desc: "Resumen de intereses académicos y desglose detallado de trayectoria laboral y ayudantías de programación.",
        emoji: "🧑‍💻"
      },
      {
        title: "Showcase de Proyectos",
        desc: "Lista interactiva de proyectos destacados con detalles de tecnologías (Cercasco, Casino Platform, etc.).",
        emoji: "📂"
      },
      {
        title: "Contacto y Redes",
        desc: "Integración de enlaces a perfiles profesionales en GitHub, LinkedIn y correo electrónico.",
        emoji: "✉️"
      }
    ],
    stack: [
      "Astro",
      "Tailwind CSS",
      "TypeScript",
      "Onest Variable Font"
    ],
    tags: ["Astro", "Tailwind", "TypeScript"],
    color: "#F97316",
    emoji: "🚀",
    link: "https://github.com/luvaldev/portfolio-luvaldev",
    demoUrl: "https://portfolio-luvaldev.vercel.app",
    category: "webapps"
  },
  {
    name: "portfolio-luvalOS",
    desc: "",
    tags: ["TypeScript"],
    color: "#3B82F6",
    emoji: "🌐",
    link: "https://github.com/luvaldev/portfolio-luvalOS",
    demoUrl: "https://portfolio-luvalos.vercel.app",
    category: "webapps"
  },
  {
    name: "programming-study-resources",
    desc: "Resumenes y recursos técnicos para el aprendizaje de lenguajes de programación. Material conciso y accesible para reforzar conceptos clave y mejorar habilidades de programación, con el objetivo de apoyar el aprendizaje de la comunidad.",
    tags: ["Java"],
    color: "#8B5CF6",
    emoji: "🎓",
    link: "https://github.com/luvaldev/programming-study-resources",
    demoUrl: null,
    category: "academic"
  },
  {
    name: "pulso-maq",
    desc: "Plataforma SaaS integral de gestión, logística y seguimiento por GPS en tiempo real para arriendo de maquinaria pesada y equipos.",
    longDesc: "Pulso Maq es una plataforma integral para la gestión y el seguimiento de maquinaria pesada y equipos para arriendo. Diseñada para optimizar la logística, mejorar el control de inventario y proporcionar información vital a través de rastreo GPS en tiempo real.",
    features: [
      {
        title: "Gestión de Equipos y Arriendos",
        desc: "Control detallado sobre el inventario, disponibilidad y asignación activa a clientes.",
        emoji: "🚚"
      },
      {
        title: "Seguimiento GPS (Integración)",
        desc: "Monitoreo en tiempo real de la ubicación de los equipos mediante tecnología GPS.",
        emoji: "🛰️"
      },
      {
        title: "Dashboard Administrativo",
        desc: "Panel de control intuitivo para visualizar métricas, finanzas y reportes de uso.",
        emoji: "📊"
      },
      {
        title: "Diseño Responsivo & Premium",
        desc: "Experiencia de usuario premium fluida usando variables CSS puras y animaciones interactivas.",
        emoji: "📱"
      }
    ],
    stack: [
      "Next.js 16 (App Router)",
      "React 19",
      "Framer Motion",
      "Lucide React",
      "React Hook Form",
      "Zod",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase"
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Supabase"],
    color: "#3B82F6",
    emoji: "🌐",
    link: "https://github.com/luvaldev/pulso-maq",
    demoUrl: "https://pulso-maq.vercel.app/",
    category: "webapps"
  },
  {
    name: "Sistemas-distribuidos",
    desc: "Tareas de sistemas distribuidos",
    tags: ["Python"],
    color: "#8B5CF6",
    emoji: "🎓",
    link: "https://github.com/luvaldev/Sistemas-distribuidos",
    demoUrl: null,
    category: "academic"
  },
  {
    name: "vault-obsidian",
    desc: "Este repositorio contiene resúmenes y apuntes de las materias que he cursado en la universidad, organizados utilizando Obsidian para facilitar el acceso, la consulta y el repaso de los contenidos académicos.",
    tags: ["General"],
    color: "#8B5CF6",
    emoji: "🎓",
    link: "https://github.com/luvaldev/vault-obsidian",
    demoUrl: null,
    category: "academic"
  },
  {
    name: "plpgsql-casino-logic",
    desc: "Database schema and logic for a Casino environment. Manages croupiers, games, real-time betting events, and user fraud detection using advanced SQL functions.",
    tags: ["Handlebars"],
    color: "#3B82F6",
    emoji: "🌐",
    link: "https://github.com/maxxee1/plpgsql-casino-logic",
    demoUrl: null,
    category: "webapps"
  },
  {
    name: "SurvivalDubCore",
    desc: "SurvivaldubCore Velocity and Spigot",
    tags: ["Java"],
    color: "#10B981",
    emoji: "📁",
    link: "https://github.com/survivaldub/SurvivalDubCore",
    demoUrl: "https://www.survivaldub.com",
    category: "others"
  },
  {
    name: "SurvivalDub-Launcher",
    desc: "",
    tags: ["C++"],
    color: "#10B981",
    emoji: "📁",
    link: "https://github.com/survivaldub/SurvivalDub-Launcher",
    demoUrl: null,
    category: "others"
  }
];

export const SKILL_GROUPS = [
  {
    category: "Sistemas & Desarrollo de Software",
    color: "#8B5CF6",
    emoji: "⚙️",
    skills: [
      {
        name: "C++",
        level: "Avanzado / Concurrencia",
        desc: "Desarrollo de sistemas robustos y programación concurrente multihilo de alto rendimiento.",
        emoji: "⚙️",
        projects: [
          { name: "Simulación Concurrente", desc: "Hilos independientes y std::mutex en simulación 2D." },
          { name: "cercasco", desc: "Firmware embebido en C++ para sensores de proximidad." }
        ]
      },
      {
        name: "Java",
        level: "Intermedio",
        desc: "Estructuras de datos, paradigma orientado a objetos (POO) y desarrollo nativo Android.",
        emoji: "☕",
        projects: [
          { name: "cercasco", desc: "Adaptación y soporte para alertas en la app nativa." }
        ]
      },
      {
        name: "Estructuras de Datos & POO",
        level: "Avanzado / Académico",
        desc: "Dominio de principios de diseño de software estructurado, gestión de memoria e interfaces.",
        emoji: "🧠",
        projects: [
          { name: "Ayudante C++ (UDP)", desc: "Apoyo y tutoría a más de 100 estudiantes en C++ y POO." }
        ]
      }
    ]
  },
  {
    category: "Infraestructura, Redes & Seguridad",
    color: "#EF4444",
    emoji: "🔒",
    skills: [
      {
        name: "Python / Scapy",
        level: "Avanzado / Scripts",
        desc: "Análisis forense de paquetes de red, inyección de tráfico HTTP y automatización.",
        emoji: "🐍",
        projects: [
          { name: "Análisis de Tráfico HTTP", desc: "Intercepción de tráfico en red local y sniffing (MITM)." },
          { name: "Forensic-Email-Marketing-Analyzer", desc: "Cálculo de Email Trust Index (ETI) y algoritmos regex." }
        ]
      },
      {
        name: "Redes TCP/IP & Sockets",
        level: "Intermedio / Avanzado",
        desc: "Diagnóstico y sniffing de tráfico, enrutamiento, DNS/WHOIS y seguridad de email (SPF/DKIM/DMARC).",
        emoji: "📡",
        projects: [
          { name: "Análisis de Tráfico HTTP", desc: "Simulación de entornos cliente-atacante-servidor." },
          { name: "Forensic-Email-Marketing-Analyzer", desc: "Análisis de encabezados Received y DNS/WHOIS." }
        ]
      },
      {
        name: "Docker & Linux",
        level: "Intermedio / Avanzado",
        desc: "Orquestación de servicios en contenedores y administración en entornos Arch Linux y Kali.",
        emoji: "🐳",
        projects: [
          { name: "Análisis de Tráfico HTTP", desc: "Contenerización del entorno completo con Docker y Nginx." }
        ]
      }
    ]
  },
  {
    category: "Desarrollo Web & IoT",
    color: "#3B82F6",
    emoji: "🌐",
    skills: [
      {
        name: "Next.js & React",
        level: "Avanzado / Web",
        desc: "Interfaces de usuario premium interactivas usando Next.js App Router, React 19 y Framer Motion.",
        emoji: "⚛️",
        projects: [
          { name: "CampusSwap", desc: "SaaS de colaboración académica UDP." },
          { name: "pulso-maq", desc: "Gestión de maquinaria y finanzas en tiempo real." }
        ]
      },
      {
        name: "Node.js (Express / NestJS)",
        level: "Avanzado / Backend",
        desc: "Diseño de APIs RESTful robustas, autenticación basada en JWT, control de roles y middleware.",
        emoji: "🟢",
        projects: [
          { name: "casino-management-platform", desc: "API REST con Express, JWT, SQLite3 y Swagger." },
          { name: "CampusSwap", desc: "Backend moderno desarrollado con NestJS / Node.js." }
        ]
      },
      {
        name: "Bases de Datos (SQL & ORM)",
        level: "Avanzado",
        desc: "Diseño relacional de bases de datos PostgreSQL y SQLite3 utilizando Prisma ORM.",
        emoji: "🐘",
        projects: [
          { name: "pulso-maq", desc: "Persistencia PostgreSQL alojada en Supabase con Prisma." },
          { name: "CampusSwap", desc: "Diseño de base de datos PostgreSQL para gestión de karma." }
        ]
      },
      {
        name: "Flutter & Dart",
        level: "Intermedio",
        desc: "Aplicaciones móviles nativas multiplataforma e interacción de hardware por sockets/BT.",
        emoji: "🎯",
        projects: [
          { name: "cercasco", desc: "App móvil para recibir alertas visuales/hápticas e interactuar con el casco." }
        ]
      },
      {
        name: "ESP32 & Arduino (IoT)",
        level: "Intermedio / Hardware",
        desc: "Integración de microcontroladores de bajo coste, sensores ToF, ultrasonido y control háptico.",
        emoji: "🎛️",
        projects: [
          { name: "cercasco", desc: "Fusión sensorial del ESP32 y ESP32-CAM trasera." }
        ]
      }
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Asegurando tus APIs en Node.js",
    category: "Ciberseguridad",
    color: "#DC4228",
    emoji: "🛡️",
    readTime: "5 min",
    date: "12 May 2026",
    excerpt: "Las mejores prácticas para evitar vulnerabilidades comunes en tus endpoints REST y GraphQL.",
    content: "En este artículo exploramos cómo implementar autenticación robusta, validación de inputs y rate limiting.\n\n**1. Rate Limiting**\nEs fundamental para prevenir ataques DDoS a nivel de aplicación.\n\n- Usa `express-rate-limit` o soluciones basadas en Redis para producción.\n- Limita no solo por IP sino por token de usuario autenticado.\n\n**2. Validación de Inputs**\nNunca confíes en el cliente. Usa herramientas como `zod` para verificar los esquemas de tus datos entrantes."
  },
  {
    id: 2,
    title: "Por qué sigo usando Linux como desarrollador",
    category: "Linux",
    color: "#F9BD2B",
    emoji: "🐧",
    readTime: "4 min",
    date: "28 Abr 2026",
    excerpt: "Una mirada personal a cómo el entorno de terminal aumenta la productividad comparado con otras opciones.",
    content: "El entorno Linux ofrece una libertad incomparable.\n\n**Control Total**\nCada aspecto del sistema puede ser modificado. Uso herramientas de línea de comandos para tareas que normalmente tomarían múltiples clicks en otras plataformas.\n\n**Automatización**\nBash scripting es el superpoder que todo desarrollador debería aprender."
  },
  {
    id: 3,
    title: "Optimizando componentes en React",
    category: "Desarrollo Web",
    color: "#27A3D6",
    emoji: "⚛️",
    readTime: "7 min",
    date: "10 Mar 2026",
    excerpt: "Técnicas avanzadas para evitar renders innecesarios y mejorar el rendimiento de aplicaciones complejas.",
    content: "React es rápido por defecto, pero aplicaciones complejas requieren atención especial.\n\n**Uso de useMemo y useCallback**\nAprendiendo cuándo es realmente necesario usarlos y cuándo son optimizaciones prematuras que solo añaden carga cognitiva."
  }
];

export const SERVICES = [
  {
    id: "software-web-dev",
    title: "Desarrollo de Software & Web",
    desc: "Creación de aplicaciones web modernas con Next.js y software/scripts eficientes en C++ y Python.",
    features: ["Next.js & React (Frontend)", "APIs RESTful & Bases de Datos", "Programación C++ & Concurrencia", "Scripts de Automatización (Python)"],
    emoji: "💻",
    color: "#27A3D6"
  },
  {
    id: "security",
    title: "Auditoría de Seguridad",
    desc: "Análisis de vulnerabilidades y hardening de tus sistemas actuales.",
    features: ["Pentesting básico", "Revisión de dependencias", "Reporte de mitigación", "Hardening de servidores"],
    emoji: "🕵️",
    color: "#DC4228"
  },
  {
    id: "mentoring",
    title: "Mentoría 1:1",
    desc: "Acelera tu aprendizaje en programación con sesiones personalizadas.",
    features: ["Revisión de código", "Preparación para entrevistas", "Arquitectura de software", "Resolución de dudas en vivo"],
    emoji: "🎓",
    color: "#F9BD2B"
  }
];

export const TRASH_FILES = [
  {
    name: "contraseñas_no_abrir.txt",
    type: "TXT",
    size: "12 KB",
    date: "Ayer",
    emoji: "📄",
    content: "123456\nadmin\npassword\niloveyou\n\n(Es broma, usa un gestor de contraseñas 🔒)"
  },
  {
    name: "proyecto_final_final_v4_ahorasi.zip",
    type: "ZIP",
    size: "450 MB",
    date: "Hace 2 meses",
    emoji: "📦",
    content: "Error: El archivo está corrupto porque no usaste Git. \nMoraleja: Usa control de versiones para tus proyectos."
  },
  {
    name: "historial_navegacion.log",
    type: "LOG",
    size: "2.1 GB",
    date: "Hace 1 año",
    emoji: "📜",
    content: "[23:01] ¿Cómo centrar un div?\n[23:05] Centrar un div flexbox\n[23:10] Centrar div CSS 2026\n[23:15] Por qué mi div no se centra\n[23:30] Salario de leñador en Canadá"
  }
];
