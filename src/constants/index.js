import { navigate } from "gatsby";
import React from "react";
const weDoData = [
  { icon: "/lounch-icon.svg", title: "Develop an MVP", desc: "Launch foolproof MVPs that stand \n the test of time." },
  { icon: "/expand-icon.svg", title: "Expand Your Team", desc: "Get the best returns on investment \n with our hi-tech industry experts." },
  { icon: "/advice-icon.svg", title: "Get CTO’s advice", desc: "Know what the market leaders have to \n say to grow your technical footprint." },
  { icon: "/create-design-icon.svg", title: "Create a design", desc: "We live and breathe design thinking. \n Take advantage!" },
  { icon: "/transform-icon.svg", title: "Transform your enterprise", desc: "Stop chasing the trends and start building \n your enterprise differentiator." },
  { id: 6 },
];
const weDoDataNew = [
  { icon: "/lounch-icon.svg", title: "Develop \n an MVP", desc: "Launch foolproof MVPs that stand the test of time." },
  { icon: "/expand-icon.svg", title: "Expand Your \n Team", desc: "Get the best returns on investment with our hi-tech industry experts." },
  { icon: "/advice-icon.svg", title: "Get CTO’s \n advice", desc: "Know what the market leaders have to say to grow your technical footprint." },
  { icon: "/create-design-icon.svg", title: "Create a \n design", desc: "We live and breathe design thinking. Take advantage!" },
];
const counterData = [
  { id: 1, count: 150, desc: 'Full Stack Developers', symbol: '+' },
  { id: 2, count: 300, desc: 'Solutions Delivered \n Successfully', symbol: '+' },
  { id: 3, count: 98, desc: 'Customer Happiness \n Index', symbol: '%' },
  { id: 4, count: 10, desc: 'Years of Excellency', symbol: '' },
]
const achievementsData = [
  { id: 1, count: 10, desc: 'Years of driving growth', symbol: '+' },
  { id: 2, count: 100, desc: 'Tech Experts', symbol: '+' },
  { id: 3, count: 300, desc: 'Projects Delivered', symbol: '+' },
  { id: 4, count: 98, desc: 'Customer Happiness Index', symbol: '%' },
]
const counterData2 = [
  { id: 1, count: 150, desc: 'Full Stack Developers', symbol: '+' },
  { id: 2, count: 300, desc: 'Solutions Delivered \n Successfully', symbol: '+' },
  { id: 2, count: 200, desc: 'Tech Stacks', symbol: '+' },
  { id: 3, count: 98, desc: 'Customer Happiness \n Index', symbol: '%' },
]
const counterData3 = [
  { id: 1, count: 10, desc: 'Extensions Developed Successfully', symbol: '+' },
  { id: 2, count: 30000, desc: 'Active Users', symbol: '+' },
  { id: 3, count: 4.3, desc: 'Rating', symbol: '+' },
  { id: 4, count: 1000, desc: 'Downloads', symbol: '+' },
]
const dedicationWork = [
  { id: 1, count: 11000, desc: 'Web pages scraped so far', symbol: '+' },
  { id: 2, count: 70, desc: 'Companies served', symbol: '+' },
  { id: 3, count: 99.9, desc: 'Data Reliability', symbol: '%' },
]
const productDesignCounterData = [
  { id: 1, count: 150, desc: "Full Stack Developers", symbol: "+" },
  { id: 2, count: 150, desc: "Solutions Delivered Successfully", symbol: "+" },
  { id: 3, count: 98, desc: "Customer Happiness Index", symbol: "%" },
  { id: 4, desc: "Customers stay for future projects", symbol: "" },
  { id: 5, count: 8, desc: "Years of Spectacular Experience", symbol: "+" },
  { id: 6, count: 3, desc: "Global Offices", symbol: "" },
];

const companyCounter = [
  { id: 1, count: 98, desc: 'Customer Happiness Index', symbol: '%' },
  { id: 2, count: 300, desc: 'Partnerships Achieved', symbol: '+' },
  { id: 3, count: 150, desc: 'Projects Delivered', symbol: '+' },
  { id: 4, count: 15, desc: 'SaaS-Based Platforms Developed', symbol: '+' },
  { id: 5, count: 30000, desc: 'Hrs of Productivity Unlocked!', symbol: '+' },
  { id: 6, count: 100, desc: 'Industry Experts', symbol: '+' },
  { id: 7, count: 10, desc: 'Years of Excellency', symbol: '' },
  { id: 8, count: 3, desc: 'Global Offices', symbol: '' },
]
const peopleFirstData = [
  { id: 1, icon: '/people-first-icon-1.svg', desc: "E-commerce" },
  { id: 2, icon: '/people-first-icon-2.svg', desc: "Logistics & Supply Chain" },
  { id: 3, icon: '/people-first-icon-3.svg', desc: "FinTech" },
  { id: 4, icon: '/people-first-icon-4.svg', desc: "Healthcare" },
  { id: 5, icon: '/people-first-icon-5.svg', desc: "EdTech" },
  { id: 6, icon: '/people-first-icon-6.svg', desc: "Retail & Consumer Goods" },
  { id: 7, icon: '/people-first-icon-7.svg', desc: "Travel & Transportation", },
  { id: 8, icon: '/iot.svg', desc: "IoT", }
];
const whyChooseQbatchData = [
  { id: 1, icon: '/technical-excellence.svg', desc: 'Technical Excellence' },
  { id: 2, icon: '/efficient-talent-pool.svg', desc: 'Efficient Talent Pool' },
  { id: 3, icon: '/data-ownership.svg', desc: 'Data Ownership and Control' },
  { id: 4, icon: '/Immaculate-software.svg', desc: 'Immaculate Software Engineering' },
  { id: 5, icon: '/strongly-agile-product.svg', desc: 'Strongly Agile' },
  { id: 6, icon: '/optimal-rd.svg', desc: 'Optimal R&D' },
  { id: 7, icon: '/proactive-communication.svg', desc: 'Proactive Communication' },
  { id: 8, icon: '/flexible-business.svg', desc: 'Flexible Business Models' },
  { id: 9, icon: '/great-value.svg', desc: 'Great Value for Money' },
]
const softwareProductData = [
  { id: 1, icon: '/sass-platform.svg', desc: 'SaaS Platforms' },
  { id: 2, icon: '/minimam-value.svg', desc: 'Minimum Viable Product' },
  { id: 3, icon: '/e-platform.svg', desc: 'E-learning\nPlatforms' },
  { id: 4, icon: '/online-marketplaces.svg', desc: 'Online\nMarketplaces' },
  { id: 5, icon: '/data-visulations.svg', desc: 'Data Visualization Dashboards' },
  { id: 6, icon: '/content-management.svg', desc: 'Content Management Platforms' },
  { id: 7, icon: '/location-based.svg', desc: 'Location-based\nApps' },
  { id: 8, icon: '/warehouse-management.svg', desc: 'Warehouse Management Systems' },
  { id: 9, icon: '/online-streaming.svg', desc: 'Online Streaming Platforms' },
  { id: 10, icon: '/booking-apps.svg', desc: 'Booking Apps' },
  { id: 11, icon: '/on-demand-services.svg', desc: 'On-demand services platforms' },
  { id: 12, icon: '/sap-enterprises.svg', desc: 'SAP Enterprises\nTools' },
]
const developmentProcessData = [
  {
    image: '/1-2-weeks.svg',
    duration: '1 - 2 weeks',
    title: 'Discovery Phase',
    description:
      'We test and validate your unproven concept according to the market situation before securing your idea and investment.',
  },
  {
    image: '/6-8-weeks.svg',
    duration: '6 - 8 weeks',
    title: 'MVP Development',
    description:
      'We finalize crucial features and functionality to reduce time to market and make the product necessarily and publicly useful.',
  },
  {
    image: '/retainer-based.svg',
    duration: 'Retainer Based',
    title: 'Maintenance & Support',
    description:
      'It may take a few weeks to deploy and make your product available to the general masses. We continue our support to growing your product.',
  },
]


const values = [
  { icon: "/value-img-1.svg", title: "Curious", description: "Asking the right questions and relentlessly adapting." },
  { icon: "/value-img-2.svg", title: "Brave", description: "We are courageously focused on impact over the status quo." },
  { icon: "/value-img-3.svg", title: "Kind", description: "We live and preach an inclusive and collaborative atmosphere." },
  { icon: "/value-img-4.svg", title: "Driven", description: "Led by purpose, demonstrated through professional excellence." },
  { icon: "/value-img-5.svg", title: "Transparent", description: "We hold ourselves accountable for delivering the promises we make." },
  { icon: "/value-img-6.svg", title: "Whimsical", description: "We’re always thinking of ways to build a more accessible and innovative future." },
  { icon: "/value-img-7.svg", title: "Empower", description: "Empowering visionaries to build their ideas and own them." },
  { icon: "/value-img-8.svg", title: "Intentional", description: "We know what we do and we do it with careful thought and purpose." },
  { icon: "/value-img-9.svg", title: "Counter-Culture", description: "We don’t compete, we play our own game." },
];

const CareersData = [
  { jobTitle: "Job Title 1", location: "Onsite, Lahore", tags: ["Chip/Label", "Ruby On Rails", "Django", "nice"] },
  { jobTitle: "Job Title 2", location: "Onsite, Lahore", tags: ["Chip/Label", "React", "Node.js", "nice", "nice-2"] },
];

const homeTiles = ["Transparent", "Trustworthy", "Reliable", "Progressive", "Real", "Creative"];
const dedicatedTiles = ["Top talent", "100% Stable Code", "On-time & On-budget", "Proactive Communication"];

const data = [
  {
    id: 1,
    challenges: "Inability to find top talent",
    solve: "100+ experts ready to fill possible gaps",
    icon1: "/top-talent-icon1.svg",
    icon2: "/top-talent-icon2.svg",
  },
  {
    id: 2,
    challenges: "Slow delivery and time-to-market",
    solve: "5x your time-to-market with our mission-critical services",
    icon1: "/delivery-time-icon1.svg",
    icon2: "/delivery-time-icon2.svg",
  },
  {
    id: 3,
    challenges: "Unpredictability about making investments",
    solve: "No more spending on unproven ideas",
    icon1: "/investment-icon1.svg",
    icon2: "/investment-icon2.svg",
  },
  {
    id: 4,
    challenges: "Is your idea risk-free",
    solve: "Build minimal to zero-risk solutions",
    icon1: "/risk-free-icon1.svg",
    icon2: "/risk-free-icon2.svg",
  },
  {
    id: 5,
    challenges: "Tired of slow development and delivery",
    solve: "Readily identify blockers for a quick launch",
    icon1: "/development-icon1.svg",
    icon2: "/development-icon2.svg",
  },
  {
    id: 6,
    challenges: "Honest feedback feels like a dream",
    solve: "Get market-friendly feedback to set your next move",
    icon1: "/feedback-icon1.svg",
    icon2: "/feedback-icon2.svg",
  },
  {
    id: 7,
    challenges: "A future-ready plan is what you ever wanted",
    solve: "Intense industry research and project mapping",
    icon1: "/future-plan-icon1.svg",
    icon2: "/future-plan-icon2.svg",
  },
];
const retailData = [
  {
    id: 1,
    challenges: "Feeling overwhelmed?",
    solve: "Our services streamline operations for retail peace of mind.",
    icon1: "/1st-icon.svg",
    icon2: "/2nd-icon.svg",
  },
  {
    id: 2,
    challenges: "Stuck in spreadsheets?",
    solve: "Boost efficiency with powerful retail software.",
    icon1: "/3rd-icon.svg",
    icon2: "/4th-icon.svg",
  },
  {
    id: 3,
    challenges: "Losing money on wasted time?",
    solve: "Streamline tasks and boost profits.",
    icon1: "/5th-icon.svg",
    icon2: "/6th-icon.svg",
  },
  {
    id: 4,
    challenges: "Customers a mystery?",
    solve: "Gain insights for smarter decisions and business growth.",
    icon1: "/7th-icon.svg",
    icon2: "/8th-icon.svg",
  },
  {
    id: 5,
    challenges: "Inventory a nightmare?",
    solve: "Take control with smart stock management.",
    icon1: "/9th-icon.svg",
    icon2: "/10th-icon.svg",
  },
  {
    id: 6,
    challenges: "Longing for effortless sales?",
    solve: "Deliver seamless experiences and watch profits soar.",
    icon1: "/11th-icon.svg",
    icon2: "/12th-icon.svg",
  },
  {
    id: 7,
    challenges: "Drowning in manual tasks?",
    solve: "Automate your operations and focus on what matters.",
    icon1: "/13th-icon.svg",
    icon2: "/14th-icon.svg",
  },
];

const sliderItems = [
  {
    image: '/discovery-phase.svg',
    title: 'Discovery Phase',
    content:
      'Perform competitor market research, choose suitable tech stack and MVP features, and write technical documentation to understand your concept in real-world terms under limited risks. ',
    list: ['Technology Consultancy', 'Risk Mitigation', 'Tech Stack Selection ', 'MVP feature Composition'],
  },
  {
    image: '/project-planning.svg',
    title: 'Project Planing',
    content:
      'After data collection, we elevate your development stages with strategy and logic by setting a realistic project plan, budget, and timeline according to available resources.',
    list: [
      'Shaping and Optimizing Development Plan',
      'Technical Audit & Decision-making',
      'Devising The Development Processes',
      'Time, Budget, & Resource Estimate',
    ],
  },
  {
    image: '/product-development.svg',
    title: 'Product Development',
    content:
      'We, as your virtual CTO, ensure transparency in and continuous optimization of processes, communication, reporting, and project-critical documentation from start to end.',
    list: [
      'Team Composition & Planning',
      'Set Clear Project Goals',
      'Development Process Optimization',
      'Daily Project and Team Management',
    ],
  },
  {
    image: '/project-scaling.svg',
    title: 'Project Scaling & Pitching',
    content:
      'We help startups stay wary of possible nuances and pitfalls by building and fostering scaling strategy, comprehensive pitch decks, and carefully communicating with investors as your CTO.',
    list: [
      'Forming Scaling Strategy ',
      'IT Pitch Deck Development',
      'Capturing Investments',
      'Technical Dialogue with Investors',
    ],
  },
  {
    image: '/project-audit.svg',
    title: 'Project Audit',
    content:
      'Conduct a project audit, review the code quality, and assess overall project performance and speed with our CTO services to streamline the IT delivery process, offering constant feedback for enhancements. ',
    list: ['Code Quality Reviews', 'Project Audits', 'Report and Predictive Analysis', 'Offering Problem-Solution Fit'],
  },
  {
    image: '/handing-over.svg',
    title: 'Handing Over & Retaining',
    content:
      'We won’t leave you at the very climax of your development stage like the rest. You will have all the intellectual property rights and our long-term support on a retainer basis as needed.',
    list: ['Knowledge & Documentation Transfer', 'Intellectual Property Rights', 'Ad-hoc Support & Maintenance'],
  },
]
const bewareFriend = [
  {
    img: '/do-you-really-understand-your-target-audience.svg',
    title: "Do you really understand your target audience?",
    paragraph: "Startups often assume they understand their market audience but in reality, they don’t. This can result in a product your users don’t want. Continuous research and user feedback may help.",
  },
  {
    img: '/wrong-selection-of-features.svg',
    title: "Wrong selection of features",
    paragraph: "The desire to showcase multiple functionalities can cause delays, increased costs, and unnecessary complexity. Prioritization is key; focus on core features and leave other features for later iterations.",
  },
  {
    img: '/perfectionism-is-a-trap.svg',
    title: "Perfectionism is a trap",
    paragraph: "Aiming for a masterpiece from the start can lead to longer development cycles and undue resource allocation. Remember, the MVP's purpose is to show concept value, not perfection.",
  },
  {
    img: '/taking-minimum-for-gimmick.svg',
    title: 'Taking "minimum" for "gimmick"',
    paragraph: 'Do you interpret "minimum" in "minimum viable product" as an invitation to create a subpar solution? MVP is your first step to making an image through good quality, not a stunt to attract market audiences.',
  },
];
const mvpSliderItems = [
  {
    image: '/discovery-phase-mvp.svg',
    title: (
      <>
        <span className="d-block upper-text mb-2">1-2 weeks</span>
        <span className="lower-text"> Discovery Phase</span>
      </>
    ),
    content:
      'Before securing your idea and investment, we test and validate your unproven concept according to the market situation. ',
  },
  {
    image: '/design.svg',
    title: (
      <>
        <span className="d-block upper-text mb-2">1-2 weeks</span>
        <span className="lower-text"> Design</span>
      </>
    ),
    content:
      'We create market-smart initial wireframes, UI props, and branding elements to set the design direction of your young app.',
  },
  {
    image: '/mvp-development.svg',
    title: (
      <>
        <span className="d-block upper-text mb-2">6 - 8 weeks</span>
        <span className="lower-text"> MVP Development (no-code & custom)</span>
      </>
    ),
    content:
      'We finalize crucial features and functionality to reduce time to market and make the product necessarily and publicly useful. ',
  },
  {
    image: '/release.svg',
    title: (
      <>
        <span className="d-block upper-text mb-2">1-2 weeks</span>
        <span className="lower-text"> Release</span>
      </>
    ),
    content:
      'We’ll make sure your MVP launch is ready to impress its end-users leaving a lasting impact in the congested market competition.',
  },
  {
    image: '/maintenance-and-support.svg',
    title: (
      <>
        <span className="d-block upper-text mb-2">Retainer-based</span>
        <span className="lower-text"> Maintenance & Support</span>
      </>
    ),
    content:
      'It may take a few weeks to deploy and make your product available to the general masses. We continue our support to growing your product.',
  },
];
const extensionSliderItems = [
  {
    image: '/for-multi-platform-and-secure-extensions.png',
    title: 'For Multi-Platform and Secure Extensions',
    content:
      'Our browser extension developers offer cross-browser solutions employing modern technologies to ensure robust browsing experiences. ',
  },
  {
    image: '/chrome-browser-extension-development.png',
    title: 'Chrome Browser Extension Development',
    content:
      'Being the absolute favorite browser of above 2.50 billion online surfers, Chrome browser extensions are a worthwhile investment to achieve a leading position in the browser market. Our Google Chrome extension developers can help you build custom plugins and add-ons for your business.',
  },
  {
    image: '/brave-browser-extension-development.png',
    title: 'Brave Browser Extension Development',
    content:
      'Keeping in regard the growing user base of the Brave browser, our seasoned developers create super compatible and high-performing browser extensions to help you elevate your digital presence outdoing your competition in the dense Brave browser landscape.',
  },
  {
    image: '/safari-browser-extension-development.png',
    title: 'Safari Browser Extension Development',
    content:
      'As Safari is extensively used on Apple systems, Qbatch’s Safari browser extension development is a win-win if you to deliver unique browser performance, custom features, and user-friendly designs to impress Apple users. ',
  },
  {
    image: '/firefox-browser-extension-development.png',
    title: 'Firefox Browser Extension Development',
    content:
      'Create secure Firefox browser extensions and reach a broader audience offering vast experience using HTML, CSS, and JavaScript. Leverage our strong understanding of the extension framework and knack for user privacy to build foolproof and top-grade Firefox extension solutions.',
  },
  {
    image: '/opera-browser-extension-development.png',
    title: 'Opera Browser Extension Development',
    content:
      'Let’s ensure seamless integration, superior user engagement, and top-notch security on the Opera browser with our expert developers. We employ hands-on experience to unlock the full potential of Opera browser extensions and empower your audiences online.',
  },
  {
    image: '/edge-browser-extension-development.png',
    title: 'EDGE Browser Extension Development',
    content:
      'With a growing user base and recent Chromium integration, Edge extension development is a wise choice if your product runs on a contemporary Windows-based system. Our browser extension developers guide you from ideation to deployment for immaculate browsing experiences. ',
  },
]

const ecomSliderItems = [
  {
    image: '/5 Step E-Commerce Automation_Problem Analysis.svg',
    title: 'Problem Analysis',
    content: 'We evaluate your problem statement and offer a carefully sorted roadmap and price estimate plan.',
  },
  {
    image: '/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg',
    title: 'Software Automation Solution',
    content: 'We build modular, comprehensive, and fail-safe automation solutions for your business infrastructure.  ',
  },
  {
    image: '/5 Step E-Commerce Automation_Installation.svg',
    title: 'Installation',
    content: 'We install software solutions to achieve aspired technological sophistication and speed. ',
  },
  {
    image: '/5 Step E-Commerce Automation_Orchestration.svg',
    title: 'Orchestration',
    content:
      'Complete process orchestration that supports real-time activity within and outside the distribution centers.',
  },
  {
    image: '/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg',
    title: 'Full-Cycle Technical Support',
    content: 'We stay in touch with you for technical support on a long-term basis or as required.',
  },
]
const lostToLaunchedItems = [
  {
    image: "/project-mapping.svg",
    title: "Project Mapping",
    content: "Requirement analysis to form a risk-free and modern solution.",
  },
  {
    image: "/visual-and-technical-design.svg",
    title: "Visual & Technical Design",
    content: "Prototype designing testing to rectify concerns in real-world terms.",
  },
  {
    image: "/launched-development.svg",
    title: "Development",
    content: "Business logic and code development according to the approved design.",
  },
  {
    image: "/ensuring-security.svg",
    title: "Ensuring Security & QA",
    content: "Security and QA testing to secure your product from cyberattacks and functional issues.",
  },
  {
    image: "/launched-deployment.svg",
    title: "Deployment",
    content: "Final execution of the tested and optimized software solution.",
  },
  {
    image: "/launch-and-support.svg",
    title: "Launch & Support",
    content: "A happy project launch with continued support and maintenance.",
  },
];

const productDevlopmentServices = [
  {
    image: '/enterprise-application.svg',
    title: 'Discovery Workshops',
    content:
      'Converting your idea into a utility requires a deliberate understanding of your end users needs and real-world problems. Our enterprise software product development as a service includes understanding the changing user demands and helping you build and launch dynamic, feature-packed digital products.',
  },
  {
    image: '/enterprise-mobility-service.svg',
    title: 'Wireframing',
    content:
      'Converting your idea into a utility requires a deliberate understanding of your end users needs and real-world problems. Our enterprise software product development as a service includes understanding the changing user demands and helping you build and launch dynamic, feature-packed digital products.',
  },
  {
    image: '/digital-transformation-consulting.svg',
    title: 'UX/UI Design',
    content:
      'You’re providing all the great features, but your users still won’t respond? Our product designers rely on a user-first mindset that helps them improve the value of your app features and functionalities assuring navigable experiences and fail-safe performance under any user load. ',
  },
  {
    image: '/custom-enterprise-software-development-services.svg',
    title: 'Prototyping',
    content:
      'Don’t risk spending on unproven ideas. We help you test your idea in the ever-evolving market situations at a low cost before launching its complete version. Our digital product developers practice the MVP approach and depend on the experiences of early adopters to create fully functional prototypes.',
  },
  {
    image: '/custom-enterprise-software.svg',
    title: 'Product Development & Management Consulting',
    content:
      'Slow development processes, improper security management, wrong selection of technology, or lack of motivation are some of the few situations our product experts help by offering cloud-native microservices and technical advice to ensure crash-proof and sustainable product launches.',
  },
  {
    image: '/legacy-application.svg',
    title: 'MVP Development',
    content:
      'Test unproven ideas and turn them into a minimal product that ensures maximum concept validation among early adopters with our minimum viable product development services. 150+ startups, scale-ups, and enterprises have leveraged our services for an effortless product development journey.',
  },
  {
    image: '/legacy-application.svg',
    title: 'Code Refactoring',
    content:
      'Transform your product by refactoring the old code and making feature additions to achieve the desired product-market fit. Our custom product development services have built and revamped 150+ products that are constantly thriving under the forever-changing market activity.',
  },
  {
    image: '/legacy-application.svg',
    title: 'Launch & Maintenance',
    content:
      'After a rigorous series of QA audits, automated tests, TTD, and code reviews, we bring your product to fruition with continued support featuring continuous integration and delivery and needed improvements to keep your product relevant in the raging technology marathon.',
  },
]
const marketPlaceData = [
  {
    content: [
      {
        img: "/amazon.svg",
        desc: "Ruby On Rails"
      },
      {
        img: "/walmart.svg",
        desc: "Node Js"
      },
      {
        img: "/ebay.svg",
        desc: "Flask"
      },
      {
        img: "/etsy.svg",
        desc: "Next JS"
      },
      {
        img: "",
        desc: "Nest JS"
      },
      {
        img: "",
        desc: "Python"
      },
      {
        img: "",
        desc: "Django"
      },
    ],
    title: 'Marketplace',
  },
  {
    content: [
      {
        img: "/shopify.svg",
      },
      {
        img: "/woo-commerce.png",
      },
      {
        img: "/amazon-vendor.png",
      },
      {
        img: "/typescript.svg",
      },
      {
        img: "/kindle.svg",
      },
      {
        img: "",
      },
      {
        img: "",
      },
      {
        img: "",
      },
    ],
    title: 'Platform',
  },
  {
    content: [
      {
        img: "/amazon-seller.webp",
      },
      {
        img: "/woo-commerce.png",
      },
      {
        img: "/amazon-product.png",
      },
      {
        img: "/amazon-business.png",
      },
      {
        img: "/ebay.svg",
      },
      {
        img: "/walmart.svg",
      },
      {
        img: "",
      },
    ],
    title: 'API’s',
  },
  {
    content: [
      {
        img: "/keepa.svg",
      },
      {
        img: "/rainforest-api.svg",
      },
    ],
    title: '3rd Party API’s',
  }
]

const languagesData = [
  {
    content: [
      {
        img: "/ruby-on-rails.svg",
        desc: "Ruby On Rails"
      },
      {
        img: "/node-js.svg",
        desc: "Node Js"
      },
      {
        img: "/flask.svg",
        desc: "Flask"
      },
      {
        img: "/next-js.svg",
        desc: "Next JS"
      },
      {
        img: "/nest-js.svg",
        desc: "Nest JS"
      },
      {
        img: "/python.svg",
        desc: "Python"
      },
      {
        img: "/django.svg",
        desc: "Django"
      },
      {
        img: "/express-js.svg",
        desc: "Express JS"
      },
    ],
    title: 'Backend',
  },
  {
    content: [
      {
        img: "/vue-js.svg",
        desc: "Vue JS"
      },
      {
        img: "/next-js.svg",
        desc: "Next JS"
      },
      {
        img: "/react-seeklogo.svg",
        desc: "React JS"
      },
      {
        img: "/typescript.svg",
        desc: "Type Script"
      },
      {
        img: "/javascript-seeklogo.svg",
        desc: "Java Script"
      },
      {
        img: "/angular-seeklogo.svg",
        desc: "Angular"
      },
      {
        img: "/electron-seeklogo.svg",
        desc: "Electron"
      },
      {
        img: "/gatsby-monogram.svg",
        desc: "Gatsby JS"
      },
      {
        img: "/redux-seeklogo.svg",
        desc: "Redux"
      },
      {
        img: "/webpack-seeklogo.svg",
        desc: "Webpack"
      },
      {
        img: "/html5-logo.svg",
        desc: "HTML 5"
      },
      {
        img: "/css3-seeklogo.svg",
        desc: "CSS 3"
      },
    ],
    title: 'Frontend',
  },
  {
    content: [
      {
        img: "/figma-seeklogo.svg",
        desc: "Figma"
      },
      {
        img: "/adobe-illustrator-seeklogo.svg",
        desc: "Adobe Illustrator"
      },
      {
        img: "/adobe-photoshop-seeklogo.svg",
        desc: "Adobe Photoshop"
      },
    ],
    title: 'Design',
  },
  {
    content: [
      {
        img: "/postgresql-seeklogo.svg",
        desc: "PostgreSQL"
      },
      {
        img: "/neo4j-seeklogo.svg",
        desc: "Neo4j"
      },
      {
        img: "/mongodb-seeklogo.svg",
        desc: "MongoDB"
      },
      {
        img: "/cassandra-seeklogo.svg",
        desc: "Cassandra"
      },
      {
        img: "/sql-server-seeklogo.svg",
        desc: "SQL Server"
      },
      {
        img: "/my-sql.svg",
        desc: "MySQL"
      },
      {
        img: "/maria-db.svg",
        desc: "MariaDB"
      },
      {
        img: "/aws-dynamodb-seeklogo.svg",
        desc: "DynamoDB"
      },
      {
        img: "/redis.svg",
        desc: "Redis"
      },
      {
        img: "/sqlite.svg",
        desc: "SQLite"
      },
      {
        img: "/elasticsearch-seeklogo.svg",
        desc: "Elasticsearch"
      },
      {
        img: "/spark-seeklogo.svg",
        desc: "Apache Spark"
      },
    ],
    title: 'Database',
  },
  {
    content: [
      {
        img: "/jmeter.svg",
        desc: "JMeter"
      },
      {
        img: "/pytest-logo.svg",
        desc: "PyTest"
      },
      {
        img: "/mocha.svg",
        desc: "Mocha"
      },
      {
        img: "/rspec.svg",
        desc: "RSpec"
      },

    ],
    title: 'Testing',
  },
  {
    content: [
      {
        img: "/kubernetes.svg",
        desc: "Kubernetes"
      },
      {
        img: "/docker.svg",
        desc: "Docker"
      },
      {
        img: "/jenkins.svg",
        desc: "Jenkins"
      },
      {
        img: "/ansible.svg",
        desc: "Ansible"
      },
      {
        img: "/terraform.svg",
        desc: "Terraform"
      },
      {
        img: "/circle-ci.svg",
        desc: "CircleCI"
      },
      {
        img: "/aws-logo.svg",
        desc: "AWS"
      },
      {
        img: "/azure-logo.svg",
        desc: "Microsoft Azure"
      },
      {
        img: "/google-cloud.svg",
        desc: "Google Cloud"
      },
      {
        img: "/chef-logo.svg",
        desc: "Chef"
      },
    ],
    title: 'DevOps',
  },
  {
    content: [
      {
        img: "/gcp-seeklogo.svg",
        desc: "GCP"
      },
      {
        img: "/azure-logo.svg",
        desc: "Microsoft Azure"
      },
      {
        img: "/aws-logo.svg",
        desc: "AWS"
      },
      {
        img: "/kubernetes.svg",
        desc: "Kubernetes"
      },
      {
        img: "/docker.svg",
        desc: "Docker"
      },
    ],
    title: 'Cloud/Platform',
  },
  {
    content: [
      {
        img: "/appian.svg",
        desc: "Appian"
      },
      {
        img: "/bubble.svg",
        desc: "Bubble.io"
      },
      {
        img: "/flutter.svg",
        desc: "Flutter"
      },
      {
        img: "/retool-seeklogo.svg",
        desc: "Retool"
      },
      {
        img: "/betty-block.svg",
        desc: "Betty Block"
      },
    ],
    title: 'Others',
  },
]
const SaaslanguagesData = [
  {
    content: [
      {
        img: "/ruby-on-rails.svg",
        desc: "Ruby On Rails"
      },
      {
        img: "/node-js.svg",
        desc: "Node Js"
      },
      {
        img: "/flask.svg",
        desc: "Flask"
      },
      {
        img: "/next-js.svg",
        desc: "Next JS"
      },
      {
        img: "/nest-js.svg",
        desc: "Nest JS"
      },
      {
        img: "/python.svg",
        desc: "Python"
      },
      {
        img: "/django.svg",
        desc: "Django"
      },
      {
        img: "/express-js.svg",
        desc: "Express JS"
      },
    ],
    title: 'Backend',
  },
  {
    content: [
      {
        img: "/vue-js.svg",
        desc: "Vue JS"
      },
      {
        img: "/next-js.svg",
        desc: "Next JS"
      },
      {
        img: "/react-seeklogo.svg",
        desc: "React JS"
      },
      {
        img: "/typescript.svg",
        desc: "Type Script"
      },
      {
        img: "/javascript-seeklogo.svg",
        desc: "Java Script"
      },
      {
        img: "/angular-seeklogo.svg",
        desc: "Angular"
      },
      {
        img: "/electron-seeklogo.svg",
        desc: "Electron"
      },
      {
        img: "/gatsby-monogram.svg",
        desc: "Gatsby JS"
      },
      {
        img: "/redux-seeklogo.svg",
        desc: "Redux"
      },
      {
        img: "/webpack-seeklogo.svg",
        desc: "Webpack"
      },
      {
        img: "/html5-logo.svg",
        desc: "HTML 5"
      },
      {
        img: "/css3-seeklogo.svg",
        desc: "CSS 3"
      },
    ],
    title: 'Frontend',
  },
  {
    content: [
      {
        img: "/postgresql-seeklogo.svg",
        desc: "PostgreSQL"
      },
      {
        img: "/neo4j-seeklogo.svg",
        desc: "Neo4j"
      },
      {
        img: "/mongodb-seeklogo.svg",
        desc: "MongoDB"
      },
      {
        img: "/cassandra-seeklogo.svg",
        desc: "Cassandra"
      },
      {
        img: "/sql-server-seeklogo.svg",
        desc: "SQL Server"
      },
      {
        img: "/my-sql.svg",
        desc: "MySQL"
      },
      {
        img: "/maria-db.svg",
        desc: "MariaDB"
      },
      {
        img: "/aws-dynamodb-seeklogo.svg",
        desc: "DynamoDB"
      },
      {
        img: "/redis.svg",
        desc: "Redis"
      },
      {
        img: "/sqlite.svg",
        desc: "SQLite"
      },
      {
        img: "/elasticsearch-seeklogo.svg",
        desc: "Elasticsearch"
      },
      {
        img: "/spark-seeklogo.svg",
        desc: "Apache Spark"
      },
    ],
    title: 'Database',
  },
  {
    content: [
      {
        img: "/gcp-seeklogo.svg",
        desc: "GCP"
      },
      {
        img: "/azure-logo.svg",
        desc: "Microsoft Azure"
      },
      {
        img: "/aws-logo.svg",
        desc: "AWS"
      },
      {
        img: "/kubernetes.svg",
        desc: "Kubernetes"
      },
      {
        img: "/docker.svg",
        desc: "Docker"
      },
    ],
    title: 'Cloud/Platform',
  },
]
const extensionLanguages = [
  {
    content: [
      {
        img: "/python.svg",
        desc: "Python"
      },
      {
        img: "/django.svg",
        desc: "Django"
      },
      {
        img: "/node-js.svg",
        desc: "Node Js"
      },
      {
        img: "/fastApi.svg",
        desc: "Fast API"
      },
    ],
    title: 'Backend',
  },
  {
    content: [
      {
        img: "/react-seeklogo.svg",
        desc: "React JS"
      },
    ],
    title: 'Frontend',
  },
  {
    content: [
      {
        img: "/amazon-web-service.svg",
        desc: "Amazon WebService"
      },
      {
        img: "/google-platform.svg",
        desc: "Google CloudPlatform"
      },
      {
        img: "/digital-ocean.svg",
        desc: "Digital Ocean"
      },
    ],
    title: 'Infrastructure',
  },
]
const projects = [
  {
    img: '/Custom E-Commerce Business management_Custom E-commerce Software Development.svg',
    title: 'Custom E-commerce Software Development',
    description:
      'Build diverse e-commerce tools and SaaS products such as algorithm-based re-pricers, analyzers, extensions, and plug-ins suitable for your business-critical needs and sales growth. We’ve successfully developed 150+ custom software solutions globally.',
  },
  {
    img: '/Custom E-Commerce Business management_️Workflow Automation.svg',
    title: '️️Workflow Automation',
    description:
      'Replace manual workflows with smart integrations and algorithms and accelerate fulfillment processes minus physical and logistic barriers. Qbatch’s e-commerce order fulfillment software solution is already powering 1000+ stores globally. Yours can be next!',
  },
  {
    img: '/Custom E-Commerce Business management_️Logistic Management.svg',
    title: '️️️Logistic Management',
    description:
      'Actively minimize delivery failures and detect status changes by getting a detailed view of onboard shipments with our automated shipping software solutions. Besides, we offer critical shipment identification that helps control the return ratio.',
  },
  {
    img: '/Custom E-Commerce Business management_️Data Analysis and Reporting.svg',
    title: '️️️️Data Analysis and Reporting',
    description:
      'Easily extract data on top-selling and least-selling products, sales, profit/loss, finances, and inventory by integrating e-commerce sales analysis and reporting automation tools — avoiding unreliable sales information for unparalleled business growth',
  },
  {
    img: '/Custom E-Commerce Business management_E-commerce Returns Management.svg',
    title: '️E-commerce Returns Management',
    description:
      'Mitigate risks of financial loss by quickly responding to lost/ damaged inventory, return requests, or fulfillment errors with our returns and refund automation software solution. Let’s control profitability and sustain your reputation as a trusted seller. ',
  },
  {
    img: '/Custom E-Commerce Business management_Inventory Management.svg',
    title: '️️Inventory Management',
    description:
      'Sudden stockouts can annoy your customers and destroy your seller ratings. Qbatch’s automated inventory management helps you filter inventory, perform audits to reduce returns, and closely track bulk orders and stock movements. ',
  },
  {
    img: '/Custom E-Commerce Business management_️Warehouse Management Software (WMS).svg',
    title: '️️️Warehouse Management Software (WMS)',
    description:
      'Eliminate time-consuming tasks such as manual data entry and analysis with our automated warehouse management system that ensures SKU-level traceability, web and mobile-based tracking, automatic product purchases, and stock-level maintenance.',
  },
  {
    img: '/Custom E-Commerce Business management_️Marketing Campaigns and Optimization.svg',
    title: '️️️️Marketing Campaigns and Optimization',
    description:
      'Automate audience segmentation, personalization, and decision-making based on behaviors and patterns to increase the likelihood of more conversions with our dynamic e-commerce marketing management software solution.',
  },
  {
    img: '/Custom E-Commerce Business management_Amazon SP-API -Advertising API Integration.svg',
    title: '️️️️Amazon SP-API /Advertising API Integration',
    description:
      'Experience smooth transformation from Amazon MWS to SP-API and effortlessly automate data for improved selling efficiency, better insights, and smarter decision-making. Let’s take advantage of intuitive APIs for uncompromised CX and scalability',
  },
  {
    img: '/Custom E-Commerce Business management_E-commerce Customer Service.svg',
    title: '️️️️E-commerce Customer Service',
    description:
      'Mitigate risks of financial loss by quickly responding to lost/ damaged inventory, return requests, or fulfillment errors with our returns and refund automation software solution. Let’s control profitability and sustain your reputation as a trusted seller. ',
  },
]
const fullCycle = [
  {
    img: '/fullCycle-1.svg',
    title: 'SaaS Web Development',
    description:
      'Build a multi-tenant, fast, and secure web-based app for your business and consumers over the internet with our SaaS platform web development services. We’ve developed 150+ scalable web, IoT, and mobile SaaS applications for early-stage startups to big enterprises. Let’s build yours! ',
  },
  {
    img: '/fullCycle-2.svg',
    title: 'Progressive Web App Development Services ',
    description:
      'Bring the performance of a native app to browsers and across platforms without loss of speed with our high-quality progressive web app development services. Get in touch to launch remarkably immersive and highly responsive user experiences with our feature-packed progressive web app solutions. ',
  },
  {
    img: '/fullCycle-3.svg',
    title: '️️Web Portal Development',
    description:
      'Deliver powerful digital experiences and generate massive outcomes with our full-spectrum web portal development services. We offer both enterprise-level web portal and custom-made web portal solutions combined with trusted expertise and tools. ',
  },
  {
    img: '/fullCycle-4.svg',
    title: '️️️Enterprise Web App Development',
    description:
      'Escalate your organization and its operations by building dynamic web-based solutions across e-commerce, inventory, transport, learning, healthcare, and other procedural business ecosystems. We also offer fullstack web app development, QA, reengineering, consulting, and support services.',
  },
  {
    img: '/fullCycle-5.svg',
    title: 'API development and integration',
    description:
      'Address the most pressing technical needs without wasting huge sums with our custom web app development company. We create result-driven APIs with analytics, geolocation, payment processing, and other business-specific integrations that cater to evolving user demands.',
  },
  {
    img: '/fullCycle-6.svg',
    title: 'Front-end Development Services',
    description:
      'Build modern single-page web apps leveraging the component-driven and reusable architecture of React.js, Angular.js, Vue.js., Next, and Gatsby. Our Web app developers deliver next-gen user experiences through seamless integration and interaction with multiple APIs and databases. ',
  },
  {
    img: '/fullCycle-7.svg',
    title: 'Backend Development Services',
    description:
      'Set up some rock-solid software architecture and APIs across domains with our backend expertise in Cloud, DevOps, PHP, Python, JS, .NET, Java, and RoR to easily accommodate large and advanced data structures bolstering attack-proof security. ',
  },
  {
    img: '/fullCycle-8.svg',
    title: '️️️Web App Reengineering and Consultancy ',
    description:
      'Figure out the latest technologies, modern designs, data security approaches, and innovative architectures to future-proof your enterprise from looming market trends. Respond to changing market risks with our competent yet reliable custom web app development consultancy.',
  },
]
const SaasDevelop = [
  {
    img: '/ecommerce-and-retail-solutions.svg',
    title: 'E-commerce and retail solutions',
    description:
      (
        <ul>
          <li>Online storefronts.</li>
          <li>Shopping cart and checkout systems.</li>
          <li>Inventory management, and many more.</li>
        </ul>
      ),
  },
  {
    img: '/customer-relationship-management.svg',
    title: 'Customer relationship management (CRM)',
    description:
      (
        <ul>
          <li>Sales automation.</li>
          <li>Customer support and service.</li>
          <li>Marketing automation, and many more.</li>
        </ul>
      ),
  },
  {
    img: '/fleet-management-apps.svg',
    title: 'Fleet management apps',
    description:
      (
        <ul>
          <li>Vehicle tracking and telematics.</li>
          <li>Maintenance scheduling and management.</li>
          <li>Route planning and optimization, and many more.</li>
        </ul>
      ),
  },
  {
    img: '/financial-services-and-fintech.svg',
    title: 'Financial services and fintech',
    description:
      (
        <ul>
          <li>Payment processing.</li>
          <li>Loan processing.</li>
          <li>Claim processing.</li>
          <li>Cryptocurrency wallets, and more.</li>
        </ul>
      ),
  },
  {
    img: '/healthcare-and-life-sciences.svg',
    title: 'Healthcare and life sciences',
    description:
      (
        <ul>
          <li>Electronic health records (EHR).</li>
          <li>Telemedicine platforms.</li>
          <li>Clinical trial management, and many more.</li>
        </ul>
      ),
  },
  {
    img: '/productivity-and-collaboration-tools.svg',
    title: 'Productivity and collaboration tools',
    description:
      (
        <ul>
          <li>Document creation and editing.</li>
          <li>Project management.</li>
          <li>Communication platforms.</li>
          <li>Time management and tracking, and more.</li>
        </ul>
      ),
  },
  {
    img: '/health-and-wellness-services.svg',
    title: 'Health and wellness services',
    description:
      (
        <ul>
          <li>Personal wellness and fitness apps.</li>
          <li>Mental health apps.</li>
          <li>Nutrition tracking, and many more.</li>
        </ul>
      ),
  },
  {
    img: '/enterprise-resource-planning.svg',
    title: 'Enterprise resource planning (ERP)',
    description:
      (
        <ul>
          <li>Corporate finance management.</li>
          <li>Procurement and supply chain management.</li>
          <li>HR management, and many more.</li>
        </ul>
      ),
  },
  {
    img: '/ondemand-service-marketplaces.svg',
    title: 'On-demand service marketplaces',
    description:
      (
        <ul>
          <li>Car-pooling and transportation services.</li>
          <li>Food delivery services.</li>
          <li>Home services, gig economy platforms, and more.</li>
        </ul>
      ),
  },
  {
    img: '/cybersecurity-and-identity-management.svg',
    title: 'Cybersecurity and identity management',
    description:
      (
        <ul>
          <li>Network security.</li>
          <li>Identity and access management (IAM).</li>
          <li>Threat detection and response, and many more.</li>
        </ul>
      ),
  },
]
const ecomLogos = ["/blue-ware.svg", "/ecom-circle-logo.svg", "/north-ware.svg", "/one-app.svg", "/keurig-logo.svg", "/sales-support-logo.svg"]

