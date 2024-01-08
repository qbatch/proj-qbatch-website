import React from 'react'
import Banner from '../../components/PagesComponent/PageBanner'
import { Queries } from '../../constants/queries'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout/layout'
import StartProject from '../../components/PagesComponent/StartProject'
import WhatCanHelp from '../../components/PagesComponent/WhatCanYouHelp/index'
import ScrapeData from '../../components/PagesComponent/ScrapeData'
import YourPersonalAssistant from '../../components/PagesComponent/YourPersonalAssistant'
import ProvenWorkExperience from '../../components/PagesComponent/ProvenWorkExperience'
import DomainSpecificData from '../../components/PagesComponent/DomainSpecificData'
import FaqSection from '../../components/PagesComponent/Faq'
import DataDriven from '../../components/PagesComponent/DataDriven'
import StoppingDataDriven from '../../components/PagesComponent/StoppingDataDriven'
import { ecomSliderItems, ecomFaqQuestion } from '../../constants'
import MarketplaceSellers from '../../components/PagesComponent/MarketplaceSellers'
import QuotationSection from '../../components/PagesComponent/QuotationSection'
import MarketplaceIntegrations from '../../components/PagesComponent/MarketplaceIntegrations'
import ExtractionServices from '../../components/PagesComponent/ExtractionServices'
import DesiredResult from '../../components/PagesComponent/IdeasAndInvestments'
import WebScrapping from '../../../static/web-and-data-scraping.svg'
import { automationData } from '../../constants'

const Ecommerce = () => {
  return (
    <Layout>
      <Banner
        subheading="Web & data Scraping Services"
        heading="Get Data The Way You Want"
        paragraph="Top-tier proxy networks, powerful web scrapers, and a world-class data team scraping - to help you build no-fail data pipelines with confidence."
        buttonText="Get Free Estimates"
        wrapperClass="web-data-scraping"
        blogInner={WebScrapping}
      />
      <DataDriven />
      <StoppingDataDriven />
      <YourPersonalAssistant />
      <ExtractionServices />
      <DesiredResult
        heading="Do you know? Companies with potent data-driven cultures grow around 30% outpacing their competitors by $1.8 trillion annually."
        isButton={true}
        btnText="Tell Me How to Become Data-Driven"
        headingSize="text-h2"
        align="d-flex justify-content-center"
      />
      <DomainSpecificData />
      <ScrapeData />
      <ProvenWorkExperience heading="Our Projects" paragraph="They imagined it, we brought it to the world!" />
      <MarketplaceIntegrations />
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
}

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

export default Ecommerce
