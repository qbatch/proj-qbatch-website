import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import WhatDifferenceQbatchMaking from "../components/PagesComponent/WhatDifferenceQbatchMaking";
import LostToLaunched from "../components/PagesComponent/DevelopmentStages";
import LanguagesAndFrameworks from "../components/PagesComponent/LanguagesAndFrameworks";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import Collaboration from "../components/PagesComponent/Collaboration";
import PeopleFirst from "../components/PagesComponent/PeopleFirst";
import DesiredResult from "../components/PagesComponent/IdeasAndInvestments";
import FaqSection from "../components/PagesComponent/Faq";
import StartProject from "../components/PagesComponent/StartProject";
import ChoiseYourEnterprise from "../components/PagesComponent/ChoiceYourEnterprise";
import SecretSauce from "../components/PagesComponent/SecretSauce";
import SofwareDevelopmentExpertise from "../components/PagesComponent/TechnicalGuidance";
import DoYouKnow from "../components/PagesComponent/DedicatedMobileDevelopers";

import {
  lostToLaunchedItems,
  mobileAppFaq,
  choiceEnterpriseData,
  customEnterpriseData,
  developmentExpertiseData,
  technologicalCapacityData,
  peopleFirstData
} from "../constants";

const Enterprise = () => {
  return (
    <Layout>
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
       <WhatDifferenceQbatchMaking
        heading="Why Trust Qbatch for Your Enterprise Software?"
        innerPage={true}
      />
      <SecretSauce
        heading="Custom Enterprise Software Development Services"
        desc="Don’t hamper your growth by second-guessing your choices and hire Qbatch as your partner enterprise app development company to help your enterprise-level projects with the following services:"
        data={customEnterpriseData}
        className="enterprise-section"
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
      <PeopleFirst peopleFirstData={peopleFirstData} paragraph="You are the industry leader of today and tomorrow. Let us help you become unstoppable with versatile expertise and wide-spectrum technologies." heading="Happily Making Industries People-First"/>
      <DesiredResult
        heading="Got a unique mobile app idea? Learn more about development time and cost estimation!"
        isButton={true}
        className="desired-result"
        btnText="Get Free Price Estimate"
      />
      <FaqSection faqQuestion={mobileAppFaq} />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const data = useStaticQuery(graphql`
    query EnterpriseQuery {
      allStrapiEnterprise {
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

  const seoData = data.allStrapiEnterprise.nodes[0]?.seo
  
  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keyword={seoData.keywords} />
}

export default Enterprise;
