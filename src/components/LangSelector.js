import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import '../styles/LangSelector.css';

export default function LangSelector() {
  const { language, setLanguage } = useTranslation();
  const [isVisible, setIsVisible] = useState(() => {
    // Vérifie si l'utilisateur a déjà choisi une langue
    return !localStorage.getItem('language-selected');
  });

  if (!isVisible) return null;

  const handleLanguageSelect = async (lang) => {
    await setLanguage(lang);
    setIsVisible(false);
    localStorage.setItem('language-selected', 'true');
    window.location.reload(); // Forcer le rafraîchissement pour appliquer tous les changements
  };

  return (
    <div className="lang-modal-overlay">
      <div className="lang-modal">
        <h3>Choisissez votre langue / Choose your language</h3>
        <div className="lang-options">
          <button
            onClick={() => handleLanguageSelect('fr')}
            className={language === 'fr' ? 'active' : ''}
          >
            Français
          </button>
          <button
            onClick={() => handleLanguageSelect('en')}
            className={language === 'en' ? 'active' : ''}
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}