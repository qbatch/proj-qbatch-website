import React from 'react'
import { Script } from 'gatsby'
import { Queries } from '../constants/queries'
import Layout from '../components/Layout/layout'
import SEO from '../components/Seo'
import EventsBanner from '../components/PagesComponent/EventsBanner'
import DedicatedDevelopment from '../components/PagesComponent/DedicatedDeveloper'
import Achievements from '../components/PagesComponent/Achievements'
import WhatWeCanDo from '../components/PagesComponent/WhatWeCanDo'
import Expertise from '../components/PagesComponent/Expertise'
import ProblumSolving from '../components/PagesComponent/ProblumSolving'
import ProvenWorkExperience from '../components/PagesComponent/ProvenWorkExperience'
import HappilyMaking from '../components/PagesComponent/MakingIndustries'
import WhatDifferenceQbatchMaking from '../components/PagesComponent/WhatDifferenceQbatchMaking'
import Collaboration from '../components/PagesComponent/Collaboration'
import Awards from '../components/PagesComponent/Awards'
import CreativeIntelligence from '../components/PagesComponent/CreativeIntelligence'
import StartProject from '../components/PagesComponent/StartProject'

const IndexPage = () => {
  const homeData = Queries()
  const { seo, schema } = homeData.allStrapiHome.nodes[0] || {}
  const seoData = seo
  const schemaData = schema
  function replaceUnderscoreWithAt(obj) {
    if (obj && typeof obj === 'object') {
      if (Array.isArray(obj)) {
        return obj.map((item) => replaceUnderscoreWithAt(item))
      } else {
        const updatedObj = {}
        for (const [key, value] of Object.entries(obj)) {
          updatedObj[key.replace(/^_/, '@')] = replaceUnderscoreWithAt(value)
        }
        return updatedObj
      }
    } else {
      return obj
    }
  }
  const transformedObject = replaceUnderscoreWithAt(schemaData)
  return (
    <>
      <Script type="application/ld+json">
        {transformedObject
          .filter((x) => !x.visibilityIn)
          .map((data, i) => (
              JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)
          ))}
      </Script>
      <Layout>
        <DedicatedDevelopment />
        <Achievements page="home" />
        <WhatWeCanDo />
        <Expertise />
        <ProblumSolving
          text={
            <p className="text-h2 quote">
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
        <Collaboration />
        <CreativeIntelligence />
        <StartProject />
        <EventsBanner
         eventLogo1='/white-label.svg'
         eventName1='White Label Expo'
         eventDate1='February 27 - 28, 2024'
         eventBoothNo1='WL1546'
         eventLogo2='/prosper-show.svg'
         eventName2='Prosper Show'
         eventDate2='March 4 - 6, 2024'
         eventBoothNo2='814'
        />
      </Layout>
      <SEO
        title={seoData.metaTitle}
        description={seoData.metaDescription}
        keywords={seoData.keywords}
        language={seoData.language}
        robots={seoData.metaRobots}
        image={seoData.metaimage[0]?.localFile?.url}
      >
        {transformedObject
          .filter((x) => x.visibilityIn)
          .map((data, i) => (
            <Script key={i} type="application/ld+json">
              {JSON.stringify(data.childStrapiComponentSchemaSchemaStructureddataJsonnode)}
            </Script>
          ))}
      </SEO>
    </>
  )
}

export default IndexPage
