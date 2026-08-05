import type { LandingContent } from "./landings";
import type { StaticRoute } from "@/shared/routes/routes";

export const spanishLegalLandingContent: Partial<
  Record<StaticRoute, LandingContent>
> = {
  privacy: {
    route: "privacy",
    eyebrow: "Privacidad y tratamiento de datos",
    title: "Política de privacidad",
    description:
      "Cómo Page 2 File trata contenido web, archivos temporales, cookies, datos analíticos y solicitudes de privacidad.",
    lead:
      "Esta Política explica qué trata Page 2 File cuando visita el sitio, usa la extensión de Chrome o convierte una página en PDF o PowerPoint.",
    sections: [
      { heading: "Operador y alcance", body: "{{entityName}}, con domicilio en {{address}}, opera Page 2 File y es responsable del tratamiento descrito. Esta política se aplica al sitio, la extensión y los servicios de conversión relacionados." },
      { heading: "Definiciones", body: "«Servicio» significa Page 2 File y sus funciones. «Contenido de conversión» incluye la URL, el contenido visible, las opciones y el PDF o PowerPoint generado. «Datos personales» es información que identifica o puede vincularse razonablemente con una persona." },
      { heading: "Información que tratamos", body: "Según el uso, podemos tratar datos técnicos de la solicitud, dirección IP, navegador y dispositivo, páginas visitadas, parámetros de campaña permitidos, URL pública o contenido visible en la pestaña activa, ajustes, identificadores temporales y archivos generados." },
      { heading: "Información que no solicitamos", body: "Page 2 File no exige una cuenta ni solicita tarjetas, direcciones de facturación o contraseñas del sitio de origen. La extensión usa la página ya abierta y no recibe la contraseña utilizada para acceder a ella." },
      { heading: "Cómo usamos la información", body: "Tratamos información para ofrecer vistas previas y archivos, evitar abusos, diagnosticar fallos, mantener la fiabilidad, comprender el uso agregado, responder solicitudes y cumplir la ley. No vendemos datos personales." },
      { heading: "Contenido de conversión y tratamiento temporal", body: "Una conversión por URL pública o una vista previa de la extensión requiere tratar temporalmente la página y las opciones. No ofrecemos historial asociado a una cuenta. Los datos y archivos son de corta duración y se eliminan al cerrar la vista previa o al vencer el plazo técnico." },
      { heading: "Analítica y atribución", body: "Cuando hay un ID válido, Google Analytics se carga automáticamente en páginas públicas y puede recibir datos de página, dispositivo, navegador, ubicación aproximada y campaña. Los valores UTM permitidos se normalizan en memoria; Page 2 File no los guarda en una cookie propia de atribución." },
      { heading: "Proveedores y divulgaciones", body: "Page 2 File usa {{processors}} para prestar, proteger y medir el Servicio. Pueden tratar datos técnicos solo cuando sea necesario y conforme a sus políticas. También podemos divulgar información cuando lo exija la ley, para proteger derechos o seguridad o en una transferencia empresarial lícita." },
      { heading: "Conservación y eliminación", body: "El contenido de conversión se conserva solo durante el flujo temporal y no como historial visible. Registros de seguridad, infraestructura, analítica y correspondencia pueden conservarse el tiempo razonablemente necesario para operaciones, obligaciones legales o resolver una solicitud." },
      { heading: "Seguridad", body: "Page 2 File usa rutas del mismo origen, controles de sesión anónima, comprobaciones Origin y CSRF, solicitudes firmadas, validación de URL, renderizado aislado y archivos temporales. Ninguna medida garantiza seguridad absoluta; no convierta material que no pueda divulgar." },
      { heading: "Tratamiento internacional", body: "Nuestros proveedores pueden tratar datos técnicos o analíticos fuera de su país. Cuando corresponde, usamos sus salvaguardas y mecanismos legales de transferencia. El operador está establecido en {{jurisdiction}}." },
      { heading: "Sus derechos de privacidad", body: "Según la ley aplicable, puede solicitar acceso, corrección, eliminación o limitación, u oponerse a determinados tratamientos. Como no hay cuentas ni archivo de conversiones, quizá necesitemos información para identificar un registro operativo relevante." },
      { heading: "Sitios de terceros", body: "Page 2 File puede abrir o convertir contenido de terceros y enlazar servicios externos. Su contenido, seguridad y privacidad dependen de esos terceros y se rigen por sus propios términos." },
      { heading: "Menores", body: "El Servicio no se dirige a menores de 13 años y no recopilamos deliberadamente sus datos. Un padre o tutor puede contactarnos para solicitar la eliminación." },
      { id: "cookies", heading: "Cookies", body: "Page 2 File usa las cookies breves p2f_session y p2f_csrf para mantener una sesión anónima y proteger solicitudes. Usan SameSite Strict y caducan tras una hora. Google Analytics puede establecer cookies analíticas cuando está configurado. No guardamos contenido de conversión ni perfiles directamente identificables en ellas." },
      { heading: "Bloquear y eliminar cookies", body: "Puede bloquear o eliminar cookies en el navegador. Bloquear las cookies de sesión o CSRF puede impedir conversiones. Bloquear Google Analytics limita la medición, pero no la carga de páginas públicas. Use los controles del navegador para eliminar cookies." },
      { heading: "Cambios en esta política", body: "Podemos actualizar esta política cuando cambien el Servicio, los proveedores o la ley. Publicaremos la versión actualizada con una nueva fecha; los cambios importantes se aplican desde la fecha indicada." },
      { heading: "Contacto", body: "Envíe preguntas y solicitudes de privacidad a {{contactEmail}}. El operador es {{entityName}}, {{address}}, bajo las leyes de {{jurisdiction}}." },
    ],
    legal: true,
  },
  terms: {
    route: "terms",
    eyebrow: "Acuerdo del servicio",
    title: "Condiciones de servicio",
    description:
      "Condiciones para usar Page 2 File, incluidas fuentes permitidas, límites, responsabilidades y disponibilidad.",
    lead:
      "Estas Condiciones rigen el uso del sitio Page 2 File, la extensión de Chrome y los servicios de conversión a PDF o PowerPoint.",
    sections: [
      { heading: "Acuerdo y operador", body: "Al acceder o usar Page 2 File acepta estas Condiciones. El Servicio lo opera {{entityName}}, con domicilio en {{address}}. Si actúa por una organización, confirma que puede aceptar estas Condiciones en su nombre." },
      { heading: "Definiciones", body: "«Servicio» incluye el sitio, la extensión y las funciones de conversión. «Contenido de origen» es una página, contenido de la pestaña activa u otro material enviado. «Resultado» es un PDF, PowerPoint, vista previa u otro archivo generado." },
      { heading: "Licencia limitada", body: "Le concedemos un derecho revocable, no exclusivo, intransferible y limitado para usar el Servicio conforme a estas Condiciones. No se transfiere propiedad sobre software, marca u otro material protegido." },
      { heading: "Fuentes permitidas y su responsabilidad", body: "Solo puede convertir contenido al que tenga derecho legal de acceso, tratamiento, reproducción y descarga. Responde de las URL, el contenido, los ajustes y del uso o distribución de cada Resultado." },
      { heading: "Uso prohibido", body: "No use el Servicio para infringir la ley o derechos, eludir pagos o controles, distribuir malware, enviar contenido ilícito, sondear redes privadas, interferir con la seguridad, sobrecargar sistemas, automatizar solicitudes excesivas, aplicar ingeniería inversa a partes protegidas o tergiversar archivos." },
      { heading: "Contenido de origen y derechos de terceros", body: "Conserva sus derechos sobre el contenido. Page 2 File no concede derechos sobre material ajeno. Declara que el tratamiento y el Resultado no vulneran derechos de autor, privacidad, confidencialidad, contratos u otros derechos." },
      { heading: "Tratamiento temporal", body: "El Servicio puede tratar temporalmente contenido, ajustes y archivos para ofrecer vista previa y descarga. No hay historial de conversión asociado a una cuenta. La Política de privacidad explica los datos, cookies y proveedores." },
      { heading: "Límites del resultado y la fidelidad", body: "Scripts, animaciones, vídeo, medios protegidos, fuentes, canvas, datos dinámicos y diseños complejos pueden no reproducirse exactamente. Accurate copy prioriza la apariencia; Editable document reconstruye texto, imágenes y enlaces compatibles. Debe revisar la vista previa y el Resultado final." },
      { heading: "Servicios y enlaces de terceros", body: "El Servicio puede convertir o enlazar sitios de terceros. Page 2 File no responde de su disponibilidad, contenido, exactitud, legalidad, seguridad o privacidad. Su uso se rige por los términos del proveedor." },
      { heading: "Privacidad y cookies", body: "Nuestra Política de privacidad explica el tratamiento temporal, la analítica, los proveedores y las cookies. Al usar el Servicio reconoce el tratamiento necesario para la conversión solicitada." },
      { heading: "Propiedad intelectual de Page 2 File", body: "El Servicio, software, diseño, texto, logos y otros materiales pertenecen o se licencian a {{entityName}} y están protegidos. No puede quitar avisos ni copiar, vender, sublicenciar o explotar comercialmente el Servicio salvo permiso legal expreso." },
      { heading: "Comentarios", body: "Si aporta sugerencias voluntarias, nos concede un derecho mundial, perpetuo y gratuito para usarlas al mejorar o desarrollar el Servicio, sin obligación de compensación. Esto no transfiere su contenido de origen." },
      { heading: "Cambios, actualizaciones y disponibilidad", body: "Podemos actualizar, limitar, suspender o retirar el Servicio o funciones y aplicar límites por seguridad, fiabilidad o uso justo. Cuando sea práctico, reflejaremos cambios importantes en el sitio." },
      { heading: "Suspensión y finalización", body: "Puede dejar de usar el Servicio en cualquier momento. Podemos bloquear acceso si creemos razonablemente que se incumplen estas Condiciones, el uso amenaza sistemas o la ley exige actuar. Las disposiciones destinadas a sobrevivir siguen vigentes." },
      { heading: "Reclamaciones de derechos", body: "Si cree que material disponible mediante Page 2 File infringe sus derechos, contacte con {{contactEmail}} e identifique la obra, el material o URL, sus datos y el motivo de la reclamación." },
      { heading: "Sin garantías", body: "En la medida permitida, el Servicio y cada Resultado se ofrecen «tal cual» y «según disponibilidad». No garantizamos funcionamiento ininterrumpido, conversión sin errores, fidelidad completa, disponibilidad de terceros, idoneidad ni que el Resultado cumpla todas sus necesidades." },
      { heading: "Limitación de responsabilidad", body: "En la medida permitida, {{entityName}} no responde de pérdidas indirectas, incidentales, especiales, consecuentes o punitivas, ni de beneficios, datos, negocio, privacidad o costes por usar o no poder usar el Servicio. Los derechos legalmente irrenunciables no se ven afectados." },
      { heading: "Indemnización", body: "En la medida permitida, acepta defender e indemnizar a {{entityName}} frente a reclamaciones de terceros derivadas del contenido enviado, el uso o distribución del Resultado, el incumplimiento de estas Condiciones o la vulneración de derechos." },
      { heading: "Divisibilidad, renuncia y acuerdo completo", body: "Si una disposición es inválida, las restantes siguen vigentes y se interpretará la afectada lo más cerca posible de su fin. No exigir una disposición no es renunciar a ella. Estas Condiciones y la Política de privacidad forman el acuerdo." },
      { heading: "Ley aplicable y disputas", body: "Estas Condiciones se rigen por las leyes de {{jurisdiction}}. Antes de un procedimiento, usted y {{entityName}} intentarán resolver la disputa de buena fe mediante notificación escrita. Las disputas no resueltas podrán someterse a los tribunales competentes de {{jurisdiction}}, salvo norma obligatoria." },
      { heading: "Cambios en estas condiciones", body: "Podemos revisar estas Condiciones por cambios del Servicio, proveedores o ley. Publicaremos la revisión con una nueva fecha. Continuar usando el Servicio después de su vigencia implica aceptación; de lo contrario, debe dejar de usarlo." },
      { heading: "Contacto", body: "Envíe preguntas o avisos a {{contactEmail}} o a {{entityName}}, {{address}}." },
    ],
    legal: true,
  },
};
