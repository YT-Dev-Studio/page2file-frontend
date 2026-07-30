"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ChangeEvent, ReactNode } from "react";
import { localeRegistry, replaceLocale, type Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import styles from "./ui.module.css";

export const LocaleSwitcher = ({ locale }: { locale: Locale }): ReactNode => {
  const pathname = usePathname();
  const router = useRouter();
  const messages = getMessages(locale);

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = event.target.value as Locale;
    router.push(replaceLocale(pathname, nextLocale));
  };

  const localeOption = (
    definition: (typeof localeRegistry)[number],
  ): ReactNode => (
    <option key={definition.code} value={definition.code}>
      {definition.languageName}
    </option>
  );

  return (
    <label>
      <span className="srOnly">{messages.shell.language}</span>
      <select
        aria-label={messages.shell.language}
        className={styles.localeControl}
        onChange={handleLocaleChange}
        value={locale}
      >
        {localeRegistry.map(localeOption)}
      </select>
    </label>
  );
};
