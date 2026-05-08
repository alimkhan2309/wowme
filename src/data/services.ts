import {
  Syringe,
  Sparkles,
  Zap,
  Activity,
  Dumbbell,
  Stethoscope } from
'lucide-react';

export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  icon: any;
  heroImage: string;
  longDescription: string;
  items: ServiceItem[];
  benefits: string[];
  whatToExpect: string[];
  note?: string;
}

export const services: ServiceCategory[] = [
  {
    slug: "injectables",
    title: "Injectables",
    shortDescription: "Gold-standard rejuvenation by leading dermatologists.",
    icon: Syringe,
    heroImage:
      "https://images.unsplash.com/photo-1713085085470-fba013d67e65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    longDescription:
      "Experience the gold standard of facial rejuvenation. Our expert dermatologists use premium injectables to smooth wrinkles, restore volume, and enhance your natural contours with precision and artistry.",
    items: [
      { name: "Botox (Full Face / 3 zones)", price: "1,600 – 2,200 AED" },
      { name: "Botox (Per Unit)", price: "45 – 55 AED" },
      {
        name: "Dermal Fillers (Juvederm/Restylane - 1ml)",
        price: "1,600 – 2,500 AED",
      },
      { name: "Profhilo (Skin Hydration - 2ml)", price: "1,500 – 1,800 AED" },
      {
        name: "Lip Filler (Russian Lips / Natural)",
        price: "1,700 – 2,400 AED",
      },
    ],

    benefits: [
      "Immediate, visible results with minimal downtime",
      "Administered by DHA-licensed expert dermatologists",
      "Natural-looking enhancements tailored to your facial anatomy",
      "Long-lasting effects for sustained confidence",
    ],

    whatToExpect: [
      "Consultation: Comprehensive facial assessment and goal discussion.",
      "Preparation: Cleansing and application of topical numbing cream if required.",
      "Treatment: Precise, strategic injections taking 15-30 minutes.",
      "Aftercare: Post-treatment guidelines provided to maximize results and minimize swelling.",
    ],
  },
  {
    slug: "facial-tech",
    title: "Facial Tech & Glow",
    shortDescription: "Instant result treatments designed for Dubai's climate.",
    icon: Sparkles,
    heroImage:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000",
    longDescription:
      "Combat the effects of Dubai's climate with our advanced facial technologies. From deep cleansing to collagen stimulation, these treatments deliver an instant, radiant glow and long-term skin health.",
    items: [
      {
        name: "Hydrafacial Platinum (Cleanse + Peel + Hydrate)",
        price: "850 – 1,100 AED",
      },
      { name: "Oxygeneo 3-in-1 Super Facial", price: "650 – 850 AED" },
      { name: "Carbon Laser Peel (Hollywood Glow)", price: "600 – 900 AED" },
      {
        name: "Morpheus8 (RF Microneedling - Face & Neck)",
        price: "2,500 – 3,500 AED",
      },
    ],

    benefits: [
      "Deeply cleanses, exfoliates, and hydrates",
      "Stimulates collagen and elastin production",
      "Improves skin texture, tone, and clarity",
      "Customizable serums for specific skin concerns",
      "Perfect pre-event treatments for an immediate glow",
    ],

    whatToExpect: [
      "Consultation: Skin analysis to determine the best technology for your needs.",
      "Preparation: Gentle cleansing to prepare the canvas.",
      "Treatment: Application of the chosen technology (30-60 minutes).",
      "Aftercare: Application of protective serums and SPF.",
    ],
  },
  {
    slug: "laser-hair-removal",
    title: "Laser Hair Removal",
    shortDescription: "Medical-grade Alexandrite laser for lasting smoothness.",
    icon: Zap,
    heroImage:
      "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    longDescription:
      "Achieve lasting smoothness with our medical-grade Alexandrite laser technology. Safe, effective, and relatively painless, our laser hair removal treatments are suitable for various skin types.",
    items: [
      { name: "Full Body (Female)", price: "1,200 – 1,800 AED" },
      { name: "Full Body (Male)", price: "1,800 – 2,500 AED" },
      { name: "Bikini & Underarms", price: "450 – 600 AED" },
      { name: "Full Face", price: "350 – 500 AED" },
    ],

    note: "25% off when purchasing a package of 6 sessions.",
    benefits: [
      "Long-term reduction in hair growth",
      "Prevents ingrown hairs and skin irritation",
      "Advanced cooling technology for maximum comfort",
      "Fast treatment times for large areas",
      "Safe and effective medical-grade equipment",
    ],

    whatToExpect: [
      "Consultation: Patch test and assessment of hair/skin type.",
      "Preparation: Area is cleansed and shaved (if not done prior).",
      "Treatment: Laser pulses target hair follicles, with integrated cooling.",
      "Aftercare: Application of soothing cream and strict sun protection advice.",
    ],
  },
  {
    slug: "regenerative",
    title: "Regenerative Medicine",
    shortDescription: "Restoration through your body's own natural resources.",
    icon: Activity,
    heroImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2000",
    longDescription:
      "Harness the healing power of your own body. Our regenerative treatments, including PRP and IV therapies, stimulate cellular renewal, boost immunity, and restore youthful vitality from the inside out.",
    items: [
      { name: "PRP Therapy (Face Rejuvenation)", price: "900 – 1,300 AED" },
      { name: "PRP for Hair Loss (Scalp)", price: "1,100 – 1,500 AED" },
      {
        name: "IV Vitamin Drips (Energy/Glow/Immunity)",
        price: "600 – 1,200 AED",
      },
    ],

    benefits: [
      "Uses your body's natural growth factors",
      "Stimulates hair growth and thickens existing hair",
      "Improves skin texture, tone, and elasticity naturally",
      "Direct absorption of essential vitamins and minerals via IV",
      "Boosts overall wellness and energy levels",
    ],

    whatToExpect: [
      "Consultation: Medical assessment to tailor the treatment.",
      "Preparation: For PRP, a small blood sample is drawn and centrifuged. For IV, a comfortable setup is arranged.",
      "Treatment: Re-injection of PRP or administration of IV drip (30-45 mins).",
      "Aftercare: Minimal downtime; specific instructions provided based on treatment.",
    ],
  },
  {
    slug: "body-sculpting",
    title: "Body Sculpting",
    shortDescription:
      "Embosculpt HIFEM technology for sculpted, toned results.",
    icon: Dumbbell,
    heroImage:
      "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=2000",
    longDescription:
      "Redefine your physique without surgery. Utilizing advanced Embosculpt HIFEM technology, we help you build muscle and burn fat simultaneously for a sculpted, toned appearance.",
    items: [
      { name: "Embosculpt (1 session - 30 min)", price: "900 – 1,400 AED" },
      {
        name: "Body Transformation Package (10 sessions)",
        price: "7,500 – 9,000 AED",
      },
    ],

    benefits: [
      "Non-invasive muscle building and fat reduction",
      "Equivalent to thousands of crunches or squats in 30 minutes",
      "Zero downtime or recovery period required",
      "FDA-cleared technology for safety and efficacy",
      "Enhances core strength and athletic performance",
    ],

    whatToExpect: [
      "Consultation: Body assessment and goal setting.",
      "Preparation: Comfortable positioning on the treatment bed.",
      "Treatment: Applicators deliver HIFEM energy; feels like an intense workout (30 mins).",
      "Aftercare: Resume normal activities immediately; mild muscle soreness may occur.",
    ],
  },
  {
    slug: "consultations",
    title: "Consultations",
    shortDescription: "Expert assessment and personalized treatment planning.",
    icon: Stethoscope,
    heroImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000",
    longDescription:
      "Every great result begins with a thorough understanding of your unique needs. Our expert dermatologists utilize advanced 3D imaging to create a personalized roadmap for your aesthetic journey.",
    items: [
      { name: "Initial Consultation with Dermatologist", price: "350 AED" },
      { name: "3D Skin Analysis (Visia)", price: "250 AED" },
    ],

    note: "Initial consultation fee is waived if a treatment is performed on the same day.",
    benefits: [
      "In-depth analysis by DHA-licensed experts",
      "Advanced 3D imaging reveals underlying skin conditions",
      "Fully customized, long-term treatment plans",
      "Transparent discussion of expected outcomes and costs",
      "Opportunity to address all aesthetic concerns",
    ],

    whatToExpect: [
      "Intake: Review of medical history and aesthetic goals.",
      "Analysis: Visual examination and/or 3D Visia scanning.",
      "Discussion: Detailed explanation of findings and recommended options.",
      "Planning: Creation of a tailored treatment schedule and pricing estimate.",
    ],
  },
];