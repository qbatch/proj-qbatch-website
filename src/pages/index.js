import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'

import Layout from '../components/Layout/layout'
import SEO from '../components/Seo'
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
  return (
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
    </Layout>
  )
}

export const Head = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      allStrapiHome {
        nodes {
          seo {
            structuredData {
              _context
              _type
              _contactPoint {
                _type
                areaServed
                availableLanguage
                contactType
                telephone
              }
              address {
                _type
                addressCountry
                addressLocality
                addressRegion
                postalCode
                streetAddress
              }
              email
              name
              sameAs
              potentialAction {
                _type
                query_input
                target
              }
            }
            metaimage {
              localFile {
                url
              }
            }
            language
            metaDescription
            metaRobots
            metaTitle
            keywords
          }
        }
      }
    }
  `)

  const seoData = data.allStrapiHome.nodes[0]?.seo;

  const schemaData = seoData.structuredData
    ? _.mapKeys(seoData.structuredData, (value, key) =>
        key.replace(/^_/, '@')
      )
    : {};

  return (
    <>
      <SEO
        title={seoData.metaTitle}
        description={seoData.metaDescription}
        keywords={seoData.keywords}
        language={seoData.language}
        robots={seoData.metaRobots}
        image={seoData.metaimage[0].localFile.url}
      >
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </SEO>
    </>
  )
};


export default IndexPage
