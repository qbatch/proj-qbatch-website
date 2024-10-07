import React, { lazy } from "react";
import BannerImage from "../../../static/mobile-app-banner.svg";

import SeoComponent from "../../utils/seo"
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import {
  lostToLaunchedItems,
  mobileAppFaq,
  revenueData,
  multiPlatformData,
  weWorkStoriesData
} from "../../constants";
import { peopleFirstData } from "../../constants";

const ScrollToTop = lazy(() => import('../../components/PagesComponent/ScrollTop'));
const WhatDifferenceQbatchMaking = lazy(() => import("../../components/PagesComponent/WhatDifferenceQbatchMaking"));
const Achievements = lazy(() => import("../../components/PagesComponent/Achievements"));
const SuccessStories = lazy(() => import("../../components/PagesComponent/SuccessStoriesNew"));
const Collaboration = lazy(() => import("../../components/PagesComponent/Collaboration"));
const PeopleFirst = lazy(() => import("../../components/PagesComponent/PeopleFirst"));
const DesiredResult = lazy(() => import("../../components/PagesComponent/IdeasAndInvestments"));
const FaqSection = lazy(() => import("../../components/PagesComponent/Faq"));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));
const TechnicalExcellence = lazy(() => import("../../components/PagesComponent/TechnicalExcellence"));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const Banner = lazy(() => import("../../components/PagesComponent/PageBanner"));
const CrewNotVendors = lazy(() => import("../../components/PagesComponent/CrewNotVendors"));
const DedicatedMobileDevelopers = lazy(() => import("../../components/PagesComponent/DedicatedMobileDevelopers"));
const MultiplePlatformSolutions = lazy(() => import("../../components/PagesComponent/MultiplePlatformSolutions"));
const SectionMobileApp = lazy(() => import("../../components/PagesComponent/SectionMobileAppSlider"));


const MobileApp = () => {
  return (

    <Layout>
      <ScrollToTop />
      <Banner
        subheading="Mobile App Development"
        heading="Deliver Powerful Mobile App Experiences"
        paragraph="We build dynamic and future-ready mobile apps for startups
          and large-scale enterprises across devices and operating 
          systems."
        buttonText="Kickstart Your Transformation Journey"
        wrapperClass="cto-banner mobile-app-dev"
        blogInner={BannerImage}
        mobileViewBanner={BannerImage}
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/mobile-app-development/', crumbLabel: 'Mobile App Development' },
        ]}
      />
      <TechnicalExcellence
        heading="Robots won’t use your mobile apps, Humans will!"
        title={false}
        className="mobile-apps"
        paragraph1={
          <>
            Worried that robots and machines will take over? Above
            <a className="amount-link-text" href="https://www.insiderintelligence.com/insights/mobile-users-smartphone-usage/" target="blank">
              6,378 billion
            </a>
            smartphone users made
            <a
              className="amount-link-text"
              href="https://www.statista.com/statistics/271644/worldwide-free-and-paid-mobile-app-store-downloads/"
              target="blank"
            >
              257 billion
            </a>
            app downloads in 2022 alone across the globe. So, even if they have to order a robot, they’d do it through a mobile app, right?!
          </>
        }
        paragraph2="The competition is crazy and so are 
         we. Team Qbatch as your next mobile
         app development services company is bold enough to take on challenges and
         launch ground-breaking and goal-driven mobile apps for you."
      />
      <Slider
        heading="Our Secret Sauce?"
        seconedHeading="100% Communication & Transparency"
        paragraph="We’re looking into the problem, we will update you as soon as
                we have promising information” — not a statement but a
                commitment to our clients that we are resolving the problem."
        maxWidth="697px"
        data={revenueData}
        className="our-secret-sauce our-secret-slider "
      />
      <CrewNotVendors />
      <MultiplePlatformSolutions 
      data={multiPlatformData}
      heading="Mission-Critical Mobile App Development Solutions For Multiple Platforms"
      paragraph="We offer multi-disciplinary mobile app development services that
      are not limited to"
      />
      <DedicatedMobileDevelopers
        heading="Hire Dedicated Mobile App Developers"
        desc="For building stunning mobile apps"
        isList={true}
        btnText="Get Your Devs"
      />
      <SectionMobileApp />
      <Slider
        heading="Lost to Launched"
        paragraph="Our Mobile App Development Process Enroute Successs"
        data={lostToLaunchedItems}
        align="center"
        className="lost-to-launched-mb"
      />
      <WhatDifferenceQbatchMaking heading="How We Make Custom Web Apps Differently" innerPage={true} />
      <Achievements mainHeading="And it just seems to work" labelText="Here's what stats and our clients have to say:" innerPage={true} />
      <SuccessStories data={weWorkStoriesData} />
      <Collaboration heading="Collaboration Models For Everlasting Partnerships" />
      <PeopleFirst
        peopleFirstData={peopleFirstData}
        paragraph="You are the industry leader of today and tomorrow. Let us help you become unstoppable with versatile expertise and wide-spectrum technologies."
        heading="Happily Making Industries People-First"
      />
      <DesiredResult
        heading="Got a unique mobile app idea? Learn more about development time and cost estimation!"
        isButton={true}
        className="desired-result"
        btnText="Get Free Price Estimate"
        align='d-flex justify-content-center'
      />
      <FaqSection faqQuestion={mobileAppFaq} />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const mobileAppData = Queries()
  const seoData = mobileAppData.allStrapiMobileApp.nodes[0]?.seo
  const schemaData = mobileAppData?.allStrapiMobileApp?.nodes[0]?.schema;
  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}

export default MobileApp;
