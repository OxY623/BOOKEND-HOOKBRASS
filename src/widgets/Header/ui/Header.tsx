import React, { useState, useEffect, useCallback, useMemo } from "react";
import { backgroundImages } from "../../../shared/assets/data";
import { ChevronDown, ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { BackgroundImage } from "../../../shared/ui/BackgroundImage/BackgroundImage";

type Props = {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  onScroll?: () => void;
};

const AUTO_PLAY_INTERVAL = 5000;

function Header({ setIsLoading, onScroll }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      try {
        await Promise.all(
          backgroundImages.map(
            (src) =>
              new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve();
                img.onerror = () => reject();
              })
          )
        );
      } finally {
        if (isMounted) setIsLoading?.(false);
      }
    };

    preloadImages();
    return () => {
      isMounted = false;
    };
  }, [setIsLoading]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  const navigationDots = useMemo(
    () =>
      backgroundImages.map((_, index) => (
        <button
          key={index}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            index === currentImageIndex
              ? "bg-white w-8"
              : "bg-white/40 w-2 hover:bg-white/60"
          }`}
          onClick={() => {
            setIsAutoPlaying(false);
            setCurrentImageIndex(index);
          }}
          aria-label={`Go to image ${index + 1}`}
        />
      )),
    [currentImageIndex]
  );

  return (
    <header className="relative h-screen overflow-hidden">
      {backgroundImages.map((image, index) => (
        <BackgroundImage key={index} src={image} isVisible={index === currentImageIndex} />
      ))}

      <div className="absolute top-8 left-8 text-white/80 font-light tracking-widest text-sm">
        <span className="text-xl">{String(currentImageIndex + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(backgroundImages.length).padStart(2, "0")}</span>
      </div>

      <button
        onClick={toggleAutoPlay}
        className="absolute top-8 right-8 z-50 bg-black/20 hover:bg-black/40 text-white/80 p-2 rounded-full backdrop-blur-sm transition-all"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      <div className="absolute z-30 inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={handlePrevious}
          className="pointer-events-auto z-100 bg-black/20 hover:bg-black/40 text-white/80 p-2 rounded-full backdrop-blur-sm transition-all group"
          aria-label="Previous image"
        >
          <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto z-100 bg-black/20 hover:bg-black/40 text-white/80 p-2 rounded-full backdrop-blur-sm transition-all group"
          aria-label="Next image"
        >
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 select-none">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 className="rounded-lg text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.2em] mb-6 transition-all duration-700 animate-fade-in">
            BOOKEND & HOOKBRASS
          </h1>
          <p className="rounded-lg text-lg sm:text-xl md:text-2xl font-light tracking-wider max-w-3xl mx-auto leading-relaxed text-white/90">
            Exquisite bas-relief artworks in bronze and brass,
            <br className="hidden sm:block" />
            crafting tomorrow's antiques today
          </p>
        </div>
        <button
          onClick={onScroll}
          className="absolute animate-bounce bottom-5 z-30 pointer-events-auto bg-black/20 hover:bg-green-500 text-white/80 p-2 rounded-full backdrop-blur-sm transition-all"
          aria-label="See more details"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white/80" />
        </button>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 px-4">
        {navigationDots}
      </div>
    </header>
  );
}

export { Header };
