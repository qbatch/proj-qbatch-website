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
  { id: 1, count: 150, desc: "Full Stack Developers"},
  { id: 2, count: 300, desc: "Solutions Delivered \n Successfully", symbol: "+" },
  { id: 3, count: 98, desc: "Customer Happiness \n Index", symbol: "%" },
  { id: 4, count: 10, desc: "Customer Happiness \n Index", symbol: "" },
];

const companyCounter = [
  { id: 1, count: 98, desc: "Customer Happiness Index", symbol: "%" },
  { id: 2, count: 300, desc: "Partnerships Achieved", symbol: "+" },
  { id: 3, count: 150, desc: "Projects Delivered", symbol: "+" },
  { id: 4, count: 15, desc: "SaaS-Based Platforms Developed", symbol: "+" },
  { id: 5, count: 30000, desc: "Hrs Of Productivity Unlocked!", symbol: "+" },
  { id: 6, count: 100, desc: "Industry Experts", symbol: "+" },
  { id: 7, count: 10, desc: "Years Of Excellency", symbol: "" },
  { id: 8, count: 3, desc: "Global Offices", symbol: "" }
];
const peopleFirstData = [
  { id: 1, icon: '/people-first-icon-1.svg', desc: "E-commerce" },
  { id: 2, icon: '/people-first-icon-2.svg', desc: "Logistics & Supply Chain"},
  { id: 3, icon: '/people-first-icon-3.svg', desc: "FinTech"},
  { id: 4, icon: '/people-first-icon-4.svg', desc: "Healthcare"},
  { id: 5, icon: '/people-first-icon-5.svg', desc: "EdTech"},
  { id: 6, icon: '/people-first-icon-6.svg', desc: "Retail & Consumer Goods"},
  { id: 7, icon: '/people-first-icon-7.svg', desc: "Travel & Transportation",},
  { id: 8, icon: '/people-first-icon-8.svg', desc: "IoT",}
];

const leaderData = [
  {  name: "Ibrahim Zahoor", title: "CEO & Founder", imageSrc: "/leader-1.jpeg" },
  { name: "Hassan Akram", title: "CTO & co - Founder Qbatch", imageSrc: "/leader-2.jpeg" },
];

const clientsData = [
  { id: 1, link: "https://www.designrush.com/agency/profile/qbatch", img: '/logo1.svg' },
  { id: 2, link: "#", img: '/logo2.svg' },
  { id: 3, link: "https://www.topdevelopers.co/profile/qbatch", img: '/logo3.svg' },
  { id: 4, link: "https://www.goodfirms.co/company/qbatch-llc", img: '/logo4.svg' },
  { id: 5, link: "https://topfirms.co/company-detail/3768/qbatch", img: '/logo5.svg' },
  { id: 6, link: "#", img: '/logo6.svg' },
  { id: 7, link: "#", img: '/logo7.svg' },
  { id: 8, link: "https://www.techimply.com/profile/qbatch", img: '/logo8.svg' },
  { id: 9, link: "https://www.techimply.com/profile/qbatch", img: '/logo9.svg' },
  { id: 10, link: "https://www.techimply.com/profile/qbatch", img: '/logo10.svg' },
];

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

