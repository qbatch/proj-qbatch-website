import React from 'react'
import Layout from '../../components/Layout/layout'
import CtoBanner from '../../components/PagesComponent/PageBanner'
import { ImagineTravelAppData } from '../../constants'
import ImagineRetailExperience from '../../components/PagesComponent/ImagineRetailExperience'
import HospitalityAndTravelBusinesses from '../../components/PagesComponent/HospitalityAndTravelBusinesses'
import TravelAppSolutionsForYourPurposes from '../../components/PagesComponent/TravelAppSolutionsForYourPurposes'
import TheTravelLandscape from '../../components/PagesComponent/TheTravelLandscape'

const TravelAppDevelopment = () => {
  return (
    <Layout>
       <CtoBanner
        subheading="Travel App Development"
        heading="Let’s Create Epic Travel Experiences that Fly!"
        paragraph="Dull, non-value-adding travel experiences may drive your guests to competitors. We develop and design contemporary travel and hospitality apps that drive bookings and build guest loyalty. Get a free quote today and transform travel!"
        buttonText="Discuss Your Project"
        wrapperClass="hire-developer-banner"
        col1lg={7}
        className="d-flex justify-between"
        imgSrc="/travel-page-bg.svg"
        gridClass="justify-content-between w-100 align-items-center"
        // customCrumbs={[
        //   { crumbSeparator: '>', pathname: '/industries/', crumbLabel: 'Industries',  },
        //   {pathname: '/industries/retail-software-development', crumbLabel: 'Retail Software Development', crumbSeparator: '>' },
        // ]}
      />
      <ImagineRetailExperience button travelApp heading="Travel and Tours Industry may have Issues, but we’ve got Solutions" ImagineRetailExperienceData={ImagineTravelAppData} />
      <HospitalityAndTravelBusinesses />
      <TravelAppSolutionsForYourPurposes />
      <TheTravelLandscape />
    </Layout>
  )
}

export default TravelAppDevelopment
