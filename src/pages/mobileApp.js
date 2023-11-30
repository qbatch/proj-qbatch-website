import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import LostToLaunched from "../components/PagesComponent/DevelopmentStages";
import WhatDifferenceQbatchMaking from "../components/PagesComponent/WhatDifferenceQbatchMaking";
import Achievements from "../components/PagesComponent/Achievements";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import Collaboration from "../components/PagesComponent/Collaboration";
import PeopleFirst from "../components/PagesComponent/PeopleFirst";
import { peopleFirstData } from "../constants";
import DesiredResult from "../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../components/PagesComponent/Faq";
import StartProject from "../components/PagesComponent/StartProject";
import AppDevelopmentServices from "../components/PagesComponent/TechnicalGuidance";
import TechnicalExcellence from "../components/PagesComponent/TechnicalExcellence";
import SecretSauce from "../components/PagesComponent/SecretSauce";
import CrewNotVendors from "../components/PagesComponent/CrewNotVendors";
import DedicatedMobileDevelopers from "../components/PagesComponent/DedicatedMobileDevelopers";
import MultiplePlatformSolutions from "../components/PagesComponent/MultiplePlatformSolutions";

import {
  lostToLaunchedItems,
  mobileAppFaq,
  developmentServicesData,
  revenueData,
} from "../constants";

const MobileApp = () => {
  return (
      <Layout>
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
                255 billion
              </a>{' '}
              app downloads in 2022 alone across the globe. So, even if they have to order a robot, they’d do it through
              a mobile app, right?!
            </>
          }
          paragraph2="The competition is crazy and so are
        we. Team Qbatch as your next mobile app development services company
        is bold enough to take on challenges and launch ground-breaking and
        goal-driven mobile apps for you."
        />
        <SecretSauce
          heading="Our Secret Sauce?"
          heading2="100% Communication & Transparency"
          desc="“We’re looking into the problem, we will update you as soon as
                we have promising information” — not a statement but a
                commitment to our clients that we are resolving the problem."
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
        <AppDevelopmentServices
          data={developmentServicesData}
          heading="Full Suite of Custom Mobile App Development Services"
          desc=" ExploreTime-tested Web Application Development tools and technologies to build a cross-platform and secure application:"
          className="development-section"
        />
        <LostToLaunched
          heading="Lost to Launched"
          desc="Our Mobile App Development Process Enroute Successs"
          sliderData={lostToLaunchedItems}
          col1={5}
          col2={7}
          subCol1={5}
          subCol2={7}
          mt="mt-4"
          className="ecom-section launched"
          isScroll={false}
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
        />
        <FaqSection faqQuestion={mobileAppFaq} />
        <StartProject />
      </Layout>
  )
};

export const Head = () => {
  const data = useStaticQuery(graphql`
    query MobileAppQuery {
      allStrapiMobileApp {
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

  const seoData = data.allStrapiMobileApp.nodes[0]?.seo 

  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keywords={seoData.keywords} />
}

export default MobileApp;
