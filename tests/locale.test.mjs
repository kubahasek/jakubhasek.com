import assert from "node:assert/strict";
import test from "node:test";
import { resolveLocale } from "../src/lib/locale.ts";

for (const [name, preference, country, languages, expected] of [
  ["Czech location overrides English browser", undefined, "CZ", "en-US", "cs"],
  ["foreign location overrides Czech browser", undefined, "DE", "cs-CZ", "en"],
  ["saved English overrides Czech location", "en", "CZ", "cs", "en"],
  ["saved Czech overrides foreign location", "cs", "US", "en", "cs"],
  ["invalid cookie falls back to location", "de", "CZ", "en", "cs"],
  [
    "missing location uses browser language",
    undefined,
    undefined,
    "cs-CZ,cs;q=0.9,en;q=0.8",
    "cs",
  ],
  [
    "language quality determines fallback",
    undefined,
    "XX",
    "cs;q=0.5,en;q=0.9",
    "en",
  ],
  ["disabled language ignored", undefined, "T1", "cs;q=0,en;q=1", "en"],
  ["unknown location uses browser", undefined, "XX", "cs", "cs"],
  [
    "unsupported browser defaults to English",
    undefined,
    undefined,
    "fr-FR",
    "en",
  ],
  ["empty request defaults to English", undefined, undefined, "", "en"],
]) {
  test(name, () =>
    assert.equal(resolveLocale(preference, country, languages), expected),
  );
}
