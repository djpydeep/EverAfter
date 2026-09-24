import React, { useState } from 'react';
import { WEDDING_PACKAGES } from '../data/weddingData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
  onOpenConsultation: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onOpenConsultation,
}) => {
  const [activePkgId, setActivePkgId] = useState('pkg-full');

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white border-b border-[#EDE1DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[#BF7E6F] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase block">
            Investment & Tiers
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#2B2321] tracking-tight">
            Curated Planning Packages
          </h2>
          <p className="text-sm text-[#70615E] pt-1">
            Transparent collections engineered to fit your distinct timeline, aesthetic ambition, and guest count.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEDDING_PACKAGES.map((pkg) => {
            const isFeatured = pkg.popular;
            const isSelected = activePkgId === pkg.id;

            return (
              <div
                key={pkg.id}
                id={`package-card-${pkg.id}`}
                onClick={() => setActivePkgId(pkg.id)}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 border cursor-pointer ${
                  isFeatured
                    ? 'bg-[#FAF4F2] border-[#BF7E6F] ring-1 ring-[#BF7E6F]/30 shadow-md'
                    : 'bg-white border-[#EAE0DC] hover:border-[#DEC5BD] hover:shadow-sm'
                }`}
              >
                {/* Popular pill */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#BF7E6F] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-2xs">
                    Most Chosen
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#2B2321]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#7A6B68] mt-1 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F2E7E3]">
                    <span className="text-[11px] uppercase tracking-wider text-[#8A7A76] block">
                      Starting Investment
                    </span>
                    <span className="font-serif-luxury text-3xl font-bold text-[#BF7E6F]">
                      {pkg.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B5C59] leading-relaxed pt-1">
                    {pkg.description}
                  </p>

                  <div className="pt-3 border-t border-[#F2E7E3] space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A3C39] block">
                      Included Highlights:
                    </span>
                    <ul className="space-y-2">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="text-xs text-[#524441] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#BF7E6F] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F2E7E3]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsultation(pkg.name);
                    }}
                    className={`w-full py-2.5 rounded-md text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-[#BF7E6F] hover:bg-[#A96A5B] text-white shadow-xs'
                        : 'bg-[#FAF5F2] hover:bg-[#F2E6E2] text-[#4A3C39] border border-[#DFC8C1]'
                    }`}
                  >
                    Select & Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Bespoke Callout */}
        <div className="mt-12 bg-[#FAF5F2] rounded-2xl p-6 sm:p-8 border border-[#EBDAD5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-luxury text-xl font-bold text-[#2B2321]">
              Need a Completely Tailored Custom Package?
            </h4>
            <p className="text-xs text-[#736461] max-w-xl">
              Planning a weekend celebration, intimate elopement, or fusion multi-cultural ceremony? We will engineer a custom planning blueprint specific to your event scope.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Custom Bespoke Wedding Package')}
            className="bg-[#2B2321] hover:bg-[#453835] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Create Custom Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
