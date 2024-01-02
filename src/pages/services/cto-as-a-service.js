import React from "react";
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";
import StartProject from "../../components/PagesComponent/StartProject";
import Banner from "../../components/PagesComponent/PageBanner";
import HireCto from "../../components/PagesComponent/HireCto/index";
import TechnicalExcellence from "../../components/PagesComponent/TechnicalExcellence";
import CtoPersona from "../../components/PagesComponent/CtoPersona";
import TechnicalGuidance from "../../components/PagesComponent/TechnicalGuidance";
import GrowingTechSide from "../../components/PagesComponent/GrowingTechSide";
import ChooseCto from "../../components/PagesComponent/ChooseCto";
import CtoServiceModel from "../../components/PagesComponent/CtoServiceModel";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Insights from "../../components/PagesComponent/Insights";
import DevelopmentStages from "../../components/PagesComponent/DevelopmentStages";
import FaqSection from "../../components/PagesComponent/Faq";
import { sliderItems, faqQuestion } from "../../constants";
import { guidanceData, ctoList } from "../../constants";
import CtoBannerImage from "../../../static/cto-banner.svg";

const CtoService = () => {
  return (
    <Layout>
      <Banner
        subheading="CTO as a Service"
        heading="Rethink and Rebuild Your Technical Prowess"
        paragraph="Neglecting a tiny detail can lead to huge technical debts. Get high-impact technical guidance and confidently deal with time- and money-critical situations toward greater business growth."
        buttonText="Get Free CTO Consultation"
        imgSrc={CtoBannerImage}
        wrapperClass="cto-banner"
      />
      <HireCto 
        list={ ctoList } 
        btnText="Stuck in a different situation?"
        heading="Do you really need to hire a CTO? Find for yourself"
      />
      <TechnicalExcellence
        heading="We are Your Right-Hand Men Towards Total Technical Excellence"
        title={true}
        paragraph1={
          <>
            Digital adoption brings different challenges to each business. And
            our highly experienced technical leadership knows how to keep your
            boat afloat in the rising technological waves. Besides, spending on
            digital transformation is expected to reach
            <a
              href="https://statista.com/statistics/870924/worldwide-digital-transformation-market-size/"
              target="blank"
            >
              $3.4 trillion by 2026
            </a>
          </>
        }
        paragraph2="Thus, we take no risks and work heartily on building high-margin
        technology roadmaps for your dear business to thrive on a larger
        scale."
      />
      <CtoPersona />
      <TechnicalGuidance
        data={guidanceData}
        heading="More Than Just “Technical Guidance” Explore Our Enterprise-level "
        span="CTO Services"
        isButton={true}
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
        isScroll={false}
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

export const Head = () => {
  const ctoData = Queries()
  const seoData = ctoData.allStrapiCtoService.nodes[0]?.seo
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

export default CtoService;
