/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import appCss from "@/globals.css?url";

const openPanelClientId = "85c8ebc8-7439-44b5-918c-0148b80abb92";
const openPanelInitScript = `window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}} ,has:function(t,r){return"q"===r}}) }();window.op('init',{clientId:'${openPanelClientId}',trackScreenViews:true,trackOutgoingLinks:true,trackAttributes:true});`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "Terminal Portfolio" },
      {
        name: "description",
        content: "Personal landing page with terminal UI",
      },
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css",
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: openPanelInitScript }} />
        <script src="https://openpanel.dev/op1.js" defer async />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background font-mono scanline">
        <Navigation />
        <main className="pl-0 md:pl-64">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
