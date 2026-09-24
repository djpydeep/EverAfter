import React, { useState } from 'react';
import { Vendor, VendorPackage, VendorAddon, VendorBooking } from '../types';
import { X, Check, Calendar, Users, MapPin, Star, ShieldCheck, Sparkles } from 'lucide-react';

interface VendorBookingModalProps {
  vendor: Vendor | null;
  onClose: () => void;
  onConfirmBooking: (booking: Omit<VendorBooking, 'id' | 'createdAt' | 'status'>) => void;
}

export const VendorBookingModal: React.FC<VendorBookingModalProps> = ({
  vendor,
  onClose,
  onConfirmBooking,
}) => {
  if (!vendor) return null;

  const [selectedPackage, setSelectedPackage] = useState<VendorPackage>(vendor.packages[0]);
  const [selectedAddons, setSelectedAddons] = useState<VendorAddon[]>([]);
  const [weddingDate, setWeddingDate] = useState<string>('2025-06-21');
  const [guestCount, setGuestCount] = useState<number>(120);
  const [eventLocation, setEventLocation] = useState<string>(vendor.location);
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [confirmedId, setConfirmedId] = useState<string>('');

  const toggleAddon = (addon: VendorAddon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = selectedPackage.price + addonsTotal;
  const depositAmount = Math.round(grandTotal * 0.25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    const newId = `EA-BKG-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedId(newId);

    onConfirmBooking({
      vendorId: vendor.id,
      vendorName: vendor.name,
      vendorCategory: vendor.categoryLabel,
      packageName: selectedPackage.name,
      packagePrice: selectedPackage.price,
      addons: selectedAddons,
      totalPrice: grandTotal,
      weddingDate,
      guestCount,
      location: eventLocation,
      clientName,
      clientEmail,
      clientPhone,
      notes: clientNotes,
    });

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF7F5] rounded-2xl shadow-2xl border border-[#E8D9D4] overflow-hidden my-6">
        
        {/* Modal Header Banner */}
        <div className="relative bg-gradient-to-r from-[#382D2B] to-[#4F3E3B] text-white p-6 sm:p-8">
          <button
            id="close-vendor-modal-button"
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-white/20 shadow-md"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#BF7E6F] text-white">
                  {vendor.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-[#F0B86E] text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{vendor.rating}</span>
                  <span className="text-white/60">({vendor.reviewsCount} reviews)</span>
                </div>
              </div>
              <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white tracking-tight">
                {vendor.name}
              </h2>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E0A159]" />
                <span>{vendor.location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EBF4EC] text-[#2F7A44] flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#BF7E6F] font-semibold">
                  Booking Request Confirmed
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2B2321]">
                  You're Booked with {vendor.name}!
                </h3>
                <p className="text-sm text-[#736461] max-w-md mx-auto">
                  Confirmation Code: <strong className="text-[#BF7E6F] font-mono">{confirmedId}</strong>
                </p>
              </div>

              {/* Booking receipt recap */}
              <div className="bg-white rounded-xl p-5 border border-[#EBDAD5] text-left max-w-lg mx-auto space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2 font-medium">
                  <span className="text-[#7A6B68]">Package:</span>
                  <span className="text-[#2B2321] font-semibold">{selectedPackage.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                  <span className="text-[#7A6B68]">Wedding Date:</span>
                  <span className="text-[#2B2321] font-semibold">{weddingDate}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                  <span className="text-[#7A6B68]">Guest Count:</span>
                  <span className="text-[#2B2321] font-semibold">{guestCount} guests</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                    <span className="text-[#7A6B68]">Selected Add-ons:</span>
                    <span className="text-[#2B2321] font-medium text-right">
                      {selectedAddons.map((a) => a.name).join(', ')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between pt-1 text-sm font-bold">
                  <span className="text-[#2B2321]">Estimated Total:</span>
                  <span className="text-[#BF7E6F] font-serif-luxury text-base">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-[#7A6B68]">
                  <span>25% Retainer Due upon Contract Signing:</span>
                  <span>₹{depositAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <p className="text-xs text-[#7A6B68] max-w-md mx-auto">
                Our EverAfter Weddings lead coordinator and {vendor.name} have received your request. A custom contract and timeline itinerary will be sent to <strong className="text-[#2B2321]">{clientEmail}</strong> within 24 hours.
              </p>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={onClose}
                  className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-8 py-3 rounded-md transition-colors cursor-pointer shadow-sm"
                >
                  Done & Return to Vendors
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Step 1: Package Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2B2321] flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#BF7E6F] text-white text-[11px] flex items-center justify-center font-bold">
                      1
                    </span>
                    Choose Service Package
                  </h3>
                  <span className="text-xs text-[#8A7A76]">Select your tier</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vendor.packages.map((pkg) => {
                    const isSelected = selectedPackage.id === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-white border-[#BF7E6F] ring-2 ring-[#BF7E6F]/20 shadow-sm'
                            : 'bg-white/70 border-[#E8DCD8] hover:border-[#DEC5BD] hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-sm font-bold text-[#2B2321] pr-2">
                            {pkg.name}
                          </h4>
                          <span className="font-serif-luxury font-bold text-base text-[#BF7E6F] whitespace-nowrap">
                            ₹{pkg.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <p className="text-xs text-[#736461] mb-3 leading-relaxed">
                          {pkg.description}
                        </p>
                        <ul className="space-y-1.5 pt-2 border-t border-[#F2E8E4]">
                          {pkg.features.map((feat, i) => (
                            <li key={i} className="text-[11px] text-[#554744] flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#BF7E6F] flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Wedding Date & Details */}
              <div className="space-y-4 pt-2 border-t border-[#EDE1DC]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2B2321] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#BF7E6F] text-white text-[11px] flex items-center justify-center font-bold">
                    2
                  </span>
                  Wedding Schedule & Location
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#544643] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#BF7E6F]" />
                      Wedding Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={weddingDate}
                      onChange={(e) => setWeddingDate(e.target.value)}
                      className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                    />
                    <span className="text-[10px] text-[#2F7A44] font-medium flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Date is available
                    </span>
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#544643] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#BF7E6F]" />
                      Estimated Guests
                    </label>
                    <input
                      type="number"
                      min={10}
                      max={600}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#544643] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#BF7E6F]" />
                      Venue / City
                    </label>
                    <input
                      type="text"
                      value={eventLocation}
                      onChange={(e) => setEventLocation(e.target.value)}
                      placeholder="e.g. Santa Barbara, CA"
                      className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Optional Add-ons */}
              {vendor.addons && vendor.addons.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-[#EDE1DC]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#2B2321] flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#BF7E6F] text-white text-[11px] flex items-center justify-center font-bold">
                        3
                      </span>
                      Tailored Enhancements & Add-ons
                    </h3>
                    <span className="text-[11px] text-[#8A7A76]">Optional upgrades</span>
                  </div>

                  <div className="space-y-2">
                    {vendor.addons.map((addon) => {
                      const isChecked = selectedAddons.some((a) => a.id === addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon)}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-white border-[#BF7E6F] shadow-2xs'
                              : 'bg-white/60 border-[#E5D7D2] hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${
                                isChecked
                                  ? 'bg-[#BF7E6F] border-[#BF7E6F] text-white'
                                  : 'border-[#B8A7A3] bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-[#2B2321]">{addon.name}</p>
                              <p className="text-[11px] text-[#736461]">{addon.description}</p>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#BF7E6F] whitespace-nowrap ml-3">
                            +₹{addon.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Couple Contact Information */}
              <div className="space-y-4 pt-2 border-t border-[#EDE1DC]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2B2321] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#BF7E6F] text-white text-[11px] flex items-center justify-center font-bold">
                    4
                  </span>
                  Couple Contact & Vision
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#4D3F3C]">Couple Names *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jessica & Liam"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#4D3F3C]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jessica@example.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#4D3F3C]">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-[#4D3F3C]">
                    Special Requests, Color Theme or Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    placeholder="Tell the vendor about your wedding theme, special music requests, floral inspirations, or timing..."
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>
              </div>

              {/* Price Calculation Summary Footer */}
              <div className="bg-white rounded-xl p-5 border border-[#E8D9D4] shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#F4ECE8] pb-3">
                  <div className="space-y-0.5">
                    <span className="text-xs text-[#7A6B68]">Calculated Booking Estimate</span>
                    <h4 className="text-base font-bold text-[#2B2321]">
                      {selectedPackage.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#7A6B68] block">Total Package</span>
                    <span className="font-serif-luxury text-2xl font-bold text-[#BF7E6F]">
                      ₹{grandTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#7A6B68]">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#2F7A44]" />
                    EverAfter Guarantee & Date Lock Protection
                  </span>
                  <span>25% Retainer: ₹{depositAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex items-center justify-end gap-3 pt-1">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-md border border-[#DFC8C1] text-xs font-semibold text-[#685A57] hover:bg-[#FAF5F2] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="submit-vendor-booking-button"
                    className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-7 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    Confirm & Request Booking
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
