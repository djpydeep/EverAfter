import { GalleryItem, Testimonial, Vendor, WeddingPackage } from '../types';

export const HERO_COUPLE_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85";
export const ABOUT_BANQUET_IMAGE = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85";

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Golden Hour Coastline Vows',
    couple: 'Elena & Lucas',
    location: 'Big Sur Cliffs, CA',
    season: 'Autumn 2024',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
    alt: 'Romantic couple embracing at beach sunset',
    caption: 'An intimate coastal celebration framed by golden hour horizons and ocean whispers.',
    featuredVendors: ['Lumière Studio', 'Petal & Stem Floral', 'Coastal Breeze Audio']
  },
  {
    id: 'g2',
    title: 'Grand Chandelier Ballroom',
    couple: 'Charlotte & William',
    location: 'The Beverly Estate, CA',
    season: 'Summer 2024',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=85',
    alt: 'Opulent banquet hall with crystal chandeliers and draped ceiling',
    caption: 'Crystal chandeliers, bespoke ivory drapery, and three long royal banquet tables.',
    featuredVendors: ['The Starlight Grand Ballroom', 'Heritage Fine Dining', 'Velvet & Violin Ensemble']
  },
  {
    id: 'g3',
    title: 'Blush English Garden Bouquet',
    couple: 'Sophia & Daniel',
    location: 'Montecito Rose Gardens, CA',
    season: 'Spring 2024',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=85',
    alt: 'Bride holding delicate blush rose wedding bouquet with lace gown',
    caption: 'Hand-tied heirloom garden roses, astilbe, and fragrant French eucalyptus tied with pure silk ribbons.',
    featuredVendors: ['Fleur Royale Botanicals', 'Maison de Blanc Bridal Gowns']
  },
  {
    id: 'g4',
    title: 'Floral Arch by the Ocean Altar',
    couple: 'Amara & Julian',
    location: 'Malibu Overlook Sanctuary, CA',
    season: 'Summer 2024',
    image: 'https://images.unsplash.com/photo-1519225438186-06ec568bfd09?auto=format&fit=crop&w=800&q=85',
    alt: 'Seaside wedding gazebo draped in white florals overlooking turquoise ocean',
    caption: 'A breathtaking circular floral arbor overlooking the Pacific with pristine chiavari seating.',
    featuredVendors: ['Ocean Crest Vista Venue', 'Wildflower Architectural Bloom']
  },
  {
    id: 'g5',
    title: 'First Dance Under Starlight',
    couple: 'Isabella & Mateo',
    location: 'Napa Valley Vineyard, CA',
    season: 'Autumn 2024',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=85',
    alt: 'Bride and groom slow dancing at night surrounded by warm fairy lights and sparklers',
    caption: 'A magical moonlit waltz enclosed by thousands of fairy lights and warm celebratory sparklers.',
    featuredVendors: ['Starlight Sound Collective', 'Napa Valley Vintner Reserve']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'EverAfter Weddings turned our dream into reality. Every detail was beyond perfect!',
    author: 'Sophia & Daniel',
    location: 'Montecito, CA',
    date: 'June 2024',
    rating: 5
  },
  {
    id: 't2',
    quote: 'From the vendor negotiations to the day-of execution, the peace of mind they gave us was priceless.',
    author: 'Elena & Marcus',
    location: 'Santa Barbara, CA',
    date: 'August 2024',
    rating: 5
  },
  {
    id: 't3',
    quote: 'Our guests are still talking about how seamless, breathtaking, and deeply emotional the entire day was.',
    author: 'Chloe & Alexander',
    location: 'Napa Valley, CA',
    date: 'September 2024',
    rating: 5
  },
  {
    id: 't4',
    quote: 'They understood our design aesthetic on day one and curated the exact team of vendors to make it happen.',
    author: 'Hannah & Christopher',
    location: 'Beverly Hills, CA',
    date: 'May 2024',
    rating: 5
  }
];

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'pkg-day-of',
    name: 'Day of Coordination',
    tagline: 'Flawless day-of execution and timeline mastery',
    price: '₹2,50,000',
    priceNum: 250000,
    popular: false,
    description: 'Perfect for couples who planned their celebration but need a trusted director to manage vendors, cues, and logistics.',
    features: [
      'Comprehensive walkthrough 4 weeks prior',
      'Detailed minute-by-minute master wedding timeline',
      'Vendor coordination & arrival management',
      'Ceremony rehearsal direction (up to 2 hours)',
      '12 hours of on-site coordination with 2 planners',
      'Emergency bridal styling & disaster mitigation kit'
    ]
  },
  {
    id: 'pkg-partial',
    name: 'Partial Planning',
    tagline: 'Guided support for key decisions & styling',
    price: '₹4,75,000',
    priceNum: 475000,
    popular: false,
    description: 'Designed for couples with venue secured who want professional design guidance, vendor sourcing, and logistical curation.',
    features: [
      'Everything included in Day-of Coordination',
      'Curated vendor match & contract negotiations (up to 5 vendors)',
      'Design board, color palette & floral aesthetic direction',
      'Monthly planning check-ins & budget tracker spreadsheet',
      'Floor plan drafting & seating arrangement strategy',
      'RSVP management and dietary requirements liaison'
    ]
  },
  {
    id: 'pkg-full',
    name: 'Full Wedding Planning',
    tagline: 'End-to-end luxury orchestration from start to finish',
    price: '₹8,50,000',
    priceNum: 850000,
    popular: true,
    description: 'Our signature white-glove experience covering every detail from initial concept and venue scouting to the final sparkler send-off.',
    features: [
      'Total venue scouting & contract advisory',
      'Complete vendor curation, interviewing & booking oversight',
      'Bespoke 3D visual concept & experiential styling boards',
      'Full budget management & milestone payment schedules',
      'Invitation suite curation, website creation & guest communications',
      'Full weekend event oversight (welcome drinks, rehearsal, wedding day)',
      'Dedicated lead planner & 3 senior assistants on wedding day'
    ]
  },
  {
    id: 'pkg-luxury',
    name: 'Bespoke Luxury & Destination',
    tagline: 'Multi-day celebrations & global destination weddings',
    price: '₹15,00,000+',
    priceNum: 1500000,
    popular: false,
    description: 'For multi-day celebration weekends, private estate transformations, and international destination weddings worldwide.',
    features: [
      'Complete concierge planning for 3-4 day wedding itineraries',
      'Private villa, estate, or international destination scouting',
      'Guest travel, luxury hotel room block & transport management',
      'Custom stage production, lighting design & pyrotechnic coordination',
      'VIP artist & orchestra management',
      'Unlimited planning meetings, digital 3D models & on-site team'
    ]
  }
];

