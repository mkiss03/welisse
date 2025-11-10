export const SERVICES = [
  {
    id: "webdev",
    icon: "Globe",
    title: "Webfejlesztés",
    subtitle: "Modern, Blazing Fast Websites",
    description: [
      "React / Next.js alapú weboldalak",
      "E-commerce platformok (Shopify, WooCommerce, custom)",
      "Landing page-ek konverzió-optimalizálva",
      "Progressive Web Apps (PWA)",
      "SEO & Performance optimalizálás",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    id: "software",
    icon: "Code",
    title: "Egyedi Szoftver",
    subtitle: "Skálázható Backend & Admin Rendszerek",
    description: [
      "Custom CRM és ERP rendszerek",
      "Admin dashboardok (analytics, reporting)",
      "API fejlesztés és integrációk (Stripe, Twilio, stb.)",
      "Automatizált workflow-k (Zapier, Make.com)",
      "Adatbázis tervezés és optimalizálás",
    ],
    techStack: ["Node.js", "PostgreSQL", "Prisma", "REST API", "GraphQL"],
  },
  {
    id: "ai",
    icon: "Brain",
    title: "AI Integráció",
    subtitle: "Intelligens Automatizáció ChatGPT-vel",
    description: [
      "AI chatbotok ügyfélszolgálathoz",
      "Intelligens adatelemzés és reporting",
      "Email automatizáció AI válaszokkal",
      "Document processing (PDF, OCR)",
      "Custom AI modellek (OpenAI, Anthropic Claude)",
    ],
    techStack: ["OpenAI", "Claude", "LangChain", "Pinecone", "RAG"],
  },
];

export const PROJECTS = [
  {
    id: "hornetgarage",
    title: "HornetGarage Autókozmetika",
    category: ["weboldal", "ecommerce"],
    thumbnail: "/images/projects/hornetgarage.jpg",
    technologies: ["Next.js", "Stripe", "Resend"],
    description: "Prémium autókozmetika weboldal online időpontfoglalással",
    results: [
      "200+ havi foglalás",
      "40% konverzió növekedés",
      "98 PageSpeed Score",
    ],
    liveUrl: "https://hornetgarage.hu",
    featured: true,
  },
  {
    id: "besthomes",
    title: "Best Homes Espana",
    category: ["weboldal", "crm"],
    thumbnail: "/images/projects/besthomes.jpg",
    technologies: ["Next.js", "PostgreSQL", "Google Maps API"],
    description: "Ingatlan platform spanyol nyaralókkal, többnyelvű",
    results: [
      "500+ ingatlan listázás",
      "3 nyelv support (HU/EN/ES)",
      "50+ lead/hó",
    ],
    liveUrl: "https://besthomesespana.com",
    featured: true,
  },
  {
    id: "vizvar",
    title: "Vízvár Apartmanok",
    category: ["weboldal", "booking"],
    thumbnail: "/images/projects/vizvar.jpg",
    technologies: ["Next.js", "Stripe", "iCal sync"],
    description: "Booking.com független foglalási platform",
    results: [
      "0% jutalék (független rendszer)",
      "80% foglaltság",
      "Automatikus értesítések",
    ],
    liveUrl: "https://vizvarapartmanok.hu",
    featured: true,
  },
  {
    id: "minicrm",
    title: "Mini CRM (AI)",
    category: ["ai", "szoftver"],
    thumbnail: "/images/projects/minicrm.jpg",
    technologies: ["React", "OpenAI", "Drag & Drop"],
    description: "Lead-kezelő AI email összegzéssel, localStorage alapú",
    features: [
      "Drag & drop pipeline",
      "AI email summary",
      "AI válaszgenerálás",
      "LocalStorage (backend nélkül)",
    ],
    demoUrl: "/crm/crm.html",
    isLiveDemo: true,
    featured: true,
  },
  {
    id: "flowOrchestrator",
    title: "Flow Orchestrator Lite",
    category: ["ai", "tool"],
    thumbnail: "/images/projects/flow-orchestrator.jpg",
    technologies: ["React", "OpenAI", "Calendar API"],
    description:
      "Természetes nyelvi parancsok → feladatok, emailek, események",
    features: [
      "Natural language processing",
      "Task automation",
      "Email & Calendar integration",
      "Mock vagy valós OpenAI",
    ],
    demoUrl: "/flow-orchestrator/flow-orchestrator.html",
    isLiveDemo: true,
    featured: true,
  },
  {
    id: "temetkezespro",
    title: "Temetkezéspro.com",
    category: ["weboldal", "ai"],
    thumbnail: "/images/projects/temetkezespro.jpg",
    technologies: ["Next.js", "Resend", "AI Assistant"],
    description: "Modern temetkezési szolgáltatás platform AI ügyfélszolgálattal",
    liveUrl: "https://temetkezespro.com",
    featured: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "János",
    role: "Tulajdonos",
    company: "HornetGarage",
    rating: 5,
    text: "Gyors szállítás, pontos kommunikáció. A CRM rendszer pontosan azt tudja, amire szükségünk volt.",
    avatar: "/images/team/janos.jpg",
  },
  {
    id: 2,
    name: "Péter",
    role: "CEO",
    company: "Best Homes Espana",
    rating: 5,
    text: "Professzionális csapat, modern megoldások. A webshopunk forgalma 30%-kal nőtt az új platform óta.",
    avatar: "/images/team/peter.jpg",
  },
  {
    id: 3,
    name: "Anna",
    role: "Founder",
    company: "Tech Startup",
    rating: 5,
    text: "Az AI chatbot félórás munkát vált ki naponta. Átlátható árazás, hosszú távú támogatás.",
    avatar: "/images/team/anna.jpg",
  },
  {
    id: 4,
    name: "Márk",
    role: "Tulajdonos",
    company: "E-commerce",
    rating: 5,
    text: "A Welisse csapata túlszárnyalta az elvárásainkat. Az új weboldal nem csak szép, hanem gyors és konvertál is.",
    avatar: "/images/team/mark.jpg",
  },
  {
    id: 5,
    name: "Eszter",
    role: "HR Manager",
    company: "TechCorp",
    rating: 5,
    text: "6 héten belül élőben volt az egyedi CRM rendszerünk. A támogatásuk példaértékű.",
    avatar: "/images/team/eszter.jpg",
  },
  {
    id: 6,
    name: "Gábor",
    role: "Founder",
    company: "SaaS Startup",
    rating: 5,
    text: "Az AI integráció forradalmasította az ügyfélszolgálatunkat. 70%-kal csökkent a válaszidő.",
    avatar: "/images/team/gabor.jpg",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Mennyibe kerül egy weboldal?",
    answer:
      "A költség 300.000 Ft-tól indul egyszerű landing page-ek esetén, komplex e-commerce vagy CRM rendszereknél 800.000 - 2.000.000 Ft között mozog. Minden projekt egyedi, ingyenes konzultáción pontosítjuk az árat.",
  },
  {
    question: "Mennyi idő alatt készül el egy projekt?",
    answer:
      "Landing page: 2-3 hét. E-commerce/CRM: 6-10 hét. Komplex szoftver: 3-6 hónap. Agile sprint-ekkel dolgozunk, heti update-ekkel.",
  },
  {
    question: "Milyen technológiákat használtok?",
    answer:
      "Főként React/Next.js frontend-hez, Node.js backend-hez, PostgreSQL adatbázishoz. AI projektekhez OpenAI GPT-4 és Claude. Mindig a projekthez legjobban illő tech stack-et választjuk.",
  },
  {
    question: "Van ingyenes konzultáció?",
    answer:
      "Igen! Az első 30 perces konzultáció teljesen ingyenes. Megbeszéljük az igényeidet, javaslatot teszünk és árajánlatot készítünk.",
  },
  {
    question: "Kaptok hostingot és domain-t is?",
    answer:
      "Igen, a projektek tartalmazzák a hosting setup-ot (Vercel, AWS, stb.) és segítünk a domain regisztrációban/átkötésben is.",
  },
  {
    question: "Milyen support-ot kínáltok a launch után?",
    answer:
      "Minden projekthez jár 1-3 hónap ingyenes technikai support (csomag függő). Utána opcionális karbantartási csomagok 25.000 Ft/hó-tól.",
  },
  {
    question: "Tudok-e magam szerkeszteni az oldalon?",
    answer:
      "Igen! Admin felületet készítünk, ahol könnyedén frissítheted a tartalmakat. Képzést is tartunk a használatról.",
  },
  {
    question: "Működtök AI integrációval?",
    answer:
      "Abszolút! ChatGPT, Claude és egyéb AI eszközöket integrálunk weboldalakba (chatbotok, email automatizáció, adatelemzés).",
  },
  {
    question: "Van garancia?",
    answer:
      "Igen, 1 év technikai garancia minden projektre. Ha bármilyen bug vagy hiba lép fel, ingyen javítjuk.",
  },
  {
    question: "Tudok részletfizetést kérni?",
    answer:
      "Igen, rugalmas fizetési ütemezés: 30% előleg, 40% fejlesztés közben, 30% átadáskor. Nagyobb projekteknél több részletben is.",
  },
];

export const TECH_STACK = {
  frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Vue.js", icon: "SiVuedotjs" },
    { name: "Svelte", icon: "SiSvelte" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Framer Motion", icon: "SiFramer" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "Python", icon: "SiPython" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Redis", icon: "SiRedis" },
  ],
  ai: [
    { name: "OpenAI GPT-4", icon: "SiOpenai" },
    { name: "Claude", icon: "SiAnthropic" },
    { name: "LangChain", icon: "SiChainlink" },
    { name: "Pinecone", icon: "SiPinecone" },
    { name: "HuggingFace", icon: "SiHuggingface" },
  ],
  devops: [
    { name: "Vercel", icon: "SiVercel" },
    { name: "AWS", icon: "SiAmazonaws" },
    { name: "Docker", icon: "SiDocker" },
    { name: "GitHub Actions", icon: "SiGithubactions" },
    { name: "Cloudflare", icon: "SiCloudflare" },
  ],
};

