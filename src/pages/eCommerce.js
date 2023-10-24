import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";
import WhatCanHelp from '../components/PagesComponent/WhatCanYouHelp'
import BusinessManagement from '../components/PagesComponent/BusinessManagement'
import EComLogoSection from "../components/PagesComponent/EComLogoSection";
import DevelopmentStages from "../components/PagesComponent/DevelopmentStages";
import ECommerceBanner from "../components/PagesComponent/ECommerceBanner";
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience'
import IdeasAndInvestments from "../components/PagesComponent/IdeasAndInvestments"
import FaqSection from '../components/PagesComponent/Faq'
import { eComSliderItems } from '../constants'
import MarketplaceSellers from "../components/PagesComponent/MarketplaceSellers";
import QuotationSection from '../components/PagesComponent/QuotationSection'
import MarketplaceIntegrations from "../components/PagesComponent/MarketplaceIntegrations";
<<<<<<< HEAD
import TripleYourRevenue from "../components/PagesComponent/TripleYourRevenue";

const ECommerce = () => {
=======
import TrippleYourRevenue from "../components/PagesComponent/TrippleYourRevenue";
import Automation from "../components/PagesComponent/Automation";
>>>>>>> 0892d97d17fc8c0f07a5a057e3e1424dbc56b5ad

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
  return (
    <Layout>
      <ECommerceBanner />
      <EComLogoSection />
      <WhatCanHelp />
      <DevelopmentStages
        heading="Our 5-Step E-commerce Automation Process"
        desc="To help you stand your ground in the ever-growing e-commerce district!"
        sliderData={eComSliderItems}
        col1={5}
        col2={7}
        subCol1={6}
        subCol2={6}
        mt="mt-4"
        className="ecom-section"
      />
      <BusinessManagement />
      <TripleYourRevenue />
      <IdeasAndInvestments />
      <ProvenWorkExperience heading="Our Projects" paragraph="They imagined it, we brought it to the world!" />
      <MarketplaceIntegrations />
      <MarketplaceSellers />
      <FaqSection faqQuestion={faqQuestion} />
      <QuotationSection />
      <StartProject />
    </Layout>
  )
};
export const Head = () => <SEO title="eCommerce" />;

export default ECommerce
