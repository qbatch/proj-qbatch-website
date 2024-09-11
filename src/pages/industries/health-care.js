import React from 'react'
import Layout from '../../components/Layout/layout'
import CtoBanner from '../../components/PagesComponent/PageBanner'
import HealthCare from '../../components/PagesComponent/HealthCareSection'
import EdTechPotential from '../../components/PagesComponent/EdTechPotential'
import HealthcareAppDevelopment from '../../components/PagesComponent/HealthcareAppDevelopment'
import HumanizingHealthcare from '../../components/PagesComponent/HumanizingHealthcare'
import HealthcareIndustryLeaders from '../../components/PagesComponent/HealthcareIndustryLeaders'
import InstitutionsBenefiting from '../../components/PagesComponent/InstitutionsBenefiting'
import StartYourHealthTech from '../../components/PagesComponent/StartYourHealthTech'
import WhyTrustQbatch from '../../components/PagesComponent/WhyTrustQbatch'
import StartProject from "../../components/PagesComponent/StartProject";
import SuccessStoriesHealthcarePortfolio from '../../components/PagesComponent/SuccessStoriesHealthcarePortfolio'
import CollaborationModels from '../../components/PagesComponent/CollaborationModels'
import FrequentlyAskedQuestionsHealthCare from '../../components/PagesComponent/FrequentlyAskedQuestionsHealthCare'

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
      <SuccessStoriesHealthcarePortfolio />
      <CollaborationModels />
      <FrequentlyAskedQuestionsHealthCare />
      <StartProject />
    
    </Layout>
  )
}

export default HealthCareAppDevelopment
