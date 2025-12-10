import { ArrowLeft, ArrowRight, ChevronDown, Pause, Play } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { backgroundImages } from "../../../shared/assets/data";
import { BackgroundImage } from "../../../shared/ui/BackgroundImage/BackgroundImage";
import { LanguageToggle } from "../../../shared/ui/LanguageToggle/LanguageToggle";
import { ThemeToggle } from "../../../shared/ui/ThemeToggle/ThemeToggle";
//import { WaveLoader } from "../../../shared/ui/WaveLoader/WaveLoader";
import Loader from "../../../shared/ui/Loader/Loader";

type Props = {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading?: boolean;
  onScroll?: () => void;
};

const AUTO_PLAY_INTERVAL = 5000;

function Header({ onScroll }: Props) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
          className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 ${
            index === currentImageIndex
              ? "bg-white w-10 shadow-lg"
              : "bg-white/40 w-2 hover:bg-white/70 hover:w-3"
          }`}
          onClick={() => {
            setIsAutoPlaying(false);
            setCurrentImageIndex(index);
          }}
          aria-label={t("header.ariaLabels.goToImage", { index: index + 1 })}
        />
      )),
    [currentImageIndex]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex-col flex items-center justify-center bg-[#f9f6f0] dark:bg-[#0a0a0a] transition-colors duration-300">
        {/* <div className="text-blue-600 text-2xl font-bold tracking-wider animate-pulse">
           Loading
         </div>
        <WaveLoader /> */}
        <ThemeToggle />
        <LanguageToggle />
        <Loader />
      </div>
    );
  }

  return (
    <header className="relative h-screen overflow-hidden">
      <ThemeToggle />
      <LanguageToggle />
      {backgroundImages.map((image, index) => (
        <BackgroundImage
          key={index}
          src={image}
          isVisible={index === currentImageIndex}
        />
      ))}

      <div className="absolute top-8 left-8 text-white/80 font-light tracking-widest text-sm">
        <span className="text-xl">
          {String(currentImageIndex + 1).padStart(2, "0")}
        </span>
        <span className="mx-2">/</span>
        <span>{String(backgroundImages.length).padStart(2, "0")}</span>
      </div>

      <button
        onClick={toggleAutoPlay}
        className="absolute top-8 right-20 z-50 inline-flex items-center justify-center w-12 h-12 bg-black/20 dark:bg-white/20 backdrop-blur-sm text-white dark:text-white hover:bg-black/40 dark:hover:bg-white/40 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
        aria-label={
          isAutoPlaying
            ? t("header.ariaLabels.pauseSlideshow")
            : t("header.ariaLabels.playSlideshow")
        }
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      <div className="absolute z-30 inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={handlePrevious}
          className="pointer-events-auto z-100 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black/20 dark:bg-white/20 backdrop-blur-sm text-white dark:text-white hover:bg-black/40 dark:hover:bg-white/40 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 group"
          aria-label={t("header.ariaLabels.previousImage")}
        >
          <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto z-100 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black/20 dark:bg-white/20 backdrop-blur-sm text-white dark:text-white hover:bg-black/40 dark:hover:bg-white/40 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 group"
          aria-label={t("header.ariaLabels.nextImage")}
        >
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 select-none">
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 className="rounded-lg text-4xl sm:text-5xl md:text-7xl font-light tracking-[0.2em] mb-6 transition-all duration-700 animate-fade-in">
            {t("header.title")}
          </h1>
          <p className="rounded-lg text-lg sm:text-xl md:text-2xl font-light tracking-wider max-w-3xl mx-auto leading-relaxed text-white/90">
            {t("header.subtitle")}
            <br className="hidden sm:block" />
            {t("header.subtitleLine2")}
          </p>
        </div>
        <button
          onClick={onScroll}
          className="absolute bottom-5 z-30 pointer-events-auto inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-black/20 dark:bg-white/20 backdrop-blur-sm text-white dark:text-white hover:bg-[#34a798] dark:hover:bg-[#34a798] rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2 animate-bounce"
          aria-label={t("header.ariaLabels.seeMoreDetails")}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2 px-4">
        {navigationDots}
      </div>
    </header>
  );
}

export { Header };
