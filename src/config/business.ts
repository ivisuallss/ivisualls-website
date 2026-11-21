import type { Service, Package } from '../types'

export const BUSINESS = {
  brand: 'i.visuallss',
  tagline: 'Every Frame Tells a Story',
  experienceTagline: 'Book. Capture. Relive.',
  location: {
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    display: 'Hyderabad, Telangana, India',
    servingNote: 'Serving Hyderabad and nearby locations.',
    hyderabadTagline: 'Capturing moments across Hyderabad.',
    travelNote:
      'Travel availability and additional charges for locations outside our usual service area will be discussed before confirming your booking.',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hyderabad%2C%20Telangana',
  },
  contact: {
    whatsappNational: '6304777358',
    whatsappInternational: '916304777358',
    whatsappUrl: 'https://wa.me/916304777358',
    instagramUsername: '@i.visuallss',
    instagramProfile:
      'https://www.instagram.com/i.visuallss?hvrq=ZnUzMnlqdmc4bzdr&utm_source=qr',
    instagramDm: 'https://ig.me/m/i.visuallss',
    email: 'gaddamvinay25@gmail.com',
    youtube: '',
    businessAddress: '',
  },
  booking: {
    timeSlots: [
      '9:00 AM',
      '10:00 AM',
      '11:00 AM',
      '2:00 PM',
      '4:00 PM',
      '6:00 PM',
    ],
    currency: 'INR',
    currencySymbol: '₹',
    priceDisclaimer:
      'Prices shown are starting prices. Final availability and deliverables are confirmed on WhatsApp.',
    customPackageNote:
      'Need a custom package? Mention your requirements in the booking message.',
  },
  hero: {
    imageUrl:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    subtitle: 'Instant Reels | iPhone Clips | Event Coverage',
    support:
      'Real moments. Cinematic reels. Shot on iPhone. Affordable packages across Hyderabad.',
    pricingPreview: 'Creative moments. Affordable packages.',
    finalCta: 'Your next favourite memory starts here.',
  },
  about: {
    intro:
      'We are a creative videography brand specializing in instant reels, iPhone videography, and event coverage in Hyderabad. Our goal is to turn your moments into memories — beautifully and effortlessly.',
    whyChoose:
      'Premium quality, creative storytelling, and dependable delivery — tailored to your moment.',
    vision: {
      heading: 'Every Moment Deserves to Be Remembered.',
      body: `Our vision is to make creative videography simple, accessible and memorable for everyone.

We believe that the smallest moments can tell the biggest stories. Through instant reels and cinematic iPhone videography, we aim to transform everyday experiences and special celebrations into beautiful visual memories.

At i.visuallss, we want everyone to experience the joy of seeing their moments captured creatively.`,
    },
    approach: {
      heading: 'Creative Thinking. Simple Shooting. Beautiful Stories.',
      intro: `Every shoot begins with understanding your idea.

We focus on capturing genuine moments, choosing creative perspectives and turning them into engaging visual stories.`,
      steps: [
        {
          title: 'Understanding Your Story',
          description:
            'We learn about your event, idea and expectations.',
        },
        {
          title: 'Creative Shooting',
          description:
            'We capture moments using thoughtful angles, movement and composition.',
        },
        {
          title: 'Cinematic Editing',
          description:
            'We transform selected footage into engaging videos.',
        },
        {
          title: 'Easy Delivery',
          description:
            'We prepare your content for sharing and enjoying.',
        },
      ],
      closing:
        'Our goal is to keep the entire experience simple, creative and enjoyable.',
    },
  },
  instagram: {
    sectionHeading: 'See Our Moments in Motion',
    sectionBody:
      'Explore our latest reels, cinematic iPhone clips and unforgettable moments.',
    cta: 'EXPLORE OUR INSTAGRAM',
    pulseLabel: 'Tap to Watch Our Reels',
    shootIdeaHeading: 'Have an idea for a shoot?',
    shootIdeaCta: 'DM us on Instagram',
  },
} as const

const IMG = (file: string) => `/images/services/${file}`

