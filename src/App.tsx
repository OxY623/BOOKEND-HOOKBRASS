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
    title: "Eagle Keeper",
    description: "An elegant book stand featuring an eagle, symbolizing strength, wisdom, and vision. Perfect for decorating a bookshelf, adding a touch of nobility and style to the interior.",
    price: "$99$"
  },
  {
    src: "/bookend/IMG_4577.jpg",
    title: "The Thinker’s Rest",
    description: "A sculpture of a contemplative man seated on a stand, lost in deep thought. A symbol of intellect, reflection, and philosophy, making it a perfect decorative piece for study rooms or libraries.",
    price: "$99$"
  },
  {
    src: "/bookend/IMG_4581.jpg",
    title: "Grace of Antiquity",
    description: "A classical-style stand featuring a sculpture of an ancient woman gracefully looking downward, delicately holding her draped garment while revealing a bare bust. The design embodies elegance and timeless beauty, making it a refined addition to any space inspired by antique art.",
    price: "$99$"
  },
  {
    src: "/bookend/IMG_4583.jpg",
    title: "Ram's Legacy",
    description: "An antique-style stand featuring a sculpted ram's head, symbolizing strength, determination, and wisdom. The detailed craftsmanship captures the majestic essence of this noble creature, making it a striking decorative piece with a historical and classical appeal.",
    price: "$99$"
  },
  {
    src: "/bookend/IMG_4584.jpg",
    title: "Timeless Thinker",
    description: "An antique-style stand featuring a sculpted male head, reminiscent of classical Greco-Roman sculptures. The finely detailed features exude wisdom, contemplation, and strength, making it a perfect decorative piece that adds a touch of history and elegance to any space.",
    price: "$99$"
  },
  {
    src: "/bookend/IMG_4585.jpg",
    title: "The Aristocratic Lion",
    description: " An elegant bookend shaped like an ancient lion. Crafted with high-quality materials, it adds a touch of grandeur and history to any space. The lion, symbolizing strength and nobility, not only holds your books but also infuses your library or workspace with a unique sense of antiquity. This bookend perfectly complements classical and historical interior styles, highlighting your attention to detail and appreciation for art.",
    price: "$99"
  }
];

export const hookbrassCollection: GalleryItem[] = [
  {
    src: "/hooksbrass/IMG_0891.JPG",
    title: "The Noble Emperor Hook",
    description: "A regal hook designed in the likeness of an ancient king or nobleman. With its detailed craftsmanship, this hook evokes the splendor and grandeur of classical royalty. Whether used for coats, hats, or decorative purposes, it brings a touch of aristocratic elegance to any room. Perfect for adding a historical flair to your entryway, hallway, or study, this piece combines functionality with the timeless beauty of ancient nobility. It’s an ideal choice for those who appreciate the fusion of utility and art in their home decor.",
    price: "$66"
  },
  {
    src: "/hooksbrass/IMG_0892.jpg",
    title: "Warrior's Valor Hook",
    description: "This striking hook takes the form of an ancient warrior, evoking the strength, bravery, and honor of legendary fighters. Crafted with intricate details, it showcases the stoic stance and power of a warrior in armor, symbolizing protection and courage. Perfect for adding a bold, historical touch to any space, this hook brings an air of ancient heroism to your home. Whether placed in an entryway, bedroom, or study, it serves as both a functional piece and a tribute to the spirit of warriors from a bygone era.",
    price: "$66"
  },
  {
    src: "/hooksbrass/IMG_4375.jpg",
    title: "Antique Hummingbird Hook",
    description: "This delicately designed hook takes the graceful form of a hummingbird, crafted with antique-inspired detailing. With its elegant posture and intricate featherwork, it captures the timeless beauty of this tiny, yet mighty bird. The hook brings an air of vintage charm and nature’s delicate balance to any room. Ideal for adding a touch of sophistication to your home decor, this piece is perfect for hanging accessories, coats, or simply as a statement of artistic craftsmanship. Its antique design evokes a sense of nostalgia and timeless elegance, merging nature with artistry.",
    price: "$66"
  },
  
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
      <div ref={sectionRef}>
         <GallerySection   title="BOOKEND COLLECTION" items={bookendCollection} />
      </div>
      
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