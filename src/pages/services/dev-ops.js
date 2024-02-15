import React from 'react';

import Layout from '../../components/Layout/layout';
import Banner from "../../components/PagesComponent/PageBanner";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Achievements from '../../components/PagesComponent/Achievements';
import Collaboration from '../../components/PagesComponent/Collaboration';
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";

import { devOpsFaq } from "../../constants";

const DevOps = () => {
  return (
    <Layout>
      <Banner
        subheading="Trusted DevOps Service Providers"
        subheadingColor={'#D2D9DC'}
        heading="Beyond Silo Mentality, Towards Shared Responsibility"
        paragraph={
          <span className='banner-paragraph'>
            Let’s go beyond misaligned goals, patchy processes, and communication gaps, and deliver high-quality apps without worrying about the underlying infrastructure with our <i>DevOps services and solutions.</i> <br /><br />
            No more <i>"throw it over the wall"</i> mentality only clear communication and continuous value.
          </span>
        }
        buttonText="Get Free CTO Consultation"
        wrapperClass="cto-banner"
        col1lg={10}
        col2lg={2}
        headingMaxWidth={'890px'}
        paragraphMaxWidth={'770px'}
      />
      <Achievements mainHeading="And it just seems to work" innerPage/>
      <ProvenWorkExperience heading="Products that Empowered Millions"/>
      <Collaboration />
       <FaqSection faqQuestion={devOpsFaq} />
      <StartProject />
    </Layout>
  );
};

export default DevOps;
