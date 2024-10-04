import React, { lazy } from 'react';

import Layout from '../../components/Layout/layout';
import { realEstateIndustryData, properyBusinessData1, properyBusinessData2, realEstateSliderData, reInnovationsData, FrequentlyAskedQuestionsHealthCareFaq } from '../../constants';
import { Queries } from '../../constants/queries';
import SEO from '../../components/Seo';

const Banner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const RealEstateIndustry = lazy(() => import('../../components/PagesComponent/EdTechPotential'));
const RealEstateBusiness = lazy(() => import('../../components/PagesComponent/RealEstateBusiness'));
const PropertyBusiness = lazy(() => import('../../components/PagesComponent/InstitutionsBenefiting'));
const RealEstateITSolutions = lazy(() => import('../../components/PagesComponent/RealEstateITSolutions'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const ScaredToInvest = lazy(() => import('../../components/PagesComponent/FeelingLikeYouAreInItAlone'));
const OnDemandFeatures = lazy(() => import('../../components/PagesComponent/OnDemandFeatures'));
const NextLevelInnovations = lazy(() => import('../../components/PagesComponent/DevOpsService'));
const RealEstateIntegration = lazy(() => import('../../components/PagesComponent/RealEstateIntegration'));
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'));
const DominateYourMarket = lazy(() => import('../../components/PagesComponent/DominateYourMarket'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));

const RealEstate = () => {
  return (
    <Layout>
      <Banner
        subheading="Real Estate Software Development"
        heading="Human-Centric PropTech Solutions for Real Estate Growth"
        paragraph="Is outdated software and endless paperwork weighing down your real estate business? Qbatch liberates you from legacy systems. We create custom PropTech solutions that are not just modern, but future-proof. Let’s lead the ever-evolving real estate landscape."
        buttonText="Let’s Build Your App"
        wrapperClass="real-estate-banner"
        col1lg={8}
        col2lg={4}
        imgSrc="/real-estate-banner.svg"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries', },
          { pathname: '/industries/real-estate', crumbLabel: 'Real Estate Software Development', crumbSeparator: '>' },
        ]}
      />
      <RealEstateIndustry
        heading='Real Estate industry challenges we help you solve.'
        subHeading="The real estate industry is built on tradition but how about leveraging technology to thrive in today's market?"
        data={realEstateIndustryData}
      />
      <RealEstateBusiness />
      <PropertyBusiness
        heading='Who We Help in the Property Business'
        desc="The real estate industry thrives on innovation, and custom software solutions can be a game-changer for various players. Here's a breakdown of who do we assist:"
        data1={properyBusinessData1}
        data2={properyBusinessData2}
        imgSrc='/property-business.svg'
        className='property-business'
      />
      <RealEstateITSolutions />
      <Slider
        data={realEstateSliderData}
        heading="Real Estate Software Development Services We Provide"
        paragraph="We specialize in developing bespoke software solutions for real estate businesses, enhancing customer retention, streamlining property management, improving service quality, and boosting employee productivity."
        width="300px"
        height="200px"
        className="realestate-slider-wrapper"
        dividerClass="real-estate-divider"
        maxWidth="100%"
      />
      <ScaredToInvest
        heading="Scared to invest? Start small, Give us a pilot project"
        desc="Let's start with a small-scale project, risk-free, and see if we suit your custom real estate software vision."
        btnText='Book Discovery Call'
      />
      <OnDemandFeatures />
      <NextLevelInnovations 
        heading="We're talking next-level innovations that will transform the way you do business:" 
        paragraph="The real estate landscape is buzzing with innovation, and we're here to be your wingman on this exciting flight. Forget clunky processes and outdated tools. We're talking cutting-edge tech that lets you soar above the competition."
        data={reInnovationsData}
        className='innovations-wrapper'
      />
       <ScaredToInvest
        heading="Technology should be an enabling force, not a burden."
        desc="We're dedicated PropTech developers who are focused on building software that feels as intuitive as talking to a trusted colleague. Simple and neat."
        btnText='Build your real estate app'
      />
      <RealEstateIntegration />
      <WhyTrustQbatch />
      <DominateYourMarket />
      <CollaborationNew borderBottom={true} />
      <FaqSection className="health-care-faq" faqQuestion={FrequentlyAskedQuestionsHealthCareFaq} />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const realEstateData = Queries()
  const seoData = realEstateData?.allStrapiRealEstate?.nodes[0]?.seo
  // const schemaData = saasDevData?.allStrapiHealthcare?.nodes[0]?.schema;
  // const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0]?.localFile?.url}
      pathname={`${seoData.slug}`}
    >
      {/* {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))} */}
    </SEO>
  )
}

export default RealEstate;
