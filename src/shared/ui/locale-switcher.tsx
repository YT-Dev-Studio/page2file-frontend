"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ChangeEvent, ReactNode } from "react";
import { localeRegistry, replaceLocale, type Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import styles from "./ui.module.css";

type LocaleSwitcherProps = {
  className?: string;
  display?: "code" | "name";
  locale: Locale;
};

export const LocaleSwitcher = ({
  className,
  display = "name",
  locale,
}: LocaleSwitcherProps): ReactNode => {
  const pathname = usePathname();
  const router = useRouter();
  const messages = getMessages(locale);
  const controlClassName =
    `${styles.localeControl} ${className ?? ""}`.trim();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = event.target.value as Locale;
    router.push(replaceLocale(pathname, nextLocale));
  };

  const localeOption = (
    definition: (typeof localeRegistry)[number],
  ): ReactNode => (
    <option key={definition.code} value={definition.code}>
      {display === "code"
        ? definition.code.toUpperCase()
        : definition.languageName}
    </option>
  );

  return (
    <label>
      <span className="srOnly">{messages.shell.language}</span>
      <select
        aria-label={messages.shell.language}
        className={controlClassName}
        onChange={handleLocaleChange}
        value={locale}
      >
        {localeRegistry.map(localeOption)}
      </select>
    </label>
  );
};
