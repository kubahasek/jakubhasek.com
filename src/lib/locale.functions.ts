import { createServerFn } from "@tanstack/react-start";
import {
  getCookie,
  getRequest,
  setResponseHeader,
} from "@tanstack/react-start/server";
import { localeCookie, resolveLocale } from "./locale";

export const getRequestLocale = createServerFn({ method: "GET" }).handler(
  () => {
    const request = getRequest() as Request & { cf?: { country?: string } };
    // Locale depends on this visitor. Never share rendered responses between visitors.
    setResponseHeader("Cache-Control", "private, no-store");
    return resolveLocale(
      getCookie(localeCookie),
      request.cf?.country,
      request.headers.get("accept-language") ?? "",
    );
  },
);
