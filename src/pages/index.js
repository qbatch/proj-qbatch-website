import React, { Suspense, lazy } from 'react';
import { Script } from 'gatsby';

import { Queries } from '../constants/queries';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo';
import { replaceUnderscoreWithAt } from '../constants/Utils';
// import EventsBanner from '../components/PagesComponent/EventsBanner'
const DedicatedDevelopment = lazy(() => import('../components/PagesComponent/DedicatedDeveloper'));
const Achievements = lazy(() => import('../components/PagesComponent/Achievements'));
const WhatWeCanDo = lazy(() => import('../components/PagesComponent/WhatWeCanDo'));
const Expertise = lazy(() => import('../components/PagesComponent/Expertise'));
const ProblumSolving = lazy(() => import('../components/PagesComponent/ProblumSolving'));
const ProvenWorkExperience = lazy(() => import('../components/PagesComponent/ProvenWorkExperience'));
const HappilyMaking = lazy(() => import('../components/PagesComponent/MakingIndustries'));
const WhatDifferenceQbatchMaking = lazy(() => import('../components/PagesComponent/WhatDifferenceQbatchMaking'));
const Collaboration = lazy(() => import('../components/PagesComponent/Collaboration'));
const Awards = lazy(() => import('../components/PagesComponent/Awards'));
const CreativeIntelligence = lazy(() => import('../components/PagesComponent/CreativeIntelligence'));
const StartProject = lazy(() => import('../components/PagesComponent/StartProject'));

const IndexPage = () => {
  const homeData = Queries()
  const { schema } = homeData.allStrapiHome.nodes[0] || {}
  const schemaData = schema
  const transformedObject = replaceUnderscoreWithAt(schemaData);

  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <DedicatedDevelopment />
          <Achievements page="home" />
          <WhatWeCanDo />
          <Expertise />
          <ProblumSolving
            text={
              <p className="text-h2 quote mb-0">
                We go beyond traditional problem-solving techniques and old-fashioned promises to assist visionaries like
                you to transform on a massive scale<br></br> — <b>with logic, innovation, and emotion.</b>
              </p>
            }
          />
          <ProvenWorkExperience
            heading="Proven Work Experience"
            paragraph="Innovators from across the industry have trusted Qbatch to build high-impact products."
            componentName="index"
          />
          <HappilyMaking />
          <WhatDifferenceQbatchMaking
            heading="What Difference is Qbatch Making?"
            paragraph="We always present problems with tangible solutions."
          />
          <Awards maxCols={8} />
          <Collaboration largeHeading={true} />
          <CreativeIntelligence />
          <StartProject />
          {/* <EventsBanner
          eventLogo1='/white-label.svg'
          eventName1='White Label World Expo'
          eventDate1='February 27 - 28, 2024'
          eventBoothNo1='WL1546'
          eventLogo2='/prosper-show.svg'
          eventName2='Prosper Show'
          eventDate2='March 4 - 6, 2024'
          eventBoothNo2='814'
          /> */}
        </Suspense>
      </Layout>
      <Script type="application/ld+json" async>
        {transformedObject
          .filter((x) => !x.visibilityIn)
          .map((data, i) => (
              JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)
          ))}
      </Script>
    </>
  )
}
export const Head = () => {
  const homeData = Queries()
  const { seo, schema } = homeData.allStrapiHome.nodes[0] || {}
  const seoData = seo
  const schemaData = schema
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
          <Script key={i} type="application/ld+json" async>
            {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
          </Script>
        ))}
    </SEO>
  )
}

export default IndexPage