const awardsData = [
  { id: 1, link: 'https://www.designrush.com/agency/profile/qbatch', img: '/design-rush.svg' },
  {
    id: 2,
    link: 'https://upcity.com/profiles/qbatch/sheridan',
    img: 'https://upcity-marketplace.s3.amazonaws.com/badge/171/basic_full_color/65189dd26c5102f17656998d7315e688.png',
  },
  { id: 3, link: 'https://www.topdevelopers.co/profile/qbatch', img: '/top-developers.svg' },
  { id: 4, link: 'https://www.goodfirms.co/company/qbatch-llc', img: '/good-firms.svg' },
  { id: 5, link: 'https://topfirms.co/company-detail/3768/qbatch', img: '/top-firms.svg' },
  {
    id: 6,
    link: 'https://www.appfutura.com/companies/qbatch',
    img: 'https://www.appfutura.com/img/badges/badge-top-software-development-company.png',
  },
  {
    id: 7,
    link: 'https://reputedfirms.com/qbatch',
    img: 'https://reputedfirms.com/images/verified-certified.svg',
  },
  { id: 8, link: 'https://www.techimply.com/profile/qbatch', img: '/tech-imply.svg' },
  { id: 9, link: 'https://www.techimply.com/profile/qbatch', img: '/itfirms-top-app-developers-badge-2023.svg' },
  { id: 10, link: 'https://www.techimply.com/profile/qbatch', img: '/tech-imply.svg' },
  { id: 11, link: '#', img: '/top-rated.svg' },
  { id: 12, link: '#', img: '/upfirms.svg' },
  { id: 13, link: 'https://www.techimply.com/profile/qbatch', img: '/tech-imply.svg' },
  { id: 14, link: '#', img: '/top-rated.svg' },
  { id: 15, link: '#', img: '/upfirms.svg' },
  { id: 16, link: 'https://www.techimply.com/profile/qbatch', img: '/tech-imply.svg' },
]

