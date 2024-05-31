import React from "react";
import Banner from '../../components/PagesComponent/PageBanner'
import { Queries } from '../../constants/queries'
import {replaceUnderscoreWithAt} from '../../constants/Utils'
import SEO from "../../components/Seo";
import Slider from '../../components/UiComponent/Slider'
import Layout from "../../components/Layout/layout";
import StartProject from "../../components/PagesComponent/StartProject";
import WhatCanHelp from "../../components/PagesComponent/WhatCanYouHelp/index";
import BusinessMangement from "../../components/PagesComponent/BusinessMangement/index";
import GridData from '../../components/PagesComponent/GridData'
import DevelopmentStages from "../../components/PagesComponent/DevelopmentStages";
import IntegrationMarketPlace from "../../components/PagesComponent/IntegrationMarketPlace";
import LostToLaunched from '../../components/PagesComponent/DevelopmentStages'
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import IdeasAndInvestments from "../../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../../components/PagesComponent/Faq";
import { ecomSliderItems, ecomFaqQuestion } from "../../constants";
import MarketplaceSellers from "../../components/PagesComponent/MarketplaceSellers";
import QuotationSection from "../../components/PagesComponent/QuotationSection";
import MarketplaceIntegrations from "../../components/PagesComponent/MarketplaceIntegrations";
import TrippleYourRevenue from "../../components/PagesComponent/TrippleYourRevenue";
import Automation from "../../components/PagesComponent/TechnicalGuidance";
import EcomLogos from "../../components/PagesComponent/EcomLogoSection";
import EcommerceBanner from '../../../static/e-commerce-banner.svg'
import { automationData } from "../../constants";

const Ecommerce = () => {
  return (
    <Layout>
    
      <Banner
        subheading="Custom E-Commerce Software Solutions"
        heading="Bigger Returns Require Bold Transformation"
        paragraph="Stop time on slow, repetitive tasks and switch to data-driven approach with our custom solutions for Sellers, Aggregators, and Brand Owners. "
        buttonText="Explore Services"
        wrapperClass="cto-banner"
        col1lg={12}
        className="d-flex align-items-center justify-content-start"
        mobileViewBanner={EcommerceBanner}
        blogInner={EcommerceBanner}
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/e-commerce-automation/', crumbLabel: 'eCommerce Automation Solutions' },
        ]}
      />
      <EcomLogos />
      <WhatCanHelp />
      <Slider
        heading="Our 5-Step E-commerce Automation Process"
        paragraph="To help you stand your ground in the ever-growing e-commerce district!"
        data={ecomSliderItems}
        align="center"
        className="five-step-slider"
      />
      <BusinessMangement />
      <TrippleYourRevenue />
      <GridData maxWidth='600px' height={'114px'} data={automationData} paragraph='This is your hint to bury your conventional e-commerce ways and' heading={<>Automation is 99% software but,
              1% mindset<span> (and oh, that 1%)</span></>} />
      <IdeasAndInvestments heading="100+ businesses trusted us with their ideas and investments," span="will you?" />
      <ProvenWorkExperience heading="Our Projects" paragraph="They imagined it, we brought it to the world!" />
      {/* <MarketplaceIntegrations /> */}
      <IntegrationMarketPlace heading="Integrations for Your Marketplace" paragraph="We are made of 50% people skills and 50% tools to ensure constant performance and security featuring uncompromising quality and speed. " paragraphMaxWidth={'754px'} showBtn={true}  />
      <MarketplaceSellers
        heading="Saving Marketplace Sellers from doing too much work."
        paragraph="Shrug off non-value-adding, repetitive tasks through modern technology and genius domain savvies. "
        btnText="Take my worries away!"
      />
      <FaqSection faqQuestion={ecomFaqQuestion} />
      <QuotationSection />
      <StartProject />

    </Layout>
  )
};

export const Head = () => {
  const eCommerceData = Queries()
  const seoData = eCommerceData.allStrapiEcommerce.nodes[0]?.seo
  const schemaData = eCommerceData?.allStrapiEcommerce?.nodes[0]?.schema;
  const transformedObject = replaceUnderscoreWithAt(schemaData);  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0].localFile.url}
      pathname={`/services${seoData.slug}`}
    >
      {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))}
      </SEO>
  )
}

export default Ecommerce;
