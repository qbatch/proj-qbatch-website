import React from "react";
import Banner from '../../components/PagesComponent/PageBanner'
import { Queries } from '../../constants/queries'
import SeoComponent from "../../utils/seo"
import Layout from "../../components/Layout/layout";
import Slider from '../../components/UiComponent/Slider'
import ScrollToTop from '../../components/PagesComponent/ScrollTop';
import Achievements from "../../components/PagesComponent/Achievements";
import DesiredResult from "../../components/PagesComponent/IdeasAndInvestments";
import WhatDifferenceQbatchMaking from "../../components/PagesComponent/WhatDifferenceQbatchMaking";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import StartProject from "../../components/PagesComponent/StartProject";
import SolutionToChoose from "../../components/PagesComponent/SolutionToChoose";
import FullCycle from "../../components/PagesComponent/FullCicle";
import Collaboration from "../../components/PagesComponent/Collaboration";
import FaqSection from "../../components/PagesComponent/Faq";
import PeopleFirst from "../../components/PagesComponent/PeopleFirst";
import { webAppFaq } from "../../constants";
import LanguagesAndFrameworks from "../../components/PagesComponent/LanguagesAndFrameworks";
import WebappImage from '../../../static/web-app-dev.svg'
import { lostToLaunchedItems, peopleFirstData } from '../../constants'
import AdvancedWebExplore from "../../components/PagesComponent/ExploreOurAdvancedWeb";
import SliderComponent from "../../components/PagesComponent/WebAppDevelopmentTrustSectionSlider";

const webapp = () => {

  return (
    <Layout>
        <ScrollToTop />
        <Banner
          subheading="Web Application Development Company"
          heading="If you Think Web Apps are Old-Fashioned. Think Again"
          paragraph="88% of consumers use computers to research products and services before making a purchase. Don’t leave your potential customers confused, instead amuse them with a stunning web appearance! "
          buttonText="Kickstart Your Transformation Journey"
          wrapperClass="cto-banner"
          col1lg={12}
          className="d-flex align-items-center justify-content-start"
          blogInner={WebappImage}
          mobileViewBanner={WebappImage}
          customCrumbs={[
            { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
            { pathname: '/services/web-app-development/', crumbLabel: 'Web App Development' },
          ]}
        />
        <Achievements innerPage={true} />
        <SliderComponent />
        <FullCycle className="web-app-development-page" />
        <SolutionToChoose />
        <AdvancedWebExplore />
        <WhatDifferenceQbatchMaking heading="How We Make Custom Web Apps Differently" innerPage={true} />
        <DesiredResult
          heading="Is your web app failing to bring the desired result? That could be serious!"
          headingSize="text-h2"
          isButton={true}
          className="desired-result desire-result-wrapper"
          btnText="Get Started Risk-Free"
          align="d-flex justify-content-end"
        />
        <Slider
          align="center"
          heading="Lost to Launched"
          paragraph="Web Application Development Process"
          data={lostToLaunchedItems}
          className="lost-to-launched"
        />
        <LanguagesAndFrameworks />
        <Collaboration />
        <ProvenWorkExperience heading="Success Stories" paragraph="They imagined it, we brought it to the world!" />
        <PeopleFirst
          peopleFirstData={peopleFirstData}
          paragraph="You are the industry leader of today and tomorrow. Let us help you become unstoppable with versatile expertise and wide-spectrum technologies."
          heading="Happily Making Industries People-First"
        />
        <FaqSection faqQuestion={webAppFaq} />
        <StartProject />
    </Layout>
  )
};
export const Head = () => {
  const webAppData = Queries();
  const seoData = webAppData.allStrapiWebApp.nodes[0]?.seo
  const schemaData = webAppData?.allStrapiWebApp?.nodes[0]?.schema;
  
  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}
export default webapp;
