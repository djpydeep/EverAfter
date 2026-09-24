import React from 'react';
import { X, Play, Heart, Sparkles } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanWedding: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onPlanWedding }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF7F5] rounded-2xl overflow-hidden shadow-2xl border border-[#EDE1DC]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
          aria-label="Close story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Cinema showcase container */}
        <div className="relative h-72 sm:h-96 bg-[#1A1514] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
            alt="Wedding cinematic still"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-radial from-transparent to-black/80" />

          {/* Central Play Badge */}
          <div className="relative z-10 text-center space-y-3 p-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#BF7E6F]/90 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <p className="font-serif-luxury text-xl sm:text-2xl text-white font-medium drop-shadow-md">
              "The Art of Love & Celebration"
            </p>
            <p className="text-xs text-white/80 tracking-widest uppercase font-mono">
              Official EverAfter Weddings Film • 2:45 min
            </p>
          </div>
        </div>

        {/* Story copy & takeaways */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#BF7E6F] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Our Core Philosophy
          </div>

          <p className="text-sm text-[#574946] leading-relaxed">
            Founded with a conviction that planning a wedding should feel just as romantic as the celebration itself, EverAfter Weddings transforms milestones into bespoke sensory journeys. From the first sketch of your floral arbor to the quiet moments right before you walk down the aisle, we craft memories that linger for decades.
          </p>

          <div className="pt-3 border-t border-[#EDE1DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#7A6B68]">
              <Heart className="w-4 h-4 text-[#BF7E6F] fill-current" />
              <span>Over 500 love stories brought to life across California & destinations.</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onPlanWedding();
              }}
              className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-md transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              Plan Your Wedding With Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
