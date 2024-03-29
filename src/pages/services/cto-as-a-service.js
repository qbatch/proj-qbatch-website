import React from "react";
import SEO from "../../components/Seo";
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import StartProject from "../../components/PagesComponent/StartProject";
import Banner from "../../components/PagesComponent/PageBanner";
import HireCto from "../../components/PagesComponent/HireCto/index";
import TechnicalExcellence from "../../components/PagesComponent/TechnicalExcellence";
import CtoPersona from "../../components/PagesComponent/CtoPersona";
import GrowingTechSide from "../../components/PagesComponent/GrowingTechSide";
import ChooseCto from "../../components/PagesComponent/ChooseCto";
import CtoServiceModel from "../../components/PagesComponent/CtoServiceModel";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Insights from "../../components/PagesComponent/Insights";
import FaqSection from "../../components/PagesComponent/Faq";
import Slider from '../../components/UiComponent/Slider'
import { sliderItems, faqQuestion } from "../../constants";
import { guidanceData, ctoList } from "../../constants";
import CtoBannerImage from "../../../static/cto-banner.png";

const CtoService = () => {
  return (
    <Layout>
      <Banner
        subheading="CTO as a Service"
        heading="Rethink and Rebuild Your Technical Process"
        paragraph="Neglecting a tiny detail can lead to huge technical debts. Get high-impact technical guidance and confidently deal with time and money-critical situations toward greater business growth."
        buttonText="Get Free CTO Consultation"
        mobileViewBanner={CtoBannerImage}
        imgSrc={CtoBannerImage}
        col1lg={7}
        className="d-flex align-items-center"
        wrapperClass="cto-banner"
      />
      <HireCto
        list={ctoList}
        btnText="Stuck in a different situation?"
        heading="Do you really need to hire a CTO? Find for yourself"
      />
      <TechnicalExcellence
        heading="We are Your Right-Hand Men Towards Total Technical Excellence"
        title={true}
        paragraph1={
          <>
            Digital adoption brings different challenges to each business. And our highly experienced technical
            leadership knows how to keep your boat afloat in the rising technological waves. Besides, spending on
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
      <Slider
        heading="More Than Just “Technical Guidance” Explore Our Enterprise-level"
        paragraph="CTO Services"
        data={guidanceData}
        width="350px"
      />
      <Slider
        heading="Stuck at any of these development stages? We can help."
        paragraph="Optimize your idea at each step with our technological process and business-critical insight."
        data={sliderItems}
        width="350px"
        align='center'
      />
      <GrowingTechSide />
      <ChooseCto />
      <CtoServiceModel />
      <ProvenWorkExperience heading="Our Projects" paragraph="They imagined it, we brought it to the world!" />
      <FaqSection faqQuestion={faqQuestion} />
      <Insights />
      <StartProject />
    </Layout>
  )
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
      image={seoData.metaimage[0].localFile.url}
      pathname={`/services${seoData.slug}`}
    />
  )
}

export default CtoService;