export const SERVICES: Service[] = [
  {
    id: 'instant-reels',
    slug: 'instant-reels',
    title: 'Instant Reels',
    shortDescription:
      'Short-form vertical reels for celebrations and social media.',
    description:
      'Get professionally captured short-form videos for your special moments, celebrations, and social media.',
    features: [
      'Short-form vertical videos',
      'Instagram Reels',
      'Event highlights',
      'Cinematic transitions',
      'Social media-ready delivery',
      'Quick turnaround (package dependent)',
    ],
    eventTypes: [
      'Wedding',
      'Engagement',
      'Birthday',
      'Anniversary',
      'Personal Shoot',
      'Other',
    ],
    imageUrl: IMG('instant-reels.jpg'),
    enabled: true,
    sortOrder: 1,
  },
  {
    id: 'iphone-clips',
    slug: 'iphone-clips',
    title: 'iPhone Clips',
    shortDescription: 'Cinematic iPhone videography for real-life moments.',
    description:
      'Beautifully captured moments using iPhone videography with a modern cinematic style.',
    features: [
      'iPhone videography',
      'Cinematic video clips',
      'Creative camera movements',
      'Lifestyle videos',
      'Personal moments',
      'Social media content',
    ],
    eventTypes: [
      'Personal Shoot',
      'Travel Shoot',
      'Lifestyle',
      'Birthday',
      'Anniversary',
      'Other',
    ],
    imageUrl: IMG('iphone-clips.jpg'),
    enabled: true,
    sortOrder: 2,
  },
  {
    id: 'event-coverage',
    slug: 'event-coverage',
    title: 'Event Coverage',
    shortDescription: 'Weddings, celebrations and special occasions.',
    description:
      'Capture the emotions, atmosphere, and memorable moments of your special occasions.',
    features: [
      'Weddings & engagements',
      'Birthday celebrations',
      'Private parties',
      'Family functions',
      'Special occasions',
      'Highlight reels',
    ],
    eventTypes: [
      'Wedding',
      'Engagement',
      'Birthday',
      'Anniversary',
      'Family Function',
      'Other',
    ],
    imageUrl: IMG('event-coverage.jpg'),
    enabled: true,
    sortOrder: 3,
  },
  {
    id: 'social-media-content',
    slug: 'social-media-content',
    title: 'Social Media Content',
    shortDescription: 'Reels and clips for creators and brands.',
    description:
      'Creative video content for individuals, creators, and businesses.',
    features: [
      'Instagram content',
      'Promotional reels',
      'Brand videos',
      'Product videos',
      'Business promotional content',
    ],
    eventTypes: [
      'Business Promotion',
      'Product Shoot',
      'Creator Content',
      'Other',
    ],
    imageUrl: IMG('social-media-content.jpg'),
    enabled: true,
    sortOrder: 4,
  },
  {
    id: 'personal-lifestyle',
    slug: 'personal-lifestyle',
    title: 'Personal & Lifestyle Shoots',
    shortDescription: 'Cinematic clips that capture your personality.',
    description:
      'Creative cinematic clips that capture your personality, experiences, and everyday moments.',
    features: [
      'Lifestyle storytelling',
      'Personal branding clips',
      'Everyday cinematic moments',
      'Edited shareable videos',
    ],
    eventTypes: ['Personal Shoot', 'Travel Shoot', 'Lifestyle', 'Other'],
    imageUrl: IMG('lifestyle-shoots.jpg'),
    enabled: true,
    sortOrder: 5,
  },
  {
    id: 'business-brand-videos',
    slug: 'business-brand-videos',
    title: 'Business & Brand Videos',
    shortDescription: 'Short-form videos for your business identity.',
    description:
      'Professional short-form videos to showcase your business, products, and brand identity.',
    features: [
      'Brand storytelling',
      'Product showcases',
      'Promotional reels',
      'Social-ready deliverables',
    ],
    eventTypes: ['Business Promotion', 'Product Shoot', 'Brand Video', 'Other'],
    imageUrl: IMG('business-videos.jpg'),
    enabled: true,
    sortOrder: 6,
  },
]

function pkg(
  id: string,
  serviceId: string,
  name: string,
  priceInr: number,
  duration: string,
  videoCount: string,
  deliverables: string,
  features: string[],
): Package {
  return {
    id,
    serviceId,
    name,
    priceInr,
    priceLabel: `₹${priceInr.toLocaleString('en-IN')}`,
    duration,
    videoCount,
    deliverables,
    features,
    enabled: true,
  }
}

