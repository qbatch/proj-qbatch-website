import React from 'react';
import { Script } from 'gatsby'
import {replaceUnderscoreWithAt} from '../../constants/Utils'
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";

import Slider from '../../components/UiComponent/Slider'
import BewareFriend from '../../components/PagesComponent/BewareFriend';
import GuaranteeBanner from '../../components/PagesComponent/GuaranteeBanner';
import ProvenWorkExperience from '../../components/PagesComponent/ProvenWorkExperience'
import Collaboration from "../../components/PagesComponent/Collaboration";
import InnerBanner from '../../components/PagesComponent/InnerBanner';
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";

import {
  mobileAppFaq,
  mvpSliderItems,
} from "../../constants";



const mvp = () => {
  return (
    <Layout>
      <Slider
        heading="Lost to Launched"
        paragraph={<><span className='text-h4 inner-heading-paragraph'>Our Mobile App Development Process Enroute Success</span> Our seasoned product managers are ready to guide you through every stage, from idea validation, and developing initial prototypes to executing tests and delivering tangible results.</>}
        data={mvpSliderItems}
        maxWidth= "692px"
        width="390px"
        align='center'
        className='mvp-slider m-auto'
        btnText="Let’s Get Started"
        btnClass="m-auto mt-5"
      />
      <BewareFriend/>
      <GuaranteeBanner/>
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
      <FaqSection faqQuestion={mobileAppFaq} />
      <StartProject />
    </Layout>
  );
};

export const Head = () => {
  const mobileAppData = Queries()

const seoData = mobileAppData.allStrapiMobileApp.nodes[0]?.seo
const schemaData = replaceUnderscoreWithAt(seoData?.structuredData)
return (
  <SEO
    title={seoData?.metaTitle}
    description={seoData.metaDescription}
    keywords={seoData.keywords}
    language={seoData.language}
    robots={seoData.metaRobots}
    image={seoData.metaimage[0].localFile.url}
    pathname={`/services${seoData.slug}`}
  >
       {schemaData &&   <Script  type="application/ld+json">
            {JSON.stringify(schemaData)}
          </Script> }
    </SEO>
)
}

export default mvp;