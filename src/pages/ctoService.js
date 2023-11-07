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
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import Insights from "../components/PagesComponent/Insights";
import DevelopmentStages from "../components/PagesComponent/DevelopmentStages";
import FaqSection from "../components/PagesComponent/Faq";
import { sliderItems, faqQuestion } from "../constants";
import { guidanceData } from "../constants";

const CtoService = () => {
  return (
    <Layout>
      <CtoBanner />
      <HireCto />
      <TechnicalExcellence />
      <CtoPersona />
      <TechnicalGuidance
        data={guidanceData}
        heading="More Than Just “Technical Guidance” Explore Our Enterprise-level "
        span="CTO Services"
      />
      <DevelopmentStages
        heading="Stuck at any of these development stages? We can help."
        desc="Optimize your idea at each step with our technological prowess and business-critical insight."
        sliderData={sliderItems}
        col1={4}
        col2={8}
        subCol1={5}
        subCol2={7}
        className="slider-column"
        isScroll={true}
      />
      <GrowingTechSide />
      <ChooseCto />
      <CtoServiceModel />
      <ProvenWorkExperience
        heading="Our Projects"
        paragraph="They imagined it, we brought it to the world!"
      />
      <FaqSection faqQuestion={faqQuestion} />
      <Insights />
      <StartProject />
    </Layout>
  );
};
export const Head = () => <SEO title="Cto as a Service" />;

export default CtoService;
