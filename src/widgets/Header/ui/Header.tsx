import React, { useState, useRef, useEffect } from 'react';
import { backgroundImages } from '../../../shared/assets/data';
import { ChevronDown, ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import './Header.css'



type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  onScroll: () => void;
};

function Header({isLoading, setIsLoading, onScroll}:Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    let isMounted = true;
  
    const preloadImages = async () => {
      try {
        await Promise.all(
          backgroundImages.map(
            (src) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = (err) => {
                  console.error(`Ошибка загрузки изображения: ${src}`, err);
                  reject(err); // Не прерываем цепочку, а просто логируем
                };
              })
          )
        );
      } catch (error) {
        console.error("Image preload failed", error);
      } finally {
        if (isMounted) {
          console.log("Все изображения загружены, отключаем isLoading");
          setIsLoading(false);
        }
      }
    };
  
    preloadImages();
  
    return () => {
      isMounted = false;
    };
  }, []);
  
  
  

  // useEffect(() => {
  //   // Preload images
  //   Promise.all(
  //     backgroundImages.map((src) => {
  //       return new Promise((resolve) => {
  //         const img = new Image();
  //         img.src = src;
  //         img.onload = resolve;
  //       });
  //     })
  //   ).then(() => {
  //     setIsLoading(false);
  //   }).finally(() => {
  //            setIsLoading(false);
  //   });
  // }, [isLoading, setIsLoading]);

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
            {/* <h1 className="bg-gray-200/10 rounded-lg text-4xl text-black  hover:shadow-lg  sm:text-5xl md:text-7xl font-light tracking-[0.2em] mb-6 transition-all duration-700 animate-fade-in">
              BOOKEND & HOOKBRASS
            </h1>
            <p className="bg-gray-200/10 rounded-lg text-lg sm:text-xl md:text-2xl text-black text-black  hover:shadow-lg font-light tracking-wider max-w-3xl mx-auto leading-relaxed text-white/90">
              Exquisite bas-relief artworks in bronze and brass,
              <br className="hidden sm:block" />
              crafting tomorrow's antiques today
            </p> */}
            <h1 className="rounded-lg text-4xl text-white  sm:text-5xl md:text-7xl font-light tracking-[0.2em] mb-6 transition-all duration-700 animate-fade-in">
              BOOKEND & HOOKBRASS
            </h1>
           <p className="rounded-lg text-lg sm:text-xl md:text-2xl text-white  font-light tracking-wider max-w-3xl mx-auto leading-relaxed text-white/90">
                 Exquisite bas-relief artworks in bronze and brass,
            <br className="hidden sm:block" />
              crafting tomorrow's antiques today
            </p>

          </div>
          <button onClick={onScroll} title="See more details" className="absolute animate-bounce bottom-5 z-30 pointer-events-auto bg-black/20 hover:bg-green-500 text-white/80 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 group"
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