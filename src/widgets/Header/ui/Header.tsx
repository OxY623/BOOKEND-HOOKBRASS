import { ArrowLeft, ArrowRight, ChevronDown, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { backgroundImages } from "../../../shared/assets/data";
import { LanguageToggle } from "../../../shared/ui/LanguageToggle/LanguageToggle";
import { ThemeToggle } from "../../../shared/ui/ThemeToggle/ThemeToggle";

const AUTO_PLAY_INTERVAL = 5000;

type Props = {
  onScroll?: () => void;
};

function Header({ onScroll }: Props) {
  const { t } = useTranslation();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);

  /**
   * Загружаем только первую картинку.
   * Она отвечает за LCP.
   */
  useEffect(() => {
    const img = new Image();

    img.src = backgroundImages[0];

    img.onload = () => {
      setIsFirstImageLoaded(true);

      // После первого экрана начинаем прогревать остальные
      backgroundImages.slice(1).forEach((src) => {
        const preloadImg = new Image();
        preloadImg.src = src;
      });
    };

    img.onerror = () => {
      setIsFirstImageLoaded(true);
    };
  }, []);

  /**
   * Автопереключение слайдов
   */
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1,
      );
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = useCallback(() => {
    setIsAutoPlaying(false);

    setCurrentImageIndex((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);

    setCurrentImageIndex((prev) =>
      prev === backgroundImages.length - 1 ? 0 : prev + 1,
    );
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev);
  }, []);

  if (!isFirstImageLoaded) {
    return (
      <header className="relative h-screen bg-[#0a0a0a]">
        <ThemeToggle />
        <LanguageToggle />
      </header>
    );
  }

  return (
    <header className="relative h-screen overflow-hidden">
      <ThemeToggle />
      <LanguageToggle />

      {/* Background */}
      <div
        className="
          absolute inset-0
          bg-contain
          bg-no-repeat
          bg-center
          transition-all
          bg-[#f9f6f0] dark:bg-[#0a0a0a]  
          bg-gradient-to-b
    from-white
    via-[#f9f6f0]
    to-white
    dark:from-[#0a0a0a]
    dark:via-[#171717]
    dark:to-black

          duration-700
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.35),
              rgba(0,0,0,0.35)
            ),
            url(${backgroundImages[currentImageIndex]})
          `,
        }}
      />

      {/* Counter */}
      <div
        className="
          absolute top-8 left-8
          text-white/80
          font-light
          tracking-widest
          text-sm
          z-20
        "
      >
        <span className="text-xl">
          {String(currentImageIndex + 1).padStart(2, "0")}
        </span>

        <span className="mx-2">/</span>

        <span>{String(backgroundImages.length).padStart(2, "0")}</span>
      </div>

      {/* Play / Pause */}
      <button
        onClick={toggleAutoPlay}
        className="
          absolute top-8 right-20
          z-30
          inline-flex
          items-center
          justify-center
          w-12 h-12
          rounded-full
          bg-black/20
          backdrop-blur-sm
          text-white
          hover:bg-black/40
          transition-all
        "
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

      {/* Arrows */}
      <div
        className="
          absolute
          inset-x-0
          top-1/2
          -translate-y-1/2
          flex
          justify-between
          px-4 md:px-8
          z-30
        "
      >
        <button
          onClick={handlePrevious}
          className="
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            bg-black/20
            backdrop-blur-sm
            text-white
            hover:bg-black/40
            transition
          "
          aria-label={t("header.ariaLabels.previousImage")}
        >
          <ArrowLeft className="mx-auto" />
        </button>

        <button
          onClick={handleNext}
          className="
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            bg-black/20
            backdrop-blur-sm
            text-white
            hover:bg-black/40
            transition
          "
          aria-label={t("header.ariaLabels.nextImage")}
        >
          <ArrowRight className="mx-auto" />
        </button>
      </div>

      {/* Content */}
      <div
        className="
          relative
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-white
          px-4
          text-center
        "
      >
        <div className="max-w-4xl space-y-8">
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-light
              tracking-[0.2em]
            "
          >
            {t("header.title")}
          </h1>

          <p
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-light
              tracking-wider
              text-white/90
            "
          >
            {t("header.subtitle")}

            <br className="hidden sm:block" />

            {t("header.subtitleLine2")}
          </p>
        </div>

        {/* Scroll */}
        <button
          onClick={onScroll}
          className="
            absolute
            bottom-5
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            bg-black/20
            backdrop-blur-sm
            text-white
            hover:bg-[#34a798]
            transition
            animate-bounce
          "
          aria-label={t("header.ariaLabels.seeMoreDetails")}
        >
          <ChevronDown className="mx-auto" />
        </button>
      </div>

      {/* Dots */}
      <div
        className="
          absolute
          bottom-24
          left-1/2
          -translate-x-1/2
          flex
          gap-2
          z-30
        "
      >
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentImageIndex(index);
            }}
            className={`
              h-2
              rounded-full
              transition-all
              ${index === currentImageIndex
                ? "bg-white w-10"
                : "bg-white/40 w-2"
              }
            `}
            aria-label={t("header.ariaLabels.goToImage", {
              index: index + 1,
            })}
          />
        ))}
      </div>
    </header>
  );
}

export { Header };
