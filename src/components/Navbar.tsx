import React, { useState } from 'react';
import { LogoSprig } from './FloralIcons';
import { Menu, X, CalendarCheck, ShoppingBag } from 'lucide-react';
import { VendorBooking } from '../types';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  bookings: VendorBooking[];
  onOpenBookingsDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onNavigate,
  activeSection,
  bookings,
  onOpenBookingsDrawer,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'budget-calculator', label: 'BUDGET' },
    { id: 'vendors', label: 'VENDORS', badge: 'Booking System' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'packages', label: 'PACKAGES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F5]/90 backdrop-blur-md border-b border-[#EFE6E2] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-luxury text-2xl sm:text-[26px] tracking-tight text-[#2B2321] font-medium group-hover:text-[#BF7E6F] transition-colors">
                  EverAfter
                </span>
                <LogoSprig className="w-5 h-5 text-[#BF7E6F] transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-[9px] tracking-[0.22em] text-[#7E706D] font-medium uppercase mt-[-3px] transition-colors group-hover:text-[#9A584A]">
                WEDDING & EVENTS
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-[13px] tracking-[0.14em] font-medium transition-colors py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#2B2321] font-semibold'
                      : 'text-[#615451] hover:text-[#BF7E6F]'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.badge && (
                      <span className="text-[9px] tracking-normal font-bold px-1.5 py-0.5 rounded-full bg-[#F5E6E1] text-[#A25D4F] uppercase border border-[#E9CFC7]">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BF7E6F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* My Vendor Bookings Drawer Trigger */}
            <button
              id="open-vendor-cart-button"
              onClick={onOpenBookingsDrawer}
              className="relative p-2.5 rounded-full border border-[#E5D7D2] text-[#4F4340] hover:text-[#BF7E6F] hover:border-[#BF7E6F] bg-white/70 hover:bg-white transition-all shadow-xs cursor-pointer"
              title="My Wedding Vendor Bookings"
              aria-label="View booked vendors"
            >
              <ShoppingBag className="w-4 h-4" />
              {bookings.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#BF7E6F] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-pulse">
                  {bookings.length}
                </span>
              )}
            </button>

            {/* Book a consultation CTA matching image button style */}
            <button
              id="nav-book-consultation-btn"
              onClick={onOpenConsultation}
              className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-[12px] tracking-[0.12em] font-medium px-5 py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer uppercase flex items-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBookingsDrawer}
              className="relative p-2 rounded-full border border-[#E5D7D2] text-[#4F4340]"
              aria-label="My bookings"
            >
              <ShoppingBag className="w-5 h-5" />
              {bookings.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#BF7E6F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {bookings.length}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#4A3E3B] hover:text-[#BF7E6F] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FAF7F5] border-b border-[#EFE6E2] px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between text-left text-sm tracking-wider font-medium py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#F2E8E4] text-[#BF7E6F]'
                    : 'text-[#4A3E3B] hover:bg-[#F8EFEA]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EBDAD5] text-[#9A584A]">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#EFE6E2]">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs tracking-widest font-medium py-3 rounded-md uppercase transition-colors"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
