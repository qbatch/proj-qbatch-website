import React, { useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import  { Queries }  from "../constants/queries";
import styled from "styled-components";

import { media } from '../theme/media-mixins';
import Layout from "../components/Layout/layout";
import SEO from "../components/Seo";
import StartProject from "../components/PagesComponent/StartProject";
import Achievements from "../components/PagesComponent/Achievements";
import ProvenWorkExperience from "../components/PagesComponent/ProvenWorkExperience";
import ProblemSolving from "../components/PagesComponent/ProblumSolving";

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
const ContactUs = () => {

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 500)
    }, [])
  return (
    <Layout pageTitle="Contact Us">
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
              <Link className="pointer" to={`/contact/`}>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </BreadcrumbWrapper>
      <StartProject page="contact" />
      <Achievements page="contact" />
      <ProvenWorkExperience heading="Proven Work Experience" paragraph="They imagined it, we brought it to the world!" />
      <ProblemSolving
        className="contact-project-cost"
        text={<h2 className="text-h1 heading-break">Wondering how much your project would cost?</h2>}
      />
    </Layout>
  );
};
export const Head = () => {
  const blogQuery = Queries()
   const seoData = blogQuery.allStrapiContactUs.nodes[0]?.seo
  return (
    <SEO
      title={seoData?.metaTitle}
      description={seoData.metaDescription}
      keywords={seoData.keywords}
      language={seoData.language}
      robots={seoData.metaRobots}
      pathname={seoData.slug}
      image={seoData.metaimage[0].localFile.url}
    />
  )
}

export default ContactUs;