const revenueData = [
  {
    image: '/retail-arbitrage.svg',
    title: 'Retail Arbitrage',
    content: 'Find profitable products, deal with price volatility, and grow account health.',
  },
  {
    image: '/label-brands.svg',
    title: 'Private Label Brands',
    content: 'Deal with stock-outs and stock-ins and maintain quality control.',
  },
  {
    image: '/wholesale-sellers.svg',
    title: 'Wholesale Sellers',
    content: 'Avoid poor labor management, pricing wars, and storage costs towards better time to market.',
  },
  {
    image: '/dropshipping.svg',
    title: 'Dropshipping',
    content: 'Automate slow order fulfillment and cheer up unhappy customers by bringing business consistency.',
  },
  {
    image: '/warehousing.svg',
    title: 'Warehousing / 3PL / Prep Center',
    content: 'Go data-driven and eliminate inaccurate inventory management and substandard processes.',
  },
];

const projectDiscoveryData = [
  {
    image: '/accurate-budget.svg',
    title: 'Accurate Budget Estimates',
    content: 'Achieve a more accurate project estimate based on your budget.',
  },
  {
    image: '/optimized-development.svg',
    title: 'Optimized Development Costs',
    content: 'Optimize development costs to ensure the project stays within budget.',
  },
  {
    image: '/clear-vision.svg',
    title: 'Clear Vision',
    content: 'Develop a comprehensive and clear vision of your ultimate goal.',
  },
  {
    image: '/risk-minimization.svg',
    title: 'Risk Minimization',
    content: 'Minimize risks by identifying potential issues and details ahead of time.',
  },
  {
    image: '/strong-relationship.svg',
    title: 'Strong Relationships',
    content: 'Establish and maintain good relationships with suppliers and customers throughout the process.',
  },
  {
    image: '/customer-insight.svg',
    title: 'Customer Insights',
    content: 'Gain insights into what customers love, ensuring your product meets their needs.',
  },
  {
    image: '/focused-mvp.svg',
    title: 'Focused MVP Development',
    content: 'Identify the best possible minimum viable product (MVP) to launch quickly and iteratively improve.',
  },
  {
    image: '/refined-feature.svg',
    title: 'Refined Feature Requirements',
    content: 'Dial in essential feature requirements to ensure your product is both functional and appealing.',
  },
  {
    image: '/refined-feature.svg',
    title: 'Success Criteria',
    content: 'Clearly define what success looks like for your project, providing a target for all stakeholders.',
  },
  {
    image: '/planed-timelines.svg',
    title: 'Planned Timelines and Teams',
    content: 'Develop a detailed plan for timelines, teamwork, and tasks to ensure smooth project execution.',
  },
]

const servicesSliderData = [
  {
    image: "/artificial-intelligence.svg",
    title: "Artificial Intelligence (AI)",
    content: "We bring extensive expertise in predictive modeling, data mining, computer vision, and natural language processing. AI helps us streamline overall business workflows for you, reducing overall human effort."
  },
  {
    image: "/robotic-process-automation.svg",
    title: "Robotic Process Automation (RPA)",
    content: "We help automate your operations processes using software robots that simulate human actions and interact with software and digital systems to save time and avoid manual operations."
  },
  {
    image: "/internet-of-things.svg",
    title: "Internet of Things (IoT)",
    content: "We create tailored IoT solutions catered to your unique business needs across industries. We focus on multi-device integration to ensure high-performing and responsive technology integration."
  },
  {
    image: "/virtual-reality.svg",
    title: "Augmented Reality/ Virtual Reality (AR/VR)",
    content: "We deliver niche-specific AR/VR solutions for immersive experiences via AR-powered events, training sessions, navigation, and 2D/3D projections for businesses and folks globally."
  },
  {
    image: "/machine-learning.svg",
    title: "Machine Learning (ML)",
    content: "We leverage powerful cloud-based platforms to accelerate ML tools and perform predictive analysis, data pre-processing, model training and tuning, and orchestration."
  }
]
const devOpsSliderData = [
  {
    image: "/analysis-and-planning.svg",
    title: "Analysis and Planning",
    content: "We examine your enterprise’s existing processes and technical infrastructure, building an exhaustive strategy for automating the infrastructure."
  },
  {
    image: "/automation.svg",
    title: "Automation",
    content: "We perform configuration and provisioning on testing, deployment, and production settings and automize the entire infrastructure."
  },
  {
    image: "/continuous-deployment.svg",
    title: "Continuous Integration",
    content: "We integrate code changes into a repository, merge automated releases, and run tests every time a change is made for version stability and control."
  },
  {
    image: "/continuous-integration.svg",
    title: "Continuous Deployment",
    content: "We deploy upgraded environments to the infrastructure and execute new developments throughout the CI/CD pipeline, avoiding any delays or bugs."
  },
  {
    image: "/security-protocols.svg",
    title: "Security Protocols",
    content: "We stay laser-focused to protect your end product from bugs and errors. Thus we only trust risk-free and stringent security practices and tools to perform automated testing and assure compliance."
  }
]
const SaasSliderData = [
  {
    image: "/transparency-is-key.svg",
    title: "Transparency is Key",
    content: "We sign a Statement of Work outlining the budget, deliverables, and schedule. You receive weekly updates with demos to track progress."
  },
  {
    image: "/knowledgeable-support.svg",
    title: "Knowledgeable Support",
    content: "Our team ensures clarity, avoids technical jargon, and reduces your need for technical staff."
  },
  {
    image: "/global-expertise-local-adaptation.svg",
    title: "Global Expertise, Local Adaptation",
    content: "Our team adapts to your requirements, offering virtual collaboration or skilled developers for round-the-clock operation."
  },
  {
    image: "/budget-peace.svg",
    title: "Budget Peace",
    content: "Detailed project plans and cost breakdowns prevent overestimation, maintaining budget control."
  },
  {
    image: "/security-first.svg",
    title: "Security First",
    content: "Our robust security protocols safeguard your intellectual property with encryption technologies, ensuring confidentiality."
  }
]
const EducationSlider = [
  {
    image: "/education-software-development.svg",
    title: "Education Software Development",
    content: "We offer multi-device access to different populations and create user-friendly designs with our custom EdTech solutions. Whether you need bespoke educational apps or SaaS platforms, we create tailored solutions for any difficulty and purpose."
  },
  {
    image: "/edtech-transformation.svg",
    title: "EdTech Transformation",
    content: "Upgrade your low-performing educational systems and meet modern standards with our EdTech solutions and tools. Our educational software developers help revitalize your legacy education systems with enhanced security, usability, and interoperability."
  },
  {
    image: "/digitalization-automation-optimization.svg",
    title: "Digitalization, Automation, and Optimization",
    content: "Automate your conventional learning management system and eliminate redundant manual processes. Hire our LMS developers to transition your e-learning system to the cloud for improved scalability and accessibility."
  },
  {
    image: "/tutoring-and-training-platform-development.svg",
    title: "Tutoring and Training Platform Development",
    content: "Build and improve your tutoring and business training by developing premium platforms offering online courses and programs featuring robust AI-driven chatbots. Connect learners with skilled tutors and trainers for maximum and effective learning."
  },
  {
    image: "/custom-lms-lcms-lxp-and-elearning-portals.svg",
    title: "Custom LMS, LCMS, LXP, and eLearning Portals",
    content: "Build, upgrade, and manage your learning management from fee and salary management to billing library management, combining the power of diverse content formats (LMS, MOOCs, and LXPs) and leveraging our on-premises or cloud-based systems."
  },
  {
    image: "/mobile-learning-app-development.svg",
    title: "Mobile Learning App Development",
    content: "Integrate microlearning, gamification, AR tools, blended learning, and offline support with our mobile education app development services. Build bite-sized modules to simplify complex topics and develop fully functional m-learning apps for any device. "
  },
  {
    image: "/school-management-and0-student-information-software.svg",
    title: "School Management and Student Information Software (SIS)",
    content: "Empower your school by building a highly efficient SIS, simplifying student data management, task automation, and communication. Our data-driven school app development streamlines enrollment, classroom management, attendance, and finances."
  },
  {
    image: "/content-authoring-software-development.svg",
    title: "Content Authoring Software Development",
    content: "Ensure academic integrity by building a highly vigilant and feature-rich proctoring app that verifies users, monitors screens, restricts browsers, and uses AI to detect suspicious behavior. Real-time alerts and detailed reports keep exams secure and trustworthy."
  },
  {
    image: "/virtual-classroom-app-development.svg",
    title: "Virtual Classroom App Development",
    content: "Foster learning from anywhere by developing a virtual classroom app. Deliver multi-device compatibility, automatic backup & cloud storage for recorded lessons and files, video conferencing, document sharing, and interactive whiteboards."
  },
  {
    image: "/proctoring-software-development.svg",
    title: "Proctoring Software Development",
    content: "Ensure academic integrity by building a highly vigilant and feature-rich proctoring app that verifies users, monitors screens, restricts browsers, and uses AI to detect suspicious behavior. Real-time alerts and detailed reports keep exams secure and trustworthy."
  },
  {
    image: "/self-education-software.svg",
    title: "Self-Education Software",
    content: "Combine offline and online methods to let your students or employees take control of their learning journey. Easily track progress, access comprehensive online resources, and get on-demand teacher assistance, promoting an independent learning experience."
  },
  {
    image: "/quiz-exam-and-assessment-platform-development.svg",
    title: "Quiz, Exam, and Assessment Platform Development",
    content: "Optimize educational and business assessments with versatile creation tools, secure delivery, automated scoring, and feedback systems. Moreover, time limits and anti-cheating mechanisms ensure fair assessment and screening processe"
  },
]

const automationData = [
  {
    image: "/data-driven-decisions.svg",
    content: "Make data-driven decisions for targeted marketing and optimization."
  },
  {
    image: "/marketplaces-logistics-and-stores.svg",
    content: "Facilitate communication across marketplaces, logistics, and stores."
  },
  {
    image: "/tasks-for-faster-sales.svg",
    content: "Eliminate repetitive tasks for faster sales."
  },
  {
    image: "/orders-across-inventories.svg",
    content: "Manage multichannel orders across inventories."
  },
  {
    image: "/overstocking-in-your-supply-chain.svg",
    content: "Auto-track stockouts and overstocking in your supply chain."
  },
  {
    image: "/market-and-operational-costs.svg",
    content: "Reduce time-to-market and operational costs."
  },
  {
    image: "/foolproof-security-standards.svg",
    content: "Ensure foolproof security standards."
  },
  {
    image: "/shopping-experiences.svg",
    content: "Deliver personalized shopping experiences."
  },
]
const lostToLaunched = [
  {
    image: "/lost-to-launched_project-mapping.svg",
    title: "Project Mapping",
    content: "Make data-driven decisions for targeted marketing and optimization."
  },
  {
    image: "/lost-to-launched_technical-design.svg",
    title: "Visual & Technical Design",
    content: "Facilitate communication across marketplaces, logistics, and stores."
  },
  {
    image: "/lost-to-launched_development.svg",
    title: "Development",
    content: "Eliminate repetitive tasks for faster sales."
  },
  {
    image: "/lost-to-launched_ensuring-security-and-qa.svg",
    title: "Ensuring Security & QA",
    content: "Manage multichannel orders across inventories."
  },
  {
    image: "/lost-to-launched_deployment.svg",
    title: "Deployment",
    content: "Auto-track stockouts and overstocking in your supply chain."
  },
  {
    image: "/lost-to-launched_launch-and-support.svg",
    title: "Launch & Support",
    content: "Reduce time-to-market and operational costs."
  },
]

const webExpertiseData = [
  {
    image: '/serverless-microservices.svg',
    title: 'Serverless Microservices based Web Apps.',
  },
  {
    image: '/service-oriented-architectures.svg',
    title: 'Service-Oriented-Architectures (SOA).',
  },
  {
    image: '/multi-service-cloud.svg',
    title: 'Multi-service Cloud Applications.',
  },
  {
    image: '/operational-automation.svg',
    title: 'Operational Automation & Analytics.',
  },
  {
    image: '/knowledge-management-systems.svg',
    title: 'Document & Knowledge Management Systems.',
  },
  {
    image: '/ecommerce-apps.svg',
    title: 'E-commerce & M-commerce Apps.',
  },
  {
    image: '/admin-panels-dashboards.svg',
    title: 'Admin Panels & Management Dashboards.',
  },
  {
    image: '/product-configurators.svg',
    title: 'Product configurators.',
  },
  {
    image: '/ondemand-apps.svg',
    title: 'On-Demand Apps.',
  },
]

const ctoBenefits = [
  'Technological expertise and guidance',
  'Strategic roadmap and execution',
  'Saves you money',
  'Change management and vision alignment',
  'Technology adoption and infrastructure development',
  'Unbiasted and objective analysis',
  'Access to industry community',
  'Initiatives and execution',
  'Risk management',
  'Focus on core technical areas',
]
const ctoService = [
  'Comprehensive technology strategy and roadmap including tech stack, tools, & techniques',
  'Scalable technology infrastructure',
  'Tech-driven product development',
  'Technical talent hunting and aquisition',
  'Agile development practices',
  'Vendor and partnership management',
  'Data-driven policymaking',
  'Technology cost optimization',
  'Latest technology adoption',
  'Adapting to change and growth  mindset',
  'Interim leadership to assure technical guidance and growth continuity',
  'Security and compliance',
]
const ctoResponsibilities = [
  'Assists during the discovery phase',
  'Ideation and conceptualization',
  'Project planning and scaling',
  'Discovers and implements new technology',
  'Product development and launch',
  'Project audit and analysis',
  'Hiring, training, and retaining talent',
  'Leadership skill to motivat teams ',
  'System infrastructure modernization and supervision ',
  'Pitching to investors',
]
const ctoContribute = [
  'Adds a fresh perspective to the technical side of your business strategy',
  'Offers viable tech solutions due to extensive industry exposure ',
  'Has a wide view of tech trends and offers innovation plans',
  'Capable of taking on diverse roles when needed',
  'Keeps a track record of running successful tech adoption projects',
  'Works on pay-as-you-go model offering excellent price-quality ratio',
]

