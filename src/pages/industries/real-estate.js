import React, { lazy } from 'react';

import Layout from '../../components/Layout/layout';
import { realEstateIndustryData, properyBusinessData1, properyBusinessData2 } from '../../constants';

const Banner = lazy(() => import('../../components/PagesComponent/PageBanner'));
const RealEstateIndustry = lazy(() => import('../../components/PagesComponent/EdTechPotential'));
const RealEstateBusiness = lazy(() => import('../../components/PagesComponent/RealEstateBusiness'));
const PropertyBusiness = lazy(() => import('../../components/PagesComponent/InstitutionsBenefiting'));
const RealEstateITSolutions = lazy(() => import('../../components/PagesComponent/RealEstateITSolutions'));

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
    </Layout>
  )
}

export default RealEstate;
