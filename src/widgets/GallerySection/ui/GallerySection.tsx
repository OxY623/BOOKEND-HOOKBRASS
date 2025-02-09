import { useState } from "react";
import ImageModal from "../../../shared/ui/ImageModal/ImageModal";
import { GalleryItem } from "../../../App";

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

export default GallerySection