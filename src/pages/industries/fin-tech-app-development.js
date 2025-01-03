import React, { lazy } from 'react'
import Layout from '../../components/Layout/layout'

import { FinTechAppDevelopmentFAQ, AccelerateYourFinanceFunctionsCardData, SimplifyYourRetaiFintechAppDevelopmentProcessData, collaborationDataNew } from '../../constants';

import SEO from '../../components/Seo'
import { Queries } from '../../constants/queries'

const StartYourHealthTech = lazy(() => import('../../components/PagesComponent/StartYourHealthTech'));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'))
const CtoBanner = lazy(() => import('../../components/PagesComponent/PageBanner'))
const FinTechChallenges = lazy(() => import('../../components/PagesComponent/ fintechChallenges'))
const FinTechAppDevelopmentServices = lazy(() => import('../../components/PagesComponent/FinTechAppDevelopmentServices'))
const FinTechBeyondTheBasics = lazy(() => import('../../components/PagesComponent/FinTechBeyondTheBasics'))
const UsersNowManageTheirFinances = lazy(() => import('../../components/PagesComponent/UsersNowManageTheirFinances'))
const TechnologyToFastTrack = lazy(() => import('../../components/PagesComponent/TechnologyToFastTrack'))
const IroncladSecurityMeasures = lazy(() => import('../../components/PagesComponent/ IroncladSecurityMeasures'))
const BoostEfficiencyEnhanceSecurity = lazy(() => import('../../components/PagesComponent/BoostEfficiencyEnhanceSecurity'))
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'))
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'))
const SuccessStoriesNew = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'))
const NextLevelInnovations = lazy(() => import('../../components/PagesComponent/DevOpsService'));

const FinTechAppDevelopment = () => {
  return (
    <Layout>
      <CtoBanner
        subheading="FinTech App Development"
        heading="Build a Killer Fintech App. Disrupt Finance. Own the Future. "
        paragraph="Customers prefer mobile-first experiences over brick-and-mortar. Legacy systems lag behind modern fintech solutions. Let's seize these revolutionary challenges and engineer fintech apps that create waves, not ripples."
        buttonText="Discuss Your Project"
        wrapperClass="hire-developer-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/fin-teck.svg"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries', },
          { pathname: '/industries/fin-tech-app-development/', crumbLabel: 'FinTech App Development', crumbSeparator: '>' },
        ]}
      />
      <FinTechChallenges />
      <FinTechAppDevelopmentServices />
      <FinTechBeyondTheBasics />
      <UsersNowManageTheirFinances />
      <TechnologyToFastTrack />
      <IroncladSecurityMeasures />
      <NextLevelInnovations
        heading="How do we help you accelerate your finance functions?"
        paragraph="We go beyond simply building software. You deserve Fintech Value — at its best. We understand the intricacies of financial technology and the challenges modern financial institutions face."
        data={AccelerateYourFinanceFunctionsCardData}
        className='innovations-wrapper'
      />
      <BoostEfficiencyEnhanceSecurity />
      <StartYourHealthTech className="" heading="4-Step Easy Fintech App Development Process" StartYourHealthTechData={SimplifyYourRetaiFintechAppDevelopmentProcessData} />
      <WhyTrustQbatch finTech="- Spectacular Price-Quality Ratio" heading='Why trust Qbatch for your business-critical FinTech project?' />
      <CollaborationNew collaborationDataNew={collaborationDataNew} borderBottom={true} />
      <SuccessStoriesNew heading="Our Fintech Success Stories" />
      <FaqSection className="health-care-faq" faqQuestion={FinTechAppDevelopmentFAQ} />
      <StartProject />

    </Layout>
  )
}

export default FinTechAppDevelopment;
export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiFinTechAppDevelopment?.nodes[0]?.seo
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
