import React from "react";
import Banner from '../../components/PagesComponent/PageBanner'
import { Queries } from '../../constants/queries'
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
import WebappImage from '../../../static/web-app-dev.svg'
import { lostToLaunchedItems, webExpertiseData, peopleFirstData } from "../../constants";

const webapp = () => {

  return (
    <Layout>
      <Banner
        subheading="Web Application Development Company"
        heading="If You Think Web Apps Are Old-Fashioned. Think Again"
        paragraph="88% of consumers use computers to research products and services before making a purchase. Don’t leave your potential customers confused, instead amuse them with a stunning web appearance! "
        buttonText="Kickstart Your Transformation Journey"
        wrapperClass="cto-banner"
        blogInner={WebappImage}
      />
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
      <WhatDifferenceQbatchMaking heading="How We Make Custom Web Apps Differently" innerPage={true} />
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
  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={`/services${seoData.slug}`}
    />
  )
}
export default webapp;
