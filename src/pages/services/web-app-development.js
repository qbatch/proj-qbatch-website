import React, { lazy } from "react";

import { Queries } from '../../constants/queries';
import SeoComponent from "../../utils/seo";
import Layout from "../../components/Layout/layout";
import WebappImage from '../../../static/web-app-dev.svg'
import { webAppFaq, fullCycle, peopleFirstData, lostToLaunchedItems } from "../../constants";

const ScrollToTop = lazy(() => import('../../components/PagesComponent/ScrollTop'));
const Banner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const Achievements = lazy(() => import('../../components/PagesComponent/Achievements'));
const SliderComponent = lazy(() => import('../../components/PagesComponent/WebAppDevelopmentTrustSectionSlider'));
const SolutionToChoose = lazy(() => import('../../components/PagesComponent/SolutionToChoose'));
const FullCycle = lazy(() => import('../../components/PagesComponent/FullCicle'));
const AdvancedWebExplore = lazy(() => import('../../components/PagesComponent/ExploreOurAdvancedWeb'));
const WhatDifferenceQbatchMaking = lazy(() => import('../../components/PagesComponent/WhatDifferenceQbatchMaking'));
const DesiredResult = lazy(() => import('../../components/PagesComponent/IdeasAndInvestments'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const LanguagesAndFrameworks = lazy(() => import('../../components/PagesComponent/LanguagesAndFrameworks'));
const Collaboration = lazy(() => import('../../components/PagesComponent/Collaboration'));
const ProvenWorkExperience = lazy(() => import('../../components/PagesComponent/ProvenWorkExperience'));
const PeopleFirst = lazy(() => import('../../components/PagesComponent/PeopleFirst'));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));
const StartProject = lazy(() => import('../../components/PagesComponent/StartProject'));

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
        <FullCycle
          className="web-app-development-page"
          heading="Full-Cycle Web Application Development Services"
          paragraph="Explore the best web app solutions that escalate your performance and position in the highly saturated market."
          data={fullCycle}
          sliceIndex={4}
        />
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
