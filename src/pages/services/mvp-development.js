import React from 'react';
import { Script } from 'gatsby'

import { replaceUnderscoreWithAt } from '../../constants/Utils'
import SEO from "../../components/Seo";
import { Queries } from '../../constants/queries'
import Layout from "../../components/Layout/layout";
import MvpTypes from '../../components/PagesComponent/MvpTypes';
import MvpBanner from '../../components/PagesComponent/MvpBanner';
import MvpDevelopmentService from '../../components/PagesComponent/MvpDevelopmentService';
import MvpTestedApproch from '../../components/PagesComponent/MvpTestedApproch';
import IdeaValidtion from '../../components/PagesComponent/IdeaValidation';
import MvpBoxes from '../../components/PagesComponent/MvpBoxes';
import Slider from '../../components/UiComponent/Slider'
import BewareFriend from '../../components/PagesComponent/BewareFriend';
import GuaranteeBanner from '../../components/PagesComponent/GuaranteeBanner';
import ProvenWorkExperience from '../../components/PagesComponent/ProvenWorkExperience'
import Collaboration from "../../components/PagesComponent/Collaboration";
import InnerBanner from '../../components/PagesComponent/InnerBanner';
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";

import {
  mvpDevFaq,
  mvpSliderItems,
  mvpBoxes1,
  mvpBoxes2,
  mvpDevService
} from "../../constants";

const MvpDev = () => {
  return (
    <Layout>
      <MvpBanner
        subheading="MVP Development Company"
        heading={<>Plan, Test, & Launch YOUR MVP in less than <span>3 months</span></>}
        paragraph="Hundreds of startups, enterprises, and entrepreneurs have trusted us for launching good MVPs in the toughest sectors. We’ve done it before, we can do it again!"
        buttonText="Let’s Get Started"
        col1lg={7}
        col2lg={5}
        className="d-flex align-items-center justify-content-start"
        wrapperClass="product-design-banner"
        customCrumbs={[
          { pathname: '/services/', crumbLabel: 'Services', crumbSeparator: '>' },
          { pathname: '/services/mvp-development/', crumbLabel: 'Software Product Development' },
        ]}
      />
      <MvpTestedApproch />
      <IdeaValidtion />
      <MvpBoxes
        boxData={mvpBoxes1}
        heading="Who Does it Help?"
        paragraph="MVP assesses if your assumptions hold potential, gathers user feedback to fix primary issues, rapid-tests iterations for a faster launch, and saves money and time for various cases:"
      />
      <InnerBanner
        className="build-mvp-app"
        heading="Over 70% of Startups Fail Due to Rapid Expansion."
        caption="Qbatch’s cautious MVP app development services deliver a path to incremental growth, preventing failures and misfortunes."
        captionClass="text-h4"
        isButton
        btnText="Book No-Risk, Free Discovery Call"
        btnAlign="center"
      />
      <MvpBoxes
        boxData={mvpBoxes2}
        heading="Perks of MVP Development with Qbatch"
      />
      <MvpDevelopmentService
        heading="Qbatch’s MVP Development Services For You"
        serviceData={mvpDevService}
      />
      <InnerBanner
        className="build-mvp-app"
        heading="Let’s Build Your MVP App Today"
        caption="We’re excited to explore your interesting idea. Contact us and we’ll get back to you within 48 hrs for a free Discovery Call."
        captionClass="text-h4"
        isButton
        btnText="Book Discovery Call"
        btnAlign="center"
      />
      <MvpTypes />
      <Slider
        heading="Lost to Launched"
        paragraph={<><span className='text-h4 inner-heading-paragraph'>Our Mobile App Development Process Enroute Success</span> Our seasoned product managers are ready to guide you through every stage, from idea validation, and developing initial prototypes to executing tests and delivering tangible results.</>}
        data={mvpSliderItems}
        maxWidth="692px"
        width="390px"
        align='center'
        className='mvp-slider m-auto'
      />
      <BewareFriend />
      <GuaranteeBanner />
      <ProvenWorkExperience
        heading="Featured Projects"
        exploreBtn
      />
      <Collaboration />
      <InnerBanner
        className="mvp-wrapper"
        heading="Still not sure about your idea?"
        headingSize="text-h1"
        caption="The world needs your idea, let your MVP prove it."
        isButton
        btnText="Launch My Idea"
      />
      <FaqSection faqQuestion={mvpDevFaq} />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const mvpDevData = Queries()
  const seoData = mvpDevData?.allStrapiMvpDev?.nodes[0]?.seo
  const schemaData = replaceUnderscoreWithAt(seoData?.structuredData)
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData?.metaDescription}
      keywords={seoData?.keywords}
      language={seoData?.language}
      robots={seoData?.metaRobots}
      image={seoData?.metaimage[0].localFile.url}
      pathname={`/services/${seoData?.slug}/`}
    >
      {schemaData && <Script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>}
    </SEO>
  )
}

export default MvpDev;
