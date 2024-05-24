import React from 'react';
import { Script } from 'gatsby'
import SEO from "../components/Seo";
import { Queries } from '../constants/queries'
import {replaceUnderscoreWithAt} from '../constants/Utils'
import Layout from '../components/Layout/layout';
import Banner from "../components/PagesComponent/PageBanner";
import Slider from '../components/UiComponent/Slider';
import DevelopmentServices from "../components/PagesComponent/DevelopmentServices"
import Languages from "../components/PagesComponent/LanguagesAndFrameworks"
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import InnerBanner from '../components/PagesComponent/InnerBanner';
import CreativeIntelligence from "../components/PagesComponent/CreativeIntelligence";
import Collaboration from '../components/PagesComponent/Collaboration';
import FaqSection from "../components/PagesComponent/Faq";
import StartProject from "../components/PagesComponent/StartProject";
import AgileImg from "../assets/images/agile.svg";
import ScrumImg from "../assets/images/scrum.svg"
import Achievements from '../components/PagesComponent/Achievements2';

import { servicesSliderData, lostToLaunchedItems } from "../constants";

const adaptiveSoftwareData = [
  {
    img: AgileImg,
    title: "Agile",
    description:
      "We employ an iterative and incremental SDLC, breaking large projects into manageable series of steps to achieve control and adaptability, delivering top-quality and error-free software.",
  },
  {
    img: ScrumImg,
    title: "Scrum",
    description:
      "We rely on the self-organizing framework, Scrum, to promote transparency and collaboration. It simplifies project delivery allowing our teams to self-manage and adapt to changing requirements.",
  },
];

const DevOps = () => {
  return (
    <Layout>
      <Banner
        subheading="Custom Software Development Services"
        subheadingColor={'#D2D9DC'}
        heading={
          <>
            Let’s Create Powerful Digital Products From <i>Square One.</i>
          </>
        }
        paragraph={
          <span className='banner-paragraph'>
            Explore the right tech solution for your next tech project — leveraging execution-driven devs and modern tech stacks.
          </span>
        }
        buttonText="Get Expert Advice"
        wrapperClass="services-banner"
        col1lg={8}
        col2lg={4}
        headingMaxWidth={'720px'}
        paragraphMaxWidth={'580px'}
        blogInner='/services-banner-img.svg'
        mobileViewBanner='/services-banner-img.svg'
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
        ]}
      />
      <Achievements
        showFourColumns
      />
      <DevelopmentServices/>
      <InnerBanner
       heading="Sharp Minds. Stable Code. Crash-Free Launch"
       headingMaxWidth="500px"
       wrapperClass="text-center"
       className="your-custom-class"
       isButton={true}
       btnText="Build Your Team Now"
       btnSpacingTop={72}
       btnAlign="center"
      />
      <Slider
        heading="Explore Our Technological Competency"
        data={servicesSliderData}
        align="center"
        className="competency-slider"
      />
      <Collaboration 
        expertiseData={adaptiveSoftwareData}
        heading="Adaptive Software Development Methodologies We Support"
        paragraph="Over 300 software projects are enjoying sky-high business results with our genius usage of modern software development practices. We value your investments. "
      />
      <Languages heading="What Tech Stacks We Use?" paragraph="We are made of 50% people skills and 50% tools to ensure constant performance and security featuring uncompromising quality and speed. " paragraphMaxWidth={'754px'} showBtn={true} />
      <Slider
        heading="Lost to Launched"
        paragraph="Our Ultimate Process to Success"
        height="192"
        data={lostToLaunchedItems}
        align="center"
        className="lost-to-launched"
      />
      <ProvenWorkExperience heading="Products that Empowered Millions" exploreBtn={true}/>
      <InnerBanner
       heading="Is your current project not bringing results? 
       Then bring THAT change!"
       headingMaxWidth="894px"
       wrapperClass="text-center"
       className="your-custom-class"
       isButton={true}
       btnText="Let’s Go!"
       btnSpacingTop={72}
       btnAlign="center"
      />
      <Collaboration headingClass="services-light" />
      <CreativeIntelligence/>
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const serviceData = Queries()
  const seoData = serviceData?.allStrapiDevelopementService?.nodes[0]?.seo
  const schemaData = replaceUnderscoreWithAt(seoData?.structuredData)
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      image={seoData.metaimage[0].localFile.url}
      pathname={`/${seoData.slug}/`}
    >
       {schemaData &&   <script  type="application/ld+json">
              {JSON.stringify(schemaData)}
            </script> }
            </SEO>
  )
}

export default DevOps;