export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "300.000 Ft-tól",
    description: "Kisvállalkozásoknak, freelancereknek",
    features: [
      "Landing page / bemutatkozó oldal",
      "5 oldal",
      "Mobilbarát dizájn",
      "Kapcsolati űrlap",
      "Alapvető SEO",
      "1 hónap support",
      "Hosting & domain setup",
    ],
    cta: "Ajánlatot Kérek",
    featured: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "800.000 Ft-tól",
    description: "Növekvő cégeknek, online boltoknak",
    features: [
      "Minden a Starter-ből +",
      "E-commerce / CRM rendszer",
      "API integrációk (Stripe, Twilio, stb.)",
      "Admin dashboard",
      "Haladó SEO & Analytics",
      "Email automatizáció (Resend)",
      "3 hónap support",
      "Teljesítmény garancia (95+ PageSpeed)",
    ],
    cta: "Ajánlatot Kérek",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Egyedi Árazás",
    description: "Nagyvállalatok, komplex projektekhez",
    features: [
      "Minden a Professional-ből +",
      "AI integráció (ChatGPT, Claude)",
      "Custom szoftver fejlesztés",
      "Mikroszervíz architektúra",
      "DevOps & CI/CD",
      "Dedikált fejlesztő csapat",
      "6 hónap support",
      "SLA garancia (99.9% uptime)",
    ],
    cta: "Konzultáció Foglalása",
    featured: false,
  },
];

