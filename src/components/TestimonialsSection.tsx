import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/weddingData';
import { BotanicalSketch } from './FloralIcons';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 lg:py-24 bg-[#FAF7F5] border-b border-[#EDE1DC] overflow-hidden">
      
      {/* Left Botanical line art sketch matching image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 opacity-35 pointer-events-none hidden md:block">
        <BotanicalSketch className="w-56 h-72 text-[#BF7E6F]" />
      </div>

      {/* Right Botanical line art sketch matching image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 opacity-35 pointer-events-none hidden md:block">
        <BotanicalSketch className="w-56 h-72 text-[#BF7E6F]" flip={true} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative Quote Mark */}
        <div className="text-center mb-4">
          <span className="font-serif text-5xl sm:text-6xl text-[#BF7E6F] leading-none select-none inline-block">
            “
          </span>
        </div>

        {/* Testimonial Quote & Carousel Content */}
        <div className="text-center space-y-5 px-4 sm:px-12 min-h-[140px] flex flex-col justify-center">
          <blockquote className="font-serif-luxury text-xl sm:text-2xl lg:text-[26px] font-normal text-[#2B2321] leading-relaxed tracking-tight transition-all duration-300">
            "{current.quote}"
          </blockquote>

          {/* Author */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-medium text-[#685956] tracking-wide">
              — {current.author}
            </p>

            {/* 5 Stars matching image */}
            <div className="flex items-center justify-center gap-1 text-[#E0A159]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows matching image */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            id="testimonial-prev-arrow"
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-[#DFC8C1] bg-white hover:bg-[#FAF0ED] text-[#635350] hover:text-[#BF7E6F] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 bg-[#BF7E6F]'
                    : 'w-1.5 bg-[#D8C4BE] hover:bg-[#BF7E6F]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            id="testimonial-next-arrow"
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-[#DFC8C1] bg-white hover:bg-[#FAF0ED] text-[#635350] hover:text-[#BF7E6F] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
