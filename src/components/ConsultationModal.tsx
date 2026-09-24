import React, { useState } from 'react';
import { X, Check, Calendar, Clock, Video, Building, Phone, Sparkles } from 'lucide-react';
import { ConsultationRequest } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackage?: string;
  onSuccess?: (request: ConsultationRequest) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledPackage,
  onSuccess,
}) => {
  if (!isOpen) return null;

  const [partnerOne, setPartnerOne] = useState('');
  const [partnerTwo, setPartnerTwo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('2025-08-16');
  const [estimatedGuests, setEstimatedGuests] = useState(130);
  const [estimatedBudget, setEstimatedBudget] = useState('₹35 Lakhs - ₹60 Lakhs');
  const [consultationType, setConsultationType] = useState<'Virtual Zoom' | 'In-Person Studio' | 'Telephone Call'>('Virtual Zoom');
  const [timeSlot, setTimeSlot] = useState('Tomorrow, 2:00 PM PST');
  const [message, setMessage] = useState(prefilledPackage ? `Interested in ${prefilledPackage}` : '');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consultId, setConsultId] = useState('');

  const timeSlots = [
    'Tomorrow, 11:00 AM PST',
    'Tomorrow, 2:00 PM PST',
    'Thursday, 10:30 AM PST',
    'Friday, 3:00 PM PST',
    'Saturday, 1:00 PM PST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerOne || !email) return;

    const id = `EA-CONS-${Math.floor(100000 + Math.random() * 900000)}`;
    setConsultId(id);

    const newRequest: ConsultationRequest = {
      id,
      partnerOne,
      partnerTwo,
      email,
      phone,
      weddingDate,
      estimatedGuests,
      estimatedBudget,
      consultationType,
      timeSlot,
      message,
      status: 'Scheduled',
      createdAt: new Date().toISOString(),
    };

    onSuccess?.(newRequest);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF7F5] rounded-2xl shadow-2xl border border-[#E8D9D4] overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#2B2321] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#BF7E6F] font-bold block mb-1">
            EverAfter Weddings Discovery
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
            Book a Complimentary Consultation
          </h2>
          <p className="text-xs text-white/70 mt-1 max-w-lg">
            Meet with our principal wedding designers to map your vision, explore venue options, and review tailored packages.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#EBF4EC] text-[#2F7A44] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#BF7E6F] font-bold">
                  Consultation Confirmed
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#2B2321]">
                  We Can't Wait to Meet You!
                </h3>
                <p className="text-xs font-mono text-[#7A6B68]">
                  Reference ID: {consultId}
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#EDE1DC] max-w-md mx-auto text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                  <span className="text-[#7A6B68]">Couple:</span>
                  <span className="font-semibold text-[#2B2321]">{partnerOne} {partnerTwo ? `& ${partnerTwo}` : ''}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                  <span className="text-[#7A6B68]">Format:</span>
                  <span className="font-semibold text-[#2B2321]">{consultationType}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                  <span className="text-[#7A6B68]">Time Slot:</span>
                  <span className="font-semibold text-[#BF7E6F]">{timeSlot}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4ECE8] pb-2">
                  <span className="text-[#7A6B68]">Target Date:</span>
                  <span className="font-semibold text-[#2B2321]">{weddingDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A6B68]">Budget Tier:</span>
                  <span className="font-semibold text-[#2B2321]">{estimatedBudget}</span>
                </div>
              </div>

              <p className="text-xs text-[#7A6B68] max-w-sm mx-auto">
                A calendar invite and preparation lookbook have been dispatched to <strong className="text-[#2B2321]">{email}</strong>.
              </p>

              <button
                onClick={onClose}
                className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-8 py-3 rounded-md transition-colors cursor-pointer"
              >
                Back to EverAfter
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Couple Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39]">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sophia Miller"
                    value={partnerOne}
                    onChange={(e) => setPartnerOne(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39]">Partner's Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Daniel Vance"
                    value={partnerTwo}
                    onChange={(e) => setPartnerTwo(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39]">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sophia@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>
              </div>

              {/* Format selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#4A3C39] block">
                  Consultation Format
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'Virtual Zoom' as const, label: 'Virtual Zoom', icon: Video },
                    { id: 'In-Person Studio' as const, label: 'Studio Visit', icon: Building },
                    { id: 'Telephone Call' as const, label: 'Phone Call', icon: Phone },
                  ].map((fmt) => {
                    const IconComp = fmt.icon;
                    const isSelected = consultationType === fmt.id;
                    return (
                      <button
                        type="button"
                        key={fmt.id}
                        onClick={() => setConsultationType(fmt.id)}
                        className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-[#BF7E6F] ring-1 ring-[#BF7E6F] shadow-xs text-[#2B2321]'
                            : 'bg-white/70 border-[#E8DCD8] text-[#736461] hover:bg-white'
                        }`}
                      >
                        <IconComp className={`w-4 h-4 mx-auto mb-1 ${isSelected ? 'text-[#BF7E6F]' : 'text-[#8A7A76]'}`} />
                        <span className="text-xs font-medium block">{fmt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slot & wedding date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#BF7E6F]" />
                    Preferred Consultation Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F] cursor-pointer"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#BF7E6F]" />
                    Estimated Wedding Date
                  </label>
                  <input
                    type="date"
                    value={weddingDate}
                    onChange={(e) => setWeddingDate(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>
              </div>

              {/* Guests & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39]">Expected Guest Count</label>
                  <input
                    type="number"
                    min={20}
                    max={600}
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(Number(e.target.value))}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#4A3C39]">Estimated Budget Range</label>
                  <select
                    value={estimatedBudget}
                    onChange={(e) => setEstimatedBudget(e.target.value)}
                    className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F] cursor-pointer"
                  >
                    <option value="₹20 Lakhs - ₹35 Lakhs">₹20,00,000 - ₹35,00,000 (20L - 35L)</option>
                    <option value="₹35 Lakhs - ₹60 Lakhs">₹35,00,000 - ₹60,00,000 (35L - 60L)</option>
                    <option value="₹60 Lakhs - ₹1 Crore">₹60,00,000 - ₹1,00,00,000 (60L - 1Cr)</option>
                    <option value="₹1 Crore - ₹2.5 Crore+">₹1,00,00,000 - ₹2,50,00,000+ (1Cr - 2.5Cr+)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#4A3C39]">
                  Tell Us About Your Dream Celebration (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details about your style, venue dreams, inspirations, or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-[#DDD0CB] rounded-lg px-3 py-2 text-xs text-[#2B2321] focus:outline-none focus:border-[#BF7E6F]"
                />
              </div>

              {/* Submit */}
              <div className="pt-3 border-t border-[#EDE1DC] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-md border border-[#DFC8C1] text-xs font-semibold text-[#685A57] hover:bg-[#FAF5F2] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="submit-consultation-btn"
                  className="bg-[#BF7E6F] hover:bg-[#A96A5B] text-white text-xs uppercase tracking-widest font-semibold px-7 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  Confirm Discovery Call
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
