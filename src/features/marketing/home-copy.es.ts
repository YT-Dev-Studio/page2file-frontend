import type { HomeCopy } from "./home-copy";

export const homeCopyEs: HomeCopy = {
  title: "Exporte cualquier página web a PDF/PPTX",
  lead:
    "Pegue el enlace de una página pública. Page 2 File la divide cuidadosamente en páginas PDF o diapositivas de PowerPoint, con una vista previa antes de descargar.",
  form: {
    formatLabel: "Formato",
    meta: "Sin registro · Vista previa · Archivos temporales",
    pdfModeLabel: "Modo PDF",
    pdfModes: [
      { label: "Capturas de página", value: "visual" },
      { label: "PDF editable", value: "editable" },
    ],
    powerpointModeLabel: "Modo PowerPoint",
    powerpointModes: [
      { label: "Capturas de diapositiva", value: "visual" },
      { label: "Presentación editable", value: "editable" },
    ],
    submitPdf: "Crear PDF",
    submitPowerpoint: "Crear PowerPoint",
    urlHelper:
      "Solo páginas HTTPS públicas. Use la extensión para pestañas con sesión iniciada.",
    urlLabel: "Enlace de la página web",
    urlPlaceholder: "https://example.com/articulo",
  },
  converterFlow: {
    backAction: "Volver a la configuración",
    processingBody:
      "Estamos analizando la página y preparando el formato de archivo elegido.",
    processingTitle: "Estamos preparando su archivo",
    readyBody: "Haga clic para descargar el archivo",
    readyTitle: "Su archivo está listo",
  },
  closingNote:
    "El servicio funciona con artículos, documentación, páginas de destino e informes públicos. Para páginas privadas o chats AI, la extensión trabaja con la pestaña activa del navegador y crea una vista previa temporal.",
  preview: {
    accessibleLabel: "Ejemplo de resultado de conversión",
    divider: "EL SALTO DE PÁGINA MANTIENE LA IMAGEN UNIDA",
    imageNote: "La imagen permanece completa",
    pdfMeta: "12 páginas · listo",
    powerpointMeta: "12 diapositivas · listo",
    sourceTitle: "Un artículo largo con una imagen",
    title: "Página → archivo preciso",
  },
  promo: {
    body:
      "La extensión funciona de dos formas: mediante URL o con la pestaña activa. Los datos de la página exportada se eliminan del servidor después de cerrar la vista previa.",
    eyebrow: "EXTENSIÓN DE CHROME",
    title:
      "Exporte la pestaña actual, incluso cuando sea necesario iniciar sesión.",
  },
  features: {
    eyebrow: "FUNCIONES",
    title: "Opciones flexibles para el contenido exportado",
    body:
      "Exporte páginas web en el formato adecuado: como capturas de página o conservando medios, enlaces y estructura.",
    items: [
      {
        title: "Exporte chats AI y de mensajería",
        body:
          "Exporte conversaciones largas de ChatGPT, Claude, Gemini, Grok, DeepSeek y otros servicios a un PDF claro y fácil de leer.",
      },
      {
        title: "Los 2 formatos más prácticos",
        list: {
          items: [
            "Guarde capturas de página como PDF/PPTX.",
            "Cree archivos PDF/PPTX editables que conserven medios, enlaces y estructura.",
          ],
          style: "unordered",
        },
      },
      {
        title: "Controle el contenido del archivo",
        body:
          "Combine medios, enlaces y estilo conservados en los archivos exportados. En la vista previa también puede eliminar elementos innecesarios de la página.",
      },
      {
        title: "2 modos de trabajo",
        body:
          "Exporte la pestaña actual de cualquier sitio o introduzca la URL de una página pública.",
      },
      {
        title: "Problemas de otros servicios resueltos",
        body:
          "Obtenga un PDF o PPTX con imágenes completas y sin huecos excesivos entre el contenido.",
      },
      {
        title: "Seguro y sin registro",
        body:
          "No necesita crear una cuenta. Instale la extensión y guarde la página seleccionada.",
      },
    ],
  },
  howItWorks: {
    action: "Abrir la guía completa",
    body:
      "La forma más rápida es la extensión: trabaja con la pestaña actual y no requiere copiar un enlace.",
    eyebrow: "CÓMO EMPEZAR",
    extensionAction: "Instalar la extensión",
    installTime: "En 30 segundos",
    items: [
      {
        title: "Instale la extensión",
        body:
          "Añada Page 2 File a Chrome. No necesita una cuenta de Page 2 File.",
      },
      {
        title: "Abra la página",
        list: {
          items: [
            "Vaya a la pestaña deseada.",
            "Abra Page 2 File.",
            "Haga clic en Preview.",
          ],
          style: "ordered",
        },
      },
      {
        title: "Revise y descargue",
        body:
          "Revise el resultado, elimine secciones si es necesario y descargue el archivo terminado.",
      },
    ],
    note:
      "Con ejemplos de un enlace público, una pestaña privada y un chat AI",
    stepLabels: ["Paso 1", "Paso 2", "Paso 3"],
    title: "Tres pasos hasta el archivo terminado",
  },
  blog: {
    action: "Leer artículo",
    allAction: "Todos los artículos",
    body:
      "Guías prácticas sobre fidelidad, edición, enlaces, saltos de página y manejo seguro de chats AI.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Guías para exportar distintos tipos de sitios",
  },
  faq: {
    body:
      "Respuestas claras sobre captura de páginas, modos de salida, pestañas privadas, vistas previas temporales y exportación de chats.",
    eyebrow: "PREGUNTAS FRECUENTES",
    items: [
      {
        title: "¿Cómo convierto una página web en PDF o PowerPoint?",
        body:
          "Para una página pública, pegue su URL HTTPS, elija PDF o PowerPoint y capturas de página o un modo editable, y revise las secciones antes de crear el archivo. Para una página con sesión iniciada, use la extensión Page 2 File para Chrome con la pestaña activa.",
      },
      {
        title: "¿Puede Page 2 File conservar el diseño de la página?",
        body:
          "Las capturas de página están pensadas para conservar la apariencia renderizada, incluido el diseño, los colores, las imágenes y los gráficos visibles. Las funciones del navegador como animaciones, vídeos y controles interactivos se representan de forma estática.",
      },
      {
        title: "¿El texto y los enlaces siguen siendo editables o accesibles?",
        body:
          "El modo editable conserva el texto compatible como contenido del documento y los destinos seguros de los enlaces. Los widgets complejos, gráficos canvas y elementos no compatibles pueden representarse como imágenes. Las capturas de página priorizan la apariencia y no convierten cada píxel en un objeto editable.",
      },
      {
        title: "¿Puede capturar por completo páginas largas y dinámicas?",
        body:
          "La extensión trabaja con la pestaña activa renderizada, también en páginas largas después de cargar las secciones necesarias. Abra primero el contenido contraído y desplácese hasta el final. El contenido oculto o no cargado no se puede exportar.",
      },
      {
        title: "¿Puedo convertir páginas después de iniciar sesión?",
        body:
          "Sí, mediante la extensión de Chrome después de abrir la página normalmente. La extensión trabaja con la pestaña activa y no le pide que envíe la contraseña de una cuenta al formulario de URL pública. No elude los controles de acceso.",
      },
      {
        title: "¿Puedo convertir una página o un sitio completo?",
        body: [
          { kind: "text", text: "Los convertidores de páginas web, además de " },
          { kind: "link", label: "One Page 2 PDF", route: "page2pdf-gpt" },
          { kind: "text", text: " y " },
          {
            kind: "link",
            label: "One Page 2 PowerPoint",
            route: "one-page2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " procesan una URL. Para varias páginas públicas accesibles, use ",
          },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " o " },
          {
            kind: "link",
            label: "Web 2 PowerPoint",
            route: "web2powerpoint-gpt",
          },
          {
            kind: "text",
            text: ": recibirá un PDF o PPTX separado por cada página seleccionada, no un archivo combinado.",
          },
        ],
      },
      {
        title:
          "¿En qué se diferencian las capturas de página y los modos editables?",
        body:
          "Las capturas de página priorizan la fidelidad a la página renderizada. El modo editable prioriza el texto seleccionable, las imágenes compatibles, los enlaces seguros y las estructuras reutilizables. Revise gráficos complejos, tipografía y diseños, porque ambos modos pueden requerir sustituciones.",
      },
      {
        title:
          "¿Qué ocurre con los datos de la vista previa cuando cierro la pestaña?",
        body:
          "Los datos de la vista previa son temporales y se eliminan al cerrar su pestaña. Page 2 File no tiene una base de datos de historial de conversiones ni ofrece un archivo de vistas previas anteriores.",
      },
      {
        title: "¿Necesito una cuenta?",
        body:
          "No necesita una cuenta de Page 2 File para el flujo de URL pública ni para la vista previa de la extensión. Para una página privada a la que tiene acceso, quizá deba seguir con la sesión iniciada en el sitio de origen.",
      },
      {
        title: "¿Puedo exportar chats AI y de mensajería?",
        body:
          "La extensión puede exportar una conversación renderizada en una pestaña de Chrome, incluidos chats AI compatibles y mensajería web. Cargue primero el intervalo de mensajes necesario. Las aplicaciones exclusivamente nativas y las interfaces fuera del navegador, como Signal Desktop, quedan fuera de la captura.",
      },
    ],
    title: "Lo que debe saber",
  },
  finalCta: {
    body:
      "Pegue aquí un enlace público o instale la extensión para la pestaña actual.",
    eyebrow: "¿QUIERE PROBARLO CON SU PÁGINA?",
    title: "Obtenga un PDF o PowerPoint antes de abrir un editor",
  },
};
