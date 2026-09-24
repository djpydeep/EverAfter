import React from 'react';
import { LogoSprig } from './FloralIcons';
import { Instagram, Facebook, Globe, Phone, Mail, MapPin } from 'lucide-react';

// Custom Pinterest and TikTok icons
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55.14-.97.94-3.98.94-3.98s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .69-.44 1.73-.67 2.69-.19.8.4 1.46 1.19 1.46 1.43 0 2.53-1.51 2.53-3.69 0-1.93-1.39-3.28-3.37-3.28-2.46 0-3.9 1.84-3.9 3.75 0 .74.28 1.54.64 1.97.07.09.08.16.06.25-.06.27-.2.82-.23.93-.04.16-.13.2-.3.12-1.13-.53-1.84-2.18-1.84-3.51 0-2.86 2.08-5.49 6-5.49 3.15 0 5.6 2.25 5.6 5.25 0 3.13-1.97 5.65-4.71 5.65-.92 0-1.78-.48-2.08-1.04l-.57 2.16c-.2 78-.76 1.76-1.13 2.37A12 12 0 1 0 12 0z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.41a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.87a8.21 8.21 0 0 0 4.8 1.55V8a4.83 4.83 0 0 1-1.03-1.31z"/>
  </svg>
);

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer id="contact" className="bg-[#FAF7F5] border-t border-[#EFE5E1] pt-16 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns matching the exact layout of the uploaded image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#EDE1DC]">
          
          {/* Column 1: Brand & Socials (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-serif-luxury text-2xl tracking-tight text-[#2B2321] font-medium">
                EverAfter
              </span>
              <LogoSprig className="w-5 h-5 text-[#BF7E6F]" />
            </div>
            <span className="text-[9px] tracking-[0.22em] text-[#7E706D] font-medium uppercase block -mt-3">
              WEDDING & EVENTS
            </span>

            <p className="text-xs text-[#736461] leading-relaxed max-w-sm">
              Creating timeless celebrations filled with love, joy, and unforgettable moments.
            </p>

            {/* Social Icons matching image */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#E2D5D0] flex items-center justify-center text-[#685A57] hover:text-[#BF7E6F] hover:border-[#BF7E6F] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#E2D5D0] flex items-center justify-center text-[#685A57] hover:text-[#BF7E6F] hover:border-[#BF7E6F] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-[#E2D5D0] flex items-center justify-center text-[#685A57] hover:text-[#BF7E6F] hover:border-[#BF7E6F] transition-colors"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                aria-label="Website"
                className="w-8 h-8 rounded-full border border-[#E2D5D0] flex items-center justify-center text-[#685A57] hover:text-[#BF7E6F] hover:border-[#BF7E6F] transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-[#E2D5D0] flex items-center justify-center text-[#685A57] hover:text-[#BF7E6F] hover:border-[#BF7E6F] transition-colors"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2321]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#6E605D]">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'budget-calculator', label: 'Budget Calculator' },
                { id: 'packages', label: 'Packages' },
                { id: 'vendors', label: 'Vendors' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#BF7E6F] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Packages (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2321]">
              Packages
            </h4>
            <ul className="space-y-2 text-xs text-[#6E605D]">
              {['Essential', 'Classic', 'Premium', 'Luxury', 'Custom Package'].map((pkgName, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('packages')}
                    className="hover:text-[#BF7E6F] transition-colors cursor-pointer"
                  >
                    {pkgName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Let's Plan Together matching image (Col span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2321]">
              Let's Plan Together
            </h4>
            <p className="text-xs text-[#6E605D]">
              Ready to start planning your dream wedding?<br />
              We'd love to hear from you.
            </p>

            {/* "BOOK A CONSULTATION" matching image button */}
            <div className="pt-1">
              <button
                id="footer-book-consultation-btn"
                onClick={onOpenConsultation}
                className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-[11px] uppercase tracking-widest font-semibold px-6 py-2.5 rounded-md transition-colors cursor-pointer shadow-xs"
              >
                Book a Consultation
              </button>
            </div>

            {/* Contact details matching image */}
            <div className="space-y-1.5 pt-2 text-xs text-[#6E605D]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#BF7E6F]" />
                <span>(123) 456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#BF7E6F]" />
                <span>hello@everafterweddings.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#BF7E6F]" />
                <span>123 Love Lane, Dream City, CA 90210</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row matching image */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7B77] gap-3">
          <p>© 2024 EverAfter Weddings. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#BF7E6F] transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-[#BF7E6F] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
