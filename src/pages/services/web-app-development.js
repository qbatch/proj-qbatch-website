import React from "react";
import Banner from '../../components/PagesComponent/PageBanner'
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";
import Slider from '../../components/UiComponent/Slider'
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
import { lostToLaunchedItems, webExpertiseData, peopleFirstData, youCanTrustData } from '../../constants'
import ResponsiveStyleWrapper from "./style";

const webapp = () => {

  return (
    <Layout>
      <ResponsiveStyleWrapper>
        <Banner
          subheading="Web Application Development Company"
          heading="If You Think Web Apps Are Old-Fashioned. Think Again"
          paragraph="88% of consumers use computers to research products and services before making a purchase. Don’t leave your potential customers confused, instead amuse them with a stunning web appearance! "
          buttonText="Kickstart Your Transformation Journey"
          wrapperClass="cto-banner"
          col1lg={12}
          className="d-flex align-items-center justify-content-start"
          blogInner={WebappImage}
          mobileViewBanner={WebappImage}
        />
        <Achievements innerPage={true} />
        <Slider
          heading="We Are Developers You Can Trust For Your Web App"
          paragraph="A web app is more than APIs and design, it’s following the human-to-human approach and building what the world needs."
          data={youCanTrustData}
        />
        <FullCycle />
        <SolutionToChoose />
        <Slider
          heading="Explore Our Advanced Web Application Expertise"
          paragraph="From legacy system modernization to developing high-performing microservices, team Qbatch has delivered 300+ custom solutions for several businesses globally."
          data={webExpertiseData}
          className="explore-slider"
        />
        <AppDevelopment />
        <WhatDifferenceQbatchMaking heading="How We Make Custom Web Apps Differently" innerPage={true} />
        <DesiredResult
          heading="Is your web app failing to bring the desired result? That could be serious!"
          isButton={true}
          className="desired-result"
          btnText="Get Started Risk-Free"
          align="d-flex justify-content-end"
        />
        <Slider
          align="center"
          heading="Lost to Launched"
          paragraph="Web Application Development Process"
          data={lostToLaunchedItems}
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
      </ResponsiveStyleWrapper>
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
      image={seoData.metaimage[0].localFile.url}
      pathname={`/services${seoData.slug}`}
    />
  )
}
export default webapp;
