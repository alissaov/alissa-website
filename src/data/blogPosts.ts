export interface BlogSection {
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  image: string;
  imageAlt: string;
  sections: BlogSection[];
  ctaText: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "estructurar-proceso-gestion-documentos",
    title:
      "Cómo estructurar un proceso de gestión de documentos antes de automatizarlo",
    metaTitle:
      "Cómo estructurar procesos antes de automatizarlos | Alissa Osores",
    metaDescription:
      "Aprende cómo estructurar procesos operativos antes de automatizarlos para evitar errores, mejorar la trazabilidad y escalar tu operación.",
    excerpt:
      "Muchas empresas intentan automatizar procesos sin tenerlos definidos o documentados correctamente. Este caso lo vi directamente hace unos meses y muestra cómo estructurar un proceso de gestión de documentos antes de implementar tecnología.",
    date: "2026-04-25",
    readingTime: "6 min",
    category: "Procesos",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Documentos y carpetas organizados sobre un escritorio profesional",
    sections: [
      {
        level: 2,
        heading: "El contexto",
        paragraphs: [
          "Muchas empresas buscan automatizar procesos… sin tenerlos definidos. Y ahí es donde empiezan los problemas.",
          "Una empresa necesitaba gestionar la carga y validación de documentos de proveedores, proveedores que son sumamente operativos y siempre están en campo.",
          "Cuando me mostraron el proceso que tenían, me di cuenta que era manual y poco estructurado:",
          "• Carga de documentos sin un flujo claro.",
          "• Validaciones inconsistentes.",
          "• Diferentes tipos de usuarios con distintos requisitos.",
          "• Poca visibilidad del estado de cada registro.",
        ],
      },
      {
        level: 2,
        heading: "El error común",
        paragraphs: [
          "Intentar resolver esto directamente con tecnología.",
          "Sin entender el proceso, cualquier herramienta solo replica el desorden.",
        ],
      },
      {
        level: 2,
        heading: "Metodología utilizada",
        paragraphs: [
          "Trabajo con una metodología simple: entender, estructurar, preparar e implementar.",
        ],
      },
      {
        level: 3,
        heading: "1. Entender",
        paragraphs: [
          "Analizamos cómo funciona realmente la operación del día a día. Tuvimos sesiones con todo el equipo para entender:",
          "• Qué hacen las personas.",
          "• Qué información manejan.",
          "• Dónde se generan errores.",
          "• Qué partes son manuales.",
          "• Qué flujos son repetitivos.",
        ],
      },
      {
        level: 3,
        heading: "2. Estructurar",
        paragraphs: [
          "Definimos las piezas clave del proceso:",
          "• Tipos de usuario (proveedor, validador, administrador).",
          "• Flujos diferenciados según tipo de persona.",
          "• Reglas de validación (automáticas vs. manuales).",
          "• Estados del proceso (pendiente, en revisión, aprobado, rechazado).",
        ],
      },
      {
        level: 3,
        heading: "3. Preparar para automatizar",
        paragraphs: [
          "Se dejó lista la base para digitalizar:",
          "• Qué datos son obligatorios.",
          "• Qué se puede validar automáticamente.",
          "• Qué requiere revisión humana.",
          "• Cómo estructurar la información.",
          "• Cómo generar trazabilidad.",
        ],
      },
      {
        level: 3,
        heading: "4. Implementar",
        paragraphs: [
          "Con el proceso claro, la tecnología se vuelve más simple de aplicar.",
          "No se trata de cambiar todo, sino de automatizar lo que realmente genera impacto.",
        ],
      },
      {
        level: 2,
        heading: "Resultado",
        paragraphs: [
          "Se pasó de un proceso ambiguo a una operación definida y, con este resultado, se tiene una plataforma andando lista para ser lanzada:",
          "• Cada usuario tiene un flujo claro.",
          "• Validaciones consistentes.",
          "• Visibilidad del proceso.",
          "• Base lista para automatización.",
        ],
      },
      {
        level: 2,
        heading: "Insight",
        paragraphs: [
          "La tecnología no soluciona procesos desordenados.",
          "Primero se estructura la operación. Luego se automatiza.",
        ],
      },
      {
        level: 2,
        heading: "¿Por dónde empezar?",
        paragraphs: [
          "Si estás considerando automatizar procesos en tu empresa, probablemente el primer paso no es la herramienta. Es entender y estructurar cómo funciona tu operación.",
        ],
      },
    ],
    ctaText:
      "¿Quieres estructurar tus procesos antes de automatizarlos? Agenda una llamada.",
  },
  {
    slug: "estructurar-operacion-antes-automatizar",
    title:
      "Cómo estructurar una operación compleja antes de automatizarla",
    metaTitle:
      "Cómo estructurar procesos antes de automatizarlos | Caso real",
    metaDescription:
      "Aprende cómo ordenar procesos operativos fragmentados, reducir carga manual y preparar una empresa para automatización sin cambiar sus herramientas.",
    excerpt:
      "Muchas empresas intentan automatizar procesos sin tenerlos definidos. Este caso muestra cómo estructurar una operación completa antes de implementar tecnología.",
    date: "2026-04-15",
    readingTime: "7 min",
    category: "Operaciones",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    imageAlt:
      "Equipo profesional revisando procesos operativos en una sala de reuniones",
    sections: [
      {
        level: 2,
        heading: "El contexto",
        paragraphs: [
          "Muchas empresas intentan mejorar su operación incorporando tecnología, sin darse cuenta de que el problema real no es la herramienta… es la estructura.",
          "Una empresa en crecimiento operaba con múltiples procesos críticos distribuidos entre diferentes archivos, correos y sistemas internos.",
          "La operación incluía:",
          "• Gestión de casos desde su ingreso hasta su salida.",
          "• Asignación de responsables según criterios internos.",
          "• Coordinación de actividades y sesiones, virtuales o presenciales.",
          "• Seguimiento operativo y control de calidad.",
          "• Reportería para dirección.",
          "A pesar de tener herramientas disponibles, el proceso real era altamente manual.",
        ],
      },
      {
        level: 2,
        heading: "El problema",
        paragraphs: [
          "La operación presentaba varios puntos críticos:",
          "• Información dispersa en múltiples archivos.",
          "• Validaciones manuales constantes.",
          "• Dependencia de personas específicas.",
          "• Falta de visibilidad del estado de cada caso.",
          "• Reportes construidos manualmente.",
          "Esto generaba errores, retrasos y un alto esfuerzo operativo para mantener el sistema funcionando.",
        ],
      },
      {
        level: 2,
        heading: "El error común",
        paragraphs: [
          "La solución inicial suele ser “automatizar”.",
          "Pero automatizar un proceso desordenado solo replica el problema a mayor escala.",
          "Antes de pensar en tecnología, es necesario entender y estructurar la operación.",
        ],
      },
      {
        level: 2,
        heading: "Metodología aplicada",
        paragraphs: [
          "Para abordar este problema, trabajé con una metodología basada en cuatro etapas.",
        ],
      },
      {
        level: 3,
        heading: "1. Entender",
        paragraphs: [
          "Se realizó un levantamiento completo de los procesos actuales, identificando cómo fluía realmente la operación:",
          "• Qué hacía cada rol.",
          "• Qué información se utilizaba.",
          "• Dónde se generaban errores.",
          "• Qué tareas eran repetitivas.",
        ],
      },
      {
        level: 3,
        heading: "2. Estructurar",
        paragraphs: [
          "Se rediseñó la operación completa con una lógica clara:",
          "• Definición de etapas del proceso.",
          "• Asignación de responsables por actividad.",
          "• Estandarización de datos clave.",
          "• Definición de estados y transiciones.",
          "El objetivo fue pasar de múltiples flujos informales a un sistema estructurado.",
        ],
      },
      {
        level: 3,
        heading: "3. Preparar para automatizar",
        paragraphs: [
          "Antes de implementar tecnología, se limpió y dejó lista la base de datos:",
          "• Información centralizada.",
          "• Reglas claras de validación.",
          "• Criterios definidos para toma de decisiones.",
          "• Lógica de seguimiento y control.",
        ],
      },
      {
        level: 3,
        heading: "4. Implementar (cuando aplica)",
        paragraphs: [
          "Con el proceso estructurado, la automatización se vuelve mucho más simple y efectiva.",
          "El foco no es cambiar todo, sino eliminar fricción en los puntos clave.",
        ],
      },
      {
        level: 2,
        heading: "Qué se rediseñó",
        paragraphs: [
          "Se estructuraron procesos transversales clave como:",
          "• Ingreso y activación de casos.",
          "• Asignación de responsables.",
          "• Coordinación de actividades.",
          "• Seguimiento operativo.",
          "• Cierre y gestión posterior.",
          "Cada proceso fue redefinido con inputs claros, outputs definidos, responsables y reglas operativas.",
        ],
      },
      {
        level: 2,
        heading: "El resultado",
        paragraphs: [
          "Se pasó de una operación fragmentada a una estructura clara y preparada para escalar:",
          "• Información centralizada.",
          "• Menor carga operativa manual.",
          "• Mayor visibilidad del estado de cada caso.",
          "• Procesos estandarizados.",
          "• Base lista para automatización futura.",
        ],
      },
      {
        level: 2,
        heading: "Insight clave",
        paragraphs: [
          "La tecnología no soluciona procesos desordenados.",
          "Primero se estructura la operación. Luego se automatiza.",
        ],
      },
      {
        level: 2,
        heading: "¿Por dónde empezar?",
        paragraphs: [
          "Si tu operación depende de Excel, correos y seguimiento manual, probablemente el problema no es la herramienta. Es la estructura.",
        ],
      },
    ],
    ctaText:
      "¿Quieres estructurar tu operación antes de automatizarla? Agenda una llamada.",
  },
  {
    slug: "indicadores-clave-operacion-pyme",
    title: "5 indicadores clave para medir la salud operativa de tu PYME",
    metaTitle: "5 KPIs operativos para PYMEs | Alissa Osores Consulting",
    metaDescription:
      "Los 5 indicadores operativos que toda PYME debe medir para detectar problemas a tiempo y tomar decisiones con datos reales.",
    excerpt:
      "Si no mides tu operación, no la controlas. Estos son los 5 indicadores que uso con mis clientes para detectar problemas antes de que escalen.",
    date: "2026-03-28",
    readingTime: "4 min",
    category: "Métricas",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Dashboard con indicadores operativos y métricas de negocio",
    sections: [
      {
        level: 2,
        heading: "Por qué medir tu operación",
        paragraphs: [
          "Sin métricas operativas, las decisiones se toman por intuición. Y la intuición funciona hasta que el negocio crece lo suficiente para que los errores cuesten caro.",
        ],
      },
      {
        level: 2,
        heading: "Los 5 indicadores esenciales",
        paragraphs: [
          "No necesitas un dashboard sofisticado: con estos cinco tienes una foto clara de la salud operativa.",
        ],
      },
      {
        level: 3,
        heading: "1. Tiempo de ciclo por proceso",
        paragraphs: [
          "Cuánto tarda un proceso desde que empieza hasta que termina. Si crece, algo se está rompiendo.",
        ],
      },
      {
        level: 3,
        heading: "2. Tasa de reproceso",
        paragraphs: [
          "Porcentaje de tareas que hay que rehacer. Es el indicador más honesto de la calidad operativa.",
        ],
      },
      {
        level: 3,
        heading: "3. Carga por persona",
        paragraphs: [
          "Cuántas tareas críticas dependen de cada miembro del equipo. Si una sola persona concentra demasiado, hay riesgo.",
        ],
      },
      {
        level: 3,
        heading: "4. Tiempo de respuesta a clientes",
        paragraphs: [
          "Mide directamente la experiencia y suele anticipar problemas operativos internos.",
        ],
      },
      {
        level: 3,
        heading: "5. Costo operativo por cliente",
        paragraphs: [
          "Te dice si tu operación escala con eficiencia o si cada nuevo cliente te cuesta más de lo que debería.",
        ],
      },
      {
        level: 2,
        heading: "Qué hacer con los datos",
        paragraphs: [
          "Revisa estos indicadores al menos cada mes y conecta cada cambio con una decisión concreta. Medir sin actuar es perder el tiempo.",
        ],
      },
    ],
    ctaText: "¿Quieres definir los KPIs operativos de tu negocio? Conversemos.",
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
