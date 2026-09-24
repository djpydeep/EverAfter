import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  DollarSign, 
  Users, 
  Download, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Camera,
  Flower2,
  Music,
  Palette,
  FileText,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { VendorCategory, VendorBooking } from '../types';

interface BudgetCategory {
  id: string;
  name: string;
  vendorCategory?: VendorCategory;
  defaultPct: number;
  color: string;
  bgLight: string;
  icon: React.ReactNode;
  description: string;
  typicalIncludes: string[];
}

const DEFAULT_CATEGORIES: BudgetCategory[] = [
  {
    id: 'venue-catering',
    name: 'Venue & Catering / Bar',
    vendorCategory: 'venues',
    defaultPct: 42,
    color: '#BF7E6F',
    bgLight: '#FAF0ED',
    icon: <Building2 className="w-4 h-4 text-[#BF7E6F]" />,
    description: 'Reception location rental, multi-course dining, cocktail hour, bar packages, and wedding cake.',
    typicalIncludes: ['Venue buyout & staff', 'Plated dinner & cocktail hour canapés', 'Bar & wine service', 'Artisan tiered wedding cake']
  },
  {
    id: 'photography-cinema',
    name: 'Photography & Cinema',
    vendorCategory: 'photography',
    defaultPct: 14,
    color: '#8A584C',
    bgLight: '#F5ECE9',
    icon: <Camera className="w-4 h-4 text-[#8A584C]" />,
    description: 'Lead photographer, second shooter, full cinematic highlight film, drone aerials, and heirloom album.',
    typicalIncludes: ['8-10 hours dual photo coverage', '4K cinematic highlight film', 'Next-day sneak peeks', 'Digital high-res gallery & album']
  },
  {
    id: 'florals-decor',
    name: 'Florals & Custom Decor',
    vendorCategory: 'florals',
    defaultPct: 12,
    color: '#C69485',
    bgLight: '#FAF3F0',
    icon: <Flower2 className="w-4 h-4 text-[#C69485]" />,
    description: 'Ceremony arch or chuppah, bridal bouquets, luxury centerpieces, specialty lighting, and candle scapes.',
    typicalIncludes: ['Grand ceremony floral installation', 'Bridal & wedding party florals', 'Reception table centerpieces & candles', 'Custom lighting & draping rentals']
  },
  {
    id: 'planning-coordination',
    name: 'Wedding Planning & Design',
    vendorCategory: 'all',
    defaultPct: 10,
    color: '#9C6E62',
    bgLight: '#F6EEEB',
    icon: <Sparkles className="w-4 h-4 text-[#9C6E62]" />,
    description: 'Full-service or partial planning, vendor contract management, 3D design boards, and day-of direction.',
    typicalIncludes: ['Dedicated lead planner & assistants', 'Curated vendor matching & negotiations', 'Minute-by-minute master timeline', 'Rehearsal & day-of coordination']
  },
  {
    id: 'music-entertainment',
    name: 'Music & Entertainment',
    vendorCategory: 'music',
    defaultPct: 8,
    color: '#7D5A50',
    bgLight: '#F4ECE8',
    icon: <Music className="w-4 h-4 text-[#7D5A50]" />,
    description: 'Ceremony classical strings, cocktail hour acoustics, live 8-piece party band, and late-night DJ/MC.',
    typicalIncludes: ['Ceremony string quartet', 'Cocktail hour acoustic soloist', 'Live reception band & DJ/MC', 'Concert audio & lighting rig']
  },
  {
    id: 'attire-rings-beauty',
    name: 'Attire, Hair & Bridal Beauty',
    vendorCategory: 'beauty',
    defaultPct: 6,
    color: '#D8A498',
    bgLight: '#FBF5F3',
    icon: <Palette className="w-4 h-4 text-[#D8A498]" />,
    description: 'Bridal gowns, groom tuxedo or bespoke tailoring, hair trials, airbrush makeup, and accessories.',
    typicalIncludes: ['Wedding gown & tuxedo rentals/tailoring', 'Bridal hair & airbrush makeup trial', 'Wedding day party beauty services', 'Accessories & veil']
  },
  {
    id: 'stationery-favors',
    name: 'Stationery, Signage & Favors',
    vendorCategory: 'decor',
    defaultPct: 3,
    color: '#B57C70',
    bgLight: '#F8EFEA',
    icon: <FileText className="w-4 h-4 text-[#B57C70]" />,
    description: 'Save-the-dates, bespoke letterpress invitations, seating charts, escort cards, and guest favors.',
    typicalIncludes: ['Save the dates & invitations suite', 'Day-of menus & place cards', 'Custom welcome mirror / signage', 'Personalized keepsake favors']
  },
  {
    id: 'contingency-gratuity',
    name: 'Contingency & Gratuity Buffer',
    defaultPct: 5,
    color: '#654E48',
    bgLight: '#F0E6E2',
    icon: <ShieldCheck className="w-4 h-4 text-[#654E48]" />,
    description: 'Crucial emergency reserve for last-minute guest additions, weather backup tents, and vendor tips.',
    typicalIncludes: ['Vendor tips & day-of gratuities', 'Weather contingency or heater rentals', 'Emergency dress adjustments', 'Unexpected logistical overtime']
  }
];

