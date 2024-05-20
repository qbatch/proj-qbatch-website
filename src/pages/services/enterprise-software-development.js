import React from "react";
import { Script } from 'gatsby'
import {replaceUnderscoreWithAt} from '../../constants/Utils'
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import SEO from "../../components/Seo";
import Banner from "../../components/PagesComponent/PageBanner";
import ScrollToTop from '../../components/PagesComponent/ScrollTop';
import WhatDifferenceQbatchMaking from "../../components/PagesComponent/WhatDifferenceQbatchMaking";
import LostToLaunched from "../../components/PagesComponent/DevelopmentStages";
import LanguagesAndFrameworks from "../../components/PagesComponent/LanguagesAndFrameworks";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Collaboration from "../../components/PagesComponent/Collaboration";
import PeopleFirst from "../../components/PagesComponent/PeopleFirst";
import DesiredResult from "../../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../../components/PagesComponent/Faq";
import GridData from '../../components/PagesComponent/GridData'
import StartProject from "../../components/PagesComponent/StartProject";
import ChoiseYourEnterprise from "../../components/PagesComponent/ChoiceYourEnterprise";
import SecretSauce from "../../components/PagesComponent/SecretSauce";
import SofwareDevelopmentExpertise from "../../components/PagesComponent/TechnicalGuidance";
import DoYouKnow from "../../components/PagesComponent/DedicatedMobileDevelopers";
import BannerImage from "../../../static/enterprise-banner.png";
import Slider from '../../components/UiComponent/Slider'
import {
  lostToLaunchedItems,
  enterPrisFaq,
  choiceEnterpriseData,
  customEnterpriseData,
  developmentExpertiseData,
  technologicalCapacityData,
  peopleFirstData,
  productDevlopmentServices,
} from '../../constants'
import ResponsiveStyleWrapper from "./style";

const Enterprise = () => {
  return (
    <Layout>
      <ScrollToTop />
      <ResponsiveStyleWrapper>
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
        <ProvenWorkExperience heading="Mobile apps that have inspired Millions of users" />
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
      </ResponsiveStyleWrapper>
    </Layout>
  )
};

export const Head = () => {
  const enterpriseData = Queries()

  const seoData = enterpriseData.allStrapiEnterprise.nodes[0]?.seo
  const schemaData = replaceUnderscoreWithAt(seoData?.structuredData)

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      image={seoData.metaimage[0].localFile.url}
      robots={seoData.metaRobots}
      pathname={`/services${seoData.slug}`}
    >
      {schemaData &&   <Script  type="application/ld+json">
      {JSON.stringify(schemaData)}
    </Script> }
    </SEO>
  )
}

export default Enterprise;
