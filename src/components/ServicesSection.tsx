import React from 'react';
import { ServiceIcons } from './FloralIcons';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenVendorBooking: () => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenVendorBooking,
  onOpenConsultation,
}) => {
  const services = [
    {
      id: 'full-planning',
      title: 'Full Wedding Planning',
      desc: 'Complete planning and management',
      icon: ServiceIcons.FullPlanning,
      action: () => onSelectService('pkg-full'),
    },
    {
      id: 'partial-planning',
      title: 'Partial Planning',
      desc: 'Support for the details that matter',
      icon: ServiceIcons.PartialPlanning,
      action: () => onSelectService('pkg-partial'),
    },
    {
      id: 'day-of-coordination',
      title: 'Day of Coordination',
      desc: 'Seamless execution on your big day',
      icon: ServiceIcons.DayOfCoordination,
      action: () => onSelectService('pkg-day-of'),
    },
    {
      id: 'venue-selection',
      title: 'Venue Selection',
      desc: 'Find the perfect venue for your celebration',
      icon: ServiceIcons.VenueSelection,
      action: onOpenVendorBooking,
    },
    {
      id: 'vendor-management',
      title: 'Vendor Management',
      desc: 'Trusted vendors, perfectly matched',
      icon: ServiceIcons.VendorManagement,
      action: onOpenVendorBooking,
      isVendorHighlight: true,
    },
    {
      id: 'custom-decor',
      title: 'Custom Decor',
      desc: 'Stunning designs tailored to you',
      icon: ServiceIcons.CustomDecor,
      action: () => onSelectService('pkg-luxury'),
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-[#EDE1DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching image */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 space-y-2">
          <span className="text-[#BF7E6F] text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase block">
            Our Services
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#2B2321] tracking-tight">
            Everything You Need for Your Big Day
          </h2>
          <p className="text-sm text-[#70615E] pt-2">
            Tailored solutions designed to make your wedding journey as joyous and effortless as the day itself.
          </p>
        </div>

        {/* 6-Service Cards Grid matching layout in image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={`service-card-${item.id}`}
                onClick={item.action}
                className={`group relative text-center p-8 rounded-xl transition-all duration-300 cursor-pointer border ${
                  item.isVendorHighlight
                    ? 'bg-[#FAF4F2] border-[#E8C5BE] shadow-xs hover:shadow-md hover:border-[#BF7E6F]'
                    : 'bg-white border-[#EFE5E1] hover:border-[#DEC5BD] hover:shadow-md hover:bg-[#FDFBF9]'
                }`}
              >
                {/* Micro badge for vendor booking */}
                {item.isVendorHighlight && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#BF7E6F] text-white">
                    Booking System
                  </span>
                )}

                {/* Icon container */}
                <div className="mx-auto w-16 h-16 rounded-full bg-[#FAF3F0] flex items-center justify-center text-[#BF7E6F] mb-5 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#2B2321] tracking-tight group-hover:text-[#BF7E6F] transition-colors flex items-center justify-center gap-1">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#BF7E6F]" />
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#7A6B68] leading-relaxed mt-2 max-w-xs mx-auto">
                  {item.desc}
                </p>

                {/* Action hint */}
                <div className="mt-4 pt-3 border-t border-[#F2E8E4] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-medium text-[#BF7E6F] tracking-wide uppercase">
                    {item.isVendorHighlight ? 'Explore & Book Vendors →' : 'Learn More →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom invitation */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#756663]">
            Unsure which planning model fits your vision?{' '}
            <button
              onClick={onOpenConsultation}
              className="text-[#BF7E6F] font-semibold underline underline-offset-4 hover:text-[#9A584A] cursor-pointer"
            >
              Schedule a complimentary discovery consultation
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
