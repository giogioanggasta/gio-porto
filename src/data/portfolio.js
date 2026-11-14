// All content on this site, in one place. Every fact here comes from
// Giovanni Anggasta's CV or his Behance profile. Nothing is invented.

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

export const projects = [
  {
    id: 'cryptox',
    number: '01',
    title: 'CryptoX: Stablecoin App',
    shortTitle: 'cryptox',
    category: 'Fintech, crypto',
    date: 'Apr 2026',
    panel: 'blue',
    statement:
      'A stablecoin wallet that makes sending USDT feel as simple as sending a message, with live prices in the same place.',
    role: 'UI/UX Designer',
    focus: 'Mobile app, Digital wallet, Design system',
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
      { src: '/images/cryptox/3.png', caption: 'Send flow and confirmation', alt: 'CryptoX screens: home watchlist, send form and send confirmation' },
      { src: '/images/cryptox/4.png', caption: 'Typeface and color system', alt: 'CryptoX design system: typeface specimen and main color swatches' },
      { src: '/images/cryptox/5.png', caption: 'Progress and receipt', alt: 'CryptoX transaction progress and successful transaction receipt screens' },
    ],
    behance: 'https://www.behance.net/gallery/247577603/CryptoX-Stablecoin-App',
  },
  {
    id: 'hokben',
    number: '02',
    title: 'HokBen App',
    shortTitle: 'hokben app',
    category: 'Food and beverage, Mobile app',
    date: '',
    panel: 'light',
    statement:
      'Ordering HokBen in a few taps, across delivery, take away, dine in, and drive thru, with loyalty built into every order.',
    role: 'UI/UX Designer',
    focus: 'Food ordering, Loyalty, Gamification',
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
      { src: '/images/hokben/2.png', caption: 'Sign in, home and menu', alt: 'HokBen screens: sign in, home, and menu browsing' },
      { src: '/images/hokben/3.png', caption: 'Payment and orders', alt: 'HokBen screens: PIN entry, payment success and order list' },
      { src: '/images/hokben/4.png', caption: 'Hoka Mission and Lucky Wheel', alt: 'HokBen gamification: Hoka Mission map and Lucky Wheel on phone mockups' },
    ],
    behance: 'https://www.behance.net/giovannanggast',
  },
  {
    id: 'taman-safari',
    number: '03',
    title: 'Taman Safari Quest',
    shortTitle: 'taman safari quest',
    category: 'Gamification, Mobile app',
    date: '',
    panel: 'green',
    statement:
      'A zoo visit turned into a quest: follow the map, scan the codes, finish the missions, win the red panda.',
    role: 'UI/UX Designer',
    focus: 'Illustrated map, QR missions, Rewards',
    description:
      'A zoo gamification concept for Taman Safari Indonesia that turns a park visit into a quest. Visitors follow an illustrated map, complete missions at animal areas, like taking a photo with a baby lion at Baby Zoo, and scan QR codes on site to collect points.',
    designNote:
      'Points add up across levels toward a reward: a Red Panda plush. Sharing a finished mission earns bonus points, pulling friends into the game too.',
    tags: ['Mobile App', 'Gamification', 'Illustrated Map', 'QR Missions'],
    highlights: [
      'Illustrated park map with mission pins and level cards',
      'QR check-in missions worth 100 pts each, verified by staff',
      'Reward loop: collect 1.900 points to claim the prize',
      '500 bonus points for sharing completed missions',
    ],
    cover: {
      src: '/images/taman-safari/1.png',
      alt: 'Taman Safari Quest screens fanned out: illustrated park map, Red Panda plush mission and QR scan',
    },
    gallery: [
      { src: '/images/taman-safari/2.png', caption: 'Map, mission and detail', alt: 'Taman Safari Quest: park map, Red Panda mission splash and Baby Zoo mission detail' },
      { src: '/images/taman-safari/3.png', caption: 'Mission card and reward', alt: 'Taman Safari Quest: zoomed park map mission card and mission-complete trophy screen' },
    ],
    behance: 'https://www.behance.net/giovannanggast',
  },
  {
    id: 'travelies',
    number: '04',
    title: 'Travelies: Hotel Booking',
    shortTitle: 'travelies: hotel booking',
    category: 'Travel, Hacktiv8',
    date: 'Apr 2024',
    panel: 'black',
    statement:
      'Hotel booking that stays calm: search, filter, and pick a stay by what is around it, in one guided flow.',
    role: 'UI/UX Designer',
    focus: 'Booking flow, Search and filters, Maps',
    description:
      'Travelies keeps hotel booking simple: an intuitive, visually appealing flow that connects travelers with the right stay, fast. Advanced search lets users combine destination, dates, and guests in one calm, step-by-step sheet.',
    designNote:
      'Hotel pages pair rich photography with ratings, guest reviews, and an interactive location map, so choosing by proximity to the beach or the airport takes seconds, not tabs.',
    tags: ['Mobile App', 'Travel', 'Booking Flow', 'Hacktiv8 Project'],
    highlights: [
      'Guided search: where, when, and who is coming in one flow',
      'Filters for price range, star rating, facilities and free cancellation',
      'Hotel detail with ratings, reviews and popular spots nearby',
      'Interactive map to pick stays by location',
      'Real-time availability, secure payments and efficient booking management',
    ],
    cover: {
      src: '/images/travelies/1.png',
      alt: 'Travelies hotel booking app cover with hotel listings, search and filter screens',
    },
    gallery: [
      { src: '/images/travelies/2.png', caption: 'Welcome, feed and search', alt: 'Travelies screens: welcome, hotel feed and search' },
      { src: '/images/travelies/3.png', caption: 'Dates and guests', alt: 'Travelies booking flow: calendar date picker and guest selector' },
      { src: '/images/travelies/4.png', caption: 'Hotel detail and location', alt: 'Travelies hotel detail page with reviews and location map of AYANA Resort Bali' },
    ],
    behance: 'https://www.behance.net/gallery/247496175/Hotel-Booking-App',
  },
]

export const moreWork = [
  {
    id: 'champ',
    label: 'champ',
    company: 'OttoDigital Group',
    title: 'Food App Champ: Champ',
    period: 'Nov 2024 - Apr 2025',
    description:
      'Project collaboration with Champ Restaurant Indonesia, an application offering Delivery, Pickup, Dine In, Reservations, Loyalty programs, and more. Created wireframes and interactive prototypes to visualize design concepts and gather feedback, collaborating with developers and stakeholders to implement the design vision.',
    behance: 'https://www.behance.net/giovannanggast',
  },
  {
    id: 'portal',
    label: 'portal',
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
  },
  {
    period: 'Graduated May 2024',
    title: 'UI/UX Designer Bootcamp',
    detail:
      'Hacktiv8, where the Travelies hotel booking and Tokopedia flight booking case studies were built.',
  },
]

export const contact = {
  heading: 'have a product to design?',
  subheading: 'work with me on your next product.',
}
