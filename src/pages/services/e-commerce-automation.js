import React, { lazy } from "react";

import { Queries } from '../../constants/queries';
import SeoComponent from "../../utils/seo";
import Layout from "../../components/Layout/layout";
import { ecomSliderItems, ecomFaqQuestion, automationData, helpingCardData, weWorkStoriesData } from "../../constants";
import EcommerceBanner from '../../../static/e-commerce-banner.svg';

const Banner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const EcomLogos = lazy(() => import('../../components/PagesComponent/EcomLogoSection'));
const WhatCanHelp = lazy(() => import('../../components/PagesComponent/WhatCanYouHelp/index'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const BusinessMangement = lazy(() => import('../../components/PagesComponent/BusinessMangement/index'));
const TrippleYourRevenue = lazy(() => import('../../components/PagesComponent/TrippleYourRevenue'));
const GridData = lazy(() => import('../../components/PagesComponent/GridData'));
const IdeasAndInvestments = lazy(() => import('../../components/PagesComponent/IdeasAndInvestments'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const IntegrationMarketPlace = lazy(() => import('../../components/PagesComponent/IntegrationMarketPlace'));
const MarketplaceSellers = lazy(() => import('../../components/PagesComponent/MarketplaceSellers'));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));
const QuotationSection = lazy(() => import('../../components/PagesComponent/QuotationSection'));
const StartProject = lazy(() => import('../../components/PagesComponent/StartProject'));

const Ecommerce = () => {
  const scrollToStartProject = () => {
    const element = document.getElementById('start-project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <WhatCanHelp helpingCardData={helpingCardData} />
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
      <SuccessStories data={weWorkStoriesData} />
      {/* <MarketplaceIntegrations /> */}
      <IntegrationMarketPlace heading="Integrations for Your Marketplace" paragraph="We are made of 50% people skills and 50% tools to ensure constant performance and security featuring uncompromising quality and speed. " paragraphMaxWidth={'754px'} showBtn={true}  />
      <MarketplaceSellers
        heading="Saving Marketplace Sellers from doing too much work."
        paragraph="Shrug off non-value-adding, repetitive tasks through modern technology and genius domain savvies. "
        btnText="Take my worries away!"
      />
      <FaqSection faqQuestion={ecomFaqQuestion} />
      <QuotationSection onRedirect={scrollToStartProject} />
      <StartProject id="start-project" />

    </Layout>
  )
};

export const Head = () => {
  const eCommerceData = Queries()
  const seoData = eCommerceData.allStrapiEcommerce.nodes[0]?.seo
  const schemaData = eCommerceData?.allStrapiEcommerce?.nodes[0]?.schema;
  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}

export default Ecommerce;
