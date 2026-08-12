import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const spanishLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "Aplicación GPT · URL exactas, PDF o capturas",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File convierte URL públicas exactas y procesa PDF de páginas web o capturas subidas en archivos Visual PDF o Interactive PDF separados.",
        lead: "Proporcione una URL pública exacta, una lista de URL exactas, un PDF de una página web o capturas completas o consecutivas. Elija Visual PDF para guardar el sitio como capturas o Interactive PDF para texto seleccionable y enlaces activos.",
        sections: [
            {
                heading: "1. Indique una o varias URL",
                body: "Envíe una URL pública, una lista de URL públicas exactas, un PDF existente de una página web o capturas completas o consecutivas. Cada página web se entrega como un PDF independiente.",
            },
            {
                heading: "2. Elija el tipo de PDF",
                body: "Elija Visual PDF para un resultado basado en imágenes que prioriza la apariencia, o Interactive PDF cuando importan más el texto seleccionable y los enlaces activos. Un modo se aplica a toda la lista de URL.",
            },
            {
                heading: "3. Convierta solo las páginas proporcionadas",
                body: "La aplicación GPT solo abre las URL públicas exactas indicadas. No rastrea dominios ni sitemaps, no descubre páginas, no sigue enlaces internos y no elude autenticación, paywalls, CAPTCHA, restricciones geográficas ni otros controles de acceso.",
            },
            {
                heading: "4. Procese PDF y capturas",
                body: "Las capturas subidas pueden ensamblarse de arriba abajo en un Visual PDF. Los PDF de páginas web se procesan sin inventar contenido ausente; Interactive PDF prioriza el texto, el diseño, las imágenes y los enlaces verificados existentes.",
            },
            {
                heading: "5. Obtenga instrucciones adaptadas y revise el resultado",
                body: "Si la conversión directa no está disponible o queda incompleta, la aplicación ofrece pasos específicos para la página, el navegador o la exportación nativa. Revise contenido recortado o ausente, zonas vacías, legibilidad, orden, diseño, enlaces y fidelidad al modo.",
            },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Abrir GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Instrucciones de uso",
            firstStageDescription: "Proporcione a la aplicación GPT una URL válida.",
            firstStageLabel: "Envíe las URL",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "Aplicación GPT · archivo HTML cargado",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File convierte un archivo HTML cargado en un PDF verificado y conserva el diseño, las imágenes, el texto y los enlaces.",
        lead: "Cargue exactamente un archivo HTML. GPT HTML 2 PDF previsualiza su diseño, carga estilos, fuentes e imágenes accesibles y crea un PDF verificado con texto seleccionable y enlaces en los que se puede hacer clic cuando es posible.",
        sections: [
            {
                heading: "1. Cargue exactamente un archivo HTML",
                body: "Adjunte un solo documento HTML. La aplicación GPT no acepta una URL en su lugar, no procesa varios archivos HTML, no rastrea sitios, no sigue enlaces a páginas adicionales ni combina documentos.",
            },
            {
                heading: "2. Incluya los estilos y recursos",
                body: "Los estilos integrados se utilizan automáticamente junto con las hojas de estilo, fuentes e imágenes remotas accesibles. Si el HTML hace referencia a un archivo CSS local que falta, cargue el archivo correspondiente para obtener un resultado más fiel o continúe sin él.",
            },
            {
                heading: "3. Previsualice y conserve el diseño",
                body: "Antes de la conversión, el HTML se previsualiza con un ancho de escritorio adecuado. El PDF intenta conservar el tema, los colores, la tipografía, los espacios, las columnas, las tarjetas, las imágenes y el orden del contenido sin activar controles interactivos.",
            },
            {
                heading: "4. Cree un PDF legible",
                body: "La aplicación GPT produce un PDF con texto seleccionable e hipervínculos funcionales cuando es posible. Los diseños anchos pueden usar orientación horizontal o un tamaño adecuado para no comprimir, recortar ni dividir elementos importantes.",
            },
            {
                heading: "5. Revise el archivo terminado",
                body: "Cada PDF se revisa antes de la entrega para detectar contenido ausente, elementos recortados, espacios vacíos sin explicación, problemas de legibilidad, saltos de página, colocación de imágenes y enlaces compatibles.",
            },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Abrir GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Cinco pasos de HTML a PDF",
            firstStageDescription: "Proporcione un archivo HTML a la aplicación GPT.",
            firstStageLabel: "Cargar HTML",
        },
    }
};