interface DistributionPreset {
  id: string;
  name: string;
  tagline: string;
  ratios: Record<string, number>;
}

const PRESETS: DistributionPreset[] = [
  {
    id: 'balanced',
    name: 'Balanced & Classic',
    tagline: 'Standard wedding industry benchmark',
    ratios: {
      'venue-catering': 42,
      'photography-cinema': 14,
      'florals-decor': 12,
      'planning-coordination': 10,
      'music-entertainment': 8,
      'attire-rings-beauty': 6,
      'stationery-favors': 3,
      'contingency-gratuity': 5,
    }
  },
  {
    id: 'dining-focus',
    name: 'Gastronomy & Venue Priority',
    tagline: 'Emphasis on Michelin-level dining & epicurean pairings',
    ratios: {
      'venue-catering': 50,
      'photography-cinema': 12,
      'florals-decor': 10,
      'planning-coordination': 9,
      'music-entertainment': 7,
      'attire-rings-beauty': 5,
      'stationery-favors': 2,
      'contingency-gratuity': 5,
    }
  },
  {
    id: 'cinema-story',
    name: 'Photo & Cinema Storytellers',
    tagline: 'Higher allocation for dual photo & documentary film',
    ratios: {
      'venue-catering': 38,
      'photography-cinema': 20,
      'florals-decor': 10,
      'planning-coordination': 9,
      'music-entertainment': 7,
      'attire-rings-beauty': 6,
      'stationery-favors': 3,
      'contingency-gratuity': 7,
    }
  },
  {
    id: 'floral-luxe',
    name: 'Floral & Visual Extravaganza',
    tagline: 'Dramatic floral arches, suspended installations & custom lighting',
    ratios: {
      'venue-catering': 38,
      'photography-cinema': 12,
      'florals-decor': 18,
      'planning-coordination': 9,
      'music-entertainment': 7,
      'attire-rings-beauty': 6,
      'stationery-favors': 3,
      'contingency-gratuity': 7,
    }
  }
];

