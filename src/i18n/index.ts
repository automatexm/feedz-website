import { en } from './en';
import { fr } from './fr';

export type Lang = 'en' | 'fr';

export const translations = { en, fr };

export function t(lang: Lang) {
  return translations[lang] ?? translations.en;
}

export function getAlternatePath(currentPath: string, currentLang: Lang): string {
  const targetLang = currentLang === 'en' ? 'fr' : 'en';
  return currentPath.replace(`/${currentLang}/`, `/${targetLang}/`).replace(`/${currentLang}`, `/${targetLang}`);
}
