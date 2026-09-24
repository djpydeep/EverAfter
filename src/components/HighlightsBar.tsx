import React from 'react';
import { HighlightIcons } from './FloralIcons';

export const HighlightsBar: React.FC = () => {
  const highlights = [
    {
      id: 'personalized',
      title: 'Personalized Planning',
      desc: 'Tailored to your style and preferences',
      icon: HighlightIcons.Personalized,
    },
    {
      id: 'designs',
      title: 'Stunning Designs',
      desc: 'Beautiful setups that bring your vision to life',
      icon: HighlightIcons.StunningDesigns,
    },
    {
      id: 'stressfree',
      title: 'Stress-Free Experience',
      desc: 'We handle the details, you enjoy the moments',
      icon: HighlightIcons.StressFree,
    },
    {
      id: 'professionals',
      title: 'Trusted Professionals',
      desc: 'A network of top vendors you can rely on',
      icon: HighlightIcons.TrustedProfessionals,
    },
  ];

  return (
    <section className="bg-white border-y border-[#EDE1DC] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#F1E5E1]">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-start gap-4 pt-6 sm:pt-0 ${
                  index !== 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#FAF3F0] border border-[#EEDDD8] flex items-center justify-center text-[#BF7E6F] shadow-2xs">
                  <IconComponent />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#2B2321] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#736461] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