interface BudgetCalculatorProps {
  onSelectVendorCategory: (category: VendorCategory) => void;
  onOpenConsultationWithBudget: (budgetRange: string, notes: string) => void;
  bookings: VendorBooking[];
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  onSelectVendorCategory,
  onOpenConsultationWithBudget,
  bookings,
}) => {
  const [totalBudget, setTotalBudget] = useState<number>(5000000);
  const [guestCount, setGuestCount] = useState<number>(120);
  const [activePreset, setActivePreset] = useState<string>('balanced');
  const [categoryPercentages, setCategoryPercentages] = useState<Record<string, number>>(
    PRESETS[0].ratios
  );

  const budgetPresets = [
    { label: '₹25L (Intimate)', amount: 2500000 },
    { label: '₹40L (Classic)', amount: 4000000 },
    { label: '₹60L (Elevated)', amount: 6000000 },
    { label: '₹85L (Luxury)', amount: 8500000 },
    { label: '₹1.5Cr+ (Royal)', amount: 15000000 },
  ];

  const handleApplyPreset = (preset: DistributionPreset) => {
    setActivePreset(preset.id);
    setCategoryPercentages(preset.ratios);
  };

  const handlePercentageChange = (categoryId: string, newPct: number) => {
    setActivePreset('custom');
    setCategoryPercentages((prev) => ({
      ...prev,
      [categoryId]: Math.max(0, Math.min(100, Math.round(newPct))),
    }));
  };

  const handleResetPercentages = () => {
    const balanced = PRESETS[0];
    setActivePreset(balanced.id);
    setCategoryPercentages(balanced.ratios);
  };

  const totalPercentage = useMemo(() => {
    return Object.values(categoryPercentages).reduce((acc: number, val: number) => acc + val, 0);
  }, [categoryPercentages]);

  const costPerGuest = useMemo(() => {
    return guestCount > 0 ? Math.round(totalBudget / guestCount) : 0;
  }, [totalBudget, guestCount]);

  // Booked vendor spending by category mapping
  const categoryBookedSpend = useMemo(() => {
    const map: Record<string, number> = {
      'venue-catering': 0,
      'photography-cinema': 0,
      'florals-decor': 0,
      'planning-coordination': 0,
      'music-entertainment': 0,
      'attire-rings-beauty': 0,
      'stationery-favors': 0,
      'contingency-gratuity': 0,
    };

    bookings.forEach((b) => {
      const cat = b.vendorCategory.toLowerCase();
      if (cat.includes('venue') || cat.includes('cater') || cat.includes('cake')) {
        map['venue-catering'] += b.totalPrice;
      } else if (cat.includes('photo') || cat.includes('cinema')) {
        map['photography-cinema'] += b.totalPrice;
      } else if (cat.includes('floral')) {
        map['florals-decor'] += b.totalPrice;
      } else if (cat.includes('music') || cat.includes('dj')) {
        map['music-entertainment'] += b.totalPrice;
      } else if (cat.includes('beauty') || cat.includes('hair')) {
        map['attire-rings-beauty'] += b.totalPrice;
      } else if (cat.includes('decor') || cat.includes('light')) {
        map['stationery-favors'] += b.totalPrice;
      }
    });

    return map;
  }, [bookings]);

  // Export budget as text file
  const handleExportBudget = () => {
    const lines = [
      `EVERAFTER WEDDINGS - WEDDING BUDGET DISTRIBUTION PLAN`,
      `Generated: ${new Date().toLocaleDateString()}`,
      `Total Budget: ₹${totalBudget.toLocaleString('en-IN')}`,
      `Estimated Guests: ${guestCount} (Approx. ₹${costPerGuest.toLocaleString('en-IN')} per guest)`,
      `Style Profile: ${PRESETS.find(p => p.id === activePreset)?.name || 'Custom Allocation'}`,
      `----------------------------------------------------------------------`,
      `CATEGORY BREAKDOWN:`,
      ...DEFAULT_CATEGORIES.map((cat) => {
        const pct = categoryPercentages[cat.id] || 0;
        const amount = Math.round((totalBudget * pct) / 100);
        const booked = categoryBookedSpend[cat.id] || 0;
        return `• ${cat.name} (${pct}%): ₹${amount.toLocaleString('en-IN')} ${booked > 0 ? `[Current Booked: ₹${booked.toLocaleString('en-IN')}]` : ''}\n  Includes: ${cat.typicalIncludes.join(', ')}`;
      }),
      `----------------------------------------------------------------------`,
      `Total Percentage: ${totalPercentage}%`,
      `EverAfter Weddings Planning Studio | (123) 456-7890 | hello@everafterweddings.com`
    ];

    const blob = new Blob([lines.join('\n\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EverAfter-Wedding-Budget-INR-${totalBudget}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleApplyToConsultation = () => {
    const budgetRange = `₹${Math.max(1500000, totalBudget - 1000000).toLocaleString('en-IN')} - ₹${(totalBudget + 1500000).toLocaleString('en-IN')}`;
    const notes = `Calculated Wedding Budget Plan of ₹${totalBudget.toLocaleString('en-IN')} for ${guestCount} guests using the "${PRESETS.find(p => p.id === activePreset)?.name || 'Custom'}" distribution profile.`;
    onOpenConsultationWithBudget(budgetRange, notes);
  };

  return (
    <section id="budget-calculator" className="py-20 lg:py-28 bg-white border-b border-[#EDE1DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#BF7E6F] text-[11px] font-bold uppercase tracking-widest border border-[#EBDAD5]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Planning</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#2B2321] tracking-tight">
            Wedding Budget Calculator
          </h2>
          <p className="text-sm text-[#70615E] leading-relaxed max-w-2xl mx-auto">
            Input your total target budget to automatically distribute funds across essential service categories based on luxury wedding planning benchmarks.
          </p>
        </div>

        {/* Top Control Dashboard: Input & Presets */}
        <div className="bg-[#FAF7F5] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E8D9D4] shadow-xs mb-10 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Total Budget Input */}
            <div className="lg:col-span-5 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#4A3C39] flex items-center justify-between">
                <span>Total Wedding Budget</span>
                <span className="text-[11px] font-normal text-[#8A7A76]">Direct entry or slider</span>
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-serif-luxury text-2xl font-bold text-[#BF7E6F]">
                  ₹
                </span>
                <input
                  type="number"
                  min={500000}
                  max={50000000}
                  step={50000}
                  value={totalBudget}
                  onChange={(e) => setTotalBudget(Math.max(10000, Number(e.target.value)))}
                  className="w-full bg-white border-2 border-[#E2D2CC] focus:border-[#BF7E6F] rounded-2xl pl-10 pr-5 py-3.5 font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2B2321] focus:outline-none shadow-2xs transition-all"
                />
              </div>

              {/* Slider for smooth dragging */}
              <input
                type="range"
                min={1000000}
                max={20000000}
                step={100000}
                value={totalBudget}
                onChange={(e) => setTotalBudget(Number(e.target.value))}
                className="w-full accent-[#BF7E6F] cursor-pointer"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {budgetPresets.map((preset) => (
                  <button
                    key={preset.amount}
                    onClick={() => setTotalBudget(preset.amount)}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      totalBudget === preset.amount
                        ? 'bg-[#BF7E6F] text-white border-[#BF7E6F] shadow-2xs'
                        : 'bg-white text-[#635350] border-[#E2D5D0] hover:bg-[#F4ECE8]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Middle: Guest Count & Cost per Guest */}
            <div className="lg:col-span-3 space-y-3 bg-white p-5 rounded-2xl border border-[#EBDAD5] shadow-2xs">
              <label className="text-xs font-bold uppercase tracking-wider text-[#4A3C39] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#BF7E6F]" />
                Estimated Guests
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min={10}
                  max={500}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Math.max(1, Number(e.target.value)))}
                  className="w-24 bg-[#FAF7F5] border border-[#DDD0CB] rounded-xl px-3 py-2 text-base font-bold text-[#2B2321] text-center focus:outline-none focus:border-[#BF7E6F]"
                />
                <span className="text-xs text-[#7A6B68]">guests</span>
              </div>

              <div className="pt-2 border-t border-[#F2E8E4]">
                <span className="text-[11px] uppercase tracking-wider text-[#8A7A76] block">
                  Est. Spend Per Guest
                </span>
                <span className="font-serif-luxury text-xl font-bold text-[#BF7E6F]">
                  ₹{costPerGuest.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#7A6B68] block mt-0.5">
                  Includes full dining, venue & decor
                </span>
              </div>
            </div>

            {/* Right: Quick Action Hub */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <div className="bg-white p-4 rounded-2xl border border-[#EBDAD5] shadow-2xs">
                <div className="flex items-center justify-between text-xs text-[#736461] mb-1">
                  <span>Allocation Status:</span>
                  <span className={`font-bold flex items-center gap-1 ${
                    totalPercentage === 100 
                      ? 'text-[#2F7A44]' 
                      : totalPercentage > 100 
                        ? 'text-[#B84034]' 
                        : 'text-[#D08332]'
                  }`}>
                    {totalPercentage === 100 ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        100% Balanced
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5" />
                        {totalPercentage}% Allocated ({100 - totalPercentage > 0 ? `+${100 - totalPercentage}% remaining` : `${totalPercentage - 100}% over`})
                      </>
                    )}
                  </span>
                </div>
                <p className="text-[11px] text-[#8C7D79] leading-snug">
                  Industry formula benchmarked across 500+ luxury celebrations.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportBudget}
                  className="flex-1 bg-white hover:bg-[#F7EFEB] border border-[#DFC8C1] text-[#2B2321] text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                  title="Download budget blueprint"
                >
                  <Download className="w-3.5 h-3.5 text-[#BF7E6F]" />
                  <span>Download Plan</span>
                </button>

                <button
                  onClick={handleApplyToConsultation}
                  className="flex-1 bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
                >
                  <span>Review Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Allocation Style Presets Selector */}
          <div className="space-y-3 pt-6 border-t border-[#EDE1DC]">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A3C39]">
                Choose Distribution Style Archetype:
              </span>
              {activePreset === 'custom' && (
                <button
                  onClick={handleResetPercentages}
                  className="text-xs text-[#BF7E6F] hover:text-[#9A584A] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to Balanced Standard</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {PRESETS.map((preset) => {
                const isSelected = activePreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleApplyPreset(preset)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#BF7E6F] ring-2 ring-[#BF7E6F]/20 shadow-xs'
                        : 'bg-white/70 border-[#E5D7D2] hover:bg-white hover:border-[#D8C5BE]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-[#2B2321]">
                        {preset.name}
                      </h4>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BF7E6F]" />
                      )}
                    </div>
                    <p className="text-[11px] text-[#736461] leading-relaxed">
                      {preset.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visual Multi-Segment Proportion Bar */}
          <div className="space-y-2 pt-2">
            <div className="h-4 w-full bg-[#EAE0DC] rounded-full overflow-hidden flex shadow-inner">
              {DEFAULT_CATEGORIES.map((cat) => {
                const pct = categoryPercentages[cat.id] || 0;
                if (pct <= 0) return null;
                return (
                  <div
                    key={cat.id}
                    style={{ width: `${pct}%`, backgroundColor: cat.color }}
                    className="h-full transition-all duration-300 relative group"
                    title={`${cat.name}: ${pct}% (₹${Math.round((totalBudget * pct) / 100).toLocaleString('en-IN')})`}
                  />
                );
              })}
            </div>

            {/* Visual Legend */}
            <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-[11px] text-[#6E605D] pt-1">
              {DEFAULT_CATEGORIES.map((cat) => {
                const pct = categoryPercentages[cat.id] || 0;
                return (
                  <div key={cat.id} className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="font-medium text-[#382D2B]">{cat.name.split('/')[0]}</span>
                    <span className="font-semibold text-[#8C7A75]">({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Distributed Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEFAULT_CATEGORIES.map((cat) => {
            const pct = categoryPercentages[cat.id] || 0;
            const calculatedAmount = Math.round((totalBudget * pct) / 100);
            const bookedAmount = categoryBookedSpend[cat.id] || 0;
            const percentOfBudgetBooked = calculatedAmount > 0 ? Math.min(100, Math.round((bookedAmount / calculatedAmount) * 100)) : 0;

            return (
              <div
                key={cat.id}
                id={`budget-category-card-${cat.id}`}
                className="bg-white rounded-2xl p-5 border border-[#EDE1DC] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-2xs"
                        style={{ backgroundColor: cat.bgLight, borderColor: '#EBDAD5' }}
                      >
                        {cat.icon}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#2B2321] leading-tight">
                          {cat.name}
                        </h3>
                        <span className="text-[10px] text-[#8A7A76] uppercase tracking-wider font-semibold">
                          Recommended ~{cat.defaultPct}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Amount */}
                  <div className="pt-2 border-t border-[#F2E8E4]">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif-luxury text-2xl font-bold text-[#2B2321]">
                        ₹{calculatedAmount.toLocaleString('en-IN')}
                      </span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-md"
                        style={{ backgroundColor: cat.bgLight, color: cat.color }}
                      >
                        {pct}%
                      </span>
                    </div>
                  </div>

                  {/* Percentage Slider (interactive custom distribution) */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-[#8C7E7A]">
                      <span>Adjust Allocation:</span>
                      <span className="font-mono font-semibold">{pct}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={70}
                      step={1}
                      value={pct}
                      onChange={(e) => handlePercentageChange(cat.id, Number(e.target.value))}
                      className="w-full accent-[#BF7E6F] cursor-pointer"
                    />
                  </div>

                  {/* Description & Inclusions */}
                  <p className="text-[11px] text-[#695B58] leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#8A7A76] block">
                      Common Inclusions:
                    </span>
                    <ul className="text-[10px] text-[#615350] space-y-1">
                      {cat.typicalIncludes.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#BF7E6F] flex-shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Real-time Booked Spend Tracker */}
                  {bookedAmount > 0 && (
                    <div className="pt-2 border-t border-[#F2E8E4] space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-[#2F7A44] font-semibold">Booked in Planner:</span>
                        <span className="font-bold text-[#2B2321]">
                          ₹{bookedAmount.toLocaleString('en-IN')} ({percentOfBudgetBooked}%)
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-[#EAE0DC] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2F7A44] rounded-full transition-all"
                          style={{ width: `${percentOfBudgetBooked}%` }}
                        />
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Vendor Match CTA */}
                {cat.vendorCategory && (
                  <div className="pt-4 mt-3 border-t border-[#F2E8E4]">
                    <button
                      onClick={() => onSelectVendorCategory(cat.vendorCategory!)}
                      className="w-full py-2 px-3 rounded-lg border border-[#DFC8C1] hover:border-[#BF7E6F] hover:bg-[#FAF4F2] text-[#4A3C39] hover:text-[#BF7E6F] text-[11px] font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>Find Matching Vendors</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Planning Advice */}
        <div className="mt-14 bg-[#FAF5F2] rounded-2xl p-6 sm:p-8 border border-[#EBDAD5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#BF7E6F] font-bold">
              White-Glove Budget Advisory
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2B2321]">
              Need Professional Contract & Budget Optimization?
            </h3>
            <p className="text-xs text-[#70615E] max-w-xl leading-relaxed">
              Our lead planners negotiate exclusive wholesale pricing and complimentary upgrades with our vetted vendor network, frequently saving couples between 10% and 18% on overall wedding expenditure.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleApplyToConsultation}
              className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              Book Budget Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
