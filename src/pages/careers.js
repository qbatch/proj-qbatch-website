import React, { lazy } from 'react'
import Layout from '../components/Layout/layout'
import { careerCardData } from '../constants'
const CtoBanner = lazy(() => import('../components/PagesComponent/PageBanner'));
const LifeAtQbatch = lazy(() => import('../components/PagesComponent/LifeAtQbatch'));
const YourWellBeingMattersQbatch = lazy(() => import('../components/PagesComponent/YourWellBeingMattersQbatch'));
const ShapeFutureQbatch = lazy(() => import('../components/PagesComponent/ShapeFutureQbatch'));
const Clients = lazy(() => import("../components/PagesComponent/Careers"));
const WhatCanHelp = lazy(() => import('../components/PagesComponent/WhatCanYouHelp/index'));
const Career = () => {
  return (
    <Layout>
       <CtoBanner
        subheading="Careers"
        heading="Join Our Team"
        paragraph="At Qbatch, we're more than just a tech company — a community of innovators, dreamers, and creators. Your ideas matter, your creativity is celebrated, and your growth is our priority. "
        wrapperClass="hire-developer-banner"
        col1lg={7}
        scroll
        scrollId="#new-id"
        className="d-flex justify-between"
        imgSrc="/career-banner-image.svg"
        buttonText="See Open Positions"
        gridClass="justify-content-between w-100 align-items-center"
        customCrumbs={[
          { pathname: '/home/', crumbLabel: 'Home', crumbSeparator: '>', pathname: '/career/', crumbLabel: 'Careers',  },
        ]}
      />
      <WhatCanHelp className="new-cards" heading="Our Commitment to You" helpingCardData={careerCardData} />
      <LifeAtQbatch />
      <YourWellBeingMattersQbatch />
      <ShapeFutureQbatch />
      <Clients id="new-id" />
    </Layout>
  )
}

export default Career;
