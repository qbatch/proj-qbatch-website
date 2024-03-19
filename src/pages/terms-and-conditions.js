import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Queries } from '../constants/queries'

import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";
import SEO from '../components/Seo'

const TermsAndConditions = () => {
  const data = useStaticQuery(graphql`
    query TermsQuery {
      allStrapiTermsAndConditionContentTextnode {
        nodes {
          content
        }
      }
    }
  `);
  const termsData = data.allStrapiTermsAndConditionContentTextnode.nodes[0];

  return (
    <Layout>
      <StaticPage data={termsData} />
    </Layout>
  );
};

export const Head = () => {
  const termsConditions = Queries()

  const seoData = termsConditions?.allStrapiTermsAndCondition?.nodes?.[0]?.seo;

  if (!seoData) {
    return null; 
  }

  const metaRobots = seoData.metaRobots || ''; 
  const keywords = seoData.keywords || [];
  const metaimage = seoData.metaimage?.localFile?.url || '';

  return (
    <SEO
      title={seoData.metaTitle}
      description={seoData.metaDescription}
      keywords={keywords}
      language={seoData.language}
      robots={metaRobots}
      image={metaimage}
      pathname={`/${seoData.slug}/`}
    />
  )
}


export default TermsAndConditions;
