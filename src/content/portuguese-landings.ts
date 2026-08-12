import type { LandingContent, RelatedRoute } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";
const gptRoutes: ReadonlyArray<RelatedRoute> = [
    { route: "page2pdf-gpt", label: "Webpage to PDF Converter — Web2File" },
    { route: "html2pdf-gpt", label: "HTML 2 PDF" }
];
export const portugueseLandingContent: Partial<Record<StaticRoute, LandingContent>> = {
    "page2pdf-gpt": {
        route: "page2pdf-gpt",
        eyebrow: "Aplicação GPT · URLs exatos, PDFs ou capturas",
        title: "Webpage to PDF Converter — Web2File",
        displayTitle: "GPT: Webpage 2 PDF",
        description: "Webpage to PDF Converter — Web2File processa URLs públicos exatos, PDFs de páginas Web e capturas como Visual PDF ou Interactive PDF.",
        lead: "Forneça um URL público exato, uma lista de URLs exatos, um PDF de página web ou capturas de página inteira ou consecutivas. Escolha Visual PDF para guardar o site como capturas ou Interactive PDF para texto selecionável e ligações clicáveis.",
        sections: [
            { heading: "1. Indique um ou mais URLs", body: "Envie um URL público, uma lista de URLs públicos exatos, um PDF existente de página web ou capturas completas ou consecutivas. Cada página web permanece num PDF separado." },
            { heading: "2. Escolha o tipo de PDF", body: "Escolha Visual PDF para um resultado baseado em imagens que privilegia o aspeto da página, ou Interactive PDF quando o texto selecionável e as ligações clicáveis são prioritários. Um modo aplica-se a toda a lista de URLs." },
            { heading: "3. Converta apenas as páginas fornecidas", body: "A aplicação GPT abre apenas os URLs públicos exatos indicados. Não rastreia domínios ou sitemaps, não descobre páginas, não segue ligações internas nem contorna autenticação, paywalls, CAPTCHA, restrições geográficas ou outros controlos de acesso." },
            { heading: "4. Processe PDFs e capturas", body: "As capturas carregadas podem ser reunidas de cima para baixo num Visual PDF. Os PDFs de páginas web são processados sem inventar conteúdo em falta; Interactive PDF privilegia texto, disposição, imagens e ligações verificadas existentes." },
            { heading: "5. Obtenha instruções adequadas e reveja o resultado", body: "Se a conversão direta estiver indisponível ou incompleta, a aplicação fornece passos específicos para a página, navegador ou exportação nativa. Reveja conteúdo em falta ou cortado, áreas vazias, legibilidade, ordem, disposição, ligações e fidelidade ao modo." },
        ],
        externalLinkKey: "page2pdfGpt",
        primaryLabel: "Abrir GPT Webpage 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Instruções de utilização",
            firstStageDescription: "Forneça à aplicação GPT um URL funcional.",
            firstStageLabel: "Envie os URLs",
        },
    },
    "html2pdf-gpt": {
        route: "html2pdf-gpt",
        eyebrow: "Aplicação GPT · ficheiro HTML carregado",
        title: "HTML to PDF Converter — Web2File",
        displayTitle: "GPT: HTML 2 PDF",
        description: "HTML to PDF Converter — Web2File transforma um ficheiro HTML carregado num PDF verificado, preservando o layout, as imagens, o texto e as ligações.",
        lead: "Carregue exatamente um ficheiro HTML. GPT HTML 2 PDF pré-visualiza o design, carrega estilos, tipos de letra e imagens acessíveis e cria um PDF verificado com texto selecionável e ligações clicáveis sempre que possível.",
        sections: [
            { heading: "1. Carregue exatamente um ficheiro HTML", body: "Adicione um único documento HTML. A aplicação GPT não aceita um URL em alternativa, não processa vários ficheiros HTML, não percorre sites, não segue ligações para páginas adicionais e não combina documentos." },
            { heading: "2. Inclua os estilos e recursos", body: "Os estilos inline e incorporados são usados automaticamente com folhas de estilo, tipos de letra e imagens remotos acessíveis. Se o HTML referenciar um ficheiro CSS local em falta, carregue o ficheiro correspondente para maior fidelidade ou continue sem ele." },
            { heading: "3. Pré-visualize e preserve o design", body: "Antes da conversão, o HTML é pré-visualizado numa largura de ecrã adequada. O PDF procura preservar o tema, as cores, a tipografia, os espaçamentos, as colunas, os cartões, as imagens e a ordem do conteúdo sem ativar controlos interativos." },
            { heading: "4. Crie um PDF legível", body: "A aplicação GPT produz um PDF com texto selecionável e hiperligações funcionais sempre que possível. Os layouts largos podem usar orientação horizontal ou um formato adequado para evitar comprimir, cortar ou dividir elementos importantes." },
            { heading: "5. Verifique o ficheiro final", body: "Cada PDF é verificado antes da entrega quanto a conteúdo em falta, componentes cortados, áreas vazias inexplicáveis, legibilidade, quebras de página, colocação de imagens e ligações suportadas." },
        ],
        externalLinkKey: "html2pdfGpt",
        primaryLabel: "Abrir GPT HTML 2 PDF",
        relatedRoutes: gptRoutes,
        workflowOverride: {
            detailsTitle: "Cinco passos de HTML para PDF",
            firstStageDescription: "Forneça um ficheiro HTML à aplicação GPT.",
            firstStageLabel: "Carregar HTML",
        },
    }
};
