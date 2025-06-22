import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useNavigate } from 'react-router-dom';
import '../../styles/LangSelectPage.css';

export default function LangSelectPage() {
  const { setLanguage } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
    navigate('/');
  };

  return (
    <div className="lang-select-page">
      <h1>Select your language</h1>
      <div className="lang-options">
        <button onClick={() => handleLanguageSelect('fr')}>Français</button>
        <button onClick={() => handleLanguageSelect('en')}>English</button>
      </div>
    </div>
  );
}