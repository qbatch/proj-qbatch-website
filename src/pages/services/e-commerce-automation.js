import React from "react";
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";
import StartProject from "../../components/PagesComponent/StartProject";
import WhatCanHelp from "../../components/PagesComponent/WhatCanYouHelp/index";
import BusinessMangement from "../../components/PagesComponent/BusinessMangement/index";
import DevelopmentStages from "../../components/PagesComponent/DevelopmentStages";
import EcommerceBanner from "../../components/PagesComponent/EcommerceBanner";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import IdeasAndInvestments from "../../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../../components/PagesComponent/Faq";
import { ecomSliderItems, ecomFaqQuestion } from "../../constants";
import MarketplaceSellers from "../../components/PagesComponent/MarketplaceSellers";
import QuotationSection from "../../components/PagesComponent/QuotationSection";
import MarketplaceIntegrations from "../../components/PagesComponent/MarketplaceIntegrations";
import TrippleYourRevenue from "../../components/PagesComponent/TrippleYourRevenue";
import Automation from "../../components/PagesComponent/TechnicalGuidance";
import { automationData } from "../../constants";

const Ecommerce = () => {
  return (
    <Layout>
      <EcommerceBanner />
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
        isScroll={true}
      />
      <BusinessMangement />
      <TrippleYourRevenue />
      <Automation
        data={automationData}
        heading="Automation is 99% software but, 1% mindset "
        span="(and oh, that 1%)"
        desc="This is your hint to bury your conventional e-commerce ways and"
        className="automation-section"
      />
      <IdeasAndInvestments
        heading="100+ businesses trusted us with their ideas and investments,"
        span="will you?"
      />
      <ProvenWorkExperience
        heading="Our Projects"
        paragraph="They imagined it, we brought it to the world!"
      />
      <MarketplaceIntegrations />
      <MarketplaceSellers heading="Saving Marketplace Sellers from doing too much work." paragraph="Shrug off non-value-adding, repetitive tasks through modern technology and genius domain savvies. " btnText="Take my worries away!"/>
      <FaqSection faqQuestion={ecomFaqQuestion} />
      <QuotationSection />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const eCommerceData = Queries()
  const seoData = eCommerceData.allStrapiEcommerce.nodes[0]?.seo
  
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
    />
  )
}

export default Ecommerce;
