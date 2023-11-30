import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";
import WebappBanner from "../../components/PagesComponent/WebappBanner";
import Achievements from "../../components/PagesComponent/Achievements";
import DesiredResult from "../../components/PagesComponent/IdeasAndInvestments";
import AppDevelopment from "../../components/PagesComponent/AppDevelopmentService";
import WhatDifferenceQbatchMaking from "../../components/PagesComponent/WhatDifferenceQbatchMaking";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import StartProject from "../../components/PagesComponent/StartProject";
import SolutionToChoose from "../../components/PagesComponent/SolutionToChoose";
import FullCycle from "../../components/PagesComponent/FullCicle";
import Collaboration from "../../components/PagesComponent/Collaboration";
import FaqSection from "../../components/PagesComponent/Faq";
import PeopleFirst from "../../components/PagesComponent/PeopleFirst";
import YouCanTrust from "../../components/PagesComponent/YouCanTrust";
import { webAppFaq } from "../../constants";
import LostToLaunched from "../../components/PagesComponent/DevelopmentStages";
import LanguagesAndFrameworks from "../../components/PagesComponent/LanguagesAndFrameworks";
import WebExpertise from "../../components/PagesComponent/TechnicalGuidance";
import { lostToLaunchedItems, webExpertiseData, peopleFirstData } from "../../constants";

const webapp = () => {

  return (
    <Layout>
      <WebappBanner />
      <Achievements innerPage={true} />
      <YouCanTrust />
      <FullCycle />
      <SolutionToChoose />
      <WebExpertise
        data={webExpertiseData}
        heading="Explore Our Advanced Web Application Expertise"
        desc="From legacy system modernization to developing high-performing microservices, team Qbatch has delivered 300+ custom solutions for several businesses globally. "
        className="expertise-section"
      />
      <AppDevelopment />
      <WhatDifferenceQbatchMaking
        heading="How We Make Custom Web Apps Differently"
        innerPage={true}
      />
      <DesiredResult
        heading="Is your web app failing to bring the desired result? That could be serious!"
        isButton={true}
        className="desired-result"
        btnText="Get Started Risk-Free"
      />
      <LostToLaunched
        heading="Lost to Launched"
        desc="Web Application Development Process"
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
      <Collaboration heading="text-h2" />
      <ProvenWorkExperience
        heading="Success Stories"
        paragraph="They imagined it, we brought it to the world!"
      />
       <PeopleFirst peopleFirstData={peopleFirstData} paragraph="You are the industry leader of today and tomorrow. Let us help you become unstoppable with versatile expertise and wide-spectrum technologies." heading="Happily Making Industries People-First"/>
      <FaqSection faqQuestion={webAppFaq} />
      <StartProject />
    </Layout>
  );
};
export const Head = () => {
  const data = useStaticQuery(graphql`
    query WebAppQuery{
      allStrapiWebApp {
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

  const seoData = data.allStrapiWebApp.nodes[0]?.seo[0]

  return <SEO title={seoData.metaTitle} description={seoData.metaDescription} keywords={seoData.keywords} />
}
export default webapp;
