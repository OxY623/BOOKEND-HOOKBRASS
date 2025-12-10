
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
         <footer className="py-8 bg-[#1a1814] dark:bg-[#0a0a0a] text-[#8a8578] dark:text-[#5c5648] transition-colors duration-300">
             <div className="max-w-7xl mx-auto px-4 text-center">
             <p className="text-sm">
      {t('footer.copyright', { year: new Date().getFullYear() })}
    </p>
    <p className="text-xs mt-2 flex items-center justify-center gap-1">
      {t('footer.createdBy')}
      <a href="https://github.com/OxY623" target="_blank" rel="noopener noreferrer" className=" hover:underline underline-offset-4 focus:outline-none focus:ring focus:ring-violet-300"> OxY623</a>.
    </p>
  </div>
</footer>
  )
}
