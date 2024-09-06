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
    to: '/about/#freshteam-widgets',
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
];

const industrieshMenu = [
  {
    name: 'E-Commerce',
    to: '#',
  },
  {
    name: 'Logistics & Supply Chain',
    to: '#',
  },
  {
    name: 'FinTech',
    to: '#',
  },
  {
    name: 'Healthcare',
    to: '#',
  },
  {
    name: 'EdTech',
    to: '/industries/education-software-development/',
  },
  {
    name: 'Retail and Consumer Goods',
    to: '#',
  },
  {
    name: 'Travel & Transportation',
    to: '#',
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
    img: '/facebook-filled',
    to: 'https://www.facebook.com/qbatch/',
  },
  {
    img: '/instagram-filled',
    to: 'https://www.instagram.com/qbatch/',
  },
  {
    img: '/linkedin-filled',
    to: 'https://www.linkedin.com/company/qbatch/',
  },
  {
    img: '/twitter-filled',
    to: 'https://x.com/qbatchofficial',
  },
  {
    img: '/behance-filled',
    to: 'https://www.behance.net/qbatch',
  },
  {
    img: '/youtube-filled',
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
    img: '/quality-standards.svg',
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

const weWorkStoriesData = [
  {
    img: '/sales-support-new.png',
    logo: '/sales-support-new-logo.svg',
    category: 'Supply Chain',
    title: 'Sales.support Launches 1000+ Thriving Amazon Businesses Leveraging Qbatch’s Software Solutions'
  },
  {
    img: '/saleha-img.svg',
    logo: '/saleha_logo.svg',
    category: 'Fin-Tech',
    title: 'From Fragmented Finance to Streamlined Solutions: Sahelha & Qbatch Revolutionize Debt Crowdfunding'
  }
]

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
  weDoDataNew,
  achievementsData,
  collaborationData,
  technologythrivesData,
  projectDiscoveryData,
  provenProcessData,
  homeStoriesData,
  weWorkStoriesData
}
