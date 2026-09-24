import React from 'react';

// Elegant botanical sprig next to "EverAfter" logo
export const LogoSprig: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#BF7E6F]" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 32C12 24 18 16 28 8M28 8C26 13 22 18 16 21M28 8C31 13 31 19 28 24M16 21C13 18 11 12 12 8C16 9 20 12 21 16M22 18C25 21 28 25 26 30C22 29 19 25 18 22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="28" cy="8" r="2.5" fill="currentColor" />
  </svg>
);

// Delicate botanical line art illustration seen in About Us & Testimonials
export const BotanicalSketch: React.FC<{ className?: string; flip?: boolean }> = ({ 
  className = "w-48 h-48 text-[#E2C3BA]", 
  flip = false 
}) => (
  <svg
    viewBox="0 0 200 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flip ? '-scale-x-100' : ''}`}
  >
    {/* Rose Bloom 1 */}
    <path
      d="M100 80C90 60 70 55 60 70C50 85 65 105 85 110C105 115 130 100 135 85C140 70 125 50 110 55C95 60 90 75 100 80Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M95 72C88 65 78 68 76 76C74 84 82 92 90 94C98 96 108 90 110 82C112 74 104 68 95 72Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    {/* Rose Petal folds */}
    <path
      d="M80 85C70 95 75 110 90 115C105 120 125 110 130 95"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M110 65C125 60 140 70 142 85C144 100 130 115 115 120"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    {/* Stem */}
    <path
      d="M100 115C98 140 105 170 115 210"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M102 145C118 140 135 145 145 160C140 168 125 168 108 158"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M98 170C80 172 65 165 58 150C65 145 80 148 95 160"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    {/* Smaller bud */}
    <path
      d="M120 130C135 120 150 125 155 138C160 150 148 160 135 158"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M105 135C115 132 125 130 135 135"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

// High-fidelity service line icons in dusty rose gold
export const ServiceIcons = {
  FullPlanning: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <rect x="10" y="10" width="28" height="32" rx="4" />
      <path d="M18 6h12a2 2 0 0 1 2 2v2H16V8a2 2 0 0 1 2-2z" />
      <path d="M24 22l-4 4 2 2 6-6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 32h12" strokeLinecap="round" />
    </svg>
  ),
  PartialPlanning: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <circle cx="18" cy="24" r="10" />
      <circle cx="30" cy="24" r="10" />
      <path d="M24 16v16" strokeLinecap="round" />
      <path d="M21 11l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  DayOfCoordination: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <rect x="8" y="12" width="32" height="28" rx="4" />
      <path d="M16 8v6M32 8v6M8 20h32" strokeLinecap="round" />
      <circle cx="24" cy="28" r="4" fill="#BF7E6F" fillOpacity="0.2" />
      <path d="M24 26v3l2 1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  VenueSelection: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 20L24 10L38 20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 20v18M34 20v18M20 20v18M28 20v18" strokeLinecap="round" />
      <path d="M10 38h28" strokeLinecap="round" />
      <path d="M24 6v4" strokeLinecap="round" />
    </svg>
  ),
  VendorManagement: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 14l5 10h-10l5-10zM32 14l5 10h-10l5-10z" strokeLinejoin="round" />
      <path d="M18.5 24v8M29.5 24v8M14 36h20" strokeLinecap="round" />
      <circle cx="24" cy="18" r="3" />
    </svg>
  ),
  CustomDecor: () => (
    <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <path d="M24 8c-6 8-12 12-12 18a12 12 0 0 0 24 0c0-6-6-10-12-18z" />
      <path d="M24 14c-3 4-6 6-6 10a6 6 0 0 0 12 0c0-4-3-6-6-10z" />
      <path d="M24 38v4M18 42h12" strokeLinecap="round" />
    </svg>
  )
};

// 4 Highlight Bar Icons
export const HighlightIcons = {
  Personalized: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  StunningDesigns: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2C10 6 6 10 2 12c4 2 8 6 10 10 2-4 6-8 10-10-4-2-8-6-10-10Z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ),
  StressFree: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
      <path d="M9 16l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  TrustedProfessionals: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#BF7E6F]" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 18h18l-2-10-5 5-2-7-2 7-5-5-2 10Z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="6" r="1.2" fill="currentColor"/>
    </svg>
  )
};