const devOpsFaq = [
  {
    id: 1,
    title: 'What are the DevOps consulting services you offer?',
    content: (
      <div className="faq-content">
        <p>As a DevOps consulting company, Qbatch offers the following services:</p>
        <ul>
          <li>DevOps Consulting Services</li>
          <li>DevOps Automation Services</li>
          <li>CI/CD Services</li>
          <li>DevOps and Cloud Computing</li>
          <li>DevSecOps Services</li>
          <li>Infrastructure as Code Services</li>
          <li>Virtualization</li>
        </ul>
      </div>
    )
  },
  {
    id: 2,
    title: 'What are the benefits of DevOps implementation',
    content: (
      <div className="faq-content">
        <p>Following are significant benefits of DevOps automation services:</p>
        <ul>
          <li>Eliminates siloed communication between developers and operations</li>
          <li>Build robust and market-driven enterprise infrastructure</li>
          <li>Keeps stakeholders aligned on new changes and goals</li>
          <li>Assure secure and automated software updates</li>
          <li>You take the driver’s seat, and DevOps do the work.</li>
          <li>Cut on costs big time and reduce overheads</li>
          <li>Complete management from conceptualization to deployment</li>
        </ul>
      </div>
    )
  },
  {
    id: 3,
    title: 'How can DevOps improve the efficiency and productivity of my development and operations teams?',
    content: (
      <div className="faq-content">
        <p>DevOps specialists help automate and streamline time-consuming and repetitive processes in the development lifecycle including build,
          test, and deployment pipelines, enabling quicker and quality  software releases and delivery. DevOps automation services allow teams to
          free up and spend time and effort on more productive tasks such as innovation, research and development, and problem-solving. 	</p>
      </div>
    )
  },
  {
    id: 4,
    title: 'What sets your DevOps services apart from other providers in the market?	',
    content: (
      <div className="faq-content">
        <p>Following are reasons that set Qbatch’s DevOps services apart from other providers in the market:</p>
        <ul>
          <li>DevOps DNA</li>
          <li>Relevant Delivery Experience</li>
          <li>Dedicated DevOps Team</li>
          <li>Homogenous Approach</li>
          <li>Fool-Proof Security and Control</li>
          <li>Strongly Agile & Transparent</li>
          <li>Stakeholder Visibility</li>
          <li>Proactive Communication</li>
          <li>Flexible Business Models</li>
          <li>Great Value for Money</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: 'Do you offer customized DevOps solutions tailored to the specific needs of my organization?	',
    content: (
      <div className="faq-content">
        <p>Yes, we offer custom DevOps solutions tailored to your organization’s needs in below-mentioned verticals:</p>
        <ul>
          <li>Kubernetes Services</li>
          <li>Professional Infrastructure as Code Services</li>
          <li>Azure DevOps Services</li>
          <li>DevSecOps Services</li>
          <li>AWS DevOps Services</li>
          <li>GCP DevOps Services</li>
          <li>ChatOps Solutions</li>
          <li>GitOps Services</li>
          <li>DataOps Services</li>
        </ul>
      </div>
    )
  },
  {
    id: 6,
    title: 'What tools and technologies do you use to support your DevOps services?	',
    content: (
      <div className="faq-content">
        <p>We use these DevOps tools and technologies to build your business infrastructure:</p>
        <ul>
          <li>AWS</li>
          <li>Jenkins</li>
          <li>Docker</li>
          <li>Ansible</li>
          <li>Puppet</li>
          <li>Chef</li>
          <li>Git</li>
          <li>Kubernetes</li>
          <li>Nagios</li>
          <li>Terraform</li>
        </ul>
      </div>
    )
  },
]

const saasFaq = [
  {
    id: 1,
    title: 'What is SaaS development, and how can it benefit my business?',
    content: (
      <div className="faq-content">
        <p>SaaS development offers many cost-effective, scalable, and flexible benefits for your business:</p>
        <span>
          <b>Cost-friendly</b><br />
          <p>Save on upfront costs, maintenance, and upgrades with a pay-as-you-go pricing model.</p>
        </span>
        <span>
          <b>Better time management</b><br />
          <p>Instant installation, vendor-managed maintenance, and upgrades eliminate downtime.</p>
        </span>
        <span>
          <b>Scalability and Accessibility</b><br />
          <p>Easily adjust usage plans, and access software from anywhere with an internet connection.</p>
        </span>
        <span>
          <b>High compatibility</b><br />
          <p>Automatic updates ensure users always have the latest version, eliminating compatibility issues.</p>
        </span>
        <span>
          <b>Guaranteed service</b><br />
          <p>Enjoy guaranteed uptime, automated backups, and data integrity assurance.</p>
        </span>
        <span>
          <b>Top-notch security</b><br />
          <p>Multiple geographically separated data centers ensure continuity of service and data safety.</p>
        </span>
        <span>
          <b>High adoption rates</b><br />
          <p>Web-based delivery results in rapid adoption due to familiar internet-based interfaces.</p>
        </span>
        <span>
          <b>Try before buying</b><br />
          <p>Free trials allow your business to test the solution's viability and compatibility before investing.</p>
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How does your SaaS development process work?',
    content: (<div className="faq-content">
      <p>This is how the SaaS development process works:</p>
      <ol>
        <li>
          <b>Discovery & Strategy</b><br />
          <p>In-depth analysis of your business goals and target audience.</p>
        </li>
        <li>
          <b>Design & Prototyping</b><br />
          <p>User-centered design for intuitive and engaging applications.</p>
        </li>
        <li>
          <b>Development & Deployment</b><br />
          <p>Secure and scalable development using cutting-edge technologies.</p>
        </li>
        <li>
          <b>Integration & Maintenance</b><br />
          <p>Seamless integration with existing systems and ongoing support.</p>
        </li>
        <li>
          <b>Testing</b><br />
          <p>We continuously test, monitor, gather feedback, and improve with each iteration.</p>
        </li>
        <li>
          <b>Operations and Support</b><br />
          <p>After initial feedback during MVP validation, we plan for future improvements.</p>
        </li>
      </ol>
    </div>),
  },
  {
    id: 3,
    title: 'Do you provide ongoing support and maintenance for your SaaS products?',
    content: (<div className="faq-content">
      <p>Yes, we provide ongoing support and maintenance for your SaaS products beyond type and scope.</p>
    </div>),
  },
  {
    id: 4,
    title: 'What are the cost factors involved in SaaS development and deployment?',
    content: (<div className="faq-content">
      <p>SaaS development and deployment cost factors include:</p>
      <li>
        <b>Development</b><br />
        <p>Initial costs involve planning, design, coding, and testing. Variability depends on complexity, features, hourly rates or fixed project costs.</p>
      </li>
      <li>
        <b>Infrastructure</b><br />
        <p>Hosting, storage, and processing infrastructure costs encompass cloud hosting fees, database expenses, server maintenance, and scalability requirements.</p>
      </li>
      <li>
        <b>Third-party Services</b><br />
        <p>Integration of external services like payment gateways or analytics platforms may incur subscription, transaction, or licensing fees.</p>
      </li>
      <li>
        <b>Tech stack</b><br />
        <p>Cutting-edge languages or frameworks can be pricier.</p>
      </li>
      <li>
        <b>Team structure</b><br />
        <p>In-house development is expensive, while outsourcing offers cost savings but might require extra management.</p>
      </li>
      <li>
        <b>Design and UX</b><br />
        <p>Investing in a user-friendly interface adds cost but improves user adoption.</p>
      </li>
      <li>
        <b>Scalability and security</b><br />
        <p>Building for growth and robust security involves additional costs for infrastructure and expertise.</p>
      </li>
      <li>
        <b>Deployment & maintenance</b><br />
        <p>Ongoing costs include server setup, maintenance, and updates.</p>
      </li>
      <li>
        <b>Compliance</b><br />
        <p>Meeting data privacy regulations can incur costs for audits and security measures.</p>
      </li>

    </div>),
  },
  {
    id: 5,
    title: 'What industries have you served with your SaaS development expertise?',
    content: (<div className="faq-content">
      <p>Qbatch has served these industries with its SaaS development expertise:</p>
      <ul>
        <li>E-commerce</li>
        <li>Customer Relationship Management (CRM)</li>
        <li>Marketing Automation</li>
        <li>Finance</li>
        <li>Retail, Logistic, and Fleet Management</li>
        <li>Healthcare</li>
        <li>Human Resources (HR)</li>
        <li>Project Management</li>
        <li>Education & Learning Management</li>
      </ul>
    </div>),
  },
  {
    id: 6,
    title: 'How can SaaS development benefit my business in terms of cost and scalability?',
    content: (<div className="faq-content">
      <p>SaaS development benefits businesses in terms of cost and scalability in multiple ways:</p>
      <ul>
        <li>Paying a predictable subscription fee for software licenses and hardware reduces IT overhead costs.</li>
        <li>SaaS apps allow adjustments to subscription plans without disruptions easily scaling your business growth</li>
        <li>Accelerated development processes enable quicker feature deployment, ensuring faster time-to-market and agility in responding to market needs.</li>
        <li>SaaS providers handle maintenance, updates, and troubleshooting, reducing IT maintenance costs and freeing resources.</li>
        <li>Cloud-based access enables flexible and remote usage, facilitating collaboration and access to business tools from anywhere.</li>
      </ul>
    </div>),
  },
  {
    id: 7,
    title: 'What technologies and programming languages do you use for SaaS development',
    content: (<div className="faq-content">
      <p>We use these technologies and programming languages for SaaS development:</p>
      <p><b>Languages</b><br />
        Python, Java, JavaScript (Node.js), PHP, C#</p>
      <p><b>Front-End Development</b><br />
        HTML5, CSS3, JavaScript frameworks (React, Angular, Vue.js)</p>
      <p><b>Back-End Development</b><br />
        Django (Python), Spring (Java), Express.js (Node.js), Laravel (PHP), ASP.NET (C#)</p>
      <p><b>Databases</b><br />
        SQL databases (MySQL, PostgreSQL) or NoSQL databases (MongoDB) </p>
      <p><b>Cloud Platforms</b><br />
        AWS, Google Cloud Platform (GCP), Microsoft Azure</p>
    </div>),
  },
  {
    id: 8,
    title: 'Can you explain the SaaS development lifecycle and the key stages involved?',
    content: (<div className="faq-content">
      <p>The SaaS development lifecycle and the key stages involved</p>
      <p><b>Discovery & Strategy</b><br />
        In-depth analysis of your business goals and target audience.</p>
      <p><b>Design & Prototyping</b><br />
        User-centered design for intuitive and engaging applications.</p>
      <p><b>Development & Deployment</b><br />
        Secure and scalable development using cutting-edge technologies.</p>
      <p><b>Integration & Maintenance</b><br />
        Seamless integration with existing systems and ongoing support.</p>
      <p><b>Testing</b><br />
        We continuously test, monitor, gather feedback, and improve with each iteration.</p>
      <p><b>Operations and Support</b><br />
        After initial feedback during MVP validation, we plan for future improvements.</p>
    </div>),
  },
  {
    id: 9,
    title: 'What is your user experience (UX) design approach in SaaS development?',
    content: (<div className="faq-content">
      <p>Our UX design ensures a clear hierarchy and logical flow, enabling users to complete main tasks. We prioritize user needs with clear menus, buttons, and intuitive interfaces, ensuring device accessibility. We iterate based on user research and feedback to keep your SaaS application users happy and engaged.</p>
    </div>),
  },
  {
    id: 10,
    title: 'What steps do you take to ensure the performance and scalability of SaaS applications?',
    content: (<div className="faq-content">
      <p>We consider these steps to ensure the performance and scalability of SaaS applications:</p>
      <ul>
        <li>Scalable tech stack, cloud platforms & databases to handle growth.</li>
        <li>Monitoring and alerting for proactive issue identification.</li>
        <li>Conduct performance testing throughout development.</li>
        <li>Optimize code and database queries for efficiency.</li>
        <li>Implement caching mechanisms to reduce server load.</li>
        <li>Use auto-scaling cloud infrastructure for hosting.</li>
        <li>Monitor application performance and scale resources as needed.</li>
        <li>Design architecture with scalability in mind, such as using microservices.</li>
        <li>Regularly review and optimize application architecture for performance.</li>
      </ul>
    </div>),
  },
  {
    id: 11,
    title: 'Why should you custom-build your SaaS platform?',
    content: (<div className="faq-content">
      <p>This is why you should custom-build your SaaS platform:</p>
      <ul>
        <li>Tailored to your specific business needs and workflows.</li>
        <li>Greater flexibility and control over features and functionality.</li>
        <li>Scalable architecture that grows with your business.</li>
        <li>Enhanced security measures tailored to your requirements.</li>
        <li>Integration with existing systems and tools for seamless operation.</li>
        <li>Potential cost savings compared to off-the-shelf solutions in the long run.</li>
        <li>Ability to differentiate your brand and offerings in the market.</li>
        <li>Direct access to support and maintenance from the development team.</li>
      </ul>
    </div>),
  },
]
const educationFaq = [
  {
    id: 1,
    title: 'What types of education software do you develop?',
    content: (
      <p>We develop various education software, including Learning Management Systems (LMS), Student Information Systems (SIS), eLearning platforms, virtual classrooms, assessment and testing software, language learning apps, and more.
      </p>
    ),
  },
  {
    id: 2,
    title: 'What are the key features of your education software development services?',
    content: (
      <p>Our key features include personalized learning experiences, interactive content creation, seamless integration with existing systems, robust analytics and reporting, mobile compatibility, and secure data management.
      </p>
    ),
  },
  {
    id: 3,
    title: 'What technologies and programming languages do you use in education software development?',
    content: (
      <p>We leverage Ruby on Rails, Node.js, Python, JavaScript, React, Angular, Vue, Swift, Kotlin, Java, PostgreSQL, MySQL, and more to develop cutting-edge education software.
      </p>
    ),
  },
  {
    id: 4,
    title: 'What sets your education software development company apart from the competition?',
    content: (
      <p>Our focus on user-centric design, innovation, scalability, and security sets us apart. We prioritize collaboration with clients to understand their unique needs and deliver tailored solutions that drive educational excellence.
      </p>
    ),
  },
  {
    id: 5,
    title: 'How do you ensure the security and privacy of educational data?',
    content: (
      <p>We implement industry-leading security measures to safeguard educational data, including encryption, access controls, regular security audits, and compliance with data privacy regulations such as GDPR and FERPA.
      </p>
    ),
  },
  {
    id: 6,
    title: 'Do you specialize in any particular areas within the education industry?',
    content: (
      <p>We develop custom solutions for various educational sectors, including K-12 schools, higher education institutions, corporate training, language learning, and vocational training.</p>
    ),
  },
  {
    id: 7,
    title: 'How do you ensure the educational software is user-friendly for teachers and students?',
    content: (
      <p>We conduct thorough user research and usability testing to ensure intuitive interfaces and seamless user experiences. Our iterative design process involves continuous feedback from teachers and students to optimize usability.
      </p>
    ),
  },
  {
    id: 8,
    title: 'What technologies and methodologies do you employ in your educational software development process?',
    content: (
      <p>We follow agile development methodologies, incorporating Scrum, Agile,  and Kanban practices. Our development process includes requirements gathering, prototyping, iterative development, testing, and deployment using modern technologies and tools.
      </p>
    ),
  },
  {
    id: 9,
    title: 'Can you customize the educational software to meet our specific requirements and preferences',
    content: (
      <p>We offer fully customizable solutions tailored to your unique requirements and preferences. Our team collaborates closely with you to understand your needs and deliver bespoke solutions that align with your goals.
      </p>
    ),
  },
  {
    id: 10,
    title: 'Can you provide ongoing support and maintenance for the educational software post-launch?',
    content: (
      <p>Yes, we offer comprehensive support and maintenance services post-launch to ensure your educational software's smooth operation and continuous improvement. Our dedicated support team can address any issues and implement updates as needed.
      </p>
    ),
  },
]

const extensionFaq = [
  {
    id: 1,
    title: 'Can you develop a browser extension for multiple browsers?',
    content: (
      <div className="faq-content">
        <span>
          Yes, we can develop browser extensions for multiple browsers using cross-browser extension frameworks like WebExtensions supported by browsers such as Firefox, Chrome, Edge, and Opera.
        </span>
      </div>
    )
  },
  {
    id: 2,
    title: 'Do you provide post-development support for browser extensions?',
    content: (
      <div className="faq-content">
        <span>
          Yes, team Qbatch provides post-development support for browser extensions on a retainer basis.
        </span>
      </div>
    )
  },
  {
    id: 3,
    title: 'What is the pricing model for browser extension development?',
    content: (
      <div className="faq-content">
        <span>
          The pricing model may vary based on project complexity, yet we provide transparent and flexible pricing plans, ensuring value for your investment.
        </span>
      </div>
    )
  },
  {
    id: 4,
    title: 'Do you Offer Maintenance Services after the completion of Browser Extension development?',
    content: (
      <div className="faq-content">
        <span>
          Yes, team Qbatch offers Maintenance Services after the Browser Extension development completion as required.
        </span>
      </div>
    )
  },
  {
    id: 5,
    title: 'Do you provide the source code ownership for Chrome extensions?',
    content: (
      <div className="faq-content">
        <span>
          Yes, we ensure complete ownership transfer of Chrome extensions making you the sole owner by documenting ownership details, including source code, and address licensing in our agreements.
        </span>
      </div>
    )
  },
  {
    id: 6,
    title: 'What is the average cost of hiring Chrome extension development services?',
    content: (
      <div className="faq-content">
        <span>
          Chrome extension development cost varies widely based on complexity, features, and developer expertise. Simple extensions may cost a few thousand dollars, while complex ones could range from several thousand to tens of thousands. Discuss your project with developers for accurate, tailored quotes.
        </span>
      </div>
    )
  },
  {
    id: 7,
    title: 'Can I hire a Chrome extension developer for pre-existing extensions?',
    content: (
      <div className="faq-content">
        <span>
          Yes, you can hire a Chrome extension developer for pre-existing extensions. Qbatch’s Chrome extension developers easily handle tasks like adding features, fixing bugs, or updating extensions.
        </span>
      </div>
    )
  },
  {
    id: 8,
    title: 'What technologies do you use to build my Chrome Extension?',
    content: (
      <div className="faq-content">
        <span>
          Below are the technologies we use to build your Chrome extension:
        </span>
        <span>Back-end</span>
        <ul>
          <li>Python</li>
          <li>Django</li>
          <li>Node JS</li>
          <li>FastAPI</li>
        </ul>
        <span>Front-end</span>
        <ul>
          <li>React</li>
        </ul>
        <span>Infrastructure</span>
        <ul>
          <li>Amazon Web Services</li>
          <li>Google Cloud Platform</li>
          <li>Digital Ocean</li>
        </ul>
      </div>
    )
  },
  {
    id: 9,
    title: 'Where do I hire the best remote Chrome Extension developers?',
    content: (
      <div className="faq-content">
        <span>
          Qbatch is a trustable choice to hire remote Chrome extension developers for custom-made and high-performing browsing experiences.
        </span>
      </div>
    )
  },
  {
    id: 10,
    title: 'Why is Qbatch the best choice for hiring Chrome Extension developers?',
    content: (
      <div className="faq-content">
        <span>
          This is why Qbatch is the best choice for hiring Chrome Extension developers:
        </span>
        <ul>
          <li>High-security</li>
          <li>Easy-to-Approach Features</li>
          <li>Ad-Free Browsing</li>
          <li>Smooth Browsing Experience</li>
          <li>Return on Marketing Investment</li>
          <li>Streamlined Project Management</li>
          <li>Organized and Decluttered Workflow</li>
          <li>Muti-Channel Product Distribution</li>
        </ul>
      </div>
    )
  },
  {
    id: 11,
    title: 'How much does it cost to hire a full-time Chrome Extension developer?',
    content: (
      <div className="faq-content">
        <span>
          Hiring a full-time Chrome Extension developer depends upon experience and skill. A junior Chrome Extension developer may have monthly rates of $2,000 to $5,000, while experienced Chrome Extension developer developers in higher-cost regions may charge $5,000 to $10,000 or more.
        </span>
      </div>
    )
  },
]
const faqQuestion = [
  {
    id: 1,
    title: 'What is CTO as a Service, and how can it benefit my business?',
    content: (
      <div className="faq-content">
        <span>
          CTO as a Service is when a business hires a technical person or a technical team to benefit from their
          strategic technology leadership, guidance, and expertise.
        </span>
        <span>Following are benefits of hiring a CTO:</span>
        <ul>
          {ctoBenefits.map((list, ind) => (
            <li key={ind}>{list}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How can a CTO as a Service help startups and small businesses scale effectively?',
    content: (
      <div className="faq-content">
        <span>A CTO as a Service (CaaS) can help startups and small businesses scale effectively through:</span>
        <span>Following are benefits of hiring a CTO:</span>
        <ul>
          {ctoService.map((list, ind) => (
            <li key={ind}>{list}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What are the key responsibilities of a CTO as a Service?',
    content: (
      <div className="faq-content">
        <span>These are the key responsibilities of on-demand CTO services:</span>
        <ul>
          {ctoResponsibilities.map((list, ind) => (
            <li key={ind}>{list}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How can a virtual CTO contribute to my company technology strategy and innovation?	',
    content: (
      <div className="faq-content">
        <span>
          A virtual CTO contribute to your company’s technology strategy and innovation in the following ways:
        </span>
        <ul>
          {ctoContribute.map((list, ind) => (
            <li key={ind}>{list}</li>
          ))}
        </ul>
        <span>
          A virtual Chief Technology Officer (CTO) may not be physically present but they play a significant role in
          shaping your company's technology strategy and stirring innovation through remote collaboration and massive
          technological expertise.
        </span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'How does your CTO as a Service model work, and what are the pricing options?',
    content: (
      <div className="faq-content">
        <span>You have four pricing options or hiring models to hire a CTO or availing IT leadership services:</span>
        <ul>
          <li>Full-time CTO</li>
          <li>Part-time CTO</li>
          <li>Interim CTO</li>
          <li>One-project based CTO</li>
        </ul>
      </div>
    ),
  },

  {
    id: 6,
    title: 'How do you ensure seamless collaboration between your virtual CTO and our in-house team?',
    content: (
      <div className="faq-content">
        <span>Following are ways our virtual CTOs ensure seamless collaboration with your in-house team:</span>
        <ul>
          <li>Clear communication channels and tools</li>
          <li>Regular meetings, brainstorming sessions, and team integration</li>
          <li>Shared documentation and collaboration tools</li>
          <li>Project management platforms</li>
          <li>Defined team roles and responsibilties</li>
          <li>Solid feedback loop</li>
          <li>Cultural sensitivity and open dialogue </li>
          <li>Conflict resolution and mutual respect </li>
          <li>Face-to-face interactions via video calls and recreational sessions</li>
          <li>Shared goals and vision </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: 'What challenges can a CTO as a Service help businesses overcome?',
    content: (
      <div className="faq-content">
        <span>CTO support for businesses help stakeholders overcome several challenges:</span>
        <ul>
          <li>Lack of technology leadership and expertise</li>
          <li>Updating old infrastructure with new technology</li>
          <li>Dealing with talent shortage</li>
          <li>Isolated position in the industry</li>
          <li>Getting investor attention</li>
          <li>Data privacy and cybersecurity threats</li>
          <li>Inefficienct technology strategy and executione</li>
          <li>Choosing the righ tech stack</li>
          <li>Technology debt management and budgeting</li>
          <li>Poor project management and implementation</li>
          <li>Adapting to market changes</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Is your CTO as a Service available on-demand, and how quickly can they start supporting my business?',
    content: (
      <div className="faq-content">
        <span>
          Yes, our CTO as a Service is available on-demand, they can start supporting your business within 24 hrs after
          contact.{' '}
        </span>
      </div>
    ),
  },
]

const webScrapingFaq = [
  {
    id: 1,
    title: 'Can you handle large-scale web scraping projects?',
    content: (
      <div className="faq-content">
        <span>Yes, team Qbatch can handle large-scale web scraping projects by carefully:</span>
        <ul>
          <li>Locating and understanding data sources</li>
          <li>Selecting suitable web scraping automation tools</li>
          <li>Managing requests using proxy servers</li>
          <li>Scheduling data scraping</li>
          <li>Validating and cleaning data</li>
          <li>Processing and storing data</li>
          <li>Monitoring and maintaining web data scraping framework</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How much do the data web scraping services cost?',
    content: (
      <div className="faq-content">
        <span>
          Data web scraping services costs range from around $600 to $1000 depending on the volume and complexity of
          data as well as the expertise of the web scraping team.
        </span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Can you handle large-scale web scraping projects?',
    content: (
      <div className="faq-content">
        <span>Yes, team Qbatch can handle large-scale web scraping projects by carefully:</span>
        <ul>
          <li>Locating and understanding data sources</li>
          <li>YSelecting suitable web scraping automation tools</li>
          <li>Managing requests using proxy servers</li>
          <li>Scheduling data scraping</li>
          <li>Validating and cleaning data</li>
          <li>Processing and storing data</li>
          <li>Monitoring and maintaining web data scraping framework</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'What is large-scale web scraping?',
    content: (
      <div className="faq-content">
        <span>
          Large-scale web scraping is the process of performing data extraction from millions of websites or mobile apps
          extensively. Web scraping is an automated process that involves running multiple web scrapers on many
          websites, both large and small, simultaneously depending upon the business's needs.
        </span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Can you scrape websites that require login credentials?	',
    content: (
      <div className="faq-content">
        <span>
          Yes, scraping websites that require login credentials is technically possible. However, it is important to
          comply with laws associated with user data privacy like GDPR. For that, general knowledge of HTTP Request
          Methods is important. Besides you can add “/robots. txt” to the website’s URL end to check whether the website
          supports web scraping.
        </span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'How do you ensure data quality and accuracy?	',
    content: (
      <div className="faq-content">
        <span>
          Following are reliable practices our web scrapers for hire practice to ensure data quality and accuracy
          towards its intended purpose:
        </span>
        <ul>
          <li>Establishing data governance guidelines </li>
          <li>Defining data metrics</li>
          <li>Identifying data quality failures</li>
          <li>Setting up a data audit process </li>
          <li>Ensuring data integrity</li>
          <li>Monitoring and cleaning collected data </li>
          <li>Validating data input</li>
          <li>Removing data clones</li>
          <li>Backing up data to avoid permanent loss</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Why should I use web scraping services?',
    content: (
      <div className="faq-content">
        <span>You should use web scraping services for these reasons: </span>
        <ul>
          <li>Price monitoring</li>
          <li>Staying ahead of market trends</li>
          <li>Keeping an eye on your competitors</li>
          <li>Maintaining your brand image and identity</li>
          <li>Social media management</li>
          <li>SEO and SERP enhancement </li>
          <li>Knowing your target audience better</li>
          <li>Designing targeted marketing and advertisement campaigns</li>
          <li>Improvising actively with changing industry trends</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: 'What types of data can be scraped using these services?',
    content: (
      <div className="faq-content">
        <span>Below are the data types you can scrape using our web data scraping services </span>
        <ul>
          <li>Product and brand information </li>
          <li>Pricing data</li>
          <li>Images</li>
          <li>Texts</li>
          <li>Videos</li>
          <li>Links </li>
          <li>HTML codesI understand and agree to the</li>
          <li>Hidden information Images</li>
          <li>Customer behavior and patterns </li>
          <li>User feedback and sentiments</li>
          <li>Social Media reviews and more</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    title: 'How accurate is the data obtained through scraping?',
    content: (
      <div className="faq-content">
        <span>
          Data scraping collects data from different platforms with an accuracy of over 90%. Website scraping services
          save you from messy copy-and-paste rituals juggling between layout documents — delivering safe and precise
          information to the table.
        </span>
      </div>
    ),
  },
  {
    id: 10,
    title: 'How is data scraping different from web crawling?',
    content: (
      <div className="faq-content">
        <span>Following are a few differences between data scraping and web crawling:</span>
        <ul>
          <li>Web scraping extracts the data while web crawling indexes and finds web pages.</li>
          <li>
            Web scraping entails tools and services to automate data collection from small and large websites at once
            while web crawling employs crawlers or bots to permanently follow links based on hyperlinks. Google and Bing
            use crawlers to extract general data fields such as page titles, snippets, URL paths, etc. to show in the
            search results.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Can I specify the data fields I want to scrape?',
    content: (
      <div className="faq-content">
        <span>
          Yes, you can specify data fields for scraping via "custom extraction" — creating custom fields and getting
          analyses based on page content and structure. How to create a custom field:
        </span>
        <ul>
          <li>Set up a scraping configuration in the setting interface. </li>
          <li>Add extraction rules to retrieve data during the page fetch.</li>
          <li>
            Choose extraction rules in the source code as per your requirement. These rules are usually written as
            REGEX, XPATH queries, or as a combination of both.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Are the scraped data formats compatible with my existing systems or databases?',
    content: (
      <div className="faq-content">
        <span>
          Yes, you can choose from multiple data formats such as CSV, XML, JSON, SQL format, tab-delimited, fixed-width,
          etc., to match scraped data with your existing systems or databases.
        </span>
      </div>
    ),
  },
  {
    id: 13,
    title: 'Are there any legal constraints or terms of service that need to be considered while scraping data?',
    content: (
      <div className="faq-content">
        <span>
          The only legal constraint to consider when data scraping is to not scrape sensitive/private data for profit.
          Business owners worry about copyright infringement, contract breach, fraud, data theft, and more in case of
          data scraping. Ethically, it is recommended to provide a user agent string to the data owner as a way to
          contact you if needed.
        </span>
      </div>
    ),
  },
]

const ecomFaqQuestion = [
  {
    id: 1,
    title: 'Why do I need e-commerce automation services?',
    content: (
      <div className="faq-content">
        <span>
          Choosing e-commerce automation services allows you to put repetitive and time-consuming tasks on auto-pilot,
          getting more done in less time. For example, you can automate marketing and sales, order fulfillment and
          shipment, billing and payment, returns management, customer service operations, and more. This way you save
          finances and labor, increasing returns on investment.
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How can e-commerce automation services help me save time and increase productivity?',
    content: (
      <div className="faq-content">
        <span>
          The technology used in e-commerce automation services lets you perform tasks with little or no human
          involvement, giving you time to spend on creative and strategic tasks instead of unimportant work. E-commerce
          management automation helps you with barcoding, inventory management, order management, finding the right
          products, and making better relationships with your customers.
        </span>
        <span>
          Reduced workload and minimized human errors allow smooth user journey, thus increasing productivity and
          enabling customer retention.
        </span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Will e-commerce automation services help me reduce errors and improve accuracy?',
    content: (
      <div className="faq-content">
        <span>
          E-commerce task automation prevents human errors keeping the team involved in significant tasks and improving
          overall operational efficiency and consistency leaving limited room for distractions and mistakes. This helps
          in achieving accuracy in data collection and analysis, faster communication, record keeping, and generating
          lucrative outcomes as a result.
        </span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How can I get started with your e-commerce automation services?',
    content: (
      <div className="faq-content">
        <span>
          Getting started with e-commerce automation is no rocket science. Anyone from the supply chain and seller
          community can easily avail of e-commerce software automation services in 6 steps:
        </span>
        <ul>
          <li>Facing a problem?</li>
          <li>Get in touch with Team Qbatch</li>
          <li>Share your problem statement</li>
          <li>We will perform a requirement analysis and offer a roadmap</li>
          <li>We sign a risk-free contract</li>
          <li>We break a sweat and make a successful launch that sells!</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What can be automated in e-commerce?',
    content: (
      <div className="faq-content">
        <span>You can perform e-commerce process automation on the following operations:</span>
        <ul>
          <li>Customer experience automation to promptly manage customer queries and complaints.</li>
          <li>Shipping and order fulfillment to simplify pick & pack and shipping processes</li>
          <li>Inventory automation to hide or unpublish stock-outs until they are available again.</li>
          <li>Printing product shipment labels and tracking numbers</li>
          <li>E-commerce security automation to detect and stop high-risk orders.</li>
          <li>E-commerce process automation helps in audience segmentation and personalization. </li>
          <li>E-commerce marketing automation to apply discounts and send targeted emails</li>
          <li>Invoicing and reconciliation automation to keep track of expenses.</li>
          <li>E-commerce workflow automation to manage operational and administrative tasks</li>
          <li>Others include advertising and customer journey automation</li>
        </ul>
      </div>
    ),
  },
]
const productDesignFaq = [
  {
    id: 1,
    title: 'What is full-cycle software product development?',
    content: (
      <div className="faq-content">
        <span>Full-cycle software product development or software development lifecycle is based on seven stages:</span>
        <ul>
          <li>Planning</li>
          <li>Requirement Analysis</li>
          <li>Design</li>
          <li>Development</li>
          <li>Testing</li>
          <li>Deployment</li>
          <li>Maintenance</li>
        </ul>
        <span>These stages may overlap or move in order depending on the development technique you use. </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How can you help me develop my product idea?',
    content: (
      <div className="faq-content">
        <span>Following are key steps we follow to develop and grow your product idea:</span>
        <ul>
          <li>Defining and refining your product idea</li>
          <li>Researching your idea’s target audience and real-world problems</li>
          <li>Designing a wireframe and offering a roadmap </li>
          <li>Building and testing a prototype in the market</li>
          <li>Rectifying your idea per the responses</li>
          <li>Creating jaw-dropping product design</li>
          <li>Developing an MVP based on necessary features and functionalities</li>
          <li>Launching the MVP for immediate public use</li>
          <li>Getting feedback from the early adopters</li>
          <li>Running iterations to grow your product responding to ever-changing user needs</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What are the 5 stages of product development?',
    content: (
      <div className="faq-content">
        <span>Following are the 5 main stages of enterprise product development:</span>
        <ul>
          <li>Brainstorming & Ideation</li>
          <li>R&D and Screening </li>
          <li>Concept Development & Wireframing</li>
          <li>Product Prototyping</li>
          <li>MVP Launch & Iterations</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How can I select a trustworthy software product development company?',
    content: (
      <div className="faq-content">
        <span>
          Selecting and partnering with a trustworthy product development company is easy, just make sure they offer:
        </span>
        <ul>
          <li>Spectacular Price-Quality Ratio</li>
          <li>Total Process Transparency </li>
          <li>Cross-Sector Expertise </li>
          <li>100% Founder's Mentality</li>
          <li>Pay-as-you-go Model</li>
          <li>Dependable Engineering Craftsmanship</li>
          <li>Neutral Software Analysis</li>
          <li>Technology Leadership</li>
          <li>Highly Solution Oriented Mindset</li>
        </ul>
        <span>
          Team Qbatch is a full-fledged custom software product development company 100% invested in your product growth
          offering the above features as brownie points. You can verily trust us with your idea.{' '}
        </span>
        <h6 className="my-2">How?</h6>
        <ul>
          <li>Get in touch and share your ideas</li>
          <li>Choose a hiring model </li>
          <li>Select from the talent pool and build your dream team </li>
          <li>We prepare a roadmap and offer you a project estimation</li>
          <li>Risk-free contract sign-off</li>
          <li>Kickstart your project toward a seamless and successful launch</li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What happens after the software is delivered? Who handles support and maintenance?',
    content: (
      <div className="faq-content">
        <span>
          After software product delivery, software maintenance begins. It is a critical process that includes
          performance optimization through several iterations of advanced development to reduce errors and redundant
          development elements.
        </span>
        <span>
          Software maintenance is a continuous activity handled by product owners and technical experts to rectify
          faults and add/ delete features and other attributes to ensure product adaptation suitable to ever-changing
          user situations and requirements.{' '}
        </span>
        <span>
          The software support and maintenance process is an ongoing process because no software is ever ‘finished.’
        </span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'How much will it cost to develop a software product?',
    content: (
      <div className="faq-content">
        <span>
          Software development costs majorly depend on the product size and time required to build that app. The
          software development cost ranges between $25,000 to $250,000.
        </span>
      </div>
    ),
  },
]
const webAppFaq = [
  {
    id: 1,
    title: 'What is a web application development company?',
    content: (
      <div className="faq-content">
        <span>
          A web application development company builds small-scale and large-scale web applications for startups, scaleups, and businesses.
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How to choose the right web development company for my project?',
    content: (
      <div className="faq-content">
        <span>Following are tips to choose the right web development company for my project:</span>
        <ul>
          <li>Determine the type of website you need</li>
          <li>Understand your requirements</li>
          <li>Factor in all the costs</li>
          <li>Create a list of top web development companies</li>
          <li>Study the companies</li>
          <li>Review their work and services</li>
          <li>Figure out who meets your requirements</li>
          <li>Contact them, share your requirements, and see what they offer</li>
        </ul>
        <span><b><i>Bonus tip</i></b>: Communication and transparency should be their core values.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What services does a web application development company offer?',
    content: (
      <div className="faq-content">
        <span>
          A custom web application development company offers these services:
        </span>
        <ul>
          <li>Web App Reengineering and Consultancy</li>
          <li>Backend Development Services</li>
          <li>Front-end Development Services</li>
          <li>API development and integration</li>
          <li>Enterprise Web App Development</li>
          <li>Web Portal Development</li>
          <li>Progressive Web App Development Services</li>
          <li>SaaS Web Development</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'What is the process of developing a web application?',
    content: (
      <div className="faq-content">
        <span>
          Typically, a web application development process includes these steps:
        </span>
        <ul>
          <li>PROJECT MAPPING</li>
          <span>Requirement analysis to form a risk-free and modern solution.</span>
          <li>VISUAL AND TECHNICAL DESIGN</li>
          <span>Prototype designing testing to rectify concerns in real-world terms.</span>
          <li>DEVELOPMENT</li>
          <span>Business logic and code development according to the approved design.</span>
          <li>ENSURING SECURITY AND QA</li>
          <span>Security and QA testing to secure your product from cyberattacks and functional issues.</span>
          <li>DEPLOYMENT</li>
          <span>The final execution of the tested and optimized software solution.</span>
          <li>LAUNCH AND SUPPORT</li>
          <span>A happy project launch with continued support and maintenance.</span>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'How long does it take to develop a custom web application?',
    content: (
      <div className="faq-content">
        <span>
          The timeline of developing a web app majorly depends on the project’s scope, complexity, and resources involved. A simple web app with minimum viable features may take around 4 - 6 weeks to build while a wide-scope web app featuring advanced specs may take around 6 - 12 months or longer.
        </span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'What technologies do web application development companies use?',
    content: (
      <div className="faq-content">
        <span>
          The timeline of developing a web app majorly depends on the project’s scope, complexity, and resources involved. A simple web app with minimum viable features may take around 4 - 6 weeks to build while a wide-scope web app featuring advanced specs may take around 6 - 12 months or longer.
        </span>
        <ul>
          <li>Javascript</li>
          <li>HTML and CSS</li>
          <li>Angular</li>
          <li>Ruby on Rails</li>
          <li>Meteor Js</li>
          <li>Express.js</li>
          <li>Django</li>
          <li>Laravel</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>PHP</li>
          <li>GoLang</li>
          <li>Swift</li>
          <li>Java</li>
          <li>Elixir</li>
          <li>Scale</li>
        </ul>
        <span>And more</span>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Can a web application development company help with website maintenance and updates?',
    content: (
      <div className="faq-content">
        <span>
          Yes, a web application development company definitely helps with website maintenance and updates. With custom web application development being the primary focus, web development specialists also offer retainer-based maintenance and support services for websites. Following are ways a company helps with ongoing website maintenance and updates:
        </span>
        <ul>
          <li>Regular software and content updates</li>
          <li>Bug fixes</li>
          <li>Emergency support</li>
          <li>Overall performance and security optimization</li>
          <li>Data backups and recovery</li>
          <li>Mobile responsiveness</li>
          <li>User experience improvements</li>
          <li>Analytics and assessments</li>
          <li>Technology and platform updates</li>
          <li>Consultation and recommendations</li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: 'What is the cost of web application development?',
    content: (
      <div className="faq-content">
        <span>
          There are no standard answers to how much a web application development may cost. But web app scope, region, complexity, and resources involved largely predict the costs of a web app development project. As per a rough estimate, a basic web app may cost $20,000 – $50,000, proof of concept (PoC) for startups may cost  $50,000 – $70,000, while mid-complexity web apps or modern MVPs may cost  $50,000 – $150,000.

        </span>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Do web application development companies provide ongoing support?',
    content: (
      <div className="faq-content">
        <span>
          Yes, web app development agencies offer ongoing support besides full-cycle web app development services which include regular updates, security optimization, performance audits, responsiveness, analytics, UX improvements, consultation, innovation support, and more.
        </span>
        <ul>
          <li>Global collaboration and communication</li>
          <li>Automation and productivity</li>
          <li>Enhanced customer happiness</li>
          <li>Data-driven insights and decisions</li>
          <li>Scalability and increased demand</li>
          <li>Higher ROI</li>
          <li>Opportunity to build brand awareness</li>
          <li>Innovation and differentiation</li>
          <li>Increased sales and market value</li>
          <li>Safe information storage</li>
          <li>Accessibility and convenience</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    title: 'What are the benefits of hiring a web application development company?',
    content: (
      <div className="faq-content">
        <span>
          These are the benefits of hiring a web application development company:
          <ul>
            <li>Save time and money</li>
            <li>Reliable and experience-driven website</li>
            <li>Pleasing design experiences</li>
            <li>Builds 100 stable code</li>
            <li>Strongly agile approach</li>
            <li>Responsive and fast website</li>
            <li>Access to latest tech stack</li>
            <li>Look trustworthy</li>
            <li>SEO Optimized</li>
          </ul>
        </span>
      </div>
    ),
  }
]
const ecomIndustry = [
  {
    id: 1,
    title: 'Do you offer outsourcing services for eCommerce development projects?',
    content: (<div className="faq-content"><span>Yes, we offer outsourcing services for eCommerce development projects.</span></div>)
  },
  {
    id: 2,
    title: 'How can I hire eCommerce developers from your company?',
    content: (
      <div className="faq-content">
        <span>You can hire our e-commerce developers in these simple steps:</span>
        <ol>
          <li>
            <b>Contact Us</b>
            <p>Reach out via email, phone, or website.</p>
          </li>
          <li>
            <b>Consultation</b>
            <p>Discuss project needs and goals.</p>
          </li>
          <li>
            <b>Proposal</b>
            <p>Receive a tailored proposal.</p>
          </li>
          <li>
            <b>Team Selection</b>
            <p>Choose skilled developers.</p>
          </li>
          <li>
            <b>Onboarding</b>
            <p>Complete paperwork and setup.</p>
          </li>
          <li>
            <b>Development</b>
            <p>Collaborate on project execution.</p>
          </li>
          <li>
            <b>Review</b>
            <p>Regularly review progress.</p>
          </li>
          <li>
            <b>Completion</b>
            <p>Receive ongoing support.</p>
          </li>
        </ol>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Do you provide both website design and development services for eCommerce platforms?',
    content: (<div className="faq-content"><span>Yes, we provide both website design and development services for eCommerce platforms.</span></div>),
  },
  {
    id: 4,
    title: 'What expertise do you have in platform development for eCommerce websites?',
    content: (
      <div className="faq-content">
        <span>We possess these skills and tools for e-commerce websites in platform development:</span>
        <ul>
          <li>Cloud infrastructure development for scalability and security.</li>
          <li>Modern development tools to simplify building eCommerce features.</li>
          <li>AI and Machine Learning for personalization, recommendations, and more.</li>
          <li>Analytics to understand customer behavior and optimize sales.</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: 'Can you integrate payment gateway software into my eCommerce platform?',
    content: (<div className="faq-content"><span>Yes, we can integrate multiple payment gateways into your e-commerce platform.</span></div>)
  },
  {
    id: 6,
    title: "Can you develop custom applications to enhance my eCommerce website's functionality?",
    content: (<div className="faq-content"><span>Yes, we can develop custom applications to enhance my eCommerce website's functionality.</span></div>)
  },
  {
    id: 7,
    title: 'Do you specialize in B2B eCommerce development?',
    content: (<div className="faq-content"><span>Yes, we specialize in B2B e-commerce development. We create B2B commerce hubs to streamline interactions between your business, partners, vendors, and clients, driving high-volume sales. With our solutions, you can manage orders and inventory efficiently, offer personalized pricing and catalogs, and facilitate split shipments for seamless order delivery.</span></div>)
  },
  {
    id: 8,
    title: (<div className="faq-content"><span>Yes, we can build a portal for your e-commerce business. Our trade portal development services connect you with various e-commerce stakeholders across web, tablet, and mobile platforms. We help unlock revenue streams through subscriptions, sales, listings, and more with our e-commerce portal development services.</span></div>)
  },
  {
    id: 9,
    title: 'Do you offer consulting services to help optimize eCommerce websites?',
    content: (
      <div className="faq-content">
        <span>Absolutely! We offer e-commerce consulting services, sharing our industry knowledge and expertise and guiding you to create platforms with optimal product-market fit, giving you a competitive edge.</span>
        <span>We provide expert guidance on integrating new features and exploring monetization models. Drawing from our extensive portfolio, we offer insights and alternative approaches to optimize your eCommerce website, saving you time and money while maximizing effectiveness.</span>
      </div>
    )
  },
  {
    id: 10,
    title: 'Can you assist with data migration for my eCommerce platform?',
    content: ( <div className="faq-content"><span>Yes, we can assist with data migration for your e-commerce platform. Whether upgrading to a new platform, consolidating data from multiple sources, or simply restructuring your existing database, we can assist you every step of the way. Our team ensures a seamless transition, preserving data integrity and minimizing downtime so you can focus on growing your business without disruptions.</span></div>)
  },
  {
    id: 11,
    title: 'Do you serve clients in the USA, particularly New York and Liverpool?',
    content: ( <div className="faq-content"><span>Yes, Qbach, an e-commerce software development company, serves clients in the USA, particularly in cities like New York and Liverpool.</span></div>)
  },
  {
    id: 12,
    title: 'How much does e-commerce development cost?',
    content: (<div className="faq-content"><span>E-commerce development costs vary greatly depending on several factors, ranging from $30 for a basic setup to $10,000+ for complex stores.</span></div>)
  },
]
const mobileAppFaq = [
  {
    id: 1,
    title: 'Why should I choose your mobile app development services for my project?',
    content: (
      <div className="faq-content">
        <span>
          As a mobile app development services company, we offer 100% communication & transparency throughout the
          product lifecycle. With our top-tier mobile app developers, you can:
        </span>
        <ul>
          <li>Find Product-Market-Fit</li>
          <span>Build and launch your MVP with maximum impact in the highly competitive product market.</span>
          <li>Direct Access to Time Reports</li>
          <span>Keep track of the SDLC for work progress and possible delays and share feedback as needed.</span>
          <li>Well-Aligned Iteration Goals</li>
          <span>
            The primary thing that keeps us driven is to find what's required for your product to succeed and sustain.
          </span>
          <li>Strongly Agile </li>
          <span>Periodic communication between stakeholders and the development team so you never miss a beat. </span>
          <li>Low-code Development </li>
          <span>Reduce development time by 90% and build sophisticated mobile apps in a single platform. </span>
        </ul>
        <span>We are your Crew, not “Vendors”</span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What is your mobile app development process, and how do you ensure quality?',
    content: (
      <div className="faq-content">
        <span>
          Below mentioned is our mobile app development process which also ensures quality from scratch to end:{' '}
        </span>
        <h6>PROJECT MAPPING</h6>
        <span>Requirement analysis to form a risk-free and modern solution.</span>
        <h6>VISUAL AND TECHNICAL DESIGN</h6>
        <span>Prototype designing testing to rectify concerns in real-world terms.</span>
        <h6>DEVELOPMENT</h6>
        <span>Business logic and code development according to the approved design. </span>
        <h6>ENSURING SECURITY AND QA</h6>
        <span>Security and QA testing to secure your product from cyberattacks and functional issues. </span>
        <h6>DEPLOYMENT</h6>
        <span>The final execution of the tested and optimized software solution.</span>
        <h6>LAUNCH AND SUPPORT</h6>
        <span>A happy project launch with continued support and maintenance</span>
        <h6>LAUNCH AND SUPPORT</h6>
        <span>A happy project launch with continued support and maintenance</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How experienced is your team of mobile app developers?',
    content: (
      <div className="faq-content">
        <span>
          On average, our team of mobile app developers has 3+ years of experience that have built cross-platform mobile
          apps across several industries.{' '}
        </span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Do you offer custom app development to meet unique business needs?',
    content: (
      <div className="faq-content">
        <span>
          Yes, we offer custom app development services to meet unique business needs ranging from increased brand
          awareness, global reach, technological advancement, higher level collaboration and communication, business
          expansion, revenue generation, and more.{' '}
        </span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What is your mobile app testing strategy to ensure functionality and performance?',
    content: (
      <div className="faq-content">
        <span>
          Our mobile app testing strategy includes testing on both real devices and virtual devices i.e. Android
          emulators and iOS simulators for accurate test results and greater agility.
        </span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'What platforms do you develop mobile apps for?',
    content: (
      <div className="faq-content">
        <span>
          The timeline of developing a web app majorly depends on the project’s scope, complexity, and resources
          involved. A simple web app with minimum viable features may take around 4 - 6 weeks to build while a
          wide-scope web app featuring advanced specs may take around 6 - 12 months or longer.
        </span>
        <ul>
          <li>iOS</li>
          <li>Android</li>
          <li>Cross-platform</li>
        </ul>
      </div>
    ),
  },
]
const mvpDevFaq = [
  {
    id: 1,
    title: 'What is MVP development, and why is it important for startups?',
    content: (
      <div className="faq-content">
        <span>
          MVP in software development stands for Minimum Viable Product, a product with essential features designed to attract early adopters and validate a product idea in the development cycle by gathering valuable user feedback.
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How long should it take to build an MVP?',
    content: (
      <div className="faq-content">
        <span>
          Building an MVP can take from a few weeks to 2-4 months, depending on complexity, features, design intricacies, available resources, and team efficiency. A focused approach and core features can expedite the timeline, but prioritizing quality is crucial.
        </span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What are the key benefits of using MVP consulting services?',
    content: (
      <div className="faq-content">
        <span>
          These are the key benefits of MVP consulting services:
        </span>
        <ul>
          <li>Validates business assumptions with minimal resources and time.</li>
          <li>Enables quick testing of the business concept in the market.</li>
          <li>Gathers valuable feedback from early adopters.</li>
          <li>Well-executed MVP can attract investors.</li>
          <li>Functions as a tool to acquire early customers and build a user base.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How does agile software development fit into the MVP process?',
    content: (
      <div className="faq-content">
        <span>
          Both Agile and MVP focus on delivering value to users, with Agile emphasizing continuous value delivery and MVP targeting early adopters for validation.
        </span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What is the best approach to building an MVP?',
    content: (
      <div className="faq-content">
        <span>
          The best approach to building an MVP is to start small, focus on the core value, and iterate based on real user feedback. This approach allows for efficient use of resources while ensuring the product aligns closely with user needs and expectations. Here are key steps:
        </span>
        <ol>
          <li>Identify core value proposition that solves the problems of your end users.</li>
          <li>Prioritize essential features under your budget</li>
          <li>User-centric design assuring usability and navigation</li>
          <li>Rapid iterative development to ensure continuous feedback integration</li>
          <li>Real-world testing and validation for continuous improvements</li>
          <li>Make minimum viable launch and introduce your product to the market</li>
          <li>Iterative improvement based on ongoing user feedback and market trends </li>
          <li>Prioritize additional features for subsequent releases</li>
          <li>Strategic scaling based on the validated feedback and growing user demands.</li>
          <li>Analytics and metrics to track user behavior and make informed decisions for future development.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Can you handle both web and mobile app MVP development?',
    content: (
      <div className="faq-content">
        <span>
          Yes, team Qbatch got hands-on experience in both web and mobile app MVP development projects.

        </span>
      </div>
    ),
  },
  {
    id: 7,
    title: 'How much does MVP development cost?',
    content: (
      <div className="faq-content">
        <span>
          MVP development may cost around $15,000 to $150,000 or more. This majorly depends on factors like features, resources, and team allocation. Having a detailed account of your idea and how you plan to validate it can help you determine the cost estimate for your MVP project.
        </span>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Why choose Qbatch for MVP development?',
    content: (
      <div className="faq-content">
        <span>
          Below are the reasons to trust Qbatch for MVP development:
        </span>
        <span>
          <b>Core Team</b>
          <p>We assemble a small, super team of Product owners and expert MVP developers to get you started. </p>
          <b>Launch Early</b>
          <p>WExpect a robust and legendary Ford Model T — laying a foundation for scalable product development. </p>
          <b>Lean-er Startup</b>
          <p>Like a Lean Startup, build, validate, measure, and improve toward calculated success </p>
          <b>Fair Fee </b>
          <p>We understand. The budget’s tight. That’s why the payment structure is predictable and pre-defined.</p>
          <b>Weekly Reports</b>
          <p>No secrets, you get every detail from progress to declines ensuring transparency and productivity. </p>
          <b>Close Collaboration</b>
          <p>Control your MVP from the get-go, set deadlines, and tell us your goals. You command, we obey. </p>
          <b>Trustable Expertise</b>
          <p>We've nailed MVP launches before, and we're ready to do it again!</p>
        </span>
      </div>
    ),
  },
]
const hireDeveloper = [
  {
    id: 1,
    title: 'How are Qbatch developers different?',
    content: (
      <div className="faq-content">
        <span>Qbatch’s developers for hire show performance instead of making promises. They believe in a value system:</span>
        <ul>
          <li>Proven coding practices</li>
          <li>Founder’s mentality</li>
          <li>Empathetic & collaborative</li>
          <li>On-the-go support</li>
          <li>Best Quality-price ratio</li>
          <li>Trustworthy & transparent</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How to hire top remote developers through Qbatch?',
    content: (
      <div className="faq-content hire-developer-faq">
        <span>You can follow this simple 4-step process to hire your developers at Qbatch:</span>
        <ol>
          <b><li>Tell us your requirements</li></b>
          <span>We carefully understand your needs, goals, and dynamics.</span>
          <b><li>Meet A-grade developers</li></b>
          <span>We screen the most suitable developer profiles and present them to you within 24 hours, </span>
          <b><li>Find the right fit</li></b>
          <span>Meet the devs and find your best match. We take care of the rest!</span>
          <b><li>Begin your trial</li></b>
          <span>Start building with a no-risk1-week  trial period. </span>
          <p>Or directly schedule a meeting at <a href="https://calendly.com/qbatch/meeting" >here</a></p>
        </ol>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How much does it cost to hire software developers on Qbatch?',
    content: (
      <div className="faq-content">
        <span>The cost to hire software developers at Qbatch ranges from $50 to $250 per hour.</span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'What kinds of software developers are available for hire through Qbatch?',
    content: (
      <div className="faq-content">
        <span>Qbatch offers a wide range of senior-level dedicated software developers covering 200+ languages and frameworks on a full-time, part-time, and hourly basis.</span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Do you offer flexible hiring models, such as full-time, part-time, or freelance developers?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch, offers flexible and affordable hiring models such as full-time, part-time, or hourly-based developers for both startups and large companies.</span>
      </div>
    ),
  },
];
const FinTechAppDevelopmentFAQ = [
  {
    id: 1,
    title: 'I have an idea for a finance software. What should I start with?',
    content: (
      <div className="faq-content">
        <span>You can:</span>
        <ul>
          <li>Conduct thorough market research to understand the needs and preferences of
          your target audience.</li>
          <li>Dene your unique value proposition for the nance software.</li>
          <li>Create a detailed plan outlining the features and functionalities of your software.</li>
          <li>Consider regulatory requirements and compliance standards in the nance
          industry.</li>
          <li>Start building a prototype or minimum viable product (MVP) to validate your
          idea with potential users.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Do you offer consulting on the development of fintech solutions?',
    content: (
      <div className="faq-content hire-developer-faq">
        <span>Yes, we oer consulting services to assist you at every stage of ntech solution
          development. Our team of experts can guide market research, product strategy,
          technology selection, regulatory compliance, and more.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Do you specialize in any particular areas within the FinTech industry?',
    content: (
      <div className="faq-content">
        <span>We have experience developing a wide range of ntech solutions, including</span>
        <ul>
          <li>Payment processing systems</li>
          <li>Personal finance management apps</li>
          <li>Neobanking and online banking apps</li>
          <li>Hedge funding and portfolio asset management</li>
          <li>Investment platforms</li>
          <li>Blockchain-based solutions</li>
          <li>Accounting software development</li>
          <li>Lending Solutions</li>
          <li>Tax preparing software development</li>
          <li>API integrations</li>
          <li>On-demand services</li>
        </ul>
        <span>Our fintech app development team can adapt to various domains within the industry to meet your specific requirements.</span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'What technologies and platforms do you use for FinTech app development?',
    content: (
      <div className="faq-content">
        <span>We use a variety of technologies and platforms, including but not limited to Python, Java, JavaScript, React, Angular, Node.js, SQL, NoSQL, cloud computing services (such as AWS, Azure, and Google Cloud), blockchain, RPA, biometric, and more.</span>
        <span>Our technology stack is tailored to the specific needs of each project.</span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Can you create custom FinTech solutions tailored to our specific requirements?',
    content: (
      <div className="faq-content">
        <span>Absolutely, we specialize in developing custom fintech solutions tailored to meet our clients' unique needs and objectives. We work closely with you to understand your requirements and deliver a solution that aligns with your business goals. <b style={{cursor: 'pointer'}} onClick={() => navigate('/contact')}>Get in touch for more details.</b></span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'What is your approach to UX/UI design for FinTech applications?',
    content: (
      <div className="faq-content">
        <span>Our UX/UI design approach for fintech applications is user-centric and data-driven. We conduct user research to understand the behaviors and preferences of your target audience, and we use this insight to design intuitive and visually appealing interfaces that enhance the overall user experience.</span>
      </div>
    ),
  },
  {
    id: 7,
    title: 'How do you handle post-launch maintenance and support for FinTech apps?',
    content: (
      <div className="faq-content">
        <span>We offer comprehensive post-launch maintenance and support services to ensure your fintech app's ongoing performance and security. Our team;</span>
        <ul>
          <li>monitors the app for any issues or vulnerabilities;</li>
          <li>provides regular updates and enhancements;</li>
          <li>and offers responsive customer support to address any user inquiries or concerns.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Can you provide insights or consulting on FinTech product development strategies?',
    content: (
      <div className="faq-content">
        <span>Yes, we can provide insights and consulting on fintech product development strategies based on our extensive experience in the industry. Whether you're looking to enter a new market, differentiate your product from competitors, or navigate regulatory challenges, our team can offer strategic guidance to help you achieve your goals.
        </span>
      </div>
    ),
  },
  {
    id: 9,
    title: 'What is the cost structure for your fintech app development services?',
    content: (
      <div className="faq-content">
        <span>Our cost structure for fintech app development varies depending on the scope and complexity of the project. We offer flexible pricing options, including fixed-price and hourly rates, and we work closely with our clients to develop a transparent and cost-effective pricing plan that fits their budget and timeline. Get a free estimate.</span>
      </div>
    ),
  },
  {
    id: 10,
    title: 'What are the benefits of FinTech software development?',
    content: (
      <div className="faq-content">
        <span>FinTech software development offers numerous benefits, including:</span>
        <ul>
          <li>Increased efficiency and automation of financial processes</li>
          <li>Improved access to financial services for underserved populations</li>
          <li>Enhanced security and fraud prevention measures</li>
          <li>Greater transparency and accountability in financial transactions</li>
          <li>Opportunities for innovation and disruption in traditional financial markets</li>
          <li>Potential to revolutionize how we manage, access, and interact with financial
          services through cutting-edge technologies and innovative solutions.</li>
        </ul>
      </div>
    ),
  },
];

const FrequentlyAskedQuestionsHealthCareFaq = [
  {
    id: 1,
    title: 'What are the key benefits of using custom software solutions in healthcare?',
    content: (
      <div className="faq-content">
        <span>Custom software solutions in the healthcare sector offer numerous benefits, including:</span>
        <ul>
          <li>Enhanced patient care through tailored solutions that meet specific clinical needs.</li>
          <li>Improved operational efficiency by automating administrative tasks and streamlining
            workflows.</li>
          <li>Better data management and interoperability between different healthcare systems.</li>
          <li>Increased accuracy and reduction in errors through customized interfaces and
            functionalities.</li>
          <li>Scalability to grow and adapt to the healthcare organization's changing needs.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What is the typical timeline for developing and deploying a custom healthcare software solution?',
    content: (
      <div className="faq-content hire-developer-faq">
        <span>The timeline for developing and deploying a custom healthcare software solution typically
          ranges from 6 to 18 months. This duration can vary based on the project's complexity, specific
          requirements, regulatory compliance needs, and the level of integration with existing systems.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What technologies and programming languages are commonly used by custom healthcare software development companies?',
    content: (
      <div className="faq-content">
        <span>Standard technologies and programming languages used in healthcare software development
          include:</span>
        <ul>
          <li><b>Programming languages:</b> Java, Python, C#, JavaScript, Ruby, and Swift.</li>
          <li><b>Frameworks:</b> .NET, Django, Angular, React, and Spring.</li>
          <li><b>Databases:</b>  MySQL, PostgreSQL, MongoDB, and Oracle.</li>
          <li><b>Technologies:</b> HL7, FHIR, blockchain, cloud computing, and machine learning.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How much does it cost to develop medical software?',
    content: (
      <div className="faq-content">
        <span>The cost of developing medical software varies widely based on the project's complexity,
          features, and scope. The average cost can range from $50,000 to over $500,000. Factors
          influencing the cost include development time, required technology stack, regulatory
          compliance, and integration with other systems.</span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What specific solutions does your company offer for healthcare software development?',
    content: (
      <div className="faq-content">
        <span>Qbatch offers a range of healthcare software development solutions, including:</span>
        <ul>
          <li>Electronic Health Records (EHR) and Electronic Medical Records (EMR) systems.</li>
          <li>Telemedicine and telehealth platforms.</li>
          <li>Patient portals and mobile health applications.</li>
          <li>Medical billing and practice management software.</li>
          <li>Clinical decision support systems.</li>
          <li>Custom integrations and interoperability solutions.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: ' How does your company ensure HIPAA compliance and data security in healthcare software development?',
    content: (
      <div className="faq-content">
        <span>We ensure HIPAA compliance and data security by:</span>
        <ul>
          <li>Conducting regular security audits and risk assessments.</li>
          <li>Implementing robust encryption methods for data in transit and at rest.</li>
          <li>Enforcing strict access control and authentication protocols.</li>
          <li>Providing ongoing staff training on HIPAA regulations and data privacy.</li>
          <li>Utilizing secure cloud services that comply with healthcare industry standards.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Do you have experience with developing mobile healthcare software applications?',
    content: (
      <div className="faq-content">
        <span>Yes, we have extensive experience in developing mobile healthcare software applications. Our
          team has created various mobile solutions for patient engagement, remote monitoring,
          telehealth services, and health tracking, ensuring seamless integration with other healthcare
          systems and compliance with regulatory standards.</span>
      </div>
    ),
  },
  {
    id: 8,
    title: "What is your team's expertise in clinical software development and medical software projects?",
    content: (
      <div className="faq-content">
        <span>
          Our team comprises seasoned professionals with expertise in clinical software development,
          including:</span>
        <ul>
          <li>Experience in developing EHR/EMR systems and clinical decision support tools.</li>
          <li>Deep understanding of healthcare workflows and regulatory requirements.</li>
          <li>Skills in integrating with medical devices and external healthcare systems.</li>
          <li>Knowledge of healthcare standards such as HL7, FHIR, and DICOM.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Can you explain your approach to agile software development in the healthcare industry?',
    content: (
      <div className="faq-content">
        <span>
          Our agile software development approach in the healthcare industry involves:</span>
        <ul>
          <li>Collaborating closely with stakeholders to understand their needs and priorities.</li>
          <li>Breaking down the project into manageable sprints with clear deliverables.</li>
          <li>Continuously integrating feedback and making iterative improvements.</li>
          <li>Ensuring transparency and regular communication throughout the development
            process</li>
          <li>Adapting to changes quickly while maintaining a focus on regulatory compliance and
            quality.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Do you offer consultancy services for healthcare software design and development?',
    content: (
      <div className="faq-content">
        <span>
          Yes, we offer comprehensive consultancy services for healthcare software design and
          development. Our services include:</span>
        <ul>
          <li>Needs assessment and feasibility studies.</li>
          <li>Solution architecture and technology selection.</li>
          <li>Regulatory compliance consulting.</li>
          <li>Project management and quality assurance.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Are your healthcare software developers experienced in creating patient portals and medtech software?',
    content: (
      <div className="faq-content">
        <span>
          Yes, our healthcare software developers have significant experience creating patient portals and
          medtech software. We have developed secure, user-friendly patient portals that facilitate
          communication between patients and healthcare providers and innovative MedTech solutions
          that enhance clinical outcomes and operational efficiency.</span>
      </div>
    ),
  },
  {
    id: 12,
    title: 'What sets your company apart from other health IT providers in terms of expertise and quality of service?',
    content: (
      <div className="faq-content">
        <span>What sets Qbatch apart from other health IT providers includes:</span>
        <ul>
          <li>Deep domain expertise in healthcare and extensive experience in custom software
            development</li>
          <li>A commitment to delivering high-quality, compliant, and secure solutions.</li>
          <li>A client-centric approach focused on understanding and meeting the unique needs of
            each healthcare organization.</li>
          <li>A track record of successful projects and satisfied clients.</li>
          <li>Ongoing support and maintenance to ensure the long-term success of the solutions we
            provide</li>
        </ul>
      </div>
    ),
  },
];
const FrequentlyAskedQuestionsIndustryFaq = [
  {
    id: 1,
    title: 'What industries does Qbatch specialize in?',
    content: (
      <div className="faq-content">
        <span>We cater to a range of industries including EdTech, FinTech, PropTech, HealthTech, RetailTech, Real Estate, Logistics & Supply Chain, Travel & Hospitality, and Ecommerce.
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'How can Qbatch’s solutions benefit my industry?',
    content: (
      <div className="faq-content hire-developer-faq">
        <span>Our tailored digital solutions are designed to address specific industry challenges, improve operational efficiency, and create seamless user experiences, helping your business stay competitive and future-ready.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Does Qbatch provide end-to-end solutions?',
    content: (
      <div className="faq-content">
        <span>Yes, we offer comprehensive services from ideation and design to development and deployment, ensuring that your solution is scalable, secure, and aligned with your industry needs.</span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Can I see examples of Qbatch’s work in my industry?',
    content: (
      <div className="faq-content">
        <span>Absolutely! Check out our Case Studies to explore how we’ve delivered impactful solutions across various industries.</span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Do you support startups or only established businesses?',
    content: (
      <div className="faq-content">
        <span>We partner with businesses of all sizes, from startups to enterprises, tailoring our solutions to meet their unique goals and challenges.</span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'How do I get started with Qbatch?',
    content: (
      <div className="faq-content">
        <span>Click on <b><a href="/contact">Get Started Today</a></b> or contact us directly to discuss your industry-specific needs. Our team is ready to help turn your vision into reality.</span>
      </div>
    ),
  }
];
const RetailSoftwareDevelopmentFaq = [
  {
    id: 1,
    title: 'What custom software solutions do you offer for retail and consumer goods businesses?',
    content: (
      <div className="faq-content">
        <span>We offer a range of custom software solutions tailored to the needs of retail and
          consumer goods businesses, including point-of-sale systems, inventory management
          software, e-commerce platforms, customer relationship management (CRM) systems,
          and mobile applications.</span>
      </div>
    ),
  },
  {
    id: 2,
    title: ' How do your IT solutions cater to the specific needs of the retail industry?',
    content: (
      <div className="faq-content hire-developer-faq">
        <span>Our IT solutions are designed with a deep understanding of the unique challenges and
          requirements of the retail industry. We prioritize features such as real-time inventory
          tracking, seamless integration with existing systems, scalability to accommodate growth,
          and user-friendly interfaces for both staff and customers.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Can you describe your process for developing custom retail software?',
    content: (
      <div className="faq-content">
        <span>Our process typically involves initial consultation to understand the client's needs,
          followed by requirements gathering, design, development, testing, deployment, and
          ongoing support. We emphasize collaboration and feedback at every stage to ensure the
          final product meets expectations.</span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Do you provide software solutions for managing merchandising, inventory, and logistics?',
    content: (
      <div className="faq-content">
        <span>Yes, we offer comprehensive software solutions for managing merchandising, inventory,
          and logistics, including features for tracking stock levels, managing supplier
          relationships, optimizing order fulfillment processes, and analyzing sales data.</span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What types of retail mobile applications do you develop?',
    content: (
      <div className="faq-content">
        <span>We develop a variety of retail mobile applications, including e-commerce apps, loyalty
          program apps, in-store shopping assistants, mobile POS systems, and apps for managing
          inventory or sales on the go.</span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'How do your CRM solutions enhance customer relationship management for retail businesses?',
    content: (
      <div className="faq-content">
        <span>Our CRM solutions are designed to help retail businesses better understand and engage
          with their customers. This includes features for tracking customer interactions,
          segmenting customers based on behavior or demographics, personalizing marketing
          efforts, and fostering customer loyalty through rewards programs.</span>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Do you offer custom billing software for retail shops and boutiques?',
    content: (
      <div className="faq-content">
        <span>Yes, we offer custom billing software tailored to the specific needs of retail shops and
          boutiques. Our billing software typically includes features for processing transactions,
          generating invoices, managing discounts and promotions, and integrating with
          accounting systems.</span>
      </div>
    ),
  },
  {
    id: 8,
    title: "What technology platforms and methodologies do you specialize in for retail software development?",
    content: (
      <div className="faq-content">
        <span>
          We specialize in a variety of technology platforms and methodologies for retail software
          development, including cloud-based solutions, mobile development frameworks, e-
          commerce platforms, and agile development methodologies.</span>
      </div>
    ),
  },
  {
    id: 9,
    title: 'How do you ensure the quality and reliability of your retail software through testing?',
    content: (
      <div className="faq-content">
        <span>
          We employ rigorous testing procedures throughout the development lifecycle to ensure
          the quality and reliability of our retail software. This includes performance testing, unit
          testing, regression testing, integration testing,  and user acceptance testing.</span>
      </div>
    ),
  },
  {
    id: 10,
    title: 'What customizable IT services do you provide specifically tailored to the retail industry?',
    content: (
      <div className="faq-content">
        <span>
          In addition to custom software development, we provide a range of IT services tailored
          to the retail industry, including IT consulting, infrastructure management, data
          analytics, cybersecurity solutions, and cloud migration services.</span>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Can you discuss any successful projects or case studies in retail software development?',
    content: (
      <div className="faq-content">
        <span>
          We have successfully completed projects for retail clients ranging from small boutiques
          to large chains. These projects have included the development of custom e-commerce
          platforms, point-of-sale systems, inventory management software, and mobile
          applications.</span>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Do you offer ongoing support and maintenance services for retail software products?',
    content: (
      <div className="faq-content">
        <span>Yes, we offer ongoing support and maintenance services to ensure the continued
          reliability and performance of our retail software products. This includes bug fixes,
          software updates, technical support, and proactive monitoring to address any issues that
          may arise.</span>
      </div>
    ),
  },
];
const TravelSoftwareDevelopmentFaq = [
  {
    id: 1,
    title: 'How long does it take to create a travel mobile app?',
    content: (
      <div className="faq-content">
        <span>The time required to develop a travel mobile app depends on various factors such
          as features, complexity, design, and development approach. Typically, it can range
          from a few months to a year or more.</span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Why should I choose the Qbatch team for my travel app development project?',
    content: (
      <div className="faq-content hire-developer-faq">
        <span>Qbatch team offers expertise in travel app development, a proven track record of
          successful projects, dedication to client satisfaction, and a commitment to
          delivering high-quality solutions tailored to your needs.</span>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Can I hire software engineers from Qbatch to work on hourly or project-based tasks?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch offers flexible hiring models including hourly or project-based tasks to
          suit your requirements.</span>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Can you provide a timeline and estimated budget for developing our travel app based on our requirements?',
    content: (
      <div className="faq-content">
        <span>Yes, after understanding your project requirements, Qbatch can provide a detailed
          timeline and estimated budget for developing your travel app.</span>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What technologies and platforms do you use?',
    content: (
      <div className="faq-content">
        <span>Qbatch uses a range of technologies and platforms including but not limited to
          iOS, Android, React Native, Flutter for mobile development, and various backend
          technologies such as Node.js, Django, and Laravel.</span>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Do you oer customization options to tailor the travel app to our specific needs and branding requirements?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch oers customization options to tailor the travel app to your specic
          needs and branding requirements.</span>
      </div>
    ),
  },
  {
    id: 7,
    title: 'How do you ensure that the application will be user-friendly and intuitive for both travelers and administrators',
    content: (
      <div className="faq-content">
        <span>Qbatch follows user-centric design principles and conducts thorough usability
          testing to ensure that the application is user-friendly and intuitive for both
          travelers and administrators</span>
      </div>
    ),
  },
  {
    id: 8,
    title: "How do you handle integration with third-party services such as booking engines, payment gateways, and mapping APIs?",
    content: (
      <div className="faq-content">
        <span>
          Qbatch is experienced in integrating your app with various third-party services
          such as booking engines, payment gateways, and mapping APIs using
          industry-standard protocols and technologies.</span>
      </div>
    ),
  },
  {
    id: 9,
    title: 'What measures do you take to ensure data security and privacy for travelers using the app?',
    content: (
      <div className="faq-content">
        <span>
          Qbatch implements robust security measures such as data encryption, secure
          authentication, and compliance with data protection regulations to ensure data
          security and privacy for travelers using the app.</span>
      </div>
    ),
  },
  {
    id: 10,
    title: 'What is your approach to project management and communication throughout the development process?',
    content: (
      <div className="faq-content">
        <span>
          Qbatch follows agile project management methodologies and maintains
          transparent communication channels to keep clients informed about project
          progress and address any concerns promptly</span>
      </div>
    ),
  },
  {
    id: 11,
    title: 'What sets your company apart from competitors in terms of expertise, experience, and client satisfaction?',
    content: (
      <div className="faq-content">
        <span>
          Qbatch distinguishes itself through its deep expertise in travel app development,
          extensive experience delivering successful projects, and a strong focus on client
          satisfaction evidenced by positive testimonials and long-term partnerships..</span>
      </div>
    ),
  },
  {
    id: 12,
    title: 'Do you oer customization options for building custom flight booking apps or hotel booking apps?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch oers customization options for building custom ight booking apps,
          hotel booking apps, and other travel-related applications to meet your specic
          requirements.</span>
      </div>
    ),
  },
  {
    id: 13,
    title: 'What IT solutions do you provide specically tailored to the travel industry?',
    content: (
      <div className="faq-content">
        <span>Qbatch provides a range of IT solutions tailored to the travel industry including
          mobile apps, websites, booking systems, CRM software, and more.</span>
      </div>
    ),
  },
  {
    id: 14,
    title: 'Do you oer dedicated teams for travel app development projects?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch oers dedicated teams comprising experienced professionals for travel
          app development projects to ensure focused attention and timely delivery.</span>
      </div>
    ),
  },
  {
    id: 15,
    title: 'What is your approach to design and development for travel apps and websites?',
    content: (
      <div className="faq-content">
        <span>We go beyond the typical approach. Our industry-grade design puts travelers
          first, ensuring intuitive interfaces and a seamless journey. We combine industry
          best practices with cutting-edge technology to create travel apps and websites that
          are both engaging and functional</span>
      </div>
    ),
  },
  {
    id: 16,
    title: 'Do you provide travel portal software development services for businesses?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch provides travel portal software development services for businesses
          looking to create comprehensive online platforms for booking ights, hotels,
          tours, and more.</span>
      </div>
    ),
  },
  {
    id: 17,
    title: 'Do you oer CRM software tailored to the needs of the travel industry?',
    content: (
      <div className="faq-content">
        <span>Yes, Qbatch oers CRM software tailored to the specic needs of the travel
          industry, enabling businesses to manage customer relationships, bookings, and
          inquiries eectively</span>
      </div>
    ),
  },
  {
    id: 18,
    title: 'How do your software solutions address the specic challenges faced by travel agencies and tour operators',
    content: (
      <div className="faq-content">
        <span>Qbatch's software solutions are designed to address the specic challenges faced by
          travel agencies and tour operators by streamlining operations, enhancing
          customer experiences, and facilitating seamless booking and communication
          processes.</span>
      </div>
    ),
  },
];

const enterPrisFaq = [
  {
    id: 1,
    title: 'What are the key features to look for in an enterprise app development service?',
    content: (
      <div className="faq-content">
        <span>An enterprise app development service should offer these features:</span>
        <ul>
          <li>Fail-safe security measures</li>
          <li>User-centric interface design </li>
          <li>Smooth development and crash-proof code</li>
          <li>Real-time analytics capability</li>
          <li>Easy integration across other business intelligence platforms </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What platforms does your enterprise app development company support ',
    content: (
      <div className="faq-content">
        <span>Our enterprise app development company supports multiple platforms which includes:</span>
        <ul>
          <li>Android</li>
          <li>iOS</li>
          <li>Cross-platform </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: 'What steps do you follow in the app development lifecycle?	',
    content: (
      <div className="faq-content">
        <span>Following are the steps we follow in the enterprise app development lifecycle</span>
        <ul>
          <li>Ideation and planning</li>
          <li>Requirements gathering</li>
          <li>Wireframing and prototyping</li>
          <li>UI/UX design</li>
          <li>Development</li>
          <li>Software testing and QA</li>
          <li>Deployment</li>
          <li>Launch and Distribution</li>
          <li>Post launch support and maintenance</li>
          <li>Continuous improvement</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How do you ensure the security of enterprise apps and sensitive data?',
    content: (
      <div className="faq-content">
        <span>Following are the ways how we ensure security of enterprise apps and sensitive data:</span>
        <ul>
          <li>Risk assessment and threat modeling</li>
          <li>Code reviews and audits</li>
          <li>Multi-Factor Authentication (MFA) and Role-Based Access Control (RBAC)</li>
          <li>Industry-level data encryption algorithms and protocols</li>
          <li>Robust APIs decurity approaches against unauthorized data access</li>
          <li>Regular security patches and updates</li>
          <li>Foolproof data storage </li>
          <li>User data security </li>
          <li>Strict access control policy </li>
          <li>HTTPS and SSL/TLS encryption for secure data communication </li>
          <li>Comprehensive attack response plan </li>
          <li>Compliance and regulations</li>
          <li>Third-party security </li>
          <li>Security audits and assessments </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'What sets your enterprise app development company apart from competitors?	',
    content: (
      <div className="faq-content">
        <span>Below are reasons that sets our enterprise app development company apart from competitors:</span>
        <ul>
          <li>Total Process Transparency </li>
          <span>
            We offer full and clear insight into how processes execute identifying loopholes, rework, and bottlenecks.
          </span>
          <li>Cross-Sector Expertise</li>
          <span>Soft-skill-based leadership qualities to build teams, solve problems, and achieve goals. </span>
          <li>100% Founder's Mentality</li>
          <span>Based on the insurgent mission, immersive vision, and obsession to stay on top.</span>
          <li>Pay-as-you-go Model</li>
          <span>Only pay for the services, resources, and time you take, nothing more, nothing less.</span>
          <li>Dependable Engineering Craftsmanship</li>
          <span>Building statement products with quality — no corners cut, each step perfected. </span>
          <li>No Biases, Only Neutral Feedback</li>
          <span>Objective and unbiased evaluation of your software without any interest or preconceived notions. </span>
          <li>Technology Leadership</li>
          <span>
            To oversee a team of technical experts ensuring seamless functioning of a tech-driven infrastructure.{' '}
          </span>
          <li>Highly Solution-Oriented Mindset</li>
          <span>We won’t relax until we find the answer to fix your business problem.</span>
          <li>Spectacular Price-Quality Ratio</li>
          <span>Get exceptional product quality and value at a very reasonable price. </span>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: 'What industries have you worked with in developing enterprise applications?	',
    content: (
      <div className="faq-content">
        <span>We have successfully worked in these industries in developing enterprise applications:</span>
        <ul>
          <li>E-commerce</li>
          <li>Logistics and Supply Chain</li>
          <li>FinTech</li>
          <li>Healthcare</li>
          <li>EdTech</li>
          <li>Retail and Consumer Goods</li>
          <li>Travel and Transportation</li>
        </ul>
      </div>
    ),
  },
]
const technicalGuidanceData = [
  {
    img: '/vertical-aligmnet.svg',
    title: 'Vision and Future Alignment',
    text: 'Build a roadmap that elevates your technical strategy, objectives, and operations to achieve a holistic dig/vertical-aligmnet.svgital footprint powering associated people, processes, and possibilities with our CTO consulting services. Let’s turn your vision into victory.'
  },
  {
    img: '/leading-and-scaling-teams.svg',
    title: 'Leading and Scaling Teams',
    text: 'Your development team decides and shapes the future of the entire business. Thus we keep the bar high when it comes to tech leadership and management. Enjoy proficient team management, process optimization, and daily reporting with our CTO services.'
  },
  {
    img: '/strategic-procurement-and-cost-optimization.svg',
    title: 'Strategic Procurement & Cost Optimization',
    text: 'Technology expenses can quickly escalate if the"build vs. buy" analysis goes wrong with suppliers and vendors. Our CTO advisory services develop a problem-solution fit by running iterations and finding critical areas that truly require investment.'
  },
  {
    img: '/technical-audits.svg',
    title: 'Technical Audits, Due Diligence, and Change Management',
    text: 'We dive deeper into the technical risks associated with your business processes and strategy, conduct audits, prepare you for due diligence, and prescribe rock-solid change management roadmaps toward total digital transformation and delivery across the company.'
  },
  {
    img: '/system-engineering-and-design.svg',
    title: 'System Engineering and Design',
    text: 'You cannot fully grasp the technical aspects of a software product if you lack technical depth and knowledge. Leverage our CTO expertise and insight to demonstrate, develop, and design low-risk and hi-tech enterprise system.'
  },
  {
    img: '/technical-audit.svg',
    title: 'Technology Integration and Analysis',
    text: 'Discover whether your business requires technical fixing or a total overhaul to assure zero downtime, accessibility, and enterprise-wide information exchanges. Eliminate software bloat and build technical resilience with our impeccable CaaS providers.'
  },
]

const developmentServicesData = [
  {
    image: '/custom-mobile-app.svg',
    title: 'Custom Mobile App Solutions',
    content:
      'Custom mobile app development services for fully automated and modern enterprise operations toward better business management, visibility, transparency, and accountability.',
  },
  {
    image: '/ux-ui-mobile-app.svg',
    title: 'UX/UI Mobile App Design',
    content: 'Hire our mobile app designers to achieve a personalized and engaging UX/UI mobile app outlook. It would help your business to deliver the best impressions on your prospects and engage them longer.',
  },
  {
    image: '/ai-app.svg',
    title: 'AI App Development',
    content: 'Innovate your mobile app, its processes, and services with our unconventional AI mobile app development services. Let’s explore futuristic algorithms and rebuild your enterprise today.',
  },
  {
    image: '/mobile-app-consulting.svg',
    title: 'Mobile App Consulting',
    content: 'Worried about executing your mobile app idea? We offer reliable mobile consulting services to help you shape and launch a powerful mobile application that expedites your business and meets your goals.',
  },
  {
    image: '/third-party-integration.svg',
    title: 'Third-party Integration Services',
    content: 'Extend the usability and multi-functionality of your mobile app for your enterprise members and users by integrating third-party integrations like maps, social platforms, payment extensions, etc.',
  },
  {
    image: '/mobile-testing.svg',
    title: 'Mobile Testing & QA',
    content: 'Minimize app uninstallation and boost your reputation by availing our mobile app testing services. We conduct grass-root level QA to identify potential bugs and assure sustainable performance.',
  },
]

const youCanTrustData = [
  {
    image: '/time-budget.svg',
    title: 'On-time and On-budget',
  },
  {
    image: '/strongly-agile.svg',
    title: 'Strongly Agile',
  },
  {
    image: '/stable-code.svg',
    title: '100% Stable Code',
  },
  {
    image: '/cash-free.svg',
    title: 'Crash-free Product',
  },
]
const multiPlatformData = [
  {
    icon: "/android-mobile-app.svg",
    title: "Android Mobile App Development",
    desc: "Building unique Android products that live up to user expectations amid choke-full competition is crucial. Qbatch’s custom Android app development services offer deep expertise in creating off-the-chart Android mobile, TV, tablet, and wearable software apps.",
  },
  {
    icon: "/ios-mobile-app.svg",
    title: "iOS Mobile App Development",
    desc: "With attention spans getting shorter, users want solutions at their fingertips with a simple swipe. Qbatch’s iOS mobile app developers for hire have delivered highly scalable and captivating iOS app solutions for iPhone, iPad, Apple Watch, and Apple TV to thousands of users.",
  },
  {
    icon: "/cross-platform-mobile-app.svg",
    title: "Cross-Platform Mobile App Development",
    desc: 'Decrease time to market and costs by building high-value and secure mobile experiences with Qbatch’s cross-platform app development services. We use trusted cross-platform development technology i.e., React Native and Flutter to assure smooth and sustainable human interactions.',
  },
];
const technologythrivesData = [
  {
    icon: "/expertise-key.svg",
    title: "Expertise is key.",
    desc: "Our team of business analysts, project managers, UX/UI designers, and software architects research and scope your project meticulously. This phase typically takes four to six weeks, depending on complexity.",
  },
  {
    icon: "/discovery-web.svg",
    title: "The discovery phase is crucial to our process.",
    desc: "We gather and analyze data about your project, market, and audience. This deep understanding helps us identify the best solutions from both business and technical perspectives.",
  },
];
const ctoList = [
  {
    img: '/hire-a-cto_powerful-idea.svg',
    description: 'Got a powerful idea but cannot cope with a tech part?',
  },
  {
    img: '/hire-a-cto_selected-tech-stack.svg',
    description: 'Hesitant about whether the selected tech stack is right?',
  },
  {
    img: '/hire-a-cto_gain-the-trust.svg',
    description: 'Got an MVP but not sure how to gain the trust of investors?',
  },
  {
    img: '/hire-a-cto_mature-startup.svg',
    description: 'Are you a mature startup but cannot outperform its competitors?',
  },
  {
    img: '/hire-a-cto_interenal-infrastructure-issues.svg',
    description: 'Is your business already big enough, but got some internal infrastructure issues?',
  },
  {
    img: '/hire-a-cto_cant-afford-cto.svg',
    description: 'Can’t afford a full-time CTO and need a temporary CTO?',
  },
];
const productDesignlist = [
  {
    img: '/software-product.svg',
    description: 'Why do you need software product design and development services?',
  },
  {
    img: '/dedicated-team.svg',
    description: 'I’m looking to partner with a dedicated team of product developers to grow my startup',
  },
  {
    img: '/steller-mvp.svg',
    description: 'I’m looking to launch a stellar MVP and reach out to investors for their trust and investment.',
  },
  {
    img: '/product-market.svg',
    description: 'I’m planning to launch my product in the market but prefer a technical audit beforehand.',
  },
  {
    img: '/digital-product.svg',
    description: 'I’m seeking to build a digital product from scratch in collaboration with industry professionals.',
  },
  {
    img: '/business-expectations.svg',
    description: 'I already have a product that doesn’t respond to user needs and fails to meet business expectations.',
  },
]
const technologicalCapacityData = [
  {
    icon: "/ai-ml.svg",
    title: "AI & ML",
    desc: "Garner greater operational intelligence, reduced costs, and top-grade automation to ensure that much-anticipated transition."
  },
  {
    icon: "/iot-icon.svg",
    title: "IoT",
    desc: "Integrate your smart sensors and devices and monitor through a central console and capture insightful data for improved enterprise-level connectivity."
  },
  {
    icon: "/blockchain.svg",
    title: "Blockchain",
    desc: "Be in the vanguard of your enterprise and its processes with higher-level data control and automation beyond third-party interference."
  },
  {
    icon: "/data-science.svg",
    title: "Data Science",
    desc: "Dealing with tons of data? No worries, our expertise in Big Data can help you streamline your data streams for smarter and market-relevant decision-making."
  },
  {
    icon: "/cloud-computing.svg",
    title: "Cloud Computing",
    desc: "A flexible and interconnected business requires robust cloud computing services for flawless execution of the latest technologies like AWS, Azure, and Google Cloud."
  },
  {
    icon: "/no-code.svg",
    title: "Low-Code/No-Code",
    desc: "Build your enterprise software using no-code/ low-code platforms for managing visual elements like drag-and-drop and pull-down menu interfaces."
  },
]
const whyDevOpsData = [
  {
    icon: "/lead-the-market.svg",
    title: "Lead the market",
    desc: "Quickly adapt to market demands, and build lasting user experiences. "
  },
  {
    icon: "/scale-easily.svg",
    title: "Scale easily",
    desc: "Leverage DevOps automation services without risking your enterprise operations."
  },
  {
    icon: "/reduce-expenditure.svg",
    title: "Reduce expenditure",
    desc: "Automated testing and bug tracking eliminate possible technical debts thus adding value for money."
  },
  {
    icon: "/build-a-close-knit-team.svg",
    title: "Build a close-knit team",
    desc: "Create an agile and connected culture bringing development, and operation guys together."
  },
  {
    icon: "/deploy-continuously.svg",
    title: "Deploy continuously",
    desc: "Streamline the delivery pipeline by continuously deploying into multiple SDLC environments."
  },
  {
    icon: "/iterate-frequently.svg",
    title: "Iterate and release frequently",
    desc: "Deliver helpful features through frequent automation and optimization."
  },
  {
    icon: "/increase-consistency.svg",
    title: "Increase consistency",
    desc: "Foster consistency across development, testing, production environments, and hybrid cloud."
  },
]
const OurSaasData = [
  {
    icon: "/b2b-saas-application-development.svg",
    title: "B2B SaaS Application Development",
    desc: "Build business-specific SaaS web, mobile, and desktop apps that maximize your ROI and effectively reach your end users."
  },
  {
    icon: "/mvp-saas-product-development.svg",
    title: "MVP SaaS Product Development",
    desc: "Design and build customer-driven MVP SaaS products to test the market ensuring bulk adoption and retention."
  },
  {
    icon: "/saas-cloud-development-and-migration.svg",
    title: "SaaS Cloud Development & Migration",
    desc: "Migrate your existing application to the cloud or move your SaaS solution to a different cloud provider for hi-tech performance and profitability."
  },
  {
    icon: "/verifying-and-prioritizing-ideas-1.svg",
    title: "SaaS DevOps & Testing",
    desc: "We adhere to strict security standards and employ a comprehensive testing strategy to ensure your SaaS application's quality, security, and reliability."
  },
  {
    icon: "/saas-support-and-maintenance.svg",
    title: "SaaS Support and Maintenance",
    desc: "We provide ongoing support and maintenance for your SaaS solution, which includes bug fixes, feature updates, and performance optimization."
  },
  {
    icon: "/saas-evolution-and-innovation.svg",
    title: "SaaS Evolution & Innovation",
    desc: "Our SaaS experts help your SaaS application evolve by introducing in-demand features like video streaming, chatbots, AI, and advanced analytics."
  },
  {
    icon: "/saas-application-consulting.svg",
    title: "SaaS Application Consulting",
    desc: "Our consultants provide technical and strategic guidance throughout the SaaS development lifecycle helping you achieve your business goals."
  },
]
const EdTechData = [
  {
    icon: "/traditional-vs-modern-education.svg",
    title: "Traditional vs. modern education",
    desc: "Traditional education methods neglect individual needs. Implementing personalized learning experiences based on interests and behavior can promote effective education."
  },
  {
    icon: "/ai-vs-ethical-ai.svg",
    title: "AI vs. ethical AI",
    desc: "AI in education raises privacy concerns, such as accessing and breaching sensitive data. Integrating risk management processes (ModelOps) ensures ethical and compliant AI."
  },
  {
    icon: "/inaccessibility-vs-flexible-learning.svg",
    title: "Inaccessibility vs. flexible learning",
    desc: "Limited offline access due to demographic barriers results in poor performance and upskilling. Try HyFlex environments for flexible in-person or remote learning."
  },
  {
    icon: "/poor-content-quality-vs-active-content-filtering.svg",
    title: "Poor content quality vs. active content filtering",
    desc: "Low-quality content on EdTech apps can hinder achievement and motivation. Develop content quality standards and implement active content filtering."
  },
  {
    icon: "/lack-of-engagement-vs-immersive-learning.svg",
    title: "Lack of engagement vs. immersive learning",
    desc: "Maintaining student engagement in a digital learning environment takes time and effort. Use AI/ VR, gamification, and cloud for interactive and efficient e-learning platforms."
  },
  {
    icon: "/technical-failures-vs-technical-competency.svg",
    title: "Technical failures vs. technical competency",
    desc: "Hardware and software malfunctions disrupt learning causing data loss. Develop robust backup and rapid recovery procedures to fail-proof your e-education system."
  },
]
const EduForAll = [
  {
    icon: "/verifying-and-prioritizing-ideas1.svg",
    title: "Educational Institutions",
    desc: "Streamline workflows, personalize learning, and enhance teaching with custom LMS, SIS, and interactive eLearning platforms."
  },
  {
    icon: "/fostering-ownership1.svg",
    title: "K-12 Schools",
    desc: "Foster a dynamic learning environment with engaging content aligned with curriculum standards."
  },
  {
    icon: "/product-thinking-dna1.svg",
    title: "EdTech Startups",
    desc: "We bring your innovative learning ideas to life and enhance talent through custom eLearning programs for onboarding and professional development."
  },
  {
    icon: "/human-centeric-product-design1.svg",
    title: "Non-Profits and Training Organizations",
    desc: "Reach a wider audience and amplify your impact with custom eLearning software for courses, authoring tools, and learning portals."
  },
]
const GridData = [
  {
    img: '/total-process-transparency1.svg',
    title: 'Total Process Transparency',
    description:
      'We offer full and clear insight into how processes execute identifying loopholes, rework, and bottlenecks.',
  },
  {
    img: '/cross-sector-expertise-1.svg',
    title: 'Cross-Sector Expertise',
    description: 'Soft-skill-based leadership qualities to build teams, solve problems, and achieve goals',
  },
  {
    img: '/founders-mentality1.svg',
    title: "100% Founder's Mentality",
    description: 'Based on the insurgent mission, immersive vision, and obsession to stay on top.',
  },
  {
    img: '/pay-as-you-go-model.svg',
    title: 'Pay-as-you-go Model',
    description: 'Only pay for the services, resources, and time you take, nothing more, nothing less.',
  },
  {
    img: '/dependable-engineering-craftsmanship.svg',
    title: 'Dependable Engineering Craftsmanship',
    description:
      'Building statement products with quality —  no corners cut, each step perfected.',
  },
  {
    img: '/no-biases-only-neutral-feedback.svg',
    title: 'No Biases, Only Neutral Feedback',
    description: 'Objective and unbiased evaluation of your software without any interest or preconceived notions.',
  },
  {
    img: '/technology-leadership.svg',
    title: 'Technology Leadership',
    description: 'Oversaw a team of technical experts to ensure the seamless functioning of a tech-driven infrastructure.',
  },
  {
    img: '/highly-solution-oriented-mindset.svg',
    title: 'Highly Solution-Oriented Mindset',
    description: 'We won’t relax until we find the answer to your business problem.',
  },
  {
    img: '/spectacular-price-quality-ratio.svg',
    title: 'Spectacular Price-Quality Ratio',
    description: 'Get exceptional product quality and value at a very reasonable price.',
  },
]
const AdvanceSaasData = [
  {
    title: "Mixed-Tenant and Multi-Tenant Architecture",
    desc: "Design and implement robust SaaS architectures to meet your security and compliance requirements."
  },
  {
    title: "SaaS Optimization Services",
    desc: "Re-engineer and optimize your existing SaaS product to improve usability, performance, and user adoption."
  },
  {
    title: "SaaS API Development",
    desc: "Our back-end SaaS solution developers build secure, scalable, and high-performing APIs that provide fast, secure data storage for your SaaS solution."
  },
  {
    title: "CI/CD Implementation",
    desc: "Streamline CI/CD development pipelines enabling frequent improvements, smooth testing, and deployment processes."
  },
  {
    title: "SaaS Build & Deployment Systems",
    desc: "Leverage Docker and Kubernetes to automate and accelerate your SaaS web and mobile app development, deployment, scaling, and management processes. "
  },
  {
    title: "SaaS Third-party Integrations",
    desc: "Connect your SaaS app with third-party solutions from external data sources to payment gateways. "
  },
]
const productDesignData = [
  {
    icon: '/verifying-and-prioritizing-ideas.svg',
    title: 'Verifying and Prioritizing Ideas',
    desc: 'Is your backlog full of great ideas but you cannot decide which idea should flow first? Our product developers help you articulate your ideas into utility-driven products to win bigger stakeholder buy-in. ',
  },
  {
    icon: '/fostering-ownership.svg',
    title: 'Fostering Ownership',
    desc: 'Suffering from unproductive debates, weak ideas, and repeated market challenges? We instill ownership by aligning your team’s vision and goals, so they only deliver results and not painful experiences.',
  },
  {
    icon: '/product-thinking-dna.svg',
    title: 'Product Thinking DNA',
    desc: 'Our product designers live and breathe product thinking. We deeply empathize with the end user and respond to their expectations via flawless product functionality and performance.',
  },
  {
    icon: '/human-centeric-product-design.svg',
    title: 'Human-Centric Product Design',
    desc: 'Did you ever abandon or uninstall a mobile app due to poor design? Ever imagined the same for your product? Thus, we assure your product design is not just stunning. It is also easy to use۔',
  },
  {
    icon: '/product-market-fit.svg',
    title: 'Product Market-Fit',
    desc: 'We critically study and analyze market needs and build purpose-driven solutions as a response. As the market evolves, we quickly test, adapt, and make changes in the development phase.',
  },
  {
    icon: '/user-first-product-development.svg',
    title: 'User-First Product Development',
    desc: 'Our digital product development team builds event-driven and self-healing architectures that constantly support new feature requests and changes, aligning well with software delivery and business goals.',
  },
  {
    icon: '/optimized-response-and-conversion.svg',
    title: 'Optimized Response & Conversions',
    desc: 'Is your current product responding to your users’ needs? We perform in-depth architectural reviews and audits to improve conversions and returns of your product before testing new ideas.',
  },
  {
    icon: '/devops-mindset.svg',
    title: 'DevOps Mindset',
    desc: 'Our “Shift-left” approach and DevOps mindset motivate our product developers to follow the best coding practices – delivering quality-driven, secure, and adaptive software.',
  },
]
const choiceEnterpriseData = [
  {
    icon: "/business-needs.svg",
    title: "Business Needs",
    desc: "Does the current software or process understand your organization’s needs and provides intended solutions?"
  },
  {
    icon: "/user-expectations.svg",
    title: "User Expectations",
    desc: "Are your users/customers happy with the current software functionality, interface, and design? Does it offer easy-to-use features or are they just making the user journey difficult?"
  },
  {
    icon: "/operational-efficiency.svg",
    title: "Operational Efficiency",
    desc: "Do you plan to improve and automate organizational workflows with minimal occurrence of errors and reduced workloads assuring more productivity?"
  },
  {
    icon: "/budget-constraints.svg",
    title: "Budget Constraints",
    desc: "Does the expected ROI associated with the new software outweigh its costs? It is necessary to take expert advice from enterprise software consultants for realistic budgeting."
  },
  {
    icon: "/technology-selection.svg",
    title: "Technology Selection",
    desc: "Are you choosing the right technology for your organization and its members? Did you train them? Are you investing to maintain and support that technology?"
  },
  {
    icon: "/existing-systems.svg",
    title: "Existing Systems",
    desc: "Do you plan to integrate the new software with old systems and applications for better data communication?"
  },
  {
    icon: "/security-and-compliance.svg",
    title: "Security and Compliance",
    desc: "Does your custom enterprise software comply with security standards and practices to protect sensitive data?"
  },
  {
    icon: "/Enterprise-timeline.svg",
    title: "Timeline",
    desc: "Are you mindful of the elements that may impact business applications development timelines, such as resource availability and technical roadblocks?"
  },
]
const developmentExpertiseData = [
  {
    image: '/data-warehouse.svg',
    title: 'Data Warehousing',
    content: 'Offering end-to-end data warehousing services which include detailed consulting, mission-driven development, careful deployment, and long-term support.',
  },
  {
    image: '/crm-development.svg',
    title: 'CRM Development',
    content: 'Keep track of customer activities, trends, and behavior from a highly navigable dashboard. From custom CRM development cost analysis to roadmaps, we cover it all!',
  },
  {
    image: '/modernization-services.svg',
    title: 'IT Modernization Services',
    content: 'We as a custom enterprise software development company provide the most needed advice related to your IT modernization strategy, software re-engineering, and migration.',
  },
  {
    image: '/cms-development.svg',
    title: 'CMS Development',
    content: 'Create and manage your daily content generation and management chores with our enterprise-grade CMS development services.',
  },
  {
    image: '/scm-development.svg',
    title: 'SCM Development',
    content: 'Build durable supply chains that deliver unswerving business growth with our supply chain development including inventory management and risk management.',
  },
  {
    image: '/ehr-development.svg',
    title: 'EHR Development',
    content: 'Better manage your patients’ medical history, provide remote care, and automate other medical operations under budget with our custom healthcare software development services.',
  },
  {
    image: '/bi-service.svg',
    title: 'BI Services',
    content: 'Bring business intelligence to your everyday enterprise workflow processes and overall infrastructure with more automation and smart analytics.',
  },
  {
    image: '/hrm-development.svg',
    title: 'HRM Software Development',
    content: 'Hiring and retaining the best talent requires a highly-functional and modern HRM software solution as well as dealing with the daily needs of human resource departments.',
  },
]
const SaasProduct = [
  {
    image: '/multi-payment-system.svg',
    title: 'Multi-Payment System',
    content: 'Embed payments and financial services offer and accept multiple payment options hassle-free within your platform.',
  },
  {
    image: '/user-management.svg',
    title: 'User Management',
    content: 'Manage, identify, and authorize teams and individual profiles within your SaaS application with customized access based on subscriptions or needs.',
  },
  {
    image: '/interactive-dashboards.svg',
    title: 'Interactive Dashboards',
    content: 'Explore and analyze your data with interactive dashboards based on simple line charts or multicomponent visuals. ',
  },
  {
    image: '/rise-of-self-service.svg',
    title: 'Rise of Self-Service',
    content: 'Allow your users to independently complete tasks or access information without needing direct support empowering them to create controlled experiences and get things done efficiently.',
  },
  {
    image: '/role-based-access-control.svg',
    title: 'Role-Based Access Control',
    content: 'Give privileges and access to different user roles. Allow admins to regulate user permissions effectively.',
  },
  {
    image: '/reporting-and-analytics.svg',
    title: 'Reporting and Analytics',
    content: 'Track business performance defining key metrics and KPIs, and gain helpful insights with comprehensive reporting tools.',
  },
  {
    image: '/single-sign-on.svg',
    title: 'Single sign-on',
    content: 'Provide your users with a quick and secure login and access experience across multiple apps, services, or data with a suite of credentials.    ',
  },
  {
    image: '/on-demand.svg',
    title: 'On-demand ',
    content: 'Customize your product with on-demand features whether integration with third-party services, advanced data visualization tools, or AI-powered analytics. ',
  },
]
const customEnterpriseData = [
  {
    image: '/interprise-application.svg',
    title: 'Custom Enterprise Application Development',
    content:
      'Avoid spending on redundant and ready-made solutions, instead detect the comprised areas of your business with our trusted enterprise application development services. We help you create unique solutions that replace existing loopholes with high-performing functionality units.',
  },
  {
    image: '/enterprise-mobility-service.svg',
    title: 'Enterprise Mobility Services',
    content:
      'Become mobile-first and deliver an optimal experience to a large number of audiences who rely on the utilities your business offers. Qbatch’s turnkey enterprise mobility solutions enable organizations to enjoy suitable, accessible, and easy-to-adapt solutions.',
  },
  {
    image: '/digital-transformation-consulting.svg',
    title: 'Digital Transformation Consulting',
    content:
      'Close the gap between your current and desired success levels speedily by adopting and embracing futuristic technology without hampering your data. Let’s become technology adoption partners and reinvent your business together!',
  },
  {
    image: '/custom-enterprise-software-development-services.svg',
    title: 'Data Management and Business Intelligence (BI)',
    content:
      'Integrate powerful data management modules and AI-driven tools to break down complex data into predictive decisions. We as an enterprise software development services company use analytics and automation for easy and quick bulk data management and assessment fnctionality units.',
  },
  {
    image: '/custom-enterprise-software.svg',
    title: 'Software Integration Services',
    content:
      'Achieve business sustenance, data networking, and effortless collaboration by integrating your existing software with faster and more secure technology. Readily meet market and end-user demands and transform better with our top enterprise app developers.',
  },
  {
    image: '/legacy-application.svg',
    title: 'Legacy Application Modernization',
    content:
      'You are at great financial and reputation risk if your business depends on outdated software.  Our legacy application modernization services will help you figure out why your existing system no longer brings results and build a modern solution that lasts and gets real results.',
  },
]
const cycleProductData = [
  {
    img: "/enterprise-application.svg",
    title: "Discovery Workshops",
    description: "Converting your idea into a utility requires a deliberate understanding of your end users' needs and real-world problems. Our enterprise software product development as a service includes understanding the changing user demands and helping you build and launch dynamic, feature-packed digital products."
  },
  {
    img: "/enterprise-mobility-service.svg",
    title: "Wireframing",
    description: "Converting your idea into a utility requires a deliberate understanding of your end users' needs and real-world problems. Our enterprise software product development as a service includes understanding the changing user demands and helping you build and launch dynamic, feature-packed digital products."
  },
  {
    img: "/digital-transformation-consulting.svg",
    title: "UX/UI Design",
    description: "You’re providing all the great features, but your users still won’t respond? Our product designers rely on a user-first mindset that helps them improve the value of your app features and functionalities assuring navigable experiences and fail-safe performance under any user load. "
  },
  {
    img: "/custom-enterprise-software-development-services.svg",
    title: "Prototyping",
    description: "Don’t risk spending on unproven ideas. We help you test your idea in the ever-evolving market situations at a low cost before launching its complete version. Our digital product developers practice the MVP approach and depend on the experiences of early adopters to create fully functional prototypes."
  },
  {
    img: "/custom-enterprise-software.svg",
    title: "Product Development & Management Consulting",
    description: "Slow development processes, improper security management, wrong selection of technology, or lack of motivation are some of the few situations our product experts help by offering cloud-native microservices and technical advice to ensure crash-proof and sustainable product launches."
  },
  {
    img: "/legacy-application.svg",
    title: "MVP Development",
    description: "Test unproven ideas and turn them into a minimal product that ensures maximum concept validation among early adopters with our minimum viable product development services. 150+ startups, scale-ups, and enterprises have leveraged our services for an effortless product development journey."
  },
  {
    img: "/legacy-application.svg",
    title: "Code Refactoring",
    description: "Transform your product by refactoring the old code and making feature additions to achieve the desired product-market fit. Our custom product development services have built and revamped 150+ products that are constantly thriving under the forever-changing market activity."
  },
  {
    img: "/legacy-application.svg",
    title: "Software QA and Testing",
    description: "We perform strict quality checks on your products performing both automated and manual testing to reduce regression risks and extensive code churn removing any backdoors to cyberattacks and poor user experience."
  },
  {
    img: "/legacy-application.svg",
    title: "Launch & Maintenance",
    description: "After a rigorous series of QA audits, automated tests, TTD, and code reviews, we bring your product to fruition with continued support featuring continuous integration and delivery and needed improvements to keep your product relevant in the raging technology marathon."
  },
]
const AffordableHiringData = [
  {
    heading: "Full-time Developer",
    hours: "160 Hours/ Month",
    dayHours: "8 hrs/ day - 5 days/ week",
    billing: "Monthly billing or as needed",
    hiringPeried: "Hiring Period: 2-3 days",
    demand: "Availability: Dedicated, On-demand",
  },
  {
    heading: "Part-time Developer",
    hours: "80 Hours/Month",
    dayHours: "4 hours/ day, 5 days/ week",
    billing: "Monthly billing or as needed",
    hiringPeried: "Hiring period: 1-2 days",
    demand: "Availability: As required",
  },
  {
    heading: "Hourly Developer",
    hours: "On-Demand",
    billing: "Monthly billing or as needed",
    hiringPeried: "Hiring period: 40-48 hrs",
    demand: "Availability: Retainer-based support and availability",
  },
]
const FourStepsProcessData = [
  {
    img: '/arrow-line.svg',
    number: 1,
    heading: "Tell us your requirements",
    text: "We carefully understand your needs, goals, and dynamics.",
  },
  {
    img: '/arrow-line.svg',
    number: 2,
    heading: "Meet A-grade developers",
    text: "We screen the most suitable developer profiles & present them to you within 24 hours.",
  },
  {
    img: '/arrow-line.svg',
    number: 3,
    heading: "Find the right fit",
    text: "Meet the devs and find your best match. We take care of the rest!",
  },
  {
    number: 4,
    heading: "Begin your trial",
    text: "Start building with a no-risk 1-week trial period.",
  },
]
const StartYourHealthTechData = [
  {
    img: '/arrow-line.svg',
    number: 1,
    heading: "Consultation",
    text: "Schedule a free call with our experts to discuss your logistics software needs.",
  },
  {
    img: '/arrow-line.svg',
    number: 2,
    heading: "Custom Quote",
    text: "Our team will analyze your project and provide a tailored quote.",
  },
  {
    img: '/arrow-line.svg',
    number: 3,
    heading: "Confidentiality Guaranteed",
    text: "Sign an NDA for complete peace of mind.",
  },
  {
    number: 4,
    heading: "Project Launch",
    text: "Once approved, we assemble your dedicated development team and kick off the project.",
  },
]
const SimplifyYourRetailData = [
  {
    img: '/arrow-line.svg',
    number: 1,
    heading: "Discuss Your Needs",
    text: "We'll discuss your business goals, budget, and timeline to find the perfect engagement model for your needs.",
  },
  {
    img: '/arrow-line.svg',
    number: 2,
    heading: "Plan & Team Up",
    text: "Based on your requirements and chosen engagement model, we'll craft a clear plan and assemble a dedicated team.",
  },
  {
    img: '',
    number: 3,
    heading: "Get Going!",
    text: "Our software engineers will start development. We'll track your progress and keep you informed throughout the process.",
  },
]
const SimplifyYourRetaiFintechAppDevelopmentProcessData = [
  {
    img: '/arrow-line.svg',
    number: 1,
    heading: "Share your vision",
    text: "Tell us about your fintech product idea and its goals.",
  },
  {
    img: '/arrow-line.svg',
    number: 2,
    heading: "Collaborative planning",
    text: "Define requirements and identify any gaps needing custom development. ",
  },
  {
    img: '/arrow-line.svg',
    number: 3,
    heading: "Choose your platform",
    text: "Select between a hybrid cloud or on-premise version catering to your specific needs.",
  },
  {
    img: '',
    number: 4,
    heading: "Launch ready development",
    text: "Our team builds your fintech product, keeping you updated throughout the process.",
  },
]
const SimplifyYourTravelData = [
  {
    img: '/arrow-line.svg',
    number: 1,
    heading: "Simply share your project idea with us.",
    text: "",
  },
  {
    img: '/arrow-line.svg',
    number: 2,
    heading: "We'll meticulously analyze the details.",
    text: "",
  },
  {
    img: '/arrow-line.svg',
    number: 3,
    heading: "Outline the primary workflows and essential features",
    text: "",
  },
  {
    img: '',
    number: 4,
    heading: "Provide you with a comprehensive project estimate.",
    text: "",
  },
]

const StartYourLogisticsData = [
  {
    img: '/arrow-line.svg',
    number: 1,
    heading: "Consultation",
    text: "Schedule a free call with our experts to discuss your logistics software needs.",
  },
  {
    img: '/arrow-line.svg',
    number: 2,
    heading: "Custom Quote",
    text: "Our team will analyze your project and provide a tailored quote.",
  },
  {
    img: '/arrow-line.svg',
    number: 3,
    heading: "Confidentiality Guaranteed",
    text: "Sign an NDA for complete peace of mind.",
  },
  {
    img: '',
    number: 4,
    heading: "Project Launch",
    text: "Once approved, we assemble your dedicated development team and kick off the project.",
  },
]
const dataTravelApplications = [
  {
    img: '/Secure-Payment-Gateways.svg',
    heading: 'Secure Payment Gateways',
    text: 'Enable secure online payments for travelers'
  },
  {
    img: '/Social-Media-Integration.svg',
    heading: 'Social Media Integration',
    text: 'Allow users to share their experiences on social media platforms.'
  },
  {
    img: '/Map-and-Navigations.svg',
    heading: 'Map and Navigations',
    text: 'Provide efficient navigation and directions for travelers.'
  },
  {
    img: '/Flight-Tracking.svg',
    heading: 'Flight Tracking',
    text: 'Keep users informed about their flight status and potential delays.'
  },
  {
    img: '/Itinerary-Planner.svg',
    heading: 'Itinerary Planner',
    text: 'Enable users to plan and manage their travel itineraries efficiently.'
  },
  {
    img: '/World-Clock.svg',
    heading: 'World Clock',
    text: 'Provide a world clock feature for easy time conversion.'
  },
  {
    img: '/Currency-Conversion.svg',
    heading: 'Currency Conversion',
    text: 'Offer currency conversion functionality for accurate financial planning.'
  },
  {
    img: '/Review-and-Ratings.svg',
    heading: 'Review and Ratings',
    text: 'Allow users to leave reviews and ratings to help others make informed decisions.'
  },
  {
    img: '/Map-Based-Sightseeing.svg',
    heading: 'Map-Based Sightseeing',
    text: 'Explore interesting places and sightseeing spots on a map.'
  },
  {
    img: '/FAQ-and-Support.svg',
    heading: 'FAQ and Support',
    text: 'Provide helpful information and assistance to your users.'
  },
  {
    img: '/Route-Planning-and-Sharing.svg',
    heading: 'Route Planning and Sharing',
    text: 'Plan routes and share them with fellow travelers.'
  },
  {
    img: '/Smart-Search.svg',
    heading: 'Smart Search',
    text: 'Find tickets, excursions, and hotels with ease.'
  },
]

const hassleData = [
  {
    img: '/stopwatch.svg',
    number: 10,
    sign: "x",
    heading: "Faster Onboarding",
  },
  {
    img: '/fast-time.svg',
    number: 60,
    sign: "%",
    heading: "Less Time Hiring",
  },
  {
    img: '/cost-01.svg',
    number: 50,
    sign: "%",
    heading: "Cost Optimization",
  },
  {
    img: '/retention-01.svg',
    number: 98,
    sign: "%",
    heading: "Retention Rate",
  },
  {
    img: '/dev-match-time-1.svg',
    number: 48,
    sign: "hr",
    heading: "Dev Match Time",
  },
]
const DevData = [
  {
    img: <img className="image-wrapper" src='/left-arrow.svg' loading="lazy" alt="left-arrow" />,
    heading: 'Dev replacement guarantee',
    text: ' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
  },
  {
    img: <img className="image-wrapper" src="/right-arrow.svg" loading="lazy" alt="right-arrow" />,
    heading: 'Comprehensive weekly reports',
    text: ' You’ll receive a detailed list of all the tasks your dedicated development team or developer has completed including the total time ensuring transparency and individual-level performance.'
  },
  {
    img: <img className="image-wrapper" src='/left-arrow.svg' loading="lazy" alt="left-arrow" />,
    heading: 'On-the-go support',
    text: ' Our miraculous developers carefully cater to your feedback and change requests on your preferred channels of communication. Because the greatness must not halt!'
  },
  {
    heading: 'Total product mindset',
    text: 'Our software developers for hire own your product and take care of your trust. The founder’s mentality helps them deliver practical and sustainable results.'
  },
]
const cardsData = [
  {
    img: '/checked-mark.svg',
    text: 'Proven Coding Practices',
    className: 'text-wrapper'
  },
  {
    img: '/checked-mark.svg',
    text: 'No Hidden Costs',
  },
  {
    img: '/checked-mark.svg',
    text: 'No Sudden Replacements'
  },
  {
    img: '/checked-mark.svg',
    text: 'Best Quality-Price Ratio'
  },
  {
    img: '/checked-mark.svg',
    text: 'Leaders’ Mentality'
  },
  {
    img: '/checked-mark.svg',
    text: 'Trustworthy & Transparent'
  },
]
const RemoteDeveloperData = [
  {
    img: <img src='/ruining-product-health.svg' width={100} height={100} loading="lazy" alt="Product" />,
    text: <h3>Talent shortage is ruining your product's health.</h3>,
  },
  {
    img: <img src='/scaling-team-inescapable-hassle.svg' width={100} height={100} loading="lazy" alt="ScaleImage" />,
    text: <h3>Managing and scaling your team is an inescapable hassle.</h3>,
  },
  {
    img: <img src='/hiring-senior-devs-qa-engineers.svg' width={100} height={100} loading="lazy" alt="Developer" />,
    text: <h3>Hiring senior devs and QA engineers takes forever.</h3>,
  },
  {
    img: <img src='/different-timezone-hindering-growth.svg' width={100} height={100} loading="lazy" alt="GrouthImage" />,
    text: (
      <h3>
        Clash of cultures, poor communication, and different timezones are
        hindering your growth.
      </h3>
    ),
  },
]
const tileData = [
  [
    {
      text: "Full-time",
    },
    {
      text: "Part-time",
    },
    {
      text: "On Hourly Basis",
    },
    {
      text: "Not sure",
    },
  ],
  [
    {
      text: "Junior Developer",
    },
    {
      text: "Senior Developer",
    },
    {
      text: "Software Architect or Lead Developer",
    },
    {
      text: "CTO or VP of Engineering",
    },
  ],
  [
    {
      text: "Less than a week",
    },
    {
      text: "1-4 weeks",
    },
    {
      text: "4 weeks or longer",
    },
    {
      text: "Not sure",
    },
  ],
  [
    {
      text: "Within 48 hrs",
    },
    {
      text: "1-2 weeks",
    },
    {
      text: "1 month",
    },
    {
      text: "1 quarter",
    },
  ],
  [
    {
      text: "I have a rough idea of what I want to build.",
    },
    {
      text: "I have a clear idea of what I want, but I’ve not noted any specific requirements.",
    },
    {
      text: "I have clearly written requirements or wireframes.",
    },
  ],
  [
    {
      text: "1 dev",
    },
    {
      text: "Small dedicated team",
    },
    {
      text: "Large dedicated team",
    },
    {
      text: "Not sure",
    },
  ],
  [
    {
      text: "I don’t have any experience.",
    },
    {
      text: "I have limited experience.",
    },
    {
      text: "I have good experience in managing teams using Agile and other development methodologies.",
    },
    {
      text: "I’m a VP/ Executive Director/ CTO/ Product Manager. ",
    },
  ],
  [
    {
      text: "$50-100/ hour",
    },
    {
      text: "$100-500/ hours",
    },
    {
      text: "Greater than $500",
    },
    {
      text: "I don’t intend to share.",
    },
  ],
  [
    {
      text: "YES, get me my devs!",
    },
    {
      text: "Nope",
    },
    {
      text: "Not sure. ",
    },
  ],
]
const titleData = [
  {
    text: "Let’s begin the survey ",
  },
  {
    text: "What type of hire are you looking for?",
  },
  {
    text: "What level of expertise do you require?",
  },
  {
    text: "For how long do you require the resource?",
  },
  {
    text: "How urgent do you need to hire the developer?",
  },
  {
    text: "Do you know your product/ project requirements?",
  },
  {
    text: "How many developers do you want to hire?",
  },
  {
    text: "Do you have any experience managing developers?",
  },
  {
    text: "What’s your budget?",
  },
  {
    text: "Are you open to hiring dedicated software developers?",
  },
]

const trackerLabelData = [
  {
    text: "Let’s begin the survey ",
    label: "",
  },
  {
    text: "What type of hire are you looking for?",
    label: "",
  },
  {
    text: "What level of expertise do you require?",
    label: "",
  },
  {
    text: "For how long do you require the resource?",
    label: "",
  },
  {
    text: "How urgent do you need to hire the developer?",
    label: "",
  },
  {
    text: "Do you know your product/ project requirements?",
    label: "",
  },
  {
    text: "How many developers do you want to hire?",
    label: "",
  },
  {
    text: "Do you have any experience managing developers?",
    label: "",
  },
  {
    text: "What’s your budget?",
    label: "",
  },
  {
    text: "Are you open to hiring dedicated software developers?",
    label: "",
  },
];
const dataColumn1 = [
  {
    text: "Factors",
  },
  {
    text: "Dedicated Resources",
  },
  {
    text: "Hiring Time",
  },
  {
    text: "Resource Replacement Cost",
  },
  {
    text: "Talent Pool",
  },
  {
    text: "Start Your Project",
  },
  {
    text: "Recurring Training      ",
  },
  {
    text: "Cost of Training and Benefits",
  },
  {
    text: "Working Hours",
  },
  {
    text: "Agile Development ",
  },
  {
    text: "Quality Guarantee",
  },
  {
    text: "Communication",
  },
  {
    text: "Communication Channels",
  },
  {
    text: "Project Management ",
  },
  {
    text: "Delivery Speed",
  },
  {
    text: "Time Zone Availability",
  },
];
const dataColumn2 = [
  {
    text: "Readily available",
  },
  {
    text: "Within 48 hours",
  },
  {
    text: "No Cost",
  },
  {
    text: "Full Access",
  },
  {
    text: "Within 24 hours",
  },
  {
    text: "Yes",
  },
  {
    text: "Free",
  },
  {
    text: "Full time ",
  },
  {
    text: "Always",
  },
  {
    text: "Yes",
  },
  {
    text: "Easy",
  },
  {
    text: "Your Choice",
  },
  {
    text: "On-demand",
  },
  {
    text: "Fast Track",
  },
  {
    text: "Yes",
  },
];
const dataColumn3 = [
  {
    text: "In-house",
  },
  {
    text: "Yes",
  },
  {
    text: "5 - 8 weeks",
  },
  {
    text: "High Costs",
  },
  {
    text: "Limited Access",
  },
  {
    text: "2 - 3 weeks",
  },
  {
    text: "Sometimes",
  },
  {
    text: "$12k - $25k",
  },
  {
    text: "Full time",
  },
  {
    text: "Sometimes",
  },
  {
    text: "Yes",
  },
  {
    text: "Moderate",
  },
  {
    text: "Depends",
  },
  {
    text: "Paid",
  },
  {
    text: "Expected delays ",
  },
  {
    text: "Yes",
  },
];
const dataColumn4 = [
  {
    text: "Freelance",
  },
  {
    text: "N/A",
  },
  {
    text: "1 -2  weeks ",
  },
  {
    text: "No Cost",
  },
  {
    text: "Limited Access",
  },
  {
    text: "2 - 3 weeks",
  },
  {
    text: "No",
  },
  {
    text: "Free",
  },
  {
    text: "Depends",
  },
  {
    text: "Sometimes",
  },
  {
    text: "Sometimes",
  },
  {
    text: "Medium",
  },
  {
    text: "Depends",
  },
  {
    text: "Paid",
  },
  {
    text: "Time-consuming ",
  },
  {
    text: "Depends",
  },
];

const mvpBoxes1 = [
  {
    title: 'Ambitious, Small-scale Startups',
    description: 'Releasing a high-potential product to the market but need to test it first?'
  },
  {
    title: 'Serial\nEntrepreneurs',
    description: 'Got a side project idea to test with limited time and investment?'
  },
  {
    title: 'Enterprise Side\nProject',
    description: 'Need to test an idea with real users before pushing to full-fledge development? '
  },
  {
    title: 'Non-tech\nFounders',
    description: "Require technical help for simpler development under limited resources?"
  },
];
const mvpBoxes2 = [
  {
    title: 'Core Team',
    description: 'We assemble a small, super team of Product owners and expert MVP developers to get you started.'
  },
  {
    title: 'Lean-er Startup',
    description: 'Like a Lean Startup, build, validate, measure, and improve toward calculated success.'
  },
  {
    title: 'Launch Early',
    description: 'Expect a robust & legendary Ford Model T — laying a foundation for scalable product development.'
  },
  {
    title: 'Weekly Reports',
    description: 'No secrets, you get every detail from progress to declines ensuring transparency & productivity. '
  },
  {
    title: 'Trustable Expertise',
    description: "We've nailed MVP launches before, and we're ready to do it again!"
  },
  {
    title: 'Fair Fee',
    description: 'We understand. The budget’s tight. That’s why the payment structure is predictable and pre-defined.'
  },
  {
    title: 'Close Collaboration',
    description: 'Control your MVP from the get-go, set deadlines, and tell us your goals. You command, we obey.'
  },
];
const mvpDevService = [
  {
    title: 'Idea Validation',
    image: '/idea-validation.svg',
    description: 'Our development process starts with concept validation, an exhaustive phase encompassing elements like customer feedback, surveys, and meticulous questioning that leave no stone unturned.',
  },
  {
    title: 'Clickable Prototype Development',
    image: '/clickable-prototype-development.svg',
    description: 'As an MVP development company, we create clickable prototypes for both web and mobile applications to help you easily understand UI functionality, providing a view of expected visual experiences.',
  },
  {
    title: 'Full-Fledged MVP Development',
    image: '/full-fledged-mvp-development.svg',
    description: 'We offer MVP development services to deliver a well-designed, fully functional, and feature-packed MVP to assess its effectiveness in solving problems of your target audience in a real environment.',
  },
  {
    title: 'Single Feature MVP',
    image: '/single-feature-mvp.svg',
    description: "A single-feature MVP serves as a testing ground for your main hypothesis. User feedback gathered from this iteration enables business-critical reforms in decisions toward your product's growth and scope.",
  },
  {
    title: 'Pilot MVP Development',
    image: '/pilot-mvp-development.svg',
    description: 'Make your MVP a pilot product to demonstrate usability, scalability, and market viability rather than a single feature product. Let’s launch a pilot MVP within 3 months under Qbatch’s expertise.',
  },
  {
    title: 'MVP Consulting',
    image: '/mvp-consulting.svg',
    description: 'Build your idea, define market-friendly features, and select the optimal tech stack for building a powerful MVP app. You can trust our MVP software consultants for honest business advice.',
  }
];
const discoverQbatchMenu = [
  {
    name: 'About Us',
    to: '/about/',
  },
  {
    name: 'Portfolio',
    to: '/portfolio/',
  },
  {
    name: 'Career',
    to: '/careers/',
  },
  {
    name: 'Blogs',
    to: '/blog',
  },
  {
    name: 'Contact Us',
    to: '/contact',
  },
];

const servicesItems = [
  {
    menu: 'Enterprise Software Development Solutions',
    to: '/services/enterprise-software-development/',
  },
  {
    menu: 'E-commerce Automation Services',
    to: '/services/e-commerce-automation/',
  },
  {
    menu: 'Web App Development',
    to: '/services/web-app-development/',
  },
  {
    menu: 'Mobile App Development',
    to: '/services/mobile-app-development/',
  },
  {
    menu: 'MVP Development',
    to: '/services/mvp-development/',
  },
  {
    menu: 'CTO as a Service',
    to: '/services/cto-as-a-service/',
  },
  {
    menu: 'Product Design & Development',
    to: '/services/product-design-development/',
  },
  {
    menu: 'Web & data Scraping Services',
    to: '/services/web-and-data-scraping/',
  },
  {
    menu: 'DevOps and Cloud Computing',
    to: '/services/devops/',
  },
  {
    menu: 'Browser Extension Development',
    to: '/services/browser-extension-development/',
  },
];

const footerServicesItems = [
  {
    menu: 'Enterprise App Development',
    to: '/services/enterprise-software-development/',
  },
  {
    menu: 'E-commerce Automation',
    to: '/services/e-commerce-automation/',
  },
  {
    menu: 'Web App Development',
    to: '/services/web-app-development/',
  },
  {
    menu: 'Mobile App Development',
    to: '/services/mobile-app-development/',
  },
  {
    menu: 'Low-code/ No-code Platform Development',
    to: '',
  },
  {
    menu: 'CTO as a Service',
    to: '/services/cto-as-a-service/',
  },
  {
    menu: 'Product Design & Development',
    to: '/services/product-design-development/',
  },
  {
    menu: 'DevOps and Cloud Computing',
    to: '/services/devops/',
  },
  {
    menu: 'UX/UI Design',
    to: '',
  },
];

const industrieshMenu = [
  {
    name: 'E-Commerce',
    to: '#',
  },
  {
    name: 'Logistics & Supply Chain',
    to: '/industries/logistics/',
  },
  {
    name: 'FinTech',
    to: '/industries/fin-tech-app-development/',
  },
  {
    name: 'Healthcare',
    to: '/industries/health-care/',
  },
  {
    name: 'EdTech',
    to: '/industries/education-software-development/',
  },
  {
    name: 'Retail and Consumer Goods',
    to: '/industries/retail-software-development/',
  },
  {
    name: 'Travel & Transportation',
    to: '/industries/travel-app-development/',
  },
];

const footerContactData = [
  {
    title: "+1 737-377-2428",
    icon: "/phone-icon.svg",
    link: "tel: +17373772428"
  },
  {
    title: "contact@qbatch.com",
    icon: "/mail-icon.svg",
    link: "mailto: 'contact@qbatch.com"
  },
  {
    title: "1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801, USA.",
    icon: "/address-icon.svg",
    flag: "/usa-flag-small.svg",
  },
  {
    title: "Qbatch, Asia Centre, 8 Main Boulevard Gulberg, Babar Block Garden Town, Lahore, Punjab",
    icon: "",
    flag: "/pakistan-flag-small.svg",
    link: "https://maps.app.goo.gl/15ZXkY5H28za3rtGA"
  },
];

const footerBottomMenu = [
  // {
  //   name: "Subscribe to our Newsletter",
  //   to: "/",
  // },
  {
    name: "Terms & Conditions",
    to: "/terms-and-conditions/",
  },
  {
    name: "Privacy Policy",
    to: "/privacy-policy/",
  },
];

const footerSocialLinks = [
  {
    img: '/fb-icon.svg',
    to: 'https://www.facebook.com/qbatch/',
  },
  {
    img: '/instagram-icon-2.svg',
    to: 'https://www.instagram.com/qbatch/',
  },
  {
    img: '/linkedin-icon-2.svg',
    to: 'https://www.linkedin.com/company/qbatch/',
  },
  {
    img: '/twitter-icon-2.svg',
    to: 'https://x.com/qbatchofficial',
  },
  {
    img: '/behance-icon-2.svg',
    to: 'https://www.behance.net/qbatch',
  },
  {
    img: '/youtube-icon-2.svg',
    to: 'https://www.youtube.com/@qbatch',
  },
]

const personal = [
  {
    title: "Digital Business Leader",
    list: [
      "For consumer-goods companies",
      "Pushes tech strategy and budgeting",
      "Leads innovation-driven investments",
      "Translates market needs into products",
      "Understands tech trends and execution",
      "Innovates enterprise architecture",
    ],
  },
  {
    title: "Business Enabler ",
    list: [
      "Prevents business unit obsoletion",
      "Facilitates responsive IT delivery",
      "Guides tech adoption decisions",
      "Collaborates with engineering teams",
      "Analyzes risks in new tech deployments",
    ],
  },
  {
    title: "Change Agent",
    list: [
      "Drives technology adoption and sustenance",
      "Guides IT leadership company-wide",
      "Leads IT teams in innovation",
      "Advocates for agile and DevOps",
      "Introduces business innovation sources",
    ],
  },
  {
    title: "IT Chief Operating Officer",
    list: [
      "For single or similar product companies",
      "Manages day-to-day IT services",
      "Handles IT purchasing and compliance",
      "Manages internal and external IT incidents",
      "Ensures system modernization",
    ],
  },
];
const extensionTypes = [
  {
    title: 'Password<br class="d-md-block d-none">Manager',
    description: 'Store encrypted passwords online and access them using a single master password across browsers.'
  },
  {
    title: 'To-Do<br class="d-md-block d-none">and Note',
    description: 'Get more done in less time with a to-do list and notes extension.'
  },
  {
    title: 'Amazon Seller<br class="d-md-block d-none">Management',
    description: 'Sell and distribute your products and request customer reviews as needed.'
  },
  {
    title: 'Screen Shots and Video<br class="d-md-block d-none">Extensions',
    description: 'Capture screenshots and record screencasts for easy uploading anywhere.'
  },
  {
    title: 'Instant Chat<br class="d-md-block d-none"> Extension',
    description: 'Turn visitors into buyers by integrating live meetings and email messages in a single live chat tool.'
  },
  {
    title: 'Content Manager/<br class="d-md-block d-none">Aggregator',
    description: 'Build powerful and structured content to enrich your store with custom fields.'
  },
  {
    title: 'Virtual Class<br class="d-md-block d-none">Manager',
    description: 'Manage learners’ performance, lesson plans, attendance, grade assessments, reports, and schedules.'
  },
  {
    title: 'eSignature<br class="d-md-block d-none"> Manager',
    description: 'Digitally sign your documents securely and get things done instantly.'
  }
];
const EduFeatures = [
  {
    title: 'Assessment Tools',
    description: 'Quiz and Test Builders Advanced Analytics and Reporting Proctoring Systems'
  },
  {
    title: 'Integration and Compatibility',
    description: 'Artificial Intelligence Integration Cross-Platform Compatibility Payment Gateway Integration'
  },
  {
    title: 'Engagement and Gamification',
    description: 'Gamification Elements Interactive Graphics Integrated Leaderboards'
  },
  {
    title: 'Content Creation and Management',
    description: 'Multimedia Content Creation Content Management & Filtering Options Multi-lingual Support'
  },
  {
    title: 'Communication and Collaboration',
    description: 'Conferencing Capabilities Live Communication Tools Chat Support Virtual Classrooms'
  },
  {
    title: 'Learning Features',
    description: 'Blended Learning Collaborative Learning Features Lecture Scheduling Voice Interface for Accessibility Online & Offline Modes'
  },
  {
    title: 'Security and Administration',
    description: 'Robust Data Security Admin Setup and Security Measures.'
  },
  {
    title: 'Tracking and Monitoring',
    description: 'Progress Tracking Dashboard Data Analytics Insights'
  }
];
const EduIntigrations = [
  {
    title: 'Corporate Systems',
    description: 'Integrate web analytics, social media, and communication platforms for a holistic learning experience.'
  },
  {
    title: 'CRM & Student Management',
    description: 'Manage leads, students, teachers, and communication effortlessly through CRM integration.'
  },
  {
    title: 'Monetization & Payments',
    description: 'Accept payments and easily monetize your courses using popular e-commerce plugins and payment gateways.'
  },
  {
    title: 'Salesforce Integration',
    description: 'Enhance your platform with integrations like Salesforce, a powerful all-in-one platform.'
  },
];
const EduCommitment = [
  {
    title: 'Universal Access',
    image: '/universal-access.svg',
    description: 'Our edtech solutions cater to learners of all abilities, adhering to global accessibility standards.',
  },
  {
    title: 'Engaging & Motivational',
    image: '/engaging-and-motivational.svg',
    description: 'Interactive features spark curiosity and minimize distractions, keeping students engaged.',
  },
  {
    title: 'Healthy Class Environment',
    image: '/healthy-class-environment.svg',
    description: 'Foster emotional well-being with one-on-one support options and responsive classroom management tools.',
  },
  {
    title: 'Improved Staff Management',
    image: '/improved-staff-management.svg',
    description: "Simplify onboarding and training processes for educators and staff to avoid chaos and mismanagement.",
  },
  {
    title: 'Simplified Workflows',
    image: '/simplified-workflow.svg',
    description: 'Seamless integration with existing tools facilitates effortless management and automates tasks.',
  },
  {
    title: 'Data-Driven Decisions',
    image: '/data-driven-decisions1.svg',
    description: 'Gain valuable insights through analytics to track progress, optimize programs, and make informed choices.',
  },
  {
    title: 'Security and Privacy',
    image: '/security-and-privacy.svg',
    description: 'Prioritize data protection with tried-and-true security measures (like blockchain) and transparent data practices.',
  },
  {
    title: 'Reliability & Usability',
    image: '/reliability-and-usability.svg',
    description: 'Rigorous testing ensures a smooth learning experience with user-friendly interfaces.',
  },
  {
    title: 'Continuous Improvement',
    image: '/continuous-improvement.svg',
    description: 'We prioritize ongoing updates, feature enhancements, and support to maximize the value of our solutions.',
  },
  {
    title: 'Compliance',
    image: '/compliance.svg',
    description: "We adhere to all relevant regulations for educational software, like FERPA.",
  },
  {
    title: 'Scalability',
    image: '/scalability.svg',
    description: 'Our solutions adapt to accommodate growth and evolving educational needs.',
  },
  {
    title: 'Ease of Use & Integration',
    image: '/ease-of-use-and-integration.svg',
    description: 'Intuitive interfaces and integrations help learners and educators to leverage the software effectively.',
  },
];
const EduTech = [
  {
    icon: "/ar-vr.svg",
    title: "AR/VR",
    desc: "Imagine exploring the human body in VR or dissecting a virtual frog in AR. These immersive experiences can greatly enhance learning.",
  },
  {
    icon: "/ai-ml1.svg",
    title: "AI/ML",
    desc: "Personalized learning paths, automated feedback, and intelligent tutoring systems can be powered by AI and Machine Learning.",
  },
  {
    icon: "/nlp.svg",
    title: "Natural Language Processing (NLP)",
    desc: 'NLP can enable voice-activated learning, chatbots for answering student queries, and sentiment analysis to gauge student understanding.',
  },
];

const cardData = [
  {
    alt: 'better-care',
    image: '/better-care.svg',
    disc: 'Data-driven decisions, better care'
  },
  {
    alt: 'un-matched',
    image: '/un-matched.svg',
    disc: 'Unmatched patient privacy and peace of mind'
  },
  {
    alt: 'engage',
    image: '/engage.svg',
    disc: 'Engage more patients and increase accessibility'
  },
  {
    alt: 'reduce',
    image: '/reduce.svg',
    disc: 'Reduce non-emergency clinic visits'
  },
  {
    alt: 'reduce-patient',
    image: '/reduce-patient.svg',
    disc: 'Reduce patient no-shows and cancellations.'
  },
  {
    alt: 'enhance',
    image: '/enhance.svg',
    disc: 'Enhance clinical workflows and streamline processes.'
  },
];

const EdTechPotentialData = [
  {
    image: '/no-access.svg',
    title: 'No access to care vs. telehealth care',
    disc: 'Geographic and economic barriers can limit access to healthcare. Thankfully, telehealth platforms bridge this gap by offering virtual consultations, remote monitoring, and follow-ups'
  },
  {
    image: '/physician.svg',
    title: 'Physician burnout vs. EHR systems',
    disc: 'Workloads and administrative burdens cause provider burnout. EHRs help manage patient data, medical history, and overall workflow efficiency, freeing up valuable time for patient care.'
  },
  {
    image: '/workforce-stress.svg',
    title: 'Workforce stress vs. workforce management systems (WMS)',
    disc: 'A hi-tech WMS can reduce team stress by streamlining scheduling, lowering costs, and allocating resources, allowing better work-life balance and improving patient outcomes.'
  },
  {
    image: '/security-threats.svg',
    title: 'Security threats vs. blockchain technology',
    disc: 'Medical data is a prime target for cybercriminals. Blockchain technology protects sensitive medical records, ensuring tamper-proof patient privacy and data integrity.'
  },
  {
    image: '/inadequate-supply.svg',
    title: 'Inadequate supply chain vs. Inventory data management',
    disc: 'Rising healthcare costs challenge both patients and providers. Powerful inventory management systems simplify processes, reduce waste, and improve stock allocation, helping to contain costs.'
  },
  {
    image: '/poor-diagnosis.svg',
    title: 'Poor diagnosis vs. AI for improved diagnosis and treatment',
    disc: 'AI impacts everything from drug discovery and diagnosis to capacity allocation in emergency rooms. AI chatbots reduce employee fatigue by managing appointments and patient details.'
  },
  {
    image: '/haphazard-emergency.svg',
    title: 'Haphazard emergency care vs. emergency response apps',
    disc: 'Miscommunication causes clinical errors in emergency care. Healthcare mobile apps reduce treatment time by sharing vital patient information with hospitals before arrival.'
  },
  {
    image: '/poor-medical.svg',
    title: 'Poor medical training vs. VR/ AR for training and rehabilitation',
    disc: 'These immersive technologies improve medical training, surgical planning, and patient rehabilitation through simulations and visualizations, leading to better patient care.'
  },
];

const ecommerceBusinessData = [
  {
    image: '/hyper-personalization.svg',
    title: 'Hyper-personalization against cutthroat competition',
    disc: 'Build features like product recommendations based on browsing history and loyalty programs with tiered rewards to keep customers engaged.'
  },
  {
    image: '/ai-powered.svg',
    title: 'AI-powered chatbots to offer 24/7 support',
    disc: 'Customers expect instant answers. Integrate AI chatbots to resolve issues and offer personalized suggestions, boosting overall conversions.'
  },
  {
    image: '/embrace-mobile-first.svg',
    title: 'Embracing the Mobile-first mindset',
    disc: 'Did you know? Mobile devices drive 64% more online conversions than desktop computers.  Let’s optimize mobile responsiveness for seamless shopping experiences.'
  },
  {
    image: '/voice-ecommerce.svg',
    title: 'Voice commerce is on the rise',
    disc: 'Around 40% of U.S. internet users use a voice assistant at least monthly. We can help you integrate voice search functionality and introduce modern voice-activated shopping to your customers.'
  },
  {
    image: '/progressive-apps.svg',
    title: 'Progressive Web Apps for app-like experiences',
    disc: 'Develop PWAs to offer a smooth experience on mobile devices without downloading apps, leading to increased customer engagement.'
  },
  {
    image: '/address-trust.svg',
    title: 'Address trust deficit in a data-driven world',
    disc: 'Focus on compliance with regulations like GDPR and CCPA, integrate multi-factor authentication for logins and transactions, and add layers of protection against fraud.'
  },
  {
    image: '/arvr.svg',
    title: 'Go immersive with AR/ VR',
    disc: 'Let your customers virtually try on products via product visualization, especially for clothing, furniture, or cosmetics, leading to higher conversion rates.'
  },
  {
    image: '/headless-commerce-icon.svg',
    title: 'Headless commerce for greater customization',
    disc: 'Integrate your e-commerce platform with various marketing and sales tools for a seamless customer journey.'
  },
  {
    image: '/ethical-ai.svg',
    title: 'Ethical AI as an enterprise differentiator',
    disc: 'Implement ethical AI to analyze user behavior and preferences, enabling tailored recommendations and personalized shopping experiences.'
  },
  {
    image: '/advanced-analytics.svg',
    title: 'Advanced analytics and reporting',
    disc: 'Implement robust analytics tools to accurately measure marketing ROI, track customer acquisition costs, and optimize advertising campaigns for maximum efficiency.'
  },
  {
    image: '/detailed-product-info.svg',
    title: 'Detailed product information',
    disc: 'Develop engaging product pages with comprehensive information, high-quality images, and user-generated content for informed buying decisions.'
  },
  {
    image: '/faster-load-time.svg',
    title: 'Ensure faster load times',
    disc: 'Outdated platforms lead to slower loading times, affecting SEO and conversions. We migrate you to modern platforms ensuring faster speed and optimal SEO performance. '
  },
]

const realEstateIndustryData = [
  {
    image: '/virtual-property.svg',
    title: 'Virtual property tours and inspections',
    disc: 'Planning to buy a property in a different province or state? Our VR proptech offers thorough property visits remotely, reducing the need for in-person interactions.'
  },
  {
    image: '/automate-paperwork.svg',
    title: 'Automate paperwork and business processes',
    disc: 'Free your agents to focus on what matters. Automate tedious tasks like paperwork and listings, boosting efficiency and reducing errors.  (61% of agencies already automate!)'
  },
  {
    image: '/easy-communication.svg',
    title: 'Easy communication between tenants and landlords',
    disc: 'Ensure clear tenant communication and timely responses to maintenance requests, and rent inquiries with our rental property management solutions.'
  },
  {
    image: '/cost-reduction.svg',
    title: 'Cost reduction on office maintenance',
    disc: 'Simplify tracking repairs, leases, and tenant information, streamlining contractor work orders, reducing high operational costs, and boosting profitability.'
  },
  {
    image: '/vacation-rental.svg',
    title: '24/7 remote control of property for vacation rentals',
    disc: 'Manage vacation rentals remotely anytime with our 24/7 property monitoring and control technology. Ensure security and guest convenience for peace of mind.'
  },
  {
    image: '/digital-contracting.svg',
    title: 'Digital contracting and secure payment transactions',
    disc: 'Streamline contracts & payments with our digital real estate IT solutions. Eliminate paperwork delays and errors, ensuring efficient and secure transactions.'
  },
  {
    image: '/boosted-digital.svg',
    title: 'Boosted digital engagement with customers',
    disc: 'Maintain winning customer engagement in a competitive market with our real estate CRM software solutions to win more leads and clients.'
  },
  {
    image: '/help-homebuyer.svg',
    title: 'Help homebuyers beat the competition',
    disc: "Modern buyers are price-conscious. Our real estate data analytics solutions inform you on pricing to meet buyers' expectations."
  },
  {
    image: '/well-targeted.svg',
    title: 'Well-targeted AI-driven marketing solutions',
    disc: "Target smarter, market better. Our AI solutions for real estate agents identify the perfect buyers and optimize campaigns for maximum impact."
  },
  {
    image: '/declutter-data.svg',
    title: 'Declutter data collection and storage',
    disc: "We leverage Big Data to simplify data. Our real estate software developers streamline collection and storage procedures ensuring quick access to crucial data."
  },
  {
    image: '/favorable-mortgage.svg',
    title: 'Favorable mortgage conditions',
    disc: "Mortgage calculators and advanced analysis tools help buyers find the best loan option confidently."
  },
  {
    image: '/crowded-market.svg',
    title: 'Stand out in a crowded market',
    disc: "Let’s harness data and predictive analytics, giving your real estate enterprises a competitive edge with our commercial real estate software development services."
  },
];

const logisticsSofwareData = [
  {
    image: '/faster-delivery.svg',
    title: 'Faster deliveries and reduced costs',
    disc: 'Optimize routes, decrease delivery times, and streamline operations to save up to 35%.'
  },
  {
    image: '/real-time-visibility.svg',
    title: 'Real-time visibility',
    disc: 'Gain instant insights into your fleet, inventory, and shipments for informed decisions.'
  },
  {
    image: '/enhanced-tracking.svg',
    title: 'Enhanced tracking and transparency',
    disc: 'Track products seamlessly and share data with suppliers and carriers to build trust.'
  },
  {
    image: '/secure-transactions.svg',
    title: 'Secure transactions and accurate orders',
    disc: 'Attackproof your finances with hi-tech barcode scanning, achieving 25% higher order accuracy.'
  },
  {
    image: '/improved-communication.svg',
    title: 'Improved communication and collaboration',
    disc: 'Break down silos with streamlined communication and reporting for a unified team.'
  },
  {
    image: '/supplier-carrier.svg',
    title: 'Supplier-carrier relations',
    disc: 'Strengthen supplier-carrier relationships through transparent and collaborative systems.'
  },
  {
    image: '/intelligent-automation.svg',
    title: 'Intelligent automation',
    disc: 'Automate repetitive tasks and use telematics for data-driven fleet management.'
  },
  {
    image: '/mobile-asset.svg',
    title: 'Mobile asset management',
    disc: "Track and manage assets across the supply chain with GPS, RFID, UWB, and barcode scanning."
  },
  {
    image: '/extensive-device.svg',
    title: 'Extensive device compatibility',
    disc: "Ensure your software works smoothly with any device for optimal data collection."
  },
  {
    image: '/workforce-optimization.svg',
    title: 'Workforce optimization',
    disc: "Enhance employee performance, improve resource allocation, and minimize downtime."
  },
  {
    image: '/empower-workforce.svg',
    title: 'Empower your workforce, anywhere',
    disc: "Foster collaboration with location-based tech and accessible logistics software solutions."
  },
  {
    image: '/ete-engagement.svg',
    title: 'End-to-end engagement',
    disc: "Empower your team and satisfy customers with real-time tracking and updates."
  },
];

const HealthcareAppDevelopmentCards = [
  {
    imgSrc: '/patient.svg',
    title: 'Patient-Centric Apps',
    listItems: [
      { text: 'Appointment scheduling apps' },
      { text: 'Fitness and wellness apps' },
      { text: 'Mental health apps' },
      { text: 'Telemedicine applications' },
      { text: 'Wearable tech apps' },
      { text: 'Pharmacy delivery apps' }
    ]
  },
  {
    imgSrc: '/doctor.svg',
    title: 'Medical Professional Apps',
    listItems: [
      { text: 'Hospital management apps' },
      { text: 'Remote patient monitoring apps' },
      { text: 'EHR/EMR data aggregation and analysis apps' }
    ]
  },
  {
    imgSrc: '/healthcare.svg',
    title: 'Healthcare Provider Apps',
    listItems: [
      { text: 'Billing apps' },
      { text: 'Scheduling apps' },
      { text: 'EHR/EMR systems' },
      { text: 'Medicine inventory tracking applications' },
      { text: 'Drug inventory tracking apps' }
    ]
  }
];

const listItem1 = [
  {
    text: 'Hospitals and Clinics'
  },
  {
    text: 'Private Practices'
  },
  {
    text: 'Diagnostic and Imaging Centers'
  },
  {
    text: 'Pharmaceutical Companies'
  },
  {
    text: 'Medical Device Manufacturers'
  },
  {
    text: 'Research Institutions'
  },
  {
    text: 'Laboratories'
  },
  {
    text: 'Health Insurance Companies'
  },
  {
    text: 'Telemedicine Providers'
  }
];
const listItem2 = [
  {
    text: 'Health Information Exchanges (HIEs)'
  },
  {
    text: 'Rehabilitation and Physical Therapy Centers'
  },
  {
    text: 'Home Healthcare Providers'
  },
  {
    text: 'Medical and Healthcare Startups'
  },
  {
    text: 'Eldercare Facilities'
  },
  {
    text: 'Veterinary Practices and PetCare'
  },
  {
    text: 'Psychiatry and Mental Health Clinics'
  },
  {
    text: 'Cosmetology Clinics'
  },
  {
    text: 'Wellness and Fitness Industries'
  }
];

const properyBusinessData1 = [
  {
    text: 'Real Estate Startups'
  },
  {
    text: 'Construction Companies'
  },
  {
    text: 'Technology Disruptors'
  },
  {
    text: 'Commercial and Residential Real Estate'
  },
  {
    text: 'Realtors, Property Managers, Investors'
  },
  {
    text: 'Real Estate Brokerage Firms'
  },
  {
    text: 'Property Management Companies'
  },
  {
    text: 'PropTech Product Companies and Real Estate Finance Companies'
  },
];

const properyBusinessData2 = [
  {
    text: 'Real Estate Developers'
  },
  {
    text: 'Homeowners Associations (HOAs)'
  },
  {
    text: 'Appraisal and Valuation Companies'
  },
  {
    text: 'Investment Firms and REITs (Real Estate Investment Trusts)'
  },
  {
    text: 'Construction Companies'
  },
  {
    text: 'Real Estate Marketing Agencies'
  },
  {
    text: 'Government Housing and Urban Planning Departments'
  },
];

const ecomBenifits1 = [
  {
    text: 'Brick-and-mortar retailers'
  },
  {
    text: 'Suppliers'
  },
  {
    text: 'Manufacturers'
  },
  {
    text: 'Start-ups'
  },
  {
    text: 'Distributors'
  },
  {
    text: 'IT enterprises'
  },
];
const ecomBenifits2 = [
  {
    text: 'Warehousers'
  },
  {
    text: 'Wholesalers'
  },
  {
    text: 'Retail Arbitrage'
  },
  {
    text: 'Brand Owners'
  },
  {
    text: 'Governmental institutions'
  },
  {
    text: 'Logistic centers'
  },
];

const HumanizingHealthcareSliderData = [
  {
    image: '/telemedicine-app-development.svg',
    title: 'Telemedicine App Development',
    content: 'Let’s foster contactless care with telecommunication technology, empowering patients to have real-time video consultations, secure image sharing, and remote medical advice that enables instant diagnosis. Let’s build your telemedicine app to revolutionize healthcare!',
  },
  {
    image: '/electronic-medical.svg',
    title: 'Electronic Medical Records Software Development (EMR/EHR Software)',
    content: 'Centralize patient data (history, labs, e-prescriptions) and improve overall treatment effectiveness and care within your healthcare facility by trusting our custom EHR/ EMR software development service.',
  },
  {
    image: '/patient-portal.svg',
    title: 'Patient Portal Development',
    content: 'Building a patient portal allows patients to conveniently access their health information, including recent visits, discharge summaries, lab results, appointments, and medical records, and communicate directly with healthcare providers, achieving a collaborative care experience.',
  },
  {
    image: '/medical-imaging.svg',
    title: 'Medical Imaging Software Development',
    content: 'Our medical imaging system development enables healthcare professionals to capture, store, and analyze various diagnostic images, from X-rays to MRIs, enhancing their diagnostic capabilities and overall healthcare services.',
  },
  {
    image: '/laboratory-information.svg',
    title: 'Laboratory Information Management Software (LIMS)',
    content: 'Achieve maximum lab efficiency with LIMS development by streamlining laboratory workflows like sample tracking, test ordering, and result analysis – reducing excessive reliance on manual processes and ultimately speeding up quality-driven patient care.',
  },
  {
    image: '/pharmacy-&-drug.svg',
    title: 'Pharmacy & Drug Supply Chain Management Software',
    content: 'Simplify medication dispensing, inventory control, and financial reporting with our online pharmacy app development services. Connects patients, pharmacies, and healthcare providers, automating drug distribution with AI and facilitating verified payments.',
  },
  {
    image: '/billing-and-revenue.svg',
    title: 'Billing and Revenue Cycle Management Software',
    content: 'Automate financial processes, from claim submissions to collections, ensuring accuracy and sustainability with our digital billing and revenue cycle management solutions. These clinical apps significantly help hospitals and health insurance companies achieve financial control.',
  },
  {
    image: '/clinical-decision.svg',
    title: 'Clinical Decision Support System Development',
    content: 'Decision-making is critical to daily healthcare operations. Our CDSS development empowers doctors with quick, data-driven insights for improved patient treatments. Features include order sets, preventive care reminders, and integrated medical data for responsible decisions.',
  },
  {
    image: '/mobile-medical.svg',
    title: 'Mobile Medical Application Development',
    content: "Today’s patient care demands quick access and results. Our custom mHealth apps empower patients and professionals with on-the-go access to clinical resources, data, and care management tools, improving everyone's healthcare journeys.",
  },
  {
    image: '/wearable-health.svg',
    title: 'Wearable Health Tech Integration',
    content: 'Integrating wearable tech into your telehealth routine enables 24/7 patient monitoring, personalized health insights, and improved rehab support. Patients gain self-awareness, while providers get a more complete health picture with these tech integrations.',
  },
  {
    image: '/women-health.svg',
    title: 'Women Health App Development',
    content: "Many women juggle busy lives, and keeping track of their health can be challenging. Our convenient women's health apps track cycles, predict ovulation, offer fertility insights, and pregnancy planning — supporting health goals (conception or contraception) holistically.",
  },
  {
    image: '/patient-engagement.svg',
    title: 'Patient Engagement Platform Development ',
    content: 'We empower doctors to manage patient health proactively, fostering deeper patient engagement and enabling personalized care plans for improved health outcomes with our robust remote patient engagement software development services.',
  },
  {
    image: '/remote-patient.svg',
    title: 'Remote Patient Monitoring Software Development',
    content: 'Our remote patient monitoring software facilitates proactive care beyond the clinic. It helps doctors monitor patients remotely through virtual care and wearable data, ensuring effective treatment outcomes.',
  },
  {
    image: '/homecare-platform.svg',
    title: 'Homecare Platform Development',
    content: 'Qbatch’s homecare platform development helps with symptom checking, lab result assessment, and automated alerts for comorbidities featuring chatbots, cross-platform accessibility, and secure payment gateways to ensure patient-friendly services. ',
  },
  {
    image: '/loT-healthcare.svg',
    title: 'IoT Healthcare Software Development',
    content: 'Easily collect and analyze patient data through smart sensors to generate valuable insights for doctors and medical staff with our IoT-based healthcare software development solutions — enhancing patient monitoring and improving healthcare delivery.',
  },
  {
    image: '/aR-medical.svg',
    title: 'AR Medical App Development',
    content: 'Our AR medical apps use interactive machine learning algorithms to facilitate procedures, enhance diagnostics (such as vein detection), and deepen medical understanding for patients and professionals.',
  },
  {
    image: '/medical-software.svg',
    title: 'Medical Software Development',
    content: 'Our healthcare software developers help you optimize healthcare operations from inventory and equipment tracking and insurance claims management to e-billing and healthcare supply chain management.',
  },
  {
    image: '/appointment-scheduling.svg',
    title: 'Appointment Scheduling Software Development',
    content: 'With our online appointment scheduling software solutions, you can reduce patient wait times and improve your scheduling processes. Empower your patients to register, select services, choose specialists, and easily manage appointments, ensuring convenience and satisfaction.',
  },
  {
    image: '/hospital-management.svg',
    title: 'Hospital Management System Development',
    content: 'We develop hospital management systems to help healthcare providers avoid burnout and complete tasks efficiently. Our systems ensure timely care across clinical, financial, and laboratory departments, enhancing operational efficiency and patient care.',
  },
  {
    image: '/veterinary-practice.svg',
    title: 'Veterinary Practice Management Software Development',
    content: 'Upgrade your veterinary practice with our tailored PetCare solutions, which include features like pet owner portals, back-office tools, pet GPS tracking, e-medical records, animal profiles, appointment scheduling, and integrated accounting and insurance modules.',
  },
  {
    image: '/healthcare-data.svg',
    title: 'Healthcare Data Warehouse Development',
    content: 'We offer custom data warehouse solutions to consolidate and manage large volumes of healthcare data from various sources, including EHRs, patient demographics, claims information, and lab results, enhancing data accessibility and usability.',
  },
  {
    image: '/medical-equipment.svg',
    title: 'Medical Equipment Management Software Development',
    content: 'Our multi-purpose medical equipment management solution ensures optimal uptime and maintenance for your medical devices. Manage and monitor your healthcare devices across your facility with efficient tracking and monitoring app functionality.',
  },
  {
    image: '/e-prescribing-software.svg',
    title: 'E-prescribing Software Development',
    content: 'Our e-prescribing solution integrates with drug databases for accurate guidelines, checks patient profiles for potential interactions, and consults medical records for contraindications, amplifying the prescribing process and enhancing patient safety and medication efficiency.',
  },
  {
    image: '/healthcare-workforce.svg',
    title: 'Healthcare Workforce Management',
    content: 'Optimize healthcare staffing and operations with our workforce management software development services. Streamline scheduling, track employee performance, and ensure compliance with regulations to assist patient care.',
  },
  {
    image: '/clinical-data.svg',
    title: 'Clinical Data Management Software Development',
    content: 'Refine data entry and classification, ensuring complete and error-free research data collection with our healthcare software development services, complying with federal, state, and local regulations, our services facilitate informed clinical decisions and advance medical research.',
  },
];
const RetailSliderData = [
  {
    image: '/retail-analytics.svg',
    title: 'Retail Analytics and Forecasting Software',
    content: 'Avoid making wrong product and inventory stocking choices leveraging predictive analytics and accurately predicting sales and demand using intelligent machine learning algorithms.',
  },
  {
    image: '/retail-business.svg',
    title: 'Retail Business Intelligence (BI) and Reporting Tools',
    content: 'Uncover hidden insights in sales, inventory, and customers and make data-driven decisions to fast-track stock, personalize marketing, and boost efficiency. Gain a competitive edge by building business-specific Retail BI and analytics software.',
  },
  {
    image: '/robot-assisted.svg',
    title: 'Robot-Assisted Warehouse Management',
    content: 'We help you integrate warehouse robotics or collaborative robots (cobots) to streamline warehouse tasks like order picking, packing, and quality control. Let’s facilitate storage, automate operations, and improve supply chain processes.',
  },
  {
    image: '/retail-merchandising.svg',
    title: 'Retail Merchandising and Planning Software Development',
    content: 'Manage assortment, planogram generation, product placement, inventory control, floor planning, and display analysis with our retail merchandising software. Increase floor space with data-driven layouts and assess displays for smarter decisions.',
  },
  {
    image: '/product-catalog.svg',
    title: 'Product Catalog Management Software Development',
    content: 'Stop juggling spreadsheets! Our cloud-based retail and wholesale software collects product information ensuring a single source of truth that simplifies creation, pricing, categorization, and inventory management across all sales channels.',
  },
  {
    image: '/aI-recommendation.svg',
    title: 'AI Recommendation Engines Development',
    content: 'Make unique and relevant product recommendations by developing a custom AI-powered recommendation engine, plugin, or extension to analyze user behavior, including view history, purchase history, and frequently bought items.',
  },
  {
    image: '/custom-shopping.svg',
    title: 'Custom Shopping Cart Development',
    content: 'Develop custom shopping carts with tailored features like abandonment recovery, self-checkout, and open-source integration, providing your customers with complete control and superior buying experiences.',
  },
  {
    image: '/mobile-wallets.svg',
    title: 'Mobile Wallets and Contactless Payment Solutions',
    content: 'Offer streamlined electronic transactions with mobile wallets and integrated contactless payment methods with our retail payment and billing solutions, facilitating secure and convenient contactless transactions, and catering to frictionless checkout experiences.',
  },
  {
    image: '/omnichannel-retail.svg',
    title: 'Omnichannel Retail Software Development',
    content: 'Engage customers through multiple digital and physical touchpoints with a unified brand experience, synchronizing offline and online stores, and upgrading inventory management and customer interactions, leveraging our IT services for your retail biz.',
  },
  {
    image: '/facial-recognition.svg',
    title: 'Facial Recognition for Smart Retail Marketing and Security',
    content: 'Our custom-built software for retail shops leverages facial recognition to deliver individual-level shopping experiences, identify loyal customers for targeted promotions, and improve security through suspect identification and crowd monitoring.',
  },
  {
    image: '/retail-price.svg',
    title: 'Retail Price Optimization Software Development',
    content: 'Take the guesswork out of pricing with our retail price management software solution and study real-time data like competition, consumer behavior, and market conditions. The result? Maximum margins, optimal competitiveness, sales, and profitability.',
  },
  {
    image: '/third-part-system.svg',
    title: 'Third-party System Integrations',
    content: 'Ensure seamless connectivity by integrating ERPs, CRMs, finance, logistics, and analytics systems, ensuring they work coherently to streamline operations and enhance operational efficiency.',
  },
];
const TravelSliderData = [
  {
    image: '/Travel-App-Development-2.svg',
    title: 'Travel App Development',
    content: 'Go beyond automation and empower travelers to design their dream adventures. Our all-in-one travel app solutions include everything from seamless flight and hotel booking to personalized itinerary builders and local expert connections.',
  },
  {
    image: '/sAAs-optimization-services-2.svg',
    title: 'SaaS Optimization Services',
    content: 'Simplify travel planning with our comprehensive e-ticketing solutions. Seamlessly search, compare, and book flights and hotels using our custom flight booking app development services.',
  },
  {
    image: '/Holiday-booking-engine-2.svg',
    title: 'Holiday Booking Engines',
    content: 'Build and integrate custom holiday booking engines into your hotel and flight web and mobile apps for both inbound and outbound vacation packages. Creating dream adventures is just a few clicks away!',
  },
  {
    image: '/tutoring-and-training-platform-development-2.svg',
    title: 'Travel Marketplace Development',
    content: 'Connect travelers with vacation packages, tours, hotel bookings, payment, airfares, cruises, and rental cars generating assured revenues. Build your own travel agency (OTA) in a box with our tourism app development services.',
  },
  {
    image: '/custom-lms-lcms-lxp-and-elearning-portals-2.svg',
    title: 'Guide and Tourism App Development',
    content: 'Build tourist-friendly mobile apps and platforms for planning trips, booking accommodations, linking journeys, adding cabs, generating amusement park passes, and more. Offer a multi-use, digital travel companion to your guests!',
  },
  {
    image: '/Transport-app-development-2.svg',
    title: 'Transport App Development',
    content: 'Make transportation effortless, saving your guest’s time and money with our transport mobile apps. Besides, we build dedicated car booking platforms for on-demand rides, including inter-city and inter-country options.',
  },
  {
    image: '/school-management-and0-student-information-software-2.svg',
    title: 'Travel Management Software Development',
    content: 'Build tours and travel management software panel to easily handle bookings, reports, and itineraries for leisure and corporate trips. Now manage expenses, enforce policies, and optimize costs on a single platform efficiently.',
  },
  {
    image: '/quiz-exam-and-assessment-platform-development-2.svg',
    title: 'Travel Portal Development',
    content: 'As a leading travel portal software development company, we provide white-label portals and robust GDS/Sabre API integrations ensuring global access to extensive hospitality inventories.',
  },
  {
    image: '/virtual-classroom-app-development-2.svg',
    title: 'Social Travel App Development',
    content: 'Spice up your travels with our social travel platform and connect your traveling guests with fellow adventurers. Create a vibrant online community where people swap travel stories and make new friends worldwide..',
  },
  {
    image: '/content-authoring-software-development-2.svg',
    title: 'Travel Emergency App Development',
    content: 'Safe travels, guaranteed! Our emergency apps instantly connect your guests to medical help, translators, and local resources. Help them travel with peace of mind, knowing help is a tap away.',
  },
  {
    image: '/self-education-software-2.svg',
    title: 'Custom Travel App Development',
    content: "Build your dream travel app! We combine booking, CRM, itinerary planning & feedback for happy customers & efficient operations. Plus, financial tools & custom CRM for hotels & agencies. It's your all-in-one travel solution.",
  },
  {
    image: '/proctoring-software-development-2.svg',
    title: 'Travel Review/Feedback Platform Development',
    content: 'Manage your online reputation and gather valuable customer feedback in one place with our reputation management solutions. Showcase positive reviews, address concerns promptly, and turn happy travelers into loyal brand advocates.',
  },
];
const collaborationData = [
  {
    img: '/time-and-material.svg',
    title: "Time and Material",
    description:
      "We empower you to choose our Time and Material model where you only pay for the time and quality resources spent on the project.",
  },
  {
    img: '/fixed-scope-new.svg',
    title: "Fixed Scope Product Development",
    description:
      "Pull down barriers like compromised quality and slow project delivery with our Fixed Scope Product Development model under a fixed budget.",
  },
  {
    img: '/dedicated-development.svg',
    title: "Hire Dedicated Development Team",
    description:
      "Leverage your global footprint in the rising techno-verse with Qbatch’s self-driven, smart, and skilled team of software developers.",
  },
];
const collaborationDataNew = [
  {
    img: '/time-and-material.svg',
    title: "Time and Material",
    description:
      "Only pay for the time and quality resources spent on the project.",
  },
  {
    img: '/fixed-scope-new.svg',
    title: "Fixed Scope Product Development",
    description:
      "Get rid of uncompromised quality and slow project delivery under a fixed budget.",
  },
  {
    img: '/dedicated-development.svg',
    title: "Hire Dedicated Development Team",
    description:
      "Leverage your global footprint with Qbatch’s self-driven team of software developers.",
  },
];

const provenProcessData = [
  {
    img: '/discovery-planning.svg',
    title: 'Discovery & Planning',
    subTitle1: 'Understanding Your Needs',
    desc1: 'We explore your business objectives, challenges, and goals. Focused workshops and brainstorming sessions help us lay the foundation for a successful project.',
    subTitle2: 'Market and Competitor Analysis',
    desc2: 'We analyze your current systems, market trends, and competitors. This helps us uncover hidden opportunities and potential roadblocks, and customize a unique strategy for your business goals.'
  },
  {
    img: '/strategy-roadmap.svg',
    title: 'Strategy & Roadmap',
    subTitle1: 'Strategic Roadmap',
    desc1: 'Based on our collaborative findings, we develop a strategic roadmap that outlines your project scope, timelines, and milestones. This roadmap serves as a guiding document that aligns well with your business goals.',
    subTitle2: 'Tech Stack Selection',
    desc2: 'Our team stays ahead of the curve, recommending the best-suited technologies and tools for scalability, security, and performance. We deliver innovative solutions that meet your specific requirements.'
  },
  {
    img: '/design-prototyping.svg',
    title: 'Design and Prototyping',
    subTitle1: 'User-Centric Design',
    desc1: 'Our core belief? Exceptional user experiences. We create intuitive, engaging, and visually appealing designs and prototypes developed early on to allow feedback and continuous improvement.',
    subTitle2: 'Iterative Design Flow',
    desc2: 'We believe in an iterative design approach. We actively involve you in the process, incorporating your feedback at each stage. This collaboration meets your expectations and also delights your users.'
  },
  {
    img: '/quality-standards.svg',
    title: 'Development & Testing: Quality is Our Standard',
    subTitle1: 'Agile Development',
    desc1: 'We leverage agile methodologies, allowing us to adapt to changes quickly and deliver incremental updates. This ensures we stay on track and meet your project timelines efficiently.',
    subTitle2: 'Rigorous Testing',
    desc2: 'Quality is paramount. We conduct extensive testing, including unit tests, integration tests, and user acceptance tests. This ensures your software is robust, reliable, and bug-free.'
  },
  {
    img: '/deployment-support.svg',
    title: 'Deployment & Support',
    subTitle1: 'Seamless Deployment',
    desc1: 'We handle the deployment process meticulously, following best practices to minimize downtime. Your software will be ready for launch, smooth and efficient.',
    subTitle2: 'Ongoing Support',
    desc2: 'Our commitment extends beyond deployment. We offer ongoing support and maintenance services to ensure your software remains up-to-date, secure, and optimized.'
  },
  {
    img: '/continues-improvement.svg',
    title: 'Continuous Improvement: Evolving with You',
    subTitle1: 'Post-Launch Analysis',
    desc1: "After launch, we monitor your software's performance and gather user feedback. This allows us to identify areas for improvement and make necessary adjustments to enhance the user experience and functionality.",
    subTitle2: 'Scaling & Innovation',
    desc2: "As your business grows, we'll help you scale your software and integrate new features. Our team is dedicated to continuous innovation, ensuring your software evolves with your business needs and technological advancements."
  }
];

const homeStoriesData = [
  {
    img: '/block-dash.svg',
    logo: '/block-dash-logo.svg',
    category: 'Blockchain',
    title: 'The Future of Ownership: NFTs Are More Than Just a Fad'
  },
  {
    img: '/alfaris-group.svg',
    logo: '/alfaris-group-logo.svg',
    category: 'Human Resources',
    title: 'Empowering HR Excellence: Qbatch Enhances Al-Faris International School’s Operations with AIG HR'
  }
];

const helpingCardData = [
  {
    img: '/custom-software.svg',
    title: 'Develop Custom Software Solutions',
    caption: 'We build custom software solutions for sellers, retailers, 3PLs, and agencies.',
  },
  {
    img: '/automate.svg',
    title: 'Automate Manual Processes',
    caption: 'No more wasting time on non-value-added tasks, only flawless processes and results.',
  },
  {
    img: '/marketplace-data.svg',
    title: 'Extract & Integrate Marketplace Data',
    caption: 'Trace, analyze, and integrate competitor data, high/low-selling products, and market trends.',
  },
];
const careerCardData = [
  {
    img: '/transparency-and-trust.svg',
    title: 'Transparency and Trust',
    caption: 'We believe in open communication and clear expectations. No guesswork, just clear goals.',
  },
  {
    img: '/work-life-balance.svg',
    title: 'Work-Life Balance',
    caption: 'Your well-being matters. Enjoy a healthy work-life balance without sacrificing your career.',
  },
  {
    img: '/empowerment-and-growth.svg',
    title: 'Empowerment and Growth',
    caption: 'Your ideas drive innovation. We invest in your professional development and foster a collaborative environment',
  },
];
const recapEventsData = [
  {
    img: '/alibaba-cocreate.png',
    title: 'Alibaba Co-Create 2023  ',
    caption: 'Join us for a day of thought-provoking discussions, cutting-edge tech demos, and networking opportunities with top industry experts.',
    date: '09/07/2023',
    location: 'Las Vegas, USA'
  },
  {
    img: '/amazon-accelerate.png',
    title: 'Amazon Accelerate 2023',
    caption: 'Join us for a day of thought-provoking discussions, cutting-edge tech demos, and networking opportunities with top industry experts.',
    date: '09/13/2023',
    location: 'Seattle, USA'
  },
  {
    img: '/japan-week.png',
    title: 'Japan IT Week 2023',
    caption: 'Join us for a day of thought-provoking discussions, cutting-edge tech demos, and networking opportunities with top industry experts.',
    date: '04/05/2023',
    location: 'Tokyo, Japan'
  },
];
const MattersQbatchCardsData = [
  {
    heading: 'Transport Allowance',
    text: 'We’ve got your commute covered!'
  },
  {
    heading: 'Provident Fund',
    text: 'Save for the future with our awesome fund.'
  },
  {
    heading: 'Annual Increment',
    text: 'Get rewarded yearly for your hard work!'
  },
  {
    heading: 'Performance-Based Bonus',
    text: 'hine bright and earn big!'
  },
  {
    heading: 'Leave Benefits',
    text: 'Plenty of time off to relax and recharge.'
  },
  {
    heading: 'Internet Allowance',
    text: 'Stay connected on us!'
  },
  {
    heading: 'OPD Allowance',
    text: "Health expenses? We've got you."
  },
  {
    heading: 'Hybrid Work Model',
    text: 'Enjoy the flexibility of working from home.'
  },
  {
    heading: 'Health & Leisure',
    text: 'Gym allowances to keep you fit and fab.'
  },
  {
    heading: 'Car/Home Loan',
    text: 'We help you achieve your big dreams.'
  },
  {
    heading: 'General Loan',
    text: 'Financial support when you need it.'
  },
  {
    heading: 'Lunch Facility',
    text: 'Delicious company-sponsored lunches!'
  },
  {
    heading: 'Medical Insurance',
    text: 'Stay healthy with our comprehensive coverage.'
  },
  {
    heading: 'Maternity Coverage',
    text: 'Support for new moms and their bundles of joy.'
  },
  {
    heading: 'Company Events/Tour',
    text: 'Join the fun with dinners, parties, and annual tours.'
  },
  {
    heading: 'In-House Technical Trainings',
    text: 'Boost your skills with monthly training sessions.'
  },
  {
    heading: 'Sponsored Certifications',
    text: 'Learn and grow with our sponsored certifications.'
  },
  {
    heading: "Children's Education Support",
    text: 'Support for your kids’ education.'
  },
  {
    heading: 'Referral Incentive',
    text: 'Refer a friend and earn rewards!'
  },
];
const WhyTrustQbatchData1 = [
  { text: '- Total Process Transparency' },
  { text: '- Cross-Sector Expertise' },
  { text: "- 100% Founder's Mentality" },
  { text: '- Technology Leadership' },
  { text: '- Spectacular Price-Quality Ratio' }
]

const WhyTrustQbatchData2 = [
  { text: '- Pay-as-you-go Model' },
  { text: '- Dependable Engineering Craftsmanship' },
  { text: "- No Biases, Only Neutral Feedback" },
  { text: '- Highly Solution-Oriented Mindset' }
]
const coreRetailData = [
  {
    heading: 'Inventory Management Systems',
    content: [
      { text: 'Real-time inventory tracking across all locations' },
      { text: 'Automated reordering to maintain optimal stock levels' },
      { text: 'Batch & serial number tracking for precise control' },
      { text: 'Multi-warehouse management for seamless coordination' },
      { text: 'Detailed reporting on stock levels, turnover, and suppliers' },
    ]
  },
  {
    heading: 'E-commerce Platforms',
    content: [
      { text: 'Customizable storefronts to reflect your unique brand' },
      { text: 'Secure multi-payment gateways for secure transactions' },
      { text: 'Mobile-optimized design for a smooth shopping experience' },
      { text: 'Built-in SEO tools for improved search engine ranking' },
      { text: 'Centralized order processing and fulfillment' },
      { text: 'Customer accounts and loyalty programs to boost retention' },
    ]
  },
  {
    heading: 'Retail Point of Sale (POS) Systems',
    content: [
      { text: 'Fast and reliable checkout processing' },
      { text: 'Integrated inventory management for accurate stock data' },
      { text: 'Customer management tools for personalized service' },
      { text: 'Comprehensive sales reporting for data-driven decisions' },
      { text: 'Employee management to streamline staff operations' },
      { text: 'Multi-store capability for centralized control' },
    ]
  },
  {
    heading: 'Retail Customer Relationship Management (CRM)',
    content: [
      { text: 'Detailed customer profiles for personalized interactions' },
      { text: 'Marketing automation tools for targeted campaigns' },
      { text: 'Integrated customer support features for efficient service' },
      { text: 'Customer reward and loyalty software to drive repeat business' },
      { text: 'Analytics and reporting to understand customer behavior' },
    ]
  },
  {
    heading: 'Retail ERP Systems',
    content: [
      { text: 'Retail ERP systems to integrate core business processes' },
      { text: 'Customer management to manage customer interactions and sales' },
      { text: 'Employee management to streamline HR processes and evaluation' },
      { text: 'Financial resource management to handle budgeting and accounting' },
      { text: 'Supply chain module for procurement and logistics management' },
    ]
  },
  {
    heading: 'Mobile Retail Solutions',
    content: [
      { text: 'Mobile commerce apps for convenient shopping on the go' },
      { text: 'In-store navigation for a frictionless shopping experience' },
      { text: 'Push notifications to engage customers with targeted promotions' },
      { text: 'Mobile POS systems for flexible checkout options' },
      { text: 'Customer loyalty apps to boost brand engagement' },
    ]
  }
];

const pressReleaseData = [
  { text: 'Qbatch Expands Global Presence with New Offices in Europe' },
  { text: 'Qbatch Partners with Leading AI Firm for Next-Gen Tech Development' },
  { text: 'Qbatch Wins ‘Innovator of the Year’ at Tech Awards 2024' },
];

const ImagineRetailExperienceData = [
  {
    img: '/thrill-your-customers.svg',
    heading: 'Thrill your customers',
    text: "Experiential retail? We're all about it! Let's create in-store experiences that have your customers raving and coming back for more."
  },
  {
    img: '/embrace-social-power.svg',
    heading: 'Embrace social power',
    text: "Social commerce is booming. We'll help you leverage the power of social media platforms to turn likes into sales."
  },
  {
    img: '/go-green.svg',
    heading: 'Go green',
    text: "Sustainability is more than a trend, it's the future. We'll equip you to meet the growing demand for eco-conscious brands."
  },
  {
    img: '/cut-out-the-middleman!.svg',
    heading: 'Cut out the middleman!',
    text: "We'll help you establish a thriving direct-to-consumer sales channel, connecting directly with your audience."
  },
  {
    img: '/the-voice-of-commerce.svg',
    heading: 'The voice of commerce',
    text: "Voice shopping is here to stay. We'll ensure your customers can seamlessly purchase and get unique recommendations with just their voice."
  },
]
const ImagineTravelAppData = [
  {
    img: '/language-1.svg',
    heading: 'Language barriers got them tongue-tied? ',
    text: "Our apps translate the world, so your guests can focus on exploring it."
  },
  {
    img: '/community-1.svg',
    heading: 'Overwhelmed by endless travel options?',
    text: "We create personalized recommendations and itineraries for your guests."
  },
  {
    img: '/swap-1.svg',
    heading: 'FOMO (Fear Of Missing Out) got you down?',
    text: "Let’s offer exclusive deals to keep your travel enthusiasts engaged."
  },
  {
    img: '/mobile-block.svg',
    heading: 'Guests won’t engage with your app anymore?',
    text: "We build unique app experiences that spark joy, not overwhelm."
  },
  {
    img: '/trap-1.svg',
    heading: 'Tired of the same tourist traps? ',
    text: "Let’s add engines that unlock local secrets and exclusive deals for unforgettable adventures."
  },
]
const ImagineTravelAppData2 = [
  {
    img: '/ai-2.svg',
    heading: 'AI',
    text: "Remembers travel styles – no more one-size-fits-all itineraries"
  },
  {
    img: '/ai-ml-2.svg',
    heading: 'AR',
    text: "Shows hidden gems around – point your phone and explore instantly"
  },
  {
    img: '/vr-2.svg',
    heading: 'VR',
    text: "Lets you virtually explore destinations before you book."
  },
  {
    img: '/location-2.svg',
    heading: 'GPS',
    text: "Keeps you on track with real-time recommendations & guidance"
  },
  {
    img: '/chatbot-2.svg',
    heading: 'Chatbots',
    text: "Are your 24/7 travel assistants – always ready to help!"
  },
]

const PeopleWeHaveData = [
  {
    img: '/Retailers-1.svg',
    heading: 'Retailers/ Wholesalers',
    text: "Avoid poor labor management, pricing wars, and storage costs, achieving sales growth."
  },
  {
    img: '/Freight-1.svg',
    heading: 'Freight Forwarders',
    text: "Ensure effective cargo movement, customs compliance, and updated shipment status."
  },
  {
    img: '/Warehouse-1.svg',
    heading: 'Warehouse Providers',
    text: "Improve warehouse layout, prevent product damage, and increase storage efficiency."
  },
  {
    img: '/Logistics-1.svg',
    heading: 'Logistics & Transportation Companies',
    text: "Gain holistic supply chain management, real-time tracking, and operational accuracy."
  },
  {
    img: '/3PL-Providers.svg',
    heading: '3PL Providers & Trucking Services',
    text: "Ensure flow-through logistics operations, team coordination, and supply chain visibility."
  },
]

const InnovativeRetailSolutionsData = [
  {
    img: '/headless-commerce.svg',
    heading: 'Headless Commerce',
    text: "Embrace headless e-commerce approaches for flexible and humanized retail solutions that cater to your unique business needs."
  },
  {
    img: '/cloud-first.svg',
    heading: 'Cloud-first',
    text: "Scalability, accessibility, and ironclad security – that's the cloud advantage. We'll leverage it to build your future-proof retail platform."
  },
  {
    img: '/microservices.svg',
    heading: 'Microservices',
    text: "Modular and efficient – that's the microservices approach. We'll build a retail software system that runs like a dream."
  }
]
const TravelSolutionsData = [
  {
    img: '/mobile-1.svg',
    heading: 'Mobile Hotel Apps',
    text: "Go beyond basic booking with features like loyalty programs, personalized recommendations, amenity services, and smart room controls."
  },
  {
    img: '/bulb-2.svg',
    heading: 'Contactless Solutions',
    text: "Empower guests with touchless technology and 24/7 access to services through mobile apps and kiosks."
  },
  {
    img: '/house-2.svg',
    heading: 'Smart Rooms',
    text: "Impress them with in-room tablets for digital control of the environment, preventive maintenance, and seamless offline and online functionality."
  }
]
const ExploreOurIndustrySpecificRetailPotentialData = [
  {
    img: '/large-retail-chains.svg',
    heading: 'Large Retail Chains',
    text: "Manage inventory, track sales, and assess customer data across locations."
  },
  {
    img: '/e-commerce-businesses.svg',
    heading: 'E-Commerce Businesses',
    text: "Enhance online shopping experiences and streamline operations."
  },
  {
    img: '/small-and-medium-retailers.svg',
    heading: 'Small and Medium Retailers',
    text: "Improve efficiency and customer engagement with tailored solutions."
  },
  {
    img: '/omnichannel-retailers.svg',
    heading: 'Omnichannel Retailers',
    text: "Integrate online and offline channels for a consistent customer experience."
  },
  {
    img: '/grocery-stores-&-supermarkets.svg',
    heading: 'Grocery Stores & Supermarkets',
    text: "Rectify inventory and supply chain management."
  },
  {
    img: '/pharmacies-and-healthcare.svg',
    heading: 'Pharmacies and Healthcare ',
    text: "Manage prescriptions, inventory, and customer data effectively."
  },
  {
    img: '/department-stores.svg',
    heading: 'Department Stores',
    text: "Enhance shopping experiences and operational efficiency."
  },
  {
    img: '/franchis-retail-businesses.svg',
    heading: 'Franchise Retail Businesses',
    text: "Ensure consistency and efficiency across multiple locations."
  },
  {
    img: '/commercial-centers.svg',
    heading: 'Commercial Centers',
    text: "Manage tenant operations and enhance customer experiences"
  },
];
const TravelLanguagesData = [
  {
    title: "Maps and Location Services",
    content: [
      { img: "/g-maps.svg", },
      { img: "/here.svg", },
      { img: "/oracle.svg", },
      { img: "/nec.svg", },
      { img: "/gps.svg", },
    ]
  },
  {
    title: "Payment Gateways",
    content: [
      { img: "/master-c.svg", },
      { img: "/visa-c.svg", },
      { img: "/paypal.svg", },
      { img: "/g-pay.svg", },
      { img: "/strip-1.svg", },
      { img: "/brain-tree.svg", },
      { img: "/noon.svg", },
    ]
  },
  {
    title: "Checkout Solutions",
    content: [
      { img: "/2cc.svg", },
      { img: "/clover.svg", },
      { img: "/cash.svg", },
      { img: "/b.svg", },
      { img: "/animal.svg", },
    ]
  },
  {
    title: "Global Distribution Systems (GDS)",
    content: [
      { img: "/amadeus.svg", },
      { img: "/sabre.svg", },
      { img: "/galileo.svg", },
      { img: "/world-span.svg", },
      { img: "", text: '' },
    ]
  },
  {
    title: "Booking Engines, OTAs, and PMS",
    content: [
      { img: "/agilysys.svg", },
      { img: "/auto-clerk.svg", },
      { img: "/molo.svg", },
      { img: "/innfinity.svg", },
      { img: "/gust.svg", },
      { img: "/infor.svg", },
      { img: "/hotels.svg", },
      { img: "/maxi-mojo.svg", },
      { img: "/logical.svg", },
    ]
  },
  {
    title: "Central Reservation Systems (CRS)",
    content: [
      { img: "/cendyn.svg", },
      { img: "/nb.svg", },
      { img: "/e-rev.svg", },
      { img: "/blosy.svg", },
      { img: "/hotel-sp.svg", },
      { img: "/djub.svg", },
      { img: "/inntopia.svg", },
      { img: "/sabre.svg", }
    ]
  },
];
const PowerfulRetailSolutionsCardData = [
  {
    imgSrc: '/chart.svg',
    title: 'Data-Driven Forecasting',
    content: [
      {
        subtitle: 'Advanced Analytics',
        description: 'Leverage big data to analyze historical sales data, customer behavior, and market trends to predict product demand accurately.'
      },
      {
        subtitle: 'AI and ML Retail Solutions',
        description: 'We integrate these technologies to continuously learn from new data, improving the accuracy of demand forecasts over time.'
      }
    ]
  },
  {
    imgSrc: '/inventry-icon.svg',
    title: 'Agile Inventory Management',
    content: [
      {
        subtitle: 'Just-in-Time Inventory Management Solutions',
        description: 'Adopt JIT practices to reduce holding costs and minimize excess inventory. Develop efficient inventory software that helps you receive required goods.'
      },
      {
        subtitle: 'Adaptive Supply Chain Solutions',
        description: 'Build supply chain and vendor management software to respond to demand changes and maintain relationships with multiple suppliers for faster product deliveries.'
      }
    ]
  },
  {
    imgSrc: '/customer-icon.svg',
    title: 'Customer-Centric Strategies',
    content: [
      {
        subtitle: 'Pre-Orders and Waitlists',
        description: 'Gauge demand by offering pre-orders or creating wait lists before committing to large inventory purchases using our retail data management software development services. '
      },
      {
        subtitle: 'Personalized Marketing',
        description: 'Use customer data and campaign management tools to create targeted marketing campaigns that drive demand for specific products.'
      }
    ]
  },
  {
    imgSrc: '/ecomerce-icon.svg',
    title: 'All-in-One Commerce Platform Development',
    content: [
      {
        subtitle: 'Advanced Analytics',
        description: 'Integrate all sales channels (online, offline, mobile) on one portal to have a real-time view of inventory and demand and easily reallocate stock to where it’s needed most.'
      }
    ]
  }
];
const dataGenericTravelApps = [
  {
    img: '/Native-Apps-Android-and-iOS.svg',
    heading: 'Native Apps (Android and iOS)',
    text: 'Reach every traveler with stunning, user-friendly apps designed specifically for each platform.'
  },
  {
    img: '/Web-Apps.svg',
    heading: 'Web Apps',
    text: 'Empower travel businesses. Create custom web applications to streamline operations for travel agencies and tour operators.'
  },
  {
    img: '/Cross-Platform-Apps.svg',
    heading: 'Cross-Platform Apps',
    text: 'Develop once, deploy everywhere. Build travel apps that work flawlessly on both Android and iOS.'
  }
]

const RealEstateITSolutionsData = [
  {
    img: '/residential-property.svg',
    heading: 'Residential Property Management',
    list: ["Simplified leasing and maintenance", "Secure role-based access", "Reservation management", "Payment and accounting integration"]
  },
  {
    img: '/commercial-property.svg',
    heading: 'Commercial Property Management',
    list: ["Lead generation", "Facility and maintenance managemen", "Lease management", "Utility billing", "Real-time communication"]
  },
  {
    img: '/tenant-onboarding.svg',
    heading: 'Tenant Onboarding and Management',
    list: ["Owner and resident hubs", "Communication tools", "Resident databases", "Payment integration", "Applicant screening"]
  },
  {
    img: '/listing-services.svg',
    heading: 'Multiple Listing Services (MLS)',
    list: ["Centralized listing databases", "Property listing platforms", "Data syndication", "Advanced search and filtering"]
  },
  {
    img: '/data-exchange.svg',
    heading: 'Internet Data Exchange (IDX)',
    list: ["Website integration", "Custom property display", "Lead capture features"]
  },
  {
    img: '/property-management.svg',
    heading: 'Property Management Software (PMS)',
    list: ["Tenant management", "Maintenance scheduling", "Rent collection", "Financial tracking"]
  },
  {
    img: '/valuation-software.svg',
    heading: 'Real Estate Valuation Software',
    list: ["Automated valuation models (AVM)", "Market analysis tools", "Public records integration"]
  },
  {
    img: '/accounting-software.svg',
    heading: 'Real Estate Accounting Software',
    list: ["Financial management", "Budgeting and forecasting", "Tax management"]
  },
  {
    img: '/investment-software.svg',
    heading: 'Investment Software',
    list: ["Tenant management", "Maintenance scheduling", "Rent collection", "Financial tracking"]
  },
]

const LogisticsSupplyChainData = [
  {
    img: '/resource-planning.svg',
    heading: 'Manufacturing and Resource Planning',
    list: ["Manufacturing Execution Systems (MES)", "Enterprise Resource Planning (ERP) Software", "Advanced Planning and Scheduling (APS) Software", "Material Requirements Planning (MRP)", "MRP Supply Chain", "Digital Documentation"]
  },
  {
    img: '/logistics-supply-chain.svg',
    heading: 'Order and Supply Chain Management',
    list: ["EDI Order Management", "Order Processing and Returns"]
  },
  {
    img: '/logistics-management.svg',
    heading: 'Transportation and Logistics Management',
    list: ["Yard Management", "Integration with 3P Transportation Companies", "Calculation of Shipments/Transportation Costs", "GPS Asset Tracking Software", "Electronic Driver Logbook", "Maps (Google Maps, etc.)"]
  },
  {
    img: '/logistics-warehouse.svg',
    heading: 'Warehouse and Inventory Management',
    list: ["Warehousing and Inventory Mobile Apps", "Barcode Asset Tracking", "RFID Software Solutions", "3PL Prep Solutions "]
  },
]

const eventsImageGroups = [
  [
    { id: 1, src: '/event-img-1.png', alt: 'Image1', title: 'White Label Expo 2024', country: 'London, UK', date: '2024', flag: '/Uk.svg' },
    { id: 2, src: '/event-img-3.png', alt: 'Image2', title: 'Japan IT Week 2023', country: 'Tokyo, Japan', date: 'Feb 2023', flag: '/japan-flag.svg' },
    { id: 3, src: '/event-img-4.png', alt: 'Image3', title: 'Prosper Show 2024', country: 'Las Vegas, USA', date: '2024', flag: '/Usa.svg' },
    { id: 4, src: '/event-img-2.png', alt: 'Image4', title: 'Prosper Show 2024', country: 'Las Vegas, USA', date: '2024', flag: '/Usa.svg' },
    { id: 5, src: '/event-img-1.png', alt: 'Image5', title: 'Prosper Show 2024', country: 'Las Vegas, USA', date: '2024', flag: '/Usa.svg' },
    { id: 6, src: '/event-img-5.png', alt: 'Image6', title: 'Amazon Accelerate 2023', country: 'Seattle, USA', date: '2023', flag: '/Usa.svg' },
  ],
  [
    { id: 1, src: '/event-img-6.png', alt: 'Image1', title: 'Alibaba CoCreate 2023', country: 'Las Vegas, USA', date: '2023', flag: '/Usa.svg' },
    { id: 2, src: '/event-img-8.png', alt: 'Image2', title: 'Alibaba CoCreate 2023', country: 'Las Vegas, USA', date: '2023', flag: '/Usa.svg' },
    { id: 3, src: '/event-img-7.png', alt: 'Image3', title: 'Amazon Accelerate 2023', country: 'Seattle, USA', date: '2023', flag: '/Usa.svg' },
    { id: 4, src: '/event-img-9.png', alt: 'Image4', title: 'Amazon Accelerate 2023', country: 'Seattle, USA', date: '2023', flag: '/Usa.svg' },
    { id: 5, src: '/event-img-1.png', alt: 'Image5', title: 'Alibaba CoCreate 2023', country: 'Las Vegas, USA', date: '2023', flag: '/Usa.svg' },
    { id: 6, src: '/event-img-10.png', alt: 'Image6', title: 'Alibaba CoCreate 2023', country: 'Las Vegas, USA', date: '2023', flag: '/Usa.svg' },
  ],
];

const eventsMobileImgs = [
  { id: 1, imageUrl: "/mobile-event-1.png" },
  { id: 2, imageUrl: "/mobile-event-2.png" },
  { id: 3, imageUrl: "/mobile-event-3.png" },
];
const ecommerceSolutions = [
  {
    image: '/ecom-custom-dev.svg',
    title: 'E-commerce Custom Development',
    content: 'As a dedicated e-commerce software development company, we go beyond blind coding. We explore your business, goals, and requirements and develop tailored e-commerce business solutions from scratch, entailing extensive research into user needs.',
  },
  {
    image: '/ecom-app-dev.svg',
    title: 'E-commerce Mobile App Development',
    content: 'From “Is a mobile eCommerce app worth my money?” to “I need a mobile app,” priorities changed. We build intuitive carts, gateways, filters, multi-payment options, and other functional APIs for responsive, high-converting experiences.',
  },
  {
    image: '/ecom-back-end.svg',
    title: 'E-commerce Back-end and Front-end Development',
    content: 'Build robust back-end architectures and engaging front-ends for your global audience with our sales-generating e-commerce store and app development services. We guarantee resilient inside-out web apps for a stronger business footprint and happy customers. ',
  },
  {
    image: '/ecom-progressive.svg',
    title: 'Progressive Web App Development',
    content: 'Progressive for a reason, as these apps allow users to enjoy the native app’s experience directly from their browser without downloading it. Our E-commerce developers help you develop PWAs for next-gen shopping experiences.',
  },
  {
    image: '/ecom-marketplace.svg',
    title: 'E-commerce Marketplace Development',
    content: 'Let’s build highly functional and interactive marketplaces for a wide audience of buyers and sellers. Our dedicated e-commerce app development company designs versatile platforms fostering a free-market environment for businesses of all sizes. ',
  },
  {
    image: '/ecom-platform.svg',
    title: 'E-commerce Platform Development ',
    content: 'Operating several storefronts takes a lot of work. Let’s build a centralized e-commerce platform and efficiently manage product listings, inventory, orders, and customer data through our sophisticated e-commerce solutions and expertise.',
  },
  {
    image: '/ecom-store-dev.svg',
    title: 'Online Store Development ',
    content: 'Forget about millennials and Gen Z because now, even the boomers (53%) regularly use social media to seek the best trends and products for a healthy and tech-driven lifestyle. It’s your opportunity to create a welcoming cross-platform e-store.',
  },
  {
    image: '/aggregators-portal.svg',
    title: 'Aggregator Portals and Advanced Analytics ',
    content: 'Our custom eCommerce application development includes building aggregator apps and portals to connect consumers and service providers when generating fees. These aggregators help you track your vendors, products, and histories.',
  },
  {
    image: '/payment-gateway.svg',
    title: 'Payment Gateways Solutions ',
    content: 'Develop secure and user-friendly payment gateway software solutions for a smooth checkout process. Easily integrate Amazon Payment, PayPal, SecurePay, ApplePay, or other payment options into your marketplace app or website.',
  },
  {
    image: '/loyalty-program.svg',
    title: 'Loyalty Program Software Development ',
    content: 'Retaining old customers is 7 times more cost-effective than acquiring new ones. Hire our e-commerce developers and engineer smart loyalty programs to ensure customer retention and prevent churn.',
  },
]
const realEstateSliderData = [
  {
    image: '/re-management.svg',
    title: 'Real Estate Management Software Development',
    content: 'Looking to develop a high-end real estate management management app for commercial and residential properties? Creates intuitive proptech apps to centralize tenant information, track leads and sales, and store documents securely.',
  },
  {
    image: '/re-location-based.svg',
    title: 'Location-based Real Estate Service',
    content: 'Enable users to track device locations, view property listings and nearby amenities, and watch video tours of apartments directly on the map, enhancing their search experience and satisfaction while helping them make informed decisions.',
  },
  {
    image: '/re-mobile-app.svg',
    title: 'Real Estate Mobile App Development',
    content: 'Streamline property management, cross-communication, visit scheduling, and deal closures with our mobile app development for real estate agents, buyers, brokers, and investors.',
  },
  {
    image: '/re-marketplace.svg',
    title: 'Real Estate Marketplace Development',
    content: 'Build a real estate hub for realtors, brokers, and property managers with our on-demand real estate app development featuring lease management, property sales, and rentals into one seamless platform, ultimately optimizing deal success.',
  },
  {
    image: '/re-virtual-tour.svg',
    title: 'Real Estate Virtual Tour Software Development',
    content: "Claim the future of real estate with our powerful virtual tour app solutions. As a leading virtual tour software developer, we specialize in creating custom VR solutions. Let's turn your imagination into reality.",
  },
  {
    image: '/re-investment.svg',
    title: 'Real Estate Investment Software Development',
    content: 'Right investment decisions start with the right real estate development tools. From scouting opportunities to portfolio management, we ensure a lucrative, secure, and efficient investment process tailor-made for your rental properties.',
  },
  {
    image: '/property-auction.svg',
    title: 'Property Auction App Development',
    content: "Our real estate auction app connects sellers with motivated buyers. List properties bid competitively, and experience the thrill of online auctions. Sell fast or find your dream home – it's all just a click away!",
  },
  {
    image: '/home-rentals.svg',
    title: 'Home Rentals App Development',
    content: 'Let’s empower landlords and tenants with our home rental app solution! Manage properties with neat listings, and find dream homes, all with secure payments and hassle-free booking — ensuring a stress-free rental experience for all.',
  },
  {
    image: '/property-booking.svg',
    title: 'Property Booking App Development',
    content: 'Renting just got easier! Our real estate app development company lets tenants find perfect homes & book with ease. Realtors can manage listings, view reservations and get secure payments.',
  },
  {
    image: '/lead-management.svg',
    title: 'Real Estate Lead Management Software Development',
    content: 'No more lead juggling! Our real estate lead CRM solution captures leads on-the-go, distributes them automatically, and lets you customize workflows. Close more deals, ditch the paperwork!',
  },
  {
    image: '/lease-management.svg',
    title: 'Lease Management Software Development',
    content: 'Lease nightmares? Embrace smarter leasing with our cloud-based real estate software solutions and easily handle automated credit scoring, document and applicant management, lease origination, communication, and asset tracking.',
  },
  {
    image: '/rental-property.svg',
    title: 'Rental Property Management App Development',
    content: "Our real estate app streamlines everything: manage properties, showcase listings to attract tenants, collect rent, screen tenants - all in one user-friendly platform. Free up your time, and build a thriving rental business. Let's simplify!",
  },
  {
    image: '/brokerage-app.svg',
    title: 'Real Estate Brokerage App Development',
    content: "Supercharge your brokerage! Our custom software development for real estate industry empowers agents to manage teams, track deals, delight clients view listings, make reviews, and secure payments. Win-win for everyone!",
  },
  {
    image: '/crm-software.svg',
    title: 'Custom Real Estate CRM/ERP Software',
    content: "Cutthroat market competition? Streamline your real estate business with custom CRM/ERP to boost efficiency and profits. Focus on growth, we'll handle the tech — from concept to industry leader. Leverage CRM & ERP to win!",
  },
  {
    image: '/security-management.svg',
    title: 'Real Estate Security Management Systems',
    content: "Full security, zero hassle. Our real estate systems combine 24/7 surveillance, access controls & key management for a digital moat. We prioritize constant improvement, so your property stays protected with the latest tech.",
  },
];

const ecommerceFeaatures = [
  {
    img: '/easy-login.svg',
    data: 'Easy login'
  },
  {
    img: '/advanced-nav.svg',
    data: 'Advanced navigation'
  },
  {
    img: '/mobile-optimization.svg',
    data: 'Mobile Optimization'
  },
  {
    img: '/live-msg.svg',
    data: 'Live messaging'
  },
  {
    img: '/personalization.svg',
    data: 'Personalization'
  },
  {
    img: '/reporting-system.svg',
    data: 'Reporting system'
  },
  {
    img: '/content-manage.svg',
    data: 'Content management'
  },
  {
    img: '/seo-optimization.svg',
    data: 'SEO optimization'
  },
  {
    img: '/social-media-integrate.svg',
    data: 'Social media integration'
  },
  {
    img: '/omni-channel.svg',
    data: 'Omnichannel payments'
  },
  {
    img: '/secure-gateway.svg',
    data: 'Secure gateways'
  },
  {
    img: '/multilevel-security.svg',
    data: 'Multilevel security'
  },
];

const customLogisticsData = [
  {
    image: '/wms.svg',
    title: 'Warehouse Management Systems (WMS)',
    content: 'Ensure continuous warehouse operations, accurate inventory tracking, product allocation, space utilization, and streamlined picking and packing processes with our custom logistics software development.',
  },
  {
    image: '/transportation-management.svg',
    title: 'Transportation Management Systems (TMS)',
    content: 'Easily manage transportation logistics, improve route planning, reduce carrier costs, and enhance delivery accuracy with our fully functional logistics and transportation software development services.',
  },
  {
    image: '/inventory-management.svg',
    title: 'Inventory Management Solutions',
    content: 'Leverage our comprehensive inventory management software solutions and industry expertise to maintain optimal inventory levels, reduce holding costs, and avoid stockouts.',
  },
  {
    image: '/fleet-management.svg',
    title: 'Fleet Management Software',
    content: 'Monitor and manage your fleet and freight, ensure regulatory compliance, and streamline physical transportation in real time with insights into vehicle performance, fuel usage, and driver behavior to track progress and safety.',
  },
  {
    image: '/route-optimization.svg',
    title: 'Route optimization and delivery management',
    content: 'From international shipments to same-day delivery solutions, we design smart delivery routes that reduce travel time and fuel consumption with our turnkey shipping logistic software solution.',
  },
  {
    image: '/supply-chain-planning.svg',
    title: 'Supply Chain Planning and Forecasting',
    content: "Respond to demand and disruptions with relevant technology and custom transport and logistics software solutions, ensuring transparency, safety, and connectivity all the way from “dispatched to delivered.",
  },
  {
    image: '/procurement.svg',
    title: 'Procurement and Supplier Management',
    content: 'Develop an end-to-end logistics tracking system software to improve supplier relationships, consolidate operations, enhance transparency, and automate procurement processes.',
  },
  {
    image: '/data-analytics.svg',
    title: 'Data Analytics and BI Platforms',
    content: 'Generate AI and Big Data-powered KPIs and identify improvement areas such as delivery times, inventory levels, and operational costs to upgrade your overall supply chain processes.',
  },
  {
    image: '/navigation-tracking.svg',
    title: 'Navigation Tracking Software',
    content: 'Develop navigation software for precise fleet tracking and sorted inventory management operations across all transit modes, leveraging GPS technology and seamless API integrations.',
  },
  {
    image: '/document-generation.svg',
    title: 'Document Generation Software',
    content: 'Supply chain and shipping companies create numerous documents every day. Automate document-related work for packing lists, declarations, and cargo manifests, reducing human error and boosting overall operations.',
  },
  {
    image: '/asset-tracking.svg',
    title: 'Asset Tracking Software',
    content: "Our team designs and develops high-performing logistics asset-tracking software leveraging AI and GPS to provide real-time visibility and control over assets, enhancing tracking accuracy, reducing losses, and boosting overall supply chain efficiency.",
  },
];

const onDemandFeaturesData = [
  {
    img: '/custom-listings.svg',
    data: 'Custom Listings and MLS'
  },
  {
    img: '/property-search.svg',
    data: 'Interactive Property Search'
  },
  {
    img: '/map-integration.svg',
    data: 'Property Map Integration'
  },
  {
    img: '/valuation-engines.svg',
    data: 'Valuation Engines'
  },
  {
    img: '/tax-calculator.svg',
    data: 'Mortgage and Tax Calculators'
  },
  {
    img: '/virtual-tour.svg',
    data: 'Virtual 3D Tours'
  },
  {
    img: '/task-management.svg',
    data: 'Task & Project Management'
  },
  {
    img: '/tenant-screening.svg',
    data: 'Tenant Screening and Onboarding'
  },
  {
    img: '/online-booking.svg',
    data: 'Online Booking'
  },
  {
    img: '/comparison-tool.svg',
    data: 'Comparison Tool'
  },
  {
    img: '/documents-management.svg',
    data: 'Documents Management'
  },
  {
    img: '/analytics-reporting.svg',
    data: 'Analytics and Reporting'
  },
];

const servicesData = [
  {
    img: "/ci-cd-services.svg",
    title: 'CI/CD Services',
    description: 'Keep track of test cases, code changes, instant feedback loops, and release cycles bridging the Dev and Ops gap via CI/CD services. This ensures constant software quality, end-to-end security, reduced costs, and of course continuous integration and delivery of new changes as needed.',
  },
  {
    img: "/devops-and-cloud-computing.svg",
    title: 'DevOps and Cloud Computing',
    description: 'Hyper-scale public clouds like AWS Cloud, Azure, and Google Cloud Platform have enabled enterprises to enjoy more reliability and stability in their DevOps adoption journeys. Our AWS DevOps consulting services offer compliance, planning, and tools for building a stable DevOps-Cloud infrastructure.',
  },
  {
    img: "/devsecops-services.svg",
    title: 'DevSecOps Services',
    description: 'Assure grass-root level security through the ‘Security as Code’ mechanism with our senior DevOps engineers. We perform DevSecOps to determine risk tolerance throughout the continuous integration and delivery pipeline assuring clean code, better visibility, and quick insights into possible risks.',
  },
  {
    img: "/devops-consulting-services.svg",
    title: 'DevOps Consulting Services',
    description: 'We offer discovery workshops on DevOps use case-driven services, tools, and advisory that highlight improvement areas for pipeline optimization. Our DevOps consultants perform audits and maturity assessments and offer a holistic roadmap for change enablement and coaching. ',
  },
  {
    img: "/devops-automation-services.svg",
    title: 'DevOps Automation Services',
    description: 'Limit time outages and possible technical debts by automating the software pipeline from coding to development and production stages across APIs and environments with our DevOps services. We help you accelerate operational efficiency and business agility assuring fluent workflows and end results.  ',
  },
  {
    img: "/infrastructure-as-code-services.svg",
    title: 'Infrastructure as Code Services',
    description: 'Automate infrastructure at scale instead of manually setting up and configuring resources by availing our IaC DevOps services. IaC increases agility and reduces human error in the software delivery pipeline, ensuring provisioning, configuration, and system management.',
  },
  {
    img: "/virtualization.svg",
    title: 'Virtualization',
    description: 'Deal with money constraints and standardize software deployments by working in the same network environments with the self-contained virtualization approach. We as DevOps engineering services providers employ self-contained virtual containers to assure responsiveness toward business demands.',
  },
];
const commerceService = [
  {
    img: "/logistic.svg",
    title: 'Logistics Management',
    description: 'Streamline routing, tracking, cargo operations, container and management, vehicle inspection, and more. '
  },
  {
    img: "/shopping-feature.svg",
    title: 'Live-streaming -shopping features',
    description: 'Boost sales with live-stream shopping! Viewers can buy items instantly while watching, with no interruptions.'
  },
  {
    img: "/warehouse.svg",
    title: 'Warehouse Management',
    description: 'Optimize warehouse operations, yard and dock management, SKUs, vendor relations,  labor, and stock.'
  },
  {
    img: "/shipment-management.svg",
    title: 'Inventory & Shipment Management',
    description: 'Improve barcoding, ordering, picking, and shipping processes, including inventory forecasting, restocking, and lot control'
  },
  {
    img: "/erp.svg",
    title: 'E-commerce ERP',
    description: 'Manage and expedite complex workflow operations, supply chains, pricing, vendors, projects, and human resources.'
  },
  {
    img: "/info-management.svg",
    title: 'Product Information Management',
    description: 'Efficiently categorize products, create catalogs, compare, and manage product data, lifecycle, and traceability.'
  },
  {
    img: "/payment-sol.svg",
    title: 'Payment Solutions and Tools',
    description: 'Securely manage payment gateways, portals, POS systems, and e-wallets, ensuring data protection and compliance.'
  },
]
const reInnovationsData = [
  {
    img: "/predictive-power.svg",
    title: 'Predictive power',
    description: 'See into the future (well, sort of) with data-driven forecasting tools. Anticipate market trends, property values, and buyer behavior to stay ahead of the curve.',
  },
  {
    img: "/cloud-nine.svg",
    title: 'Cloud nine at your fingertips',
    description: "Access and manage your data seamlessly with secure cloud solutions. It's like having your real estate empire at your fingertips, anytime, anywhere.",
  },
  {
    img: "/smart-buildings.svg",
    title: 'Smart buildings, smarter business',
    description: 'Use IoT to adjust lighting, thermostats, and more for peak efficiency and lower costs. Imagine, lights that read your mood & thermostats that mind-read comfort.',
  },
  {
    img: "/virtually-present.svg",
    title: 'Be virtually present',
    description: 'Explore properties from anywhere with our immersive virtual tours, 3D models, and AR apps. Imagine browsing dream homes from a beach vacation!',
  },
  {
    img: "/tireless-assistance.svg",
    title: '24/7, tireless assistance',
    description: 'Imagine a friendly support who answers customer inquiries and schedules viewings around the clock. Yes, it’s the AI-powered chatbots.',
  },
  {
    img: "/automate-mundane.svg",
    title: 'Automate the mundane',
    description: 'Free up your team for more strategic tasks by automating repetitive tasks like paperwork, data entry, and scheduling. Let the robots handle the mundane!',
  },
  {
    img: "/secure-embrace.svg",
    title: "Blockchain's secure embrace",
    description: 'Achieve secure transactions with tamper-proof digital records of ownership. Let’s say goodbye to fraud risks and hello to streamlined processes.',
  },
];
const AccelerateYourFinanceFunctionsCardData = [
  {
    img: '/star-rank-1.svg',
    title: 'Exceptional service delivery',
    description: 'We provide leading financial software solutions for enhanced efficiency, lower fees, and blockchain-enabled transformations.'
  },
  {
    img: '/Fraud-protection.svg',
    title: 'Fraud protection',
    description: 'Combat fraud with secure blockchain solutions, ensuring compliance without third-party involvement.'
  },
  {
    img: '/Insight-and-wisdom.svg',
    title: 'Insight and wisdom',
    description: 'Leverage our industry expertise for user-friendly data analysis driven by distributed ledger technology.'
  },
  {
    img: '/Faster-payments.svg',
    title: 'Faster payments, lower costs',
    description: 'Facilitate fast global payments 24/7, reducing costs on transfers and remittances.'
  },
  {
    img: '/Risk-management-simplified.svg',
    title: 'Risk management simplified',
    description: 'Develop real-time risk prediction tools for effective management of major risks.'
  },
  {
    img: '/Automated-testing.svg',
    title: 'Automated testing',
    description: 'Perform quick smoke tests, minimize test failures, gain confidence in code changes, avoid manual work, and achieve faster delivery.'
  },
  {
    img: '/Frequent-delivery.svg',
    title: 'Frequent delivery',
    description: 'Optimize delivery cycles to identify and address bottlenecks, ensuring progress and informed resource allocation.'
  },
  {
    img: '/Product-Focus.svg',
    title: 'Product Focus',
    description: 'We review goals and roadmaps, align real business and user value, and minimize dependencies to deliver market-ready fintech product solutions.'
  },
  {
    img: '/Tailored-collaboration.svg',
    title: 'Tailored collaboration and guidance',
    description: 'Our fintech app developers ensure your financial software stays adaptable to market changes.'
  },
  {
    img: '/Platform-agnostic-development.svg',
    title: 'Platform-agnostic development',
    description: 'We build cross-platform fintech applications across diverse operating systems and devices to ensure a holistic and immersive user experience.'
  },
]

const keyTechnologiesData = [
  {
    img: "/cloud-advantage.svg",
    title: 'Cloud Advantage',
    description: 'Secure access, scalability, and lower costs by leveraging our cloud-first solutions and integrated DevOps practices.',
  },
  {
    img: "/blockchain-security.svg",
    title: 'Blockchain Security',
    description: "Trace freight origins, secure transactions, and automate customs clearance with smart contracts.",
  },
  {
    img: "/connected-vehicles.svg",
    title: 'Telematics and Connected Vehicles',
    description: 'Implement telematics solutions for data-driven fleet management, route optimization, and operational safety through automated trip logging',
  },
  {
    img: "/connectivity-iot.svg",
    title: 'Connectivity and IoT',
    description: 'Harness IoT sensors, digital twins, and 5G technology for fleet control, ensuring strong link between business infrastructure and transport management systems.',
  },
  {
    img: "/intelligent-chatbots.svg",
    title: 'Intelligent Chatbots',
    description: 'Handle basic inquiries, collect valuable data, and automate tasks, freeing your staff to focus on more complex issues around the clock with our chatbots.',
  },
  {
    img: "/big-data.svg",
    title: 'Big Data & Data Science',
    description: 'Make data-driven decisions by managing customer demand, warehouse operations, and logistics performance in a data-rich environment.',
  },
  {
    img: "/ml-ai.svg",
    title: "Machine Learning & AI",
    description: 'Automate processes, enhance decision-making and reduce costs through quick data analysis and predictive insights.',
  },
];

const realEstateIntegrationData = [
  {
    content: [
      {
        img: "/rets-logo.svg",
      },
      {
        img: "/idx-logo.svg",
      },
      {
        img: "/ftp-logo.svg",
      },
    ],
    title: 'IDX',
  },
  {
    content: [
      {
        img: "/salesforce-logo.svg",
      },
      {
        img: "/zoho-crm-logo.svg",
      },
      {
        img: "/dynamics-365.svg",
      },
    ],
    title: 'CRM',
  },
  {
    content: [
      {
        img: "/google-maps.svg",
      },
      {
        img: "/mapbox-logo.svg",
      },
    ],
    title: 'Property Map Integration',
  },
  {
    content: [
      {
        img: "/stripe-logo.svg",
      },
      {
        img: "/paypal-logo.svg",
      },
      {
        img: "/square-logo.svg",
      },
      {
        img: "/braintree-logo.svg",
      },
    ],
    title: 'Payment Gateways',
  },
  {
    content: [
      {
        img: "/re-facebook-logo.svg",
      },
      {
        img: "/re-twitter-logo.svg",
      },
      {
        img: "/re-linkedin-logo.svg",
      },
    ],
    title: 'Social Media',
  },
  {
    content: [
      {
        img: "/google-analytics-logo.svg",
      },
      {
        img: "/ableau-logo.svg",
      },
      {
        img: "/power-bi-logo.svg",
      },
    ],
    title: 'Analytics and Reporting',
  },
  {
    content: [
      {
        img: "/docusign.svg",
      },
      {
        img: "/adobe-sign-logo.svg",
      },
      {
        img: "/google-drive-logo.svg",
      },
      {
        img: "/dropbox-logo.svg",
      },
    ],
    title: 'Document Management Systems',
  },
  {
    content: [
      {
        img: "/unity-logo.svg",
      },
      {
        img: "/arkit-logo.svg",
      },
      {
        img: "/arcore-logo.svg",
      },
      {
        img: "/webvr-logo.svg",
      },
    ],
    title: 'Virtual & Augmented Reality',
  },
  {
    content: [
      {
        img: "/aws-iot-logo.svg",
      },
      {
        img: "/google-cloud-logo.svg",
      },
      {
        img: "/azure-iot-hub-logo.svg",
      },
    ],
    title: 'IoT Integration',
  },
];

const supplyChainData = [
  {
    content: [
      {
        img: "/quick-book.svg",
      },
      {
        img: "/xero.svg",
      }
    ],
    title: 'Accounting Software',
  },
  {
    content: [
      {
        img: "/sap-logo.svg",
      },
      {
        img: "/sales-force.svg",
      },
      {
        img: "/oracle-netsuite.svg",
      },
    ],
    title: 'ERP',
  },
  {
    content: [
      {
        img: "/google-map-logo.svg",
      },
      {
        img: "/here-logo.svg",
      },
      {
        img: "/oracle-logo.svg",
      },
    ],
    title: 'Maps and Navigation',
  },
  {
    content: [
      {
        img: "/hubspot.svg",
      },
      {
        img: "/oracle-netsuite2.svg",
      },
      {
        img: "/sales-force.svg",
      }
    ],
    title: 'CRM',
  },
  {
    content: [
      {
        img: "/shiptify.svg",
      },
      {
        img: "/shippo.svg",
      },
      {
        img: "/logistas.svg",
      },
    ],
    title: 'TMS',
  },
  {
    content: [
      {
        img: "/asset-pandas.svg",
      },
      {
        img: "/upkeep.svg",
      },
      {
        img: "/maintainx.svg",
      },
    ],
    title: 'Asset Tracking',
  },
  {
    content: [
      {
        img: "/skuvault.svg",
      },
      {
        img: "/oracle-netsuite.svg",
      },
      {
        img: "/zoho-inventory.svg",
      }
    ],
    title: 'WMS',
  },
];

const LogisticsFaqs = [
  {
    id: 1,
    title: 'How can logistics and supply chain software solutions improve the efficiency of my operations?',
    content: (
      <div className="faq-content">
        <span>Below are ways logistics and supply chain software solutions can improve the efficiency of your operations:</span>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Process Automation</p>
          <span>Automate routine tasks like order processing and inventory management, reducing manual errors and speeding up operations.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Smarter Route Planning</p>
          <span>Integrate advanced algorithms to determine the most efficient delivery routes, saving time and fuel costs.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Inventory Management</p>
          <span>Track inventory in real-time to ensure optimal stock levels, reducing excess inventory and stockouts.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Data Integration</p>
          <span>Integrate data from various sources to provide a unified view of operations, facilitating better decision-making.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Real-Time Tracking</p>
          <span>Achieve up-to-the-minute updates on shipment locations and statuses.</span>
        </div>
        <div>
          <p className="text-h5 fw-bold">Predictive Analytics</p>
          <span>Receive historical data to forecast demand and streamline resources, helping to anticipate and mitigate potential disruptions.</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What are the key challenges that logistics and supply chain software development aims to address?',
    content: (
      <div className="faq-content">
        <span>Below are key challenges that logistics and supply chain software development aims to address:</span>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Faster deliveries and reduced costs</p>
          <span>Optimize routes, decrease delivery times, and streamline operations to save up to 35%.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Real-time visibility</p>
          <span>Gain instant insights into your fleet, inventory, and shipments for informed decisions.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Enhanced tracking and transparency</p>
          <span>Track products seamlessly and share data with suppliers and carriers to build trust.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Secure transactions and accurate orders</p>
          <span>Attackproof your finances with hi-tech barcode scanning for 25% higher order accuracy.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Improved communication and collaboration</p>
          <span>Break down silos with streamlined communication and reporting for a unified team.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Supplier-carrier relations</p>
          <span>Strengthen supplier-carrier relationships through transparent and collaborative systems.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Intelligent automation</p>
          <span>Automate repetitive tasks and use telematics for data-driven fleet management.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Mobile asset management</p>
          <span>Track and manage assets across the supply chain with GPS, RFID, UWB, and barcode scanning.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Extensive device compatibility</p>
          <span>Ensure your software works smoothly with any device for optimal data collection.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Workforce optimization</p>
          <span>Enhance employee performance, increase resource allocation, and reduce downtime.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Empower your workforce, anywhere</p>
          <span>Foster collaboration with location-based tech and accessible logistics software solutions.</span>
        </div>
        <div>
          <p className="text-h5 fw-bold">End-to-end engagement</p>
          <span>Empower your team and satisfy customers with real-time tracking and updates.</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'How can your software solutions help with real-time tracking and visibility of shipments in transit?',
    content: (
      <div className="faq-content">
        <span>We integrate these modern logistics software solutions to help with real-time tracking and visibility of shipments in transit.</span>
        <ul>
          <li>GPS Tracking</li>
          <li>IoT Sensors</li>
          <li>Intuitive Dashboard</li>
          <li>Automated Alerts</li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'What analytics and reporting capabilities can be integrated into the logistics and supply chain software?',
    content: (
      <div className="faq-content">
        <span>The following are types of analytics and reporting that can be integrated into logistics and supply chain software.</span>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Customizable Reports</p>
          <span>Generates detailed reports on various aspects of the supply chain, such as inventory levels, shipment status, and delivery performance.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Dashboard Visualizations</p>
          <span>Provides intuitive visual representations of data for quick insights.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Predictive Analytics</p>
          <span>Uses machine learning algorithms to forecast demand, identify trends, and enhance operations.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">KPIs Monitoring</p>
          <span>Tracks key performance indicators (KPIs) to assess and improve operational efficiency.</span>
        </div>
        <div>
          <p className="text-h5 fw-bold">Real-Time Data Analysis</p>
          <span>Offers real-time data analysis to support immediate decision-making.</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Can the software be tailored to integrate with our existing logistics and supply chain systems and software?',
    content: (
      <div className="faq-content">
        <span>Yes, the software can be tailored to integrate with your existing logistics and supply chain systems and software with</span>
        <ul>
          <li>APIs integrations</li>
          <li>Custom connectors</li>
          <li>Middleware solutions</li>
          <li>Data mapping and transformation</li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: "What is your development team's logistics and supply chain expertise?",
    content: (
      <div className="faq-content">
        <div className="mb-4">
          <p className="text-h5 fw-bold">Industry Knowledge</p>
          <span>Possesses a deep understanding of logistics and supply chain processes and challenges.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Technical Skills</p>
          <span>Is proficient in the latest technologies, including IoT, AI, machine learning, and blockchain.</span>
        </div>
        <div className="mb-4">
          <p className="text-h5 fw-bold">Project Experience</p>
          <span>Has a proven track record of successfully delivering logistics and supply chain software projects.</span>
        </div>
        <div>
          <p className="text-h5 fw-bold">Continuous Learning</p>
          <span>Is committed to staying updated with industry trends and technological advancements.</span>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'How do you handle ongoing software maintenance, updates, and technical support?',
    content: (
      <div className="faq-content">
        <span>We take a comprehensive approach to handling ongoing software maintenance, updates, and technical support.</span>
        <span>Our technical support offers various assistance levels, from basic troubleshooting to comprehensive service level agreements (SLAs). We also conduct training sessions to help your team use the software effectively. A feedback loop is established to improve the software based on user input continuously.</span>
      </div>
    ),
  },
]

const FinTechChallengesCardsData = [
  {
    img: '/Security-threats-1.svg',
    heading: 'Security threats vs. security control',
    text: "Protect your users' trust. Our hyper-vigilant finance developers execute encrypted communication, automated threat detection, and continuous monitoring to safeguard sensitive financial data from hackers."
  },
  {
    img: '/Catch-22-vs.svg',
    heading: 'Catch-22 vs. regulatory compliance',
    text: "Navigate regulations with ease and innovation. Leverage our automated compliance services for online identity verification (KYC), anti-money laundering (AML) checks, and regulatory reporting to ensure your app is legal and avoids future roadblocks."
  },
  {
    img: '/Old-systems.svg',
    heading: 'Old systems + new app = interoperability',
    text: "Don't get lost in the legacies! Our fintech developers create custom solutions to bridge the gaps between new fintech apps and old systems using modern APIs or middleware to ensure smooth data flow."
  },
  {
    img: '/Tripping-performance.svg',
    heading: 'Tripping performance vs. resilient performance',
    text: "Let’s build for boom times. Embrace scalable software infrastructure, such as cloud computing, microservices architecture, and containerization, to achieve system stability even during peak times."
  },
  {
    img: '/Dropping-experiences.svg',
    heading: 'Dropping experiences vs. driving customer happiness',
    text: "Deliver intuitive user experiences through responsive UX/UI designs, user testing platforms, and low-code development to satiate your customers and achieve higher retention rates."
  },
  {
    img: '/Unskilled-developers .svg',
    heading: 'Unskilled developers vs. industry-grade developers',
    text: "Finding tech-savvy and financially fluent developers can be challenging. Qbatch’s well-trained developers offer commitment, research, and knowledge to help achieve fintech goals."
  },
]

const FinTechAppDevelopmentServicesCardData = [
  {
    img: '/Mobile-Banking-Apps.svg',
    heading: 'Mobile Banking Apps',
    text: 'Reach the mobile-first generation with secure and user-friendly apps for account management, payments, transfers, budgeting, and more.'
  },
  {
    img: '/Digital-Wallets.svg',
    heading: 'Digital Wallets',
    text: 'Deliver seamless and secure money management for your users, enabling easy fund transfers, payments, and financial transactions.'
  },
  {
    img: '/Neobanking-&-Online.svg',
    heading: 'Neobanking & Online Banking Services',
    text: 'Build a fully digital and customer-centric neobank platform, offering modern banking services like account management payments, transfers, budgeting tools, and more.'
  },
  {
    img: '/Payment-Processing-Systems.svg',
    heading: 'Payment Processing Systems',
    text: 'Develop custom digital wallets and P2P platforms POS, QR payments, and recurring billing, ensuring secure and efficient transaction solutions.'
  },
  {
    img: '/Money-Transfer-Services.svg',
    heading: 'Money Transfer Services',
    text: 'Develop a hassle-free remittance solution for domestic and international transfers, prioritizing speed, security, and convenience.'
  },
  {
    img: '/Currency-Exchange.svg',
    heading: 'Currency Exchange',
    text: 'Facilitate transparent and competitive currency conversions with real-time exchange rates and secure transactions.'
  },
]

const FinTechBeyondTheBasicsCardData = [
  {
    img: '/Crypto-Blockchain.svg',
    heading: 'Crypto, Blockchain, and Web3 Solutions',
    text: 'Leverage blockchain and cryptocurrencies for P2P lending, crypto wallets, smart contracts, and decentralized exchanges, offering faster, safer financial operations.'
  },
  {
    img: '/Digital-Insurance.svg',
    heading: 'Digital Insurance Platforms',
    text: 'Provide on-the-go insurance services with automated underwriting, policy management, and claims processing powered by data analytics and algorithms.'
  },
  {
    img: '/Lending-&-Mortgage.svg',
    heading: 'Lending & Mortgage Platforms',
    text: 'Ease loan and mortgage processes connect borrowers with lenders, providing credit score gathering, income verification, and automated decision-making tools.'
  },
  {
    img: '/Personal-Wealth.svg',
    heading: 'Personal Wealth Management',
    text: 'Offer sophisticated financial management solutions for your clients, enabling them to track, manage, and grow their wealth.'
  },
  {
    img: '/Trading-&-Securities.svg',
    heading: 'Trading & Securities Platforms',
    text: 'Empower users to buy and sell stocks, bonds, and derivatives with advanced order types, market data analysis tools, and informed decision-making support.'
  },
  {
    img: '/Robo-advisors.svg',
    heading: 'Robo-advisors',
    text: 'Integrate automated investment advice functionality to simplify investing for your clients without spending hours understanding how stocks and auctions operate.'
  },
]

const TechnologyToFastTrackSliderData = [
  {
    image: '/Cloud-Power.svg',
    title: 'Cloud Power',
    content: 'Your fintech application scales effortlessly, handling any user rush and workload fluctuations. Users enjoy high availability, reliability, and performance – anytime, anywhere, on any device.',
  },
  {
    image: '/AI-and-ML.svg',
    title: 'AI and ML for smarter decisions',
    content: 'Analyze data, predict trends, and make winning choices. Our financial app developers help you with personalized financial recommendations, robust fraud detection, and algorithmic trading.',
  },
  {
    image: '/Blockchain-for-secure.svg',
    title: 'Blockchain for secure transactions',
    content: 'Benefit from secure and transparent transactions with blockchain technology. Eliminate the need for intermediaries with immutable records to guarantee data integrity and reduce fraud risk with cryptographic techniques.',
  },
  {
    image: '/IoT-for-real-time.svg',
    title: 'IoT for real-time insights',
    content: 'Track everything with connected devices and make data-driven decisions. Users can track financial activity, monitor spending patterns, and receive personalized insights, leading to better financial product management and planning.',
  },
  {
    image: '/Effortless-API.svg',
    title: 'Effortless API integration',
    content: 'Connect your app to anything with third-party services, data sources, and financial institutions using robust APIs. Optimize workflows and enhance payment processing, account aggregation, and lending interoperability.',
  },
  {
    image: '/Boost-efficiency.svg',
    title: 'Boost efficiency with RPA',
    content: 'Robots handle repetitive tasks, freeing your team for more important things. Our fintech software solutions eliminate manual errors, reduce processing times, and free up valuable human resources for more strategic activities.',
  },
  {
    image: '/Biometric-authentication.svg',
    title: 'Biometric authentication for secure logins',
    content: "Fingerprint or facial recognition keeps your users' money safe, mitigates fraud risks, and complies with stringent security standards. With biometric tech, let’s provide a secure and convenient user experience.",
  },
  {
    image: '/Mobile-first-focus.svg',
    title: 'Mobile-first focus',
    content: 'Develop and integrate mobile wallets and payment gateways for secure, cross-border transactions. Integrate multi-payment methods and currencies for user comfort and facility.',
  }
];

const servicesPageData = [
  {
    img: '/dev-service-box-img-1.svg',
    title: 'Full Stack Software Development',
    description: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: '/dev-service-box-img-2.svg',
    title: 'Enterprise Software Development Solutions',
    description: 'With deeper expertise in modern technologies and a team dedicated to delivering foolproof results, we offer viable and cross-platform software solutions for your business that minimize market risks and maximize monetary results.',
    buttonText: 'Explore More',
    buttonLink: '/services/enterprise-software-development', 
  },
  {
    img: '/dev-service-box-img-3.svg',
    title: 'Mobile App Development',
    description: 'As custom web developers, we focus on both back-end and front-end systems to deliver amusing user experiences. Our Agile approach ensures on-time, on-budget product delivery with 100% stable, crash-free code.',
    buttonText: 'Explore More',
    buttonLink: '/services/mobile-app-development', 
  },
  {
    img: '/dev-service-box-img-4.svg',
    title: 'Business Process Automation',
    description: 'Tired of monitoring internal and external E-commerce operations manually? Let’s automate routine operations and slow business workflows including chatbots, sales forecasting, order entry, and fulfillment. No more manual work — less effort and great results only!',
    buttonText: 'Explore More',
    buttonLink: '/services/e-commerce-automation/', 
  },
  {
    img: '/dev-service-box-img-5.svg',
    title: 'CTO as a Service',
    description: 'Your digital journey can be challenging and unique but well-informed leadership and technical guidance can lead you to successful technology adoption. We are your trusted tech allies dedicated to providing and executing a sustainable roadmap per your business needs.',
    buttonText: 'Explore More',
    buttonLink: '/services/cto-as-a-service', 
  },
  {
    img: '/dev-service-box-img-6.svg',
    title: 'Software Product Design',
    description: 'Jaw-dropping, navigable, and accessible interfaces await you! We highly believe design and code are only devices of expression. What sets our work apart is people who deliver an intuitive visual appeal giving your people what they need to see and experience.',
    buttonText: 'Explore More',
    buttonLink: '/services/product-design-development', 
  },
  {
    img: '/dev-service-box-img-7.svg',
    title: 'MVP Development',
    description: 'Tired of monitoring internal and external E-commerce operations manually? Let’s automate routine operations and slow business workflows including chatbots, sales forecasting, order entry, and fulfillment. No more manual work — less effort and great results only!',
    buttonText: 'Explore More',
    buttonLink: '/services/mvp-development/', 
  },
  {
    img: '/dev-service-box-img-8.svg',
    title: 'DevOps and Cloud Computing',
    description: 'You no longer have to spend time sharing files back and forth with your team members. DevOps and cloud computing allow us to accelerate automation and workflows to help you achieve easier collaboration & simpler data management.',
    buttonText: 'Explore More',
    buttonLink: '/services/devops', 
  },
  {
    img: '/dev-service-box-img-9.svg',
    title: 'Application Modernization',
    description: 'Don’t block your success due to cost and time constraints. Bid farewell to your legacy system and leverage our Application Modernization Services featuring helpful cloud-native microservices. Rapidly innovate and refactor without any technical debt risks.',
    buttonText: 'Explore More',
    buttonLink: '/services/mobile-app-development', 
  },
  {
    img: '/dev-service-box-img-10.svg',
    title: 'Browser Extension Development',
    description: 'Your “I wish this site had that feature” wish comes true with our highly customizable and fast-performing browser extensions, plug-ins, toolbars, and add-ons. We leverage modern technologies for robust browser extensions for Chrome, Safari, Edge, Firefox, and Brave.',
    buttonText: 'Explore More',
    buttonLink: '/services/browser-extension-development/', 
  },
  {
    img: '/dev-service-box-img-11.svg',
    title: 'Web Data Scraping and Extraction',
    description: 'We specialize in unclogging data streams, eliminating the mess using top-tier proxy networks, powerful web scrapers, and a trusted data team scraping at Qbatch. Extract important data and march toward actionable business intelligence with our expert assistance.',
    buttonText: 'Explore More',
    buttonLink: '/services/web-and-data-scraping', 
  },
];
const industriesPageData = [
  {
    img: '/EdTech-1.svg',
    title: 'EdTech: Revolutionizing Learning Experiences',
    description: 'We blend technology and pedagogy to create tools that engage, educate, and evolve the way learners learn and educators teach. From LMS to gamified apps, the classroom will never look the same again.',
    buttonText: 'Explore More',
    buttonLink: '/industries/education-software-development/', 
  },
  {
    img: '/FinTech-1.svg',
    title: 'FinTech: Future-Proofing Financial Ecosystems',
    description: 'We design secure, innovative financial platforms that redefine how money moves, is managed, and multiplies in the digital age. Trust us to power your next big breakthrough.',
    buttonText: 'Explore More',
    buttonLink: '/industries/fin-tech-app-development/', 
  },
  {
    img: '/PropTech-1.svg',
    title: 'PropTech: Simplifying Real Estate for the Digital Era',
    description: 'From virtual tours to digital lease management, our solutions make real estate seamless, secure, and scalable for brokers, landlords, and renters alike.',
    buttonText: 'Explore More',
    buttonLink: '/industries/real-estate/', 
  },
  {
    img: '/HealthTech-1.svg',
    title: 'HealthTech: Empowering Lives with Precision',
    description: 'We develop platforms that bring telemedicine, AI diagnostics, and health monitoring to your fingertips. The future of healthcare is proactive, not reactive.',
    buttonText: 'Explore More',
    buttonLink: '/industries/health-care/', 
  },
  {
    img: '/RetailTech-1.svg',
    title: 'RetailTech: Seamlessly Blending Offline and Online',
    description: 'From inventory management to omnichannel experiences, we empower retailers to meet customers wherever they are—with precision and personalization.',
    buttonText: 'Explore More',
    buttonLink: '/industries/retail-software-development/', 
  },
  {
    img: '/Logistics-2.svg',
    title: 'Logistics and Supply Chain: From Chaos to Clarity',
    description: 'We design platforms that bring transparency and efficiency to supply chains, from route optimization to real-time tracking.',
    buttonText: 'Explore More',
    buttonLink: '/industries/logistics/', 
  },
  {
    img: '/Travel-1.svg',
    title: 'Travel & Hospitality: Tech-Driven Guest Experiences',
    description: 'We design digital solutions that elevate experiences, from booking systems to real-time travel assistance and hospitality management tools.',
    buttonText: 'Explore More',
    buttonLink: '/industries/travel-app-development/', 
  },
  {
    img: '/Ecommerce-1.svg',
    title: 'Ecommerce: Seamless, Scalable Online Shopping',
    description: 'From seamless shopping experiences to robust inventory and payment systems, we provide the tools you need to thrive in a competitive landscape. Let’s make your ecommerce vision a reality.',
    buttonText: 'Explore More',
    buttonLink: '/industries/ecommerce-software-development/', 
  },
];

export {
  dedicationWork,
  homeTiles,
  CareersData,
  values,
  webScrapingFaq,
  companyCounter,
  peopleFirstData,
  counterData,
  counterData2,
  counterData3,
  productDesignCounterData,
  weDoData,
  data,
  sliderItems,
  ecomSliderItems,
  ecomLogos,
  projects,
  fullCycle,
  SaasDevelop,
  marketPlaceData,
  webAppFaq,
  revenueData,
  servicesSliderData,
  devOpsSliderData,
  SaasSliderData,
  automationData,
  lostToLaunched,
  faqQuestion,
  ecomFaqQuestion,
  technicalGuidanceData,
  youCanTrustData,
  lostToLaunchedItems,
  languagesData,
  SaaslanguagesData,
  webExpertiseData,
  dedicatedTiles,
  multiPlatformData,
  developmentServicesData,
  mobileAppFaq,
  ecomIndustry,
  enterPrisFaq,
  hireDeveloper,
  choiceEnterpriseData,
  customEnterpriseData,
  cycleProductData,
  developmentExpertiseData,
  SaasProduct,
  technologicalCapacityData,
  whyDevOpsData,
  productDesignData,
  ctoList,
  productDesignlist,
  softwareProductData,
  developmentProcessData,
  productDesignFaq,
  whyChooseQbatchData,
  productDevlopmentServices,
  devOpsFaq,
  saasFaq,
  educationFaq,
  AffordableHiringData,
  FourStepsProcessData,
  hassleData,
  DevData,
  cardsData,
  RemoteDeveloperData,
  titleData,
  tileData,
  trackerLabelData,
  dataColumn1,
  dataColumn2,
  dataColumn3,
  dataColumn4,
  discoverQbatchMenu,
  servicesItems,
  industrieshMenu,
  footerContactData,
  footerBottomMenu,
  footerServicesItems,
  footerSocialLinks,
  extensionFaq,
  extensionSliderItems,
  extensionLanguages,
  bewareFriend,
  mvpSliderItems,
  mvpBoxes1,
  mvpBoxes2,
  mvpDevService,
  personal,
  mvpDevFaq,
  OurSaasData,
  EduForAll,
  GridData,
  AdvanceSaasData,
  extensionTypes,
  EdTechData,
  EducationSlider,
  EduFeatures,
  EduIntigrations,
  EduCommitment,
  EduTech,
  cardData,
  EdTechPotentialData,
  HealthcareAppDevelopmentCards,
  listItem1,
  listItem2,
  FrequentlyAskedQuestionsHealthCareFaq,
  HumanizingHealthcareSliderData,
  StartYourHealthTechData,
  weDoDataNew,
  achievementsData,
  collaborationData,
  technologythrivesData,
  projectDiscoveryData,
  provenProcessData,
  homeStoriesData,
  helpingCardData,
  careerCardData,
  MattersQbatchCardsData,
  WhyTrustQbatchData1,
  WhyTrustQbatchData2,
  recapEventsData,
  pressReleaseData,
  retailData,
  coreRetailData,
  RetailSliderData,
  ImagineRetailExperienceData,
  InnovativeRetailSolutionsData,
  ExploreOurIndustrySpecificRetailPotentialData,
  SimplifyYourRetailData,
  RetailSoftwareDevelopmentFaq,
  ImagineTravelAppData,
  TravelSliderData,
  TravelSolutionsData,
  dataTravelApplications,
  SimplifyYourTravelData,
  ImagineTravelAppData2,
  TravelSoftwareDevelopmentFaq,
  TravelLanguagesData,
  PowerfulRetailSolutionsCardData,
  dataGenericTravelApps,
  realEstateIndustryData,
  properyBusinessData1,
  properyBusinessData2,
  ecomBenifits1,
  ecomBenifits2,
  RealEstateITSolutionsData,
  eventsImageGroups,
  eventsMobileImgs,
  realEstateSliderData,
  ecommerceSolutions,
  onDemandFeaturesData,
  servicesData,
  reInnovationsData,
  commerceService,
  realEstateIntegrationData,
  ecommerceBusinessData,
  ecommerceFeaatures,
  logisticsSofwareData,
  customLogisticsData,
  LogisticsSupplyChainData,
  PeopleWeHaveData,
  keyTechnologiesData,
  StartYourLogisticsData,
  LogisticsFaqs,
  supplyChainData,
  FinTechChallengesCardsData,
  FinTechAppDevelopmentServicesCardData,
  FinTechBeyondTheBasicsCardData,
  TechnologyToFastTrackSliderData,
  SimplifyYourRetaiFintechAppDevelopmentProcessData,
  FinTechAppDevelopmentFAQ,
  AccelerateYourFinanceFunctionsCardData,
  collaborationDataNew,
  servicesPageData,
  industriesPageData,
  FrequentlyAskedQuestionsIndustryFaq
}
