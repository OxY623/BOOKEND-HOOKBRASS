import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "../../assets/types";

function ImageModal({
  item,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}) {
  return (
    <div className="fixed inset-0 bg-[#1a1814]/95 dark:bg-[#0a0a0a]/95 z-50 flex items-center justify-center transition-colors duration-300">
      <div className="relative w-full max-w-6xl mx-4">
        <button
          title="Close"
          onClick={onClose}
          className="absolute top-11 sm:top-4 right-4 z-10 inline-flex items-center justify-center w-12 h-12 bg-[#1a1814]/90 dark:bg-[#0a0a0a]/90 md:bg-transparent backdrop-blur-sm text-[#e5e1d8] dark:text-[#c2beb6] hover:text-white dark:hover:text-white hover:bg-[#34a798]/20 dark:hover:bg-[#34a798]/20 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative">
          {hasPrevious && (
            <button
              title="Previous"
              onClick={onPrevious}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 bg-[#1a1814]/90 dark:bg-[#0a0a0a]/90 md:bg-transparent backdrop-blur-sm text-[#e5e1d8] dark:text-[#c2beb6] hover:text-white dark:hover:text-white hover:bg-[#34a798]/20 dark:hover:bg-[#34a798]/20 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              title="Next"
              onClick={onNext}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 inline-flex items-center justify-center w-12 h-12 bg-[#1a1814]/90 dark:bg-[#0a0a0a]/90 md:bg-transparent backdrop-blur-sm text-[#e5e1d8] dark:text-[#c2beb6] hover:text-white dark:hover:text-white hover:bg-[#34a798]/20 dark:hover:bg-[#34a798]/20 rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#34a798] focus:ring-offset-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          <img
            src={item.src}
            alt={item.title}
            className="w-full h-[70vh] object-contain"
          />
        </div>

        <div className="bg-[#f4f1ea] dark:bg-[#1a1814] p-6 mt-4 transition-colors duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-light text-[#2c2820] dark:text-[#e5e1d8] transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-xl text-[#5c5648] dark:text-[#c2beb6] transition-colors duration-300">
              {item.price}
            </p>
          </div>
          <p className="text-[#5c5648] dark:text-[#c2beb6] leading-relaxed transition-colors duration-300">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
