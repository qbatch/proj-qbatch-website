import * as React from 'react'
import { Queries } from '../../constants/queries'
import Layout from '../../components/Layout/layout'
import SEO from '../../components/Seo'
import Banner from '../../components/PagesComponent/PageBanner'
import HireCto from '../../components/PagesComponent/HireCto'
import LostToLaunched from '../../components/PagesComponent/DevelopmentStages'
import TheySayWeSay from '../../components/PagesComponent/TheySayWeSay'
import DesiredResult from '../../components/PagesComponent/IdeasAndInvestments'
import PeopleFirst from '../../components/PagesComponent/PeopleFirst'
import DevelopmentProcess from '../../components/PagesComponent/DevelopmentProcess'
import StartProject from '../../components/PagesComponent/StartProject'
import FaqSection from '../../components/PagesComponent/Faq'
import Collaboration from '../../components/PagesComponent/Collaboration'
import MarketplaceSellers from '../../components/PagesComponent/MarketplaceSellers'
import ProvenWorkExperience from '../../components/PagesComponent/ProvenWorkExperience'
import ChooseYourEnterprise from '../../components/PagesComponent/ChoiceYourEnterprise'
import BannerImage from '../../../static/product-design-dev.svg'

import {
  productDesignlist,
  softwareProductData,
  developmentProcessData,
  productDesignFaq,
  productDesignData,
  cycleProductData,
  productDevlopmentServices,
} from '../../constants'
import WhyChooseQbatch from '../../components/PagesComponent/WhyChooseQbatch'
import SeemToWork from '../../components/PagesComponent/SeemToWork'

const ProductDesign = () => {
  return (
    <Layout pageTitle="Product Design and Development">
      <Banner
        subheading="Software Product Development"
        heading="Transpire, Transform, Transcend."
        paragraph="As product specialists, we’ve helped 100+ startups, scaleups, and
          and enterprises build resilient and modern products. Our software
          product development services exceed user expectations, encour-
          age conversions, and deliver impressive ROI."
        buttonText="Launch Your Idea"
        blogInner={BannerImage}
        wrapperClass="product-design-banner"
      />
      <HireCto
        list={productDesignlist}
        btnText=" Let’s fix it"
        groupClass="product-design"
        heading="Why do you need software product design
        & development services?"
        paragraph="Have we identified your problem? >>"
      />
      <TheySayWeSay />
      <ChooseYourEnterprise
        heading="So, how can we help?"
        listData={productDesignData}
        desc1="Qbatch being a trusted product development services company doesn’t make false promises but believes in a value system: "
        className="helpSection"
      />
      <LostToLaunched
        heading="Explore Our Full-Cycle Product Development Services"
        desc="From workshops to the app’s public launch and continuous support throughout, our product engineering team devotedly brainstorms, documents, prototypes, builds, and upgrades the product until you make a lasting impact in the raging market. "
        sliderData={productDevlopmentServices}
        col1={5}
        col2={7}
        subCol1={5}
        subCol2={7}
        mt="mt-4"
        className="ecom-section product-development-service"
        isScroll={false}
        paddingLeft="0px"
        maxWidth="100%"
        minHeight="524px"
      />
      <DesiredResult
        heading="Simply describe your idea and we will take care of the rest from team management and development to the successful product launch."
        isButton={true}
        className="productDesign"
        btnText="Build Your Product"
      />

      <PeopleFirst
        peopleFirstData={softwareProductData}
        paragraph="We as a software product development company can build these for you and more on demand"
        heading="Did we mention your next ‘Software Project’ below?"
        btnText="Got an Idea"
        wrapperClass="productDesignPage"
      />

      <DevelopmentProcess boxesData={developmentProcessData} />

      <WhyChooseQbatch />
      <SeemToWork />
      <ProvenWorkExperience
        heading="Featured Projects"
        paragraph="Innovators from across the industry have trusted Qbatch to build high-impact products. "
      />
      <Collaboration />
      <MarketplaceSellers
        heading="Need someone to lead your product development journey?"
        paragraph="First things first, our product experts own your idea and don’t sit until your product makes a stellar launch in the market."
        btnText="Get Your Product Expert"
        wrapperClass="productDesign"
      />
      <FaqSection faqQuestion={productDesignFaq} />
      <StartProject />
    </Layout>
  )
}

export const Head = () => {
  const productDesignData = Queries()

  const seoData = productDesignData.allStrapiProductDesign.nodes[0]?.seo

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

export default ProductDesign
