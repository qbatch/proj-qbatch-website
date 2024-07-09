import React from 'react';
import SeoComponent from "../../utils/seo"
import { Queries } from '../../constants/queries'
import Layout from '../../components/Layout/layout';
import Banner from "../../components/PagesComponent/PageBanner";
import ProvenWorkExperience from "../../components/PagesComponent/ProvenWorkExperience";
import EdTechPotential from '../../components/PagesComponent/ChoiceYourEnterprise'
import FaqSection from "../../components/PagesComponent/Faq";
import SaasInnerBanner from '../../components/PagesComponent/ExtensionInnerBanner';
import StartProject from "../../components/PagesComponent/StartProject";
import OurSaasDev from '../../components/PagesComponent/ChoiceYourEnterprise'
import Slider from '../../components/UiComponent/Slider';
import DesiredResult from '../../components/PagesComponent/IdeasAndInvestments'
import FullCycle from "../../components/PagesComponent/FullCicle";
import Collaboration from '../../components/PagesComponent/Collaboration'
import CriticalEdTech from '../../components/PagesComponent/CriticalEdTech'
import MultiplePlatformSolutions from "../../components/PagesComponent/MultiplePlatformSolutions";
import ExtensionType from "../../components/PagesComponent/ExtensionTypes";
import MvpDevelopmentService from '../../components/PagesComponent/MvpDevelopmentService';


import { EduCommitment, EdTechData, educationFaq, EducationSlider, SaasDevelop, EduForAll, GridData, EduTech, EduFeatures, EduIntigrations } from "../../constants";
import BannerImg from "../../../static/education-app-development-banner.svg"

const EduDevelopment = () => {

  return (
    <Layout>
      <Banner
        subheading="Education Software Development Services"
        subheadingColor={'#D2D9DC'}
        heading="Let’s Reimagine Education! Build Learning Tools & Educate Better"
        paragraph={
          <span className='banner-paragraph'>
            Tired of bulky, single-device educational apps? Imagine an interactive e-learning experience that empowers easy access to knowledge anytime, anywhere. Let's create a future of limitless learning with our expert education app developers.
          </span>
        }
        imgSrc={BannerImg}
        buttonText="Begin Your EdTech Journey"
        wrapperClass="saas-dev"
        className="inner-container"
        col1lg={7}
        col2lg={5}
        headingMaxWidth={'700px'}
        paragraphMaxWidth={'718px'}
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/saas-development/', crumbLabel: 'Saas Development' },
        ]}
      />

      <EdTechPotential
        heading="EdTech’s potential is vast but new. There are development challenges but also solutions."
        listData={EdTechData}
        className="ed-tech-potential"
      />
      <Slider
        heading="Qbatch’s Education App Development Services"
        paragraph={
          <span>
            Ensuring responsible software development for mindful learning and growth.
          </span>
        }
        data={EducationSlider}
        align="center"
        className="saas-slider"
        width="420"
        dividerClass="d-none"
      />
      <DesiredResult
        heading="Transform Learning. Empower All."
        isButton={true}
        caption="We provide comprehensive education app development services for your students and employees."
        btnText="Build Your Dream EdTech App"
        headingSize="text-h2"
        className="edu-dev-component"
      />
      <ExtensionType
        heading="Unmatched Features for Engaging Learning"
        paragraph="Qbatch's eLearning app development goes beyond the basics. We combine our expertise with cutting-edge features to create a truly immersive learning experience:"
        data={EduFeatures}
        wrapperClass="edu-learning"
      />
      <OurSaasDev
        heading="Education For All, Right?"
        desc1="We help you deliver life-changing learning experiences to your learners with our customized solutions for the education industry."
        className="edu-for-all"
        listData={EduForAll}
        btnText="Get Your Custom EdTech Solution"
        isBtn
        buttonText="Get Your Custom EdTech Solution"
        btnLink='/industries/education-software-development/#start-project'
      />

      <ExtensionType
        heading="Power of Integrated Learning — On Your Fingertips"
        paragraph="Build a unified learning ecosystem that seamlessly integrates with existing tools."
        data={EduIntigrations}
        wrapperClass="power-integrate"
        btnText="Need Technical Guidance?"
      />
      <MvpDevelopmentService
        heading="Our Commitment to Responsible Education Software Development"
        serviceData={EduCommitment}
        className="edu-commitment"
        paragraph="Qbatch helps businesses and educational institutions transform learning and educate people better!"
      />
      <SaasInnerBanner
        bannerImg="/edu-banner.svg"
        heading="Ready to meet your ambitious EdTech team?"
        paragraph="Together, we create powerful learning experiences that inspire, empower, and make a lasting impact."
        headingMaxWidth="811px"
        paragraphMaxWidth="811px"
        className="edu-inner-banner"
        headingSize="ms-0"
        paragraphSize="text-h5"
        wrapperClass="text-lg-start text-center extension-banner-inner"
        isButton={true}
        btnText="Contact Qbatch today!"
        btnSpacingTop={32}
        btnAlign="left"
      />
      <MultiplePlatformSolutions
        data={EduTech}
        heading="Technology For Your Educational App"
        paragraph="We help you adapt to the shifting eLearning environment using the latest and proven technologies."
      />
      <CriticalEdTech
        data={GridData}
        heading="Why trust Qbatch for your business-critical EdTech project?"
      />
      <Collaboration />
      <ProvenWorkExperience
        headerClass="saas-dev-experience"
        heading="Our EdTech Success Stories"
        paragraphWidth="1280px"
      />
      <FaqSection faqQuestion={educationFaq} />
      <StartProject
        heading="Start a Project"
        id="start-project"
      />
    </Layout>
  );
};
export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiEducationDev?.nodes[0]?.seo
  const schemaData = saasDevData?.allStrapiEducationDev?.nodes[0]?.schema;
  return (
    <SeoComponent seoData={seoData} schemaData={schemaData} />
  )
}

export default EduDevelopment;
