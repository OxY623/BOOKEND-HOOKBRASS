import React, { useState } from 'react';
import { ChevronDown, Mail, Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './widgets/Header';

interface GalleryItem {
  src: string;
  title: string;
  description: string;
  price: string;
}

const bookendCollection: GalleryItem[] = [
  {
    src: "https://hookbrass.com/images/1.png",
    title: "Bronze Athena",
    description: "A stunning bas-relief depicting the goddess Athena in classical Greek style. This piece combines traditional techniques with contemporary aesthetics.",
    price: "$2,400"
  },
  {
    src: "https://hookbrass.com/images/2.png",
    title: "Royal Lions",
    description: "Majestic lion heads in bronze, perfect as statement pieces for an elegant study or library. Each detail is meticulously crafted.",
    price: "$1,800"
  },
  {
    src: "https://hookbrass.com/images/3.png",
    title: "Art Nouveau Flora",
    description: "Inspired by the Art Nouveau movement, this floral design brings natural beauty to your bookshelf.",
    price: "$2,200"
  },
  {
    src: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80",
    title: "Medieval Knights",
    description: "A dramatic scene depicting medieval knights in battle, rendered in exquisite detail.",
    price: "$2,600"
  },
  {
    src: "https://hookbrass.com/images/3.png",
    title: "Renaissance Angels",
    description: "Inspired by Renaissance sculptures, these cherubic figures add a touch of classical elegance.",
    price: "$2,100"
  },
  {
    src: "https://hookbrass.com/images/6.png",
    title: "Dragon's Lair",
    description: "A mythical dragon design that combines Eastern and Western artistic traditions.",
    price: "$2,800"
  }
];

const hookbrassCollection: GalleryItem[] = [
  {
    src: "https://hookbrass.com/images/16.png",
    title: "Nautical Compass",
    description: "A sophisticated brass wall piece featuring an intricate compass design, perfect for maritime enthusiasts.",
    price: "$1,900"
  },
  {
    src: "https://hookbrass.com/images/13.png",
    title: "Art Deco Sunburst",
    description: "Capturing the glamour of the Art Deco era, this sunburst design makes a bold statement.",
    price: "$2,300"
  },
  {
    src: "https://hookbrass.com/images/18.png",
    title: "Victorian Flourish",
    description: "Elegant Victorian-inspired patterns create a timeless piece of wall art.",
    price: "$2,100"
  },
  {
    src: "https://hookbrass.com/images/18.png",
    title: "Geometric Modern",
    description: "Contemporary geometric patterns meet traditional craftsmanship in this modern piece.",
    price: "$1,800"
  },
  {
    src: "https://images.unsplash.com/photo-1576020799627-aeac74d58064?auto=format&fit=crop&q=80",
    title: "Botanical Studies",
    description: "Detailed botanical illustrations transformed into stunning brass relief.",
    price: "$2,400"
  },
  {
    src: "https://hookbrass.com/images/10.png",
    title: "Ocean Waves",
    description: "A dynamic representation of ocean waves in motion, captured in brass.",
    price: "$2,200"
  }
];

function ImageModal({ 
  item, 
  onClose, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}: { 
  item: GalleryItem; 
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}) {
  return (
    <div className="fixed inset-0 bg-[#1a1814]/95 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-6xl mx-4">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-[#e5e1d8] hover:text-[#c2beb6] transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="relative">
          {hasPrevious && (
            <button 
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e5e1d8] hover:text-[#c2beb6] transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}
          
          {hasNext && (
            <button 
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e5e1d8] hover:text-[#c2beb6] transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}
          
          <img 
            src={item.src} 
            alt={item.title}
            className="w-full h-[70vh] object-contain"
          />
        </div>
        
        <div className="bg-[#f4f1ea] p-6 mt-4">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-light text-[#2c2820]">{item.title}</h3>
            <p className="text-xl text-[#5c5648]">{item.price}</p>
          </div>
          <p className="text-[#5c5648] leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function GallerySection({ title, items }: { title: string; items: GalleryItem[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-light mb-16 text-center tracking-wide text-[#2c2820]">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a1814]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-[#e5e1d8] text-center p-4">
                  <h3 className="text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-lg">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <ImageModal 
          item={items[selectedIndex]}
          onClose={() => setSelectedIndex(null)}
          onPrevious={() => setSelectedIndex(prev => Math.max(0, prev! - 1))}
          onNext={() => setSelectedIndex(prev => Math.min(items.length - 1, prev! + 1))}
          hasPrevious={selectedIndex > 0}
          hasNext={selectedIndex < items.length - 1}
        />
      )}
    </section>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);

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
      <Header isLoading={isLoading} setIsLoading={setIsLoading} />

      {/* Introduction */}
      <section className="py-24 px-4 bg-[#f9f6f0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide text-[#2c2820]">
            Crafting Elegance in Metal
          </h2>
          <p className="text-lg md:text-xl text-[#5c5648] leading-relaxed mb-12">
            Our hand-crafted bas-relief works in bronze and brass transform spaces into galleries of refined elegance. 
            Each piece is meticulously created to become a timeless addition to your collection.
          </p>
        </div>
      </section>

      {/* Collections */}
      <GallerySection title="BOOKEND COLLECTION" items={bookendCollection} />
      <div className="h-px bg-[#e5e1d8]" />
      <GallerySection title="HOOKBRASS COLLECTION" items={hookbrassCollection} />

      {/* Contact */}
      <section className="py-20 bg-[#2c2820] text-[#e5e1d8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide">Connect With Us</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="mailto:hookbrass@gmail.com" className="flex items-center gap-2 hover:text-[#c2beb6] transition-colors">
              <Mail className="w-5 h-5" />
              <span>hookbrass@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-[#c2beb6] transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@hookbrass</span>
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