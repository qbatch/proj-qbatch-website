import React from 'react';

import SEO from "../../components/Seo";
import { Queries } from '../../constants/queries'

import Layout from '../../components/Layout/layout';
import Banner from "../../components/PagesComponent/PageBanner";
import InnerBanner from '../../components/PagesComponent/InnerBanner';
import DevOpsService from'../../components/PagesComponent/DevOpsService';
import Slider from '../../components/UiComponent/Slider';
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import Achievements from '../../components/PagesComponent/Achievements';
import Collaboration from '../../components/PagesComponent/Collaboration';
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";

import { devOpsFaq, devOpsSliderData, whyDevOpsData } from "../../constants";
import DevOpsSupremacy from '../../components/PagesComponent/DevOpsSupremacy';
import EmbraceEnterprise from '../../components/PagesComponent/EmbraceEnterprise';
import WhyDevOps from '../../components/PagesComponent/ChoiceYourEnterprise'
import DevOpsBoxes from '../../components/PagesComponent/DevOpsBoxes';
import DevOpsTools from '../../components/PagesComponent/DevOpsTools';
import NextDevOpsProject from '../../components/PagesComponent/NextDevOpsProject';

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
        wrapperClass="dev-ops-banner"
        className="inner-container"
        col1lg={10}
        col2lg={2}
        headingMaxWidth={'890px'}
        paragraphMaxWidth={'770px'}
      />
      <DevOpsSupremacy/>
      <EmbraceEnterprise/>

      <WhyDevOps
        className="why-dev-ops"
        heading="With DevOps Engineers, You Can"
        listData={whyDevOpsData}
      />
      <DevOpsService/>
      <InnerBanner
       heading="Do you know 83% of developers release code faster with DevOps?"
       headingMaxWidth="930"
       wrapperClass="text-center"
       isButton={true}
       btnText="Hire Your DevOps Team"
       btnSpacingTop={72}
       btnAlign="center"
      />
      <DevOpsBoxes/>
       <Slider
        heading="Our DevOps Implementation Process"
        paragraph="We execute the proven CI/CD techniques and toolsets to expedite the software delivery processes from documentation to delivery. As top DevOps service providers, count on these steps for your projects:"
        data={devOpsSliderData}
        align="center"
        className="devops-slider"
        width="334"
      />
      <DevOpsTools/>
      <NextDevOpsProject/>
      <Achievements mainHeading="And it just seems to work" innerPage/>
      <InnerBanner
       heading="“80% of enterprises encounter delays in project delivery due to lack of organizational collaboration and IT maturation.”"
       headingMaxWidth="1170"
       wrapperClass="text-left"
       isButton={true}
       btnText="Start Risk-Free DevOps Journey"
       caption="Gartner"
       btnSpacingTop={72}
       btnAlign="left"
      />
      <ProvenWorkExperience heading="Products that Empowered Millions"/>
      <Collaboration />
       <FaqSection faqQuestion={devOpsFaq} />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const serviceData = Queries()
  const seoData = serviceData?.allStrapiDevop?.nodes[0]?.seo
  console.log(seoData)
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      image={seoData?.metaimage[0].localFile.url}
      pathname={`/${seoData?.slug}/`}
    />
  )
}

export default DevOps;
