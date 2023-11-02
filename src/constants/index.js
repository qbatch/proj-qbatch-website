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
  marketPlaceData,
  revenueData,
  automationData,
  faqQuestion,
  ecomFaqQuestion,
  guidanceData
}
