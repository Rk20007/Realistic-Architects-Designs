export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'interior' | 'commercial' | 'sustainable';
  categoryLabel: string;
  location: string;
  area: string;
  completionYear: string;
  coverImage: string;
  description: string;
  gallery: string[];
  features: string[];
  materials: string[];
}

export interface Service {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  suitableFor: string;
  iconName: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  comment: string;
}

export const FIRM_DETAILS = {
  name: "Realistic Architects & Designs",
  shortName: "Realistic Architects",
  foundingYear: "2011",
  address: {
    suite: "Office No. 151, 1st Floor",
    building: "Sukham Tower",
    area: "Bhagat Singh Colony, Alwar Bypass Road",
    city: "Bhiwadi",
    state: "Rajasthan",
    pincode: "301019",
    country: "India",
    landmark: "Near Alwar Bypass Circle, Commercial Hub",
  },
  phones: [
    { display: "+91 93143 67311", value: "+919314367311", primary: true },
    { display: "+91 70147 27667", value: "+917014727667", primary: false }
  ],
  whatsapp: "919314367311",
  email: "contact@realisticarchitects.com",
  hours: "Monday – Saturday: 10:00 AM – 7:30 PM (Sunday by Appointment)",
  serviceRegions: [
    "Bhiwadi Industrial Corridor",
    "Alwar Bypass Residences",
    "Dharuhera & Manesar",
    "Rewari & Bawal",
    "Gurugram / NCR",
    "Alwar & Neemrana"
  ],
  stats: [
    { value: "280+", label: "Completed Projects", detail: "Across residential, industrial & commercial" },
    { value: "14+", label: "Years Experience", detail: "Serving Bhiwadi & NCR since 2011" },
    { value: "98%", label: "Client Satisfaction", detail: "Verified reviews on Google & local listings" },
    { value: "100%", label: "Turnkey Accountability", detail: "From conceptual 3D to key handover" }
  ]
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Residential Architecture & Luxury Villas",
    tagline: "Master-planned residential spaces that unite climatic comfort with bold geometry.",
    description: "Full architectural planning, structural schematics, facade engineering, and statutory municipal sanction drawings. We craft modern private residences that maximize natural light, breeze circulation, and spatial privacy.",
    deliverables: [
      "Conceptual 2D floor plans & Vastu-aligned layouts",
      "Structural engineering & foundation calculations",
      "Photorealistic 3D exterior elevations",
      "Bhiwadi development authority sanction assistance"
    ],
    suitableFor: "Independent villas, duplex residences, row houses & farmhouse estates",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "02",
    title: "Bespoke Interior Architecture",
    tagline: "Tailored interiors balancing tactile materials, ambient illumination, and ergonomic luxury.",
    description: "From custom Italian marble flooring and fluted timber wall paneling to concealed architectural lighting. We transform bare shells into warm, bespoke homes with high-grade millwork and tailored finishes.",
    deliverables: [
      "Custom false ceiling & warm architectural lighting plans",
      "Modular kitchen engineering with Blum & Hafele hardware",
      "Custom wardrobe, vanity & bespoke furniture details",
      "Material, texture & upholstery curation"
    ],
    suitableFor: "Luxury apartments (Ashiana, Avalon, BDI), villas & executive suites",
    iconName: "LayoutGrid",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "03",
    title: "Commercial & Corporate Spatial Design",
    tagline: "Productivity-driven corporate offices, medical clinics, and flagship retail showrooms.",
    description: "Strategic spatial planning for Bhiwadi's burgeoning corporate and industrial sectors. We balance acoustic comfort, efficient staff circulation, executive presence, and brand identity in every square foot.",
    deliverables: [
      "Zoned workstation layouts & executive boardroom design",
      "Acoustic ceiling treatments & glass demountable partitions",
      "HVAC, electrical & fire suppression integration",
      "High-impact reception desks & retail facade signage"
    ],
    suitableFor: "Industrial corporate offices, retail showrooms, retail complexes & clinics",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "04",
    title: "Eco-Conscious & Mud House Architecture",
    tagline: "Passive solar principles, rammed earth textures, and climate-adaptive vernacular building.",
    description: "Specialized design for eco-resorts, organic farmhouses, and nature retreats. We leverage regional sun angles, traditional mud-brick thermal mass, central courtyards (Aangan), and rainwater collection.",
    deliverables: [
      "Thermal comfort simulation & passive cross-ventilation design",
      "Traditional lime-plaster & stabilized earth brick integration",
      "Central green courtyards with native desert landscaping",
      "Low embodied energy building envelopes"
    ],
    suitableFor: "Farmhouses, weekend retreats, eco cottages & organic resorts",
    iconName: "Leaf",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "05",
    title: "3D Photorealistic Rendering & VR Walkthroughs",
    tagline: "Exact visual certainty before a single brick is laid on site.",
    description: "Our in-house 3D studio generates hyper-realistic daytime and twilight computer-rendered perspectives, material mockups, and virtual walkthroughs so you experience your future space with total clarity.",
    deliverables: [
      "4K Ultra-HD interior and exterior architectural renders",
      "Day/Night ambient lighting simulation studies",
      "360-degree interactive panoramic room tours",
      "Realistic texture and stone pattern preview"
    ],
    suitableFor: "Homeowners, real-estate developers & commercial investors",
    iconName: "Eye",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    number: "06",
    title: "Turnkey Execution & Site Project Management",
    tagline: "Single point of accountability from blueprint to final key handover.",
    description: "Skip the stress of coordinating multiple masonry, carpentry, electrical, and plumbing contractors. Our project managers oversee daily site adherence, material quality benchmarks, and tight schedule milestones.",
    deliverables: [
      "Comprehensive Bill of Quantities (BOQ) with transparent pricing",
      "Weekly progress reporting with photographic logs",
      "Stringent structural safety & material testing",
      "On-time handover with post-completion warranty"
    ],
    suitableFor: "Busy professionals, NRI investors & industrial business owners",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "alwar-bypass-villa",
    title: "The Courtyard Villa",
    category: "residential",
    categoryLabel: "Residential Architecture",
    location: "Alwar Bypass Road, Bhiwadi",
    area: "4,600 sq.ft",
    completionYear: "2024",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    description: "A contemporary private residence organized around a double-height central landscaped courtyard. Features cantilevered concrete overhangs, louvred teak screens for solar shading, and seamless indoor-outdoor connectivity.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Double-height sky-lit living space with passive cooling",
      "Natural Kota stone & Italian Botticino flooring transition",
      "Custom copper facade screens balancing heat & privacy",
      "Integrated rooftop solar & rainwater percolation pit"
    ],
    materials: ["Exposed Cast Concrete", "Burmese Teak Louvers", "Botticino Marble", "Powder-coated Anthracite Steel"]
  },
  {
    id: "ashiana-town-penthouse",
    title: "Serene Minimalist Penthouse",
    category: "interior",
    categoryLabel: "Luxury Interior",
    location: "Ashiana Town, Bhiwadi",
    area: "3,200 sq.ft",
    completionYear: "2024",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    description: "A calming residential interior redesign prioritizing tactile warmth, fluted oak paneling, concealed storage, and warm dim-to-warm architectural illumination for an executive family.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Custom waterfall island in grey quartzite",
      "Flush motorized acoustic sliding doors",
      "Bespoke curved bouclé sectional & reading alcove",
      "Smart scene-based Lutron automated lighting"
    ],
    materials: ["European White Oak", "Grey Quartzite", "Brushed Champagne Brass", "Linen Wall Coverings"]
  },
  {
    id: "industrial-hq-bhiwadi",
    title: "Apex Manufacturing Corporate HQ",
    category: "commercial",
    categoryLabel: "Commercial Architecture",
    location: "RIICO Industrial Area, Bhiwadi",
    area: "12,500 sq.ft",
    completionYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    description: "Modernized corporate headquarters for an automotive component manufacturer. Incorporates high-efficiency thermal double glazing, flexible collaborative pods, and an inviting double-height executive reception.",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Acoustic slatted timber baffles reducing open-plan reverberation",
      "Ergonomic modular workstations with cable raceways",
      "Commanding boardroom with smart display integration",
      "Energy Star rated climate zoning"
    ],
    materials: ["High Performance DGU Glass", "Brushed Architectural Aluminum", "Terrazzo Flooring", "American Walnut"]
  },
  {
    id: "neemrana-mud-retreat",
    title: "Aravalli Eco Farm Retreat",
    category: "sustainable",
    categoryLabel: "Eco & Mud Architecture",
    location: "Neemrana Foothills, NCR Fringe",
    area: "5,800 sq.ft",
    completionYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    description: "An environmentally conscious weekend retreat built utilizing stabilized rammed earth walls, recycled red brick jali screens, and subterranean thermal cooling inspired by traditional Rajasthani stepwells.",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "400mm thick rammed-earth exterior walls keeping indoor temp 7°C cooler",
      "Terracotta jali screens inducing the Venturi wind effect",
      "Zero-cement lime plaster interior finishes",
      "Integrated rooftop organic kitchen garden"
    ],
    materials: ["Stabilized Rammed Earth", "Handmade Clay Tiles", "Reclaimed Sal Wood", "Chunam Lime Plaster"]
  },
  {
    id: "sukham-complex-retail",
    title: "The Atelier Lifestyle Studio",
    category: "commercial",
    categoryLabel: "Retail & Commercial",
    location: "Sukham Tower Complex, Bhiwadi",
    area: "2,400 sq.ft",
    completionYear: "2024",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    description: "A bespoke jewelry and interior decor boutique inside Sukham Tower. Features seamless micro-cement curves, frameless illuminated display niches, and an intimate consultation lounge.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Seamless monoblock curved micro-cement podiums",
      "High CRI 98 museum-grade spotlighting",
      "Private VIP consultation salon with sound dampening",
      "Custom brushed brass merchandise vitrines"
    ],
    materials: ["Micro-cement", "Smoked Glass", "Aged Brass", "Velvet Fabric"]
  },
  {
    id: "bdi-sunshine-duplex",
    title: "Linear Warmth Duplex",
    category: "interior",
    categoryLabel: "Bespoke Interior",
    location: "BDI Sunshine City, Bhiwadi",
    area: "2,850 sq.ft",
    completionYear: "2024",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description: "A harmonious residential transformation highlighting continuous geometric lines, concealed mood lighting, and bespoke ergonomic modular cabinetry customized for modern Indian multi-generational living.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
    ],
    features: [
      "Anti-scratch matte acrylic finish modular kitchen with tandem drawers",
      "Fluted marble TV console with floating back-lit shelves",
      "Custom prayer/mandir sanctuary with precision CNC latticework",
      "Child-safe soft edge detailing on all custom joinery"
    ],
    materials: ["Polymer Matte Laminates", "Satvario Quartz", "Solid Sheesham Accents", "Warm LED Profiles"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Rakesh Sharma",
    role: "Villa Owner",
    location: "Alwar Bypass Road, Bhiwadi",
    projectType: "Full Architecture & Turnkey Construction (4,500 sq.ft)",
    rating: 5,
    date: "2 months ago",
    comment: "Realistic Architects & Designs built our dream villa from ground up. Being an industrialist in Bhiwadi, I didn't have time to chase contractors. Their team at Sukham Tower handled structural drawings, municipal clearances, and daily site work flawlessly. The courtyard design keeps the house naturally cool in peak summer!"
  },
  {
    id: "rev-2",
    author: "Pooja & Amit Verma",
    role: "Homeowners",
    location: "Ashiana Town, Bhiwadi",
    projectType: "4BHK Interior Design & Modular Kitchen",
    rating: 5,
    date: "4 months ago",
    comment: "We visited their office at 151 Sukham Tower after looking at their 3D portfolio. The 3D render they showed us was 99% identical to the finished apartment! Superb attention to false ceiling illumination, kitchen hardware, and wardrobe storage. Very transparent in pricing."
  },
  {
    id: "rev-3",
    author: "Deepak Choudhary",
    role: "Managing Director",
    location: "Dharuhera Industrial Area",
    projectType: "Corporate Office & Reception Fit-out (8,000 sq.ft)",
    rating: 5,
    date: "6 months ago",
    comment: "Professional architects who truly understand commercial deadlines. Delivered our administrative building interiors 10 days ahead of our factory inauguration date. Exceptional acoustic design and executive boardroom finish."
  },
  {
    id: "rev-4",
    author: "Sanjay Singhal",
    role: "Property Investor",
    location: "Bhagat Singh Colony, Bhiwadi",
    projectType: "Commercial Complex Facade & Interior Elevation",
    rating: 5,
    date: "1 year ago",
    comment: "Realistic Architects gives genuine, practical design advice without unnecessary budget inflation. They respect local bylaws and create modern, striking elevations that instantly boost rental yield."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Where is Realistic Architects & Designs located?",
    a: "Our studio is located at Office No. 151, Sukham Tower, Bhagat Singh Colony, along Alwar Bypass Road in Bhiwadi, Rajasthan (Pincode: 301019). We welcome clients for walk-in discussions and scheduled design consultations from Monday to Saturday, 10:00 AM to 7:30 PM."
  },
  {
    q: "What services do you provide in Bhiwadi and NCR?",
    a: "We provide comprehensive architecture (layout planning, Vastu compliance, structural engineering, 3D elevations), interior design (luxury residences, modular kitchens, turnkey woodwork, lighting design), commercial & industrial spaces, and sustainable architecture (eco-friendly mud house and courtyard designs)."
  },
  {
    q: "Do you offer turnkey execution or only design drawings?",
    a: "We offer both! You can engage us strictly for architectural drawings and 3D visualization, or choose our popular End-to-End Turnkey Execution service where we manage material procurement, carpentry, electrical, masonry, and site supervision with a single fixed contract."
  },
  {
    q: "How does the initial consultation work?",
    a: "You can book a consultation via our website or call us directly at +91 93143 67311. We review your plot dimensions, floor requirements, aesthetic tastes, and budget expectations. We then produce an initial conceptual zoning and transparent cost estimate."
  },
  {
    q: "Do you assist with local municipal sanctions and Vastu guidelines?",
    a: "Yes. Our architectural drawings conform to Bhiwadi Municipal and UIT/BIDA building bylaws. Furthermore, our principal designers integrate traditional Vastu Shastra principles (entrance orientations, water zones, kitchen placement) seamlessly with contemporary modern architecture."
  }
];
