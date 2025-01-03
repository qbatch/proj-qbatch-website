import React from "react";
import SeoComponent from "../../utils/seo"
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import StartProject from "../../components/PagesComponent/StartProject";
import Banner from "../../components/PagesComponent/PageBanner";
import HireCto from "../../components/PagesComponent/HireCto/index";
import TechnicalExcellence from "../../components/PagesComponent/TechnicalExcellence";
import CtoPersonal from "../../components/PagesComponent/CtoPersonal";
import GrowingTechSide from "../../components/PagesComponent/GrowingTechSide";
import ChooseCto from "../../components/PagesComponent/ChooseCto";
import CtoServiceModel from "../../components/PagesComponent/CtoServiceModel";
import SuccessStories from "../../components/PagesComponent/SuccessStoriesNew";
import Insights from "../../components/PagesComponent/Insights";
import ScrollToTop from '../../components/PagesComponent/ScrollTop';
import FaqSection from "../../components/PagesComponent/Faq";
import Slider from '../../components/UiComponent/Slider'
import { sliderItems, faqQuestion } from "../../constants";
import { guidanceData, ctoList } from "../../constants";
import CtoBannerImage from "../../../static/cto-banner.png";
import ExploreOurEnterpriseLevel from "../../components/PagesComponent/ExploreOurEnterpriseLevel";

const CtoService = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Banner
        subheading="CTO as a Service"
        heading="Rethink and Rebuild Your Technical Prowess"
        paragraph="Neglecting a tiny detail can lead to huge technical debts. Get high-impact technical guidance and confidently deal with time and money-critical situations toward greater business growth."
        buttonText="Get Free CTO Consultation"
        col1lg={7}
        className="d-flex align-items-center"
        wrapperClass="cto-banner cto-wrapper"
        imgSrc={CtoBannerImage}
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/cto-as-a-service/', crumbLabel: 'CTO As A Service' },
        ]}
      />
      <HireCto
        list={ctoList}
        btnText="Stuck in a different situation?"
        heading="Do you really need to hire a CTO? Find for yourself..."
      />
      <TechnicalExcellence
        heading="Your Right-hand Towards Total Technical Excellence"
        title={true}
        paragraph1={
          <>
            Digital adoption brings different challenges to each business.
             And our highly experienced technical leadership knows how to keep your boat afloat in
            the rising technological waves. Besides, spending on digital transformation is expected to reach
            <a
              href="https://statista.com/statistics/870924/worldwide-digital-transformation-market-size/"
              target="blank"
              className="label-text-ancer"
            >
              $3.4 trillion by 2026
            </a>
          </>
        }
        paragraph2="Thus, we take no risks and work heartily on building high-margin technology roadmaps for your dear business to thrive on a larger scale. "
      />
      <CtoPersonal />
      <ExploreOurEnterpriseLevel/>
      <Slider
        heading="Stuck at any of these development stages? We can help."
        paragraph="Optimize your idea at each step with our technological prowess and business-critical insight."
        data={sliderItems}
        width="350px"
        align='center'
        className="lost-to-launched cto-slider-wrapper"
      />
      <GrowingTechSide />
      <ChooseCto />
      <CtoServiceModel />
      <SuccessStories />
      <FaqSection faqQuestion={faqQuestion} />
      <Insights />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const ctoData = Queries()
  const seoData = ctoData.allStrapiCtoService.nodes[0]?.seo;
  const schemaData = ctoData?.allStrapiCtoService?.nodes[0]?.schema;
  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}

export default CtoService;