export const STATS = [
  { label: "Elkészült Projekt", value: 50, suffix: "+" },
  { label: "Avg PageSpeed", value: 95, suffix: "+" },
  { label: "Elégedett Ügyfél", value: 100, suffix: "%" },
  { label: "Órás Support", value: 24, suffix: "/7" },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Felfedezés",
    description: [
      "Ingyenes konzultáció és igényfelmérés",
      "Projektcélok és üzleti követelmények meghatározása",
      "Technológiai stack javaslat és architektúra tervezés",
      "Pontos időkeret és részletes árajánlat",
    ],
  },
  {
    step: 2,
    title: "Tervezés",
    description: [
      "Wireframe és high-fidelity mockup készítése",
      "UX/UI dizájn modern design rendszerrel",
      "Iteratív feedback körök és finomítások",
      "Végleges jóváhagyás és design handoff",
    ],
  },
  {
    step: 3,
    title: "Fejlesztés",
    description: [
      "Agile sprint metodológia (2 hetes ciklusok)",
      "Heti státusz call-ok és átlátható kommunikáció",
      "Teljes GitHub hozzáférés és kód review",
      "Staging környezet élő preview linkkel",
    ],
  },
  {
    step: 4,
    title: "Tesztelés",
    description: [
      "Automatizált unit és integrációs tesztek",
      "Manuális QA és cross-browser kompatibilitás",
      "Teljesítmény audit és PageSpeed optimalizálás",
      "Biztonsági audit és penetrációs tesztek",
    ],
  },
  {
    step: 5,
    title: "Indítás",
    description: [
      "Production környezetre történő deployment",
      "DNS, domain és SSL tanúsítvány konfiguráció",
      "Analytics, monitoring és error tracking beállítása",
      "Felhasználói képzés és dokumentáció átadás",
    ],
  },
  {
    step: 6,
    title: "Támogatás",
    description: [
      "3 hónap ingyenes technikai support és hibajavítás",
      "Proaktív monitoring és karbantartás",
      "Rendszeres biztonsági és funkcionális frissítések",
      "Prioritásos hotline 24/7 elérhetőséggel",
    ],
  },
];