const CareersData = [
  { jobTitle: "Job Title 1", location: "Onsite, Lahore", tags: ["Chip/Label", "RubyOnRails", "Django", "nice"] },
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
    solve: "Build minimal- to zero-risk solutions",
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
const stories = [
  {
    logo: "/ecom-circle.svg",
    title: "Ecom Circles",
    description:
      "We created an all-in-one E-commerce Management Software trusted by 3000+ Amazon and Walmart sellers to organize and streamline their drop-shipping business.",
    badge: ["Automation", "SaaS", "Warehousing"],
    link: "/",
    imgOpen: "/ecom-circles-stories.svg"
  },
  {
    logo: "/rooney-innovation-logo.svg",
    title: "Ronny Innovations",
    description:
      "A state-of-the-art 3PL Solution for Warehouses that manages inventory levels, track stock movement, and monitor order fulfillment in real-time. Roney’s intuitive interface provides actionable insights into your warehouse’s performance, allowing you to make informed decisions toward operational excellence.",
    badge: ["E-Commerce", "3PL Solution", "Warehousing"],
    link: "/",
    imgClose: "/rooney-innovation.png"
  },
  {
    logo: "/birch-fog.svg",
    title: "Birch+FOG",
    description:
      "Fortunate enough to build North America's only anti-anxiety brand that offers full-family CBD and plant-based, and holistic health solutions and products.",
    badge: ["PWA", "E-commerce", "HealthTech","Custom"],
    link: "/",
    imgClose: "/birch-&-fog.png"
  },
  {
    logo: "/one-apply.svg",
    title: "One App",
    description:
      "We developed a powerful E-commerce marketplace that manages the daily inventory and stock data of above 50 different stores. The automated & algorithmic Repricer allows optimal order management, total control over centralized accounts, better profit/loss calculation, & reliable FBA forecasting.",
    badge: ["Automation", "SaaS", "Warehousing"],
    link: "/",
    imgOpen: "/one-app-01.svg"
  },
  {
    logo: "/store-filter.svg",
    title: "Store Filter",
    description:
      "We developed a witty searchable database for eCom agencies, Shopify store owners, and Brokers to know everything their competitors are doing and earn a competitive edge. The app enables real-time reporting on your competition's marketing efforts.",
    badge: ["Database", "Data Analytics", "Web App"],
    link: "/",
    imgOpen: "/store-filter-01.svg"
  },
  {
    logo: "/eu-outdoor-logo.svg",
    title: "European Outdoors",
    description:
      "A powerful Warehouse Software that manages and syncs products across Amazon, Vendor Central, eBay, Walmart & Custom(Facebook + Instagram + Phone) & entertains orders respectively.",
    badge: ["Warehouse", "Software Development"],
    link: "/",
    imgClose: "/european-outdoors.png"
  },
  {
    logo: "/friend-filter-logo.svg",
    title: "Friend Filter",
    description:
      "A high-profile move to help high-stake social media industrialists remove inactive friends from their Facebook. It is a simple Analytics & Reporting app and extension that scans your Facebook activity, lists your inactive friends, and auto-removes them per your request.",
    badge: ["Social Media", "Facebook", "Mobile App", "Analytics", "B2B"],
    link: "/",
    imgClose: "/friend-filter.png"
  },
  {
    logo: "/seller-repay-logo.svg",
    title: "Seller Repay",
    description:
      "Seller Repay is the Amazon Reimbursement Tool that identifies and recovers funds lost due to lost inventory, damaged inventory, customer returns, overcharged fees, and shipping errors on the Amazon platform. With automated tracking and reporting, it ensures accurate financial reconciliation and maximizes reimbursement potential, optimizing seller account management.",
    badge: ["E-commerce", "SaaS", "Automation"],
    link: "/",
    imgOpen: "/seller-repay.svg"
  },
  {
    logo: "/sales-support.svg",
    title: "Sales Support",
    description:
      "We’ve created an immaculate Amazon Wholesale Kickstarter that helped launch 1000+ businesses on Amazon. The platform features a Repricer for automated pricing and a catalog analyzer for better forecasting and profit/loss analysis. While the reimbursements removal and FBA forecasting elevated their business off the ground.",
    badge: ["Automation", "Saas", "Platform Management", "Web App"],
    link: "/",
    imgOpen: "/sales-support-01.svg"

  },
  {
    logo: "/northware.svg",
    title: "Northaware",
    description:
      "We tailored a high-quality E-commerce platform that caters to the winter clothing needs of Canadian snowbirds. The platform uses a Shopify CMS for a versatile custom development solution for increased customer engagement and retention.",
    badge: ["Custom Software Development", "CMS", "Shopify+"],
    link: "/",
    imgClose: "/northware.png"
  },
  {
    logo: "/blueware-discount.svg",
    title: "Blue Warehouse Discounts",
    description:
      "We elevated business experience for leading warehouse merchandise with hybrid app development for trackable product management and ShipsStation software for convenient order management.",
    badge: ["Hybrid App", "Integrations", "E-commerce", "B2c"],
    link: "/",
    imgClose: "/blue-warehouse.png"
  },
  {
    logo: "/carbon6-logo.svg",
    title: "Carbon 6",
    description:
      "Carbon 6 Repricer is an effective algorithm-based repricer software solution that facilitates Amazon sellers to automate, manage, review, and list down product pricing from across marketplaces and competitors.",
    badge: ["E-Commerce", "Automation", "Amazon"],
    link: "/",
    imgOpen: "/carbon-6-repricer.svg"
  },
  {
    logo: "/keurig.svg",
    title: "Keurig",
    description:
      "We’ve helped launch an intuitive E-commerce business management platform for the biggest beverage company in North America with 150+ principal warehouses. The mobile app offers easy grocery and product delivery services with over 100K+ downloads.",
    badge: ["Mobile App", "HealthTech", "Data Management"],
    link: "/",
    imgOpen: "/keurig-01.svg"
  },
];
const sliderItems = [
  {
    image: "/slide-img.jpeg",
    title: "Discovery Phase",
    content:
      "Perform competitor market research, choose suitable tech stack and MVP features, and write technical documentation to understand your concept in real-world terms under limited risks. ",
    list: ["Technology Consultancy", "Risk Mitigation", "Tech Stack Selection ", "MVP feature Composition"],
  },
  {
    image: "/slide-img.jpeg",
    title: "Project Planing",
    content:
      "After data collection, we elevate your development stages with strategy and logic by setting a realistic project plan, budget, and timeline according to available resources.",
    list: [
      "Shaping and Optimizing Development Plan",
      "Technical Audit & Decision-making",
      "Devising The Development Processes",
      "Time, Budget, & Resource Estimate",
    ],
  },
  {
    image: "/slide-img.jpeg",
    title: "Product Development",
    content:
      "We, as your virtual CTO, ensure transparency in and continuous optimization of processes, communication, reporting, and project-critical documentation from start to end.",
    list: [
      "Team Composition & Planning",
      "Set Clear Project Goals",
      "Development Process Optimization",
      "Daily Project and Team Management",
    ],
  },
  {
    image: "/slide-img.jpeg",
    title: "Project Scaling & Pitching",
    content:
      "We help startups stay wary of possible nuances and pitfalls by building and fostering scaling strategy, comprehensive pitch decks, and carefully communicating with investors as your CTO.",
    list: [
      "Forming Scaling Strategy ",
      "IT Pitch Deck Development",
      "Capturing Investments",
      "Technical Dialogue with Investors",
    ],
  },
  {
    image: "/slide-img.jpeg",
    title: "Project Audit",
    content:
      "Conduct a project audit, review the code quality, and assess overall project performance and speed with our CTO services to streamline the IT delivery process, offering constant feedback for enhancements. ",
    list: ["Code Quality Reviews", "Project Audits", "Report and Predictive Analysis", "Offering Problem-Solution Fit"],
  },
  {
    image: "/slide-img.jpeg",
    title: "Handing Over & Retaining",
    content:
      "We won’t leave you at the very climax of your development stage like the rest. You will have all the intellectual property rights and our long-term support on a retainer basis as needed.",
    list: ["Knowledge & Documentation Transfer", "Intellectual Property Rights", "Ad-hoc Support & Maintenance"],
  },
];

const ecomSliderItems = [
  {
    image: "/5 Step E-Commerce Automation_Problem Analysis.svg",
    title: "Problem Analysis",
    content: "We evaluate your problem statement and offer a carefully sorted roadmap and price estimate plan.",
  },
  {
    image: "/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg",
    title: "Software Automation Solution",
    content: "We evaluate your problem statement and offer a carefully sorted roadmap and price estimate plan.",
  },
  {
    image: "/5 Step E-Commerce Automation_Installation.svg",
    title: "Installation",
    content: "We evaluate your problem statement and offer a carefully sorted roadmap and price estimate plan.",
  },
  {
    image: "/5 Step E-Commerce Automation_Orchestration.svg",
    title: "Orchestration",
    content: "We evaluate your problem statement and offer a carefully sorted roadmap and price estimate plan.",
  },
  {
    image: "/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg",
    title: "Full-Cycle Technical Support",
    content: "We evaluate your problem statement and offer a carefully sorted roadmap and price estimate plan.",
  },
];
const lostToLaunchedItems = [
  {
    image: "/5 Step E-Commerce Automation_Problem Analysis.svg",
    title: "Project Mapping",
    content: "Requirement analysis to form a risk-free and modern solution.",
  },
  {
    image: "/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg",
    title: "Visual & Technical Design",
    content: "Prototype designing testing to rectify concerns in real-world terms.",
  },
  {
    image: "/5 Step E-Commerce Automation_Installation.svg",
    title: "Development",
    content: "Business logic and code development according to the approved design.",
  },
  {
    image: "/5 Step E-Commerce Automation_Orchestration.svg",
    title: "Ensuring Security & QA",
    content: "Security and QA testing to secure your product from cyberattacks and functional issues.",
  },
  {
    image: "/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg",
    title: "Deployment",
    content: "Final execution of the tested and optimized software solution.",
  },
  {
    image: "/5 Step E-Commerce Automation_Full-Cycle Technical Report 1.svg",
    title: "Launch & Support",
    content: "A happy project launch with continued support and maintenance.",
  },
];
const marketPlaceData = [
  {
    image: ['/amazon.svg', '/walmart.svg', '/ebay.svg', '/etsy.svg',"","",""],
    title: 'Marketplace',
  },
  {
    image: ['/shopify.svg', '/woo-commerce.png', '/amazon-vendor.svg', '/kindle.svg',"","",""],
    title: 'Platform',
  },
  {
    image: [
      '/amazon-seller.svg',
      '/amazon-shipping.svg',
      '/amazon-product.svg',
      '/amazon-business.svg',
      '/ebay.svg',
      '/walmart.svg',
      ""
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
    img: "/retail-arbitrage.svg",
    title: "Retail Arbitrage",
    description: "Find profitable products, deal with price volatility, and grow account health."
  },
  {
    img: "/label-brands.svg",
    title: "Private Label Brands",
    description: "Deal with stock-outs and stock-ins and maintain quality control."
  },
  {
    img: "/wholesale-sellers.svg",
    title: "Wholesale Sellers",
    description: "Avoid poor labor management, pricing wars, and storage costs towards better time to market."
  },
  {
    img: "/dropshipping.svg",
    title: "Dropshipping",
    description: "Automate slow order fulfillment and cheer up unhappy customers by bringing business consistency."
  },
  {
    img: "/warehousing.svg",
    title: "Warehousing/ 3PL/Prep Center",
    description: "Go data-driven and eliminate inaccurate inventory management and substandard processes."
  },
]

const automationData = [
  {
    icon: "/data-driven-decisions.svg",
    desc: "Make data-driven decisions for targeted marketing and optimization."
  },
  {
    icon: "/marketplaces-logistics-and-stores.svg",
    desc: "Facilitate communication across marketplaces, logistics, and stores."
  },
  {
    icon: "/tasks-for-faster-sales.svg",
    desc: "Eliminate repetitive tasks for faster sales."
  },
  {
    icon: "/orders-across-inventories.svg",
    desc: "Manage multichannel orders across inventories."
  },
  {
    icon: "/overstocking-in-your-supply-chain.svg",
    desc: "Auto-track stockouts and overstocking in your supply chain."
  },
  {
    icon: "/market-and-operational-costs.svg",
    desc: "Reduce time-to-market and operational costs."
  },
  {
    icon: "/foolproof-security-standards.svg",
    desc: "Ensure foolproof security standards."
  },
  {
    icon: "/shopping-experiences.svg",
    desc: "Deliver personalized shopping experiences."
  },
]

const webExpertiseData = [
  {
    icon: "/serverless-microservices.svg",
    desc: "Serverless Microservices based Web Apps."
  },
  {
    icon: "/service-oriented-architectures.svg",
    desc: "Service-Oriented-Architectures (SOA)."
  },
  {
    icon: "/multi-service-cloud.svg",
    desc: "Multi-service Cloud Applications."
  },
  {
    icon: "/operational-automation.svg",
    desc: "Operational Automation & Analytics."
  },
  {
    icon: "/knowledge-management-systems.svg",
    desc: "Document & Knowledge Management Systems."
  },
  {
    icon: "/ecommerce-apps.svg",
    desc: "E-commerce & M-commerce Apps."
  },
  {
    icon: "/admin-panels-dashboards.svg",
    desc: "Admin Panels & Management Dashboards"
  },
  {
    icon: "/product-configurators.svg",
    desc: "Product configurators."
  },
  {
    icon: "/ondemand-apps.svg",
    desc: "On-Demand Apps."
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
    id: 3,
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
    id: 4,
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
    id: 5,
    title: 'How can a CTO as a Service help startups and small businesses scale effectively?',
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
    id: 6,
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
    id: 7,
    title: 'How can a CTO as a Service help startups and small businesses scale effectively?',
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
]

const ecomFaqQuestion = [
  {
    id: 1,
    title: 'Why do I need e-commerce automation services?',
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
    title: 'How can e-commerce automation services help me save time and increase productivity?',
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
    id: 3,
    title: 'Will e-commerce automation services help me reduce errors and improve accuracy?',
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
    id: 4,
    title: 'How can I get started with your e-commerce automation services?',
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
    id: 5,
    title: 'What can be automated in e-commerce?',
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
        A web application development company builds small-scale and large-scale web applications for startups, scaleups, and businesses.
        </span>
      </div>
    ),
  },
  {
    id: 2,
    title: 'What is your mobile app development process, and how do you ensure quality?',
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
    title: 'How experienced is your team of mobile app developers?',
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
    title: 'Do you offer custom app development to meet unique business needs?',
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
    title: 'What is your mobile app testing strategy to ensure functionality and performance?',
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
    title: 'What platforms do you develop mobile apps for?',
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
]
const guidanceData = [
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Vision and Future \n Alignment",
    desc: "Build a roadmap that elevates your technical strategy, objectives, and operations to achieve a holistic digital footprint powering associated people, processes, and possibilities with our CTO consulting services. Let’s turn your vision into victory.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Leading and Scaling \n Teams",
    desc: "Your development team decides and shapes the future of the entire business. Thus we keep the bar high when it comes to tech leadership and management. Enjoy proficient team management, process optimization, and daily reporting with our CTO services.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Strategic Procurement and \n Cost Optimization",
    desc: 'Technology expenses can quickly escalate if the"build vs. buy" analysis goes wrong with suppliers and vendors. Our CTO advisory services develop a problem-solution fit by running iterations and finding critical areas that truly require investment. ',
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Technical Audits, Due Diligence, and Change Management",
    desc: "We dive deeper into the technical risks associated with your business processes and strategy, conduct audits, prepare you for due diligence, and prescribe rock-solid change management roadmaps toward total digital transformation and delivery across the company.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "System Engineering and \n Design",
    desc: "You cannot fully grasp the technical aspects of a software product if you lack technical depth and knowledge. Leverage our CTO expertise and insight to demonstrate, develop, and design low-risk and hi-tech enterprise systems",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Technology Integration and \n Analysis",
    desc: "Discover whether your business requires technical fixing or a total overhaul to assure zero downtime, accessibility, and enterprise-wide information exchanges. Eliminate software bloat and build technical resilience with our impeccable CaaS providers.",
  },
];

const developmentServicesData = [
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Custom Mobile App Solutions",
    desc: "Custom mobile app development services for fully automated and modern enterprise operations toward better business management, visibility, transparency, and accountability.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "UX/UI Mobile App Design",
    desc: "Hire our mobile app designers to achieve a personalized and engaging UX/UI mobile app outlook. It would help your business to deliver the best impressions on your prospects and engage them longer.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "AI App Development",
    desc: 'Innovate your mobile app, its processes, and services with our unconventional AI mobile app development services. Let’s explore futuristic algorithms and rebuild your enterprise today.',
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Mobile App Consulting",
    desc: "Worried about executing your mobile app idea? We offer reliable mobile consulting services to help you shape and launch a powerful mobile application that expedites your business and meets your goals.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Third-party Integration Services",
    desc: "Extend the usability and multi-functionality of your mobile app for your enterprise members and users by integrating third-party integrations like maps, social platforms, payment extensions, etc.",
  },
  {
    icon: "https://cdn.pixabay.com/photo/2016/10/02/15/45/banner-1709772_1280.jpg",
    title: "Mobile Testing & QA",
    desc: "Minimize app uninstallation and boost your reputation by availing our mobile app testing services. We conduct grass-root level QA to identify potential bugs and assure sustainable performance.",
  },
];

const youCanTrustData = [
  {
    icon: "/time-budget.svg",
    title: "On-time and On-budget",
  },
  {
    icon: "/strongly-agile.svg",
    title: "Strongly Agile",
  },
  {
    icon: "/stable-code.svg",
    title: "100% Stable Code",
  },
  {
    icon: "/cash-free.svg",
    title: "Crash-free Product",
  },
];
const multiPlatformData = [
  {
    icon: "/mobile-development.svg",
    title: "Android Mobile App Development",
    desc: "Building unique Android products that live up to user expectations amid choke-full competition is crucial. Qbatch’s custom Android app development services offer deep expertise in creating off-the-chart Android mobile, TV, tablet, and wearable software apps.",
  },
  {
    icon: "/mobile-development.svg",
    title: "iOS Mobile App Development",
    desc: "With attention spans getting shorter, users want solutions at their fingertips with a simple swipe. Qbatch’s iOS mobile app developers for hire have delivered highly scalable and captivating iOS app solutions for iPhone, iPad, Apple Watch, and Apple TV to thousands of users.",
  },
  {
    icon: "/mobile-development.svg",
    title: "Cross-Platform Mobile App Development",
    desc: 'Decrease time to market and costs by building high-value and secure mobile experiences with Qbatch’s cross-platform app development services. We use trusted cross-platform development technology i.e., React Native and Flutter to assure smooth and sustainable human interactions.',
  },
];
export {
  homeTiles,
  CareersData,
  awardsData,
  values,
  clientsData,
  leaderData,
  companyCounter,
  peopleFirstData,
  counterData,
  weDoData,
  data,
  stories,
  sliderItems,
  ecomSliderItems,
  ecomLogos,
  projects,
  fullCycle,
  marketPlaceData,
  webAppFaq,
  revenueData,
  automationData,
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
  mobileAppFaq
}
