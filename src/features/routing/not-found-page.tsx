"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  isLocale,
  type Locale,
} from "@/shared/i18n/locales";
import { getSeoCopy } from "@/shared/seo/seo-copy";
import { PublicHero, PublicPage } from "@/shared/ui/public-page";
import { Container } from "@/shared/ui/site-shell";
import uiStyles from "@/shared/ui/ui.module.css";
import styles from "./not-found-page.module.css";

type NotFoundActions = {
  home: string;
  converter: string;
};

const actions: Record<Locale, NotFoundActions> = {
  en: {
    home: "Return home",
    converter: "Open the PDF converter",
  },
  ru: {
    home: "Вернуться на главную",
    converter: "Открыть конвертер PDF",
  },
  de: {
    home: "Zur Startseite",
    converter: "PDF-Konverter öffnen",
  },
  fr: {
    home: "Retour à l’accueil",
    converter: "Ouvrir le convertisseur PDF",
  },
  es: {
    home: "Volver al inicio",
    converter: "Abrir el convertidor PDF",
  },
  nl: {
    home: "Terug naar de startpagina",
    converter: "PDF-converter openen",
  },
  pt: {
    home: "Voltar ao início",
    converter: "Abrir o conversor PDF",
  },
  it: {
    home: "Torna alla home",
    converter: "Apri il convertitore PDF",
  },
  pl: {
    home: "Wróć na stronę główną",
    converter: "Otwórz konwerter PDF",
  },
  cs: {
    home: "Zpět na domovskou stránku",
    converter: "Otevřít konvertor PDF",
  },
  sv: {
    home: "Tillbaka till startsidan",
    converter: "Öppna PDF-konverteraren",
  },
  no: {
    home: "Tilbake til startsiden",
    converter: "Åpne PDF-konvertereren",
  },
  da: {
    home: "Tilbage til startsiden",
    converter: "Åbn PDF-konverteren",
  },
  fi: {
    home: "Takaisin etusivulle",
    converter: "Avaa PDF-muunnin",
  },
  ro: {
    home: "Înapoi la pagina principală",
    converter: "Deschide convertorul PDF",
  },
  hu: {
    home: "Vissza a kezdőlapra",
    converter: "PDF-konverter megnyitása",
  },
};

export const NotFoundPage = (): ReactNode => {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0] ?? "en";
  const locale = isLocale(firstSegment) ? firstSegment : "en";
  const copy = getSeoCopy(locale, "notFound");
  const actionCopy = actions[locale];
  return (
    <PublicPage className={styles.page}>
      <Container>
        <PublicHero eyebrow="404" lead={copy.description} title={copy.title}>
          <div className={styles.actions}>
            <Link className={uiStyles.button} href={`/${locale}`}>
              {actionCopy.home}
            </Link>
            <Link
              className={uiStyles.secondaryButton}
              href={`/${locale}/convert-webpage-to-pdf`}
            >
              {actionCopy.converter}
            </Link>
          </div>
        </PublicHero>
      </Container>
    </PublicPage>
  );
};
