import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';

const reviews = [
  { id: 1, image: 'https://picsum.photos/seed/review1/800/600', caption: 'Отзыв родителя №1' },
  { id: 2, image: 'https://picsum.photos/seed/review2/800/600', caption: 'Отзыв родителя №2' },
  { id: 3, image: 'https://picsum.photos/seed/review3/800/600', caption: 'Отзыв родителя №3' },
  { id: 4, image: 'https://picsum.photos/seed/review4/800/600', caption: 'Отзыв родителя №4' },
  { id: 5, image: 'https://picsum.photos/seed/review5/800/600', caption: 'Отзыв родителя №5' },
  { id: 6, image: 'https://picsum.photos/seed/review6/800/600', caption: 'Отзыв родителя №6' },
  { id: 7, image: 'https://picsum.photos/seed/review7/800/600', caption: 'Отзыв родителя №7' },
];

export function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipeThreshold = 60;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x <= -swipeThreshold) {
      nextSlide();
      return;
    }

    if (info.offset.x >= swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10">
      <div className="overflow-hidden border-8 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white relative aspect-[4/3]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#FFF9F0]"
            style={{ touchAction: 'pan-y' }}
          >
            <img
              src={reviews[currentIndex].image}
              alt={reviews[currentIndex].caption}
              className="w-full h-full object-cover pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4 text-center font-bold text-lg">
              {reviews[currentIndex].caption}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        type="button"
        className="absolute top-1/2 left-2 md:-left-12 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#FFE800] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all z-10"
      >
        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 stroke-[3]" />
      </button>

      <button
        onClick={nextSlide}
        type="button"
        className="absolute top-1/2 right-2 md:-right-12 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#FFE800] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all z-10"
      >
        <ChevronRight className="w-5 h-5 md:w-8 md:h-8 stroke-[3]" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 border-black transition-all ${
              index === currentIndex ? 'bg-[#FF5E00] scale-125' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
