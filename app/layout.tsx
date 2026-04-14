import type React from "react";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

const openPanelClientId = "85c8ebc8-7439-44b5-918c-0148b80abb92";
const openPanelInitScript = `window.op=window.op||function(){var n=[];return new Proxy(function(){arguments.length&&n.push([].slice.call(arguments))},{get:function(t,r){return"q"===r?n:function(){n.push([r].concat([].slice.call(arguments)))}} ,has:function(t,r){return"q"===r}}) }();window.op('init',{clientId:'${openPanelClientId}',trackScreenViews:true,trackOutgoingLinks:true,trackAttributes:true});`;

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "Personal landing page with terminal UI",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-mono ${GeistMono.variable}`}>
        <Script id="openpanel-init" strategy="beforeInteractive">
          {openPanelInitScript}
        </Script>
        <Script
          src="https://openpanel.dev/op1.js"
          strategy="afterInteractive"
        />
        <Suspense fallback={null}>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
