"use client";

import { usePathname, useRouter } from "next/navigation";
import type { ChangeEvent, ReactNode } from "react";
import { localeRegistry, replaceLocale, type Locale } from "@/shared/i18n/locales";
import { getMessages } from "@/shared/i18n/messages";
import {
  Select,
  type SelectOption,
} from "@/shared/ui/components/select/select";
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
  const switcherClassName =
    `${styles.localeSwitcher} ${className ?? ""}`.trim();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const nextLocale = event.target.value as Locale;
    router.push(replaceLocale(pathname, nextLocale));
  };

  const localeOption = (
    definition: (typeof localeRegistry)[number],
  ): SelectOption => ({
    label:
      display === "code"
        ? definition.code.toUpperCase()
        : definition.languageName,
    value: definition.code,
  });
  const localeOptions = localeRegistry.map(localeOption);

  return (
    <div className={switcherClassName}>
      <Select
        className={styles.localeControl}
        label={messages.shell.language}
        onChange={handleLocaleChange}
        options={localeOptions}
        showHelper={false}
        showLabel={false}
        showSelectedIcon={false}
        value={locale}
      />
    </div>
  );
};
