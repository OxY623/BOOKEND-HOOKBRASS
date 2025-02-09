import React, { useState, useRef, Suspense, lazy } from 'react';
import { ChevronDown, Mail, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './widgets/Header';
// import { GallerySection } from './widgets/GallerySection/ui';
import { hookbrassCollection, bookendCollection } from './shared/assets/data';

const GallerySection = lazy(() => import('./widgets/GallerySection/ui'));
export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  price: string;
}



const WaveLoader = () => {
  return (
    <div className="flex space-x-1">
      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.6s]"></span>
    </div>
  );
};


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 2000); // Здесь 2 секунды для демонстрации, замените на ваш реальный процесс загрузки

  if (isLoading) {
    return (
      <div className="min-h-screen flex-col flex items-center justify-center bg-black">
        <div className="text-blue-600 text-2xl font-bold tracking-wider animate-pulse">
           Loading
         </div> 
        <WaveLoader />
      </div>
    );
  }


  return (
    <div className="bg-[#f9f6f0] min-h-screen">
      {/* Hero Section */}
     <Header onScroll={handleScroll} isLoading={isLoading} setIsLoading={setIsLoading} />

      {/* Introduction */}
      <section className="py-24 px-4 bg-[#e5e1d8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide text-[#2c2820]">
            Crafting Elegance in Metal
          </h2>
          <p className="text-lg md:text-xl text-[#5c5648] leading-relaxed mb-12">
            Our hand-crafted bas-relief works in bronze and brass transform spaces into galleries of refined elegance. 
            Each piece is meticulously created to become a timeless addition to your collection.
          </p>
          {/* <a href="#contact" className ="text-2xl hover:scale-105 transition-transform duration-300 text-[#5c5648] pointer focus:outline-none focus:ring focus:ring-violet-300 underline-offset-4 hover:text-yellow-600 underline">Connect With Us</a> */}
          <a href="#contact" className ="text-white hover:text-[#34a798]  duration-300 px-[31px] text-2xl py-[13px] rounded-sm hover:bg-[#e5e1d8] bg-[#34a798] ease-in-out transparent-all focus:outline-none focus:ring focus:ring-violet-300 border-[#34a798] border-2 border-[#34a798]-200">Connect With Us</a>
        </div>
      </section>
      
      {/* Collections */}
      <div ref={sectionRef}>
      <Suspense fallback={<div><WaveLoader /></div>}>
         <GallerySection   title="BOOKEND COLLECTION" items={bookendCollection} />
      </Suspense>
      </div>
      
      <div className="h-px bg-[#e5e1d8]" />
      <div>
      <Suspense fallback={<div><WaveLoader /></div>}>
        <GallerySection title="HOOKBRASS COLLECTION" items={hookbrassCollection} />
      </Suspense>
      </div>
      

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#2c2820] text-[#e5e1d8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide">Connect With Us</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="mailto:hookbrass3@gmail.com" className="focus:outline-none focus:ring focus:ring-violet-300 flex hover:scale-105  items-center gap-2 hover:text-[#c2beb6] transition-colors">
              <Mail className="w-5 h-5" />
              <span>hookbrass@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/hookbrass3" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="flex items-center gap-2 hover:text-[#c2beb6] hover:scale-105  transition-colors focus:outline-none focus:ring focus:ring-violet-300">
              <Instagram className="w-5 h-5" />
              <span>@hookbrass3</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a1814] text-[#8a8578]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Bookend & Hookbrass. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;