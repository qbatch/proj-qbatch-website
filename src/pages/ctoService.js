import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";
import CtoBanner from "../components/PagesComponent/CtoBanner";
import HireCto from "../components/PagesComponent/HireCto/index";
import TechnicalExcellence from "../components/PagesComponent/TechnicalExcellence";
import CtoPersona from "../components/PagesComponent/CtoPersona";
import TechnicalGuidance from "../components/PagesComponent/TechnicalGuidance";
import GrowingTechSide from "../components/PagesComponent/GrowingTechSide";
import ChooseCto from "../components/PagesComponent/ChooseCto";
import CtoServiceModel from "../components/PagesComponent/CtoServiceModel";
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience'
import Insights from "../components/PagesComponent/Insights";
import DevelopmentStages from "../components/PagesComponent/DevelopmentStages";
import FaqSection from "../components/PagesComponent/Faq";
import { sliderItems } from "../constants";

const CtoService = () => {
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
      <CtoBanner />
      <HireCto />
      <TechnicalExcellence />
      <CtoPersona />
      <TechnicalGuidance />
      <DevelopmentStages
        heading="Stuck at any of these development stages? We can help."
        desc="Optimize your idea at each step with our technological prowess and business-critical insight."
        sliderData={sliderItems}
        col1={4}
        col2={8}
        subCol1={5}
        subCol2={7}
        className="slider-column"
      />
      <GrowingTechSide />
      <ChooseCto />
      <CtoServiceModel />
      <ProvenWorkExperience heading="Our Projects" paragraph="They imagined it, we brought it to the world!" />
      <FaqSection faqQuestion={faqQuestion} />
      <Insights />
      <StartProject />
    </Layout>
  )
};
export const Head = () => <SEO title="Cto as a Service" />;

export default CtoService;
