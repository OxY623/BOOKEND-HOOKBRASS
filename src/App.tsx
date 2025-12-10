import  {  useRef, Suspense, lazy, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {  Mail, Instagram,  } from 'lucide-react';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { SEO } from './shared/ui/SEO/SEO';
import { StructuredData } from './shared/ui/StructuredData/StructuredData';
import { WaveLoader } from './shared/ui/WaveLoader/WaveLoader';
//import Loader from './shared/ui/Loader/Loader';
import { hookbrassCollection, bookendCollection, wawelCastleCollection } from './shared/assets/data';


const GallerySection = lazy(() => import('./widgets/GallerySection/ui'));
export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  price: string;
}

function App() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleContactScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="bg-[#f9f6f0] dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <SEO />
      <StructuredData />
      {/* Hero Section */}
     <Header onScroll={handleScroll} />

      {/* Introduction */}
      <section className="py-24 px-4 bg-[#e5e1d8] dark:bg-[#1a1814] transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide text-[#2c2820] dark:text-[#e5e1d8] transition-colors duration-300">
            {t('intro.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#5c5648] dark:text-[#c2beb6] leading-relaxed mb-12 transition-colors duration-300">
            {t('intro.description')}
          </p>
          <a
            href="#contact"
            onClick={handleContactScroll}
            className="inline-flex items-center justify-center font-light tracking-wide text-white bg-[#34a798] hover:bg-[#2a8a7a] dark:hover:bg-[#2a8a7a] px-8 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 focus:ring-offset-[#e5e1d8] dark:focus:ring-offset-[#1a1814]"
          >
            {t('intro.connectButton')}
          </a>
        </div>
      </section>

      {/* Collections */}
      <Suspense fallback={<div className='flex items-center justify-center'><WaveLoader /></div>}>
      <div ref={sectionRef}>

         <GallerySection   title={t('collections.bookend')} items={bookendCollection} />

      </div>

      <div className="h-px bg-[#e5e1d8] dark:bg-[#2c2820] transition-colors duration-300" />
      <div>

        <GallerySection title={t('collections.hookbrass')} items={hookbrassCollection} />

      </div>

      <div>

        <GallerySection title={t('collections.wawelCastle')} items={wawelCastleCollection} />

      </div>
      </Suspense>

      {/* Contact */}
      <section ref={contactRef} id="contact" className="relative py-24 bg-[#2c2820] dark:bg-[#1a1814] text-[#e5e1d8] dark:text-[#c2beb6] transition-colors duration-300 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#34a798] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#34a798] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-16 tracking-wide animate-fade-in">{t('contact.title')}</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            {/* Email Card */}
            <a
              href="mailto:hookbrass3@gmail.com"
              className="group relative focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 focus:ring-offset-[#2c2820] dark:focus:ring-offset-[#1a1814] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#34a798]/20 to-[#34a798]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-[#1a1814]/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#34a798]/30 rounded-lg px-8 py-6 flex flex-col items-center gap-3 min-w-[200px] hover:border-[#34a798] transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#34a798]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <Mail className="w-8 h-8 text-[#34a798] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-lg font-light group-hover:text-[#34a798] transition-colors duration-300">{t('contact.email')}</span>
                <div className="absolute inset-0 rounded-lg border-2 border-[#34a798] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/hookbrass3"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 focus:ring-offset-[#2c2820] dark:focus:ring-offset-[#1a1814] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#34a798]/20 to-[#34a798]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-[#1a1814]/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#34a798]/30 rounded-lg px-8 py-6 flex flex-col items-center gap-3 min-w-[200px] hover:border-[#34a798] transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#34a798]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <Instagram className="w-8 h-8 text-[#34a798] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-lg font-light group-hover:text-[#34a798] transition-colors duration-300">{t('contact.instagram')}</span>
                <div className="absolute inset-0 rounded-lg border-2 border-[#34a798] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
