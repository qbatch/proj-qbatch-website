import React, { lazy } from 'react'
import Layout from '../../components/Layout/layout'
import { FrequentlyAskedQuestionsHealthCareFaq, weWorkStoriesData } from '../../constants';
import { Queries } from '../../constants/queries';
import { replaceUnderscoreWithAt } from '../../constants/Utils';
import SEO from '../../components/Seo';

const CtoBanner  = lazy(() => import('../../components/PagesComponent/PageBanner'))
const FaqSection  = lazy(() => import('../../components/PagesComponent/Faq'))
const HealthCare  = lazy(() => import('../../components/PagesComponent/HealthCareSection'))
const EdTechPotential  = lazy(() => import('../../components/PagesComponent/EdTechPotential'))
const HealthcareAppDevelopment  = lazy(() => import('../../components/PagesComponent/HealthcareAppDevelopment'))
const HumanizingHealthcare  = lazy(() => import('../../components/PagesComponent/HumanizingHealthcare'))
const HealthcareIndustryLeaders  = lazy(() => import('../../components/PagesComponent/HealthcareIndustryLeaders'))
const InstitutionsBenefiting  = lazy(() => import('../../components/PagesComponent/InstitutionsBenefiting'))
const StartYourHealthTech  = lazy(() => import('../../components/PagesComponent/StartYourHealthTech'))
const WhyTrustQbatch  = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'))
const StartProject  = lazy(() => import("../../components/PagesComponent/StartProject"));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));


const HealthCareAppDevelopment = () => {
  return (
    <Layout>
      <CtoBanner
        subheading="Healthcare Software Development"
        heading="Revolutionizing Healthcare: Accessible Care For All "
        paragraph="Is your healthcare practice dealing with data laundering, worker burnout, little patient-provider time, patient distrust, old tech, or a poorly trained workforce? Let’s turn your healthcare burdens into boons with our value-based HealthTech solutions.  "
        buttonText="Discuss Your Project"
        wrapperClass="hire-developer-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/health.svg"
        gridClass="justify-content-between w-100 align-items-center"
      // customCrumbs={[
      //   { pathname: '/hire-developers/', crumbLabel: 'Hire Developers', crumbSeparator: '>' },
      // ]}
      />
      <HealthCare />
      <EdTechPotential />
      <HealthcareAppDevelopment />
      <HumanizingHealthcare />
      <HealthcareIndustryLeaders />
      <InstitutionsBenefiting />
      <StartYourHealthTech />
      <WhyTrustQbatch />
      <SuccessStories heading="Success Stories From Qbatch’s Healthcare Portfolio" data={weWorkStoriesData} />
      <CollaborationNew />
      <FaqSection className="health-care-faq" faqQuestion={FrequentlyAskedQuestionsHealthCareFaq} />
      <StartProject />
    
    </Layout>
  )
}

export const Head = () => {
  const saasDevData = Queries()
  const seoData = saasDevData?.allStrapiHealthcare?.nodes[0]?.seo
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

export default HealthCareAppDevelopment