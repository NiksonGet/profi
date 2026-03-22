import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  { id: 1, image: '/Photo/review1.png', caption: 'Отзыв №1' },
  { id: 2, image: '/Photo/review2.png', caption: 'Отзыв №2' },
  { id: 3, image: '/Photo/review3.png', caption: 'Отзыв №3' },
  { id: 4, image: '/Photo/review4.png', caption: 'Отзыв №4' },
  { id: 5, image: '/Photo/review5.png', caption: 'Отзыв №5' },
  { id: 6, image: '/Photo/review6.png', caption: 'Отзыв №6' },
  { id: 7, image: '/Photo/review7.png', caption: 'Отзыв №7' },
];

export function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <div
      className="relative w-full border-8 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-[#FFF9F0]"
      style={{ height: '360px' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Слайды */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center pb-14 px-14"
        >
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].caption}
            className="max-w-full max-h-full object-contain rounded-xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Подпись */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#FFE800] border-t-4 border-black flex items-center justify-center z-10">
        <p className="font-black text-lg uppercase tracking-wide">
          {reviews[currentIndex].caption}
        </p>
      </div>

      {/* Кнопки */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#FFE800] border-4 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 transition-all"
      >
        <ChevronLeft className="w-5 h-5 stroke-[3]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#FFE800] border-4 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 transition-all"
      >
        <ChevronRight className="w-5 h-5 stroke-[3]" />
      </button>
    </div>
  );
}
