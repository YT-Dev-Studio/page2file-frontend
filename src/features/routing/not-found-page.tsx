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
  guide: string;
};

const actions: Record<Locale, NotFoundActions> = {
  en: {
    home: "Return home",
    guide: "Open the extension guide",
  },
  ru: {
    home: "Вернуться на главную",
    guide: "Открыть инструкцию по расширению",
  },
  de: {
    home: "Zur Startseite",
    guide: "Anleitung zur Erweiterung öffnen",
  },
  fr: {
    home: "Retour à l’accueil",
    guide: "Ouvrir le guide de l’extension",
  },
  es: {
    home: "Volver al inicio",
    guide: "Abrir la guía de la extensión",
  },
  nl: {
    home: "Terug naar de startpagina",
    guide: "Handleiding voor de extensie openen",
  },
  pt: {
    home: "Voltar ao início",
    guide: "Abrir o guia da extensão",
  },
  it: {
    home: "Torna alla home",
    guide: "Apri la guida dell’estensione",
  },
  pl: {
    home: "Wróć na stronę główną",
    guide: "Otwórz instrukcję rozszerzenia",
  },
  cs: {
    home: "Zpět na domovskou stránku",
    guide: "Otevřít návod k rozšíření",
  },
  sv: {
    home: "Tillbaka till startsidan",
    guide: "Öppna guiden till tillägget",
  },
  no: {
    home: "Tilbake til startsiden",
    guide: "Åpne veiledningen for utvidelsen",
  },
  da: {
    home: "Tilbage til startsiden",
    guide: "Åbn vejledningen til udvidelsen",
  },
  fi: {
    home: "Takaisin etusivulle",
    guide: "Avaa laajennuksen käyttöohje",
  },
  ro: {
    home: "Înapoi la pagina principală",
    guide: "Deschide ghidul extensiei",
  },
  hu: {
    home: "Vissza a kezdőlapra",
    guide: "Bővítmény útmutatójának megnyitása",
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
              href={`/${locale}/chrome-extension/how-to-use`}
            >
              {actionCopy.guide}
            </Link>
          </div>
        </PublicHero>
      </Container>
    </PublicPage>
  );
};
