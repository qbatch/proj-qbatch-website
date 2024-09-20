import React, { lazy } from 'react';

import { Queries } from '../constants/queries';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo';
import { replaceUnderscoreWithAt } from '../constants/Utils';
import { weWorkStoriesData } from '../constants';

const HomeBanner = lazy(() => import('../comp\onents/PagesComponent/HomeBanner'));
const AchievementsNew = lazy(() => import('../components/PagesComponent/AchievementsNew'));
const WhatCanWeDoNew = lazy(() => import('../components/PagesComponent/WhatCanWeDoNew'));
const ProblumSolving = lazy(() => import('../components/PagesComponent/ProblumSolving'));
const SuccessStories = lazy(() => import('../components/PagesComponent/SuccessStoriesNew'));
const CollaborationNew = lazy(() => import('../components/PagesComponent/CollaborationNew'));
const CreativeIntelligence = lazy(() => import('../components/PagesComponent/CreativeIntelligence'));
const StartProject = lazy(() => import('../components/PagesComponent/StartProject'));

const IndexPage = () => {
  const homeData = Queries();
  const { schema } = homeData.allStrapiHome.nodes[0] || {};
  const schemaData = schema;
  const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <>
      <Layout>
        <HomeBanner />
        <WhatCanWeDoNew />
        <AchievementsNew />
        <ProblumSolving
          text={
            <p className="text-h2 quote mb-0">
              We go beyond traditional problem-solving techniques and old-fashioned promises to assist visionaries like
              you to transform on a massive scale<br></br> — <b>with logic, innovation, and emotion.</b>
            </p>
          }
        />
        <SuccessStories data={weWorkStoriesData} />
        <CollaborationNew />
        <CreativeIntelligence />
        <StartProject />
      </Layout>
      <script type="application/ld+json">
        {transformedObject
          .filter((x) => !x.visibilityIn)
          .map((data, i) => (
              JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)
          ))}
      </script>
    </>
  );
};

export const Head = () => {
  const homeData = Queries();
  const { seo, schema } = homeData.allStrapiHome.nodes[0] || {};
  const seoData = seo;
  const schemaData = schema;
  const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      image={seoData.metaimage[0]?.localFile?.url}
    >
      {transformedObject
        .filter((x) => x.visibilityIn)
        .map((data, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </script>
        ))}
    </SEO>
  );
};

export default IndexPage;