export const VENDORS_DATA: Vendor[] = [
  {
    id: 'v-venue-1',
    name: 'The Starlight Grand Estate & Gardens',
    category: 'venues',
    categoryLabel: 'Wedding Venue',
    rating: 4.98,
    reviewsCount: 84,
    startingPrice: 550000,
    priceTier: '$$$',
    location: 'Montecito, CA',
    image: 'https://images.unsplash.com/photo-1545232979-fbf6958d4a66?auto=format&fit=crop&w=800&q=85',
    description: 'Historic Mediterranean villa with Italian cypress alleys, manicured rose gardens, and a crystal chandelier grand reception hall.',
    highlights: ['Up to 350 Guests', 'Bridal & Groom Luxury Suites', 'Curfew-free Patio', 'Valet Included'],
    badges: ['EverAfter Preferred', 'Top Pick 2024'],
    packages: [
      {
        id: 'pkg-est-1',
        name: 'Garden Terrace Ceremony & Cocktail',
        price: 550000,
        description: 'Access to the private lawn, pergola, and stone terrace for 6 hours.',
        features: ['6-hour estate access', 'Tables, fruitwood chivari chairs', 'Bridal suite access', 'Dedicated venue manager']
      },
      {
        id: 'pkg-est-2',
        name: 'Full Estate & Chandelier Ballroom Buyout',
        price: 950000,
        description: 'Exclusive 14-hour access to both the gardens and the iconic historic ballroom.',
        features: ['14-hour private estate buyout', 'Both garden lawn and chandelier ballroom', 'Bridal & groom villas', 'Late night dancing until 1:00 AM', 'Security and valet team']
      }
    ],
    addons: [
      { id: 'add-1', name: 'Overnight Honeymoon Suite Stay', price: 75000, description: 'Luxury master suite with champagne breakfast for the newlyweds.' },
      { id: 'add-2', name: 'Estate Fire Pit Lounge & Smores Bar', price: 45000, description: 'Cozy outdoor fire pit setup with attendant.' }
    ]
  },
  {
    id: 'v-venue-2',
    name: 'Ocean Crest Vista Sanctuary',
    category: 'venues',
    categoryLabel: 'Oceanfront Venue',
    rating: 4.95,
    reviewsCount: 62,
    startingPrice: 650000,
    priceTier: '$$$$',
    location: 'Malibu Coast, CA',
    image: 'https://images.unsplash.com/photo-1519225438186-06ec568bfd09?auto=format&fit=crop&w=800&q=85',
    description: 'Panoramic cliffside sanctuary overlooking the rolling Pacific waves with transparent glass windbreakers and lush palms.',
    highlights: ['Unobstructed Sunset Views', 'Private Beach Access', 'Modern Architecture', 'Up to 220 Guests'],
    badges: ['Featured in Vogue Weddings'],
    packages: [
      {
        id: 'pkg-oc-1',
        name: 'Sunset Oceanfront Package',
        price: 650000,
        description: 'Complete ceremony deck and sunset lawn cocktail area.',
        features: ['8 hours venue usage', 'Oceanfront ceremony arch setup', 'Bespoke ambient lighting', 'Bridal dressing pavilion']
      },
      {
        id: 'pkg-oc-2',
        name: 'All-Day Panoramic Malibu Experience',
        price: 1150000,
        description: 'Full day access with private beach cliff path and indoor glass pavilion.',
        features: ['12 hours full access', 'Indoor glass reception pavilion', 'Ceremony deck + cocktail lawn', 'Private beach photo permit']
      }
    ],
    addons: [
      { id: 'add-oc-1', name: 'Drone Aerial Live-Stream Setup', price: 60000, description: 'Live broadcast feed for international and remote guests.' }
    ]
  },
  {
    id: 'v-photo-1',
    name: 'Lumière Fine Art Photography & Cinema',
    category: 'photography',
    categoryLabel: 'Photo & Cinema',
    rating: 5.0,
    reviewsCount: 112,
    startingPrice: 325000,
    priceTier: '$$$',
    location: 'Los Angeles / Destination',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=85',
    description: 'Editorial medium-format film and digital hybrid wedding photographers capturing candid sentiment and timeless, luminescent romance.',
    highlights: ['Hybrid Film & Digital', 'Next-Day Sneak Peeks', 'FAA Certified Drone Pilot', 'Heirloom Albums'],
    badges: ['Master Photographer', 'EverAfter Exclusive'],
    packages: [
      {
        id: 'pkg-lum-1',
        name: 'The Classic Keepsake (8 Hours)',
        price: 325000,
        description: 'Comprehensive coverage of preparations through reception prime dances.',
        features: ['1 Principal Photographer', '8 Hours continuous coverage', '600+ high-res edited images', 'Private digital gallery & print rights']
      },
      {
        id: 'pkg-lum-2',
        name: 'The Heirloom Cinema & Photo Suite (10 Hours)',
        price: 520000,
        description: 'Dual photo and cinema team with 4K highlight film and custom leather album.',
        features: ['2 Lead Photographers + 1 Cinematographer', '10 Hours continuous coverage', '4K 6-Minute Highlight Film + Full Speeches edit', 'Handcrafted Italian leather album (30 pages)', 'Drone aerial coverage']
      }
    ],
    addons: [
      { id: 'add-lum-1', name: 'Engagement Editorial Session', price: 55000, description: '2-hour styled engagement session with 50 edited images.' },
      { id: 'add-lum-2', name: 'Vintage 35mm & Polaroid Package', price: 38000, description: 'Real vintage film and physical instant polaroid guest guestbook.' }
    ]
  },
  {
    id: 'v-photo-2',
    name: 'Aura & Silk Wedding Cinematography',
    category: 'photography',
    categoryLabel: 'Cinematography',
    rating: 4.93,
    reviewsCount: 58,
    startingPrice: 275000,
    priceTier: '$$',
    location: 'Santa Barbara, CA',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85',
    description: 'Documentary-style cinematic storytellers creating emotionally gripping wedding films with bespoke musical scores.',
    highlights: ['Cinema-grade 4K Cameras', 'Professional Audio Recording', 'Drone Footage Included'],
    badges: ['Award-Winning Filmmakers'],
    packages: [
      {
        id: 'pkg-aura-1',
        name: 'The Romance Highlight Reel',
        price: 275000,
        description: 'A poignant 5-7 minute cinematic highlight film plus full ceremony recording.',
        features: ['8 hours coverage', '2 cinematographers', '5-7 min highlight film', 'Full multicam ceremony edit']
      }
    ],
    addons: [
      { id: 'add-aura-1', name: 'Same-Day Edit Reception Teaser', price: 75000, description: 'A 2-minute film projected during dessert at your reception!' }
    ]
  },
  {
    id: 'v-floral-1',
    name: 'Fleur Royale & Botanical Design',
    category: 'florals',
    categoryLabel: 'Floral Design',
    rating: 4.97,
    reviewsCount: 96,
    startingPrice: 250000,
    priceTier: '$$$',
    location: 'Beverly Hills, CA',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=85',
    description: 'Architectural floral artists renowned for romantic garden-style installations, scented garden roses, cascading arches, and ethereal table scapes.',
    highlights: ['Locally Sourced Blooms', 'Bespoke Ceremony Arches', 'Vessel & Candle Rentals Included'],
    badges: ['Voted Best Florist 2024'],
    packages: [
      {
        id: 'pkg-fl-1',
        name: 'The Intimate Bloom Collection',
        price: 250000,
        description: 'Complete personal florals and romantic sweetheart table decor.',
        features: ['Bridal bouquet + 4 Bridesmaid bouquets', '5 Boutonnieres + 2 Corsages', 'Sweetheart table floral hedge', 'Breakdown and compost recycling']
      },
      {
        id: 'pkg-fl-2',
        name: 'The Grand European Garden Suite',
        price: 550000,
        description: 'Elaborate floral archway, 12 luxury floral centerpieces, candles, and aisle meadows.',
        features: ['Complete bridal party florals', 'Grand freestanding floral arch or chuppah', '12 lush centerpiece arrangements with taper candles', 'Aisle floral meadows', 'Full on-site florist team installation & strike']
      }
    ],
    addons: [
      { id: 'add-fl-1', name: 'Hanging Chandelier Floral Garland', price: 80000, description: 'Custom lush greenery and floral suspended installations.' },
      { id: 'add-fl-2', name: 'Welcome Sign Floral Nesting', price: 20000, description: 'Fresh floral frame for entrance mirrors or signs.' }
    ]
  },
  {
    id: 'v-cat-1',
    name: 'Heritage Fine Dining & Patisserie',
    category: 'catering',
    categoryLabel: 'Catering & Cake',
    rating: 4.96,
    reviewsCount: 104,
    startingPrice: 350000,
    priceTier: '$$$',
    location: 'Pasadena, CA',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=85',
    description: 'Farm-to-table culinary masters delivering Michelin-inspired plated dinners, interactive oyster bars, craft cocktails, and tiered artisan cakes.',
    highlights: ['Organic Farm-to-Table', 'Custom Dietary Menus', 'Sommelier Wine Pairing', 'Tasting Session Included'],
    badges: ['Top Rated Caterer'],
    packages: [
      {
        id: 'pkg-cat-1',
        name: 'Plated 3-Course Epicurean Experience',
        price: 350000,
        description: 'Includes cocktail hour hors d’oeuvres and an artisan 3-course dinner for up to 60 guests (scalable).',
        features: ['4 Passed canapés during cocktail hour', 'Artisanal bread and farm butter service', '3-Course customized dinner menu', 'Full chef and serving staff']
      },
      {
        id: 'pkg-cat-2',
        name: 'The Royal Feast & Artisan Cake Tier',
        price: 675000,
        description: '4-course plated dinner, late-night gourmet snacks, and a 3-tier custom wedding cake.',
        features: ['6 Passed luxury appetizers (caviar crisps, truffle bites)', '4-Course plated fine dining menu', 'Custom 3-tier wedding cake tailored to your flavors', 'Late-night gourmet slider and truffle fry bar']
      }
    ],
    addons: [
      { id: 'add-cat-1', name: 'Vintage Champagne Tower Experience', price: 40000, description: '5-tier coupe glass tower with pouring assistance.' },
      { id: 'add-cat-2', name: 'Specialty Espresso & Affogato Cart', price: 55000, description: 'Barista crafted espresso, lattes, and gelato affogatos.' }
    ]
  },
  {
    id: 'v-music-1',
    name: 'Velvet Strings & The Starlight Big Band',
    category: 'music',
    categoryLabel: 'Live Music & DJ',
    rating: 4.99,
    reviewsCount: 88,
    startingPrice: 180000,
    priceTier: '$$',
    location: 'Southern California',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=85',
    description: 'World-class conservatory string quartet for classical and modern pop ceremony covers, transitioning to a high-energy 8-piece live reception band.',
    highlights: ['Custom Song Arrangements', 'MC Services Included', 'Wireless Microphones & Stage Audio', 'Seamless Playlist Curation'],
    badges: ['Crowd Favorite'],
    packages: [
      {
        id: 'pkg-mus-1',
        name: 'Classical & Pop String Quartet (Ceremony + Cocktail)',
        price: 180000,
        description: 'Live 4-piece string quartet performing timeless classics and modern romantic covers.',
        features: ['3 Hours live performance', 'Processional & recessional custom arrangements', 'Cocktail hour ambient set', 'Sound system and sound technician']
      },
      {
        id: 'pkg-mus-2',
        name: 'The Complete Sound Journey: Strings + 8-Piece Band & DJ',
        price: 490000,
        description: 'String quartet for ceremony/cocktails + explosive 8-piece live band and late night DJ.',
        features: ['String quartet for ceremony & cocktails', '8-piece party band for reception prime time', 'Professional DJ & MC for late night dancing', 'Premium concert-grade lighting & audio truss']
      }
    ],
    addons: [
      { id: 'add-mus-1', name: 'Cold Sparkler Fountain Effect', price: 50000, description: 'Safe, indoor-rated spark machines for first dance grand finale.' }
    ]
  },
  {
    id: 'v-beauty-1',
    name: 'Maison Glow Bridal Beauty Studio',
    category: 'beauty',
    categoryLabel: 'Hair & Makeup',
    rating: 4.94,
    reviewsCount: 79,
    startingPrice: 95000,
    priceTier: '$$',
    location: 'Newport Beach / On-Location',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=85',
    description: 'High-fashion bridal makeup artists and master hairstylists specializing in luminous skin, effortless romantic waves, and timeless chic updos.',
    highlights: ['Airbrush Makeup Available', 'Full Trial Session', 'Touch-up Kit Included', 'On-Location Bridal Suite Travel'],
    badges: ['Celebrity Stylist'],
    packages: [
      {
        id: 'pkg-gl-1',
        name: 'The Glowing Bride Signature',
        price: 95000,
        description: 'Comprehensive bridal preview trial and wedding day hair & makeup.',
        features: ['2.5-hour in-studio bridal trial', 'Day-of luxury skin prep and airbrush makeup', 'Custom veil and hair accessory placement', 'Deluxe touch-up kit with full lipstick']
      },
      {
        id: 'pkg-gl-2',
        name: 'Bridal Party Glamour Suite',
        price: 220000,
        description: 'Hair & makeup for the bride plus up to 4 bridesmaids or mothers.',
        features: ['Bride package + trial', '4 Bridal party hair and makeup services', '2 Master artists on location', 'False lashes and touch-up kits for all']
      }
    ],
    addons: [
      { id: 'add-gl-1', name: 'Day-of Artist Stay for Reception Touch-up', price: 35000, description: 'Stylist stays through post-ceremony photos for second hair look.' }
    ]
  },
  {
    id: 'v-decor-1',
    name: 'Atelier Lumina Custom Rentals & Lighting',
    category: 'decor',
    categoryLabel: 'Custom Decor & Lighting',
    rating: 4.91,
    reviewsCount: 65,
    startingPrice: 200000,
    priceTier: '$$',
    location: 'Orange County & LA',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    description: 'Luxury event furnishings, crystal chandeliers, custom monogram dance floors, velvet lounges, and warm ambient bistro lighting.',
    highlights: ['Custom Fabricated Dance Floors', 'Crystal Chandelier Rigging', 'Lounge Vignettes'],
    badges: ['Design Excellence'],
    packages: [
      {
        id: 'pkg-dec-1',
        name: 'The Romantic Glow Lighting & Draping',
        price: 200000,
        description: 'Complete warm fairy light canopy, wireless uplighting, and stage backdrop draping.',
        features: ['Warm white bistro or canopy lighting', '16 Wireless LED uplights', 'Ceiling or arch fabric draping', 'Full installation and strike']
      },
      {
        id: 'pkg-dec-2',
        name: 'The Royal Lounge & Monogram Dance Floor',
        price: 420000,
        description: '2 Complete velvet lounge vignettes, custom printed seamless dance floor, and chandelier rigging.',
        features: ['Custom 24x24ft seamless monogram dance floor', '2 Complete designer lounge sets with coffee tables and rugs', '3 Crystal chandeliers hung with dimmers', 'White-glove delivery, styling & cleanup']
      }
    ],
    addons: [
      { id: 'add-dec-1', name: 'Custom Neon Love Sign & Greenery Wall', price: 38000, description: 'Photo-ready neon signage with boxwood hedge backdrop.' }
    ]
  }
];