export const PACKAGES: Package[] = [
  pkg(
    'instant-reels-a',
    'instant-reels',
    'Starter Reel',
    1499,
    'Up to 60 minutes',
    '1 reel',
    'One short vertical reel, basic editing, social-media-ready',
    [
      'One short vertical reel',
      'Up to 60 minutes of shooting',
      'Basic editing',
      'Social-media-ready video',
    ],
  ),
  pkg(
    'instant-reels-b',
    'instant-reels',
    'Creator Reel',
    2499,
    'Up to 90 minutes',
    '2 reels',
    'Two reels with creative transitions',
    [
      'Two short reels',
      'Up to 90 minutes of shooting',
      'Creative transitions',
      'Cinematic editing',
    ],
  ),
  pkg(
    'instant-reels-c',
    'instant-reels',
    'Premium Reel',
    3999,
    'Up to 2 hours',
    '3 reels',
    'Three reels with advanced storytelling',
    [
      'Three short reels',
      'Up to 2 hours of shooting',
      'Advanced editing',
      'Creative storytelling',
    ],
  ),
  pkg(
    'iphone-clips-a',
    'iphone-clips',
    'Mini Clips',
    1999,
    'Up to 60 minutes',
    'Multiple clips',
    'Cinematic iPhone clips with basic editing',
    [
      'Up to 60 minutes',
      'Cinematic iPhone clips',
      'Basic editing',
    ],
  ),
  pkg(
    'iphone-clips-b',
    'iphone-clips',
    'Cinematic Moments',
    3499,
    'Up to 2 hours',
    'Multiple clips',
    'Edited social-media content',
    [
      'Up to 2 hours',
      'Multiple cinematic clips',
      'Creative camera movements',
      'Edited social-media content',
    ],
  ),
  pkg(
    'iphone-clips-c',
    'iphone-clips',
    'Premium iPhone Shoot',
    4999,
    'Up to 3 hours',
    'Multiple clips',
    'Premium editing and storytelling',
    [
      'Up to 3 hours',
      'Multiple edited clips',
      'Creative storytelling',
      'Premium editing',
    ],
  ),
  pkg(
    'event-coverage-a',
    'event-coverage',
    'Birthday Moments',
    3999,
    'Up to 2 hours',
    '1 reel',
    'Event highlights and one edited reel',
    [
      'Up to 2 hours',
      'Event highlights',
      'One edited reel',
    ],
  ),
  pkg(
    'event-coverage-b',
    'event-coverage',
    'Engagement Highlights',
    5999,
    'Up to 3 hours',
    '2 reels',
    'Couple and event moments',
    [
      'Up to 3 hours',
      'Couple and event moments',
      'Two edited reels',
    ],
  ),
  pkg(
    'event-coverage-c',
    'event-coverage',
    'Wedding Highlights',
    9999,
    'Up to 4 hours',
    'Highlight reel',
    'Starting price — details confirmed on WhatsApp',
    [
      'Up to 4 hours',
      'Important event moments',
      'Cinematic highlight reel',
    ],
  ),
  pkg(
    'social-media-content-a',
    'social-media-content',
    'Social Starter',
    1999,
    'As per package',
    '1 reel',
    'One promotional reel',
    ['One promotional reel', 'Basic editing'],
  ),
  pkg(
    'social-media-content-b',
    'social-media-content',
    'Creator Pack',
    3499,
    'As per package',
    '2 reels',
    'Two promotional reels',
    ['Two promotional reels', 'Creative editing'],
  ),
  pkg(
    'social-media-content-c',
    'social-media-content',
    'Brand Content',
    5999,
    'As per package',
    'Multiple clips',
    'Brand-focused promotional material',
    [
      'Multiple short-form clips',
      'Brand-focused video content',
      'Edited promotional material',
    ],
  ),
  pkg(
    'personal-lifestyle-a',
    'personal-lifestyle',
    'Personal Mini Shoot',
    1999,
    'Up to 60 minutes',
    '1–2 clips',
    'Short personal cinematic clips',
    ['Cinematic clips', 'Basic editing'],
  ),
  pkg(
    'personal-lifestyle-b',
    'personal-lifestyle',
    'Lifestyle Shoot',
    3499,
    'Up to 2 hours',
    'Multiple clips',
    'Lifestyle storytelling package',
    ['Multiple clips', 'Creative editing', 'Share-ready videos'],
  ),
  pkg(
    'personal-lifestyle-c',
    'personal-lifestyle',
    'Premium Lifestyle',
    4999,
    'Up to 3 hours',
    'Multiple clips',
    'Premium lifestyle package',
    ['Extended shoot', 'Premium editing', 'Multiple deliverables'],
  ),
  pkg(
    'business-brand-videos-a',
    'business-brand-videos',
    'Business Starter',
    2499,
    'As per package',
    '1 reel',
    'Starter business promotional reel',
    ['One short brand reel', 'Basic editing'],
  ),
  pkg(
    'business-brand-videos-b',
    'business-brand-videos',
    'Business Growth',
    4499,
    'As per package',
    '2 reels',
    'Growth-focused brand content',
    ['Two promotional reels', 'Creative editing'],
  ),
  pkg(
    'business-brand-videos-c',
    'business-brand-videos',
    'Premium Brand Reel',
    6999,
    'As per package',
    'Multiple clips',
    'Premium brand storytelling',
    ['Multiple clips', 'Premium editing', 'Brand-focused delivery'],
  ),
]