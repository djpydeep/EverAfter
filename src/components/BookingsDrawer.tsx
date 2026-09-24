import React from 'react';
import { VendorBooking } from '../types';
import { X, Trash2, Calendar, MapPin, Users, Download, Sparkles, CheckCircle2 } from 'lucide-react';

interface BookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: VendorBooking[];
  onRemoveBooking: (id: string) => void;
  onOpenConsultation: () => void;
}

export const BookingsDrawer: React.FC<BookingsDrawerProps> = ({
  isOpen,
  onClose,
  bookings,
  onRemoveBooking,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  const totalSpend = bookings.reduce((sum, b) => sum + b.totalPrice, 0);
  const totalDeposit = Math.round(totalSpend * 0.25);

  const handleExportItinerary = () => {
    const content = `EVERAFTER WEDDINGS - CONFIRMED VENDOR BOOKINGS
Generated: ${new Date().toLocaleDateString()}

Total Booked Vendors: ${bookings.length}
Total Estimated Spend: ₹${totalSpend.toLocaleString('en-IN')}
Total Estimated 25% Deposit: ₹${totalDeposit.toLocaleString('en-IN')}

---------------------------------------------------------
${bookings
  .map(
    (b, i) => `
#${i + 1}: ${b.vendorName} (${b.vendorCategory})
Confirmation Ref: ${b.id}
Date: ${b.weddingDate}
Guests: ${b.guestCount}
Location: ${b.location}
Selected Package: ${b.packageName} (₹${b.packagePrice.toLocaleString('en-IN')})
Add-ons: ${b.addons.length > 0 ? b.addons.map((a) => `${a.name} (+₹${a.price.toLocaleString('en-IN')})`).join(', ') : 'None'}
Total: ₹${b.totalPrice.toLocaleString('en-IN')}
Status: ${b.status}
Client: ${b.clientName} (${b.clientEmail})
Notes: ${b.notes || 'None'}
`
  )
  .join('\n---------------------------------------------------------')}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EverAfter-Wedding-Vendor-Itinerary-INR.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F5] border-l border-[#EDE1DC] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-white border-b border-[#EFE5E1] flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest text-[#BF7E6F] uppercase">
                  Wedding Planner Hub
                </span>
                <span className="bg-[#FAF0ED] text-[#A25D4F] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {bookings.length} Booked
                </span>
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#2B2321]">
                My Vendor Bookings
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF0ED] text-[#786966] hover:text-[#2B2321] transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bookings List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {bookings.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF0ED] text-[#BF7E6F] flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif-luxury text-lg font-bold text-[#2B2321]">
                    No Vendors Booked Yet
                  </h4>
                  <p className="text-xs text-[#7A6B68] max-w-xs mx-auto">
                    Browse our vetted collection of venues, photographers, florists, and artists to curate your dream vendor team.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-[#BF7E6F] text-white text-xs uppercase tracking-widest font-semibold px-6 py-2.5 rounded-md hover:bg-[#A96A5B] transition-colors cursor-pointer"
                >
                  Explore Vendors
                </button>
              </div>
            ) : (
              <>
                {/* Budget Summary Card */}
                <div className="bg-white rounded-xl p-4 border border-[#E8D9D4] shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#7A6B68]">
                    <span>Total Vendor Value</span>
                    <span className="font-serif-luxury text-lg font-bold text-[#2B2321]">
                      ₹{totalSpend.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#7A6B68]">
                    <span>Est. 25% Deposit</span>
                    <span className="font-medium text-[#BF7E6F]">
                      ₹{totalDeposit.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Individual Booking Cards */}
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl p-4 border border-[#EDE1DC] shadow-xs space-y-3 relative group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#BF7E6F] bg-[#FAF3F0] px-2 py-0.5 rounded-md">
                          {booking.vendorCategory}
                        </span>
                        <h4 className="font-serif-luxury text-base font-bold text-[#2B2321] mt-1">
                          {booking.vendorName}
                        </h4>
                      </div>

                      <button
                        onClick={() => onRemoveBooking(booking.id)}
                        className="text-[#9E8E8A] hover:text-[#B54242] p-1.5 transition-colors cursor-pointer"
                        title="Remove booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-[#6E5F5C] space-y-1 bg-[#FAF7F5] p-3 rounded-lg border border-[#F2E8E4]">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#2B2321]">{booking.packageName}</span>
                        <span className="font-semibold text-[#BF7E6F]">
                          ₹{booking.packagePrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      {booking.addons.length > 0 && (
                        <p className="text-[11px] text-[#857672]">
                          + {booking.addons.map((a) => a.name).join(', ')}
                        </p>
                      )}
                      <div className="pt-2 border-t border-[#EDE1DC] flex flex-wrap gap-y-1 gap-x-3 text-[11px] text-[#786A67]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#BF7E6F]" />
                          {booking.weddingDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#BF7E6F]" />
                          {booking.guestCount} guests
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#BF7E6F]" />
                          {booking.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="flex items-center gap-1 text-[#2F7A44] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {booking.status}
                      </span>
                      <span className="font-mono text-[10px] text-[#8C7E7B]">
                        ID: {booking.id}
                      </span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

            {/* Footer with actions */}
          {bookings.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EDE1DC] space-y-3">
              <button
                onClick={handleExportItinerary}
                className="w-full bg-[#FAF7F5] hover:bg-[#F2E8E4] border border-[#DFC8C1] text-[#2B2321] text-xs uppercase tracking-widest font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#BF7E6F]" />
                <span>Export Vendor Itinerary</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold py-3 rounded-md transition-colors cursor-pointer shadow-sm"
              >
                Schedule Coordination Review
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
