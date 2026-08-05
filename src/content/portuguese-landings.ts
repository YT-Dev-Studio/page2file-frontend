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
  { route: "export-ai-chat-to-pdf", label: "Todas as exportações de conversas AI" },
  { route: "export-chatgpt-to-pdf", label: "ChatGPT para PDF" },
  { route: "export-claude-to-pdf", label: "Claude para PDF" },
  { route: "export-gemini-to-pdf", label: "Gemini para PDF" },
  { route: "export-grok-to-pdf", label: "Grok para PDF" },
];

export const portugueseLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  "page2pdf-gpt": {
    route: "page2pdf-gpt",
    eyebrow: "Aplicação GPT · URLs exatos, PDFs ou capturas",
    title: "Webpage to PDF Converter — Web2File",
    description:
      "Webpage to PDF Converter — Web2File converte URLs públicos exatos e processa PDFs de páginas web ou capturas carregadas em ficheiros Visual PDF ou Interactive PDF separados.",
    lead:
      "Forneça um URL público exato, uma lista de URLs exatos, um PDF de página web ou capturas de página inteira ou consecutivas. Escolha Visual PDF para guardar o site como capturas ou Interactive PDF para texto selecionável e ligações clicáveis.",
    sections: [
      { heading: "1. Indique um ou mais URLs", body: "Envie um URL público, uma lista de URLs públicos exatos, um PDF existente de página web ou capturas completas ou consecutivas. Cada página web permanece num PDF separado." },
      { heading: "2. Escolha o tipo de PDF", body: "Escolha Visual PDF para um resultado baseado em imagens que privilegia o aspeto da página, ou Interactive PDF quando o texto selecionável e as ligações clicáveis são prioritários. Um modo aplica-se a toda a lista de URLs." },
      { heading: "3. Converta apenas as páginas fornecidas", body: "A aplicação GPT abre apenas os URLs públicos exatos indicados. Não rastreia domínios ou sitemaps, não descobre páginas, não segue ligações internas nem contorna autenticação, paywalls, CAPTCHA, restrições geográficas ou outros controlos de acesso. Para descobrir um site inteiro, use Web2File: Website 2 PDF." },
      { heading: "4. Processe PDFs e capturas", body: "As capturas carregadas podem ser reunidas de cima para baixo num Visual PDF. Os PDFs de páginas web são processados sem inventar conteúdo em falta; Interactive PDF privilegia texto, disposição, imagens e ligações verificadas existentes." },
      { heading: "5. Obtenha instruções adequadas e reveja o resultado", body: "Se a conversão direta estiver indisponível ou incompleta, a aplicação fornece passos específicos para a página, navegador ou exportação nativa. Reveja conteúdo em falta ou cortado, áreas vazias, legibilidade, ordem, disposição, ligações e fidelidade ao modo." },
    ],
    externalLinkKey: "page2pdfGpt",
    primaryLabel: "Abrir GPT Webpage 2 PDF",
    articleLinks: [
      { slug: "save-webpage-as-pdf", label: "Guardar uma página web como PDF" },
      { slug: "long-webpage-page-breaks", label: "Corrigir quebras em páginas web longas" },
    ],
    relatedRoutes: gptRoutes,
    workflowOverride: {
      detailsTitle: "Instruções de utilização",
      firstStageDescription: "Forneça à aplicação GPT um URL funcional.",
      firstStageLabel: "Envie os URLs",
    },
  },
  "web2pdf-gpt": {
    route: "web2pdf-gpt",
    eyebrow: "Aplicação GPT · páginas web acessíveis",
    title: "Converta páginas de um site em PDFs separados com Web 2 PDF",
    description:
      "Web 2 PDF encontra páginas acessíveis de um site, converte as páginas escolhidas e devolve um PDF separado para cada uma.",
    lead:
      "Forneça ao Web 2 PDF um endereço público. A aplicação pode encontrar páginas acessíveis, converter URLs escolhidos e devolver várias ligações de transferência, uma por página.",
    sections: [
      { heading: "1. Forneça o site", body: "Envie o URL público inicial. A aplicação encontra páginas acessíveis e mostra o limite escolhido antes da conversão." },
      { heading: "2. Reveja a lista de páginas", body: "Confirme quais as páginas acessíveis que pertencem ao pedido. Páginas com início de sessão, URLs bloqueados e domínios externos são excluídos." },
      { heading: "3. Transfira PDFs separados", body: "Cada página convertida é entregue como um PDF independente. Web 2 PDF não promete um documento combinado do site nem um conjunto de dados de scraping." },
    ],
    externalLinkKey: "web2pdfGpt",
    primaryLabel: "Abrir a aplicação GPT Web 2 PDF",
    articleLinks: [
      { slug: "multi-page-website-to-pdf", label: "Converter um site com várias páginas em PDF" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Tipos de sites que podem ser exportados" },
    ],
    relatedRoutes: gptRoutes,
  },
  "html2pdf-gpt": {
    route: "html2pdf-gpt",
    eyebrow: "Aplicação GPT · ficheiro HTML carregado",
    title: "Converta um ficheiro HTML carregado com HTML 2 PDF",
    description:
      "HTML 2 PDF aceita um ficheiro HTML carregado e devolve um PDF limpo dentro de limites visíveis de renderização.",
    lead:
      "Carregue um ficheiro HTML na aplicação GPT. HTML 2 PDF renderiza-o de forma isolada e devolve um PDF; este fluxo de ficheiro original está disponível apenas nesta aplicação.",
    sections: [
      { heading: "1. Carregue o ficheiro HTML", body: "Adicione o documento HTML que tem autorização para processar. Este fluxo começa com um ficheiro, não com o URL público de uma página web." },
      { heading: "2. Converta-o em PDF", body: "A aplicação devolve um PDF do documento carregado. Recursos externos, scripts, tipos de letra personalizados e funcionalidades do navegador podem variar." },
      { heading: "3. Trate o HTML como entrada não fiável", body: "A renderização segura exige isolar redes privadas, ficheiros locais e scripts não controlados. O resultado é uma conversão de documento, não uma execução web alojada." },
    ],
    externalLinkKey: "html2pdfGpt",
    primaryLabel: "Abrir a aplicação GPT HTML 2 PDF",
    articleLinks: [
      { slug: "html-to-pdf-safely", label: "Converter HTML em PDF com segurança" },
      { slug: "webpage-capture-vs-web-scraping", label: "Captura de página ou web scraping" },
    ],
    relatedRoutes: gptRoutes,
  },
  "one-page2powerpoint-gpt": {
    route: "one-page2powerpoint-gpt",
    eyebrow: "Aplicação GPT · um URL público",
    title: "Converta um URL em PPTX com One Page 2 PowerPoint",
    description:
      "One Page 2 PowerPoint é uma aplicação GPT especializada que converte um URL público e devolve uma apresentação PPTX dessa página.",
    lead:
      "Forneça à aplicação um URL HTTPS público. One Page 2 PowerPoint envia a página para conversão e devolve uma apresentação PPTX transferível.",
    sections: [
      { heading: "1. Envie um URL público", body: "Cole o endereço exato da página. A aplicação processa uma página por pedido e não explora o resto do site." },
      { heading: "2. Receba um PPTX", body: "A página é organizada numa apresentação e entregue como ficheiro PowerPoint. Reveja os limites dos diapositivos e as substituições visuais ou editáveis." },
      { heading: "3. Mantenha separadores privados no Chrome", body: "Uma aplicação GPT para URLs públicos não pode utilizar a sua sessão do navegador. Utilize a extensão Page 2 File quando a origem estiver aberta após iniciar sessão." },
    ],
    externalLinkKey: "onePage2PowerpointGpt",
    primaryLabel: "Abrir One Page 2 PowerPoint",
    articleLinks: [
      { slug: "webpage-to-powerpoint", label: "Converter uma página web em PowerPoint" },
      { slug: "sections-to-slides", label: "Converter secções de uma página em diapositivos" },
    ],
    relatedRoutes: gptRoutes,
  },
  "web2powerpoint-gpt": {
    route: "web2powerpoint-gpt",
    eyebrow: "Aplicação GPT · páginas web acessíveis",
    title: "Converta páginas de um site em PPTX com Web 2 PowerPoint",
    description:
      "Web 2 PowerPoint encontra páginas acessíveis, converte as escolhidas e devolve um PPTX separado para cada página.",
    lead:
      "Forneça ao Web 2 PowerPoint um endereço público. A aplicação encontra páginas acessíveis, converte URLs escolhidos e devolve várias ligações para apresentações.",
    sections: [
      { heading: "1. Forneça o site", body: "Envie o URL público inicial e defina claramente o limite do site. Domínios externos e páginas privadas não são incluídos silenciosamente." },
      { heading: "2. Confirme as páginas acessíveis", body: "Reveja a lista encontrada antes da conversão. Apenas as páginas escolhidas e acessíveis são enviadas ao Page 2 File." },
      { heading: "3. Transfira ficheiros PPTX separados", body: "Cada página convertida é entregue como uma apresentação independente. A aplicação não promete uma apresentação combinada de todo o site." },
    ],
    externalLinkKey: "web2powerpointGpt",
    primaryLabel: "Abrir Web 2 PowerPoint",
    articleLinks: [
      { slug: "website-to-powerpoint", label: "Converter um site em PowerPoint" },
      { slug: "screenshot-vs-editable-powerpoint", label: "Diapositivos capturados ou editáveis" },
    ],
    relatedRoutes: gptRoutes,
  },
  "export-ai-chat-to-pdf": {
    route: "export-ai-chat-to-pdf",
    eyebrow: "Exportação de conversas AI",
    title: "Exporte uma conversa a partir do separador ativo",
    description:
      "Exporte conversas compatíveis do ChatGPT, Claude, Gemini e Grok para PDF com a extensão Page 2 File, uma pré-visualização temporária e sem histórico.",
    lead:
      "Escolha a aparência original ou um documento de leitura simples. A extensão exporta a conversa diretamente do separador ativo do navegador.",
    sections: [
      { heading: "Interfaces de conversa compatíveis", body: "O Page 2 File é compatível com ChatGPT, Claude, Gemini e Grok, além de uma alternativa prudente para outras conversas no navegador.", points: ["ChatGPT", "Claude", "Gemini", "Grok"] },
      { heading: "Aparência original", body: "O agrupamento de mensagens, blocos de código, tabelas e ligações visíveis para fontes são preservados." },
      { heading: "Documento limpo", body: "O texto compatível adapta-se a um documento mais simples, preservando autoria e destinos das ligações." },
      { heading: "Produto independente", body: "O Page 2 File não está afiliado, aprovado nem é operado por qualquer plataforma AI compatível." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar a extensão",
    articleLinks: [
      { slug: "export-ai-chats-privately", label: "Exportar conversas AI de forma privada" },
      { slug: "website-types-to-pdf-or-powerpoint", label: "Tipos de sites que podem ser exportados" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-chatgpt-to-pdf": {
    route: "export-chatgpt-to-pdf",
    eyebrow: "Exportação do ChatGPT",
    title: "Exporte conversas longas do ChatGPT para PDF",
    description:
      "Exporte mensagens visíveis do ChatGPT, código, tabelas, ligações e conversas longas do separador ativo para um PDF revisto.",
    lead:
      "Capture a conversa visível no separador ativo, reveja as quebras de página e transfira o ficheiro sem criar uma conta Page 2 File.",
    sections: [
      { heading: "O que é preservado", body: "As mensagens, a ordem dos participantes, o código, as tabelas e as ligações visíveis são representados na pré-visualização." },
      { heading: "Dois estilos de leitura", body: "Mantenha o ritmo visual original ou escolha um documento mais simples para leitura e impressão." },
      { heading: "Limites específicos da plataforma", body: "Ramos recolhidos, mensagens não carregadas e conteúdo fora do DOM podem ter de ser abertos ou carregados antes da captura." },
      { heading: "Sem relação oficial", body: "O Page 2 File é uma ferramenta independente e não é aprovado nem operado pela OpenAI ou pelo ChatGPT." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para o ChatGPT",
    articleLinks: [
      { slug: "export-chatgpt-conversation-to-pdf", label: "Exportar uma conversa ChatGPT para PDF" },
      { slug: "export-ai-chats-privately", label: "Proteger dados da pré-visualização de conversas AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-claude-to-pdf": {
    route: "export-claude-to-pdf",
    eyebrow: "Exportação do Claude",
    title: "Guarde conversas Claude e artefactos visíveis",
    description:
      "Exporte conversas Claude, Markdown, código, citações e contexto visível de artefactos do separador ativo para um PDF revisto.",
    lead:
      "Após um clique explícito, a extensão lê a conversa ativa e cria uma pré-visualização temporária para rever respostas longas.",
    sections: [
      { heading: "As respostas longas mantêm a estrutura", body: "Títulos, listas, citações e código permanecem na respetiva ordem de leitura." },
      { heading: "Contexto de artefactos", body: "Os títulos visíveis e o conteúdo disponível dos artefactos podem ser representados sem alegar acesso oculto." },
      { heading: "Sem relação oficial", body: "O Page 2 File é uma ferramenta independente e não é aprovado pela Anthropic." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para o Claude",
    articleLinks: [
      { slug: "export-claude-chat-to-pdf", label: "Exportar uma conversa Claude para PDF" },
      { slug: "export-ai-chats-privately", label: "Proteger dados da pré-visualização de conversas AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-gemini-to-pdf": {
    route: "export-gemini-to-pdf",
    eyebrow: "Exportação do Gemini",
    title: "Transforme uma conversa Gemini num PDF legível",
    description:
      "Exporte mensagens visíveis do Gemini, cartões de fontes, código e citações do separador ativo para um PDF revisto com pré-visualização temporária.",
    lead:
      "Reveja como os cartões de fontes e as imagens visíveis aparecem antes de criar um documento limpo ou visualmente fiel.",
    sections: [
      { heading: "As fontes continuam úteis", body: "As citações e ligações visíveis permanecem clicáveis quando os respetivos destinos são seguros." },
      { heading: "As imagens seguem o DOM", body: "Apenas os conteúdos multimédia disponíveis na página ativa podem aparecer na pré-visualização temporária." },
      { heading: "Sem relação oficial", body: "O Page 2 File é independente e não é um produto da Google ou do Gemini." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para o Gemini",
    articleLinks: [
      { slug: "export-gemini-chat-to-pdf", label: "Exportar uma conversa Gemini para PDF" },
      { slug: "export-ai-chats-privately", label: "Proteger dados da pré-visualização de conversas AI" },
    ],
    relatedRoutes: chatRoutes,
  },
  "export-grok-to-pdf": {
    route: "export-grok-to-pdf",
    eyebrow: "Exportação do Grok",
    title: "Exporte conversas Grok com fontes visíveis",
    description:
      "Exporte conversas visíveis do Grok, ligações do X, publicações citadas e fontes do separador ativo para um PDF revisto.",
    lead:
      "Capture a conversa ativa, preserve o contexto visível das fontes e escolha uma pré-visualização visual ou um documento de leitura simples.",
    sections: [
      { heading: "Ordem de leitura que respeita a conversa", body: "As mensagens e o contexto das publicações citadas permanecem agrupados, em vez de se tornarem num fluxo de texto sem identificação." },
      { heading: "Ligações visíveis do X", body: "Os URLs das publicações e as fontes permanecem clicáveis quando passam a verificação de segurança." },
      { heading: "Sem relação oficial", body: "O Page 2 File é um produto independente e não é aprovado pela xAI ou pelo X." },
    ],
    externalLinkKey: "chromeExtension",
    primaryLabel: "Instalar para o Grok",
    articleLinks: [
      { slug: "export-other-ai-chats-to-pdf", label: "Exportar outras conversas AI para PDF" },
      { slug: "export-ai-chats-privately", label: "Proteger dados da pré-visualização de conversas AI" },
    ],
    relatedRoutes: chatRoutes,
  },
};
