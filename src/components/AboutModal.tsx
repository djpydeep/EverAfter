import React from 'react';
import { X, Award, Users, HeartHandshake, Sparkles } from 'lucide-react';
import { LogoSprig } from './FloralIcons';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF7F5] rounded-2xl overflow-hidden shadow-2xl border border-[#EDE1DC] max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-white border-b border-[#EDE1DC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif-luxury text-2xl font-bold text-[#2B2321]">
              EverAfter
            </span>
            <LogoSprig className="w-5 h-5 text-[#BF7E6F]" />
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FAF0ED] text-[#7A6B68] hover:text-[#2B2321] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#BF7E6F] font-bold">
              Our Heritage & Vision
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2B2321]">
              Crafting Timeless Weddings With Architectural Precision & Heart
            </h3>
          </div>

          <p className="text-sm text-[#5D4E4B] leading-relaxed">
            EverAfter Weddings is an award-winning luxury wedding planning studio based in California. Over the past ten years, our team has curated over 500 bespoke celebrations, uniting discerning couples with top-tier culinary artists, floral sculptors, and iconic venues.
          </p>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#EDE1DC] space-y-2">
              <Award className="w-5 h-5 text-[#BF7E6F]" />
              <h4 className="text-xs font-bold text-[#2B2321] uppercase tracking-wider">Vetted Excellence</h4>
              <p className="text-[11px] text-[#786A67] leading-relaxed">
                Only the top 5% of licensed, insured, and tested vendors earn a place in our partner registry.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EDE1DC] space-y-2">
              <Users className="w-5 h-5 text-[#BF7E6F]" />
              <h4 className="text-xs font-bold text-[#2B2321] uppercase tracking-wider">Flawless Flow</h4>
              <p className="text-[11px] text-[#786A67] leading-relaxed">
                Minute-by-minute logistical master timelines ensure you and your families are present in every second.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EDE1DC] space-y-2">
              <HeartHandshake className="w-5 h-5 text-[#BF7E6F]" />
              <h4 className="text-xs font-bold text-[#2B2321] uppercase tracking-wider">Personalized Curation</h4>
              <p className="text-[11px] text-[#786A67] leading-relaxed">
                No cookie-cutter packages. Every color swatch, melody, and table setting mirrors your romance.
              </p>
            </div>
          </div>

          {/* Testimonial callout */}
          <div className="bg-[#FAF0ED] p-5 rounded-xl border border-[#E9D4CE] space-y-1">
            <p className="text-xs font-serif-luxury text-[#453734] italic">
              "We consider it the highest privilege to turn the beginning of your married life into an enduring masterpiece."
            </p>
            <p className="text-[11px] text-[#8C5245] font-semibold">
              — Madeline Ross, Principal Creative Director
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-white border-t border-[#EDE1DC] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-md border border-[#DFC8C1] text-xs font-semibold text-[#685A57] hover:bg-[#FAF5F2] cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-md transition-colors cursor-pointer shadow-xs"
          >
            Book a Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
