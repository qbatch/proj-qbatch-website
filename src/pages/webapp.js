import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout/layout";
import WebappBanner from "../components/PagesComponent/WebappBanner";
import Achievements from "../components/PagesComponent/Achievements";
import DesiredResult from "../components/PagesComponent/IdeasAndInvestments";
import AppDevelopment from "../components/PagesComponent/AppDevelopmentService";
import WhatDifferenceQbatchMaking from "../components/PagesComponent/WhatDifferenceQbatchMaking";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import StartProject from "../components/PagesComponent/StartProject";
import SolutionToChoose from "../components/PagesComponent/SolutionToChoose";
import FullCycle from "../components/PagesComponent/FullCicle";
import Collaboration from "../components/PagesComponent/Collaboration";
import FaqSection from "../components/PagesComponent/Faq";
import PeopleFirst from "../components/PagesComponent/PeopleFirst";
import YouCanTrust from "../components/PagesComponent/YouCanTrust";
import { webAppFaq } from "../constants";
import LostToLaunched from "../components/PagesComponent/DevelopmentStages";
import LanguagesAndFrameworks from "../components/PagesComponent/LanguagesAndFrameworks";
import WebExpertise from "../components/PagesComponent/TechnicalGuidance";
import { lostToLaunchedItems, webExpertiseData } from "../constants";

const webapp = () => {
  return (
    <Layout>
      <WebappBanner />
      <Achievements page="home" innerPage={true} />
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
      />
      <LostToLaunched
        heading="Lost to Launched"
        desc="Web Application Development Process"
        sliderData={lostToLaunchedItems}
        col1={5}
        col2={7}
        subCol1={6}
        subCol2={6}
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
      <PeopleFirst />
      <FaqSection faqQuestion={webAppFaq} />
      <StartProject />
    </Layout>
  );
};
export const Head = () => <SEO title="webapp development" />;
export default webapp;
