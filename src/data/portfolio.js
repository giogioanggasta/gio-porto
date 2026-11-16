// All content on this site, in one place. Every fact here comes from
// Giovanni Anggasta's CV, his Behance profile, or the project briefs Fira
// sent. Nothing is invented. All copy is in English; the only Indonesian
// text left is the wording baked inside Gio's original screenshots.

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`

export const asset = (path) => {
  if (typeof path !== 'string') return path
  return path.startsWith('/') ? `${base}${path.slice(1)}` : `${base}${path}`
}

export const profile = {
  name: 'Giovanni Anggasta',
  nameLower: 'giovanni anggasta',
  role: 'UI/UX Designer',
  company: 'OttoDigital Group',
  location: 'Jakarta, Indonesia',
  email: 'giogioanggasta@gmail.com',
  phoneDisplay: '+62 851-8688-1710',
  phoneHref: 'tel:+6285186881710',
  behance: 'https://www.behance.net/giovannanggast',
  behanceLabel: 'behance.net/giovannanggast',
  cvUrl: '/CV-Giovanni-Anggasta.pdf',
  heroLine: 'ui/ux designer crafting user-centered digital products.',
  heroIntro:
    'Passionate and creative UI/UX Designer designing user-centered digital experiences for web and mobile applications. Adept at conducting user research, creating wireframes and prototypes, and collaborating with cross-functional teams to bring innovative solutions to life, balancing user needs with business goals.',
  projectCount: '6 projects',
  projectCountNote: 'listed in CV portfolio',
  availableNote: 'UI/UX Designer, OttoDigital Group, since Aug 2024',
}

// Dashed route line drawn across each project panel (Hang Style motif).
// One path per panel, taken from the current website.
const ROUTES = {
  hokben: {
    d: 'M-20 400 C 240 320, 430 430, 680 350 S 1010 300, 1130 370',
    stroke: 'rgba(19,27,22,.22)',
  },
  safari: {
    d: 'M-20 120 C 260 200, 460 60, 700 140 S 1020 210, 1130 120',
    stroke: 'rgba(255,255,255,.3)',
  },
  champ: {
    d: 'M-20 330 C 240 250, 460 360, 700 280 S 1020 210, 1130 290',
    stroke: 'rgba(19,27,22,.25)',
  },
  cryptox: {
    d: 'M-20 90 C 220 20, 420 170, 660 110 S 1020 60, 1130 130',
    stroke: 'rgba(255,255,255,.35)',
  },
  flex: {
    d: 'M-20 380 C 240 300, 430 420, 680 340 S 1010 280, 1130 360',
    stroke: 'rgba(19,27,22,.22)',
  },
}

const ARROW = 'M6 18 L18 6 M9 6 H18 V15'

export { ARROW }

export const projects = [
  {
    id: 'hokben',
    number: '01',
    title: 'HokBen App',
    shortTitle: 'hokben app',
    category: 'Food and beverage · Mobile app',
    date: '',
    panel: 'light',
    route: ROUTES.hokben,
    role: 'UI/UX Designer',
    focus: 'Food ordering · Loyalty · Gamification',
    description:
      'The app was crafted to provide a smooth and intuitive user journey, enabling customers to browse, order, and track their meals in just a few taps, across Delivery, Take Away, Dine In, and Drive Thru.',
    designNote:
      'Loyalty is built in through HokBen Cash and Points, while a gamification layer of missions and a Lucky Wheel keeps customers coming back between orders.',
    tags: ['Mobile App', 'Food Ordering', 'Loyalty', 'Gamification'],
    highlights: [
      'Four ordering modes: Delivery, Take Away, Dine In, Drive Thru',
      'HokBen Cash and Points wallet with reward redemption',
      'Hoka Mission levels and Lucky Wheel gamification',
      'PIN-secured payment and live order tracking',
    ],
    cover: {
      src: '/images/hokben/1.png',
      alt: 'HokBen app home screen on a phone with promos, HokBen Cash balance and order options',
    },
    gallery: [
      { src: '/images/hokben/2.png', caption: 'Sign in, home & menu', alt: 'HokBen screens: sign in, home, and menu browsing' },
      { src: '/images/hokben/3.png', caption: 'Payment & orders', alt: 'HokBen screens: PIN entry, payment success and order list' },
      { src: '/images/hokben/4.png', caption: 'Hoka Mission & Lucky Wheel', alt: 'HokBen gamification: Hoka Mission map and Lucky Wheel on phone mockups' },
    ],
    links: [
      { label: 'view on behance', href: 'https://www.behance.net/giovannanggast' },
    ],
    behance: 'https://www.behance.net/giovannanggast',
  },
  {
    id: 'taman-safari',
    number: '02',
    title: 'Taman Safari Quest',
    shortTitle: 'taman safari quest',
    category: 'Gamification · Mobile app',
    date: '',
    panel: 'green',
    route: ROUTES.safari,
    role: 'UI/UX Designer',
    focus: 'Illustrated map · QR missions · Rewards',
    description:
      'A zoo gamification concept for Taman Safari Indonesia that turns a park visit into a quest. Visitors follow an illustrated map, complete missions at animal areas, like taking a photo with a baby lion at Baby Zoo, and scan QR codes on site to collect points.',
    designNote:
      'Points add up across levels toward a reward: a Red Panda plush. Sharing a finished mission earns bonus points, pulling friends into the game too.',
    tags: ['Mobile App', 'Gamification', 'Illustrated Map', 'QR Missions'],
    highlights: [
      'Illustrated park map with mission pins and level cards',
      'QR check-in missions worth 100 pts each, verified by staff',
      'Reward loop: collect 1,900 points to claim the prize',
      '+500 bonus points for sharing completed missions',
    ],
    cover: {
      src: '/images/taman-safari/1.png',
      alt: 'Taman Safari Quest screens fanned out: illustrated park map, Red Panda plush mission and QR scan',
    },
    gallery: [
      { src: '/images/taman-safari/2.png', caption: 'Map, mission & detail', alt: 'Taman Safari Quest: park map, Red Panda mission splash and Baby Zoo mission detail' },
      { src: '/images/taman-safari/3.png', caption: 'Mission card & reward', alt: 'Taman Safari Quest: zoomed park map mission card and mission-complete trophy screen' },
    ],
    links: [
      { label: 'view on behance', href: 'https://www.behance.net/giovannanggast' },
      { label: 'view figma file', href: 'https://www.figma.com/design/m7l0mk5ug4GonwqNYTcvYW/TSI-Portfolio?node-id=0-1&t=2RPnvEYtzQ5JrDNd-1' },
    ],
    behance: 'https://www.behance.net/giovannanggast',
  },
  {
    id: 'champ',
    number: '03',
    title: 'CHAMP: Food Ordering App',
    shortTitle: 'champ: food ordering app',
    category: 'Food ordering · 2025',
    date: '',
    panel: 'orange',
    route: ROUTES.champ,
    role: 'UI/UX Designer',
    focus: 'CHAMP Resto Indonesia · Mobile app · Design system',
    description:
      'CHAMP is a mobile food ordering application for CHAMP Resto Indonesia, designed to provide customers with a seamless dining experience. The app allows users to explore menus, customize their orders, choose between delivery, pickup, or dine-in, and manage their transactions through an intuitive and user-friendly interface.',
    designNote: '',
    tags: ['Mobile App', 'Food Ordering', 'Delivery · Pickup · Dine-In', 'Design System', 'Prototyping'],
    highlights: [
      'Designed end-to-end user journeys and user flows for the food ordering experience',
      'Created wireframes, high-fidelity UI designs, and interactive prototypes',
      'Developed reusable UI components and maintained design consistency through a design system',
      'Designed key features including menu discovery, product details, cart, checkout, order tracking, and customer account management',
      'Collaborated with stakeholders and developers to ensure design feasibility and consistent implementation',
    ],
    cover: {
      src: '/images/champ/1.png',
      alt: 'Champ deck cover: Food App Champ for Champ Restaurant Indonesia, 2025, with the Champ app home screen',
    },
    gallery: [
      { src: '/images/champ/2.png', caption: 'About the project', alt: 'Champ deck slide: About — the project with Champ Restaurant Indonesia offers Delivery, Pickup, Dine-In, Reservations and Loyalty programs' },
      { src: '/images/champ/3.png', caption: 'The challenge', alt: 'Champ deck slide: the challenge — How can we ensure a seamless ordering experience?' },
      { src: '/images/champ/4.png', caption: 'Wireframes', alt: 'Champ deck slide: low-fidelity wireframes of the home, checkout and profile screens' },
      { src: '/images/champ/5.png', caption: 'Design system', alt: 'Champ deck slide: design system with primary orange and secondary teal color styles, iconography and Inter typography' },
      { src: '/images/champ/6.png', caption: 'App screens', alt: 'Champ deck slide: app screens — sign in, order tracking, product detail with meal customisation, and membership' },
      { src: '/images/champ/7.png', caption: 'Merchant screens', alt: 'Champ deck slide: merchant screens — incoming orders to accept and a monthly sales dashboard' },
      { src: '/images/champ/8.png', caption: 'User feedback', alt: 'Champ deck slide: user feedback and key insights from testing, with percentage results' },
      { src: '/images/champ/9.png', caption: 'What users said', alt: 'Champ deck slide: what users said — I can easily find the menu and place my order; the new flow makes ordering much more seamless' },
      { src: '/images/champ/10.png', caption: 'Thank you', alt: 'Champ deck closing slide: Thank you for Watching!' },
    ],
    links: [
      { label: 'view case study on behance', href: 'https://www.behance.net/gallery/220108697/Food-App-Champ-Champ' },
      { label: 'view figma file', href: 'https://www.figma.com/design/bpdr1O80m3YuqeQIFO29RA/Champ-Portfolio?node-id=0-1&t=Z40UYD2OqNoWKx6W-1' },
    ],
    behance: 'https://www.behance.net/gallery/220108697/Food-App-Champ-Champ',
  },
  {
    id: 'cryptox',
    number: '04',
    title: 'CryptoX: Stablecoin App',
    shortTitle: 'cryptox: stablecoin app',
    category: 'Fintech, crypto',
    date: 'Apr 2026',
    panel: 'blue',
    route: ROUTES.cryptox,
    role: 'UI/UX Designer',
    focus: 'Mobile app · Digital wallet · Design system',
    description:
      'CryptoX is a modern digital wallet designed to simplify stablecoin transactions while providing real-time market insights. Users can securely send and receive stablecoins, converting IDR to USDT in a few steps, and monitor up-to-date cryptocurrency prices in one platform.',
    designNote:
      'The design pairs deep neutral surfaces with a confident blue accent, and a clean geometric sans-serif keeps dense market data readable at a glance.',
    tags: ['Mobile App', 'Digital Wallet', 'Design System', 'Dark UI'],
    highlights: [
      'IDR to USDT send flow with Instant and OTC modes, fees shown upfront',
      'Live watchlist for Spot and Futures with price-change chips',
      'Step-by-step transaction progress and downloadable receipts',
      'Full visual system: typeface, palette and components',
    ],
    cover: {
      src: '/images/cryptox/1.png',
      alt: 'CryptoX app home screen on a phone, showing a watchlist of BTC, ETH, SOL and DOGE prices',
    },
    gallery: [
      { src: '/images/cryptox/2.png', caption: 'Send stablecoin', alt: 'CryptoX send stablecoin screen with amount, coin and network selection' },
      { src: '/images/cryptox/3.png', caption: 'Send flow & confirmation', alt: 'CryptoX screens: home watchlist, send form and send confirmation' },
      { src: '/images/cryptox/4.png', caption: 'Typeface & color system', alt: 'CryptoX design system: typeface specimen and main color swatches' },
      { src: '/images/cryptox/5.png', caption: 'Progress & receipt', alt: 'CryptoX transaction progress and successful transaction receipt screens' },
    ],
    links: [
      { label: 'view on behance', href: 'https://www.behance.net/gallery/247577603/CryptoX-Stablecoin-App' },
    ],
    behance: 'https://www.behance.net/gallery/247577603/CryptoX-Stablecoin-App',
  },
  {
    id: 'flex-academy',
    number: '05',
    title: 'Flex Academy',
    shortTitle: 'flex academy',
    category: 'Education · Responsive web',
    date: 'Nov 2026',
    panel: 'light',
    route: ROUTES.flex,
    role: 'UI/UX Designer',
    focus: 'Responsive landing page · Launch & Scale journeys',
    description:
      'Flex Academy is an education platform for aspiring and existing short-term rental operators, built on the operational playbook, systems, and experience of The Flex and Base360. The responsive landing page is designed around two journeys: Launch, for people starting their first short-term rental units, and Scale, for existing operators growing a structured business.',
    designNote:
      'Created as a design test case for The Flex (UK). The design focuses on clear information hierarchy, an editorial visual direction, and straightforward conversion paths — a free masterclass for starters, and a free strategy call for operators.',
    tags: ['Web Design', 'Responsive Design', 'Landing Page', 'Education'],
    highlights: [
      'Two journeys: Launch for first units, Scale for growing an existing portfolio',
      'Six-milestone curriculum, from finding the opportunity to scaling the business',
      'Operational proof: real assets and occupancy, not passive-income promises',
      'Designed in Figma for desktop and mobile, with a serif editorial hero on small screens',
    ],
    cover: {
      src: '/images/flex-academy/1.png',
      alt: 'Flex Academy desktop hero: Build a Short-Term Rental Business That Can Actually Scale, with Launch and Scale cards',
    },
    gallery: [
      { src: '/images/flex-academy/2.png', caption: 'Lineage & ecosystem', alt: 'Flex Academy: Built from the same playbook that built The Flex — The Flex, Base360 and Flex Academy' },
      { src: '/images/flex-academy/3.png', caption: 'Six-milestone curriculum', alt: 'Flex Academy curriculum: six milestones, from finding the opportunity to scaling the business' },
      { src: '/images/flex-academy/4.png', caption: 'Two curated tracks', alt: 'Flex Academy: Where are you now? Launch and Scale track cards' },
      { src: '/images/flex-academy/5.png', caption: 'Operational proof', alt: 'Paris living room interior, the operational-proof visual for Flex Academy' },
      { src: '/images/flex-academy/6.png', caption: 'Mobile hero', alt: 'Flex Academy mobile hero with a serif headline and Launch and Scale pathway selector' },
    ],
    links: [
      { label: 'view on behance', href: 'https://www.behance.net/giovannanggast' },
    ],
    behance: 'https://www.behance.net/giovannanggast',
  },
]

export const moreWork = [
  {
    id: 'travelies',
    label: 'travelies',
    banner: 'black',
    company: 'Hacktiv8',
    title: 'Travelies: Hotel Booking',
    period: 'Apr 2024',
    description:
      'Hotel booking that stays calm: an intuitive flow connecting travelers with the right stay, fast. Guided search for destination, dates and guests, filters for price range, star rating, facilities and free cancellation, and hotel pages with ratings, reviews and an interactive location map.',
    behance: 'https://www.behance.net/gallery/247496175/Hotel-Booking-App',
  },
  {
    id: 'portal',
    label: 'portal',
    banner: 'dark',
    company: 'OttoDigital Group',
    title: 'Dashboard Business Portal',
    period: 'Sep 2024 - Jan 2025',
    description:
      'Business dashboard for OttoDigital. Conducted interviews and surveys to understand user needs and pain points, created wireframes and interactive prototypes for key workflows, and adopted an agile approach for continuous improvement based on user feedback.',
    behance: 'https://www.behance.net/giovannanggast',
  },
  {
    id: 'tokopedia',
    label: 'tokopedia',
    banner: 'black',
    company: 'Hacktiv8',
    title: 'Increase Booking Flight in Mobile Apps: Tokopedia',
    period: 'Apr - May 2024',
    description:
      'Creating an intuitive, visually appealing, and enjoyable flight booking process for users, with a promo filtration function that enables users to find flights eligible for the promotion.',
    behance: 'https://www.behance.net/giovannanggast',
  },
]

export const about = {
  headline: 'research first, pixels second.',
  paragraphs: [
    "I'm a UI/UX designer who believes good products start with listening: research first, pixels second.",
    'Adept at conducting user research, creating wireframes and prototypes, and collaborating with cross-functional teams to bring innovative solutions to life. Skilled in tools such as Figma, Sketch, and Adobe Creative Suite, with a keen eye for aesthetics and attention to detail.',
    'Committed to enhancing user satisfaction and usability through iterative design processes and user feedback, with a proven ability to balance user needs with business goals, resulting in engaging and effective product designs. Before UI/UX, I built interfaces as a freelance frontend developer and taught coding to students aged 7 and up, which still shapes how clearly I communicate ideas today.',
  ],
}

export const skills = {
  research: {
    title: 'research',
    items: ['User Research', 'A/B Testing', 'Usability Testing', 'Affinity Diagram'],
  },
  design: {
    title: 'design',
    items: [
      'Interaction and UI Design using Figma',
      'User Flows using FigJam',
      'Wireframe and Mockup',
      'Design System Design',
      'Style Guides and Library',
    ],
  },
  tools: {
    title: 'tools',
    items: ['Figma', 'Whimsical', 'Adobe XD'],
  },
}

export const experience = [
  {
    period: 'Aug 2024 - Present',
    place: 'Jakarta, Indonesia',
    title: 'UI/UX Designer',
    company: 'OttoDigital Group',
    bullets: [
      'Conduct user research and usability testing to gather insights that inform design decisions.',
      'Develop wireframes, user flows, and prototypes using Sketch, Figma, and Adobe XD.',
      'Collaborate with developers and product managers to deliver user-centered designs.',
      'Create and maintain design systems for consistency across platforms.',
    ],
  },
  {
    period: 'Nov 2022 - Aug 2023',
    place: 'Kodekiddo',
    title: 'Coding Instructor',
    company: 'Kodekiddo',
    bullets: [
      'Teach students how to code using block programming or text-based languages (Python, Java, SQL, Scratch, etc.).',
      'Lead and conduct coding classes of 25 students per class, for students ages 7 and up.',
      'Demonstrate problem-solving, critical thinking, perseverance, and patience with students in the program.',
      'Received positive feedback from students regarding the clarity of instruction, effectiveness of teaching techniques, and overall learning experience.',
    ],
  },
  {
    period: 'Mar - Jun 2020',
    place: 'Freelance',
    title: 'Frontend Developer (Freelance)',
    company: 'Topcoder',
    bullets: [
      'Develop web interfaces.',
      'Guarantee the technical feasibility of the UI/UX design.',
      'Guarantee all validated user input is sent to the backend.',
      'Demonstrated strong teamwork and collaboration skills, communicating with designers, back-end developers, and other stakeholders to integrate front-end components with the overall project architecture, resulting in timely project delivery and successful launches.',
    ],
  },
  {
    period: 'Feb - Mar 2020',
    place: 'Freelance',
    title: 'UI/UX Designer (Freelance)',
    company: 'Topcoder',
    bullets: [
      'Created wireframes, user flows, prototypes, mockups, and final designs.',
      'Received client feedback.',
      'Conducted usability testing to gather feedback and identify areas for improvement in the design.',
      'Built strong collaborative relationships with cross-functional teams, fostering a culture of design thinking and effective communication, leading to successful product launches and updates.',
    ],
  },
]

export const education = [
  {
    period: 'Graduated June 2023',
    title: 'Bachelor Degree of Computer Science',
    detail: 'Faculty of Information Technology and Science, Parahyangan Catholic University.',
    tone: 'blue',
  },
  {
    period: 'Graduated May 2024',
    title: 'UI/UX Designer Bootcamp',
    detail:
      'Hacktiv8, where the Travelies hotel booking and Tokopedia flight booking case studies were built.',
    tone: 'white',
  },
]

export const contact = {
  heading: 'have a product to design?',
  subheading: 'work with me on your next product.',
}

// Lightbox captions, exactly as on the website: one per gallery image,
// cover first, then the gallery in order.
export const lightboxCaps = {
  hokben: [
    'HokBen: home',
    'HokBen: sign in, home and menu',
    'HokBen: PIN, payment success and orders',
    'HokBen: Hoka Mission and Lucky Wheel',
  ],
  'taman-safari': [
    'Taman Safari Quest: overview',
    'Taman Safari Quest: map, mission and detail',
    'Taman Safari Quest: mission card and reward',
  ],
  champ: [
    'Champ: cover — Food App Champ',
    'Champ: about the project',
    'Champ: the challenge — a seamless ordering experience',
    'Champ: wireframes',
    'Champ: design system',
    'Champ: app screens',
    'Champ: merchant screens',
    'Champ: user feedback and key insights',
    'Champ: what users said',
    'Champ: thank you',
  ],
  cryptox: [
    'CryptoX: home and watchlist',
    'CryptoX: send stablecoin',
    'CryptoX: send flow and confirmation',
    'CryptoX: typeface and color system',
    'CryptoX: transaction progress and receipt',
  ],
  'flex-academy': [
    'Flex Academy: desktop hero',
    'Flex Academy: lineage and ecosystem',
    'Flex Academy: six-milestone curriculum',
    'Flex Academy: two curated tracks',
    'Flex Academy: operational proof',
    'Flex Academy: mobile hero',
  ],
}

// Taman Safari Quest interactive prototype. Every screen is an original
// Figma frame (440 x 956 px one-by-one exports), in the exact Figma order.
// The Otto home screen is intentionally skipped — the flow starts at the
// Red Panda intro. Only the transitions between screens are rebuilt
// (Smart Animate style).
// Points: 100 + 150 + 350 + 600 + 700 = 1,900.
export const safariMissions = [
  {
    area: 'Baby Zoo',
    title: 'Take a Photo with a Baby Lion',
    pts: 100,
    zoom: '/images/safari-quest/quest-map0-zoom.png',
    detail: '/images/safari-quest/quest-detail1.png',
    scan: '/images/safari-quest/quest-scan1.png',
    success: '/images/safari-quest/quest-success1.png',
    nextMap: '/images/safari-quest/quest-map100.png',
  },
  {
    area: 'Safari Canteen',
    title: 'Shop at Safari Canteen',
    pts: 150,
    zoom: '/images/safari-quest/quest-map100-zoom.png',
    detail: '/images/safari-quest/quest-detail2.png',
    scan: '/images/safari-quest/quest-scan2.png',
    success: '/images/safari-quest/quest-success2.png',
    nextMap: '/images/safari-quest/quest-map250.png',
  },
  {
    area: 'Reptile Area',
    title: 'Join the Animal Education Session',
    pts: 350,
    zoom: '/images/safari-quest/quest-map250-zoom.png',
    detail: '/images/safari-quest/quest-detail3.png',
    scan: '/images/safari-quest/quest-scan3.png',
    success: '/images/safari-quest/quest-success3.png',
    nextMap: '/images/safari-quest/quest-map600.png',
  },
  {
    area: 'Safari Shop',
    title: 'Buy Eco-Friendly Products at Safari Shop',
    pts: 600,
    zoom: '/images/safari-quest/quest-map600-zoom.png',
    detail: '/images/safari-quest/quest-detail4.png',
    scan: '/images/safari-quest/quest-scan4.png',
    success: '/images/safari-quest/quest-success4.png',
    nextMap: '/images/safari-quest/quest-map1200.png',
  },
  {
    area: 'Panda Area',
    title: 'Interact with the Red Panda',
    pts: 700,
    zoom: '/images/safari-quest/quest-map1200-zoom.png',
    detail: '/images/safari-quest/quest-detail5.png',
    scan: '/images/safari-quest/quest-scan5.png',
    success: '/images/safari-quest/quest-success5.png',
    nextMap: '/images/safari-quest/quest-finalmap.png',
  },
]

export const safariSteps = (() => {
  const steps = [
    { img: '/images/safari-quest/quest-intro.png', anim: 'push', mission: -1, cap: 'Mission intro: “Red Panda Plush — Play the Missions, Get the Plush”. The “Start!” button sits at the bottom.' },
    { img: '/images/safari-quest/quest-onboard1.png', anim: 'push', mission: -1, cap: 'The opening Safari Quest popup over the map — “Complete your missions and win exciting prizes!”' },
    { img: '/images/safari-quest/quest-onboard2.png', anim: 'fade', mission: -1, cap: 'Tutorial: the “Mission” explainer — complete the missions in each area to collect points.' },
    { img: '/images/safari-quest/quest-onboard3.png', anim: 'up', mission: -1, cap: 'Tutorial: “Mission Overview” — the Level 1 · Baby Zoo card rises from the bottom of the map.' },
    { img: '/images/safari-quest/quest-onboard4.png', anim: 'fade', mission: -1, cap: 'Tutorial: “Safari Point” — the points you collect from completed missions.' },
    { img: '/images/safari-quest/quest-map0.png', anim: 'push', mission: -1, cap: 'The Taman Safari map — 0 pts. Five mission pins are waiting to be visited.' },
  ]
  safariMissions.forEach((m, i) => {
    steps.push({ img: m.zoom, anim: 'zoom', mission: i, cap: `The map zooms in to the ${m.area} pin — the Level ${i + 1} mission card appears at the bottom.` })
    steps.push({ img: m.detail, anim: 'up', mission: i, cap: `Mission detail: “${m.title}” — ${m.pts} pts. The full instructions for earning the points are listed, with a “Scan QR” button at the bottom.` })
    steps.push({ img: m.scan, anim: 'fade', mission: i, cap: `Scan the QR Code at ${m.area} — the code is verified by staff on site.` })
    steps.push({ img: m.nextMap, anim: 'fade', mission: i, successOf: i, popup: m.success, cap: `The original success card pops up over the map: “${m.title}: Mission Complete!” — +${m.pts} points added.` })
  })
  steps.push({ img: '/images/safari-quest/quest-fin1.png', anim: 'fade', mission: -1, cap: 'Every mission is done — “MISSION COMPLETE!”' })
  steps.push({ img: '/images/safari-quest/quest-fin2.png', anim: 'fade', mission: -1, cap: '“You collected 1,900 Points!”' })
  steps.push({ img: '/images/safari-quest/quest-fin3.png', anim: 'up', mission: -1, finale: true, cap: 'The trophy and the “Claim Your Prize” button. A +500 point bonus waits if a mission is shared on social media.' })
  steps.push({ img: '/images/safari-quest/quest-finalmap.png', anim: 'push', mission: -1, cap: 'Back to the map — the quest is complete!' })
  return steps
})()

function resolveAssets(obj) {
  if (!obj || typeof obj !== 'object') return obj
  for (const key of Object.keys(obj)) {
    const val = obj[key]
    if (typeof val === 'string' && (val.startsWith('/images/') || val.startsWith('/CV-'))) {
      obj[key] = asset(val)
    } else if (typeof val === 'object') {
      resolveAssets(val)
    }
  }
  return obj
}

resolveAssets(profile)
resolveAssets(projects)
resolveAssets(about)
resolveAssets(safariMissions)
resolveAssets(safariSteps)
