import  {  useRef, Suspense, lazy, useCallback } from 'react';
import {  Mail, Instagram,  } from 'lucide-react';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { WaveLoader } from './shared/ui/WaveLoader/WaveLoader';
import { hookbrassCollection, bookendCollection } from './shared/assets/data';


const GallerySection = lazy(() => import('./widgets/GallerySection/ui'));
export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  price: string;
}

function App() {

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#f9f6f0] min-h-screen">
      {/* Hero Section */}
     <Header onScroll={handleScroll} />

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
          <a href="#contact" className ="text-white hover:text-[#34a798]  duration-300 px-[31px] text-2xl py-[13px] rounded-sm hover:bg-[#e5e1d8] bg-[#34a798] ease-in-out transparent-all focus:outline-none focus:ring focus:ring-violet-300 border-[#34a798] border-2 border-[#34a798]-200">Connect With Us</a>
        </div>
      </section>
      
      {/* Collections */}
      <Suspense fallback={<div className='flex items-center justify-center'><WaveLoader /></div>}>
      <div ref={sectionRef}>
      
         <GallerySection   title="BOOKEND COLLECTION" items={bookendCollection} />
     
      </div>
      
      <div className="h-px bg-[#e5e1d8]" />
      <div>
      
        <GallerySection title="HOOKBRASS COLLECTION" items={hookbrassCollection} />
     
      </div>
      </Suspense>

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
      <Footer/>
    </div>
  );
}

export default App;