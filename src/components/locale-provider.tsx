import { createContext, useContext, type ReactNode } from "react";
import { localeCookie, type Locale } from "@/lib/locale";

const LocaleContext = createContext<Locale>("en");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const locale = useContext(LocaleContext);
  return { locale, t: (en: string, cs: string) => (locale === "cs" ? cs : en) };
}

export function LanguageSwitcher() {
  const { locale, t } = useLocale();
  return (
    <div
      className="language-switcher"
      role="group"
      aria-label={t("Language", "Jazyk")}
    >
      {(["cs", "en"] as const).map((language) => (
        <button
          key={language}
          type="button"
          lang={language}
          aria-label={language === "cs" ? "Čeština" : "English"}
          aria-pressed={locale === language}
          onClick={() => {
            document.cookie = `${localeCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
            window.location.reload();
          }}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
