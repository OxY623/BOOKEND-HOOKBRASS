import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GalleryItem } from "../../../App";


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
                 title="Close"
                 onClick={onClose}
                 className="absolute -top-9 right-0 text-[#e5e1d8] hover:text-[#c2beb6] transition-colors"
               >
                 <X className="w-8 h-8" />
               </button>
               
               <div className="relative">
                 {hasPrevious && (
                   <button 
                  title="Previous"
                     onClick={onPrevious}
                     className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e5e1d8] hover:text-[#c2beb6] transition-colors"
                   >
                     <ChevronLeft className="w-8 h-8" />
                   </button>
                 )}
                 
                 {hasNext && (
                   <button 
                     title="Next"
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

export default ImageModal