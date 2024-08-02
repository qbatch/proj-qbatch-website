import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Queries } from '../constants/queries'

import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";
import SEO from '../components/Seo'
import Breadcrumb from "../components/PagesComponent/Breadcrumb";

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
  const crumbs = [
    { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
    { pathname: '/privacy-policy/', crumbLabel: 'Privacy Policy' }
  ];

  return (
    <Layout>
        <Breadcrumb crumbs={crumbs} wrapperClass="inner-page"/>
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
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={keywords}
      language={seoData.language}
      robots={metaRobots}
      image={metaimage}
      pathname={`/${seoData.slug}/`}
    />
  )
}


export default PrivacyPolicy;
