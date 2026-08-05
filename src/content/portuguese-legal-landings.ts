import type { LandingContent } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

export const portugueseLegalLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  privacy: {
    route: "privacy",
    eyebrow: "Privacidade e tratamento de dados",
    title: "Política de privacidade",
    description:
      "Como o Page 2 File trata conteúdo web, ficheiros temporários, cookies, dados analíticos e pedidos de privacidade.",
    lead:
      "Esta Política explica que dados o Page 2 File trata quando visita o site, utiliza a extensão do Chrome ou converte uma página web em PDF ou PowerPoint.",
    sections: [
      { heading: "Operador e âmbito", body: "{{entityName}}, com sede em {{address}}, opera o Page 2 File e é responsável pelo tratamento descrito. Esta política aplica-se ao site, à extensão e aos serviços de conversão relacionados." },
      { heading: "Definições", body: "«Serviço» significa o Page 2 File e as suas funções. «Conteúdo de conversão» inclui o URL, conteúdo visível, opções e o PDF ou PowerPoint gerado. «Dados pessoais» são informações que identificam ou podem ser razoavelmente associadas a uma pessoa." },
      { heading: "Informações que tratamos", body: "Consoante a utilização, podemos tratar dados técnicos do pedido, endereço IP, navegador e dispositivo, páginas visitadas, parâmetros de campanha permitidos, URL público ou conteúdo visível no separador ativo, definições, identificadores temporários e ficheiros gerados." },
      { heading: "Informações que não pedimos", body: "O Page 2 File não exige conta nem pede cartões, moradas de faturação ou palavras-passe do site de origem. A extensão utiliza a página já aberta e não recebe a palavra-passe usada para lhe aceder." },
      { heading: "Como utilizamos as informações", body: "Tratamos informações para fornecer pré-visualizações e ficheiros, evitar abusos, diagnosticar falhas, manter a fiabilidade, compreender a utilização agregada, responder a pedidos e cumprir a lei. Não vendemos dados pessoais." },
      { heading: "Conteúdo de conversão e tratamento temporário", body: "Uma conversão por URL público ou uma pré-visualização da extensão exige tratar temporariamente a página e as opções. Não oferecemos histórico associado a uma conta. Os dados e ficheiros são de curta duração e são eliminados ao fechar a pré-visualização ou ao expirar o prazo técnico." },
      { heading: "Analítica e atribuição", body: "Quando existe um ID válido, o Google Analytics é carregado automaticamente em páginas públicas e pode receber dados de página, dispositivo, navegador, localização aproximada e campanha. Os valores UTM permitidos são normalizados em memória; o Page 2 File não os guarda num cookie próprio de atribuição." },
      { heading: "Prestadores e divulgações", body: "O Page 2 File utiliza {{processors}} para fornecer, proteger e medir o Serviço. Estes podem tratar dados técnicos apenas quando necessário e segundo as suas políticas. Também podemos divulgar informações quando exigido por lei, para proteger direitos ou segurança ou numa transferência empresarial lícita." },
      { heading: "Conservação e eliminação", body: "O conteúdo de conversão é conservado apenas durante o fluxo temporário e não como histórico visível. Registos de segurança, infraestrutura, analítica e correspondência podem ser conservados durante o período razoavelmente necessário para operações, obrigações legais ou resolução de um pedido." },
      { heading: "Segurança", body: "O Page 2 File utiliza rotas da mesma origem, controlos de sessão anónima, verificações Origin e CSRF, pedidos assinados, validação de URL, renderização isolada e ficheiros temporários. Nenhuma medida garante segurança absoluta; não converta material que não possa divulgar." },
      { heading: "Tratamento internacional", body: "Os nossos prestadores podem tratar dados técnicos ou analíticos fora do seu país. Quando aplicável, utilizamos as suas salvaguardas e mecanismos legais de transferência. O operador está estabelecido em {{jurisdiction}}." },
      { heading: "Os seus direitos de privacidade", body: "Consoante a lei aplicável, pode pedir acesso, correção, eliminação ou limitação, ou opor-se a certos tratamentos. Como não existem contas nem arquivo de conversões, poderemos precisar de informações para identificar um registo operacional relevante." },
      { heading: "Sites de terceiros", body: "O Page 2 File pode abrir ou converter conteúdo de terceiros e ligar a serviços externos. O conteúdo, a segurança e a privacidade dependem desses terceiros e regem-se pelos seus próprios termos." },
      { heading: "Crianças", body: "O Serviço não se destina a menores de 13 anos e não recolhemos deliberadamente os seus dados. Um progenitor ou tutor pode contactar-nos para pedir a eliminação." },
      { id: "cookies", heading: "Cookies", body: "O Page 2 File utiliza os cookies breves p2f_session e p2f_csrf para manter uma sessão anónima e proteger pedidos. Utilizam SameSite Strict e expiram após uma hora. O Google Analytics pode definir cookies analíticos quando configurado. Não guardamos conteúdo de conversão nem perfis diretamente identificáveis nesses cookies." },
      { heading: "Bloquear e eliminar cookies", body: "Pode bloquear ou eliminar cookies nas definições do navegador. Bloquear os cookies de sessão ou CSRF pode impedir conversões. Bloquear o Google Analytics limita a medição, mas não o carregamento das páginas públicas. Utilize os controlos do navegador para eliminar cookies." },
      { heading: "Alterações a esta política", body: "Podemos atualizar esta política quando o Serviço, os prestadores ou a lei mudarem. Publicaremos a versão atualizada com uma nova data; as alterações importantes aplicam-se a partir da data indicada." },
      { heading: "Contacto", body: "Envie perguntas e pedidos de privacidade para {{contactEmail}}. O operador é {{entityName}}, {{address}}, ao abrigo das leis de {{jurisdiction}}." },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Acordo do serviço",
    title: "Termos de utilização",
    description:
      "Termos para utilizar o Page 2 File, incluindo origens permitidas, limites, responsabilidades e disponibilidade.",
    lead:
      "Estes Termos regem a utilização do site Page 2 File, da extensão do Chrome e dos serviços de conversão para PDF ou PowerPoint.",
    sections: [
      { heading: "Acordo e operador", body: "Ao aceder ou utilizar o Page 2 File, aceita estes Termos. O Serviço é operado por {{entityName}}, com sede em {{address}}. Se agir por uma organização, confirma que pode aceitar estes Termos em nome dela." },
      { heading: "Definições", body: "«Serviço» inclui o site, a extensão e as funções de conversão. «Conteúdo de origem» é uma página, conteúdo do separador ativo ou outro material enviado. «Resultado» é um PDF, PowerPoint, pré-visualização ou outro ficheiro gerado." },
      { heading: "Licença limitada", body: "Concedemos-lhe um direito revogável, não exclusivo, intransmissível e limitado de utilizar o Serviço segundo estes Termos. Não é transferida a propriedade do software, marca ou outro material protegido." },
      { heading: "Origens permitidas e sua responsabilidade", body: "Só pode converter conteúdo ao qual tenha direito legal de acesso, tratamento, reprodução e transferência. É responsável pelos URLs, conteúdo, definições e pela utilização ou distribuição de cada Resultado." },
      { heading: "Utilização proibida", body: "Não utilize o Serviço para violar a lei ou direitos, contornar pagamentos ou controlos, distribuir malware, enviar conteúdo ilícito, sondar redes privadas, interferir com a segurança, sobrecarregar sistemas, automatizar pedidos excessivos, fazer engenharia inversa de partes protegidas ou deturpar ficheiros." },
      { heading: "Conteúdo de origem e direitos de terceiros", body: "Mantém os seus direitos sobre o conteúdo. O Page 2 File não concede direitos sobre material alheio. Declara que o tratamento e o Resultado não violam direitos de autor, privacidade, confidencialidade, contratos ou outros direitos." },
      { heading: "Tratamento temporário", body: "O Serviço pode tratar temporariamente conteúdo, definições e ficheiros para fornecer pré-visualização e transferência. Não existe histórico associado a uma conta. A Política de privacidade explica os dados, cookies e prestadores." },
      { heading: "Limites do resultado e da fidelidade", body: "Scripts, animações, vídeo, multimédia protegida, tipos de letra, canvas, dados dinâmicos e layouts complexos podem não ser reproduzidos exatamente. Accurate copy dá prioridade à aparência; Editable document reconstrói texto, imagens e ligações compatíveis. Deve rever a pré-visualização e o Resultado final." },
      { heading: "Serviços e ligações de terceiros", body: "O Serviço pode converter ou ligar a sites de terceiros. O Page 2 File não é responsável pela disponibilidade, conteúdo, exatidão, legalidade, segurança ou privacidade. A sua utilização rege-se pelos termos do prestador." },
      { heading: "Privacidade e cookies", body: "A nossa Política de privacidade explica o tratamento temporário, a analítica, os prestadores e os cookies. Ao utilizar o Serviço, reconhece o tratamento necessário para a conversão pedida." },
      { heading: "Propriedade intelectual do Page 2 File", body: "O Serviço, software, design, texto, logótipos e outros materiais pertencem ou são licenciados a {{entityName}} e estão protegidos. Não pode remover avisos nem copiar, vender, sublicenciar ou explorar comercialmente o Serviço, salvo autorização legal expressa." },
      { heading: "Comentários", body: "Se fornecer sugestões voluntárias, concede-nos um direito mundial, perpétuo e gratuito para as utilizar na melhoria ou desenvolvimento do Serviço, sem obrigação de compensação. Isto não transfere o seu conteúdo de origem." },
      { heading: "Alterações, atualizações e disponibilidade", body: "Podemos atualizar, limitar, suspender ou terminar o Serviço ou funções e aplicar limites por segurança, fiabilidade ou utilização justa. Quando possível, refletiremos alterações importantes no site." },
      { heading: "Suspensão e cessação", body: "Pode deixar de utilizar o Serviço a qualquer momento. Podemos bloquear o acesso se acreditarmos razoavelmente que estes Termos foram violados, a utilização ameaça sistemas ou a lei exige ação. As disposições destinadas a sobreviver mantêm-se." },
      { heading: "Reclamações de direitos", body: "Se considerar que material disponível através do Page 2 File viola os seus direitos, contacte {{contactEmail}} e identifique a obra, o material ou URL, os seus dados e o motivo da reclamação." },
      { heading: "Sem garantias", body: "Na medida permitida, o Serviço e cada Resultado são fornecidos «tal como estão» e «conforme disponíveis». Não garantimos funcionamento ininterrupto, conversão sem erros, fidelidade completa, disponibilidade de terceiros, adequação nem que o Resultado satisfaça todas as necessidades." },
      { heading: "Limitação de responsabilidade", body: "Na medida permitida, {{entityName}} não responde por perdas indiretas, incidentais, especiais, consequenciais ou punitivas, nem por lucros, dados, negócio, privacidade ou custos decorrentes da utilização ou impossibilidade de utilização. Direitos legalmente irrenunciáveis não são afetados." },
      { heading: "Indemnização", body: "Na medida permitida, aceita defender e indemnizar {{entityName}} contra reclamações de terceiros resultantes do conteúdo enviado, da utilização ou distribuição do Resultado, da violação destes Termos ou de direitos." },
      { heading: "Separabilidade, renúncia e acordo integral", body: "Se uma disposição for inválida, as restantes mantêm-se e a afetada será interpretada tão próximo quanto possível do seu objetivo. Não exigir uma disposição não é renunciar a ela. Estes Termos e a Política de privacidade formam o acordo." },
      { heading: "Lei aplicável e litígios", body: "Estes Termos regem-se pelas leis de {{jurisdiction}}. Antes de um processo, o utilizador e {{entityName}} tentarão resolver o litígio de boa-fé por notificação escrita. Litígios não resolvidos podem ser submetidos aos tribunais competentes de {{jurisdiction}}, salvo norma obrigatória." },
      { heading: "Alterações a estes termos", body: "Podemos rever estes Termos devido a alterações do Serviço, prestadores ou lei. Publicaremos a revisão com uma nova data. Continuar a utilizar o Serviço depois da entrada em vigor implica aceitação; caso contrário, deve deixar de o utilizar." },
      { heading: "Contacto", body: "Envie perguntas ou notificações para {{contactEmail}} ou para {{entityName}}, {{address}}." },
    ],
    legal: true,
  },
};
