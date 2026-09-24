import React, { useState, useMemo } from 'react';
import { VENDORS_DATA } from '../data/weddingData';
import { Vendor, VendorCategory, VendorBooking } from '../types';
import { VendorBookingModal } from './VendorBookingModal';
import { 
  Search, 
  Star, 
  MapPin, 
  Check, 
  Filter, 
  CalendarCheck2, 
  Sparkles, 
  ShieldCheck,
  Building2,
  Camera,
  Flower2,
  Utensils,
  Music,
  Palette,
  Sparkle
} from 'lucide-react';

interface VendorBookingSystemProps {
  onAddBooking: (booking: Omit<VendorBooking, 'id' | 'createdAt' | 'status'>) => void;
  bookings: VendorBooking[];
  onOpenBookingsDrawer: () => void;
  activeCategory?: VendorCategory;
  onSelectCategory?: (category: VendorCategory) => void;
}

export const VendorBookingSystem: React.FC<VendorBookingSystemProps> = ({
  onAddBooking,
  bookings,
  onOpenBookingsDrawer,
  activeCategory,
  onSelectCategory,
}) => {
  const [internalCategory, setInternalCategory] = useState<VendorCategory>('all');
  const selectedCategory = activeCategory ?? internalCategory;

  const handleCategoryClick = (catId: VendorCategory) => {
    setInternalCategory(catId);
    onSelectCategory?.(catId);
  };

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>('all');
  const [selectedVendorForBooking, setSelectedVendorForBooking] = useState<Vendor | null>(null);

  const categories: { id: VendorCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Vendors', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'venues', label: 'Venues', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'photography', label: 'Photo & Film', icon: <Camera className="w-3.5 h-3.5" /> },
    { id: 'florals', label: 'Florals', icon: <Flower2 className="w-3.5 h-3.5" /> },
    { id: 'catering', label: 'Catering & Cakes', icon: <Utensils className="w-3.5 h-3.5" /> },
    { id: 'music', label: 'Music & DJ', icon: <Music className="w-3.5 h-3.5" /> },
    { id: 'beauty', label: 'Hair & Beauty', icon: <Palette className="w-3.5 h-3.5" /> },
    { id: 'decor', label: 'Decor & Lighting', icon: <Sparkle className="w-3.5 h-3.5" /> },
  ];

  const filteredVendors = useMemo(() => {
    return VENDORS_DATA.filter((vendor) => {
      const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        selectedPriceTier === 'all' || vendor.priceTier === selectedPriceTier;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchQuery, selectedPriceTier]);

  return (
    <section id="vendors" className="py-20 lg:py-28 bg-[#FAF7F5] border-b border-[#EDE1DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[#BF7E6F] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase">
                Vendor Booking System
              </span>
              <span className="bg-[#EBDAD5] text-[#8C4F42] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Vetted Partners
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2B2321] tracking-tight">
              Curated Wedding Professionals
            </h2>
            <p className="text-sm text-[#70615E] leading-relaxed">
              Explore our exclusive network of award-winning venues, photographers, florists, and caterers. Select customizable packages and secure your date with seamless online booking.
            </p>
          </div>

          {/* Quick Stats or Booking Drawer summary */}
          <div className="flex items-center gap-3">
            {bookings.length > 0 && (
              <button
                onClick={onOpenBookingsDrawer}
                className="bg-white border border-[#BF7E6F] text-[#BF7E6F] hover:bg-[#FAF0ED] px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-2xs transition-colors cursor-pointer"
              >
                <CalendarCheck2 className="w-4 h-4" />
                <span>My Bookings ({bookings.length})</span>
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#6B5A57] bg-white px-3 py-2 rounded-lg border border-[#EDE1DC]">
              <ShieldCheck className="w-4 h-4 text-[#2F7A44]" />
              <span>Verified contracts & escrow</span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EDE1DC] shadow-xs space-y-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#BF7E6F] text-white shadow-xs'
                      : 'bg-[#FAF6F4] text-[#635350] hover:bg-[#F2E7E3] hover:text-[#2B2321]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search and Secondary Filter Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-[#F4ECE8]">
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-[#9C8C88] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search vendors by name, style, or city (e.g. Montecito, Film, Strings)..."
                className="w-full bg-[#FAF7F5] border border-[#E5D7D2] rounded-lg pl-9.5 pr-4 py-2.5 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F] focus:bg-white"
              />
            </div>

            {/* Price Tier Dropdown */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#9C8C88] flex-shrink-0" />
              <span className="text-xs text-[#7A6B68] whitespace-nowrap font-medium">Price Tier:</span>
              <select
                value={selectedPriceTier}
                onChange={(e) => setSelectedPriceTier(e.target.value)}
                className="w-full bg-[#FAF7F5] border border-[#E5D7D2] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F] focus:bg-white cursor-pointer"
              >
                <option value="all">All Budgets ($ - $$$$)</option>
                <option value="$$">Moderate ($$)</option>
                <option value="$$$">Luxury ($$$)</option>
                <option value="$$$$">Ultra-Luxury ($$$$)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Vendors Grid */}
        {filteredVendors.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#EDE1DC] p-8">
            <p className="text-sm font-semibold text-[#2B2321]">No vendors found matching your criteria</p>
            <p className="text-xs text-[#7A6B68] mt-1">Try changing your search term or category filters.</p>
            <button
              onClick={() => {
                handleCategoryClick('all');
                setSearchQuery('');
                setSelectedPriceTier('all');
              }}
              className="mt-4 text-xs font-semibold text-[#BF7E6F] underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVendors.map((vendor) => {
              const hasExistingBooking = bookings.some((b) => b.vendorId === vendor.id);

              return (
                <div
                  key={vendor.id}
                  id={`vendor-card-${vendor.id}`}
                  className="bg-white rounded-2xl border border-[#EDE1DC] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Image and Badges */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                    {/* Category & Status Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-[#FAF7F5]/95 backdrop-blur-xs text-[#4F3E3B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-2xs">
                        {vendor.categoryLabel}
                      </span>
                      {vendor.badges?.map((badge, i) => (
                        <span
                          key={i}
                          className="bg-[#BF7E6F]/95 backdrop-blur-xs text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md shadow-2xs"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Booked Indicator if booked */}
                    {hasExistingBooking && (
                      <div className="absolute top-3 right-3 bg-[#2F7A44] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <Check className="w-3 h-3 stroke-[3]" />
                        Booked
                      </div>
                    )}

                    {/* Location & Rating overlay at bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 text-white/90 drop-shadow-xs text-[11px]">
                        <MapPin className="w-3 h-3 text-[#E0A159]" />
                        {vendor.location}
                      </span>
                      <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md font-semibold text-[11px]">
                        <Star className="w-3 h-3 text-[#E0A159] fill-current" />
                        {vendor.rating} ({vendor.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif-luxury text-lg font-bold text-[#2B2321] leading-snug group-hover:text-[#BF7E6F] transition-colors">
                          {vendor.name}
                        </h3>
                        <span className="text-[11px] font-bold text-[#736461] bg-[#FAF5F2] px-2 py-0.5 rounded-sm">
                          {vendor.priceTier}
                        </span>
                      </div>

                      <p className="text-xs text-[#70615E] leading-relaxed line-clamp-2">
                        {vendor.description}
                      </p>

                      {/* Highlights */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {vendor.highlights.map((hl, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-[#FAF6F4] text-[#695B58] px-2 py-0.5 rounded-md border border-[#F0E4E0]"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer price & action button */}
                    <div className="pt-4 border-t border-[#F2E8E4] flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#8A7A76] block">
                          Packages From
                        </span>
                        <span className="font-serif-luxury text-lg font-bold text-[#BF7E6F]">
                          ₹{vendor.startingPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button
                        id={`book-vendor-btn-${vendor.id}`}
                        onClick={() => setSelectedVendorForBooking(vendor)}
                        className={`text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-md transition-all cursor-pointer shadow-xs ${
                          hasExistingBooking
                            ? 'bg-[#EFE6E2] text-[#4F4340] hover:bg-[#E8DCD6]'
                            : 'bg-[#BF7E6F] hover:bg-[#A96A5B] text-white hover:shadow-md'
                        }`}
                      >
                        {hasExistingBooking ? 'Modify / Add' : 'Book Vendor'}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Vendor Booking Modal */}
      {selectedVendorForBooking && (
        <VendorBookingModal
          vendor={selectedVendorForBooking}
          onClose={() => setSelectedVendorForBooking(null)}
          onConfirmBooking={(booking) => {
            onAddBooking(booking);
          }}
        />
      )}
    </section>
  );
};
