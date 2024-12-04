import React, { lazy } from 'react';

import { Queries } from '../../constants/queries'
import { replaceUnderscoreWithAt } from '../../constants/Utils'
import SEO from "../../components/Seo";
import Layout from '../../components/Layout/layout';

const Banner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const DevelopmentServices = lazy(() => import('../../components/PagesComponent/DevelopmentServices'));
const Languages = lazy(() => import('../../components/PagesComponent/LanguagesAndFrameworks'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const InnerBanner = lazy(() => import('../../components/PagesComponent/InnerBanner'));
const CreativeIntelligence = lazy(() => import('../../components/PagesComponent/CreativeIntelligence'));
const Collaboration = lazy(() => import('../../components/PagesComponent/Collaboration'));
const StartProject = lazy(() => import('../../components/PagesComponent/StartProject'));
const Achievements = lazy(() => import('../../components/PagesComponent/Achievements2'));

import { servicesSliderData, lostToLaunchedItems, servicesPageData } from "../../constants";

const adaptiveSoftwareData = [
  {
    img: '/agile.svg',
    title: "Agile",
    description:
      "We employ an iterative and incremental SDLC, breaking large projects into manageable series of steps to achieve control and adaptability, delivering top-quality and error-free software.",
  },
  {
    img: "/scrum.svg",
    title: "Scrum",
    description:
      "We rely on the self-organizing framework, Scrum, to promote transparency and collaboration. It simplifies project delivery allowing our teams to self-manage and adapt to changing requirements.",
  },
];

const Index = () => {
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
        imgSrc='/services-banner-img.svg'
        mobileViewBanner='/services-banner-img.svg'
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
        ]}
      />
      <Achievements />
      <DevelopmentServices servicesData={servicesPageData} />
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
        width="393px"
        height="396px"
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
      <SuccessStories />
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
      <CreativeIntelligence />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const serviceData = Queries();
  const seoData = serviceData?.allStrapiDevelopementService?.nodes[0]?.seo;
  const schemaData = serviceData?.allStrapiDevelopementService?.nodes[0]?.schema;
  const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      image={seoData.metaimage[0].localFile.url}
      pathname={seoData.slug}
    >
      {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} async type="application/ld+json">
              {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))}
    </SEO>
  )
}

export default Index;
