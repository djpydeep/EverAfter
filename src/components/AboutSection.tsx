import React from 'react';
import { BotanicalSketch } from './FloralIcons';
import { ABOUT_BANQUET_IMAGE } from '../data/weddingData';

interface AboutSectionProps {
  onMoreAboutUsClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onMoreAboutUsClick }) => {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-[#FAF7F5]">
      {/* Delicate floral line art botanical sketch on right background matching image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-30 pointer-events-none hidden md:block">
        <BotanicalSketch className="w-80 h-96 text-[#BF7E6F]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Banquet table photo with crystal chandeliers */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Soft border offset shadow */}
              <div className="absolute -inset-3 bg-[#F2E5E1] rounded-2xl -rotate-1 -z-10" />
              <div className="rounded-xl overflow-hidden shadow-xl border border-[#EDE1DC] bg-white">
                <img
                  src={ABOUT_BANQUET_IMAGE}
                  alt="Luxurious wedding banquet table with crystal chandeliers and floral centerpieces"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-md border border-[#E8D9D4]">
                <p className="font-serif-luxury text-2xl font-bold text-[#BF7E6F] leading-none">
                  10+
                </p>
                <p className="text-[11px] font-medium text-[#736461] uppercase tracking-wider mt-1">
                  Years of Magic
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy matching image */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            {/* Tag */}
            <div>
              <span className="text-[#BF7E6F] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase">
                About Us
              </span>
            </div>

            {/* Headline with script accent */}
            <div className="space-y-1">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2B2321] tracking-tight leading-[1.18]">
                We Don't Just Plan Weddings,
              </h2>
              <span className="font-script text-4xl sm:text-5xl lg:text-[54px] text-[#BF7E6F] block leading-tight pt-1">
                We Create Memories
              </span>
            </div>

            {/* Exact paragraph from image */}
            <p className="text-[#685A57] text-base leading-relaxed max-w-xl font-normal">
              At EverAfter Weddings, we believe every love story is unique. Our passion is to turn your dreams into a celebration that reflects your love, style, and personality.
            </p>

            {/* Additional details for rich user experience */}
            <p className="text-[#7F716E] text-sm leading-relaxed max-w-xl font-normal">
              From historic European-style villas to modern oceanfront bluffs, our dedicated planners partner with world-class artisans to orchestrate flawless timelines, bespoke aesthetics, and emotional milestones you will cherish forever.
            </p>

            {/* "MORE ABOUT US" button */}
            <div className="pt-2">
              <button
                id="about-more-button"
                onClick={onMoreAboutUsClick}
                className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-[12px] tracking-[0.14em] font-semibold uppercase px-7 py-3.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                More About Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
