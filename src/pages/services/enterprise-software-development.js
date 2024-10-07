import React, { lazy } from "react";
import { Queries } from '../../constants/queries'
import SeoComponent from "../../utils/seo"
import BannerImage from "../../../static/enterprise-banner.png";

import {
  lostToLaunchedItems,
  enterPrisFaq,
  choiceEnterpriseData,
  customEnterpriseData,
  developmentExpertiseData,
  technologicalCapacityData,
  peopleFirstData,
  weWorkStoriesData,
} from '../../constants';

const Layout = lazy(() => import("../../components/Layout/layout"));
const Banner = lazy(() => import("../../components/PagesComponent/PageBanner"));
const ScrollToTop = lazy(() => import('../../components/PagesComponent/ScrollTop'));
const WhatDifferenceQbatchMaking = lazy(() => import("../../components/PagesComponent/WhatDifferenceQbatchMaking"));
const LanguagesAndFrameworks = lazy(() => import("../../components/PagesComponent/LanguagesAndFrameworks"));
const Collaboration = lazy(() => import("../../components/PagesComponent/Collaboration"));
const PeopleFirst = lazy(() => import("../../components/PagesComponent/PeopleFirst"));
const DesiredResult = lazy(() => import("../../components/PagesComponent/IdeasAndInvestments"));
const FaqSection = lazy(() => import("../../components/PagesComponent/Faq"));
const GridData = lazy(() => import('../../components/PagesComponent/GridData'));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));
const ChoiseYourEnterprise = lazy(() => import("../../components/PagesComponent/ChoiceYourEnterprise"));
const DoYouKnow  = lazy(() => import("../../components/PagesComponent/DedicatedMobileDevelopers"));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));

const Enterprise = () => {
  return (
    <Layout>
      <ScrollToTop />
        <Banner
          subheading="Enterprise App Development Company"
          heading="Your Great Transformation Journey Begins Here"
          paragraph="Worried about the challenges that come with a growing enter-
          prise? Get ready to build a market-ready solution inspired by the latest technology and insight with team Qbatch."
          buttonText="Explore Services"
          imgSrc={BannerImage}
          col1lg={12}
          className="d-flex align-items-center"
          wrapperClass="enterprise-banner"
          customCrumbs={[
            { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
            { pathname: `/services/enterprise-software-development/`, crumbLabel: 'Enterprise Software Development', crumbSeparator: '>' },
          ]}
        />
        <ChoiseYourEnterprise
          heading="Are You Making the Right Choice For Your Enterprise?"
          desc1=" Enterprise systems often rely on certain workflows and tools that do
            not produce outcomes the stakeholders desire. At this point, decide
            whether you want to revamp the existing enterprise infrastructure or
            build a whole new business app solution."
          desc2="Following are a few factors that may help you decide:"
          listData={choiceEnterpriseData}
          isBtn={true}
        />
        <WhatDifferenceQbatchMaking heading="Why Trust Qbatch for Your Enterprise Software?" innerPage={true} />
        <Slider
          heading="Custom Enterprise Software Development Services"
          paragraph="Don’t hamper your growth by second-guessing your choices and hire Qbatch as your partner enterprise app development company to help your enterprise-level projects with the following services:"
          data={customEnterpriseData}
          className="custom-interprise-services"
          align="center"
        />
        <DesiredResult
          heading="Kickoff Enterprise Transformation toward a scalable and human-driven future."
          headingSize="text-h2"
          isButton={true}
          align="justify-content-start"
          className="enterprise"
          btnText="Let’s Transform"
        />
        <GridData enterprise data={developmentExpertiseData} textAlign='text-center' heading='Enterprise Software Development Expertise' paragraph='Here, choose the right enterprise software solution for your business and we’ll provide you with experience-driven software architecture, flexible reconfiguration, and complete process control.' />
        {/* <Slider
          heading="Enterprise Software Development Expertise"
          paragraph="Here, choose the right enterprise software solution for your business and we’ll provide you with experience-driven software architecture, flexible reconfiguration, and complete process control."
          data={developmentExpertiseData}
          align="center"
          width="350px"
          className="enterprise-software"
        /> */}
        <ChoiseYourEnterprise
          heading="Technological Capacity To Bring That Change!"
          listData={technologicalCapacityData}
          className="capacity-section"
        />
        <DoYouKnow
          heading="Do You Know?"
          desc="Choosing the Right Technology For Your Enterprise is a Risky Business."
          btnText="Get Expert Advice"
          className="you-know-section"
        />
        <Slider
          heading="Lost to Launched"
          paragraph="Our Mobile App Development Process Enroute Successs"
          data={lostToLaunchedItems}
          align="center"
          className="lost-to-launched"
        />
        <LanguagesAndFrameworks />
        <SuccessStories data={weWorkStoriesData} />
        <Collaboration />
        <PeopleFirst
          peopleFirstData={peopleFirstData}
          paragraph="You are the industry leader of today and tomorrow. Let us help you become unstoppable with versatile expertise and wide-spectrum technologies."
          heading="Happily Making Industries People-First"
        />
        <DesiredResult
          heading="Got a unique mobile app idea? Learn more about development time and cost estimation!"
          isButton={true}
          className="desired-result"
          align="d-flex justify-content-center"
          btnText="Get Free Price Estimate"
        />
        <FaqSection faqQuestion={enterPrisFaq} />
        <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const enterpriseData = Queries()
  const seoData = enterpriseData.allStrapiEnterprise.nodes[0]?.seo;
  const schemaData = enterpriseData?.allStrapiEnterprise?.nodes[0]?.schema;

  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}

export default Enterprise;
