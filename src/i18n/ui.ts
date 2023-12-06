import en from "./langs/en.json";
import fr from "./langs/fr.json";
import de from "./langs/de.json";
import es from "./langs/es.json";

export const languages = {
  en: { short: "EN", long: "English" },
  fr: { short: "FR", long: "Français" },
  de: { short: "DE", long: "Deutsch" },
  es: { short: "ES", long: "Español" },
};

export const defaultLang = "en";

export const ui = {
  en,
  fr,
  de,
  es,
} as const;
