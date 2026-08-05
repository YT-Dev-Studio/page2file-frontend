import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

const gptRoutes: ReadonlyArray<RelatedRoute> = [
  { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
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
    eyebrow: "Aplicación GPT · URL exactas, PDF o capturas",
    title: "Webpage to PDF Converter — Web2File",
    displayTitle: "GPT: Webpage 2 PDF",
    description:
      "Webpage to PDF Converter — Web2File convierte URL públicas exactas y procesa PDF de páginas web o capturas subidas en archivos Visual PDF o Interactive PDF separados.",
    lead:
      "Proporcione una URL pública exacta, una lista de URL exactas, un PDF de una página web o capturas completas o consecutivas. Elija Visual PDF para guardar el sitio como capturas o Interactive PDF para texto seleccionable y enlaces activos.",
    sections: [
      {
        heading: "1. Indique una o varias URL",
        body:
          "Envíe una URL pública, una lista de URL públicas exactas, un PDF existente de una página web o capturas completas o consecutivas. Cada página web se entrega como un PDF independiente.",
      },
      {
        heading: "2. Elija el tipo de PDF",
        body:
          "Elija Visual PDF para un resultado basado en imágenes que prioriza la apariencia, o Interactive PDF cuando importan más el texto seleccionable y los enlaces activos. Un modo se aplica a toda la lista de URL.",
      },
      {
        heading: "3. Convierta solo las páginas proporcionadas",
        body:
          "La aplicación GPT solo abre las URL públicas exactas indicadas. No rastrea dominios ni sitemaps, no descubre páginas, no sigue enlaces internos y no elude autenticación, paywalls, CAPTCHA, restricciones geográficas ni otros controles de acceso. Para descubrir un sitio completo, use Web2File: Website 2 PDF.",
      },
      {
        heading: "4. Procese PDF y capturas",
        body:
          "Las capturas subidas pueden ensamblarse de arriba abajo en un Visual PDF. Los PDF de páginas web se procesan sin inventar contenido ausente; Interactive PDF prioriza el texto, el diseño, las imágenes y los enlaces verificados existentes.",
      },
      {
        heading: "5. Obtenga instrucciones adaptadas y revise el resultado",
        body:
          "Si la conversión directa no está disponible o queda incompleta, la aplicación ofrece pasos específicos para la página, el navegador o la exportación nativa. Revise contenido recortado o ausente, zonas vacías, legibilidad, orden, diseño, enlaces y fidelidad al modo.",
      },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Abrir GPT Webpage 2 PDF",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Guardar una página web como PDF" },
      {
        slug: "long-webpage-page-breaks",
        label: "Corregir saltos en páginas web largas",
      },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Instrucciones de uso",
      firstStageDescription: "Proporcione a la aplicación GPT una URL válida.",
      firstStageLabel: "Envíe las URL",
    },
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
    title: "HTML to PDF Converter — Web2File",
    displayTitle: "GPT: HTML 2 PDF",
    description:
      "HTML to PDF Converter — Web2File convierte un archivo HTML cargado en un PDF verificado y conserva el diseño, las imágenes, el texto y los enlaces.",
    lead:
      "Cargue exactamente un archivo HTML. GPT HTML 2 PDF previsualiza su diseño, carga estilos, fuentes e imágenes accesibles y crea un PDF verificado con texto seleccionable y enlaces en los que se puede hacer clic cuando es posible.",
    sections: [
      {
        heading: "1. Cargue exactamente un archivo HTML",
        body:
          "Adjunte un solo documento HTML. La aplicación GPT no acepta una URL en su lugar, no procesa varios archivos HTML, no rastrea sitios, no sigue enlaces a páginas adicionales ni combina documentos.",
      },
      {
        heading: "2. Incluya los estilos y recursos",
        body:
          "Los estilos integrados se utilizan automáticamente junto con las hojas de estilo, fuentes e imágenes remotas accesibles. Si el HTML hace referencia a un archivo CSS local que falta, cargue el archivo correspondiente para obtener un resultado más fiel o continúe sin él.",
      },
      {
        heading: "3. Previsualice y conserve el diseño",
        body:
          "Antes de la conversión, el HTML se previsualiza con un ancho de escritorio adecuado. El PDF intenta conservar el tema, los colores, la tipografía, los espacios, las columnas, las tarjetas, las imágenes y el orden del contenido sin activar controles interactivos.",
      },
      {
        heading: "4. Cree un PDF legible",
        body:
          "La aplicación GPT produce un PDF con texto seleccionable e hipervínculos funcionales cuando es posible. Los diseños anchos pueden usar orientación horizontal o un tamaño adecuado para no comprimir, recortar ni dividir elementos importantes.",
      },
      {
        heading: "5. Revise el archivo terminado",
        body:
          "Cada PDF se revisa antes de la entrega para detectar contenido ausente, elementos recortados, espacios vacíos sin explicación, problemas de legibilidad, saltos de página, colocación de imágenes y enlaces compatibles.",
      },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Abrir GPT HTML 2 PDF",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Convertir HTML a PDF de forma segura" },
      {
        slug: "webpage-capture-vs-web-scraping",
        label: "Captura frente a web scraping",
      },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Cinco pasos de HTML a PDF",
      firstStageDescription: "Proporcione un archivo HTML a la aplicación GPT.",
      firstStageLabel: "Cargar HTML",
    },
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
          "Las ramas contraídas, los mensajes no cargados y el contenido que el navegador aún no ha cargado quizá deban abrirse o cargarse antes de capturar.",
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
        heading: "Las imágenes dependen de la página cargada",
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
