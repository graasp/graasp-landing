import en from "./langs/en.json";
import fr from "./langs/fr.json";
import de from "./langs/de.json";

export const languages = {
  en: { short: "EN", long: "English" },
  fr: { short: "FR", long: "Français" },
  de: { short: "DE", long: "Deutsch" },
};

export const defaultLang = "en";

export const ui = {
  en,
  fr,
  de,
} as const;
