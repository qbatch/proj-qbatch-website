import React from "react";
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import SEO from "../../components/Seo";
import Banner from "../../components/PagesComponent/PageBanner";
import WhatDifferenceQbatchMaking from "../../components/PagesComponent/WhatDifferenceQbatchMaking";
import LostToLaunched from "../../components/PagesComponent/DevelopmentStages";
import LanguagesAndFrameworks from "../../components/PagesComponent/LanguagesAndFrameworks";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Collaboration from "../../components/PagesComponent/Collaboration";
import PeopleFirst from "../../components/PagesComponent/PeopleFirst";
import DesiredResult from "../../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";
import ChoiseYourEnterprise from "../../components/PagesComponent/ChoiceYourEnterprise";
import SecretSauce from "../../components/PagesComponent/SecretSauce";
import SofwareDevelopmentExpertise from "../../components/PagesComponent/TechnicalGuidance";
import DoYouKnow from "../../components/PagesComponent/DedicatedMobileDevelopers";
import BannerImage from "../../../static/enterprise-banner.png";

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

const Enterprise = () => {
  return (
    <Layout>
      <Banner
        subheading="Enterprise App Development Company"
        heading="Your “Great Transformation” Journey Begins Here"
        paragraph="Worried about the challenges that come with a growing enter-
          prise? Get ready to build a market-ready solution inspired by the latest technology and insight with team Qbatch."
        buttonText="Explore Services"
        imgSrc={BannerImage}
        wrapperClass="enterprise-banner"
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

      <LostToLaunched
        heading="Custom Enterprise Software Development Services"
        desc="Don’t hamper your growth by second-guessing your choices and hire Qbatch as your partner enterprise app development company to help your enterprise-level projects with the following services: "
        sliderData={customEnterpriseData}
        col1={5}
        col2={7}
        subCol1={5}
        subCol2={7}
        mt="mt-4"
        className="ecom-section product-development-service"
        isScroll={false}
        paddingLeft="0px"
        maxWidth="100%"
        minHeight="524px"
      />
      <DesiredResult
        heading="Kickoff Enterprise Transformation toward a scalable and human-driven future."
        isButton={true}
        className="enterprise"
        btnText="Let’s Transform"
      />
      <SofwareDevelopmentExpertise
        data={developmentExpertiseData}
        heading="Enterprise Software Development Expertise"
        desc="Here, choose the right enterprise software solution for your business and we’ll provide you with experience-driven software architecture, flexible reconfiguration, and complete process control."
        className="development-section enterprise"
      />
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
      <LanguagesAndFrameworks />
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
        align="d-flex justify-content-end"
        btnText="Get Free Price Estimate"
      />
      <FaqSection faqQuestion={enterPrisFaq} />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
    const enterpriseData = Queries()

  const seoData = enterpriseData.allStrapiEnterprise.nodes[0]?.seo
  
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

export default Enterprise;
