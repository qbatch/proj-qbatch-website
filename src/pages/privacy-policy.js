import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Queries } from '../constants/queries'
import styled from "styled-components";
import { media } from '../theme/media-mixins';

import Layout from "../components/Layout/layout";
import StaticPage from "../components/PagesComponent/StaticPage";
import SEO from '../components/Seo'

const BreadcrumbWrapper = styled.div`
  margin: auto;
  width: 100%;
  background: #001A33;
  padding: 0;
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 12px 0;
    padding: 16px 96px;
    max-width: 1600px;
    margin: auto;
    overflow: scroll;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      white-space: nowrap;
    }
    ${media.lg`
      padding: 16px 80px;
    `}
    ${media.md`
      padding: 16px 60px;
    `}
    ${media.sm`
      padding: 16px 40px;
    `}
    ${media.xs`
      padding: 16px 24px;
    `}
  }
`;

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
      <BreadcrumbWrapper>
        <div className="breadcrumb">
          <ul className="d-flex gap-2 ps-0">
            <li>
              <Link className="pointer" to="/">
                <span>Home</span>
                <span className="ps-1">{'>'}</span>
              </Link>
            </li>
            <li>
              <Link className="pointer" to={`/privacy-policy/`}>
                <span>Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>
      </BreadcrumbWrapper>
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
