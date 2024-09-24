import React, { lazy } from 'react';

import Layout from "../../components/Layout/layout";
import SEO from '../../components/Seo';
import { Queries } from '../../constants/queries';

const EventsBanner = lazy(() => import("../../components/PagesComponent/EventsSmallBanner"));
const EventHighlight = lazy(() => import("../../components/PagesComponent/EventHighlight"));
const RecapEvents = lazy(() => import("../../components/PagesComponent/RecapEvents"));
const PreviousEvents = lazy(() => import("../../components/PagesComponent/PreviousEvents"));
const PressRelease = lazy(() => import("../../components/PagesComponent/PressRelease"));
const StartProject = lazy(() => import("../../components/PagesComponent/StartProject"));

const Index = () => {
  return (
    <Layout>
     <EventsBanner />
     <EventHighlight />
     <RecapEvents />
     <PreviousEvents />
     <PressRelease />
     <StartProject />
    </Layout>
  )
};

export const Head = () => {
  const eventsData = Queries()
  const seoData = eventsData?.allStrapiEvent?.nodes[0]?.seo
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
};

export default Index;
