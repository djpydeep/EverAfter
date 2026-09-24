import React from 'react';
import { Play, Star } from 'lucide-react';
import { HERO_COUPLE_IMAGE } from '../data/weddingData';

interface HeroProps {
  onPlanWeddingClick: () => void;
  onWatchStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlanWeddingClick,
  onWatchStoryClick,
}) => {
  const coupleAvatars = [
    {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      alt: 'Happy Bride Emily'
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      alt: 'Groom David'
    },
    {
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      alt: 'Bride Jessica'
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle atmospheric gradient */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F3E5E1]/60 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#EFE4DE]/40 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Tagline eyebrow */}
            <div className="inline-block">
              <span className="text-[#BF7E6F] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase">
                We Plan. You Celebrate.
              </span>
            </div>

            {/* Main Headline with script accent */}
            <div className="space-y-1">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[54px] font-medium text-[#2B2321] tracking-tight leading-[1.12]">
                Your Dream Wedding,
              </h1>
              <span className="font-script text-5xl sm:text-6xl lg:text-[68px] text-[#BF7E6F] block leading-none pt-1 pb-2">
                Perfectly Planned
              </span>
            </div>

            {/* Subtext */}
            <p className="text-[#685A57] text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              From intimate ceremonies to grand celebrations, we create moments that last a lifetime.
            </p>

            {/* Action buttons matching image */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-plan-wedding-button"
                onClick={onPlanWeddingClick}
                className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-[12px] tracking-[0.15em] font-semibold uppercase px-7 py-3.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                Plan Your Wedding
              </button>

              <button
                id="hero-watch-story-button"
                onClick={onWatchStoryClick}
                className="inline-flex items-center gap-2.5 bg-[#FAF7F5] hover:bg-[#F2E8E4] border border-[#DFC8C1] text-[#615350] hover:text-[#2B2321] text-[12px] tracking-[0.14em] font-semibold uppercase px-6 py-3.5 rounded-md transition-all duration-200 cursor-pointer group"
              >
                <span className="w-5 h-5 rounded-full bg-[#BF7E6F]/20 text-[#BF7E6F] group-hover:bg-[#BF7E6F] group-hover:text-white flex items-center justify-center transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Social Proof matching image */}
            <div className="flex items-center gap-4 pt-4 sm:pt-6 border-t border-[#EDE1DC]/80 max-w-md">
              <div className="flex -space-x-2.5 overflow-hidden">
                {coupleAvatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar.url}
                    alt={avatar.alt}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAF7F5] object-cover"
                  />
                ))}
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-[#2D2625] tracking-wide">
                  Trusted by <span className="text-[#BF7E6F]">500+</span> Couples
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-[#D69251]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#E0A159]" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-[#7A6B68]">
                    <strong className="text-[#3A2F2D]">4.9</strong> (120 Reviews)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Image (Bride & Groom in Tuxedo and Veil) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Soft decorative background offset frame */}
              <div className="absolute -inset-2 bg-[#F3E7E3] rounded-2xl transform rotate-1 -z-10" />
              <div className="overflow-hidden rounded-xl shadow-lg border border-[#EDE1DC] bg-white">
                <img
                  src={HERO_COUPLE_IMAGE}
                  alt="Bride and groom sharing an intimate joyful moment"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Subtle floating quote chip */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-lg shadow-md border border-[#EBDAD5] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF0ED] text-[#BF7E6F] flex items-center justify-center font-serif text-lg font-bold">
                  💍
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#2B2321] tracking-wide uppercase">
                    Unforgettable Vows
                  </p>
                  <p className="text-[11px] text-[#7A6B68]">
                    Personalized luxury experiences
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
