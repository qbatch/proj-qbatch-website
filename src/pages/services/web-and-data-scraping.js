import React from 'react'
import { Script } from 'gatsby'
import {replaceUnderscoreWithAt} from '../../constants/Utils'
import Banner from '../../components/PagesComponent/PageBanner'
import { Queries } from '../../constants/queries'
import SEO from '../../components/Seo'
import Layout from '../../components/Layout/layout'
import StartProject from '../../components/PagesComponent/StartProject'
import WebDataScrapingTechnology from '../../components/PagesComponent/WebDataScrapingTechnology'
import ScrapeData from '../../components/PagesComponent/ScrapeData'
import ScrollToTop from '../../components/PagesComponent/ScrollTop';
import YourPersonalAssistant from '../../components/PagesComponent/YourPersonalAssistant'
import DataDeliveryFormats from '../../components/PagesComponent/DataDeliveryFormats'
import DomainSpecificData from '../../components/PagesComponent/DomainSpecificData'
import FaqSection from '../../components/PagesComponent/Faq'
import DataDriven from '../../components/PagesComponent/DataDriven'
import ChooseQbatch from '../../components/PagesComponent/ChooseQbatch'
import StoppingDataDriven from '../../components/PagesComponent/StoppingDataDriven'
import Collaboration from '../../components/PagesComponent/Collaboration'
import { webScrapingFaq } from '../../constants'
import MarketplaceSellers from '../../components/PagesComponent/MarketplaceSellers'
import DedicationWork from '../../components/PagesComponent/DedicationWork'
import FeaturedProjects from '../../components/PagesComponent/FeaturedProjects'
import ExtractionServices from '../../components/PagesComponent/ExtractionServices'
import DesiredResult from '../../components/PagesComponent/IdeasAndInvestments'
import WebScrapping from '../../../static/web-and-data-scraping.svg'
import WebScrappingBackground from '../../../static/web-scraping-bg.svg'

const Ecommerce = () => {
  let heading = 'Get Data \n The Way You Want'
  return (
    <Layout>
      <ScrollToTop />
      <Banner
        subheading="Web & data Scraping Services"
        heading={heading}
        paragraph="Top-tier proxy networks, powerful web scrapers, and a world-class data team scraping - to help you build no-fail data pipelines with confidence."
        buttonText="Get Free Estimates"
        wrapperClass="web-data-scraping"
        col1lg={12}
        className="d-flex align-items-center justify-content-start"
        mobileViewBanner={WebScrapping}
        blogInner={WebScrapping}
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/web-and-data-scraping/', crumbLabel: 'Web Data Scraping And Extraction' },
        ]}
      />
      <DataDriven />
      <StoppingDataDriven />
      <DedicationWork />
      <YourPersonalAssistant />
      <ExtractionServices />
      <DesiredResult
        heading="Do you know? Companies with potent data-driven cultures grow around 30% outpacing their competitors by $1.8 trillion annually."
        isButton={true}
        caption="(Forrester)"
        btnText="Go Data-Driven"
        headingSize="text-h2"
        className="data-scraping-component"
      />
      <DomainSpecificData />
      <ScrapeData />
      <WebDataScrapingTechnology />
      <DataDeliveryFormats />

      <MarketplaceSellers
        heading="Scrape powerful data at scale — no coding, no servers, no expensive software required. We do it all for you!"
        btnText="Hire Dedicated Web Scrapers"
        backgroundImage={WebScrappingBackground}
        wrapperClass="web-scraping-component"
      />
      <FeaturedProjects />
      <ChooseQbatch />
      <Collaboration paragraph="Predictive and transparent ways to implement your idea. Choose what suits you best" />
      <FaqSection faqQuestion={webScrapingFaq} />
      <StartProject />
    </Layout>
  )
}

export const Head = () => {
  const eCommerceData = Queries()
  const seoData = eCommerceData.allStrapiWebAndDataScraping.nodes[0].seo[0]
  const schemaData = replaceUnderscoreWithAt(seoData?.structuredData)
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0].localFile.url}
      pathname={`/services${seoData.slug}`}
    >
         {schemaData &&   <Script  type="application/ld+json">
              {JSON.stringify(schemaData)}
            </Script> }
      </SEO>
  )
}

export default Ecommerce
