import React from 'react';
import { Script } from 'gatsby'
import {replaceUnderscoreWithAt} from '../../constants/Utils'
import { Queries } from '../../constants/queries'
import SEO from "../../components/Seo";
import Layout from "../../components/Layout/layout";

import Collaboration from "../../components/PagesComponent/Collaboration";
import InnerBanner from '../../components/PagesComponent/InnerBanner';
import FaqSection from "../../components/PagesComponent/Faq";
import StartProject from "../../components/PagesComponent/StartProject";

import {
  mobileAppFaq,
} from "../../constants";



const mvp = () => {
  return (
    <Layout>
      <Collaboration />
      <InnerBanner
        className="mvp-wrapper"
        heading="Still not sure about your idea?"
        headingSize="text-h1"
        caption="The world needs your idea, let your MVP prove it."
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