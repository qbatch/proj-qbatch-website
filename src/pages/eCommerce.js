import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import StartProject from "../components/PagesComponent/StartProject";
import WhatCanHelp from '../components/PagesComponent/WhatCanYouHelp/index'
import BusinessMangement from '../components/PagesComponent/BusinessMangement/index'
import EcomLogoSection from "../components/PagesComponent/EcomLogoSection";
import DevelopmentStages from "../components/PagesComponent/DevelopmentStages";
import EcommerceBanner from "../components/PagesComponent/EcommerceBanner";
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience'
import IdeasAndInvestments from "../components/PagesComponent/IdeasAndInvestments"
import FaqSection from '../components/PagesComponent/Faq'
import { ecomSliderItems, ecomFaqQuestion } from '../constants'
import MarketplaceSellers from "../components/PagesComponent/MarketplaceSellers";
import QuotationSection from '../components/PagesComponent/QuotationSection'
import MarketplaceIntegrations from "../components/PagesComponent/MarketplaceIntegrations";
import TrippleYourRevenue from "../components/PagesComponent/TrippleYourRevenue";

const Ecommerce = () => {
   
  return (
    <Layout>
      <EcommerceBanner />
      <EcomLogoSection />
      <WhatCanHelp />
      <DevelopmentStages
        heading="Our 5-Step E-commerce Automation Process"
        desc="To help you stand your ground in the ever-growing e-commerce district!"
        sliderData={ecomSliderItems}
        col1={5}
        col2={7}
        subCol1={6}
        subCol2={6}
        mt="mt-4"
        className="ecom-section"
      />
      <BusinessMangement />
      <TrippleYourRevenue />
      <IdeasAndInvestments />
      <ProvenWorkExperience heading="Our Projects" paragraph="They imagined it, we brought it to the world!" />
      <MarketplaceIntegrations />
      <MarketplaceSellers />
      <FaqSection faqQuestion={ecomFaqQuestion} />
      <QuotationSection />
      <StartProject />
    </Layout>
  )
};
export const Head = () => <SEO title="ecommerce" />;

export default Ecommerce;
