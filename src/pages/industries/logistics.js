import React, { lazy } from 'react';

import Layout from '../../components/Layout/layout';
import Divider from '../../components/UiComponent/Divider';
import SEO from '../../components/Seo';

import { logisticsSofwareData, customLogisticsData, LogisticsSupplyChainData, PeopleWeHaveData, keyTechnologiesData, StartYourLogisticsData, supplyChainData, LogisticsFaqs } from '../../constants';
import { Queries } from '../../constants/queries';

const CtoBanner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const SolveLogistics = lazy(() => import('../../components/PagesComponent/SolveLogistics'));
const LogisticsSoftware = lazy(() => import('../../components/PagesComponent/EdTechPotential'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const FleetIssues = lazy(() => import('../../components/PagesComponent/FleetIssues'));
const SupplyChain = lazy(() => import('../../components/PagesComponent/RealEstateITSolutions'));
const PeopleWeServe = lazy(() => import('../../components/PagesComponent/ImagineRetailExperience'));
const KeyTechnologies = lazy(() => import('../../components/PagesComponent/DevOpsService'));
const StartYourLogistics = lazy(() => import('../../components/PagesComponent/StartYourHealthTech'));
const RealEstateIntegration = lazy(() => import('../../components/PagesComponent/RealEstateIntegration'));
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));

const Logistics = () => {
  return (
    <Layout>
      <CtoBanner
        subheading="Logistics and Supply Chain Software Development"
        heading="Optimize Your Supply Chain – From Clicks to Miles."
        paragraph="Don't settle for generic logistics software. Our data-driven logistics software development team strives to add real-time visibility and safety across fleet management, GPS vehicle tracking, warehouse operations, and end-to-end supply chain processes."
        buttonText="Discuss Your Project"
        wrapperClass="logistics-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/logistics-banner-img.svg"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries', },
          { pathname: '/industries/logistics', crumbLabel: 'Logistics & Supply Chain', crumbSeparator: '>' },
        ]}
      />
      <SolveLogistics />
      <LogisticsSoftware
        heading='The Power of Logistics Software: Streamline, Upgrade, and Grow'
        subHeading="There are several benefits in logistics software development and transportation management systems. We make sure you achieve all of them:"
        data={logisticsSofwareData}
        isBtn={true}
        btnText="Let's Discuss Your Needs"
      />
      <Slider
        data={customLogisticsData}
        heading="Custom Logistics and Supply Chain Software Development Services"
        paragraph="We provide business-critical solutions to enhance traceability and control across your supply chain, from inventory management to order processing."
        width="300px"
        height="200px"
        className="logistics-slider-wrapper"
        dividerClass="real-estate-divider"
        maxWidth="100%"
      />
      <FleetIssues />
      <SupplyChain
        heading="Supply Chain Management Solutions"
        desc="We’ve helped many logistics companies and software providers speed up their business processes at all decision-making levels and improve most operational, management, and strategic tasks."
        data={LogisticsSupplyChainData}
        col={6}
        isBtn={true}
        btnText="Request On-demand Solutions"
        className="logistics-supply"
      />
      <PeopleWeServe
        heading="People We Serve"
        ImagineRetailExperienceData={PeopleWeHaveData}
      />
      <KeyTechnologies
        heading="Key Technologies for Modern Logistics Software"
        paragraph="We leverage our expertise in location services, data analytics, AI/ML, platform integration, and supply chain application development to enhance experiences and foster sustainable business growth."
        data={keyTechnologiesData}
        className='innovations-wrapper'
      />
      <Divider />
      <StartYourLogistics
        heading="Start Your Logistics Software Journey Today!"
        StartYourHealthTechData={StartYourLogisticsData}
        btnText="Let’s Get Started"
      />
      <RealEstateIntegration
        heading="Integrations for Your Logistics Ecosystem"
        desc="We understand the importance of seamless data flow across your logistics operations.  That's why our logistics software development services offer integrations with a wide range of industry-standard tools and platforms:"
        data={supplyChainData}
        isBtn={true}
        className="logistics-solutions"
      />
      <WhyTrustQbatch heading='Why trust Qbatch for your business-critical Logistics project?' />
      <SuccessStories heading="Success Stories from our Logistics and Supply Chain Portfolio" className="logistics-stories" />
      <CollaborationNew borderBottom={true} />
      <FaqSection className="health-care-faq" faqQuestion={LogisticsFaqs} />
      <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const logisticsData = Queries()
  const seoData = logisticsData?.allStrapiLogistic?.nodes[0]?.seo
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

export default Logistics;
