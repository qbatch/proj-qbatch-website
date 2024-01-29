import React, { useEffect } from 'react'
import Banner from '../components/PagesComponent/PageBanner'
import { Queries } from '../constants/queries'
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import Divider from "../components/UiComponent/Divider";
import EcommerceBanner from '../../static/portfolio-banner-qbatch.svg'
import Collaboration from "../components/PagesComponent/Collaboration";
import StartProject from "../components/PagesComponent/StartProject";
import SuccessStories from "../components/PagesComponent/SuccessStories";

const Portfolio = () => {
  useEffect(()=>{
 setTimeout(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' })
 }, 500)
  },[])
 
  return (
    <Layout>
      <Banner
        subheading="Portfolio"
        heading="They Trust Us So Can You"
        paragraph="Every project and partnership has been a journey of faith and commitment. We are gratefully playing a part in this massive technology adoption and transformation marathon - with science, passion, and innovation through sustainable and low-cost software implementations."
        buttonText="Let’s Start Building"
        blogInner={EcommerceBanner}
        wrapperClass="cto-banner"
      />
      <SuccessStories />
      <Divider margin="0px" />
      <Collaboration />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
    const portfolioData = Queries();
    const seoData = portfolioData?.allStrapiPortfolio.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
    />
  )
}

export default Portfolio;