import { ui, defaultLang } from './ui';
import type { Lang, UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in ui) return first as Lang;
  return defaultLang as Lang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang][key] ?? ui[defaultLang as Lang][key]) as string;
  };
}

/** Returns the opposite-language URL for the current page */
export function getAlternateLangUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const pathname = url.pathname;

  if (lang === 'es') {
    // Strip /es prefix
    return pathname.replace(/^\/es/, '') || '/';
  } else {
    // Add /es prefix
    return '/es' + (pathname === '/' ? '' : pathname);
  }
}
