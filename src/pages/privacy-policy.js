import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Queries } from '../constants/queries'


import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";
import SEO from '../components/Seo'


const PrivacyPolicy = () => {
  const data = useStaticQuery(graphql`
    query PrivacyQuery {
      allStrapiPrivacyPolicyContentTextnode {
        nodes {
          content
        }
      }
    }
  `);
  const privacyData = data.allStrapiPrivacyPolicyContentTextnode.nodes[0];

  return (
     <Layout>
        <StaticPage data={privacyData} />
     </Layout>
  );
};

export const Head = () => {
  const privacyPolicySeo = Queries()

  const seoData = privacyPolicySeo?.allStrapiPrivacyPolicy?.nodes?.[0]?.seo;

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
      pathname={`/${seoData.slug}`}
    />
  )
}


export default PrivacyPolicy;
