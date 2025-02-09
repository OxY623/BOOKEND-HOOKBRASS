import React, { useState, useRef } from 'react';
import { ChevronDown, Mail, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './widgets/Header';
import { GallerySection } from './widgets/GallerySection/ui';
export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  price: string;
}

export const bookendCollection: GalleryItem[] = [
  {
    src: "/bookend/IMG_4386.jpg",
    title: "Eagle Guardian, bookend",
    description: "A majestic eagle-themed bookend, symbolizing strength and wisdom. Perfect for adding a noble touch to your bookshelf.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4577.jpg",
    title: "The Thinker, bookend",
    description: "A contemplative figure lost in thought. A perfect decor piece for those who appreciate intellect and philosophy.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4581.jpg",
    title: "Antique Grace, bookend",
    description: "A timeless bookend featuring a graceful classical female figure. Adds an elegant antique charm to any space.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4583.jpg",
    title: "Ram's Majesty, bookend",
    description: "A bold ram's head bookend, symbolizing strength and determination. A striking addition to any book collection.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4584.jpg",
    title: "Philosopher's Bust, bookend",
    description: "A Greco-Roman inspired male bust exuding wisdom and contemplation. Perfect for lovers of history and art.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4585.jpg",
    title: "Regal Lion, bookend",
    description: "An elegant lion-shaped bookend, representing strength and nobility. A refined choice for classic interiors.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4424.jpg",
    title: "Harmony of Arts, bookend",
    description: "A stunning bookend featuring a musician and a dancing woman, capturing the essence of classical artistry.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4425.jpg",
    title: "Antique Scene, bookend",
    description: "An intricate depiction of life in ancient times, showcasing dynamic interactions between figures.",
    price: "$99"
  },
  {
    src: "/bookend/IMG_4426.jpg",
    title: "Dancers of Antiquity, bookend",
    description: "A beautifully sculpted bookend with dancing figures, embodying movement and grace of the classical era.",
    price: "$99"
  }
];


export const hookbrassCollection: GalleryItem[] = [
  {
    src: "/hooksbrass/IMG_0891.JPG",
    title: "Wawel King, hook brass",
    description: "A majestic brass hook inspired by ancient royalty. Perfect for adding a noble touch to any space.",
    price: "$66"
  },
  {
    src: "/hooksbrass/IMG_0858~2.JPG",
    title: "Warrior's, hook brass",
    description: "A bold brass hook shaped like an ancient warrior. A perfect blend of strength and elegance.",
    price: "$66"
  },
  {
    src: "/hooksbrass/IMG_4375.jpg",
    title: "Hummingbird, hook brass",
    description: "An intricately designed brass hook featuring a delicate hummingbird. A timeless vintage charm.",
    price: "$66"
  }
];



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-2xl font-light tracking-wider animate-pulse">
          Loading...
        </div>
      </div>
    );
  }


  return (
    <div className="bg-[#f9f6f0] min-h-screen">
      {/* Hero Section */}
      {/* <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://hookbrass.com/images/1920.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-[#1a1814]/50" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-[#e5e1d8] px-4">
          <h1 className="text-6xl md:text-7xl font-light tracking-wider mb-6 text-center">
            BOOKEND & HOOKBRASS
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-center max-w-3xl">
            Exquisite bas-relief artworks in bronze and brass, 
            crafting tomorrow's antiques today
          </p>
          <ChevronDown className="absolute bottom-12 w-8 h-8 animate-bounce" />
        </div>
      </header> */}
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
          <a href="#contact" className ="text-white hover:text-[#34a798]  duration-300 px-[31px] py-[13px] rounded-sm hover:bg-[#e5e1d8] bg-[#34a798] ease-in-out transparent-all focus:outline-none focus:ring focus:ring-violet-300 border-[#34a798] border-2 border-[#34a798]-200">Connect With Us</a>
        </div>
      </section>
      
      {/* Collections */}
      <div ref={sectionRef}>
         <GallerySection   title="BOOKEND COLLECTION" items={bookendCollection} />
      </div>
      
      <div className="h-px bg-[#e5e1d8]" />
      <GallerySection title="HOOKBRASS COLLECTION" items={hookbrassCollection} />

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