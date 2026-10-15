import { PostHogProvider, usePostHog } from "@posthog/react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";
import {
  LocaleProvider,
  LanguageSwitcher,
  useLocale,
} from "@/components/locale-provider";
import { getRequestLocale } from "@/lib/locale.functions";
import "@/globals.css";

export const Route = createRootRoute({
  beforeLoad: async () => ({ locale: await getRequestLocale() }),
  head: ({ match }) => ({
    meta: [
      {
        title:
          match.context.locale === "cs"
            ? "Jakub Hašek — Full-stack vývojář"
            : "Jakub Hašek — Full-Stack Developer",
      },
      {
        name: "description",
        content:
          match.context.locale === "cs"
            ? "Jsem Jakub Hašek, full-stack vývojář. Pomůžu vám s návrhem a vývojem webové aplikace od prvního nápadu po spuštění."
            : "Jakub Hašek builds thoughtful, fast, and useful digital products.",
      },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ff6b00" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const { locale } = Route.useRouteContext();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <ThemeProvider>
            <PostHogRoot>
              <Outlet />
              <SecondaryLanguageSwitcher />
            </PostHogRoot>
          </ThemeProvider>
        </LocaleProvider>
        <Scripts />
      </body>
    </html>
  );
}

function SecondaryLanguageSwitcher() {
  const pathname = useLocation({ select: (location) => location.pathname });
  // Home owns its header control; other routes share a compact fixed control.
  if (pathname === "/") return null;
  return (
    <div className="secondary-language-switcher">
      <LanguageSwitcher />
    </div>
  );
}

function PostHogRoot({ children }: { children: ReactNode }) {
  const apiKey = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const apiHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

  if (!apiKey || !apiHost) {
    if (import.meta.env.DEV) {
      const missingVariable = !apiKey
        ? "VITE_PUBLIC_POSTHOG_PROJECT_TOKEN"
        : "VITE_PUBLIC_POSTHOG_HOST";
      throw new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
      );
    }

    return children;
  }

  return (
    <PostHogProvider
      apiKey={apiKey}
      options={{
        api_host: apiHost,
        capture_exceptions: true,
        cookieless_mode: "on_reject",
        defaults: "2025-05-24",
        debug: import.meta.env.DEV,
      }}
    >
      {children}
      <AnalyticsConsent />
    </PostHogProvider>
  );
}

function AnalyticsConsent() {
  const { t } = useLocale();
  const posthog = usePostHog();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (posthog.get_explicit_consent_status() !== "pending") {
      setIsVisible(false);
    }

    const showPreferences = () => setIsVisible(true);
    window.addEventListener("show-analytics-preferences", showPreferences);
    return () =>
      window.removeEventListener("show-analytics-preferences", showPreferences);
  }, [posthog]);

  if (!isVisible) return null;

  const chooseAnalytics = (accepted: boolean) => {
    if (accepted) {
      posthog.opt_in_capturing();
    } else {
      posthog.opt_out_capturing();
    }
    setIsVisible(false);
  };

  return (
    <aside
      className="consent-banner"
      aria-label={t("Analytics preferences", "Nastavení analytiky")}
    >
      <div className="consent-copy">
        <strong>{t("Analytics preferences", "Nastavení analytiky")}</strong>
        <p>
          {t(
            "Full analytics help me understand how this site is used. If you decline, I’ll only collect anonymous, cookieless page counts.",
            "Analytika mi pomáhá pochopit, jak web používáte. Pokud ji odmítnete, budu sbírat pouze anonymní počty zobrazení bez cookies.",
          )}
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" onClick={() => chooseAnalytics(false)}>
          {t("Use cookieless", "Pokračovat bez cookies")}
        </button>
        <button
          className="consent-accept"
          type="button"
          onClick={() => chooseAnalytics(true)}
        >
          {t("Accept analytics", "Povolit analytiku")}
        </button>
      </div>
    </aside>
  );
}
