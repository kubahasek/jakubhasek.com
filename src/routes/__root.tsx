import { PostHogProvider, usePostHog } from "@posthog/react";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import "@/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "Jakub Hašek — Full-Stack Developer" },
      {
        name: "description",
        content: "Jakub Hašek builds thoughtful, fast, and useful digital products.",
      },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ff6b00" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <PostHogRoot>
          <Outlet />
        </PostHogRoot>
        <Scripts />
      </body>
    </html>
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
  const posthog = usePostHog();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing()) {
      setIsVisible(false);
    }

    const showPreferences = () => setIsVisible(true);
    window.addEventListener("show-analytics-preferences", showPreferences);
    return () => window.removeEventListener("show-analytics-preferences", showPreferences);
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
    <aside className="consent-banner" aria-label="Analytics preferences">
      <div className="consent-copy">
        <strong>Analytics preferences</strong>
        <p>
          Full analytics help me understand how this site is used. If you decline,
          I’ll only collect anonymous, cookieless page counts.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" onClick={() => chooseAnalytics(false)}>
          Use cookieless
        </button>
        <button className="consent-accept" type="button" onClick={() => chooseAnalytics(true)}>
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
