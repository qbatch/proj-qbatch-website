import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo'
import HireCto from '../components/PagesComponent/HireCto'
import TheySayWeSay from '../components/PagesComponent/TheySayWeSay'
import DesiredResult from '../components/PagesComponent/IdeasAndInvestments'
import PeopleFirst from '../components/PagesComponent/PeopleFirst'
import DevelopmentProcess from '../components/PagesComponent/DevelopmentProcess'
import StartProject from '../components/PagesComponent/StartProject'
import FaqSection from '../components/PagesComponent/Faq'
import Collaboration from '../components/PagesComponent/Collaboration'
import MarketplaceSellers from '../components/PagesComponent/MarketplaceSellers'
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience'
import ChooseYourEnterprise from '../components/PagesComponent/ChoiceYourEnterprise'
import SecretSauce from '../components/PagesComponent/SecretSauce'
import {
  productDesignlist,
  softwareProductData,
  developmentProcessData,
  productDesignFaq,
  productDesignData,
  cycleProductData,
} from '../constants'
import WhyChooseQbatch from '../components/PagesComponent/WhyChooseQbatch'
import SeemToWork from '../components/PagesComponent/SeemToWork'

const ProductDesign = () => {
  return (
    <Layout pageTitle="Product Design and Development">
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
      <SecretSauce
        heading="Explore our Full-Cycle Product Development Services"
        desc="From workshops to the app’s public launch and continuous support throughout, our product engineering team devotedly brainstorms, documents, prototypes, builds, and upgrades the product until you make a lasting impact in the raging market. "
        data={cycleProductData}
        className="enterprise-section cycle-section"
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
  const data = useStaticQuery(graphql`
    query ProductQuery {
      allStrapiProductDesign {
        nodes {
          seo {
            keywords
            metaDescription
            metaTitle
          }
        }
      }
    }
  `)

  const seoData = data.allStrapiProductDesign.nodes[0]?.seo // Fix: Access the first element of the array

  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keywords={seoData.keywords} />
}

export default ProductDesign
