import React from 'react';

import Layout from '../../components/Layout/layout';
import Banner from "../../components/PagesComponent/PageBanner";
import Slider from '../../components/UiComponent/Slider';
import DevelopmentServices from "../../components/PagesComponent/DevelopmentServices"
import Languages from "../../components/PagesComponent/LanguagesAndFrameworks"
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import InnerBanner from '../../components/PagesComponent/InnerBanner';
import CreativeIntelligence from "../../components/PagesComponent/CreativeIntelligence";
import Collaboration from '../../components/PagesComponent/Collaboration';
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";

import { devOpsFaq, servicesSliderData, automationData } from "../../constants";

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
        col1lg={10}
        col2lg={2}
        headingMaxWidth={'800px'}
        paragraphMaxWidth={'770px'}
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
      <Collaboration />
      <Languages heading="What Tech Stacks We Use?" paragraph="We are made of 50% people skills and 50% tools to ensure constant performance and security featuring uncompromising quality and speed. " paragraphMaxWidth={'754px'} />
      <Slider
        heading="Lost to Launched"
        paragraph="Our Ultimate Process to Success"
        data={automationData}
        align="center"
        className="competency-slider"
      />
      <ProvenWorkExperience heading="Products that Empowered Millions"/>
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
      <Collaboration />
      <FaqSection faqQuestion={devOpsFaq} />
      <CreativeIntelligence/>
      <StartProject />
    </Layout>
  );
};

export default DevOps;
