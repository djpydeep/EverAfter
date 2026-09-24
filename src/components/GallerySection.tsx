import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/weddingData';
import { GalleryItem } from '../types';
import { X, MapPin, Calendar, ExternalLink, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenConsultation: () => void;
  onExploreVendors: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenConsultation,
  onExploreVendors,
}) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [fullGalleryModalOpen, setFullGalleryModalOpen] = useState(false);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF7F5] border-b border-[#EDE1DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching image */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="space-y-1">
            <span className="text-[#BF7E6F] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase block">
              Our Work
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#2B2321] tracking-tight">
              Real Weddings, Real Stories
            </h2>
          </div>

          <button
            id="view-gallery-button"
            onClick={() => setFullGalleryModalOpen(true)}
            className="self-start sm:self-auto border border-[#DFC8C1] hover:border-[#BF7E6F] hover:bg-white text-[#574A47] hover:text-[#BF7E6F] text-xs tracking-[0.15em] font-semibold uppercase px-6 py-2.5 rounded-md transition-all duration-200 cursor-pointer shadow-2xs"
          >
            View Gallery
          </button>
        </div>

        {/* 5-Photo Row matching the exact image structure */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-thumb-${index}`}
              onClick={() => setSelectedItem(item)}
              className="group relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E8C5BE] font-semibold">
                  {item.season}
                </span>
                <h4 className="font-serif-luxury text-sm font-bold leading-tight mt-0.5">
                  {item.couple}
                </h4>
                <p className="text-[11px] text-white/80 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-[#E0A159]" />
                  {item.location}
                </p>
              </div>

              {/* Discreet index watermark for craft */}
              <div className="absolute top-2.5 right-2.5 bg-black/30 backdrop-blur-xs text-white/90 text-[10px] font-mono px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Wedding Story Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#EDE1DC]">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-72 sm:h-80 overflow-hidden relative">
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#E8C5BE] font-semibold">
                  {selectedItem.season} • {selectedItem.location}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
                  {selectedItem.couple}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <p className="text-sm text-[#5C4D4A] leading-relaxed italic">
                "{selectedItem.caption}"
              </p>

              {selectedItem.featuredVendors && (
                <div className="pt-3 border-t border-[#F2E8E4]">
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#8A7A76] mb-2">
                    Featured Wedding Vendors
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.featuredVendors.map((v, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#FAF5F2] border border-[#EBDAD5] text-[#554744] px-3 py-1 rounded-full font-medium"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-3 border-t border-[#F2E8E4]">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onExploreVendors();
                  }}
                  className="text-xs font-semibold text-[#BF7E6F] hover:text-[#9A584A] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book vendors from this celebration</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenConsultation();
                  }}
                  className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-md transition-colors cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Gallery Modal */}
      {fullGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#FAF7F5] rounded-2xl overflow-hidden shadow-2xl border border-[#EDE1DC] max-h-[90vh] flex flex-col">
            <div className="p-6 bg-white border-b border-[#EDE1DC] flex items-center justify-between">
              <div>
                <span className="text-xs text-[#BF7E6F] uppercase tracking-widest font-bold">
                  EverAfter Weddings Portfolio
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#2B2321]">
                  Complete Wedding Gallery
                </h3>
              </div>
              <button
                onClick={() => setFullGalleryModalOpen(false)}
                className="p-2 text-[#7A6B68] hover:text-[#2B2321] rounded-full hover:bg-[#FAF0ED] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setFullGalleryModalOpen(false);
                    setSelectedItem(item);
                  }}
                  className="group rounded-xl overflow-hidden bg-white border border-[#EDE1DC] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] text-[#BF7E6F] uppercase font-bold tracking-wider">
                      {item.season}
                    </span>
                    <h4 className="font-serif-luxury text-base font-bold text-[#2B2321]">
                      {item.couple}
                    </h4>
                    <p className="text-xs text-[#7A6B68] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#BF7E6F]" />
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-[#EDE1DC] text-center">
              <button
                onClick={() => {
                  setFullGalleryModalOpen(false);
                  onOpenConsultation();
                }}
                className="bg-[#BF7E6F] text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-md hover:bg-[#A96A5B] transition-colors cursor-pointer"
              >
                Plan a Wedding Like These
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
