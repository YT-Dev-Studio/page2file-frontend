import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

const gptRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "One Page 2 PDF" },
  { route: "web2pdf-gpt", label: "Web 2 PDF" },
  { route: "html2pdf-gpt", label: "HTML 2 PDF" },
  { route: "one-page2powerpoint-gpt", label: "One Page 2 PowerPoint" },
  { route: "web2powerpoint-gpt", label: "Web 2 PowerPoint" },
];

const chatRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "export-ai-chat-to-pdf", label: "Todas las exportaciones de chats AI" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT a PDF" },
  { route: "export-claude-to-pdf", label: "Claude a PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini a PDF" },
  { route: "export-grok-to-pdf", label: "Grok a PDF" },
];

export const spanishLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "Aplicación GPT · una URL pública",
    title: "Convierta una URL pública en un PDF con One Page 2 PDF",
    description:
      "One Page 2 PDF es una aplicación GPT especializada que envía una URL pública para convertirla y devuelve un PDF para esa única página.",
    lead:
      "Proporcione a la aplicación GPT una URL HTTPS pública. One Page 2 PDF envía la dirección al servicio Page 2 File y devuelve un PDF descargable de la página solicitada.",
    sections: [
      {
        heading: "1. Envíe una URL pública",
        body:
          "Pegue la dirección HTTPS exacta de la página que desea convertir. La solicitud abarca una página y no inicia una búsqueda en todo el sitio.",
      },
      {
        heading: "2. Reciba un PDF",
        body:
          "La aplicación GPT devuelve un enlace a un PDF de esa página. Revise el texto, los enlaces, las imágenes y los saltos de página antes de usar el archivo.",
      },
      {
        heading: "3. Use el límite correcto",
        body:
          "One Page 2 PDF no abre pestañas con sesión iniciada ni elude controles de acceso. Use la extensión Page 2 File para una página ya abierta después de iniciar sesión.",
      },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Abrir la aplicación GPT One Page 2 PDF",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Guardar una página web como PDF" },
      {
        slug: "long-webpage-page-breaks",
        label: "Corregir saltos en páginas web largas",
      },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "Aplicación GPT · páginas web accesibles",
    title: "Convierta páginas de un sitio en PDF separados con Web 2 PDF",
    description:
      "Web 2 PDF encuentra páginas accesibles de un sitio, convierte las seleccionadas y devuelve un PDF independiente para cada página.",
    lead:
      "Proporcione a Web 2 PDF una dirección pública. La aplicación puede encontrar páginas accesibles, convertir URL seleccionadas y devolver varios enlaces de descarga, uno por página.",
    sections: [
      {
        heading: "1. Proporcione el sitio",
        body:
          "Envíe la URL pública inicial. La aplicación encuentra páginas accesibles y muestra el límite elegido antes de convertir.",
      },
      {
        heading: "2. Revise la lista de páginas",
        body:
          "Confirme qué páginas accesibles pertenecen a la solicitud. Las páginas con inicio de sesión, URL bloqueadas y dominios externos quedan excluidos.",
      },
      {
        heading: "3. Descargue PDF separados",
        body:
          "Cada página convertida se entrega como un PDF independiente. Web 2 PDF no promete un documento combinado del sitio ni un conjunto de datos de scraping.",
      },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Abrir la aplicación GPT Web 2 PDF",
    articleLinks: [
      {
        slug: "multi-page-website-to-pdf",
        label: "Convertir un sitio de varias páginas en PDF",
      },
      {
        slug: "website-types-to-pdf-or-powerpoint",
        label: "Tipos de sitios que se pueden exportar",
      },
    ],
    relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "Aplicación GPT · archivo HTML cargado",
    title: "Convierta un archivo HTML cargado con HTML 2 PDF",
    description:
      "HTML 2 PDF acepta un archivo HTML cargado y devuelve un PDF limpio dentro de límites de renderizado visibles.",
    lead:
      "Cargue un archivo HTML en la aplicación GPT. HTML 2 PDF lo renderiza de forma aislada y devuelve un PDF; este flujo de archivo sin procesar solo está disponible en esta aplicación.",
    sections: [
      {
        heading: "1. Cargue el archivo HTML",
        body:
          "Añada el documento HTML que tiene permiso para procesar. Este flujo empieza con un archivo, no con la URL pública de una página web.",
      },
      {
        heading: "2. Conviértalo en PDF",
        body:
          "La aplicación devuelve un PDF del documento cargado. Los recursos externos, scripts, fuentes personalizadas y funciones del navegador pueden variar.",
      },
      {
        heading: "3. Trate el HTML como entrada no confiable",
        body:
          "El renderizado seguro exige aislar redes privadas, archivos locales y scripts no controlados. El resultado es una conversión de documento, no una ejecución web alojada.",
      },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Abrir la aplicación GPT HTML 2 PDF",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Convertir HTML a PDF de forma segura" },
      {
        slug: "webpage-capture-vs-web-scraping",
        label: "Captura frente a web scraping",
      },
    ],
    relatedRoutes: gptRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "Aplicación GPT · una URL pública",
    title: "Convierta una URL en PPTX con One Page 2 PowerPoint",
    description:
      "One Page 2 PowerPoint es una aplicación GPT especializada que convierte una URL pública y devuelve una presentación PPTX para esa página.",
    lead:
      "Proporcione a la aplicación una URL HTTPS pública. One Page 2 PowerPoint envía la página para convertirla y devuelve una presentación PPTX descargable.",
    sections: [
      {
        heading: "1. Envíe una URL pública",
        body:
          "Pegue la dirección exacta de la página. La aplicación procesa una página por solicitud y no explora el resto del sitio.",
      },
      {
        heading: "2. Reciba un PPTX",
        body:
          "La página se asigna a una presentación y se entrega como archivo PowerPoint. Revise los límites de las diapositivas y las sustituciones visuales o editables.",
      },
      {
        heading: "3. Mantenga las pestañas privadas en Chrome",
        body:
          "Una aplicación GPT para URL públicas no puede adoptar su sesión del navegador. Use la extensión Page 2 File cuando la fuente esté abierta después de iniciar sesión.",
      },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "Abrir One Page 2 PowerPoint",
    articleLinks: [
      {
        slug: "webpage-to-powerpoint",
        label: "Convertir una página web en PowerPoint",
      },
      {
        slug: "sections-to-slides",
        label: "Convertir secciones de una página en diapositivas",
      },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "Aplicación GPT · páginas web accesibles",
    title: "Convierta páginas de un sitio en PPTX con Web 2 PowerPoint",
    description:
      "Web 2 PowerPoint encuentra páginas accesibles, convierte las seleccionadas y devuelve un PPTX independiente para cada página.",
    lead:
      "Proporcione a Web 2 PowerPoint una dirección pública. La aplicación encuentra páginas accesibles, convierte URL seleccionadas y devuelve varios enlaces de presentaciones.",
    sections: [
      {
        heading: "1. Proporcione el sitio",
        body:
          "Envíe la URL pública inicial y defina claramente el límite del sitio. Los dominios externos y las páginas privadas no se incluyen de forma silenciosa.",
      },
      {
        heading: "2. Confirme las páginas accesibles",
        body:
          "Revise la lista encontrada antes de convertir. Solo las páginas seleccionadas y accesibles se envían a Page 2 File.",
      },
      {
        heading: "3. Descargue archivos PPTX separados",
        body:
          "Cada página convertida se entrega como una presentación independiente. La aplicación no promete una presentación combinada de todo el sitio.",
      },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Abrir Web 2 PowerPoint",
    articleLinks: [
      {
        slug: "website-to-powerpoint",
        label: "Convertir un sitio web en PowerPoint",
      },
      {
        slug: "screenshot-vs-editable-powerpoint",
        label: "Diapositivas capturadas o editables",
      },
    ],
    relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "Exportación de chats AI",
    title: "Exporte una conversación desde la pestaña activa",
    description:
      "Exporte conversaciones compatibles de ChatGPT, Claude, Gemini y Grok a PDF con la extensión Page 2 File, una vista previa temporal y sin historial de conversiones.",
    lead:
      "Elija la apariencia original o un documento de lectura sencillo. La extensión exporta el chat desde la pestaña activa del navegador.",
    sections: [
      {
        heading: "Interfaces de chat compatibles",
        body:
          "Page 2 File admite ChatGPT, Claude, Gemini y Grok, además de una sustitución prudente para otros chats del navegador.",
        points: ["ChatGPT", "Claude", "Gemini", "Grok"],
      },
      {
        heading: "Apariencia original",
        body:
          "Se conservan la agrupación de mensajes, los bloques de código, las tablas y los enlaces visibles a fuentes.",
      },
      {
        heading: "Documento limpio",
        body:
          "El texto compatible se adapta a un documento más tranquilo, conservando la autoría y los destinos de los enlaces.",
      },
      {
        heading: "Producto independiente",
        body:
          "Page 2 File no está afiliado con ninguna plataforma AI compatible ni está respaldado u operado por ellas.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar la extensión",
    articleLinks: [
      {
        slug: "export-ai-chats-privately",
        label: "Exportar chats AI de forma privada",
      },
      {
        slug: "website-types-to-pdf-or-powerpoint",
        label: "Tipos de sitios que se pueden exportar",
      },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "Exportación de ChatGPT",
    title: "Exporte conversaciones largas de ChatGPT a PDF",
    description:
      "Exporte mensajes visibles de ChatGPT, código, tablas, enlaces y conversaciones largas desde la pestaña activa a un PDF revisado.",
    lead:
      "Capture la conversación visible en la pestaña activa, revise los saltos de página y descargue el archivo sin una cuenta de Page 2 File.",
    sections: [
      {
        heading: "Qué se conserva",
        body:
          "Los mensajes, el orden de los participantes, el código, las tablas y los enlaces visibles se representan en la vista previa.",
      },
      {
        heading: "Dos estilos de lectura",
        body:
          "Conserve el ritmo visual original o elija un documento más tranquilo para leer e imprimir.",
      },
      {
        heading: "Límites específicos de la plataforma",
        body:
          "Las ramas contraídas, los mensajes no cargados y el contenido fuera del DOM quizá deban abrirse o cargarse antes de capturar.",
      },
      {
        heading: "Sin relación oficial",
        body:
          "Page 2 File es una herramienta independiente y no está respaldada ni operada por OpenAI o ChatGPT.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para ChatGPT",
    articleLinks: [
      {
        slug: "export-chatgpt-conversation-to-pdf",
        label: "Exportar una conversación ChatGPT a PDF",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Proteger los datos de vista previa de chats AI",
      },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Exportación de Claude",
    title: "Guarde conversaciones Claude y artefactos visibles",
    description:
      "Exporte conversaciones Claude, Markdown, código, citas y contexto visible de artefactos desde la pestaña activa a un PDF revisado.",
    lead:
      "Después de un clic explícito, la extensión lee la conversación activa y crea una vista previa temporal para respuestas largas.",
    sections: [
      {
        heading: "Las respuestas largas mantienen su estructura",
        body:
          "Los títulos, listas, citas y código permanecen en su orden de lectura.",
      },
      {
        heading: "Contexto de artefactos",
        body:
          "Los títulos visibles y el contenido disponible de artefactos pueden representarse sin afirmar acceso oculto.",
      },
      {
        heading: "Sin relación oficial",
        body:
          "Page 2 File es una herramienta independiente y no está respaldada por Anthropic.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Exportar un chat Claude a PDF" },
      {
        slug: "export-ai-chats-privately",
        label: "Proteger los datos de vista previa de chats AI",
      },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Exportación de Gemini",
    title: "Convierta una conversación Gemini en un PDF legible",
    description:
      "Exporte mensajes visibles de Gemini, tarjetas de fuentes, código y citas desde la pestaña activa a un PDF revisado con vista previa temporal.",
    lead:
      "Revise la representación de las tarjetas de fuentes y las imágenes visibles antes de crear un documento limpio o visualmente fiel.",
    sections: [
      {
        heading: "Las fuentes siguen siendo útiles",
        body:
          "Las citas y los enlaces visibles permanecen accesibles cuando sus destinos son seguros.",
      },
      {
        heading: "Las imágenes siguen el DOM",
        body:
          "Solo los medios disponibles para la página activa pueden aparecer en la vista previa temporal.",
      },
      {
        heading: "Sin relación oficial",
        body:
          "Page 2 File es independiente y no es un producto de Google o Gemini.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Exportar un chat Gemini a PDF" },
      {
        slug: "export-ai-chats-privately",
        label: "Proteger los datos de vista previa de chats AI",
      },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Exportación de Grok",
    title: "Exporte conversaciones Grok con fuentes visibles",
    description:
      "Exporte conversaciones visibles de Grok, enlaces de X, publicaciones citadas y fuentes desde la pestaña activa a un PDF revisado.",
    lead:
      "Capture la conversación activa, conserve el contexto visible de las fuentes y elija una vista previa visual o de lectura limpia.",
    sections: [
      {
        heading: "Orden de lectura que respeta la conversación",
        body:
          "Los mensajes y el contexto de las publicaciones citadas permanecen agrupados en lugar de convertirse en un flujo de texto sin etiquetas.",
      },
      {
        heading: "Enlaces visibles de X",
        body:
          "Las URL de publicaciones y las fuentes permanecen accesibles cuando superan la comprobación de seguridad.",
      },
      {
        heading: "Sin relación oficial",
        body:
          "Page 2 File es un producto independiente y no está respaldado por xAI o X.",
      },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para Grok",
    articleLinks: [
      {
        slug: "export-other-ai-chats-to-pdf",
        label: "Exportar otros chats AI a PDF",
      },
      {
        slug: "export-ai-chats-privately",
        label: "Proteger los datos de vista previa de chats AI",
      },
    ],
    relatedRoutes: chatRoutes,
  },
};
