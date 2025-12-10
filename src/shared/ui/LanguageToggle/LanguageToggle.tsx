import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-8 right-20 z-50 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-black/20 dark:bg-white/20 backdrop-blur-sm text-white dark:text-white hover:bg-black/40 dark:hover:bg-white/40 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
      aria-label={i18n.language === 'en' ? 'Cambiar a español' : 'Switch to English'}
    >
      <div className="flex items-center gap-1.5">
        <Languages className="w-4 h-4" />
        <span className="text-sm font-medium uppercase">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
      </div>
    </button>
  );
};

