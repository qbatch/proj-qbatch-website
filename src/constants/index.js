import React from "react";
const weDoData = [
  { icon: "/lounch-icon.svg", title: "Develop an MVP", desc: "Launch foolproof MVPs that stand \n the test of time." },
  { icon: "/expand-icon.svg", title: "Expand Your Team", desc: "Get the best returns on investment \n with our hi-tech industry experts." },
  { icon: "/advice-icon.svg", title: "Get CTO’s advice", desc: "Know what the market leaders have to \n say to grow your technical footprint." },
  { icon: "/create-design-icon.svg", title: "Create a design", desc: "We live and breathe design thinking. \n Take advantage!" },
  { icon: "/transform-icon.svg", title: "Transform your enterprise", desc: "Stop chasing the trends and start building \n your enterprise differentiator." },
  { id: 6 },
];
const counterData = [
  { id: 1, count: 150, desc: 'Full Stack Developers', symbol: '+' },
  { id: 2, count: 300, desc: 'Solutions Delivered \n Successfully', symbol: '+' },
  { id: 3, count: 98, desc: 'Customer Happiness \n Index', symbol: '%' },
  { id: 4, count: 10, desc: 'Years of Excellency', symbol: '' },
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
  { id: 1, count: 150, desc: "Full Stack Developers", symbol: "+"},
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
  { id: 2, icon: '/people-first-icon-2.svg', desc: "Logistics & Supply Chain"},
  { id: 3, icon: '/people-first-icon-3.svg', desc: "FinTech"},
  { id: 4, icon: '/people-first-icon-4.svg', desc: "Healthcare"},
  { id: 5, icon: '/people-first-icon-5.svg', desc: "EdTech"},
  { id: 6, icon: '/people-first-icon-6.svg', desc: "Retail & Consumer Goods"},
  { id: 7, icon: '/people-first-icon-7.svg', desc: "Travel & Transportation",},
  { id: 8, icon: '/iot.svg', desc: "IoT",}
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
  { id: 3, icon: '/e-platform.svg', desc: 'E-learning Platforms' },
  { id: 4, icon: '/online-marketplaces.svg', desc: 'Online Marketplaces' },
  { id: 5, icon: '/data-visulations.svg', desc: 'Data Visualization Dashboards' },
  { id: 6, icon: '/content-management.svg', desc: 'Content Management Platforms' },
  { id: 7, icon: '/location-based.svg', desc: 'Location-based Apps' },
  { id: 8, icon: '/warehouse-management.svg', desc: 'Warehouse Management Systems' },
  { id: 9, icon: '/online-streaming.svg', desc: 'Online Streaming Platforms' },
  { id: 10, icon: '/booking-apps.svg', desc: 'Booking Apps' },
  { id: 11, icon: '/on-demand-services.svg', desc: 'On-demand services platforms' },
  { id: 12, icon: '/sap-enterprises.svg', desc: 'SAP Enterprises Tools' },
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
    content: 'We stay in touch with you for technical support on a long-term basis or as required.',
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
    image: ['/amazon.svg', '/walmart.svg', '/ebay.svg', '/etsy.svg', '', '', ''],
    title: 'Marketplace',
  },
  {
    image: ['/shopify.svg', '/woo-commerce.png', '/amazon-vendor.png', '/kindle.svg', '', '', ''],
    title: 'Platform',
  },
  {
    image: [
      '/amazon-seller.webp',
      '/amazon-shipping.png',
      '/amazon-product.png',
      '/amazon-business.png',
      '/ebay.svg',
      '/walmart.svg',
      '',
    ],
    title: 'API’s',
  },
  {
    image: ['/keepa.svg', '/rainforest-api.svg'],
    title: '3rd Party API’s',
  },
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
        desc: "Amazon Web Service"
      },
      {
        img: "/google-platform.svg",
        desc: "Google Cloud Platform"
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
const ecomLogos = ["/blue-ware.svg","/ecom-circle-logo.svg","/north-ware.svg","/one-app.svg","/keurig-logo.svg","/sales-support-logo.svg"]

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
    title: "Machine Learning (ML))",
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
    id: 9,
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
    id: 10,
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
const guidanceData = [
  {
    image: '/vertical-aligmnet.svg',
    title: 'Vision and Future Alignment',
    content: 'Build a roadmap that elevates your technical strategy, objectives, and operations to achieve a holistic digital footprint powering associated people, processes, and possibilities with our CTO consulting services. Let’s turn your vision into victory.',
  },
  {
    image: '/leading-and-scaling-teams.svg',
    title: 'Leading and Scaling  Teams',
    content: 'Your development team decides and shapes the future of the entire business. Thus we keep the bar high when it comes to tech leadership and management. Enjoy proficient team management, process optimization, and daily reporting with our CTO services.',
  },
  {
    image: '/strategic-procurement-and-cost-optimization.svg',
    title: 'Strategic Procurement and Cost Optimization',
    content: 'Technology expenses can quickly escalate if the"build vs. buy" analysis goes wrong with suppliers and vendors. Our CTO advisory services develop a problem-solution fit by running iterations and finding critical areas that truly require investment. ',
  },
  {
    image: '/technical-audit.svg',
    title: 'Technical Audits, Due Diligence, and Change Management',
    content: 'We dive deeper into the technical risks associated with your business processes and strategy, conduct audits, prepare you for due diligence, and prescribe rock-solid change management roadmaps toward total digital transformation and delivery across the company.',
  },
  {
    image: '/system-engineering-and-design.svg',
    title: 'System Engineering and Design',
    content: 'You cannot fully grasp the technical aspects of a software product if you lack technical depth and knowledge. Leverage our CTO expertise and insight to demonstrate, develop, and design low-risk and hi-tech enterprise systems',
  },
  {
    image: '/technical-audit.svg',
    title: 'Technology Integration and Analysis',
    content: 'Discover whether your business requires technical fixing or a total overhaul to assure zero downtime, accessibility, and enterprise-wide information exchanges. Eliminate software bloat and build technical resilience with our impeccable CaaS providers.',
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
    description: 'Got a powerful idea but cannot cope with a tech part?',
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
    number:1,
    heading: "Tell us your requirements",
    text: "We carefully understand your needs, goals, and dynamics.",
  },
  {
    img: '/arrow-line.svg',
    number:2,
    heading: "Meet A-grade developers",
    text: "We screen the most suitable developer profiles & present them to you within 24 hours.",
  },
  {
    img: '/arrow-line.svg',
    number:3,
    heading: "Find the right fit",
    text: "Meet the devs and find your best match. We take care of the rest!",
  },
  {
    number:4,
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
    number:60,
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
    img:  '/dev-match-time-1.svg',
    number: 48,
    sign: "hr",
    heading: "Dev Match Time",
  },
]
const DevData = [
  {
    img:<img className="image-wrapper" src='/left-arrow.svg' />,
    heading:'Dev replacement guarantee',
    text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
  },
  {
    img: <img className="image-wrapper" src="/right-arrow.svg" />,
    heading:'Comprehensive weekly reports',
    text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
  },
  {
    img: <img className="image-wrapper" src='/left-arrow.svg' />,
    heading:'On-the-go support',
    text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
  },
  {
    heading:'Total product mindset',
    text:' Developers missing deadlines? We will provide you with additional resources without changing your project deadline or cost. Our retention rate is high, but just in case.'
  },
]
const cardsData = [
  {
   img:'/checked-mark.svg',
    text: 'Proven Coding Practices',
    className:'text-wrapper'
  },
  {
   img:'/checked-mark.svg',
    text: 'No Hidden Costs',
  },
  {
   img:'/checked-mark.svg',
    text: 'No Sudden Replacements'
  },
  {
   img:'/checked-mark.svg',
    text: 'Best Quality-Price Ratio'
  },
  {
   img:'/checked-mark.svg',
    text: 'Leaders’ Mentality'
  },
  {
   img:'/checked-mark.svg',
    text: 'Trustworthy & Transparent'
  },
]
const RemoteDeveloperData = [
  {
    img: <img src='/ruining-product-health.svg' alt="Product" />,
    text: <h2>Talent shortage is ruining your product's health.</h2>,
  },
  {
    img: <img src='/scaling-team-inescapable-hassle.svg' alt="ScaleImage" />,
    text: <h2>Managing and scaling your team is an inescapable hassle.</h2>,
  },
  {
    img: <img src='/hiring-senior-devs-qa-engineers.svg' alt="Developer" />,
    text: <h2>Hiring senior devs and QA engineers takes forever.</h2>,
  },
  {
    img: <img src='/different-timezone-hindering-growth.svg' alt="GrouthImage" />,
    text: (
      <h2>
        Clash of cultures, poor communication, and different timezones are
        hindering your growth.
      </h2>
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
      text: "On hourly basis",
    },
    {
      text: "Not sure",
    },
  ],
  [
    {
      text: "Junior developer",
    },
    {
      text: "Senior developer",
    },
    {
      text: "Software architect or lead developer",
    },
    {
      text: "CTO or VP of engineering",
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
      text: "I have a clear idea of what I want, but I’ve not penned down any specific requirements.",
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
  marketPlaceData,
  webAppFaq,
  revenueData,
  servicesSliderData,
  devOpsSliderData,
  automationData,
  lostToLaunched,
  faqQuestion,
  ecomFaqQuestion,
  guidanceData,
  youCanTrustData,
  lostToLaunchedItems,
  languagesData,
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
  extensionFaq,
  extensionSliderItems,
  extensionLanguages
}
