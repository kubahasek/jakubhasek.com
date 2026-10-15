export type Locale = "cs" | "en";
export const localeCookie = "portfolio-language";

export function resolveLocale(
  preference?: string,
  country?: string | null,
  acceptLanguage = "",
): Locale {
  if (preference === "cs" || preference === "en") return preference;
  if (
    country &&
    /^[a-z]{2}$/i.test(country) &&
    !["XX", "T1"].includes(country.toUpperCase())
  ) {
    return country.toUpperCase() === "CZ" ? "cs" : "en";
  }
  const languages = acceptLanguage
    .split(",")
    .map((entry) => {
      const [language, ...parameters] = entry.trim().split(";");
      const quality = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      return {
        language: language.toLowerCase().split("-")[0],
        quality: quality ? Number(quality.trim().slice(2)) : 1,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality);
  const preferred = languages.find(
    ({ language }) => language === "cs" || language === "en",
  )?.language;
  return preferred === "cs" ? "cs" : "en";
}
