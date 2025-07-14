import { useState, useEffect } from 'react';
import frContent from '../content/fr.json';
import enContent from '../content/en.json';

export function useTranslation() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr';
  });
  const [content, setContent] = useState(language === 'fr' ? frContent : enContent);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'fr';
    if (savedLang !== language) {
      setLanguage(savedLang);
    }
    setContent(savedLang === 'fr' ? frContent : enContent);
  }, [language]);

  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    setContent(lang === 'fr' ? frContent : enContent);
  };

  return {
    t: (key) => content[key] || key,
    language,
    setLanguage: changeLanguage
  };
}