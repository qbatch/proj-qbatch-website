import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Queries } from '../constants/queries'
import styled from "styled-components";
import { media } from '../theme/media-mixins';

import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";
import SEO from '../components/Seo'
import Breadcrumb from "../components/PagesComponent/Breadcrumb";

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
  const crumbs = [
    { pathname: '/', crumbLabel: 'Home', crumbSeparator: '>' },
    { pathname: '/terms-and-conditions/', crumbLabel: 'Terms and Conditions' }
  ];

  return (
    <Layout>
       <Breadcrumb crumbs={crumbs} wrapperClass="inner-page"/>
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


export default TermsAndConditions;
