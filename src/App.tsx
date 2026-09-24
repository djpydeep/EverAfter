import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightsBar } from './components/HighlightsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { VendorBookingSystem } from './components/VendorBookingSystem';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PackagesSection } from './components/PackagesSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { StoryModal } from './components/StoryModal';
import { AboutModal } from './components/AboutModal';
import { BookingsDrawer } from './components/BookingsDrawer';
import { VendorBooking, VendorCategory } from './types';
import { Check, Sparkles } from 'lucide-react';

const STORAGE_KEY_BOOKINGS = 'everafter_vendor_bookings';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeVendorCategory, setActiveVendorCategory] = useState<VendorCategory | undefined>(undefined);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedConsultPackage, setSelectedConsultPackage] = useState<string | undefined>(undefined);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [bookingsDrawerOpen, setBookingsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved bookings from localStorage or initialize with 1 sample for instant live feel
  const [bookings, setBookings] = useState<VendorBooking[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKINGS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [
      {
        id: 'EA-BKG-849201',
        vendorId: 'v-venue-1',
        vendorName: 'The Starlight Grand Estate & Gardens',
        vendorCategory: 'Wedding Venue',
        packageName: 'Full Estate & Chandelier Ballroom Buyout',
        packagePrice: 950000,
        addons: [
          { id: 'add-1', name: 'Overnight Honeymoon Suite Stay', price: 75000, description: 'Luxury master suite' }
        ],
        totalPrice: 1025000,
        weddingDate: '2025-09-20',
        guestCount: 160,
        location: 'Montecito, CA',
        clientName: 'Sophia Miller & Daniel Vance',
        clientEmail: 'sophia.vance@example.com',
        clientPhone: '(555) 392-1084',
        notes: 'Sunset ceremony on the private terrace, followed by dinner in the chandelier hall.',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      }
    ];
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.warn('Unable to persist bookings to localStorage', e);
    }
  }, [bookings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAddBooking = (newBookingData: Omit<VendorBooking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: VendorBooking = {
      ...newBookingData,
      id: `EA-BKG-${Math.floor(100000 + Math.random() * 900000)}`,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Successfully requested booking with ${newBooking.vendorName}!`);
  };

  const handleRemoveBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Vendor booking removed from your planner.');
  };

  const handleOpenConsultationWithPackage = (packageName?: string) => {
    setSelectedConsultPackage(packageName);
    setConsultationModalOpen(true);
  };

  const handleSelectVendorCategoryFromBudget = (category: VendorCategory) => {
    setActiveVendorCategory(category);
    scrollToSection('vendors');
  };

  const handleOpenConsultationWithBudget = (budgetRange: string, notes: string) => {
    setSelectedConsultPackage(`${budgetRange} - ${notes}`);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-[#2D2625] flex flex-col font-sans selection:bg-[#E8C5BE] selection:text-[#3B2520]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2B2321] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs border border-[#4F3E3B] animate-in slide-in-from-bottom-5">
          <div className="w-5 h-5 rounded-full bg-[#BF7E6F] flex items-center justify-center text-white">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultationWithPackage()}
        onNavigate={scrollToSection}
        activeSection={activeSection}
        bookings={bookings}
        onOpenBookingsDrawer={() => setBookingsDrawerOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section matching image */}
        <Hero
          onPlanWeddingClick={() => scrollToSection('vendors')}
          onWatchStoryClick={() => setStoryModalOpen(true)}
        />

        {/* 4-Item Highlights Bar matching image */}
        <HighlightsBar />

        {/* About Us Section matching image */}
        <AboutSection
          onMoreAboutUsClick={() => setAboutModalOpen(true)}
        />

        {/* Our Services matching image */}
        <ServicesSection
          onSelectService={(pkgId) => {
            scrollToSection('packages');
          }}
          onOpenVendorBooking={() => scrollToSection('vendors')}
          onOpenConsultation={() => handleOpenConsultationWithPackage()}
        />

        {/* Wedding Budget Calculator Section */}
        <BudgetCalculator
          onSelectVendorCategory={handleSelectVendorCategoryFromBudget}
          onOpenConsultationWithBudget={handleOpenConsultationWithBudget}
          bookings={bookings}
        />

        {/* Core Vendor Booking System requested by user */}
        <VendorBookingSystem
          onAddBooking={handleAddBooking}
          bookings={bookings}
          onOpenBookingsDrawer={() => setBookingsDrawerOpen(true)}
          activeCategory={activeVendorCategory}
          onSelectCategory={setActiveVendorCategory}
        />

        {/* Our Work / Real Weddings Gallery matching image */}
        <GallerySection
          onOpenConsultation={() => handleOpenConsultationWithPackage()}
          onExploreVendors={() => scrollToSection('vendors')}
        />

        {/* Testimonials with carousel matching image */}
        <TestimonialsSection />

        {/* Packages & Investment Tiers */}
        <PackagesSection
          onSelectPackage={(pkg) => handleOpenConsultationWithPackage(pkg)}
          onOpenConsultation={handleOpenConsultationWithPackage}
        />
      </main>

      {/* Footer matching image */}
      <Footer
        onNavigate={scrollToSection}
        onOpenConsultation={() => handleOpenConsultationWithPackage()}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        prefilledPackage={selectedConsultPackage}
        onSuccess={() => {
          showToast('Discovery consultation request received!');
        }}
      />

      <StoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
        onPlanWedding={() => {
          setStoryModalOpen(false);
          scrollToSection('vendors');
        }}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenConsultation={() => {
          setAboutModalOpen(false);
          handleOpenConsultationWithPackage();
        }}
      />

      <BookingsDrawer
        isOpen={bookingsDrawerOpen}
        onClose={() => setBookingsDrawerOpen(false)}
        bookings={bookings}
        onRemoveBooking={handleRemoveBooking}
        onOpenConsultation={() => {
          setBookingsDrawerOpen(false);
          handleOpenConsultationWithPackage();
        }}
      />

    </div>
  );
}
