import { defaultLang, ui, languages } from "./ui";

export type UILanguages = keyof typeof ui;

export const getLangFromUrl = (url: URL): UILanguages => {
  // BASE_URL is "/" when not set in config and "/beta" for example when set
  const [lang] = url.pathname
    // replace the base_url and also take into account any slash following that base
    .replace(new RegExp(`${import.meta.env.BASE_URL}/?`), "")
    .split("/");

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
};

export const getLocalizedPageFromUrl = (url: URL): string => {
  // BASE_URL is "/" when not set in config and "/beta" for example when set
  const path = url.pathname
    // replace the base_url and also take into account any slash following that base
    .replace(new RegExp(`${import.meta.env.BASE_URL}/?`), "")
    .split("/");

  if (Object.keys(languages).includes(path[0])) {
    return path.slice(1).join("/");
  }

  return path.join("/");
};

export const useTranslations = (lang: keyof typeof ui) => {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
};
