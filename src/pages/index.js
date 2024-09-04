import React, { lazy } from 'react';
import { Queries } from '../constants/queries';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo';
import { replaceUnderscoreWithAt } from '../constants/Utils';

// const DedicatedDevelopment = lazy(() => import('../components/PagesComponent/DedicatedDeveloper'));
const HomeBanner = lazy(() => import('../components/PagesComponent/HomeBanner'));
// const Achievements = lazy(() => import('../components/PagesComponent/Achievements'));
const AchievementsNew = lazy(() => import('../components/PagesComponent/AchievementsNew'));
// const WhatWeCanDo = lazy(() => import('../components/PagesComponent/WhatWeCanDo'));
const WhatCanWeDoNew = lazy(() => import('../components/PagesComponent/WhatCanWeDoNew'));
// const Expertise = lazy(() => import('../components/PagesComponent/Expertise'));
const ProblumSolving = lazy(() => import('../components/PagesComponent/ProblumSolving'));
// const ProvenWorkExperience = lazy(() => import('../components/PagesComponent/ProvenWorkExperience'));
const SuccessStories = lazy(() => import('../components/PagesComponent/SuccessStoriesNew'));
// const HappilyMaking = lazy(() => import('../components/PagesComponent/MakingIndustries'));
// const WhatDifferenceQbatchMaking = lazy(() => import('../components/PagesComponent/WhatDifferenceQbatchMaking'));
// const Collaboration = lazy(() => import('../components/PagesComponent/Collaboration'));
const CollaborationNew = lazy(() => import('../components/PagesComponent/CollaborationNew'));
// const Awards = lazy(() => import('../components/PagesComponent/Awards'));
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
        {/* <DedicatedDevelopment /> */}
        <HomeBanner />
        <WhatCanWeDoNew />
        <AchievementsNew />
        {/* <Achievements page="home" /> */}
        {/* <WhatWeCanDo /> */}
        {/* <Expertise /> */}
        <ProblumSolving
          text={
            <p className="text-h2 quote mb-0">
              We go beyond traditional problem-solving techniques and old-fashioned promises to assist visionaries like
              you to transform on a massive scale<br></br> — <b>with logic, innovation, and emotion.</b>
            </p>
          }
        />
        <SuccessStories />
        {/* <ProvenWorkExperience
          heading="Proven Work Experience"
          paragraph="Innovators from across the industry have trusted Qbatch to build high-impact products."
          componentName="index"
        /> */}
        {/* <HappilyMaking /> */}
        {/* <WhatDifferenceQbatchMaking
          heading="What Difference is Qbatch Making?"
          paragraph="We always present problems with tangible solutions."
        /> */}
        {/* <Awards maxCols={8} /> */}
        {/* <Collaboration largeHeading={true} /> */}
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
