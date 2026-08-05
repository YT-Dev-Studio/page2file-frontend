import type { HomeCopy } from "./home-copy";

export const homeCopyPt: HomeCopy = {
  title: "Exporte qualquer página web para PDF/PPTX",
  lead:
    "Cole a ligação de uma página pública. O Page 2 File divide-a cuidadosamente em páginas PDF ou diapositivos PowerPoint, com pré-visualização antes da transferência.",
  form: {
    formatLabel: "Formato",
    meta: "Sem registo · Pré-visualização · Ficheiros temporários",
    pdfModeLabel: "Modo PDF",
    pdfModes: [
      { label: "Capturas de página", value: "visual" },
      { label: "PDF editável", value: "editable" },
    ],
    powerpointModeLabel: "Modo PowerPoint",
    powerpointModes: [
      { label: "Capturas de diapositivos", value: "visual" },
      { label: "Apresentação editável", value: "editable" },
    ],
    submitPdf: "Criar PDF",
    submitPowerpoint: "Criar PowerPoint",
    urlHelper:
      "Apenas páginas HTTPS públicas. Utilize a extensão para separadores com sessão iniciada.",
    urlLabel: "Ligação da página web",
    urlPlaceholder: "https://example.com/artigo",
  },
  converterFlow: {
    backAction: "Voltar à configuração",
    processingBody:
      "Estamos a analisar a página e a preparar o formato de ficheiro escolhido.",
    processingTitle: "Estamos a preparar o seu ficheiro",
    readyBody: "Clique para transferir o ficheiro",
    readyTitle: "O seu ficheiro está pronto",
  },
  closingNote:
    "O serviço funciona com artigos, documentação, páginas de destino e relatórios públicos. Para páginas privadas ou conversas AI, a extensão utiliza o separador ativo do navegador e cria uma pré-visualização temporária.",
  preview: {
    accessibleLabel: "Exemplo de resultado da conversão",
    divider: "A QUEBRA DE PÁGINA MANTÉM A IMAGEM INTEIRA",
    imageNote: "A imagem permanece inteira",
    pdfMeta: "12 páginas · pronto",
    powerpointMeta: "12 diapositivos · pronto",
    sourceTitle: "Um artigo longo com uma imagem",
    title: "Página → ficheiro preciso",
  },
  promo: {
    body:
      "A extensão funciona de duas formas: por URL ou com o separador ativo. Os dados da página exportada são eliminados do servidor depois de fechar a pré-visualização.",
    eyebrow: "EXTENSÃO DO CHROME",
    title:
      "Exporte o separador atual, mesmo quando é necessário iniciar sessão.",
  },
  features: {
    eyebrow: "FUNCIONALIDADES",
    title: "Opções flexíveis para o conteúdo exportado",
    body:
      "Exporte páginas web no formato adequado: como capturas de página ou preservando multimédia, ligações e estrutura.",
    items: [
      {
        title: "Exporte conversas AI e de mensagens",
        body:
          "Exporte conversas longas do ChatGPT, Claude, Gemini, Grok, DeepSeek e outros serviços para um PDF claro e fácil de ler.",
      },
      {
        title: "Os 2 formatos mais práticos",
        list: {
          items: [
            "Guarde capturas de página como PDF/PPTX.",
            "Crie ficheiros PDF/PPTX editáveis que preservam multimédia, ligações e estrutura.",
          ],
          style: "unordered",
        },
      },
      {
        title: "Controle o conteúdo do ficheiro",
        body:
          "Combine multimédia, ligações e estilos preservados nos ficheiros exportados. Na pré-visualização também pode remover elementos desnecessários da página.",
      },
      {
        title: "2 modos de trabalho",
        body:
          "Exporte o separador atual de qualquer site ou introduza o URL de uma página pública.",
      },
      {
        title: "Problemas de outros serviços resolvidos",
        body:
          "Obtenha um PDF ou PPTX com imagens completas e sem espaços excessivos entre o conteúdo.",
      },
      {
        title: "Seguro e sem registo",
        body:
          "Não precisa de criar uma conta. Instale a extensão e guarde a página escolhida.",
      },
    ],
  },
  howItWorks: {
    action: "Abrir o guia completo",
    body:
      "A forma mais rápida é a extensão: utiliza o separador atual e não exige copiar uma ligação.",
    eyebrow: "COMO COMEÇAR",
    extensionAction: "Instalar a extensão",
    installTime: "Em 30 segundos",
    items: [
      {
        title: "Instale a extensão",
        body:
          "Adicione o Page 2 File ao Chrome. Não precisa de uma conta Page 2 File.",
      },
      {
        title: "Abra a página",
        list: {
          items: [
            "Aceda ao separador pretendido.",
            "Abra o Page 2 File.",
            "Clique em Preview.",
          ],
          style: "ordered",
        },
      },
      {
        title: "Reveja e transfira",
        body:
          "Reveja o resultado, remova secções se necessário e transfira o ficheiro concluído.",
      },
    ],
    note:
      "Com exemplos de uma ligação pública, um separador privado e uma conversa AI",
    stepLabels: ["Passo 1", "Passo 2", "Passo 3"],
    title: "Três passos até ao ficheiro concluído",
  },
  blog: {
    action: "Ler artigo",
    allAction: "Todos os artigos",
    body:
      "Guias práticos sobre fidelidade, edição, ligações, quebras de página e tratamento seguro de conversas AI.",
    eyebrow: "BLOG",
    items: [
      { slug: "why-print-to-pdf-breaks" },
      { slug: "visual-vs-editable" },
      { slug: "preserve-clickable-links" },
      { slug: "long-webpage-page-breaks" },
    ],
    title: "Guias para exportar diferentes tipos de sites",
  },
  faq: {
    body:
      "Respostas claras sobre captura de páginas, modos de saída, separadores privados, pré-visualizações temporárias e exportação de conversas.",
    eyebrow: "PERGUNTAS FREQUENTES",
    items: [
      {
        title: "Como converto uma página web em PDF ou PowerPoint?",
        body:
          "Para uma página pública, cole o URL HTTPS, escolha PDF ou PowerPoint e capturas de página ou um modo editável, e reveja as secções antes de criar o ficheiro. Para uma página com sessão iniciada, utilize a extensão Page 2 File para Chrome com o separador ativo.",
      },
      {
        title: "O Page 2 File consegue preservar o design da página?",
        body:
          "As capturas de página foram concebidas para preservar a aparência renderizada, incluindo o layout, as cores, as imagens e os gráficos visíveis. Funcionalidades do navegador como animações, vídeo e controlos interativos são representadas de forma estática.",
      },
      {
        title: "O texto e as ligações permanecem editáveis ou acessíveis?",
        body:
          "O modo editável preserva o texto compatível como conteúdo do documento e os destinos seguros das ligações. Widgets complexos, gráficos canvas e elementos não suportados podem ser representados como imagens. As capturas de página dão prioridade à aparência e não transformam cada píxel num objeto editável.",
      },
      {
        title: "Consegue capturar completamente páginas longas e dinâmicas?",
        body:
          "A extensão utiliza o separador ativo renderizado, incluindo páginas longas depois de carregar as secções necessárias. Abra primeiro o conteúdo recolhido e percorra a página até ao fim. Conteúdo oculto ou não carregado não pode ser exportado.",
      },
      {
        title: "Posso converter páginas depois de iniciar sessão?",
        body:
          "Sim, com a extensão do Chrome depois de abrir a página normalmente. A extensão utiliza o separador ativo e não pede que envie a palavra-passe da conta para o formulário de URL público. Não contorna controlos de acesso.",
      },
      {
        title: "Posso converter uma página ou um site completo?",
        body: [
          { kind: "text", text: "Os conversores de páginas web, além de " },
          { kind: "link", label: "One Page 2 PDF", route: "page2pdf-gpt" },
          { kind: "text", text: " e " },
          {
            kind: "link",
            label: "One Page 2 PowerPoint",
            route: "one-page2powerpoint-gpt",
          },
          {
            kind: "text",
            text: " processam um URL. Para várias páginas públicas acessíveis, utilize ",
          },
          { kind: "link", label: "Web 2 PDF", route: "web2pdf-gpt" },
          { kind: "text", text: " ou " },
          {
            kind: "link",
            label: "Web 2 PowerPoint",
            route: "web2powerpoint-gpt",
          },
          {
            kind: "text",
            text: ": receberá um PDF ou PPTX separado para cada página escolhida, e não um ficheiro combinado.",
          },
        ],
      },
      {
        title: "Qual é a diferença entre capturas de página e modos editáveis?",
        body:
          "As capturas de página dão prioridade à fidelidade da página renderizada. O modo editável dá prioridade a texto selecionável, imagens compatíveis, ligações seguras e estruturas reutilizáveis. Reveja gráficos complexos, tipografia e layouts, pois ambos os modos podem exigir substituições.",
      },
      {
        title: "O que acontece aos dados da pré-visualização quando fecho o separador?",
        body:
          "Os dados da pré-visualização são temporários e são eliminados quando fecha o separador. O Page 2 File não possui uma base de dados de histórico de conversões nem oferece um arquivo de pré-visualizações anteriores.",
      },
      {
        title: "Preciso de uma conta?",
        body:
          "Não precisa de uma conta Page 2 File para o fluxo de URL público nem para a pré-visualização da extensão. Para uma página privada a que tem acesso, poderá precisar de manter a sessão iniciada no site de origem.",
      },
      {
        title: "Posso exportar conversas AI e de mensagens?",
        body:
          "A extensão pode exportar uma conversa renderizada num separador do Chrome, incluindo conversas AI compatíveis e mensagens web. Carregue primeiro o intervalo de mensagens necessário. Aplicações exclusivamente nativas e interfaces fora do navegador, como o Signal Desktop, não são capturadas.",
      },
    ],
    title: "O que deve saber",
  },
  finalCta: {
    body:
      "Cole aqui uma ligação pública ou instale a extensão para o separador atual.",
    eyebrow: "QUER EXPERIMENTAR COM A SUA PÁGINA?",
    title: "Obtenha um PDF ou PowerPoint antes de abrir um editor",
  },
};
