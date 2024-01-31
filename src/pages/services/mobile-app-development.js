import React from "react";
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";
import LostToLaunched from "../../components/PagesComponent/DevelopmentStages";
import WhatDifferenceQbatchMaking from "../../components/PagesComponent/WhatDifferenceQbatchMaking";
import Achievements from "../../components/PagesComponent/Achievements";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Collaboration from "../../components/PagesComponent/Collaboration";
import PeopleFirst from "../../components/PagesComponent/PeopleFirst";
import { peopleFirstData } from "../../constants";
import DesiredResult from "../../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";
import AppDevelopmentServices from "../../components/PagesComponent/TechnicalGuidance";
import TechnicalExcellence from "../../components/PagesComponent/TechnicalExcellence";
import SecretSauce from "../../components/PagesComponent/SecretSauce";
import Slider from '../../components/UiComponent/Slider'
import Banner from "../../components/PagesComponent/PageBanner";
import CrewNotVendors from "../../components/PagesComponent/CrewNotVendors";
import DedicatedMobileDevelopers from "../../components/PagesComponent/DedicatedMobileDevelopers";
import MultiplePlatformSolutions from "../../components/PagesComponent/MultiplePlatformSolutions";
import BannerImage from "../../../static/mobile-app-banner.png";

import {
  lostToLaunchedItems,
  mobileAppFaq,
  developmentServicesData,
  revenueData,
} from "../../constants";

const MobileApp = () => {
  return (
    <Layout>
      <Banner
        subheading="Mobile App Development"
        heading="Deliver Powerful Mobile App Experiences"
        paragraph="We build dynamic and future-ready mobile apps for startups and large-scale enterprises across devices and operating systems."
        buttonText="Kickstart Your Transformation Journey"
        imgSrc={BannerImage}
        wrapperClass="mobile-app-banner"
      />
      <TechnicalExcellence
        heading="Robots won’t use your mobile apps, Humans will!"
        title={false}
        className="mobile-apps"
        paragraph1={
          <>
            Worried that robots and machines will take over? Above{' '}
            <a href="https://www.insiderintelligence.com/insights/mobile-users-smartphone-usage/" target="blank">
              6,378 billion{' '}
            </a>
            smartphone users made{' '}
            <a
              href="https://www.statista.com/statistics/271644/worldwide-free-and-paid-mobile-app-store-downloads/"
              target="blank"
            >
              257 billion
            </a>{' '}
            app downloads in 2023 alone across the globe. So, even if they have to order a robot, they’d do it through a
            mobile app, right?!
          </>
        }
        paragraph2="The competition is crazy and so are
        we. Team Qbatch as your next mobile app development services company
        is bold enough to take on challenges and launch ground-breaking and
        goal-driven mobile apps for you."
      />
      {/* <SecretSauce
        heading="Our Secret Sauce?"
        heading2="100% Communication & Transparency"
        desc="“We’re looking into the problem, we will update you as soon as
                we have promising information” — not a statement but a
                commitment to our clients that we are resolving the problem."
        data={revenueData}
      /> */}
      <Slider
        heading="Our Secret Sauce?"
        seconedHeading="100% Communication & Transparency"
        paragraph="We’re looking into the problem, we will update you as soon as
                we have promising information” — not a statement but a
                commitment to our clients that we are resolving the problem."
        maxWidth="697px"
        data={revenueData}
      />
      <CrewNotVendors />
      <MultiplePlatformSolutions />
      <DedicatedMobileDevelopers
        heading="Hire Dedicated Mobile App Developers"
        desc="For building stunning mobile apps"
        isList={true}
        btnText="Get Your Devs"
      />
      <Slider
        heading="Full Suite of Custom Mobile App Development Services"
        paragraph="ExploreTime-tested Web Application Development tools and technologies to build a cross-platform and secure application:"
        data={developmentServicesData}
        width="350px"
      />
      <Slider
        heading="Lost to Launched"
        paragraph="Our Mobile App Development Process Enroute Successs"
        data={lostToLaunchedItems}
        align="center"
      />
      <WhatDifferenceQbatchMaking heading="How We Make Custom Web Apps Differently" innerPage={true} />
      <Achievements innerPage={true} />
      <ProvenWorkExperience heading="Mobile apps that have inspired Millions of users" />
      <Collaboration heading="text-h2" />
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
        align='d-flex justify-content-end'
      />
      <FaqSection faqQuestion={mobileAppFaq} />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
    const mobileAppData = Queries()

  const seoData = mobileAppData.allStrapiMobileApp.nodes[0]?.seo
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

export default MobileApp;
