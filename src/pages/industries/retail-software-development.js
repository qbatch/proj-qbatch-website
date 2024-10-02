import React, { lazy } from 'react'
import Layout from '../../components/Layout/layout'
const CtoBanner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const RetailersFaceTheChallenge = lazy(() => import('../../components/PagesComponent/RetailersFaceTheChallenge'));
const WhatDifferenceQbatchMaking = lazy(() => import('../../components/PagesComponent/WhatDifferenceQbatchMaking'));
const PowerfulRetailSolutions = lazy(() => import('../../components/PagesComponent/PowerfulRetailSolutions'));
const BuildRetailOpportunities = lazy(() => import('../../components/PagesComponent/BuildRetailOpportunities'));
const SuccessStories = lazy(() => import('../../components/PagesComponent/SuccessStoriesNew'));
const QbatchCoreRetailSoftwareSolutions = lazy(() => import('../../components/PagesComponent/Qbatch’sCoreRetailSoftwareSolutions'));
const Slider = lazy(() => import('../../components/UiComponent/Slider'));
const ImagineRetailExperience = lazy(() => import('../../components/PagesComponent/ImagineRetailExperience'));
const InnovativeRetailSolutions = lazy(() => import('../../components/PagesComponent/InnovativeRetailSolutions'));
const LetsReimagineRetailTogether = lazy(() => import('../../components/PagesComponent/LetsReimagineRetailTogether'));
const ExploreOurIndustrySpecificRetailPotential = lazy(() => import('../../components/PagesComponent/ExploreOurIndustrySpecificRetailPotential'));
const FeelingLikeYouAreInItAlone = lazy(() => import('../../components/PagesComponent/FeelingLikeYouAreInItAlone'));
const QbatchIsEmpoweringRetailers = lazy(() => import('../../components/PagesComponent/QbatchIsEmpoweringRetailers'));
const WhyTrustQbatch = lazy(() => import('../../components/PagesComponent/WhyTrustQbatch'));
const CollaborationNew = lazy(() => import('../../components/PagesComponent/CollaborationNew'));
const StartProject = lazy(() => import('../../components/PagesComponent/StartProject'));

const StartYourHealthTech = lazy(() => import('../../components/PagesComponent/StartYourHealthTech'));
const FaqSection = lazy(() => import('../../components/PagesComponent/Faq'));
import { retailData, RetailSliderData, RetailSoftwareDevelopmentFaq, SimplifyYourRetailData, weWorkStoriesData } from '../../constants'



const RetailSoftwareDevelopment = () => {
  return (
    <Layout>
      <CtoBanner
        subheading="Retail Software Development"
        heading="Guiding Your Way to Successful Retail with Insight and Expertise"
        paragraph="Now is the time to responsibly reset retail — and serve your customers, workforce, and community better. Let’s leverage digital and physical retail IT solutions using the latest tech, delivering smooth mobile experiences and facilitating more humans every day."
        buttonText="Let’s Work Together"
        wrapperClass="hire-developer-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/retail-banner-image.svg"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries', },
          { pathname: '/industries/retail-software-development', crumbLabel: 'Retail Software Development', crumbSeparator: '>' },
        ]}
      />
      <RetailersFaceTheChallenge />
      <WhatDifferenceQbatchMaking retailData={retailData} retail heading="No more Retail struggles, we got you covered." />
      <PowerfulRetailSolutions />
      <BuildRetailOpportunities />
      <SuccessStories heading="Success Stories from Our Travel and Tour Industry Portfolio" data={weWorkStoriesData} />
      <QbatchCoreRetailSoftwareSolutions />
      <Slider
        data={RetailSliderData}
        heading="Humanizing Healthcare: Qbatch Software Solutions"
        paragraph=""
        seconedHeading=""
        width="300px"
        height="200px"
        className="retail-slider-wrapper"
        btnClass="custom-btn"
        dividerClass="custom-divider"
        maxWidth="100%"
      />
      <ImagineRetailExperience />
      <InnovativeRetailSolutions />
      <LetsReimagineRetailTogether />
      <ExploreOurIndustrySpecificRetailPotential />
      <FeelingLikeYouAreInItAlone
        heading="Feeling like you're in it alone?"
        desc="We're your retail software partner, here to simplify your workflow >>>"
        btnText='Let’s Get Started'
      />
      <StartYourHealthTech className="simplify-your-retail" heading="Simplify your Retail Journey in 3 simple steps" StartYourHealthTechData={SimplifyYourRetailData} />
      <QbatchIsEmpoweringRetailers />
      <WhyTrustQbatch />
      <CollaborationNew />
      <FaqSection className="health-care-faq" faqQuestion={RetailSoftwareDevelopmentFaq} />
      <StartProject />
    </Layout>
  )
}

export default RetailSoftwareDevelopment;
