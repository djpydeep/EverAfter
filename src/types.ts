export type VendorCategory = 
  | 'all' 
  | 'venues' 
  | 'photography' 
  | 'florals' 
  | 'catering' 
  | 'music' 
  | 'beauty' 
  | 'decor';

export interface VendorPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface VendorAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Vendor {
  id: string;
  name: string;
  category: VendorCategory;
  categoryLabel: string;
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  priceTier: '$' | '$$' | '$$$' | '$$$$';
  location: string;
  image: string;
  description: string;
  highlights: string[];
  badges?: string[];
  packages: VendorPackage[];
  addons: VendorAddon[];
}

export interface VendorBooking {
  id: string;
  vendorId: string;
  vendorName: string;
  vendorCategory: string;
  packageName: string;
  packagePrice: number;
  addons: VendorAddon[];
  totalPrice: number;
  weddingDate: string;
  guestCount: number;
  location: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes?: string;
  status: 'Confirmed' | 'Pending Review' | 'Quote Requested';
  createdAt: string;
}

export interface ConsultationRequest {
  id: string;
  partnerOne: string;
  partnerTwo: string;
  email: string;
  phone: string;
  weddingDate: string;
  estimatedGuests: number;
  estimatedBudget: string;
  consultationType: 'Virtual Zoom' | 'In-Person Studio' | 'Telephone Call';
  timeSlot: string;
  message?: string;
  status: 'Scheduled' | 'Completed';
  createdAt: string;
}

export interface WeddingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNum: number;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  season: string;
  image: string;
  alt: string;
  caption: string;
  featuredVendors?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  date: string;
  rating: number;
}
