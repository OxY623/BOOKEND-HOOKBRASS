import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import './Header.css'

const backgroundImages = [
  '/graces/1000001581.png',
  '/graces/1000001582.png',
  '/graces/1000001583.png',
  '/graces/1000001584.png',
  '/graces/1000001585.png',
  '/graces/1000001586.png',
  '/graces/1000001588.png',
  '/graces/1000001589.png',
  '/graces/1000001596.png',
  '/graces/1000001597.png',
  '/graces/1000001598.png',
  '/graces/1000001600.png',
];

type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  onScroll: () => void;
};

function Header({isLoading, setIsLoading, onScroll}:Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
 

  useEffect(() => {
    // Preload images
    Promise.all(
      backgroundImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      })
    ).then(() => {
      setIsLoading(false);
    }).finally(() => {
             setIsLoading(false);
    });
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black">
//         <div className="text-white text-2xl font-light tracking-wider animate-pulse">
//           Loading...
//         </div>
//       </div>
//     );
//   }

  return (
    
      <header className="relative h-screen overflow-hidden">
        {/* Background images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-contain bg-no-repeat bg-center transition-all duration-1500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
          </div>
        ))}

        {/* Current image number */}
        <div className="absolute top-8 left-8 text-white/80 font-light tracking-widest text-sm">
          <span className="text-xl">{String(currentImageIndex + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(backgroundImages.length).padStart(2, '0')}</span>
        </div>

        {/* Play/Pause button */}
        <button
          onClick={toggleAutoPlay}
          className="absolute z-20 top-8 right-8 bg-black/20 hover:bg-black/40 text-white/80 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        {/* Navigation arrows */}
        <div className="absolute z-30 inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 md:px-8 pointer-events-none">
          <button 
            onClick={handlePrevious}
            className="z-30 pointer-events-auto bg-black/20 hover:bg-black/40 text-white/80 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 group"
            aria-label="Previous image"
          >
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={handleNext}
            className="z-30 pointer-events-auto bg-black/20 hover:bg-black/40 text-white/80 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 group"
            aria-label="Next image"
          >
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 select-none">
          <div className="space-y-8 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.2em] mb-6 transition-all duration-700 animate-fade-in">
              BOOKEND & HOOKBRASS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wider max-w-3xl mx-auto leading-relaxed text-white/90">
              Exquisite bas-relief artworks in bronze and brass,
              <br className="hidden sm:block" />
              crafting tomorrow's antiques today
            </p>
          </div>
          <button onClick={onScroll} title="See more details" className="absolute animate-bounce bottom-9 z-30 pointer-events-auto bg-black/20 hover:bg-green-500 text-white/80 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 group"
            aria-label="See more details">
          <ChevronDown className=" w-6 h-6 md:w-8 md:h-8  text-white/80" />
          </button>
          
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 px-4">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentImageIndex(index);
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </header>
    
  );
}

export {Header};